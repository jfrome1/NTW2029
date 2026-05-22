2026-05-22

Topics covered:

- Yungi -- reading task clarification
	- Last week's "skim these" instruction was ambiguous between (a) skim only and (b) absorb the content at a high level without writing detailed notes. Supervisor meant (b); the instruction wasn't clear enough about the output expected
	- Reframing: in research, start at a high level before going into implementation or methodology. If the upstream framing is wrong, downstream work fails (same reason data cleaning happens before analysis)
	- The methodology work Yungi has done stays in the toolkit for when we know which questions to apply it to
	- Goal of the overview reading: get a sense of what the field of learning analytics is, what people in the field think is worth measuring, and what counts as a proxy vs. a real measure
	- Bad proxies are a recurring quantitative-research problem (e.g., course evaluations as a proxy for teaching quality). Top-down framing + bottom-up tooling should meet in the middle
- Kristen -- data verification work
	- Walked through what she's been doing in Python: checking that blank values in default-event fields match the expected count (custom-event count vs. blank rows in default-event rows, since the `page` field is only on custom events). Counts matched
	- Adding things up two different ways and confirming they match is the right verification habit
	- But verification has no natural endpoint, and at some point the way to learn the data is to use it. Watch for over-comprehensive front-end work before moving forward
	- Switch from verification mode to building a handful of basic PostHog insights (e.g., most-viewed pages, time-on-page distribution). Anomalies spotted while doing that become the next verification targets
- `analytics-data-limitations.md` reference doc
	- New reference doc at `srip-2026/references/analytics-data-limitations.md`, written by supervisor with Claude, drawing on Kristen's existing documentation
	- Focus: failure modes and what the data can/can't reliably answer (not query mechanics)
	- Has `created` / `lastUpdated` dates at the top; supervisor uses a spec sheet to check reference docs
	- Kristen's task: go through it and check whether it's correct. Where you don't know if something is correct, that's a knowledge or understanding gap worth investigating
	- Don't default to "the AI wrote this, I'm probably wrong." The AI doesn't have context, doesn't have understanding, and forgets everything between sessions. Treat it as fallible
	- Feel free to change or add to the doc
- Pull request workflow for the tab listener
	- In a real tech team, code changes go through pull requests. Worth learning the workflow now
	- Do a short tutorial on how to do a PR; submit Kristen's tab-listener changes with Joe added as reviewer. Explain what you're doing in the PR comment field. Joe will accept or request changes
	- Not time-sensitive; can come after the basic PostHog insights
- Conference dates and per-student due dates
	- The two dates Kristen had been treating as conference due dates are actually class meeting days. Conferences run across multiple windows that students sign up for
	- Due dates differ per student for several assignments (P03 = Paper 1 final, P09, E6, E11, others). Supervisor will send the per-student due-date list
	- Useful for: comparing event timestamps against assignment due dates (e.g., when students viewed a page relative to when their own assignment was due)
- Cohort labeling
	- Spring 2026 semester is "2520" (academic year 25-26, second semester). Anything from January 1 onward should be labeled 2520
	- Joe may not have updated the cohort number in the analytics setup -- 2510 and 2520 data should be separated into two cohorts
	- Kristen to email Joe to check; supervisor will send Joe's email. Mention you're working with the supervisor; Joe replies quickly
- Working norms reminder
	- Supervisor was sick this past week and not as proactive; if you need guidance or feel under-supervised, message directly -- it's not bothering him
	- Daily reports are still being read

Defined next-step actions

For Yungi:

1. Read the overview-shaped sources: the two handbook chapters and the one or two overview articles
2. Write a 1-2 page summary of what the field of learning analytics is, based on those readings. High-level framework, not detailed notes
3. Walk us through the summary at the next meeting
4. After that, read the other flagged papers and write brief summaries (what the paper is about, what looks useful) -- not detailed notes
5. Then we'll start drafting research questions that our data could potentially answer

For Kristen:

1. Finish data verification (you estimated ~90% done) -- close to the diminishing-returns point
2. Build a handful of basic PostHog insights to get a feel for the data shape (most-viewed pages, time-on-page distribution, etc.); ready to walk through at the next meeting
3. Review `analytics-data-limitations.md` against your own understanding. Flag what looks wrong or missing; change or add to it as needed
4. PR workflow: do a short tutorial on pull requests, then submit your tab-listener changes as a PR with Joe added as reviewer (after the basic insights)
5. Email Joe about the cohort labeling (2510 vs. 2520); supervisor will send his email

For supervisor:

1. Send Kristen the per-student due-date list for P03, P09, E6, E11, and other rolling-due-date assignments
2. Send Kristen Joe's email address
3. Tell Joe to expect Kristen's PR

Next meeting: Monday or Tuesday
