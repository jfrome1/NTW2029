**Goal:** This document is meant to give an overview of all views currently existing in Posthog. 

## **1\. cohort\_25**

### **1.1. Overview:** 

*1.1.1. Goal:* Provide an easy-to-query, clear overview of all students within the 2510 & 2520 cohorts. 

This view is built on the \`events\` and \`persons\` table, and displays all students from the 2510/2520 cohorts that triggered events captured in the \`events\` table. Each row corresponds to one student in the 2510/2520 cohorts. 

*1.1.2. Fields:* 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`name\` | Name of student | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: properties.name |
| \`cohort\` | Student cohort (either 2510 or 2520\) |  |
| \`person\_id\` | Student ID, alphanumeric  | \`events\`: person\_id \`persons\`: id (UUID) |
| \`distinct\_id\` | Student ID, numeric 2-digit | \`events\`: distinct\_id |

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
| \`student\_name\` | Name of student who triggered the event | \`events\`: [person.properties.name](http://person.properties.name) \`persons\`: persons.properties.name |
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

This view shows all nutshells from the pages available to the 2520 cohort only, as these are the pages accessible through GitHub source code (as of 9/6/26). 

*3.1.2. Fields:* 

| Field name | Description | Maps to |
| :---- | :---- | :---- |
| \`page\` | Page URL (excludes [http://ntw-2029.vercel.app/](http://ntw-2029.vercel.app/)) | \`actual\_user\_events\`: pathname \`events\`: properties.$pathname |
| \`anchor\_text\` | Nutshell display text | \- |
| \`href\` | Nutshell link's destination; in-page anchor fragments (\#section-id) | \- |

### **3.2. Why existing tables cannot fulfil this view’s objective** 

The only other table that displays nutshell text/information is \`events\`. This table captures all events, hence filtering to only nutshell-related events will show nutshells for every user that exists, including internal and anonymous users, requiring heavy filtering and processing to rebuild an accurate list of nutshells each time. This view removes the need for this filtering, presenting only actual student nutshells in a clean and easy-to-query form. 

