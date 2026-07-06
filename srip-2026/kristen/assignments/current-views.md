**Goal:** This document is meant to give an overview of all views currently existing in Posthog.  

Overview of terms that appear in this document: 

| Term | Description |
| :---- | :---- |
| Maps to  | In Posthog, different tables & views can be linked to each other through shared fields. The ‘Maps to’ column appears in each view’s Fields section, indicating which fields in other tables hold the same value as the given field in this view. This is so that metrics spanning multiple views can be computed by joining on the appropriate shared field. |

Views belong to either of two groups: 1\. views that map students or events to additional fields that could be useful for analysis (lookup views), and 2\. views that aggregate or filter existing data for storage, to avoid having to recompute common filters (materialized views). 

The table below shows a brief overview of views and their intended usage:

| View | Common Usage | Reliability |
| :---- | :---- | :---- |
| \`cohort\_25\`  | A student-cohort roster for cohorts 2510 & 2520\. | **High.** The students & their cohorts listed in the view align with the 2510 and 2520 student lists under Cohorts in Posthog.  To take note: Two students each in the 2520 and 2510 cohorts share a \`distinct\_id\`/\`person\_id\`. The event tables for the respective cohorts ( \`actual\_user\_events\_2520\`/\`actual\_user\_events\_2510\`) separate the events triggered by these four students, so there should not be any issues.  |
| \`all\_pages\_2510\`, \`all\_pages\_2520\` | A list of all pages available to the cohort.   | **Medium-High.** Each view lists the pages available for each cohort (identified using GitHub source code & Git history). However, pathnames may differ across cohorts (i.e. \-2510/-2520 suffixes), and some pathnames seem to have been taken down and never replaced.   |
| \`actual\_user\_events\_2510\`, \`actual\_user\_events\_2520\` | All events triggered by a cohort; \`events\` table filtered to improve effectiveness of queries involving events.   | **Cohort/course week mapping: High.** The cohort that each event belongs to is identified from the cohort\_25 view, which has high reliability. **Autocapture: Medium-High.** The 100ms filter used to match custom events and $autocapture events may incorrectly match, if several custom events are triggered in quick succession.  **Pathname canonicalization: Medium-High.** Git history is used to approximate the latest pathname for each page, but each pathname might reflect different versions of the page students actually saw. Additionally, some pages were deleted in the middle of each semester, which canonicalization cannot solve.   |
| \`assignment\_due\_dates\_2510\`,  \`assignment\_due\_dates\_2520\` | Assignment due dates for all students in the cohort.  | **High.** The assignment/due date for each student was retrieved from the course website & a list sent by Prof.  |
| \`course\_weeks\_2510\`, \`course\_weeks\_2520\` | Start date and end date for each course week in the semester.  | **High.** The course week dates were retrieved from the NUS AY25/26 calendar.  To take note: Each course week in the NUS calendar runs from Monday-Friday. However, each course week in this view runs from Monday-Sunday.   |
| \`durations\_2510\`, \`durations\_2520\` | Time that students spent on the website, per session.  | **Medium-High.** All limitations associated with this view can be viewed in \`data-qn-mapping (duration).md\` in GitHub.  |
| \`events\_with\_study\_sessions\_2510\`, \`events\_with\_study\_sessions\_2520\` | Sessionization. Groups a stream of events (across sessions) into ‘study sessions’ for each student, to show behavior at visit-level.   | **Medium-High.** Similarly to \`durations\_2510/durations\_2520\`, the sessionization threshold is arbitrarily defined (30min between events), hence study sessions should only be treated as approximations of student study periods.  |

 

## **1\. cohort\_25**

### **1.1. Overview:** 

*Goal:* Provide an easy-to-query, clear overview of all students within the 2510 & 2520 cohorts. 

This view displays all students from the 2510/2520 cohorts that triggered events captured in the \`events\` table. Each row corresponds to one student in the 2510/2520 cohorts. 

### 1.2. Fields:

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`name\` | Name of student | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: [properties.name](http://properties.name)  **\`actual\_user\_events\_2520\`: student\_name \`assignment\_due\_dates\_2520/ 2510\`: name \`durations\_2510/2520\`: student\_name \`cohort\_25\`: matric (\`actual\_user\_events\_2510) \`cohort\_25\`: student\_name (\`actual\_user\_events\_2520)** |
| \`matric\` (only for cohort=’2510’) | Matric number of student (A0…) | \`events\`: [person.properties.name](http://person.properties.name)  **\`actual\_user\_events\_2510\`: student\_name \`assignment\_due\_dates\_2510\`: matric** |
| \`cohort\` | Student cohort (either 2510 or 2520\) | \- |
| \`person\_id\` | Student ID, alphanumeric  | \`events\`: person\_id \`persons\`: id (UUID) |
| \`distinct\_id\` | Student ID, numeric 2-digit | \`events\`: distinct\_id \`events\_with\_study\_sessions\` (view): distinct\_id |

The query used to build this view involves several steps:

| Step Description | Field used | Reason |
| :---- | :---- | :---- |
| Create the student list for each cohort (hardcoded, lists can be edited in the query) | \- | Provide a reference list of students for the 2510 & 2520\.   |
| Get all unique users that appear in the \`events\` table, and add a cohort tag based on \`name\`: if \`name\` is in the student list for cohort 2510, then cohort is ‘2510’. Otherwise, the cohort is ‘2520’.  | \`events.person.properties.name\`  | To add the 2510/2520 cohort tag.  |
| Filter out all users without a name in the student lists.  | \- | Ensure that only students from cohort 2510 & 2520 are displayed.  |

### **1.3. Why existing tables cannot fulfil this view’s objective** 

Out of the existing tables, the \`events\` table and \`persons\` table contain user data. However, neither of which have the student-cohort roster. 

- \`persons\`   
* Shows one row per user, but it has no \`distinct\_id\` and no cohort label. As such, it cannot distinguish identified students from anonymous sessions if necessary.   
* Includes test users ‘joe’, ‘jonathan’ and ‘fromeguest’, which would have to be filtered out each time the \`persons\` table is used.   
- \`events\`:  
* Shows one row per event, but has no clean per-person roster.   
* Contains multiple rows per person, and includes events from internal and anonymous users – hence, it will require significant processing before it can be used as a student list.    
* Some events are tagged with the same \`person\_id\` but different \`name\` values – these cases are caused by students being renamed in Posthog after they have already triggered events under their old name. Each event stores the name as it was at the time it fired, so the earlier events keep the old name while later ones use the new one. As such, using the \`events\` table alone will need heavy filtering to get an accurate student-cohort mapping.   
  * e.g. ![][image1]

This view addresses these problems by combining both tables, by adding each student’s name, person IDs and cohort membership to build a student-cohort list showing all students in the 2510/2520 cohorts. 

## **2\. actual\_user\_events\_2510/2520**

*\*\*Note: All sections under 2\. actual\_user\_events\_2510/2520 are effectively the same for both \`actual\_user\_events\_2510\` (cohort 2510\) and \`actual\_user\_events\_2520\` (cohort 2520).* 

### **2.1. Overview:** 

*Goal:* Create a table of all events from the existing \`events\` table, filtering out all events that:

- Track events that reflect background processes running on the website rather than student actions (i.e. \`$web\_vitals\`, \`$set\`)  
- Are linked to test users/pages  
- Are linked to students who are not in the 2510 cohort (\`actual\_user\_events\_2510\`) / 2520 cohort (\`actual\_user\_events\_2520\`)

Additionally, it modifies certain columns and adds new columns:

- Adds a \`course\_week\` column, showing what week in AY25/26 the event took place in (Sem 1 for the 2510 cohort & Sem 2 for the 2520 cohort)  
- Removes $autocapture events that were triggered alongside a custom event (i.e. internalLinkClick, externalLinkClick, openNutshell, inactiveNutshell)  
- Categorizes remaining $autocapture events into the parts of the website they were triggered on  
- Updates older pathnames to the newest version of the pathname (see xx for list of pathnames mapped)

This view is built on the \`events\` table, and displays events captured from all students from the 2510 cohort.  

### 2.2. Fields:

| Field name | Description | Maps to  |
| :---- | :---- | :---- |
| \`session\_id\` | Unique identifier attached to all events in a session. The final event it appears on is the last event in the session.  | \`events\`: properties.$session\_id **\`events\_with\_study\_sessions\_2510/2520\`: session\_id \`durations\_2510/2520\`: session\_id** |
| \`os\` | OS which student was using when they triggered the event (iOS, Android, etc) | \`events\`: properties.$os |
| \`type\` (only for event=’$autocapture’) | Category for which part of website the autocapture was triggered on  | \- |
| \`event\` | Name of event | \`events\`: event |
| \`course\_week\` | Course week that the event was triggered in | **\`course\_weeks\_2510/2520\`: week \`durations\_2510/2520\`: course\_week \`events\_with\_study\_sessions\_2510/2520\`: course\_week** |
| \`device\` | Device which student was using when they triggered the event (iOS, Android, iPad etc) | \`events\`: properties.$device |
| \`browser\` | Browser which student was using when they triggered the event | \`events\`: properties.$browser |
| \`el\_text\` | Element text of the element the event was triggered on | \`events\`: properties.$el\_text |
| \`ext\_link\` (only for event=’externalLinkClick’) | External link that user clicked on | \`events\`: properties.$external\_click\_url |
| \`elements\_chain\` | Element chain of the element that the event was triggered on (captures DOM structure of element & its ancestors) | \`events\`: elements\_chain |
| \`pathname\` | Page URL of page where event was triggered | \`events\`: properties.$pathname |
| \`person\_id\` | Student ID, alphanumeric string | \`events\`: person\_id \`persons\`: id (UUID) |
| \`distinct\_id\` | Student ID, numeric 2-digit string | \`events\`: distinct\_id |
| \`timestamp\` | Time that the event was captured in Posthog | \`events\`: timestamp |
| \`properties\` | JSON string of the \`properties\` field  | \`events\`: properties |
| \`student\_name\` | Matric number (2510) / name (2520) of student that triggered the event | \`events\`: person.properties.name  **\`cohort\_25\`: matric (\`actual\_user\_events\_2510) \`cohort\_25\`: student\_name (\`actual\_user\_events\_2520) \`durations\_2510/2520\`: student\_name** |

The query used to build this view involves several steps:

| Step Description | Field used | Reason |
| :---- | :---- | :---- |
| From the \`events\` table, filter out all events that were in the triggered by students in the 2510/2520 cohort (i.e. [person.properties.name](http://person.properties.name) was not in the \`matric\`/\`name\` column of the \`cohort\_25\` table) | \`[events.person.properties.nam](http://events.person.properties.name)e\` **\`cohort\_25.matric\` / \`cohort\_25.name\`**  | \`name\` is used to identify cohort 2510 students, as many events exist where \`distinct\_id\` & \`person\_id\` is linked to multiple \`name\` values. This is caused by students being renamed in PostHog after they had already triggered events under their old name.  |
| Filter out all events triggered by automatic background processes  | \`event\` is not '$set', '$delete\_person\_property', '$identify', '$web\_vitals' | These events do not provide any analytical value, as they do not reflect student behavior.  |
| Add the course\_week column, to identify the course week the event took place in  | \`course\_weeks\_2510.week\` \`course\_weeks\_2510.start\_date\` | Enable filtering of events by course week  |
| Filter out the $autocapture events that were triggered alongside another custom event.  Done by tentatively matching $autocapture to a custom event, using: $el\_text \= text  $external\_click\_url \= link , then seeing if the matched events were fired \<100ms apart. If so, retain the custom event and filter out the $autocapture.   | \`events.properties.$el\_text\` $autocapture \`events.properties.$external\_click\_url\` $autocapture \`events.properties.text\`  internalLinkClick externalLinkClick openNutshell inactiveNutshell \`events.properties.link\`  externalLinkClick  | Some elements have custom events set up to enable easy tracking. However, they still fire $autocapture events alongside the custom events when clicked on. As such, a single element may fire both a custom and $autocapture event. Such $autocapture events will hence have to be filtered out to avoid double counting.   |
| For the remaining $autocapture events (no custom event was added for the element the $autocapture was triggered on), categorize them into the part of the website it was triggered on. Categories include:  Search bar Page section selector (for mobile version) Menu (for mobile version) Mode selector (dark/light mode) Sidebar toggle Others | \`events.element\_chain\` | For future potential uses (e.g. understanding where $autocaptures were fired on).  |
| Categorize all versions of a page’s pathnames into a single canonical version. The canonical version is the latest, estimated using git history.   | \`events.properties.$pathname\` | To avoid per-page counts from being incorrectly split up into small numbers.  |

### **2.3. Why existing tables cannot fulfil this view’s objective** 

The goal of a table containing all events is to enable identification of behavioral patterns through observing the events captured. This view is built on the \`events\` table, which has several limitations that prevent it from fulfilling this objective.  

- \`events\`:  
* Includes all events that were ever captured, including those that were triggered on ‘localhost’ (test’/development) pages, by non-student users (testers/developers) and by background processes from the website. These events are not useful in the context of observing student behavior, and hence should be removed.  
* Several students were renamed across the semester, and hence appear in the \`events\` table under different names but with the same \`person\_id\`. Without standardizing names (the name that appeared with the latest event triggered by the student) for each student across all events, events may be wrongly attributed to duplicate students.    
* As pages/pathnames were changed across semesters **and** over the course of each semester, some pages will have multiple pathnames associated with it. Verification on which pathnames are meant to be shown for each page will be needed. 

Multiple questions require analyzing all events with different methods, and the filters listed in 2.1 are needed every time analysis for all events triggered by the 2510 cohort are used. Storing them as a view makes this easier: the filter logic doesn't have to be rebuilt each time events are needed to answer a question, and PostHog does not have to scan the whole events table on each check. As such, this view is meant to show all events from the 2510 cohort with the standard filters already applied, to provide a clean base for any event-related analysis. 


## **3\. course\_weeks\_2510/2520**

*\*\*Note: All sections under 3\. course\_weeks\_2510/2520 are effectively the same for both \`course\_weeks\_2510\` (cohort 2510\) and \`course\_weeks\_2520\` (cohort 2520).* 

### **3.1. Overview:** 

*Goal:* Create a reference list for all weeks in AY25/26 Semester 1 (\`course\_weeks\_2510\`) and AY25/26 Semester 2 (\`course\_weeks\_2520). 

This view lists all the course weeks in the semester, their start date (Monday) and end date (Sunday). It is meant to provide an easy way to compute time-based metrics; for example, the number of days between an event and an assignment's due date, or which course week an event falls in. 

**Limitations:** 
Each view only covers the dates in their respective semester. Hence, \`course\_weeks\_2510\` should only be used when events triggered by cohort 2510 students are being used to compute metrics, and \`course\_weeks\_2520\` should only be used for events triggered by cohort 2520 students. 

### 3.2. Fields: 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`week\` | Week name | **\`actual\_user\_events\_2510/2520\`: course\_week \`durations\_2510/2520\`: course\_week \`events\_with\_study\_sessions\_2510/2520\`: course\_week** |
| \`start\_date\` | yyyy-MM-dd string of the course week’s start date  | \`events\` & \`actual\_user\_events\`: timestamp (not a direct mapping) |
| \`end\_date\` | yyyy-MM-dd string of the course week’s end date  | \`events\` & \`actual\_user\_events\`: timestamp (not a direct mapping) |
| \`index\` | Indexes to enable easy sorting of course weeks (earliest to latest) | \- |

### **3.3. Why existing tables cannot fulfil this view’s objective** 

Another way to compute potentially useful metrics (e.g. engagement over a week) could be to use event timestamps (from the \`events\` table). However, this does not provide any context – an event timestamp only reflects a point in calendar time, and does not indicate anything about when the event occurred in the overall course structure. For instance, an event timestamp of ‘2026-04-22’ will not reflect that the event fell around reading week, where students would presumably be increasingly using the course website for revision. This view is created to provide this context by mapping raw dates to weeks in the semester. 


## **4\. all\_pages\_2510/2520**

*\*\*Note: All sections under 4\. all\_pages\_2510/2520 are effectively the same for both \`all\_pages\_2510\` (cohort 2510\) and \`all\_pages\_2520\` (cohort 2520).* 

### **4.1. Overview:** 

*Goal:* Create a reference view showing all pages that are present on the website (as of the end of the respective semester). 

This view shows all pages available to the respective cohort only. Pages were retrieved using: 

- all\_pages\_2520: the project’s GitHub source code.   
- all\_pages\_2510: the latest version of each page’s pathname by the end of the semester (December 2025), from the project’s Git history. 

If only the current source code is used to identify a page’s pathname, **only the pages’ latest iterations (final edited version, accessible to the latest cohort) will be displayed**. Changes in pages in the source code may lead to seeming inconsistencies in Posthog – for instance:

- Page A deleted: Events involving page A will appear in Posthog only up until the date of deletion.    
- Page URL A edited to page URL B (e.g. ‘hidden’ added to URL): Events involving URL A will appear in Posthog up until the date of edit. Afterwards, no more events involving URL A will appear, and events with URL B will begin appearing.  
- Page A added: Events involving page A will appear in Posthog after the date where the page was added. 

As such, the older versions of a page’s pathnames should be mapped to the newest version, to avoid these inconsistencies. Without this remapping, the following issues may appear: 

- Excluding events associated with the older versions of a page, leading to potential undercounting when calculating metrics by pathname.   
- Trends over time showing artificial drop-offs for edited/deleted pathnames (as the old pathname is no longer available to students), and sudden onsets for newly added pathnames. Such instances are due to changes in source code instead of changes in student behaviour – hence, this will create misleading insights. 

### 4.2. Fields:

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`pathname\` | Page URL (excludes [http://ntw-2029.vercel.app/](http://ntw-2029.vercel.app/)) | **\`actual\_user\_events\_2510/2520\` (view): pathname** \`events\`: properties.$pathname |
| \`page\_type\` | Type of page (homepage, schedule, resource page, course info, assignment page) | \- |

*\*\*Note: each pathname in the \`pathname\` column has a trailing slash (‘/’), while the pathnames in the \`events\` and \`actual\_user\_events\_2520\` tables do not. This is to avoid empty pathnames from incorrectly being counted as the homepage (pathname=’/’). trimRight(pathname, ‘/’) will hence need to be used if joining the \`all\_pages\` and \`events\` tables on pathname.*  

### **4.3. Why existing tables cannot fulfil this view’s objective** 

This view fulfils two objectives: 

*a. Provide an overview of all pages that exist in the website:* The only other table that displays information on pages is \`events\`. This table captures all events, hence it will show every page that has ever existed, including test/development pages, pages that have since been deleted, and older pages that were renamed, which will require heavy filtering and processing to rebuild an accurate list of pages each time. This view removes the need for this filtering, presenting only pages that are accessible to students in a clean and easy-to-query form. 

*b. Classifying pages by page type:* Several potential research questions involve aggregating metrics by page type (e.g. How much total time did students spend on resources vs. assignments vs. schedule pages). This view makes doing so more efficient, as it provides the page type for each page URL to enable easy identification of page type whenever necessary.  


## **5\. assignment\_due\_dates\_2510/2520**

*\*\*Note: All sections under 5\. assignment\_due\_dates\_2510/2520 are effectively the same for both \`assignment\_due\_dates\_2510\` (cohort 2510\) and \`assignment\_due\_dates\_2520\` (cohort 2520).* 

### **5.1. Overview:** 

*Goal:* Create a reference view showing all assignment due dates for each student in the respective cohort (cohort 2510 for \`assignment\_due\_dates\_2510\`, cohort 2520 for assignment\_due\_dates\_2520\`). 

This view displays all assignments (16 exercise assignments & 9 paper assignments) and due dates for every student. One row corresponds to a student, an assignment and the due date of the assignment for that student. 


### 5.2. Fields:

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`student\_name\` | Name of student | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: [properties.name](http://properties.name) **\`actual\_user\_events\_2520\`: student\_name \`cohort\_25\`: name  \`durations\_2510/2520\`: student\_name** |
| \`matric\` (only for \`assignment\_due\_dates\_2510\`) | Matric number of student | **\`actual\_user\_events\_2510\`: student\_name \`cohort\_25\`: matric**  |
| \`assignment\` | Name of assignment | \- |
| \`due\_date\` | Assignment due date | \- |
| \`assignment\_type\` | Assignment type (assignment\_paper or assignment\_exercise) | **\`all\_pages\`: page\_type (if page\_type \== assignment\_paper or assignment\_exercise)**   |


### **5.3. Why existing tables cannot fulfil this view’s objective** 

Some assignment due dates are the same across all students and can be retrieved from the course website; however, some assignments have different due dates for each student. This view maps each student to the due date that applies to them for each assignment, according to the course website (for fixed due dates) and the document ‘srip-2026/references/per-student  
\-due-dates-long.csv’ in GitHub (for variable due dates).  

This enables further analysis that could provide useful insights into engagement (e.g. observing if student behavior/events triggered changed based on the number of days to an assignment due date).  

- Note: this view provides the resolved due date per student/assignment only; analysis such as days-to-due (event timestamp \- due date) has to be done later if needed.


## **6\. durations\_2510/2520**

*\*\*Note: All sections under 6\. durations\_2510/2520 are effectively the same for both \`durations\_2510\` (cohort 2510\) and \`durations\_2520\` (cohort 2520).*

### **6.1. Overview:** 

*Goal:* Create a view that shows the duration spent for each session by each cohort (cohort 2510 for \`*durations\_2510*\`, cohort 2520 for *durations\_2520*\`). 

This view is built on actual\_user\_events\_2510/2520 to ensure all filtering steps are done. For each session from students in cohort 2510 (durations\_2510)/cohort 2520 (durations\_2520), if any two events in a session have a gap of \>30min between them, the session is split into two subsessions along those events. Duration for each session/subsession is then calculated as the timestamp of the first event \- timestamp of the last event.  

### 6.2. Fields:

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`start\_ts\` | Timestamp that the session started at | \- |
| \`end\_ts\` | Timestamp that the session ended at | \- |
| \`pathname\` | Page URL (excludes [http://ntw-2029.vercel.app/](http://ntw-2029.vercel.app/)) | **\`actual\_user\_events\_2510/2520\` (view): pathname**  \`events\`: properties.$pathname |
| \`page\_type\` | Type of page (homepage, schedule, resource page, course info, assignment page) | \- |
| \`last\_event\` | Last event triggered in session  | \- |
| \`session\_id\` | ID of the session the event belongs to  | **\`events\_with\_study\_sessions\_2510/2520\`: session\_id \`actual\_user\_events\_2510/2520\`: session\_id** |
| \`subsession\_id\` | Added; the ID of each split session (starting from 0\)  | \- |
| \`course\_week\` | Course week that the event was triggered in | **\`actual\_user\_events\_2510/2520\`: course\_week \`course\_weeks\_2510/2520\`: week \`events\_with\_study\_sessions\_2510/2520\`: course\_week** |
| \`student\_name\` | Name of student  | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: [properties.name](http://properties.name) **\`actual\_user\_events\_2520\`: student\_name \`cohort\_25\`: matric (\`durations\_2510) \`cohort\_25\`: student\_name (\`durations\_2520) \`events\_with\_study\_sessions\_2510/2520\`: student\_name** |
| \`duration\_secs\` | Duration spent on the page in seconds) | \- |

The query used to build this view involves several steps:

| Step Description | Field used | Reason |
| :---- | :---- | :---- |
| In each session, order events by timestamp. For each event, add a column that shows the gap from the previous event.  | \`actual\_user\_events\_2510/2520.timestamp\` | To estimate the time between events.  |
| If the gap from the previous event exceeds 30min, split the session into 2, and assign a new subsession ID.  | \- | Identifying when to split sessions.  |
| Get timestamp of last event \- timestamp of first event to measure duration for each session/subsession  | \- | Calculating the duration of each session/subsession. |

### **6.3. Why existing tables cannot fulfil this view’s objective** 

The simplest way to compute the duration of a session would be finding the timestamp of the last event \- timestamp of the first event from each session. However, this results in multiple limitations; further elaboration/explanations for why this method for computing duration was chosen is in the file \`data-qn-mapping (duration).md\`.


## **7\. events\_with\_study\_sessions\_2510/2520**

*\*\*Note: All sections under 7\. events\_with\_study\_sessions\_2510/2520 are effectively the same for both \`events\_with\_study\_sessions\_2510\` (cohort 2510\) and \`events\_with\_study\_sessions\_2520\` (cohort 2520).* 

### **7.1. Overview:** 

*Goal:* Order all events sequentially (earliest created to latest created), grouping all events by each student together. 

The events\_with\_study\_sessions\_2510/2520 views are built on all events from the \`actual\_user\_events\` view (see *2\. actual\_user\_events*), and filtered to only include cohort 2520 students, to prevent the query from timing out. For each student, all events triggered by that student are ordered by timestamp. Events less than 30min apart (**30min is an arbitrary value** & can be changed) are grouped as one study session regardless of the page they were triggered on or the Posthog session they were in, representing a continuous period of study from the perspective of the student. 

- Note: ‘study session’ in this context is not associated with Posthog’s definition of ‘session’.  

### 7.2. Fields: 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`created\_at\` | Time that the event was triggered by the student  | \`events\`: created\_at |
| \`properties\` | JSON object of the \`properties\` field  | \`events\`: properties |
| \`session\_id\` | Unique identifier attached to all events in a session. The final event it appears on is the last event in the session.  | \`events\`: properties.$session\_id **\`actual\_user\_events\_2510/2520\`: session\_id \`durations\_2510/2520\`: session\_id** |
| \`pageview\_id\` | Unique identifier attached to all events that occur after it on the same page. Persists across sessions until the user leaves the page, with the final event it appears on being the page’s $pageleave. | \`events\`: properties.$pageview\_id |
| \`current\_url\` | \`pathname\` with ‘[https://ntw-2029.vercel.app/](https://ntw-2029.vercel.app/)’. If page was a test page, ‘localhost’ will appear in the https.  | \`events\`: properties.$current\_url |
| \`distinct\_id\` | Student ID, alphanumeric string | \`events\`: person\_id \`persons\`: id (UUID) \`cohort\_25\`: distinct\_id |
| \`student\_name\` | Name of student who triggered the event | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: [persons.properties.name](http://persons.properties.name) **\`actual\_user\_events\_2520\`: student\_name \`cohort\_25\`: matric (\`actual\_user\_events\_2510) \`cohort\_25\`: student\_name (\`actual\_user\_events\_2520) \`durations\_2510/2520\`: student\_name** |
| \`course\_week\` | Course week that the event was triggered in | **\`actual\_user\_events\_2510/2520\`: course\_week \`course\_weeks\_2510/2520\`: week \`durations\_2510/2520\`: course\_week** |
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
| Group events based on the student that triggered the event (\`distinct\_id\`). Within each grouping, order the events by timestamp.  | \`distinct\_id\` (unique identifier for each student)  \`timestamp\` | For each student, only events they trigger should be included in their study sessions. Events should be ordered by when the students triggered them, to enable sequential grouping by timestamp.  |
| Move through each event in the grouping. If an event is \>30min after the previous event in terms of time, then it is considered as the start of a new study session.  | \-  | If a student does not trigger any events for 30min, it can be assumed that they have left the website/have ended their study session from their perspective. As such, new events triggered after this time gap are likely to be the start of a separate study session, rather than a continuation of the previous one. They are hence grouped under a new \`study\_session\_id\`. |

### **7.3. Why existing tables cannot fulfil this view’s objective** 

The only table that captures events is \`events\`, which does not have any fields to represent periods of study. The \`session\_id\` field in events can be used to find how long a student spent on a page (as one session is mapped to one page) – however, a new session starts every time students navigate to different pages, which hinders finding metrics such as the total duration the student spent on the site in a single study period. Several common behavioral patterns also require time-based sequencing of events to more accurately compute engagement metrics (see Question 2, [data-qn-mapping-overview.md](http://data-qn-mapping-overview.md) in GitHub), which this view provides through study session grouping. 



