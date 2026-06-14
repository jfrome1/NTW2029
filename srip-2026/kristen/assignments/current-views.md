**Goal:** This document is meant to give an overview of all views currently existing in Posthog.  

Overview of terms that appear in this document: 

| Term | Description |
| :---- | :---- |
| Maps to  | In Posthog, different tables & views can be linked to each other through shared fields. The ‘Maps to’ column appears in each view’s Fields section, indicating which fields in other tables hold the same value as the given field in this view. This is so that metrics spanning multiple views can be computed by joining on the appropriate shared field. |

Views belong to either of two groups: 1\. views that map students or events to additional fields that could be useful for analysis (lookup views), and 2\. views that aggregate or filter existing data for storage, to avoid having to recompute common filters (materialized views). 

The table below shows a brief overview of views and their intended usage:

| View | Common Usage | Reliability |
| :---- | :---- | :---- |
| \`cohort\_25\`  (lookup view) |  | High. The students & their cohorts  listed in the view align with the 2510 and 2520 student lists under Cohorts in Posthog.   |
| \`all\_nutshells\` (lookup view) |  | Medium-High. The nutshells here are those available for the 2520 cohort. However, if nutshells were edited, their pre-edited version would not appear.  |
| \`all\_pages\` (lookup view) |  | Medium-High. The pages here are those available for the 2520 cohort. However, if pages were edited, their pre-edited version will not appear. |
| \`assignment\_due\_dates\` (lookup view) |  | High. The assignment/due date for each student was retrieved from the course website & a list sent by Prof.  |
| \`course\_weeks\_2520\` (lookup view) |  | High. The course week dates were retrieved from the NUS AY25/26 calendar.  |
| \`actual\_user\_events\` (materialized view) |  | High.  |
| \`events\_with\_study\_sessions\` (materialized view) |  |  |
|  |  |  |

## **1\. cohort\_25**

### **1.1. Overview:** 

*1.1.1. Goal:* Provide an easy-to-query, clear overview of all students within the 2510 & 2520 cohorts. 

This view is built on the \`events\` and \`persons\` table, and displays all students from the 2510/2520 cohorts that triggered events captured in the \`events\` table. Each row corresponds to one student in the 2510/2520 cohorts. 

*1.1.2. Fields:* 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`name\` | Name of student | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: [properties.name](http://properties.name) \`actual\_user\_events\` (view): student\_name |
| \`cohort\` | Student cohort (either 2510 or 2520\) | \- |
| \`person\_id\` | Student ID, alphanumeric  | \`events\`: person\_id \`persons\`: id (UUID) |
| \`distinct\_id\` | Student ID, numeric 2-digit | \`events\`: distinct\_id \`events\_with\_study\_sessions\` (view): distinct\_id |

The query used to build this view involves several steps:

| Step Description | Field used | Reason |
| :---- | :---- | :---- |
| Filter out all events triggered by internal users | \`events.person.properties.name \== joe, jonathan, fromeguest\` | Test users are not students, and therefore should not be included in the cohort roster.  |
| Join the \`events\` table and \`persons\` table on \`id\` (\`persons\`) and \`person\_id\` (\`events\`)  | \`[persons.id](http://persons.id)\` \= \`events.person\_id\`  | Gain access to the \`events\` table’s \`distinct\_id\` for the next step.  |
| Filter out all events triggered by users with an alphanumeric \`distinct\_id\` | \`distinct\_id\` is not alphanumeric  | Users with alphanumeric \`distinct\_id\` do not appear in the \`persons\` table, and hence are anonymous (not logged in)/not actual students.  |
| Add cohort tag based on \`name\`: if \`name\` begins with ‘A0-’, then cohort is ‘2510’. Otherwise, the cohort is ‘2520’.  | \`[persons.properties.name](http://persons.properties.name)\`  | Users with \`name\` captured as ‘A0-’ belong to 2510, while users with \`name\` captured as a full student name belong to 2520\.  |

### **1.2. Why existing tables cannot fulfil this view’s objective** 

This view is built on the \`events\` table and \`persons\` table, neither of which alone produces this view’s student-cohort roster. 

- \`persons\`   
* Shows one row per user, but it has no \`distinct\_id\` and no cohort label. As such, it cannot distinguish identified students from anonymous sessions if necessary.   
* Includes test users ‘joe’, ‘jonathan’ and ‘fromeguest’, which would have to be filtered out each time the \`persons\` table is used.   
- \`events\`:  
* Shows one row per event, but has no clean per-person roster.   
* Contains multiple rows per person, and includes events from internal and anonymous users – hence, it will require significant processing before it can be used as a student list.    
* Some events are tagged with the same \`person\_id\` but different \`name\` values – these cases are caused by students being renamed in Posthog after they have already triggered events under their old name. Each event stores the name as it was at the time it fired, so the earlier events keep the old name while later ones use the new one. As such, using the \`events\` table alone will need heavy filtering to get an accurate student-cohort mapping. 

This view addresses these problems by combining both tables, by adding each student’s name, IDs and cohort membership to build a student-cohort list showing all students in the 2510/2520 cohorts. 

## **2\. actual\_user\_events**

### **2.1. Overview:** 

*2.1.1. Goal:* Create a table of all events from the existing \`events\` table, filtering out all events that:

- Track background processes running on the website rather than student actions   
- Are linked to test users/pages  
- Are linked to students who are not in the 2510/2520 cohorts

This view is built on the \`events\` table, and displays events captured from all students from the 2510/2520 cohorts.  

*2.1.2. Fields:* 

| Field name | Description | Maps to  |
| :---- | :---- | :---- |
| \`timestamp\` | Time that the event was captured in Posthog | \`events\`: timestamp |
| \`created\_at\` | Time that the event was triggered by the student  | \`events\`: created\_at |
| \`event\` | Name of event | \`events\`: event |
| \`person\_id\` | Student ID, alphanumeric string | \`events\`: person\_id \`persons\`: id (UUID) |
| \`distinct\_id\` | Student ID, numeric 2-digit string | \`events\`: distinct\_id |
| \`student\_name\` | Name of student who triggered the event | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: [persons.properties.name](http://persons.properties.name) \`cohort\_25\` (view): name |
| \`properties\` | JSON object of the \`properties\` field  | \`events\`: properties |
| \`current\_url\` | \`pathname\` with ‘[https://ntw-2029.vercel.app/](https://ntw-2029.vercel.app/)’. If page was a test page, ‘localhost’ will appear in the https.  | \`events\`: properties.$current\_url |
| \`pathname\` | Page URL of page where event was triggered | \`events\`: properties.$pathname |
| \`device\` | Device which student was using when they triggered the event (iOS, Android, iPad etc) | \`events\`: properties.$device |
| \`os\` | OS which student was using when they triggered the event (iOS, Android, etc) | \`events\`: properties.$os |
| \`browser\` | Browser which student was using when they triggered the event | \`events\`: properties.$browser |
| \`viewport\_width\` | Width of viewport that student is using | \`events\`: properties.$viewport\_width |
| \`viewport\_height\` | Height of viewport that student is using | \`events\`: properties.$viewport\_height |
| \`is\_identified\` | \`true\` if event was triggered by a logged-in user, otherwise \`false\` | \`events\`: properties.$is\_identified |
| \`session\_id\` | Unique identifier attached to all events in a session. The final event it appears on is the last event in the session.  | \`events\`: properties.$session\_id |
| \`pageview\_id\` | Unique identifier attached to all events that occur after it on the same page. Persists across sessions until the user leaves the page, with the final event it appears on being the page’s $pageleave. | \`events\`: properties.$pageview\_id |
| \`text\` | Only present in the custom events \`openNutshell\`, \`inactiveNutshell\`, \`internalLinkClick\`,externalLinkClick\`. Shows the visible text content of the element being clicked.  | \`events\`: properties.text |
| \`link\` | Only present in the custom events \`internalLinkClick\`, \`externalLinkClick\`. Shows the full URL that the link element points to.   | \`events\`: properties.link |
| \`page\` | Only present in the custom events \`read\`, \`openNutshell\`. Shows the title of the current page (in the \<title\> html tag). | \`events\`: properties.page |
| \`duration\` | Only present in the custom events \`inactiveNutshell\`. Shows how long the nutshell was open for.  | \`events\`: properties.duration |

The query used to build this view involves several steps:

| Step Description | Field used | Reason |
| :---- | :---- | :---- |
| For each \`person\_id\`, select the \`name\` value from its most recent event (by timestamp) as the canonical name | \`[events.person.properties.nam](http://events.person.properties.name)e, events.person.properties.person\_id\`  | Many events exist where \`person\_id\` is linked to multiple \`name\` values, caused by students being renamed in PostHog after they had already triggered events under their old name.  |
| Filter out all events triggered by internal users | \`events.person.properties.name \== joe, jonathan, fromeguest\` \`events.properties.$current\_url\` does not include ‘localhost’ | Test users are not students, therefore the events they trigger should not be included.   |
| Filter out all events triggered by automatic background processes  | \`event\` is not '$set', '$delete\_person\_property', '$identify', '$web\_vitals' | These events do not provide any analytical value, as they do not reflect student behavior.  |
| Filter out all events triggered by users that are not in the 2510/2520 cohort  | \`[events.person.properties.name](http://events.person.properties.name)\` is not in the ‘name’ field from the \`cohort\_25\` view  | Filters out all remaining non-student users.  |

### **2.2. Why existing tables cannot fulfil this view’s objective** 

The goal of a table containing all events is to enable identification of behavioral patterns through observing the events captured. This view is built on the \`events\` table, which has several limitations that prevent it from fulfilling this objective. 

- \`events\`:  
* Includes all events that were ever captured, including those that were triggered on ‘localhost’ (test’/development) pages, by non-student users (testers/developers) and by background processes from the website. These events are not useful in the context of observing student behavior, and hence should be removed.  
* Several students were renamed across the semester, and hence appear in the \`events\` table under different names but with the same \`person\_id\`. Without standardizing names (the name that appeared with the latest event triggered by the student) for each student across all events, events may be wrongly attributed to duplicate students.    
* As pages/pathnames were changed across semesters **and** over the course of each semester, verification on which pages are meant to be present will be needed. Storing certain properties that may be useful for answering this question (\`current\_url\`, \`pathname\`) as fields hence makes this verification easier and more readable. 

Multiple questions require analyzing all events with different methods, and the filters listed in 2.1 are needed every time all events are used. Storing them as a view makes this easier: the filter logic doesn't have to be rebuilt each time events are needed to answer a question, and PostHog does not have to scan the whole events table on each check. As such, this view is meant to show all actual student events with the standard filters already applied, to provide a clean base for any event-related analysis. 

## **3\. all\_nutshells**

### **3.1. Overview:** 

*3.1.1. Goal:* Create a reference view showing all nutshells that are present on the website. 

Limitations:   
This view shows all nutshells from the pages available to the 2520 cohort only, as these are the pages accessible through GitHub source code (as of 9/6/26). However, as the nutshells are retrieved from the source code, **only the nutshells’ latest iterations (final edited version, accessible to 2520 cohort) are displayed in this view**. Changes in nutshells in the source code may lead to seeming inconsistencies in Posthog:

- Nutshell A deleted: Events involving nutshell A will appear in Posthog up until the date of deletion.    
- Nutshell A edited to nutshell B: Events involving nutshell A will appear in Posthog up until the date of edit. Afterwards, no more events involving nutshell A will appear, and events with nutshell B will begin appearing.  
- Nutshell A added: Events involving nutshell A will appear in Posthog after the date where the nutshell was added. 

The nutshells shown in this view **do not** take the above changes into account. As such, filtering out events with nutshells that do not align with this list may exclude nutshells that were changed halfway through the semester, leading to potential undercounting when calculating metrics related to nutshells. Additionally, trends over time may show artificial drop-offs for edited/deleted nutshells (as the old nutshell is no longer available), or sudden onsets for newly added nutshells, that are caused by changes in source code instead of changes in student behaviour. 

Nutshells do not have a stable ID that remains the same throughout source code changes, hence without a full list of all changes made, such issues may appear. 

- For the 2520 cohort, out of 100 unique nutshells (distinguished by anchor text) appearing in \`actual\_user\_events\`, several do not appear in the \`all\_nutshells\` list. The query below can be run in Posthog’s SQL editor to verify this.   
- ![][image1]

*3.1.2. Fields:* 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`page\` | Page URL (excludes [http://ntw-2029.vercel.app/](http://ntw-2029.vercel.app/)) | \`events\`: properties.$pathname \`actual\_user\_events\` (view): pathname |
| \`anchor\_text\` | Nutshell display text | \- |
| \`href\` | Nutshell link's destination; in-page anchor fragments (\#section-id) | \- |

### **3.2. Why existing tables cannot fulfil this view’s objective** 

The only other table that displays nutshell text/information is \`events\`. This table captures all events, hence filtering to only nutshell-related events will show nutshells for every user that exists, including internal and anonymous users, requiring heavy filtering and processing to rebuild an accurate list of nutshells each time. This view removes the need for this filtering, presenting only actual student nutshells in a clean and easy-to-query form. 

## **4\. all\_pages**

### **4.1. Overview:** 

*4.1.1. Goal:* Create a reference view showing all pages that are present on the website (as of 28/05/26). 

This view shows all pages available to the 2520 cohort only, as these are the pages accessible through GitHub source code. Similarly to \`all\_nutshells\`, as this view is built based on the current source code, **only the pages’ latest iterations (final edited version, accessible to 2520 cohort) are displayed in this view**. Changes in pages in the source code may lead to seeming inconsistencies in Posthog:

- Page A deleted: Events involving page A will appear in Posthog only up until the date of deletion.    
- Page URL A edited to page URL B (e.g. ‘hidden’ added to URL): Events involving URL A will appear in Posthog up until the date of edit. Afterwards, no more events involving URL A will appear, and events with URL B will begin appearing.  
- Page A added: Events involving page A will appear in Posthog after the date where the page was added. 

The general observation in Posthog data is that pages are largely contained to their own cohorts: for instance, most pages accessible to the 2520 cohort have ‘2520’ included in their URL. However, there are some pages (e.g. schedule page) where this does not apply, hence these pages will appear across cohorts. Additionally, like all\_nutshells, the pages shown in this view **do not** take the above changes into account.; all resulting limitations under all\_nutshells apply. 

Pages do not have a stable ID that remains the same throughout source code changes, hence without a full list of all changes made, such issues may appear. 

- For the 2520 cohort, out of 86 unique pages (distinguished by page URL) appearing in \`actual\_user\_events\`, several (47) do not appear in the \`all\_pages\` list.   

*4.1.2. Fields:* 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`pathname\` | Page URL (excludes [http://ntw-2029.vercel.app/](http://ntw-2029.vercel.app/)) | \`actual\_user\_events\` (view): pathname \`events\`: properties.$pathname |
| \`page\_type\` | Type of page (homepage, schedule, resource page, course info, assignment page) | \- |

### **4.2. Why existing tables cannot fulfil this view’s objective** 

This view fulfils two objectives: 

*a. Provide an overview of all pages that exist in the website:* The only other table that displays information on pages is \`events\`. This table captures all events, hence it will show every page that has ever existed, including test/development pages, pages that have since been deleted, and older pages that were renamed, which will require heavy filtering and processing to rebuild an accurate list of pages each time. This view removes the need for this filtering, presenting only pages that are accessible to students in a clean and easy-to-query form. 

*b. Classifying pages by page type:* Several potential research questions involve aggregating metrics by page type (e.g. How much total time did students spend on resources vs. assignments vs. schedule pages). This view makes doing so more efficient, as it provides the page type for each page URL to enable easy identification of page type whenever necessary.  

## **5\. assignment\_due\_dates**

### **5.1. Overview:** 

*5.1.1. Goal:* Create a reference view showing all assignment due dates for each student. 

This view displays all assignments (16 exercise assignments & 9 paper assignments) and due dates for every student. One row corresponds to a student, an assignment and the due date of the assignment for that student. Only students in the 2520 cohort are included. 

*5.1.2. Fields:* 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`student\_name\` | Name of student | \`actual\_user\_events\` (view): student\_name \`cohort\_25\` (view): name \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: properties.name |
| \`assignment\` | Name of assignment | \- |
| \`due\_date\` | Assignment due date | \- |
| \`assignment\_type\` | Assignment type (assignment\_paper or assignment\_exercise) | \`all\_pages\`: page\_type (if page\_type \== assignment\_paper or assignment\_exercise)   |

### **5.2. Why existing tables cannot fulfil this view’s objective** 

Some assignment due dates are the same across all students and can be retrieved from the course website; however, some assignments have different due dates for each student. This view maps each student to the due date that applies to them for each assignment, according to the course website (for fixed due dates) and the document ‘srip-2026/references/per-student  
\-due-dates-long.csv’ in GitHub (for variable due dates).  

This enables further analysis that could provide useful insights into engagement (e.g. observing if student behavior/events triggered changed based on the number of days to an assignment due date).  

- Note: this view provides the resolved due date per student/assignment only; analysis such as days-to-due (event timestamp \- due date) has to be done later if needed.

## **6\. events\_with\_study\_sessions**

### **6.1. Overview:** 

*6.1.1. Goal:* Order all events sequentially (earliest created to latest created), grouping all events by each student together. 

This view is built on all events from the \`actual\_user\_events\` view (see *2\. actual\_user\_events*), and filtered to only include cohort 2520 students, to prevent the query from timing out. For each student, all events triggered by that student are ordered by timestamp. Events less than 30min apart (**30min is an arbitrary value** & can be changed) are grouped as one study session regardless of the page they were triggered on or the Posthog session they were in, representing a continuous period of study from the perspective of the student. 

- Note: ‘study session’ in this context is not associated with Posthog’s definition of ‘session’.  

*6.1.2. Fields:* 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`created\_at\` | Time that the event was triggered by the student  | \`events\`: created\_at \`actual\_user\_events\` (view): created\_at |
| \`properties\` | JSON object of the \`properties\` field  | \`events\`: properties |
| \`session\_id\` | Unique identifier attached to all events in a session. The final event it appears on is the last event in the session.  | \`events\`: properties.$session\_id |
| \`pageview\_id\` | Unique identifier attached to all events that occur after it on the same page. Persists across sessions until the user leaves the page, with the final event it appears on being the page’s $pageleave. | \`events\`: properties.$pageview\_id |
| \`current\_url\` | \`pathname\` with ‘[https://ntw-2029.vercel.app/](https://ntw-2029.vercel.app/)’. If page was a test page, ‘localhost’ will appear in the https.  | \`events\`: properties.$current\_url |
| \`distinct\_id\` | Student ID, alphanumeric string | \`events\`: person\_id \`persons\`: id (UUID) \`cohort\_25\`: distinct\_id |
| \`student\_name\` | Name of student who triggered the event | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: [persons.properties.name](http://persons.properties.name) \`cohort\_25\` (view): name |
| \`is\_identified\`  | \`true\` if event was triggered by a logged-in user, otherwise \`false\` | \`events\`: properties.$is\_identified |
| \`viewport\_width\` | Width of viewport that student is using | \`events\`: properties.$viewport\_width |
| \`viewport\_height\` | Height of viewport that student is using | \`events\`: properties.$viewport\_height |
| \`secs\_since\_prev\_event\` | Seconds since the same student's previous event (across all sessions)  | \- |
| \`is\_new\_session\` | \`true\` if the event is the beginning of a new study session | \- |
| \`secs\_since\_prev\_event\_in\_session\` | Seconds since the last event in the same study session this event belongs to | \- |
| \`session\_num\` | Total number of events in the study session this event belongs to | \- |
| \`study\_session\_id\` | Unique identifier tagged to the study session this event belongs to | \- |
| \`study\_session\_duration\` | The duration (in seconds) that the study session lasted for  | \- |

The query used to build this view involves several steps:

| Step Description | Field used | Reason |
| :---- | :---- | :---- |
| Group events based on the student that triggered the event (\`distinct\_id\`). Within each grouping, order the events by timestamp.  | \`distinct\_id\` (unique identifier for each student) \`cohort\` \== 2520 \`timestamp\` | For each student, only events they trigger should be included in their study sessions. Events should be ordered by when the students triggered them, to enable sequential grouping by timestamp.  |
| Move through each event in the grouping. If an event is \>30min after the previous event in terms of time, then it is considered as the start of a new study session.  | \-  | If a student does not trigger any events for 30min, it can be assumed that they have left the website/have ended their study session from their perspective. As such, new events triggered after this time gap are likely to be the start of a separate study session, rather than a continuation of the previous one. They are hence grouped under a new \`study\_session\_id\`. |

### **6.2. Why existing tables cannot fulfil this view’s objective** 

The only table that captures events is \`events\`, which does not have any fields to represent periods of study. The \`session\_id\` field in events can be used to find how long a student spent on a page (as one session is mapped to one page) – however, a new session starts every time students navigate to different pages, which hinders finding metrics such as the total duration the student spent on the site in a single study period. Several common behavioral patterns also require time-based sequencing of events to more accurately compute engagement metrics (see Question 2, [data-qn-mapping-overview.md](http://data-qn-mapping-overview.md) in GitHub), which this view provides through study session grouping.  

## **7\. course\_weeks\_2520**

### **7.1. Overview:** 

*7.1.1. Goal:* Create a reference list for all weeks in AY25/26 Semester 2\. 

This view lists all the course weeks in the semester and their start/end dates. It is meant to provide an easy way to compute time-based metrics; for example, the number of days between an event and an assignment's due date, or which course week an event falls in. 

Limitations:  
This view only covers the dates in AY25/26 Semester 2, hence it should only be used when events triggered by cohort 2520 students are being used to compute metrics. 

*7.1.2. Fields:* 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`week\` | Week name | \- |
| \`start\_date\` | yyyy-MM-dd string of the course week’s start date  | \`events\` & \`actual\_user\_events\`: timestamp (not a direct mapping) |
| \`end\_date\` | yyyy-MM-dd string of the course week’s end date  | \`events\` & \`actual\_user\_events\`: timestamp (not a direct mapping) |
| \`index\` | Indexes to enable easy sorting of course weeks (earliest to latest) | \- |

### **7.2. Why existing tables cannot fulfil this view’s objective** 

Another way to compute potentially useful metrics (e.g. engagement over a week) could be to use event timestamps (from the \`events\` table). However, this does not provide any context – an event timestamp only reflects a point in calendar time, and does not indicate anything about when the event occurred in the overall course structure. For instance, an event timestamp of ‘2026-04-22’ will not reflect that the event fell around reading week, where students would presumably be increasingly using the course website for revision. This view is created to provide this context by mapping raw dates to weeks in the semester. 



