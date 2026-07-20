2026-07-13

Topics covered:

- Subscription approval
  - The one-year shared Claude subscription (about $300, one account shared between you both) is approved, so you can go ahead with it.

- Analysis and future-questions document (Yungi)
  - Yungi presented his draft summarizing what data we have, what it can tell us, and what future questions and additional data might be worth pursuing.
  - Framing: state the questions as "what does the data tell us?" rather than "what can we predict?" Describing what is happening comes before theorizing what causes it and predicting how it changes, so the prediction framing is a step or two ahead of where the project is now.
  - Purpose of the document: it is forward-looking (what would help us learn more next year), not a narrative or self-report of the summer's work. Keep it light, since it is the executive-summary piece rather than the main deliverable.
  - Pitch the questions at the level a teacher would want to know, not at the level of detailed technical mechanics (and not questions we have already answered). Examples at the right level: How do students arrive at resource pages, by following a link we gave them or by wandering from another internal page? Are the nutshells being used the way they are intended (open one, read it, then open the next) versus opening all of a page's nutshells at once? Do students come to the site with a specific intention and go straight to the page they want, or do they browse around? Do students read assignments in advance of the due date?
  - Assigned focus: the nutshell-usage question and the intention-versus-browsing question, with thought given to how each could be measured.

- Instrumentation-changes document (Kristen)
  - Kristen presented her document on modifying existing events for clearer signals and adding new events to make metrics like duration easier to compute.
  - Who the document is for: if the changes are not finished this term, it goes to Joe (possibly next year's interns, or the supervisor implementing them with Claude Code). Writing the changes out is also part of working through how the events should behave.
  - Structure suggestion: lead each entry with the problem and the hypothesis, then the event and its purpose, keeping the purpose separate from the rationale for choosing that particular trigger. Worked example for userIdle: name the gap (we cannot tell whether a student is actively engaging with a page or just has it open), state the hypothesis (an active user moves the mouse or triggers events at some regular interval), then give the event and how it closes the gap.
  - Simplify the event set: rather than separate userIdle, user-still-idle, user-active, and user-still-active events, a single userIdle event can cover all of these (idle when present, active when absent), with idle duration computed by scanning consecutive events for the transition points (a userIdle whose prior event is not userIdle marks the start). Fewer events are easier to design and verify, at the cost of a slightly more involved query.
  - Keep tab-focused and tab-unfocused; they look important. For closeNutshell, note that there are two ways to close a nutshell, and consider whether to distinguish them.
  - Two further asks: recommend how the person ID should be standardized going forward, and suggest any other data-standardization or verification safeguards (for example, building in cross-checks like adding a total up two different ways to catch errors) that would make future data easier to verify and clean.

- Working together (development note)
  - Keep coordinating with each other: when Yungi has a question about what to measure (such as nutshell use), he can check with Kristen whether it is measurable now or whether a new event or query could capture it.
  - Write down all the changes being made and why, so next term's work can pick them up.

Defined next-step actions

For Kristen:

1. Decide what to do with the analytics feedback and start implementing the event changes, restructuring each entry as problem / hypothesis / event / purpose and simplifying the event set where you can.
2. Recommend how the person ID should be standardized going forward, plus any other data-standardization or verification safeguards that would make future data easier to clean.

For Yungi:

1. Reframe the document as forward-looking (what would help us learn more next year) rather than a self-report, and state the questions as "what does the data tell us" rather than in terms of prediction.
2. Develop the nutshell-usage question and the intention-versus-browsing question, thinking about how each could be measured, in coordination with Kristen.

For supervisor:

1. If the event changes are not finished this term, consider implementing them with Claude Code, or route them to Joe.

Next meeting: to be scheduled; the supervisor will touch base in a couple of days (the internship ends 17 July 2026).
