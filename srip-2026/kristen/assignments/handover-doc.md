## **1\. Summary**

**Goal of project:** To understand how students are using the website. 

**Current progress (as of AY25/26 summer):** 

Student behavior is tracked via PostHog analytics on the course website. Raw events are filtered and cleaned into SQL views (Section 2.4), which feed into dashboards and insights (Section 2.5). Two cohorts' data was used – AY25/26 Sem 1 (2510) and Sem 2 (2520), as their data was the cleanest available. 

However, there are several limitations; understanding student behavior sometimes requires properties or granularity that events do not capture, and some events cannot fully or accurately reflect what students actually did (e.g. tab-switching, walking away). Documentation exists covering these limitations and the workarounds used where possible (Section 2).

## **2\. Resources:** 

### 2.1. Posthog analytics overview documentation 

**What it is:** A low level overview of Posthog’s analytics, involving:

1. how Posthog tracks data for this project specifically (i.e. initialization config, event/session/property definitions)  
2. what gets lost in normal operation (i.e. tab-closing, ad blockers, crashes)  
3. which PostHog metrics (bounce rate, funnels, user paths, session duration, etc.) are useful vs. misleading for interpreting student behavior

More general than the 2.2 resource, which covers specifically events. 

**Purpose:** Several of PostHog's built-in metrics have different behavior from what is stated in official documentation, to allow for easier capturing of the necessary data. For instance, sessions are scoped per-page (not per-site-visit) because of the persistence: 'memory' initialization setting, so entry/exit path and bounce rate don't mean what they normally would. As such, this documentation was created to track how analytics works in the context of the project. 

**Status:** Completed, will need to be updated if tracking implementation changes. 

**Link:** _srip-2026/kristen/assignments/low-level-overview.md (GitHub)_

### 2.2. Posthog event documentation

**What it is:** A summary of all events captured on the website, including custom events (created by the website developer) and default events (automatically logged by Posthog). Each event describes project-specific uses and limitations. 

**Purpose:** Events are actions triggered on the website Posthog’s official documentation is very detailed; however, it has limitations: 

- Does not cover some questions that may arise while reading the docs    
- Many existing QnAs/forum posts are very specific and do not apply to the project   
- Certain information is fragmented across different docs

As such, additional event documentation was created to enable easier understanding, and in the context of the project. All following resources are built on the understanding of Posthog events, which are outlined in this document; hence, it provides a basis of why events are used the way they are in the other resources. 

**Status:** Completed, but custom event additions are currently being discussed. If implemented, they will need to be updated in this doc \+ usage of related events may have to be changed if the new custom event can fulfil its purpose better. 

**Link:** _srip-2026/kristen/assignments/event-level-overview.md (GitHub)_

### 2.3. Questions & scenarios on website usage 

**What it is:** A reference doc that maps questions on website usage to potential scenarios caused by student behaviors (e.g. walked away, multi-tab, reload, back button). Each scenario lists the specific Posthog events and properties that will be captured, and how to compute the main metric of the question correctly.

**Purpose:** The main metric that each question requires needs to be computed differently, as the events produced from different scenarios will differ. This will cause simple event counting to give wrong answers for several common student behaviors – e.g. reloads inflating visit counts, walked-away sessions are split across two different sessions. This doc hence shows methods on how to compute metrics for those cases correctly. 

**Status:** Completed. However, the events captured and metric computing methods (and the corresponding views) under scenarios will need to be updated if new custom events are added.  

**Link:** 

- _srip-2026/kristen/assignments/data-qn-mapping-overview.md_  
- _srip-2026/kristen/assignments/data-qn-mapping (duration).md_ 

\*\*Note: the second link covers Question 1 in the first link. This is because with the existing data, the methods to handle Question 1’s scenarios cannot be used, but given changes, it could potentially be useful. 

### 2.4. Existing views in Posthog & view documentation

**What it is:** A series of SQL queries saved as views (tables). Views can be found in the SQL editor section of Posthog, and are split into the 2510 cohort (AY25/26 Sem 1\) and the 2520 cohort (AY25/26 Sem 2), reflecting the data collected for each semester. The documentation for each view (current-views.md) covers the goal of the view, its fields, its value compared to the raw tables already existing in Posthog, and the dependency order of the views (as several views build on each other). 

**Purpose:** The raw tables in Posthog cannot be directly used, as they include test/dev users, renamed students, deleted/edited pages, and no built-in session logic. These views implement the necessary filters to cleanup once, so filter logic does not need to be rebuilt per query. As such, the views are the foundation most analysis should sit on top of.

**Status:** Complete, being used to visualize charts in the 2510/2520 dashboards. 

**Link:** 

- Views: _[https://us.posthog.com/project/101665/sql\#q=\&output\_tab=results](https://us.posthog.com/project/101665/sql#q=&output_tab=results)_ 
- Documentation: _srip-2026/kristen/assignments/current-views.md_

### 2.5. Charts & insights in Posthog 

**What it is:** Posthog insights and dashboards visualizing the questions in 2.3 (e.g. time per page, resource vs. non-resource comparisons, pageview counts). 

**Purpose:** Many common metrics have already been charted, so check the dashboards before building a new insight from scratch. Some charts are unreliable, due to event-level limitations affecting how well metrics can be computed. 2.3. data-qn-mapping-overview.md can be checked for these limitations, and 2.4. current-views.md covers how the views for those charts are built. 

**Status:** Complete (as of July 2026). 

**Link:** Posthog → Product Analytics → Insights / Dashboards

- AY25/26 Sem 1 dashboard: ‘Activity over 2510 semester’  
- AY25/26 Sem 2 dashboard: ‘Activity over 2520 semester’

### 2.6. Pathname remapping

**What it is:** Documentation covering the process of remapping old/duplicate pathnames into a single canonical pathname per page, for both cohorts. Full mappings are available in Excel (linked in the document). 

**Purpose:** Pages were renamed, versioned (-v3, \-v10, \-2510 suffixes, etc.), or restructured over each semester, so a single page can appear in Posthog with several different pathname values in raw events. This mapping is what the views use to collapse those into one canonical pathname – otherwise, per-page metrics would undercount (traffic split across old and new URLs) or show fake drop-offs/spikes (page renamed).

**Status:** Complete (as of July 2026). Will need to be updated for the new semester (AY26/27), if pages are renamed. 

**Link:** _srip-2026/kristen/assignments/path-normalization.md_

