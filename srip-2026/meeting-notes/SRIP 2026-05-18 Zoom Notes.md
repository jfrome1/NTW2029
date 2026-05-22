2026-05-18

Topics covered:

- Feedback delivered earlier (NTW2029/srip-2026/feedback/2026-05-18 JF feedback.md)
	- Both interns confirmed they read it and it was clear
	- Brief reminder that daily reports are being read even when supervisor isn't in meetings; the reports were the basis for the feedback
- Yungi -- source relevance calibration
	- He did a good job collecting articles, but doesn't yet have practice or context to judge relevance
	- The feedback walked through supervisor's relevance-judging process so Yungi can internalize the criteria
	- The learning analytics field is broader than what we need -- most of it tests online-learning outcomes or learning outcomes directly. Our concern is the narrower band: engagement on a website that complements in-person learning
	- Next step: see what Yungi can get from the current set under the new criteria, then decide together whether to do a more targeted article search or move toward design work
- Kristen -- visibility tracking gap
	- Her catch on the tab-visibility gap is a real one. Supervisor emailed Joe to find out the facts before evaluating implications
	- The frame from "Difficult Conversations": when something looks like a potential failure, find out what actually happened before deciding what it means
	- If Joe confirms we're not tracking tab visibility, the project will need to add a listener -- either Joe implements or Kristen does as Phase 4 codebase-familiarization work
	- Supervisor's preference: Kristen does it. Discussed Kristen's concern that Joe would be more efficient; reframed: this internship is for learning, and AI estimates it's roughly one line of code plus locating where it goes in the Astro site
	- Heartbeat-indicator approach (server sends periodic signal, client listener responds) is another option Kristen should investigate via PostHog AI -- ask what methods exist for checking tab visibility, and how they behave across browsers
- Why the documentation work matters
	- Even though it might feel like "just writing documents," the inventory work is the foundation. Easy to feel like you're getting the gist and miss the key details. Once the research questions are clearer, the inventory will tie to specific questions
- Working norms reinforced
	- Daily reports are being read; they're the record that lets supervisor catch up when not in meetings
	- If a day goes by without contact, interns can message -- supervisor won't be annoyed; if too busy he just won't respond
	- Aim is to meet at least once every two days; daily is the plan but the supervisor is overwhelmed this period

Defined next-step actions

For Yungi:

1. Reread the sources I flagged as worth-reading (Handbook 1 intro, Papers 5, 7, 8, 9) using the three relevance criteria in the feedback doc
2. Skim Paper 6 against the same criteria and decide
3. When using NotebookLM or other GenAI for source assessment, give it project context and a specific question -- not a generic "summarize this"
4. After this pass, report back so we can decide whether to do another targeted search session together or pivot toward design work

For Kristen:

1. While we wait for Joe's response on tab-visibility tracking, continue the inventory documentation work
2. Use GitHub's built-in code search (press / on the repo) before asking Joe whether something exists in the codebase. Try posthog.capture, document.addEventListener, window.addEventListener
3. Ask PostHog AI about tab-visibility detection methods and their behavior across browsers. Include the heartbeat-indicator concept
4. Be ready to implement the visibility listener as Phase 4 work once Joe confirms the gap; one line of code plus locating it in the Astro site

For me:

1. Wait for Joe's reply on visibility tracking; share the answer with both interns
2. Decide with Yungi after his next pass whether to do a targeted-search session together or pivot him to design work
3. Aim for at least every-other-day meetings; signal interns when meetings will or won't happen
