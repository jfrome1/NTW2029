2026-06-25

Topics covered:

- Where we are in the project
	- The work has reoriented over the past few weeks toward tying the analysis to specific questions, starting with the five basic descriptive questions. A useful way to hold the whole program in view: there's the data we collect, our confidence in that data, the data answering a question, and our confidence that it answers the question, and that last confidence falls as the questions get less basic. The whole research program climbs from description upward. For now the focus stays on the first part, what we have and what it shows, and we're getting near the end of that part. The second part, what we'd want to collect better next term, comes after.

- Yungi: the 2510 descriptive picture and graph precision
	- Yungi walked through his 2510 analysis and the start of a 2510-versus-2520 comparison. The direction is right; most of the feedback was about precision and verification rather than about what to study.
	- Every graph needs to stand on its own: a title stating the relationship being shown, axes labeled with their units, a legend, and colors that are easy to tell apart. Looking at the first graph, it wasn't possible to tell what the y-axes meant or what was being compared without asking. This matters because the reader doesn't carry the context you have in your head.
	- Save graphs as PostHog insights rather than screenshots. A screenshot puts a fixed layer between the visualization and the data, so the graph can't update when the data changes and you can't hover for detail. Presentation aesthetics matter much less than this.
	- The first graph showed page views and unique-student counts tracking together over the term. The reading Yungi drew, that students tend to look at a similar number of pages per visit and the variation is in how often they come rather than how many pages they view, is a good hypothesis from a curve. The next step is to verify it quantitatively: look at the spread between the most and least pages viewed per student, or a histogram of each student's average views.
	- Cross-check graphs against one another. Graph 1 implies only about half the students were active in November, but Graph 5 shows nearly all students active almost all the time, and the supervisor's weekly activity email also shows nearly everyone active. That makes the November figure an anomaly to investigate rather than a finding. When the meeting notes go out, capture the reason it looks anomalous, so the check is clear later.
	- Be precise with labels and phrasing. Wording like "what time of day did they come in" isn't clear to a reader: name who "they" are and what "came in" means. "Number of events triggered" and "number of pages visited" mean different things, so decide which you actually care about and label it that way (for instance, "how active were students at different times of day"). A chart of event frequency over the term should say it's the frequency of events triggered by students over the term, and "feature" is better named "event."

- Yungi: nutshell analysis and rage clicks
	- Yungi went deep on the nutshells (median open time, open-close ratios, the most-opened nutshells) ahead of having the basic descriptions solid. The instinct to break events into categories and look for a story is good, but this deeper analysis should wait until the basics and the measurement definitions are in place.
	- The November spike in nutshell opens lines up with the assignment nutshells, and longer assignments simply have more nutshells, so a raw count overstates the rise. A percentage, how many of a page's nutshells were opened, would be more meaningful. If you report close behavior, report it as the percentage of opens that were followed by a close, across all nutshells rather than the top few, and look at the range. Bear in mind that whether a nutshell gets closed may reflect the page's layout (a long page with many nutshells) more than whether it was read, so it's hard to interpret; get the basic frequencies first.
	- A count on its own can mislead. The 131 rage clicks over the term mean little without the total number of clicks to compare against; a number only becomes interpretable once it's anchored to its base. Percentages are usually the way to do that.
	- A note on working with AI: it tends to do exactly the task it's given in the order given, so the stepping-back-to-the-big-picture and supplying-the-missing-context part is yours.
	- The main thing: this internship is directed work, not an independent study on what interests you most. The read-event question had been assigned at the last meeting and wasn't done, and that one matters, because if we don't know what the data means, the rest of the analysis can't be trusted. The aim now is to build out the basic descriptive picture with high confidence, the goal being something like 80 to 90 percent confidence that each graph means what it claims and maps correctly to the data, rather than the rough 30 to 40 percent we're at. When you present a graph, you should be able to say what the axes are and which query and which events produced them. The eagerness to push ahead is genuinely welcome and better than the opposite; it just has to be balanced against getting the foundation down first. The instincts here are good; it's a matter of practice and taking the feedback in.

- Kristen: days-to-due-date and attributing activity
	- Treat each assignment as its own P-code with its own deadline, not grouped into Paper 1 and Paper 2 as wholes. Paper 1 is three assignments on a single page; Paper 2 is six assignments across an overview page and its sub-pages.
	- Counting all events on a shared page across the whole term double-counts activity across the milestones that share it. A cleaner approach is to attribute activity within the window between the previous assignment's due date and this one, which keeps the shared overview-page activity in a non-overlapping window. It's worth showing two measures: activity on the relevant assignment page(s), and overall site activity, since students use grammar, schedule, and other pages while writing too.
	- Consider capping the window (say two weeks before the due date) rather than a full month, since the question is really how students use the site while working on an assignment. Comparing assignments side by side, both total times accessed and times accessed in the week before due, would be interesting.

- Kristen: autocapture, session IDs, and duration
	- Autocapture records everything, so the task is deciding what's worth keeping. Group the currently-unmapped autocaptures into a few meaningful categories (clicking the sidebar, a headline link, and so on); the AI can do this grouping from the site's structure quickly. It's worth doing, because something like "no one uses the right-hand sidebar navigation" would itself be useful to know.
	- On the session-ID anomalies, "it's not supposed to happen" from PostHog's AI isn't a sufficient answer; the question is why it did happen. Bring Joe in, and when you get an explanation, ask whether it's a guess or something backed by a reference, then follow up until it's actually settled.
	- Duration confidence is reasonably low right now. The current method splits a session at gaps over 15 minutes, which is a reasonable but arbitrary threshold, and the active-tab question is still unresolved. That's an acceptable place to be as long as the confidence level is stated honestly.

- Both: the read event
	- One of the events, `read`, fires when a student scrolls past the halfway point of a page, so it measures scroll depth, not reading. The open question is whether it fires on a page short enough that the lower half is already visible without scrolling; if so, a low read-ratio on short pages is a measurement artifact. Settling this unblocks interpreting the read numbers, and Kristen's live-recreation method is the way to test it. Until it's settled, treat `read` as a scroll-depth proxy and don't compare read-ratios across pages of different lengths.

- Both: the consolidated descriptive picture, and format
	- The next milestone is a companion to the data-question mapping document: alongside "here's what we can measure and how," it should give the actual answers, the method behind each, and how confident we should be in them, on the cleaned cohort data. That's the deliverable the report and poster build on.
	- Figma isn't an ideal presentation format; a text report with graphs or a slide deck works better. It helps to think about the website in terms of the sections the supervisor cares about (the resources pages especially, then assignments and schedule), and to put any cohort comparison side by side.

- Both: working habits
	- Logging rough hours-by-task in the daily reports is worth keeping up. It helps gauge how long things are taking, and reporting it consistently reflects well, because a supervisor reads steady reporting as steady work. The same goes for acknowledging meeting messages promptly: a quick reply costs little and gives a good impression, even when the underlying commitment was never in doubt.

Defined next-step actions

For Yungi:

1. Build out the basic descriptive picture of 2510 (then 2520) usage with high confidence, staying within the five basic questions; hold the higher-level relationships for now.
2. Make every graph self-explanatory (title naming the relationship, labeled axes with units, a legend, distinguishable colors), and save graphs as PostHog insights rather than screenshots.
3. Be able to trace each graph to the query and events its numbers come from.
4. Investigate the November anomaly, recording why it looks anomalous, and cross-check graphs against each other as a habit.
5. Hold the deeper nutshell concentration analysis; if reporting nutshell use, report the percentage of a page's nutshells opened and close rates across all nutshells, not just the top few.
6. Anchor every count to its base (for example, rage clicks as a share of total clicks).
7. Move from Figma to a report or slide format, organized around the website sections the supervisor cares about, with cohort comparisons shown side by side.

For Kristen:

1. For the days-to-due-date views, key each assignment by its P-code and deadline and attribute activity within the window between the previous due date and this one; show both relevant-page activity and overall-site activity, and consider capping the window.
2. Group the unmapped autocaptures into a few meaningful categories and drop the truly unmappable ones from the event-type pie.
3. Keep pushing the session-ID root cause: get a real explanation, involve Joe, ask whether answers are speculation or referenced, and follow up until settled.
4. Bring the duration-confidence picture into one place, stating the 15-minute-split assumption and the active-tab and mouse-movement caveats.

For both:

1. Settle the read-event short-page case and relabel `read` as a scroll-depth proxy; coordinate, with Kristen running the live-recreation test.
2. Keep the scope to 2510 and 2520, filter out 2420, and resolve the cross-semester ID reuse (Kristen shares her person-ID method with Yungi).
3. Produce the consolidated descriptive picture: the companion to the data-question mapping giving the answers, the method, and the confidence, on cleaned data.
4. Keep logging rough hours-by-task in the daily reports.

For supervisor:

1. Set up the next meeting.

Next meeting: one or two more times this week; the supervisor will confirm the timing.
