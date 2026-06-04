2026-06-03

Topics covered:

- Website malware incident (supply-chain attack)
	- The course website was hit by a supply-chain attack: a North Korean group compromised a common NPM dependency that Astro pulls in to build the site, and the infected version injected obfuscated JavaScript during the build. It came in through the build process, not from anything anyone downloaded directly, and there wasn't enough protection in place to stop an auto-updating dependency from carrying it in
	- The repo has been largely cleaned up. For now, don't merge the tab-visibility branch or update the course website itself until the supervisor and Joe finish setting things up; working on text files and your own docs is fine
	- The fix is a package lock pinning dependencies to known-good versions, plus a more conservative update policy (wait for a later version rather than auto-updating the moment a new package drops). The exact entry point isn't confirmed (possibly a VS Code extension); Joe is still checking
	- Kristen asked whether she needs to clean up dependencies in her own code space. No individual action is needed right now: Claude reviewed the dependency lists and they looked standard and clean

- Data-capture reference document: how much explanation it needs
	- Kristen validated the scenarios by opening the course site, reproducing each described behavior, and observing which events were captured (via the Guest view rather than a dedicated login), and recorded the events captured per scenario and how the relevant metric could be derived
	- We walked through the document's overview in detail, as a model for the level of explanation it needs:
		- The first question, "how much time did a student spend on a single page (one page visit)," is ambiguous as written. The parentheses are doing work that words should do, and a modifier like "single page" implies there's a contrasting case. Better to open the section with a short plain-language discussion of what the question is actually asking before listing events
		- The overview uses page view, page leave, and page view ID without defining them. The document should explain them (without recreating Kristen's other docs): page view fires when a page loads in the browser; page leave fires when the student closes the tab or page; page view ID is a shared identifier on both events so they can be matched, and it persists as long as the tab stays open; session ID resets after 30 minutes of inactivity, so page view and page leave from different sessions shouldn't be matched, since that would fold in inactive time and overstate how long the student was actually on the page
		- This level of explanation will make the document several times longer than it is now, and that's expected: it's what someone who knows the goal but not the internals needs in order to follow it
	- Yungi has been giving feedback in the draft's Google Doc and in person, aimed at beginner-level clarity, and will go deeper on the technical detail going forward
	- The document is really a mix of reference and explanation: a trusted reference the team can rely on
	- Next steps: Kristen doesn't need a dedicated login (verification is done) and doesn't need to wait for all of Yungi's feedback before revising. Split the work so Yungi comments on the second section while Kristen revises the first. Share the Google Doc with the supervisor via the repo or Telegram

- Data anomaly: person ID reused across semesters
	- Kristen flagged that two 2520 students, Bansal Naman and Ashley Goh, have person IDs that also show up in the 2510 (fall) data, including events on pages that weren't available to the 2520 cohort
	- Working hypothesis: the person IDs were reused. Two fall-semester students' IDs appear to have been reassigned to new spring-semester students (so the original fall names may have been overwritten), rather than Ashley and Bansal actually having been in the fall class
	- Resolution path: find the names attached to that person ID in the 2510 data; check whether the 2510 cohort has the expected number of students (e.g., 24 vs. 22) to see whether two were overwritten; work out whether any fall student was renamed into a spring student; then build a disambiguation/mapping so events get attributed to the right student. Coordinating with Joe (git history or date-based filtering may help) is part of this. The supervisor will send the rosters for both semesters

- Tab-listener branch: parked
	- Joe reviewed the tab-listener pull request, left comments and questions, then closed it without merging. It's on hold until the foundational documentation is solid
	- When it resumes, the next step is to fix the sentence Joe flagged and answer his questions so he can advise on what to do next

- Yungi: literature and the top-down connection
	- "What is Learning Analytics" and the Paper 6 write-up are both done and good. Takeaway from the LA overview: learning analytics is largely education research catching up with the rigor other social sciences already use, relatively new in education but not fundamentally different from social-science research
	- Not yet started: connecting the five data questions to bigger research questions (e.g., what "student engagement" means). It might feel premature before the data picture is settled, but it's worth doing: even discovering that the current analytics can't reach the bigger questions is a useful finding about the limits of what we have
	- Park the Markov/sequence methodology and the EDA work for now; we'll come back to it if there's time. The concern is that interesting methodology produced without grounding is hard to act on
	- A way to start: write notes or a mind map of a couple of the bigger questions the supervisor cares about (based on your read of the class and conversations), then for each, brainstorm what behavioral data a website could capture and start sketching frameworks

- Using GenAI for paper reading
	- Fine for getting a general sense of what a paper covers. Not reliable for judging whether an argument is good or bad, so don't lean on it for evaluation
	- It can be valuable as a conversation partner for difficult concepts, but only with active engagement: pushing on it, asking it to justify itself, giving counterexamples. The evolution example (adaptation vs. byproduct) showed how pressing on a confident answer surfaced that an area was less settled than the AI first stated. Reasonable to use this way for connecting behavioral data to larger learning questions

- Direction check-in
	- Both interns described how they see the project over the next couple of weeks; both are on track, with the picture slightly vague in spots (understandable, since it's been conveyed verbally across several conversations)
	- The emphasis right now is getting a rock-solid understanding of what the analytics actually capture and what it means, not yet how to do things better next time. The facial-expression / computer-vision example illustrated the risk of building elaborate work on a data foundation that wasn't checked closely enough
	- Division of focus: Kristen nails down the data-capture reference to where it's fully reliable and understandable; Yungi works the abstract, top-down connection between the data questions and the bigger questions. Tab listener and advanced methodology stay parked. Both coordinate with Joe on the person-ID disambiguation

- Standing questions and upcoming travel
	- Kristen's standing questions (raised several times over a few days while the supervisor was out sick) are now addressed. The norm going forward is to send a message rather than wait days, though the gap here was understandable
	- The supervisor leaves next Tuesday for a conference in Amsterdam (~6 days) and should be assumed reachable only once or twice during that stretch. Plan for reduced supervision and prioritize work that can move forward independently

Defined next-step actions

For Kristen:

1. Revise the data-capture reference document to add the explanatory depth we walked through, especially in the overview (define page view / page leave / page view ID / session ID, and open each question with a plain-language framing before the event tables); start now without waiting for all of Yungi's feedback, beginning with the first section
2. Investigate the person-ID anomaly: check the 2510 student count, get the rosters from the supervisor, identify which fall students' IDs were reused, and work out a disambiguation/mapping with Joe
3. When the supervisor asks you to resume the tab-listener work, fix the sentence Joe flagged and answer his questions on the closed PR before asking for re-review
4. Don't merge the tab-visibility branch or update the course website until the supervisor confirms it's safe

For Yungi:

1. Go deeper on feedback for Kristen's document, taking the second section while she revises the first
2. Write notes or a mind map connecting the five data questions to the bigger research questions the supervisor cares about (e.g., what "student engagement" means), and for each, brainstorm what behavioral website data could capture it
3. Park the Markov/sequence methodology and EDA work for now; keep it banked as a candidate to return to

For supervisor:

1. Send Kristen the 2510 and 2520 rosters for the person-ID disambiguation
2. Finish the website dependency cleanup and package lock with Joe before the team resumes site updates
3. Check in once or twice during the Amsterdam conference (from next Tuesday, ~6 days)

Next meeting: likely Monday or Tuesday next week (before the Amsterdam trip)
