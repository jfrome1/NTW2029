2026-05-12

Topics covered:

- Classroom and recording logistics
	- Classroom (SRIP working room) confirmed accessible; one other intern was working there
	- Going forward: meetings recorded on Zoom for auto-transcription; supervisor sends the link/transcription to interns. Transcription isn't perfect (it sometimes flips "do" to "don't") but is workable
- Git as the shared workspace
	- Both interns not really familiar with Git; supervisor admits he's not either ("I always have Claude explain to me what's going on")
	- Web UI is enough; don't need to learn command-line Git
	- Walked through the SRIP subfolder inside the main course repo. README orients them to the SRIP-specific work; the repo's root README is for the website itself
	- Current 4 folders: each intern, meeting-notes, references. More can be added as needed
	- Supervisor does meeting notes for the first stretch, then hands off to interns on a rotating basis
- Daily schedule and meeting time
	- Yungi: bed ~10pm, up ~9am (11 hours)
	- Kristen: late-night person, up 1-2pm
	- Decision: meet after lunch (works for both)
- Daily reports format
	- File path: `[your-folder]/daily-reports/YYYY-MM-DD.md` (numeric date)
	- Content: what I planned to do, what I did, questions/obstacles, one or two things to start tomorrow
	- Not an ongoing learning-notes document -- short encapsulation
	- It's data collection for the supervisor too (planning future interns, calibrating how much work fits in a day). Don't feel bad if planned items spill
- Communication norms
	- Default to email; CC the other intern unless private
	- Telegram only for quick-response items; set notifications and respond with a thumbs-up reaction to confirm receipt
	- Outside-meeting questions welcome. Try ~30 minutes of self-search first; don't burn 3 hours being proactive
- Markdown introduction
	- Both not familiar with markdown. Explained as lightweight HTML-like styling that's human-readable in raw form
	- `#` for headers, `-` for bullets, `.md` extension
	- YAML frontmatter at top (created, lastUpdated; ignore lastEvaluated for now)
	- All working files in markdown; supervisor doesn't want to deal with Word files
- File naming
	- Lowercase, hyphens between words, no spaces
	- .md extension
- AI ownership
	- Using AI to draft or check is fine, but interns own the output: people will treat it as if they wrote it themselves
	- Can't say "the AI put that in there, sorry"
- Kristen feedback (low-level PostHog overview)
	- Doc was good; drafted herself, used AI only to verify some details (fine)
	- Next: ground the doc in the site's actual instrumentation. Compare against `README-ANALYTICS.md` in the repo and against PostHog itself (browse events, see what's captured)
	- Expand the doc with a section on what's actually implemented or not on this site
	- Verify the "need to verify" items she flagged
	- PostHog AI is good for figuring out how to see what events are captured
- Yungi feedback (high-level analytics framework)
	- Doc was good but uses the wrong framework (he adopted PostHog's PMF/business framework, which targets businesses choosing whether to use a product)
	- Differences from course site: students don't choose whether to use it; site's goal is education, not sales. Churn-because-frustrated maps differently when there's no alternative
	- Find a better framework via the learning analytics / educational analytics literature
	- Search terms: learning analytics, course analytics, course site engagement
	- LMS context: Canvas (NUS uses this), Moodle, Blackboard. Canvas has built-in analytics but they're "vast" and not granular; raw data isn't accessible from NUS IT
	- Look for peer-reviewed research (explained the peer-review process). Sources: Google Scholar (scholar.google.com), NUS library database, library chat with a librarian
	- Rewrite the doc on the new framework. Goal isn't comprehensive coverage; goal is ideas that help us figure out how to think about this problem
- Ultimate project goal (responding to Yungi's question 2)
	- Improving the course -- both learning outcomes and student satisfaction (the supervisor is evaluated partly on student evaluations)
	- Example use case: resource pages took dozens of hours to write. If only 3 students looked at them all semester, the supervisor shouldn't make more -- or should figure out how to get students to use them differently
	- UI changes only with measurable benefit; not changes that "look cool" without a way to test whether they help
- Astro / Starlight context
	- Site is built on Astro with the Starlight theme (astro.build, starlight docs)
	- Worth interns getting their head around it; supervisor admits the site uses far less than Astro is capable of

Defined next-step actions

For interns (today and tomorrow):

1. Each find a ~1 hour GitHub Git tutorial and complete it
2. Reread the README and `how-we-work.md` independently; write down anything unclear for next meeting
3. Add a 3-sentence `bio.md` to your personal folder via the web UI (Git practice in disguise)
4. Upload yesterday's working docs (the ones written in Google Docs) into your personal folder. Export from Google Docs as TXT first, then save with `.md` extension
5. Commit a daily report markdown file each weekday in `[your-folder]/daily-reports/YYYY-MM-DD.md`
6. Set up Telegram notifications; respond with thumbs-up to supervisor messages
7. Read each other's documents

Kristen specifically:

1. Compare your low-level overview against actual site instrumentation (README-ANALYTICS.md + PostHog dashboard); expand the doc with a "how this is implemented or not" section
2. Verify the "need-to-verify" items in your existing doc
3. Use PostHog AI to figure out how to browse events/properties; ask for the best 5 starting points for learning PostHog on an existing site
4. If time: try a PostHog query -- average cumulative time a student spends on the site per semester; graph the variation across students

Yungi specifically:

1. Rewrite the high-level doc using an educational/learning-analytics framework instead of business PMF
2. Search learning-analytics terms (learning analytics, course analytics, course site engagement, LMS) on Google Scholar and the NUS library database
3. Find peer-reviewed research about analytics for educational/course websites
4. Skim Canvas / Moodle / Blackboard analytics for context on what's typically captured

For me:

1. Write and upload meeting notes for this session; hand off to interns on a rotating basis after that
2. By tomorrow morning, tell the interns whether we'll meet on 5-13 (via Telegram or email)
3. Write a user-friendly tech stack document and upload it to the repo references folder

Volume check

- Yungi estimated about 1.6 days of work in the package above
- Familiarization options if interns finish early: Astro / Starlight site exploration; PostHog self-training docs and videos; a markdown tutorial (~1 hour)
