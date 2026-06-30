---
created: 2026-06-30
lastUpdated: 2026-06-30
---

# Reliable cohort filter (handling reused login IDs)

Claude description: Event-level cohort filter for the 2510/2520 analysis that correctly separates students who share a reused numeric login ID across cohorts. Explains why tagging cohort by a person's latest name drops two 2510 students, gives a corrected SQL view that tags each event by the name frozen on it at ingestion, and shows how to point existing PostHog insights at it. Load when building or correcting a cohort-scoped insight, or when 2510 student or usage counts look lower than expected.

Load when: building a cohort-scoped insight, correcting an existing one, or investigating why 2510 counts look low.

## About this document

This is a supervisor-side cross-check that turned into a shared fix. It builds directly on two things you already documented: the note in `current-views.md` that one `person_id` can carry several names (from mid-semester renames), and the reused-login cases in `data-discrepancies.md` (logins 26 and 28). It connects those to a specific effect on the cohort counts and gives a corrected filter you can drop into your insights. It was drafted with Claude and reviewed by the supervisor.

## The issue in one sentence

Because some numeric login IDs were reused across cohorts, tagging each student's cohort by their most recent name moves the earlier (2510) student into 2520 and removes them from the 2510 roster.

## Why it happens

The site reused short numeric login IDs across terms, so a single PostHog `person_id` can hold two students:

- Login 26: A0324615J (Wong Zhao Wu, 2510) then AshleyGohYuTing (2520)
- Login 28: A0317838R (Sim Thian Juea Reiner, 2510) then BansalNaman (2520)

`cohort_25` assigns each person to a cohort using `persons.properties.name`, which is the name from the person's most recent event. For these two logins the most recent name is the 2520 student, so the person is tagged 2520, and the 2510 student is never listed. `actual_user_events` then keeps only events whose name is in `cohort_25`, so the 2510 student's events drop out as well.

The effect, confirmed against the live data on 2026-06-30:

- `cohort_25` returns 22 students for 2510 (should be 24) and 23 for 2520.
- Any insight built on `cohort_25` / `actual_user_events` undercounts 2510 by 2 students and about 340 pageviews (roughly 4.6 percent), since Wong = 106 and Sim = 234 pageviews.
- 2520 totals are not inflated: the two students' Fall events are dropped, not relabeled into 2520, which is why 2520 numbers look correct.

This is the same reuse you already flagged; the new part is that the latest-name step turns it into a quiet 2510 undercount.

## The approach: tag cohort at the event level

PostHog runs in person-on-events mode, which freezes `person.properties.name` on each event at the moment it is captured. So every one of Wong's Fall events is stamped `A0324615J` and every one of Ashley's Spring events is stamped `AshleyGohYuTing`, regardless of who logged in later. Assigning cohort from the name on each event (rather than from the person's latest name) keeps the two students separate.

Why not use the event date instead? Date works for most events but fails at the term boundary: Sim's 2510 events run to 2026-01-15, which is inside 2520's term (it starts Jan 12), so a date rule would misassign those events. The event-level name has no such overlap, so it is the more reliable key. Date is useful as a sanity check, not as the primary rule.

## The filter

Save this as a PostHog SQL view (for example `cohort_events`). It tags each in-scope event with the correct cohort and applies the same internal-user and background-event filters as `actual_user_events`.

```sql
-- Per-event cohort assignment for NTW2029 (2510 + 2520).
-- Tags each event by the student name frozen on it at ingestion, so a reused
-- login ID resolves to the right student per event, not to whoever logged in last.
SELECT *
FROM (
    SELECT
        timestamp,
        event,
        distinct_id,
        person_id,
        person.properties.name      AS student,     -- ingestion-time name = the identity for THIS event
        properties.$pathname        AS pathname,
        properties.$current_url     AS current_url,
        multiIf(
            person.properties.name IN (
                -- 2510 (Fall 2025), stored as matric codes (24 students)
                'A0282470E','A0288347M','A0300401J','A0303153W','A0307571E',
                'A0311156R','A0317661A','A0317697L','A0317739R','A0317745X',
                'A0317752B','A0317766R','A0317811J','A0317834Y','A0317838R',
                'A0317841A','A0320805N','A0322663H','A0323016W','A0323034W',
                'A0324615J','A0325353J','A0336673W','A0336847N'
            ), '2510',
            person.properties.name IN (
                -- 2520 (Spring 2026), stored CamelCase (23 students; Marcus excluded as a dropped student)
                'AshleyGohYuTing','BansalNaman','BennettHoChengXun','ChanEugene',
                'ChiaChengXuXavier','ChowdhuryTia','DishaShivaraman','EthanDhirenDivyanathan',
                'GuoRuiTing','GuptaNavya','IanTayQiShen','JoshuaSimJunHui','KimAmin',
                'KimYongchan','KongXinYang','LeeJaeYan','LimJingYuan','LinBo-Ruei',
                'NgYeeXiang','RenZhaoyi','SatapathyPulastya','SeetohYihKeet','YeohKhangSian'
            ), '2520',
            NULL
        ) AS cohort
    FROM events
    WHERE timestamp >= '2025-08-01' AND timestamp < '2026-06-01'
      AND event NOT IN ('$set', '$delete_person_property', '$identify', '$web_vitals')
      AND (current_url IS NULL OR current_url NOT ILIKE '%localhost%')
)
WHERE cohort IS NOT NULL
```

This returns 24 students for 2510 and 23 for 2520. The roster is the explicit list of the actual stored name strings, so 2420 students and anonymous users are excluded by not matching, and the dropped student (Marcus Wee Yu Zhe) is left out by the project rule that dropped students are not counted. If a student is added or a name changes, update the list here.

## How to use it

- Filter or group by the `cohort` column for any 2510-versus-2520 split.
- For per-student counts, group by `student` (the frozen name), not by `person_id` or `distinct_id`. The reused logins share one `person_id`, so grouping by person would merge the two students again; grouping by `student` keeps them separate.
- `$pageview` is retained, so pageview-based counts (frequency, popularity, timing) work directly on this view.

## Updating your existing PostHog insights

1. Create the view above as a saved SQL view (Data warehouse, Views), e.g. `cohort_events`.
2. For a new insight, build it on `cohort_events` instead of `events` or `actual_user_events`.
3. For an existing insight that draws on `actual_user_events` or on the `cohort_25` cohort tag, open it in the SQL editor and repoint its source to `cohort_events` (or, for a permanent fix, rebuild `cohort_25` / `actual_user_events` so their cohort membership comes from the event-level tag here rather than from the latest-name step). Keep the same metric and breakdown, then save.
4. After repointing, 2510 insights will rise by the two recovered students (about +340 pageviews); 2520 insights should be unchanged.
5. Check any insight that groups students by `person_id`: switch the grouping to `student` so the reused logins stay separate.

## Scope and caveats

- Dropped students are excluded by project rule; Marcus Wee Yu Zhe is the current case (left out of the 2520 list above).
- This filter fixes cohort assignment and per-student identity. It does not address the separate trailing-slash and page-rename issues that split per-page counts; normalize those separately when doing per-page work.
- Renames within a single cohort are handled automatically, since each event carries its own name.

## Related

- `cohort-rosters.md` — the registered student names per cohort.
- `current-views.md` — the existing views, including `cohort_25` and `actual_user_events`.
- `data-discrepancies.md` — the reused-login cases and other data issues.
- `analytics-data-limitations.md` — what the data can and cannot answer reliably.
