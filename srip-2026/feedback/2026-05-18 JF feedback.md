## Kristen

To answer your two questions:

1. I searched the repo for visibilitychange and didn't find it. I'm asking Joe whether there's some other mechanism we have (maybe blur/focus events, something I haven't thought of) that handles tab visibility. More on this below.
2. Yes, the tab-switching limitations you're flagging matter significantly. I'm glad you raised them. This is exactly the kind of thing that's easy to document around and move past, but it turns out to be central to what we're trying to learn.

Why the tab-switching gap matters:

By default, PostHog tracks page loads ($pageview) and page unloads ($pageleave), but it doesn't know when a tab gets switched into the background. That means "time on page" computed naively from event timestamps includes time when the tab was hidden. A student could load a page, switch to a different tab for 40 minutes, then come back and close it, and that 40 minutes would count as engagement.

This matters for several of our core research questions ("how much time does each student spend on each page," "how much did each person spend on the website in each week"). Without tab-visibility detection, the time measurements aren't reliable enough to answer those questions accurately.

So if Joe confirms we don't have anything handling this, we'll need to add it. Either Joe handles it, or you work on it as part of the Phase 4 implementation. Either way, the limitation you identified is something the project should fix, not just document around.

Finding things in the repo yourself:

GitHub has built-in code search inside any repo, which means you can answer "does this code exist?" without cloning the repo locally. Steps:

1. Go to the repo on GitHub
2. Press / (or click the search box at the top)
3. Type the term you're looking for (e.g., visibilitychange)
4. Results show every file and line containing that term

For questions about what events are being captured, try searching for posthog.capture to see all the custom events being sent. For listeners on browser behavior, try document.addEventListener or window.addEventListener. If something turns up, you can read the surrounding code to see what triggers it and what data gets sent.

If after searching you're still not sure, ask Joe (but try the search first).

On documentation work right now:

One more thing, even though you haven't asked: the documentation you're building (low-level overview, event-level overview, limitations) is the right sequencing for where the project is right now. We haven't yet settled what specific research questions we're answering, so building an inventory of "what's available and what are the limitations" is the right foundation. Once the research questions are clearer, we'll tie your inventory to specific questions, like "to answer X, we need events Y and Z, and our limitations on those are A and B."

So if you're worried that you've been on documentation for several days, don't be. This is the right groundwork. The next phase will be more pointed analytical work, and it'll go faster because of the inventory.

## Yungi

To answer your question: yes, you're on the right track. You executed yesterday's redirect well. Finding 13 articles plus 2 handbooks via abstract scanning is the right pace and method for this stage. The next thing to learn is how to calibrate relevance yourself, which is mostly what this note is about.

How to tell which sources are relevant - here are three things that matter:

- Are the analytics about an online-only course (less relevant), or about a website that complements in-person learning (more relevant)?
- Is the paper's goal relevant to our concerns, such as student engagement? Or is it about something we're less concerned with, such as whether students complete the course?
- Is the paper looking at explicit student feedback like surveys and course evaluations (less relevant), or at ways to infer useful insights from typical student behavior (more relevant)?

These questions are based on my review of the sources that you looked at. As we look at more sources, we may find additional criteria.

Worth reading:

- Handbook 1, introduction. Read for the shape of the field, not the details.
- Paper 7 is another overview of learning analytics. Same skim approach: get a sense of the basic types of things people are doing, so you know what to look for in more detailed research.
- Paper 9 is also an overview, but the results list a number of independent topics worth reviewing to see if there are things we should be thinking about that we're not.
- Paper 5 is relevant.
- Paper 8 is potentially relevant and only two pages. The main takeaway is probably what they measured, which includes things I haven't checked, like the number of times a student logs into the website.

Possibly relevant:

- Paper 6. I couldn't tell from a quick scan; it depends on the kind of course. Skim and judge against the three criteria above.

Not relevant (and why):

- Paper 1 focuses on predicting whether students stay in or leave a class, which isn't our focus.
- Paper 2 is about web-based learning where the website is the entire interaction with the course. Ours is a supplement to in-person learning.
- Paper 3 is similarly about online education and preventing dropout.
- Paper 4 tests whether emailing students about their behavior on a website affects performance, and I'm not planning anything like that.
- Paper 10 is about analytics based on what students reported in surveys. We're looking at behaviors that aren't intentional reporting.
- Paper 11 I thought would be very relevant, but it's about computer vision analysis of facial expressions and body language, which isn't something I'm considering.
- Paper 12 evaluates a specific digital reader learning technology I'm not employing.
- Paper 13 isn't relevant.
- Handbook 2 doesn't seem relevant to me.

One other thing about citations:

For Paper 11 (and useful to know in general): if you look at the citation, the italicized part, which is normally the journal title, is _LAK'11_. I'm going to assume that's the title of a conference held in 2011. As a general rule, conference papers are less reliable than journal publications. If you're comparing two sources and one is a conference paper, weigh it less heavily. Not a reason to discard, just to calibrate.

GenAI:

I saw that you initially avoided using GenAI and then started using NotebookLM to check whether your sources are relevant. It's good that you tried something new while you were waiting for me to get back to you.

The main thing about using GenAI to summarize or read sources: it will only be useful if you already know what you want to find out. For example, after reading one of the overview chapters or articles, it might be worth putting it in NotebookLM, describing our project in some detail, and asking whether the source has anything relevant to our goals. Just dropping a source in and asking for a generic summary, with no context about what you care about, probably won't be very useful.
