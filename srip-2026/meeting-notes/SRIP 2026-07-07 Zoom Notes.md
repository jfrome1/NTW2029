2026-07-07

Topics covered:

- Using the same language for the same thing: a mix-up surfaced where "report" (your word) and "executive summary" (the supervisor's word) turned out to mean the same document, which made it look like you'd started something different. When we use different terms for the same thing it's easy to lose each other, so it's worth checking we're using the same words, and flagging a change in direction before running with it.

- The executive summary, and who it's for: it's partly for the supervisor and partly for you. You each need a poster, and a poster session is an elevator pitch, where someone walks up and you have thirty seconds to a minute to tell them what you found. The executive summary is practice for exactly that: boiling the work down to a short, clear story you can get across quickly. That's the point of it, and it's genuinely hard, so a longer, more detailed write-up works against it. Keep it to a story with three or four charts.

- Independent study versus a job: in an independent study you follow what interests you; in a job the priority is what's most useful to the project. Learning LaTeX and Overleaf is fine on your own time, but with two weeks left, an hour spent on the tooling is an hour not spent on the questions we want to answer and the analytics that would answer them. (LaTeX is a specialized, older publishing format, fine to know, just not the focus now.)

- Checking the data before trusting it (the November "about half active" case): the earlier version of those graphs had been built from data pulled together through PostHog AI, and once it was redone with the actual cleaned data the drop disappeared, with the cohort holding at about 24 active students. The larger point: believing something false feels exactly the same as believing something true, so you can't tell from the inside that a number is off. With AI-assisted work especially, someone has to take responsibility for verifying the output, which is why we keep going back to confirm the data before building on it. Good work catching and fixing it, and a clear example of why the checking matters.

- Rage clicks (2510): concentrated in a single student (about 38 over the semester, probably just their clicking style), with everyone else in the 5 to 10 range, so it isn't worth a deeper look.

- Path normalization (Kristen): done both ways, the trailing-slash trim and the rename remapping pulled from the site's git history for the 2510 window. One caveat: some pages were replaced rather than formally renamed (there's a drafts feature on the site), so a few won't be catchable from the history alone, and chasing those page by page isn't worth the effort. When a change like this touches a lot of views, it helps to characterize the impact when you report it (for example, "the biggest change was about 5%"), so the supervisor knows what it means.

- A handoff document for the next interns: this is separate from the executive summary. The valuable thing is a short set of documents that orients the next interns to the resources we've built, so they can get up to speed quickly without reading everything end to end.

- The main focus for the remaining time is next term's analytics: how to improve what we measure so next year's questions can actually be answered. To correct something the supervisor said earlier: these improvements are yours to design and, where feasible, implement this term (you've already started with the tab-focus work); they are not a hand-off for Joe to build.

Defined next-step actions

For Yungi:

1. Write the executive summary as a story, three or four charts at most, in about a day, on the cleaned cohort and normalized pages, with the filters applied and stated in the document.

For Kristen:

1. Take about a day to write an orientation and handoff document for the next interns: what would get them up to speed on the resources we've built without reading everything thoroughly.

For both interns (Thursday onward):

1. Start designing next term's analytics improvements: imagine coming back next summer and decide what you'd want the data to look like to really understand what students are doing, which questions matter most, what analytics would answer them, and how to implement them. Implement what you can this term.

Next meeting: Friday afternoon (the supervisor will confirm timing).
