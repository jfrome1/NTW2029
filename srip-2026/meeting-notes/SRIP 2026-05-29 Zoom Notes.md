2026-05-29

Topics covered:

- Yungi — Paper 6 and data mining
	- Paper 6 was more useful than expected: it framed data mining as the analysis of log files, generalized in discussion to "analysis of data collected for some purpose other than the analysis itself" (our event data is a borderline case), as opposed to an experimental approach where you collect data on purpose to answer a planned question. Data mining as digging through a large dataset for hidden patterns (the Shakespeare word-proximity example) — though finding hidden patterns isn't unique to it
	- Yungi raised sequential analysis / Markov chains: is there a common page-visit trajectory that successful students follow (would need grade data)? Noted as genuinely interesting — there's a very large number of possible sequence units (pairs, triples, by timing), and we don't yet know whether sequence analysis is the right lens; that's a hypothesis-driven (deductive) or exploratory (inductive) choice to make later. This is methodology ahead of grounding, which is the thing to hold for now

- Yungi — the cross-explain task and self-study
	- The intended task was for Kristen to write documentation Yungi learns from, then explain back; they did it verbally instead (a miscommunication). Re-clarified: we want persistent written documentation someone else can pick up and understand. The test — Kristen writes, Yungi reads and explains it back — is how you find out whether the writing is actually clear, because of the curse of knowledge (once you know something, it's hard to tell whether your writing conveys it to someone who doesn't)
	- Yungi did self-study with PostHog AI and fetched data via the API (JSON, partial). Found tabFocused/tabUnfocused are recent additions, not deployed for the existing data, so they're empty for this dataset — that's for next year
	- The assigned main task was to connect the larger research questions to the five questions in the data-question-mapping doc, not to answer them from the data (that was more Kristen's side); Yungi recognized the drift himself

- Kristen — nutshell validation
	- Finished the nutshell validation. Some nutshells showed as opened by the 2520 cohort that shouldn't have been accessible to them. Cause: anchor links were edited/standardized mid-semester, so the same nutshell appears under different anchor names in the log (e.g., "peer review groups" vs "week 12 peer review groups"); the trigger was seeing clicks on a link no longer on the site
	- A real anomaly, but not the one to focus on now — write it down as a known issue to handle later (renamed anchors may need grouping once the data is sorted out)

- Kristen — data-question-mapping scenarios and how to validate
	- Worked through the Q1 scenarios, writing down the events captured for each. Found the AI's table not fully accurate: it describes duration-capture methods and their reliability but doesn't lay out exactly which events fire in each scenario. Hasn't revised the doc yet (still validating)
	- Key correction on method: don't validate against the existing collected data — it has too many problems (the mid-semester edits and renames, and the person-ID reuse across cohorts), so it's an unknown to check against. Instead, describe the expected events, then recreate the scenario and check what was actually logged. Concretely: ask Joe for a dedicated SRIP login (not Guest), perform the scenario (open a tab, switch away, close, etc.), then look at what got captured. Validate against what you control, not the historical data. Yungi can help
	- The skill to build is creating and validating the data-capture method, which is different from analyzing a finished dataset

- Refocus for the week (both)
	- The plan agreed Monday stands. Kristen: documentation mapping the data structure of what's captured (not the collected data itself) — which events correspond to the scenarios in the data-questions doc, validated for the current capture setup. Yungi: take the five questions and connect them to the bigger research questions (e.g., what "student engagement" actually means, and which questions speak to it); roughly half his time on the cross-explain documentation, half on the top-down connection
	- Important reframe: "understand what we have" means the data structure of what's being captured and how, not an analysis of the collected data. The collected data is messier than the structure because it came from a changing website. The first goal is a reliable reference document stating exactly what's captured and what it means; analysis comes after
	- A sequencing idea to keep in mind: even without reliable time-on-page from page view/leave, if a student views one page and then a page view fires from another tracked page for the same student, we know the first page is no longer in front — which could let us back into some timing data (for tracked pages only)
	- Reminder to message between meetings if stuck, rather than lose hours

Defined next-step actions

For Kristen:

1. Write the data-capture documentation mapping each data-question scenario to the events that fire, for the current capture setup (not the historical data)
2. Validate by recreating scenarios with a dedicated (non-Guest) login from Joe, not by checking against the existing collected data; record what each scenario actually captures
3. Revise the data-question-mapping doc to correct the AI's scenario/event tables once validated
4. Log the renamed-anchor nutshell anomaly as a known issue to handle later

For Yungi:

1. Read Kristen's documentation and do the explain-back check; flag what isn't clear so she can revise (about half the time here)
2. Spend the other half connecting the five data questions to the bigger research questions (what "student engagement" means, which questions map to it) — concept level, top-down
3. Hold the sequence/Markov methodology work until the data structure is nailed down; keep it as a candidate

For supervisor:

1. Continue toward the reliable data-capture reference document as the first goal

Next meeting: later this week
