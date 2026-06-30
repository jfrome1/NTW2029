---
created: 2026-06-30
lastUpdated: 2026-06-30
---

# Independent cross-check of the descriptive numbers

Claude description: A supervisor-run independent cross-check of the 2510/2520 descriptive pageview numbers against Yungi's and Kristen's analyses — where the two agree, where they diverge, and what to do about the one divergence that matters. Intern-facing. Load when reconciling the cohort counts or citing the cross-check in the report or poster.

## What this is, and what it isn't

Alongside your analysis, I ran an independent pass over the same PostHog data (with Claude) as a cross-check on the descriptive numbers. The purpose is triangulation, not grading. Where an independent computation lands on the same number, we can trust that number more; where it differs, that's a flag to look into together, on either side, not a sign that anyone got it wrong.

To keep it genuinely independent, the cross-check used SQL written from scratch against the raw events rather than your saved views, matched students to the cohort rosters (by matric for 2510, by name for 2520), and attributed each event to whoever was logged in when it fired. It carries its own risk of being wrong, so it's held to the same confidence discipline I've asked of you. It is a second opinion, not an answer key. You built reusable views and dashboards for repeated analysis; this was a one-off check with a different goal, so where it differs the right response is to investigate, not to assume your numbers are off.

## Where it agrees with your numbers

The agreement is broad, which is the main result: the descriptive magnitudes you are reporting hold up under an independent computation.

- 2520 total pageviews converge across three independent computations: cross-check 6,925, Kristen's dashboard ~6,900, Yungi's 2520 deck 6,933.
- 2520 identify counts agree (cross-check 7,281; Yungi 7,277).
- 2510 totals agree (cross-check 7,315 pageviews / 7,750 identify; Yungi's 2510 deck ~7,300 / ~7,700).
- 2520 section popularity matches Kristen's page-type slide closely (schedule, assignments, course-info, home, resources, in that order).
- The per-student spread shapes match your per-student charts.

## Where it diverges (the one to act on)

1. 2510 roster count: the cross-check finds 24 students; the `cohort_25` view returns 22. The two missing are Wong Zhao Wu and Sim Thian Juea Reiner, whose login IDs (26 and 28) were later reused by 2520 students. Because `cohort_25` labels each person by their most recent name, those two 2510 students get relabeled as the 2520 students who reused their logins and drop off the 2510 roster. Any chart built on `cohort_25` / `actual_user_events` undercounts 2510 by 2 students and about 340 pageviews (roughly 4.6%). This is the same reused-login issue you already diagnosed and mapped; it just hasn't been fixed in the views yet. The corrected event-level filter is in `reused-identifier-cohort-filter.md`.

2. The high end of the per-student range: the real per-student maximum in the cleaned data is 997 pageviews, not the ~1,500 an earlier chart suggested. The higher figure came from pre-cleanup charts that grouped reused logins across semesters; attributing events at the event level removes the inflation.

## What to do with this

The descriptive numbers are trustworthy wherever they don't touch the reused-login seam, so the consolidated descriptive picture can proceed with confidence. The one fix that matters is repointing the cohort views so 2510 reads 24 students (the filter doc shows how). And the cross-check itself is worth a line in the report and poster: an independent computation reproduced the descriptive numbers, which is real external validation of the analysis.
