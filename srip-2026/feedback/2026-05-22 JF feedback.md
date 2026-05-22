Hi Kristen and Yungi,

Apologies for the silence; I've been sick the past few days. I've read through your daily reports and the work you've each been doing. Meeting in an hour as planned. A few responses in advance of the meeting:

## Kristen

The event-level-overview doc is excellent. Real depth, course-site-specific framing for every limitation, useful cross-references to current usage. Well done.

A few answers to questions from your daily reports:

Quiz pages: The site used to have some "quiz yourself" Nutshells for students where I used HTML <details> elements to allow students to reveal and re-hide self-study answers. OpenQuiz/closeQuiz was built around those. I'm not actively using that pattern right now. Going forward, I would probably move quizzes onto Canvas, which has built-in quiz tracking and makes it easier to see who's done what. So you can treat openQuiz/closeQuiz events as low-priority, we may actually remove those.

PostHog vs Python: Default to PostHog. In the meeting, let's discuss why you're using Python so I can get a better understanding. I'm guessing you're using Python because you're more familiar with it, but remember that one goal of the internship is to expand your skill set. Also, the data lives in PostHog, the platform integrates capture + query + visualization + sharing, and PostHog insights and dashboards persist as artifacts that I, future interns, Joe, and you can all see by browsing the web dashboard. That's not the case with Python notebooks.

When you hit something that seems hard in PostHog, the first move should be to ask (PostHog's Max AI, GenAI, or Joe) how to do it in PostHog before switching to Python. Claude says: "Often the SQL editor seems slow because a query is being run interactively over and over; saving it as an insight caches it and it loads fast on subsequent visits. Other times the difficulty is genuinely a 'this is awkward in SQL' case (complex data cleaning, certain pivots, custom statistical work) where Python is the right tool."

When you do use Python for those cases, try to bring the result back into PostHog when you can. Claude e.g.: "if you do clustering in Python, add the cluster assignments as person properties so the clusters become queryable and visualizable in PostHog."

Skill-wise: building SQL fluency (HogQL specifically) is part of what this internship is for. SQL is a load-bearing skill for any data work, and it's the load-bearing one for this project since the data and the deliverables both live in PostHog.

Additional events (closeNutshell, page rescrolling): Let's discuss in the meeting. I need a better understanding of how these events differ from existing events.

Tab visibility listener: Joe said go ahead with your approach. His preference is exactly what you did: custom events for visibility, not touching the built-in $pageview/$pageleave events. He explicitly flagged that overriding $pageleave would cascade complexity, so the custom-event approach is the right one.

Before going live, Joe asked for a short doc describing the changes (what events you added, what they capture, how to use them) for his review. Your event-level-overview sections on tabFocused/tabUnfocused cover most of what he'd want — easiest path is probably to extract that into a standalone "what's changing" note for him. Submit it as a PR for Joe's review rather than pushing directly, which is how code review usually happens professionally, and it'll let Joe leave line-specific comments and approve when ready. (You'll need Write access on the repo to push a branch; I'll bump you up before the meeting.) Once Joe approves the PR, you can merge.

## Yungi

Funding: Yes, the research fund can cover Claude Pro for you and Kristen. I talked to Zu Ning and got approval. Start with the $20/month plan, which should be plenty for most use, and we can step up later if you actually run into limits. You'll need to save invoices and receipts so you can submit for reimbursement. In the meeting, remind me to talk to you about differences between Claude.ai, Claude code, and Claude desktop.

The papers: I want to clarify something from our Monday meeting. Monday's feedback flagged specific sources to reread, including the Handbook 1 introduction, Papers 5, 7, 8, 9, and Paper 6 to skim. Looking at your write-ups since Monday, I see substantial work on different papers (process mining in Moodle, seqMAC, SRL methodology) but I'm not seeing engagement with the specific ones I flagged. Help me understand what happened did you read the flagged ones and decide they weren't worth writing up, or did you pivot to other papers? We'll talk through it.

See you soon.
