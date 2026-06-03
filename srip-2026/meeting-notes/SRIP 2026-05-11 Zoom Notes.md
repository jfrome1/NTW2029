2026-05-11

Topics covered:

- Course website
	- interns' takeaways were that the structured site (sidebar, search, hyperlinks, Nutshell expansion links) was more usable than typical Canvas-PDF-dump courses
	- website is an Astro static-site setup (Markdown → HTML build)
	- the rationale for Nutshell links is to give optional depth without bloating assignments
	- webpage anchor links are for emailing student links that direct them to specific parts of a page
	- website follows principles for when to put content in different locations (main page, nutshell links, anchor links)
- PostHog
	- interns reported it as "easy way to make dashboards" (Yungi noted Max AI / MCP / npx wizard); Kristen found it comprehensive (web analytics vs. product analytics)
	- I don't know the deep mechanics
	- most query work will be natural-language through Max AI
	- one key skill is checking AI output for correctness
	- use PostHog Max AI not just for query generation but as a teacher/discussion partner (explain SQL, walk through queries function by function, discuss how to plan analytics)
- Project framing: two parts
	- analyze existing PostHog data
	- consider/design website changes for more useful data collection
- Cross-checking discipline
	- extended Excel-totals example (compute the same number two ways to surface errors; e.g., Section-1 + Section-2 should equal "all students," and last year's discrepancy revealed un-excluded internal users).
- Proxy data
	- analytics are a proxy for what you actually care about (page-open time ≠ reading; could be nervous scrolling). Same logic as IQ tests for intelligence.
- Working norms
	- 40 hr/week, regular office schedule (flexible time of day),
	- daily meetings, end-of-day reporting email, intentional next-day planning
	- direct feedback that isn't personal judgment, honesty about what they don't understand is more important than appearing competent
	- the emphasis this round is on higher-level strategic thinking: connecting analytics to the "so what," not just building dashboards.

Defined next-step actions

For interns (today / tomorrow):

1. Collect access cards for SRIP working room (first floor classroom); check that they can access.
2. Email me their PostHog account email and GitHub account email so you can grant project access.
3. Write two complementary documents, each intern responsible for one doc:
	- Low-level (PostHog + web analytics fundamentals): how events are captured, what fields exist, what's lost in normal operation (closed tab, browser crash, computer sleep, page transitions), how confident we can be that 100% of behaviors of interest are captured, and under what conditions event-end signals are or aren't received.
	- High-level (PostHog strategy): how to plan and approach analytics for a non-financial website: dashboards vs. ad-hoc queries, how to think about what's worth measuring, workflow strategies. Avoid the "I can build a panel that does X" trap.
4. Write down project questions to discuss in daily meetings, keeping in mind the projects' ultimate goal: help me improve my course
