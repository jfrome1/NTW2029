2026-05-26

Topics covered:

- Yungi — learning-analytics overview walkthrough
	- Walked us through the field verbally: LA as the measurement, collection, analysis, and reporting of data about learners; distinct from business analytics (optimizes for profit) and from educational data mining (builds new computational methods over large data, where LA applies known models to generate actionable interventions for specific students)
	- The rise of the LMS is what made LA possible at scale; the field is still young (~20 years) and lacks a single precise definition
	- Current LA research skews toward easily-measured behavioral metrics (login frequency, time spent, clicks), with a gap in concrete applied interventions and limited handling of psychological factors like motivation and anxiety
	- Two framings from the discussion: the unobservable-construct problem (you can measure behavior but not thought) isn't unique to LA — it's the whole field of psychology; and "what's easy to measure tends to get focused on" is the trap to resist (decide what's worth measuring, and why, first)
	- Big-data vs. controlled-experiment contrast (the horror-movie example): one approach holds everything constant and varies one thing; the other looks for signal across a large, messy dataset
	- Process point: the written 1-2 page summary was part of the assignment, not just the verbal walkthrough, and work needs to live in the repo as markdown (email gets lost) — post it to the repo

- Kristen — data verification and insight-building
	- Building PostHog insights; surfaced that AY24-25 pages appear in AY25-26 pageview counts because no cohort was set up — filtering by date is the workaround for now
	- Person IDs were reused across semesters for different students; she had already filtered those out
	- Page renames mid-semester make some page+anchor combinations non-unique (e.g., nutshell anchor text vs. the actual section names), so a link alone doesn't always identify which nutshell was viewed; the supervisor will work out the page-name-change history separately
	- Going forward: write down every data discrepancy or watch-out as you catch it, so the list of caveats lives on the page, not just in your head
	- Handle the student data as confidential (it includes real names); the supervisor will set up anonymization

- Project goal structure (walkthrough, not yet finalized)
	- Central question: which website resources have been most used, and which are the most worthwhile or potentially most helpful to students
	- Tier A (basics): per-student per-page time, website-visit frequency over a period, most/least popular pages, time on resources vs. assignments vs. schedule
	- Tier B (correlations, once Tier A is solid): e.g., usage against grades or participation
	- Tier C (intervention hypotheses): later — not this summer
	- Two cross-cutting cuts: top-down vs. bottom-up (Yungi/Kristen), and analytical vs. methodological (analyzing the data vs. checking whether the data can be trusted). These go hand in hand — sometimes you have to analyze the data to find out whether you can trust it (the schedule-page sanity-check example)

- Data-question-mapping document (the shared anchor)
	- Walked through the doc: it breaks each plain-language question into the student behaviors (scenarios) that could produce the activity, lists the events captured per scenario, and gives an accuracy verdict; the material above "how to read this document" is metadata for Claude
	- Worked Q1 as the example (time on a one-page visit) through its scenarios (clean visit, background tab, walk-by, multiple tabs, reload, etc.) and the 30-minute timeout behavior
	- The doc describes the existing data — a baseline of what we have now — and the gaps it surfaces become the changes to make next time

- Yungi — Paper 6 and the methodology file
	- Paper 6: he paused on seeing it used online-survey results; the useful distinction is that an online survey as a data-gathering technique isn't disqualifying (an online-only class would be a different matter). When you decide not to do something that was asked, note the decision and the reason so the choice is visible
	- Methodology / candidate-research-questions file: the meta-questions ("what are we asking, what's worth measuring") are the right ones; hold the specific-methodology work (Markov, clustering, SRL trajectories) until there's firmer grounding in what the data shows, then revisit
	- The event-level time-threshold idea is a genuinely useful methodological observation worth keeping

- Kristen — tab-listener PR (#91)
	- The PR looks ready; add Joe as a reviewer (not yet added) and email him to take a look
	- Property discrepancy to resolve before review: the `page` property is set to the page title (`document.title`) in the code but documented as the link URL in the event-level overview; title and URL aren't the same. Decide which it should be (likely URL, to match how other events identify pages) and fix it

- Daily report format change
	- Starting now, include rough hour-by-task entries (e.g., "3 hours on this paper, 1 hour on queries") — not a strict timesheet, just enough to see where the day went and to flag when something is taking longer than expected. how-we-work.md will be updated to match

Defined next-step actions

For Yungi:

1. Post the 1-2 page learning-analytics summary into the repo as markdown
2. Write up Paper 6 (the web-based distance-learning empirical paper)
3. Read the data-question-mapping doc once it's ready (after Kristen's pass, or at least after the supervisor's revisions)
4. Hold further methodology brainstorming for now; shift to thinking about whether the simple data questions are answerable and useful
5. Keep the math/methods toolkit banked for when we know which questions to apply it to

For Kristen:

1. Edit the data-question-mapping doc directly: check it against your own docs (event-level-overview, low-level-overview-general), correct anything inaccurate, clarify murky parts, and answer or flag-as-blocked the inline questions. Don't hesitate to make changes — GitHub allows rollback. Keep the `Claude description:` line and bump `lastUpdated`
2. Present the revised doc at the next meeting (~15 min)
3. Add Joe as a reviewer on PR #91 and email him; fix the page = title vs. URL discrepancy first
4. Keep a running written list of data discrepancies/watch-outs as you find them
5. Continue building basic PostHog insights alongside

For supervisor:

1. Work out the page-name-change history (with Claude) so renamed pages can be reconciled
2. Continue refining the goals document
3. Look into anonymizing the student data

Next meeting: Thursday afternoon
