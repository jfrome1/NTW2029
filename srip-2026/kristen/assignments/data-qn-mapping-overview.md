**Goal:** This document is based on the questions in [data-question-mapping.md](http://data-question-mapping.md). For each question’s scenarios, it records the events captured in Posthog, and potential workarounds for limitations listed for each scenario. 

## **1\. How much time did a student spend on a single page (one page visit)?**

**_Overview_**

$pageview and their corresponding $pageleave events have a shared property **$pageview\_id**, which can be used to match a $pageview to its corresponding $pageleave. $pageview\_id persists across sessions; however, $pageviews and $pageleaves in different sessions should not be matched, as this will include the time between each session.   
   
The property **$session\_id** persists across all events in the same session only. Unlike $pageview\_id, it will refresh each time a session ends. As such, $pageview and $pageleave may have the same $pageview\_id and a different $session\_id. 

| Events used | Match | Compute by | Scenarios |
| :---- | :---- | :---- | :---- |
| $pageview, $pageleave | $session\_id, $pageview\_id | $pageleave timestamp \- $pageview timestamp | (1) Clean page visit (2) Background tab page visit (4) Multi-tab parallel page visits (5) Reloads |
| $pageview, last event in session | $session\_id | last event in session’s timestamp \- $pageview timestamp | (3) Walked-away page visit (Session 1\) (6) Tab closed mid-visit |
| first event in session, $pageleave | $session\_id | $pageleave \- first event in session’s timestamp | (3) Walked-away page visit (Session 2\) (7) Student presses back button |

### **1.1. Clean page visit**

**1.1.1. Description:** Student loads the tab, reads for a while then leaves the page. 

**1.1.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| $pageleave | Student closes tab |

This scenario assumes students are actually engaging with the page; as such, the difference in timestamps between $pageview and the corresponding $pageleave should be filtered to \>10s.

**1.1.3. Computing duration**

The time difference between the $pageview timestamp and $pageleave timestamp. This gives a reasonably accurate duration spent on the page for the session. 

### **1.2. Background-tab page visit** 

**1.2.1. Description:** Student opens a website page, then switches to a non-website tab. Before the session expires, the student returns to the website tab and leaves the page. 

**1.2.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| $pageleave | Student closes tab |

The events triggered in this scenario will be **effectively the same** as in the Clean Page Visit scenario, as there is currently no way to determine when a student switches tabs. 

**1.2.3. Computing duration**

Similar to clean page visits, using the time difference between the $pageview timestamp and $pageleave timestamp. However, this will not give the exact duration spent on the page, as there is no way to determine when the page was in the background. The \`approximate, biased high\` time-on-page verdict is accurate. 

### **1.3. Walked-away page visit** 

**1.3.1. Description:** Student loads the tab, then switches off the tab and never returns to the page. The session expires. (30 minutes after)

**1.3.2. Events captured** 

Scenario A: Student does not trigger any events before switching off the page

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

Scenario B: Student triggers events before switching off the page

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

**1.3.3. Computing duration**

In this case, $pageview-$pageleave matching should not be used. Matching by session\_id will lead to coverage gap (as $pageview without $pageleave is dropped), while matching by pageview\_id will lead to overcounting duration (as timestamps will be in real time and will include the time spent away from the page). 

This scenario will create 2 sessions, which should be handled differently: 

1. Session 1: 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |

- For each $pageview with no matching $pageleave in the same session, retrieve the last event with the same session\_id to use as a $pageleave proxy. 

2. Session 2: 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

- This session will not start with a $pageview. As such, sessions where the first event is not a $pageview should use the first event as a $pageview proxy, then combined with the $pageleave timestamp to compute duration. 

- This case & Scenario 7 should be the only cases where a session does not start with a pageview: can be confirmed by checking if the first event of the session has a pageview\_id that matches a previous session whose last event is not $pageleave. 

**Limitation:** This method will be accurate if computing total duration spent on a page, by adding up the durations for session 1 and 2\. However, computing the number of views per page will overcount, and computing average duration spent on a page will undercount. 

### **1.4. Multi-tab parallel page visits**

**1.4.1. Description:** Student opens the same page/different pages in multiple tabs and switches back and forth between tabs. Sessions do not expire. 

**1.4.2. Events captured** 

| Event | Triggered by | session\_id | Current tab |
| :---- | :---- | :---- | :---- |
| $pageview 1 | Student opens tab 1  | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student opens tab 2  | \- | 1 |
| $pageview 2 | Student switches to tab 2 | 2 | 2 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 2 | 2  |
| *No event triggered* | Student switches back to tab 1 | \- | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| $pageleave 1 | Student closes tab 1 | 1 | \- |

**1.4.3. Computing duration**

For each $pageview, match with its corresponding $pageleave using the $pageview\_id property. To determine if there were events triggered on this page, match the events with the same $session\_id property as the $pageview/$pageleave. 

**Limitation:** Event timestamps follow real world time; as such, switching back and forth between tabs will lead to overcounting time spent on page, as the timestamps between 2 events triggered on the same page will include the duration spent on another opened tab. 

### **1.5. Reload during page visit**

**1.5.1. Description:** Student reloads an opened tab. 

**1.5.2. Events captured** 

Scenario A: Student triggers some events before reloading

| Event | Triggered by | session\_id/pageview\_id |
| :---- | :---- | :---- |
| $pageview | Student opens tab | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 |
| $pageleave | Student reloads tab | 1 |
| $pageview |  | 2 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 2 |

The series of events triggered is the same as the series of events triggered in Scenario 1 (clean page visit). However, as pathname will remain the same upon reload, a potential identifier for this scenario could be checking each case where a $pageleave is followed by a $pageview around the same timestamp, and if the pathnames for both events are the same. 

Scenario B: Student does not trigger any events before reloading

| Event | Triggered by | session\_id/pageview\_id |
| :---- | :---- | :---- |
| $pageview | Student opens tab | 1 |
| $pageleave | Student reloads tab | 1 |
| $pageview |  | 2 |

These cases should be filtered out by the \<10s duration filter, as they are unlikely to indicate engagement. 

**1.5.3. Computing duration**

Similar to clean page visits, using the time difference between the $pageview timestamp and $pageleave timestamp. 

**Limitation:** This method will be accurate if computing total duration spent on a page, as session splitting still preserves total session duration. However, if computing the number of views per page, the result will be overcounted, and computing average duration spent on a page will undercount. 

- If computing average metrics, $pageviews triggered by reload can be identified to stitch their events back into the pre-reload session. For these $pageviews:  
* Last event of the previous session is a $pageleave  
* The $pageview fires almost immediately after the prior session’s $pageleave  
* Same path & same user as the prior session’s $pageleave

### **1.6. Tab closed mid-event page visit** 

**1.6.1. Description:** Student closes the tab quickly enough that Posthog does not capture the event.

**1.6.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| *No event triggered* | Student switches off tab  |

\*\*Note: This likely happens only on rare occasions. Can be confirmed by checking the number of $pageviews without a corresponding $pageleave. 

**1.6.3. Computing duration**

For each $pageview with no matching $pageleave, retrieve the last event with the same session\_id to use as a $pageleave proxy. 

### **1.7. Student presses back button** 

**1.7.1. Description:** Student presses the browser’s back button to go from Page B to Page A. 

**1.7.2. Events captured** 

| Event | Triggered by | session\_id |
| :---- | :---- | :---- |
| $pageview 1 | Student opens page 1 | 1 |
| $pageleave 1 | Student navigates to page 2 | 1 |
| $pageview 2 |  | 2 |
| $pageleave 2 | Student presses back button to return to page 1 | 2 |
| x | No $pageview, x number of events (read, $autocapture, internalLinkClick etc) on page 1 | 1 |

**1.7.3. Computing duration**

This case produces sequential events, in that events from 1 session will not overlap with events from another session. As such, duration for page 1 and page 2 can be computed using the standard $pageleave \- $pageview method. For the return to page 1, no new $pageview fires. 

This is structurally identical to Scenario 3 (walked-away-then-resumed), and can be handled the same way: using the first event after the return as a proxy $pageview, then computing duration to the last event in the session. 

## **2\. How often did a student visit the site over a given period (a week, a month, a term)?**

**_Overview_**

The methods listed below are generally reliable for finding website visit count. However, differentiating scenarios to find which method to use may be hard, as events captured are quite similar across certain scenarios. The most reliable method across multiple scenarios is study session reconstruction, **where events with \<30min between each other are grouped into 1 study session.** 

| Events used | Compute by | Scenarios |
| :---- | :---- | :---- |
| $timestamp | Reconstruct study sessions using timestamps (\<30min duration between events) | (1) Single page website visit (2) Multi page website visit (3) Multi tab website visit (4) Repeated website visits within 30min  |
| $pageview\_id (property) | $pageview\_id count | (5) Walked-away-then-resumed website visit  |


### **2.1. Single page website visit**

**2.1.1. Description:** Student loads one page, reads it, then closes the tab. 

**2.1.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| $pageleave | Student closes tab |

**2.1.3. Computing visit count**

In this case, counting the $pageview as a single visit would accurately capture the student visiting the site once. However, this case cannot be differentiated from Scenarios 2, 3 and 4, which use study session reconstruction; as such, this case should be counted using study session reconstruction as well.

### **2.2. Multi page website visit**

**2.2.1. Description:** Student loads one page and navigates to multiple other pages in the same period. 

**2.2.2. Events captured** 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview 1 | Student opens page 1  | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| $pageleave 1 | Student navigates to page 2  | 1 | 1 |
| $pageview 2 |  | 2 | 2 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 2 | 2  |
| $pageleave 2 | Student navigates to page 3  | 2 | 2 |
| $pageview 3 |  | 3 | 3 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 3 | 3  |
| $pageleave 3 | Student closes page | 3 | 3 |

**2.2.3. Computing visit count**

session\_id and pageview\_id are not persisted across different pages. As such, to count the number of times a student made a visit to the website (spanning multiple pages), event timestamps can be used to reconstruct a proxy study session. Events that happen \<30min after each other will be grouped within the same website visit, and counted as a single visit.   
Currently, the Posthog view events\_with\_study\_sessions does this. 

If needed, this case can be differentiated from Scenario 3 (Multi tab website visit) which also uses a similar method to compute visit count. Navigating to a new page (Scenario 2\) is sequential, hence **all events from the current page should complete before any event from the new page begins**. However, opening a new tab and switching between them (Scenario 3\) should produce alternating events from different pages. 

### **2.3. Multi tab website visit**

**2.3.1. Description:** Student opens multiple pages in multiple tabs in the same study session. 

**2.3.2. Events captured** 

| Event | Triggered by | session\_id | Current tab |
| :---- | :---- | :---- | :---- |
| $pageview 1 | Student opens tab 1  | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student opens tab 2  | \- | 1 |
| $pageview 2 | Student switches to tab 2 | 2 | 2 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 2 | 2  |
| *No event triggered* | Student switches back to tab 1 | \- | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| $pageleave 1 | Student closes tab 1 | 1 | \- |

**2.3.3. Computing visit count**

This case is covered by the method in Scenario 2 (multi-page website visits); reconstructing proxy study sessions based on event timestamps, then counting number of study sessions.

### **2.4. Repeated website visits within 30min**

**2.4.1. Description:** Student opens a page, closes it, then opens another page in a separate lookup \<30min later. This should be counted as two page visits. 

**2.4.2. Events captured** 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview 1 | Student opens page | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| $pageleave 1 | Student closes page  | 1 | 1 |
| $pageview 2 | Student reopens a page \<30min later | 2 | 2 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 2 | 2  |
| $pageleave 2 | Student closes page | 2 | 2 |

**2.4.3. Computing visit count**

Counting unique session\_id/pageview\_id will show two visits, while using study session reconstruction will count two visits as one, as it groups events that have \<30min between them into a study session. However, it is not possible to distinguish between this scenario and Scenario 2, as the events captured in both will be nearly identical; hence, session reconstruction should also be used for this case. 

### **2.5. Walked-away-then-resumed website visit**

**2.5.1. Description:** Student loads a page, walks away, then comes back a few hours later & continues (Scenario 3 from Q1 followed by new activity).

**2.5.2. Events captured** 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

**2.5.3. Computing visit count**

pageview\_id is persisted for events triggered on the same page across sessions, so in this case, using it to count a single visit will accurately capture the number of visits. 

To avoid using session reconstruction (which will count as two visits), this case has to be differentiated from Scenario 3 and Scenario 4\. This can be done by checking if the $pageview and its corresponding $pageleave are in different sessions. 

## **3\. Which pages were most/least visited (rank pages by visit count)?**

**_Overview_**

Across all scenarios for Question 3, $pageview count is a reliable way to find which page was most/least visited. However, it may not accurately reflect engagement (key point of this metric) – this issue appears most in Scenario 2 (student opens and immediately closes a page).    

| Events used | Compute by | Scenarios |
| :---- | :---- | :---- |
| $pageview | $pageview count | (1) Student loads a tracked page (2) Student opens a page & instantly closes it  (3) Page opened as a background tab but never read (4) Student reloads page (requires identification of reload cases) (5) Walked away page visit |

 

### **3.1. Student loads a tracked page**

**3.1.1. Description:** A student opens a page available to the cohort the student is in. 

**3.1.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| $pageleave | Student closes tab |

**3.1.3. Computing visit count**

In this case, count the $pageview as a single visit. Things to note include: a $pageview fires, the page is identified correctly via $current\_url/$pathname, and the distinct\_id matches a roster student. 

### **3.2. Student opens a page & instantly closes it**

**3.2.1. Description:** A student opens a page available to the cohort the student is in, then instantly closes it. 

**3.2.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| $pageleave | Student closes tab |

**3.2.3. Computing visit count**

Counting the $pageview as a single visit will include this instance in the overall page ranking; however, it does not accurately represent engagement. 

### **3.3. Page opened as a background tab but never read**

**3.3.1. Description:** A student opens a page as a background tab, but never clicks into it. 

**3.3.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| *No events captured* | Student opens page in background  |

**3.3.3. Computing visit count**

This case will not be counted in page visit count, which is accurate as it does not reflect engagement. 

### **3.4. Student reloads page**

**3.4.1. Description:** A student reloads the page they are currently on. 

**3.4.2. Events captured** 

| Event | Triggered by | session\_id |
| :---- | :---- | :---- |
| $pageview | Student opens tab | 1 |
| $pageleave | Student reloads tab | 1 |
| $pageview |  | 2 |

**3.4.3. Computing visit count**

Counting $pageviews will overcount page visit count, hence identifying instances of page reloads is needed to accurately count the multiple $pageviews triggered by a reload as a single visit. Page reloads trigger events where: 

* Last event of the previous session is a $pageleave  
* The $pageview fires almost immediately after the prior session’s $pageleave  
* Same path & same user as the prior session’s $pageleave

### **3.5. Non-student events**

**3.5.1. Description:** All events triggered by anonymous/dev users. These events can be filtered out to exclude them from final counts. 

### **3.6. Walked away page visit**

**3.6.1. Description:** Student loads the tab, then switches off the tab and never returns to the page. The session expires. (30 minutes after)

**3.6.2. Events captured** 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |
| x | Student returns to the original tab x days/hours later and trigger This s events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

**3.6.3. Computing visit count**

Counting $pageviews will accurately count page visits, as it is not affected by when the corresponding $pageleave was triggered. 

## **4\. How much total time did students spend on resources vs. assignments vs. schedule pages?**

**_Overview_**

Not much to add here that isn’t already covered by the [data-questions-mapping.md](http://data-questions-mapping.md) file.

Per-category breakdowns can be found by separating pages by page type (done in the \`all\_pages\` view), and the scenarios listed in Question 1 provide methods for finding duration spent on a page, which can be applied to the separate page categories to address this question.

**5\. How frequently did students check the schedule page (daily, weekly, monthly)?**

**_Overview_**

Similar to Question 4, not much to add here that isn’t already covered by the [data-questions-mapping.md](http://data-questions-mapping.md) file. 

The main approach to computing this includes: 

1. Get each student's schedule-page checks (distinct pageview\_ids), ordered by timestamp.   
2. Compute the gap from each check to the next, based on the metric (daily/weekly/near due dates) being measured. 

For the scenarios that run into coverage gaps (4 & 5), a possible workaround could be identifying the sessions triggered on the schedule page that **do not** begin with a $pageview event, then manually checking if those sessions reflected actual engagement (e.g. read event triggered). 
