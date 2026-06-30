2026-06-30

Topics covered:

- Overall: a clear step forward for both of you this week. The graphs were relabeled and much more readable, and last meeting's feedback was taken on board well.

- Yungi's 2510 walkthrough (relabeled graphs):
  - Weekly page views and unique active students: 22 to 24 of the 24 students were active across the term, so usage is broad rather than driven by a handful of students. (Worth practising the one-sentence takeaway for each graph.)
  - Total events by type and events per week: useful for seeing which events occur most and whether usage is steady over the term. "Events triggered by students" is more precise than "events used." For each graph, it helps to ask who the audience is and what they'd need to know to read it (a viewer has to know what identify / page view / page leave mean).
  - Nutshell opens rise late in the term (roughly Oct 20 to Nov 10), lining up with the final paper.
  - Open vs. inactive nutshell: inactive nutshell fires when a nutshell closes (scrolled out of the viewport, or closed), but clicking the small X only fires an unlinked autocapture. Capturing that X-close would let us cross-check the counts (open nutshell should roughly equal inactive nutshell plus X-closes).
  - Rage click is very rare (under ~12 a week), so it isn't worth a deep dive; a quick check of whether it's concentrated in one or two students is enough.
  - Read event: it fires when a viewer passes 50% of the screen height, so on a short page (Exercise 13's viewport is ~98% of the page at load) it fires without any scrolling. That makes it a weak measure of actual reading; it's a custom measure, so it's one to revisit (what it captures, whether we want it, how to improve it).
  - Graph-presentation habits: shorter axis labels and titles (for example "web page views over the term by week"), week numbers rather than dates (especially for cross-cohort comparison), one title per chart rather than chart-title-plus-slide-title, slide numbers kept un-prominent, and specific values shown only when you'll discuss them. Legends were a good addition.
  - Two presentation options were floated, neither required: a 100% stacked bar chart by week for the events-per-week data (it would normalize the totals so you could see whether each event type's proportion shifts across weeks), and, for open vs. inactive nutshell, a percentage-matched table showing the match stays above ~95% as a possibly clearer alternative to the overlapping line graphs (the match looks like it dips after Oct 20, which could be worth a look).

- Kristen's 2520 walkthrough (charts organized by the data-mapping questions):
  - Duration by page type: assignment/paper pages have the longest average time, the homepage the shortest (it's a pass-through, not a destination). Schedule and homepage should be set aside in most analyses, since they're visited constantly as navigation.
  - Duration confidence is limited mainly by the session_id anomalies: Joe explained one (an internal link that jumps to a section of the same page); the bigger open question is the background-tab case, partly addressed by the finding that mouse movements keep a session alive, with a 30-minute cap when a tab is left idle. A shorter idle timeout (around 5 minutes, continued by interaction) is worth considering.
  - Cumulative time per week peaks in weeks 1, 5, 11, and 12, lining up with the week-1 course-info reading and the run-ups to the two papers.
  - Per-student total time is puzzling: some of the lowest-time students did well, so time-on-site doesn't map cleanly onto outcomes; the cause isn't clear yet.
  - Site visits vs. page visits look similar overall; paper pages differ (lower site visits, higher page views), so they're reloaded several times within a session when visited, which fits assignments being used around their due dates.
  - Days-to-due-date charts (split into exercises and papers): the big story holds across the measurement caveats: almost no one looks at an assignment more than a week ahead, and usage rises toward the day it's due. Add a legend (yellow = unique students, blue = events triggered).
  - Presentation framing (for both of you): aim for a story with two or three key points, like a thesis you're defending, rather than a set of charts; deciding what the story is is the hard part.

- Independent cross-check and the two data cleanups (both of you):
  - The supervisor ran an independent analysis with Claude, based on the work and data discrepancies you've documented, and it produced very similar numbers. The value isn't that Claude is the authority; two fallible analyses converging is what validates both.
  - Two reference documents are now in the repo under `references/`, written by Claude under the supervisor's direction (and not reviewed line by line, since they involve SQL): `reused-identifier-cohort-filter.md` (a name-plus-date filter for the reused login IDs) and `page-path-normalization.md` (normalizing the trailing-slash variants Kristen had already spotted). First check whether each is correct, since they may be wrong; if correct, apply them. Running them past a separate AI session is one good way to test them.
  - Marcus is dropped from the cohort data (he left about three weeks in). With the cleanups applied, the counts are trustworthy.

- Direction for the last three weeks (July 17 is the last day):
  - The initial focus is a descriptive, executive-summary characterization of how students used the site, on the cleaned cohort and normalized pages: the things we can say confidently, supported by a couple of charts and told with a bit of a story, while flagging what seems likely but needs better measurement.
  - After that, take a couple of slightly more advanced questions (for example, per-page duration, which sounds simple but isn't) and for each do two things at once: how far the current data answers it, and what analytics changes would answer it better next term.
  - Stay on questions where confidence is reachable (duration is a good next step; correlating two things we only partly trust is not). Yungi can think about additional questions while keeping to the next confident step.
  - The read measurement and tab-foreground time are part of that next-term redesign (the "heartbeat" idea for detecting an active tab is worth thinking through).
  - Keep the poster in mind: a story of working through messy data to a confident core, what seemed likely but uncertain, and the changes that would answer it better next year.
  - The supervisor will separately look at how site usage relates to the writing-development (self-regulated-learning) grade, since that data isn't anonymized for sharing; this is at the speculative far end.

Defined next-step actions

The first focus for both of you is the descriptive executive summary; the more advanced questions and the next-term analytics ideas come after that.

For both interns (do first):

1. Apply the two filters from `reused-identifier-cohort-filter.md` and `page-path-normalization.md` — check each is correct before relying on it — set schedule and homepage aside in most analyses, and confirm the counts.
2. Write the descriptive, executive-summary characterization of how students used the site: the things we can say confidently, supported by a couple of charts and told with a bit of a story, and flag the things that seem likely but need better measurement.

For both interns (after that):
3. Take a couple of slightly more advanced questions (for example, how long students spend on each page) and for each do two things: how far the current data answers it, and what analytics changes would answer it better next term.
4. As part of that, start thinking about how to measure reading and active-tab time better next term (the read-50% measure and the heartbeat idea).

For Kristen:

1. Make a duration-distribution chart (buckets such as 0-1, 1-2, 2-3 minutes, and a long tail like over 8 or 10 minutes) — a deliverable for next time.
2. Document the X-close capture as a potential nutshell-analytics improvement, with the open ≈ inactive + X-close validation check.
3. Add a legend to the days-to-due-date charts.
4. Flag methodology changes (like the session-split threshold) before making them.

For Yungi:

1. Follow up on the November anomaly (about half the students shown active, against the weekly activity email) before the next meeting.
2. Quick offline check of whether rage clicks are concentrated in one or two students or spread across many.
3. Apply the graph-presentation habits (concise titles/labels, week numbers, one title per chart, values only when discussed).
4. Once the descriptive summary is in hand, think about a couple of next questions worth answering, staying on confident ground rather than jumping ahead.

For the supervisor:

1. Look at how site usage relates to the writing-development / self-regulated-learning grade (kept supervisor-side, not anonymized for sharing).
2. Possibly ask a few students about the low-time / high-performance puzzle.

Next meeting: later this week; the supervisor will coordinate timing.
