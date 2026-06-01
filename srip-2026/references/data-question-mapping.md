---
created: 2026-05-26
lastUpdated: 2026-05-26
lastEvaluated: 2026-05-26
writingClarityEvaluated: 2026-05-26
---

# NTW2029 Data Question → Scenario → Event → Accuracy Mapping

Claude description: Draft mapping of ordinary-language data questions (e.g., "how much time did a student spend on a page") to the realistic student-behavior scenarios that could generate them, the PostHog events captured in each scenario, and an accuracy verdict per scenario and per question. Scope: AY 2025-26 (cohorts 2510, 2520) production data. Draft is input for supervisor dependencies-and-order thinking and the joint intern redirect conversation. Load when working on data-question framing, instrumentation gap analysis, or research-question prioritization for the SRIP project.

## How to read this document

In this doc, I decompose each ordinary-language question into the actual student behaviors that could produce the activity the question is asking about. Call these "scenarios". For each scenario, the table lists the PostHog events that get captured and an accuracy verdict for whether the PostHog events answer the question for that scenario. A question's overall verdict is the worst-case across the realistic scenarios, weighted by how common each scenario is.

Verdict labels:

- _Reliable_: events answer the question for this scenario without known accuracy issues.
- _Approximate, biased high_: events answer the question but systematically overcount.
- _Approximate, biased low_: events answer the question but systematically undercount.
- _Coverage gap_: events miss this scenario entirely. The website visit doesn't appear in the data.
- _Ambiguous_: events appear but can't be distinguished from a different scenario without inference.
- _Cannot answer_: events don't carry the information needed.

Terminology used in this doc:

PostHog-side terms (literal; these are the names used in PostHog queries and the parquet schema):

- **`$pageview`**: an event PostHog fires once each time a page is loaded. Despite the name, it represents the _moment of page-load_, not the duration of looking at a page. (PostHog inherited this name from Google Analytics; we can't rename it.)
- **`$pageleave`**: an event PostHog fires once each time a page is _unloaded_ by the browser. It fires when the student closes the tab, navigates to a different URL, or reloads the page. It does _not_ fire when the student switches to a different tab or minimizes the window, since the page is still loaded in those cases, just hidden.
- **PostHog session**: the unit PostHog tracks as a "session" under this site's `persistence: 'memory'` configuration. On the NTW2029 course site, one PostHog session covers exactly _one page-load_. It starts with the `$pageview` event when the page loads, includes any events triggered while the student is on that page, and ends with the `$pageleave` event or after 30 minutes of no activity on that page. Each tab gets its own PostHog session, and reloading a page starts a new one. A student who clicks through three pages in one website visit generates three separate PostHog sessions.
	- question: why did we configure `persistence: 'memory'` and what were the other options?
	- question: when a page is loaded, but then put in a background tab, is that time added to the PostHog session time?

Doc-level analytical terms:

- **Page visit**: the period a student spends on one page, from page-load to whatever ends it (navigation, tab close, timeout). One page visit corresponds to one PostHog session on this site. I'm using "page visit" (two words) rather than "pageview" when I mean the act of using the page, to avoid collision with the `$pageview` event name.
	- question: when a page is loaded, but then put in a background tab, is that time added to the page visit time?
- **Website visit** (also called **study session** in Kristen's data, where it appears as `study_session_id`): one continuous trip to the site by one student, possibly spanning multiple pages. A website visit can contain multiple page visits. Website visits aren't tracked directly by PostHog; they're reconstructed from event-timestamp gaps by Kristen's `events_with_study_sessions` SQL view. A gap between consecutive events for the same student longer than the view's configured threshold ends one website visit and starts the next. The threshold value lives in the view's SQL.
	- question: how is a website visit calculated?

Scope: AY 2025-26 (cohorts 2510 and 2520) production data. The visibilitychange-based `tabFocused`/`tabUnfocused` custom events Kristen has implemented locally are _not_ in this dataset; references below to "would be answerable if visibility events were available" point to the future-state fix.

## Question 1: How much time did a student spend on a single page (one page visit)?

Definition: the duration of one page visit by one student.

Scenarios:

1. _Clean page visit_: student loads the page, reads it for a while, then closes the tab or navigates away within the same PostHog session window. (The standard page-visit shape: `$pageview` and `$pageleave` fire as a matched pair with no interruptions.)
2. _Background-tab page visit_: student loads the page, switches to a different tab to do something else for some time, then comes back and closes the tab. The site tab stayed open and "active" in the browser the whole time but wasn't being read.
3. _Walked-away page visit_: student loads the page, then walks away or the computer sleeps. No `$pageleave` ever fires, and the PostHog session eventually expires after 30 minutes of inactivity.
	- question: what computer activities cause page to be considered active?
4. _Multi-tab parallel page visits_: student opens the same page in multiple tabs (or opens several site pages in parallel tabs) and visits different pages, moving back and forth between page tabs (i.e., bringing different page tabs to the foreground).
5. _Reload-during-read page visit_: student reads, refreshes the page (intentionally or accidentally), continues reading.
6. _Tab-closed-mid-event page visit_: student closes the tab so fast that the `$pageleave` event doesn't have time to transmit.
	- is the "speed of close" a real scenario or AI-hallucination?

| # | Events captured | Time-on-page accuracy verdict |
|---|---|---|
| 1 | `$pageview` + matching `$pageleave`; time = `$prev_pageview_duration` on `$pageleave` | _Reliable_ |
| 2 | `$pageview` + matching `$pageleave`; duration includes the background time | _Approximate, biased high_ by however long the tab was backgrounded |
| 3 | `$pageview`, no `$pageleave`; session times out at 30 min | _Coverage gap_. Visit dropped from time-on-page calculation entirely |
| 4 | One `$pageview` per tab + one `$pageleave` per tab; durations overlap in clock time | _Approximate, biased high in aggregate_, since summing per-tab durations triple-counts real wall-clock time |
| 5 | Two `$pageview`/`$pageleave` pairs; each pair carries part of the read time | _Approximate, biased low per page visit_, since this splits one page visit into two short ones |
| 6 | `$pageview`, no `$pageleave` | Same as Scenario 3: _Coverage gap_ |

Question-level verdict: _Approximate; inflation in some scenarios (2 and 4) and deflation in others (5) don't cancel at the aggregate level, and Scenarios 3 and 6 are missing entirely._ Scenarios 1, 2, and 5 are the most common cases; the realistic per-page-visit time-on-page is somewhere between the calculated value and the truth. The aggregate bias direction at the cohort level isn't determinable without instrumentation that distinguishes the scenarios.

Notes:

- Scenarios 2 and 3 are the failure modes documented in `analytics-data-limitations.md`.
- The proposed visibilitychange/`tabFocused`/`tabUnfocused` events would convert Scenario 2 from "biased high" to "approximate, biased less" by letting analyses subtract backgrounded time. They would also rescue Scenario 3 from "coverage gap" to "approximate" by treating the last visibility-hidden event as the session-ender.
- Scenario 5 isn't on the open-fix list. If page reloads are common (which they might be on the assignment pages where students refresh to see updates), the per-page-visit fragmentation matters.

## Question 2: How often did a student visit the site over a given period (a week, a month, a term)?

Definition: website-visit count per student. A website visit is one continuous trip to the site as defined in the terminology section above. PostHog session counts don't answer this directly because each page-load is its own PostHog session.

Scenarios:

1. _Single-page website visit_: student loads one page, reads it, closes the tab. One website visit equals one page visit equals one PostHog session.
2. _Multi-page website visit_: student loads a page, navigates internally to other pages within the same continuous trip. The website visit contains multiple page visits, each generating its own `$pageview` event and its own PostHog session (because of `persistence: 'memory'`).
3. _Multi-tab website visit_: student opens several pages in parallel tabs in one continuous trip. Each tab is its own page visit and its own PostHog session.
4. _Repeated website visits within 30 min_: student closes the tab, then returns to the site less than 30 minutes later for a separate look-up. Two website visits.
5. _Walked-away-then-resumed website visit_: student loaded a page, walked away, came back hours later and continued (Scenario 3 from Q1 followed by new activity).

| # | Events captured | Website-visit-count accuracy verdict |
|---|---|---|
| 1 | One `$pageview` (+ associated PostHog session, `$identify`) | _Reliable_ if you group events into website visits by the gap heuristic |
| 2 | Multiple `$pageview`s clustered in time, one per page | _Reliable_ with gap-based website-visit reconstruction (Kristen has built this in the `events_with_study_sessions` view) |
| 3 | Multiple `$pageview`s clustered in time, one per tab | _Reliable_, same as 2 under gap reconstruction |
| 4 | Two clusters of events separated by < 30 min | _Ambiguous_. The gap heuristic will merge these into one website visit, undercounting website visits |
| 5 | `$pageview` (no `$pageleave`) at first arrival, then later cluster of events; the later cluster may not begin with a `$pageview` (per Kristen's empirical verification in Section 2.4 of `low-level-overview-general.md`) | _Approximate, biased low_. If the resumed activity isn't anchored by `$pageview`, `$pageview`-based website-visit-count queries miss it. Entry-path data may catch it (it records the first event of a PostHog session regardless of event type). |

Question-level verdict: _Reliable when the answer is expressed as visits-per-week or visits-per-month_ once you reconstruct website visits from event-timestamp gaps and don't rely on raw PostHog `$session_id`. Kristen's `study_session_id` and `is_new_session` features in the `Cohort2510_with_features.parquet` dataset are the right ingredient here. The remaining biases (Scenarios 4 and 5) affect a small share of the total website-visit count for any sensibly chosen gap threshold. Less reliable at daily or finer granularities, because gap-merging noise affects those counts more.

Notes:

- The gap-threshold choice is itself an analytical decision; values shorter than 30 min won't separate Scenario 4 website visits, values longer than several hours will start merging Scenario 5 cases incorrectly.
- For "how often per week" specifically, the granularity is coarse enough that Scenarios 4 and 5 are essentially noise.

## Question 3: Which pages were most/least visited?

Definition: rank pages by page-visit count across the cohort.

Scenarios:

1. _Identified student loads a tracked page_: `$pageview` fires, page is identified correctly via `$current_url`/`$pathname`, and the `distinct_id` matches a roster student.
2. _Student opens page but instantly closes_: `$pageview` fires, then `$pageleave` shortly after. The page visit counts in pageview ranking but represents zero engagement.
3. _Page opened in background tab and never read_: `$pageview` fires (because the page loaded), even though the student never looked at it.
4. _Student reloads a page_: counts as multiple `$pageview`s (and multiple PostHog sessions, since each page-load is its own session under `persistence: 'memory'`).
5. _Anonymous / dev / test events_: `$pageview` fires from non-student sources (~14% of all events have `distinct_id`s that don't match any roster student per Kristen's analysis).
6. _Walked-away page visit_: `$pageview` fires; the page visit registers normally for ranking purposes regardless of how the PostHog session ended (the `$pageleave` gap doesn't affect pageview count).

| # | Events captured | Pageview-ranking accuracy verdict |
|---|---|---|
| 1 | `$pageview` | _Reliable_ |
| 2 | `$pageview` (+ quick `$pageleave`) | _Counts toward rank_, overstating "use" if "use" means meaningful engagement |
| 3 | `$pageview` | _Counts toward rank_, same overstatement |
| 4 | Multiple `$pageview`s per page visit | _Inflates rank_ for pages students reload often |
| 5 | `$pageview` from non-student `distinct_id` | _Inflates rank_ unless filtered out (~14% of events; see Section 1.2.1 of `low-level-overview-general.md`) |
| 6 | `$pageview` | _Reliable for ranking_ |

Question-level verdict: _Reliable for raw popularity ranking_, with three known inflations (Scenarios 2, 3, 4) that can be partially distinguished by combining with `read` (which fires only when a student scrolls past 50%). Filtering by valid student `distinct_id`s removes Scenario 5.

Notes:

- The `read` event is the natural cross-check: a "high-pageview, low-read" page is mostly Scenario 2/3 (opened but not engaged with), while a "high-pageview, high-read" page is genuinely read. The `read` event has its own limitations (fires once per page per session at 50%, doesn't capture depth of engagement) but is sufficient as a noise-filter on raw pageview ranking.
- "Most visited" and "least visited" framings carry different risks. Most-visited overstatement (Scenarios 2-4) inflates already-high values; least-visited rankings are more sensitive than most-visited rankings to the dev/test scenario, because when those events hit obscure pages, a small absolute number of dev/test pageviews on a rarely-visited page can move it sharply up the ranking.

## Question 4: How much total time did students spend on resources vs. assignments vs. schedule pages?

Definition: aggregate time-on-page summed within URL-path categories.

Scenarios:

This question inherits Question 1's scenarios at the per-page-visit level (since the aggregate is the sum), but additionally has category-specific usage patterns that affect bias:

1. _Resources pages, heavy reference use_: students return to resource pages multiple times within a single website visit (e.g., looking up a concept while writing). They often open resource pages in a background tab alongside the assignment page.
2. _Assignment pages, primary focus during work sessions_: student loads an assignment page and stays on it. It's often the "primary" tab the student is actively reading.
3. _Schedule page, quick consultation_: student loads the page, looks at the relevant date, leaves. Usually fast.
4. _Schedule page, open and forgotten_: students sometimes leave the schedule open as a tab they reference periodically. Scenario 2 from Q1 (background-tab) is more likely on schedule than on assignment pages.

| # | Events captured | Time-on-page accuracy verdict (for this category) |
|---|---|---|
| 1 | Per Q1, but Scenario 4 (multi-tab parallel) and Scenario 2 (background-tab) are over-represented for resources pages | _Approximate, biased high_ for resources |
| 2 | Per Q1, Scenario 1 (clean page visit) is most common | _Approximate, mixed bias_ for assignments |
| 3 | Per Q1, Scenario 1 (clean page visit) is most common, but page visits are short | _Approximate, mixed bias_ for schedule (short page visits less affected by Scenario 2 but more likely to be Scenario 6 / Scenario 3) |
| 4 | Per Q1, Scenario 2 (background-tab) is over-represented for schedule | _Approximate, biased high_ for schedule when this scenario is common |

Question-level verdict: _Approximate, with category-specific bias direction_. Comparing categories directly produces misleading rankings: resources and schedule are systematically inflated relative to assignment pages (because background-tab and multi-tab parallel use is more common for them). The ranking "students spent more time on X than Y" is suspect when the bias direction differs between X and Y. A safer framing is to compare pageview count and read-event count by category, which avoid the time-on-page failure modes.

Notes:

- Kristen's "Compare Resources vs Non-Resources" insight uses `$pageview` + `$pageleave` and inherits Q1's biases category-wise.
- Among the five questions in this doc, this is the one where the visibilitychange fix would change the result most. It would let analyses subtract background-tab time per page, which would compress the resources/schedule inflation.

## Question 5: How frequently did students check the schedule page (daily, weekly, monthly)?

Definition: cadence, meaning the typical gap between consecutive page visits to the schedule page per student.

Scenarios:

1. _Daily checker_: student visits the schedule page roughly daily.
2. _Weekly checker_: student visits the schedule page roughly weekly (e.g., Sunday-night planning).
3. _Deadline-driven checker_: student visits the schedule page when an assignment deadline approaches.
4. _Background-tab on schedule_: student opens the schedule once, leaves the tab open, "checks" it by switching tabs (no new `$pageview` fires for the tab-switch).
5. _Browser-bookmark/back-button checker_: student reaches the schedule via browser back button or bookmark, which **does not** fire `$pageview` (per the `$autocapture` table in `event-level-overview.md` Section 4.1.3).
6. _Reload-as-check_: student already has the schedule page open and reloads to see updates.

| # | Events captured | Cadence accuracy verdict |
|---|---|---|
| 1 | `$pageview` per page visit, regular cadence | _Reliable_ |
| 2 | `$pageview` per page visit, weekly cadence | _Reliable_ |
| 3 | `$pageview` clusters near deadlines | _Reliable for cluster detection_. Relative to "regular cadence" reads as bursty |
| 4 | One `$pageview`, no further events while tab stays open | _Coverage gap_. Each tab-switch "check" is invisible; cadence is undercounted |
| 5 | `$pageview` per page visit (browser navigation still loads the page) | _Coverage gap_. Each tab-switch "check" is invisible; cadence is undercounted |
| 6 | `$pageview` per reload | _Reliable_, but could conflate "check" with "force-refresh" |

Question-level verdict: _Reliable for the population of students who close the schedule tab between checks; biased low for students who use the schedule as a background tab._ Hard to know what fraction of students fall into each pattern without instrumentation that distinguishes them. The visibilitychange fix (`tabFocused` on the schedule page) would let analyses count tab-returns as additional "checks."

Notes:

- A useful diagnostic: per-student ratio of schedule `$pageview`s to schedule `read` events. A student who tab-switches a lot will have a `read` count of 1 (read fires once per page-load) while their actual viewings are unknown.
- Inter-page-visit gap calculation needs `study_session_id`/`study_session_duration` features from Kristen's reconstruction. Raw inter-`$pageview` gaps will be misleading because of Scenario 4.

## Cross-cutting reliability summary

Across all five questions, three failure modes drive most of the uncertainty:

- _Per-page session model_ (`persistence: 'memory'`): every page-load is a new PostHog session. Website-visit reconstruction from event-timestamp gaps (which Kristen has built) is the workaround. Raw `$session_id` queries are misleading for any question framed around website visits.
- _Visibility tracking gap_: background-tab time inflates time-on-page (Scenario 2 in Q1, Q4), and tab-return checks are invisible (Scenario 4 in Q5). The proposed `tabFocused`/`tabUnfocused` events fix both, but only for data collected after the visibilitychange-based events are deployed to the site (earliest 2610, the upcoming AY 2026-27).
- _Tab-never-closed coverage_: page visits that don't fire `$pageleave` are dropped from time-on-page entirely. The visibilitychange fallback design Joe sketched on 2026-05-18 (and was "still thinking on" as of that date) rescues these.

For framing analyses on the AY 2025-26 data, the practical implication is:

- Questions about _frequency, popularity, navigation, timing_ (Questions 2 and 3, plus Q5 with its cadence caveat) are answerable from the data; the remaining biases are small enough that we can rely on the descriptive findings.
- Questions about _time-on-page_ (Questions 1, 4) are approximate with biases that don't cancel; conclusions should be hedged and ideally cross-checked with read-event counts or pageview ratios.
- Comparisons _across page categories_ on time-on-page (Question 4) are especially fragile because the bias direction differs by category.

## Open follow-ups

Items that would tighten this document, captured here so they don't fade between sessions.

- _Confirm the reason for `persistence: 'memory'` with Joe._ The per-page PostHog session model, which is the central data-shape constraint that drives most of the failure modes in this doc, follows directly from this setting. The actual reason for the choice has not been confirmed with the developer. Likely candidates are consent-footprint reduction (avoiding `localStorage`/`cookie` persistence that can trigger GDPR-style consent banner requirements) and avoiding cross-tab session bleed. See `research/srip-2026/findings.md` "Open question: why was `persistence: 'memory'` chosen for PostHog init (2026-05-26)?" for the fuller context. Action: ask Joe directly before relying on either inferred reason.
- _Surface the gap-threshold value in Kristen's `events_with_study_sessions` view._ The terminology section refers to a "configured threshold" for the event-timestamp gap that ends one website visit and starts the next. The actual value lives in the view's SQL definition and is not inlined here. Inlining the value would let an analyst reading this doc make informed gap-threshold choices without a separate trip to the SQL. Action: read the view's SQL; update the website-visit definition with the actual threshold.
- _Substantive review against source materials._ This doc was drafted by Claude in a single pass from Kristen's documents (`low-level-overview-general.md`, `event-level-overview.md`, `BaselineEDA.ipynb`, `Graphs.ipynb`) and `analytics-data-limitations.md`. The terminology section, scenario decompositions, event captures, and verdicts haven't yet been verified against the source materials in a careful review pass. Action: read this doc alongside the source documents and check whether each claim, scenario decomposition, and verdict matches the source evidence before sharing with the interns or using it to drive analysis.
- _Status check on Joe's visibilitychange fallback design._ Joe was "still thinking on" the fallback design as of 2026-05-18. The fix is the upstream dependency for Kristen's listener implementation (Phase 4 codebase familiarization work) and for AY 2026-27 data quality. Action: if the design hasn't been returned by ~early June 2026, ping Joe to surface the dependency.
