**Goal:** This document is based on the questions in [data-question-mapping.md](http://data-question-mapping.md). For each question’s scenarios, it records the events captured in Posthog, and potential workarounds for limitations listed for each scenario. 

Overview of events & properties that appear in this document:

| Event | Description | Usage |
| :---- | :---- | :---- |
| $pageview | Triggered when a page is loaded.  | Identifies when a student enters the page |
| $pageleave | Triggers when a page is closed. | Identifies when a student leaves the page |

| Properties | Description | Usage |
| :---- | :---- | :---- |
| $pageview\_id | A unique identifier attached to a $pageview and all events that occur after it on the same page. Persists across sessions until the user leaves the page, with the final event it appears on being the page’s $pageleave. | Match when a student opened a page ($pageview) to when they left the page ($pageleave). Can be used to identify which scenario the events a student triggered falls under.  |
| $session\_id | A unique identifier attached to all events in a session. The final event it appears on is the last event in the session.  | Identify all events that occurred in the same session. Can be used to check which scenario the events a student triggered falls under.  |
| $timestamp | The datetime when the event was triggered.  | Used to calculate the time between events, such as the duration between a page visit and when the user left.  |
| distinct\_id | A unique identifier for each student.  | Identify the events triggered by a certain student.  |

## **1\. How much time did a student spend on a single page (one page visit)?**

**Overview**

*Definition:* For a single page visit, the time between a student opening the page and when they leave. 

As student behavior across page visits can vary widely, calculating durations can change depending on the scenario. The table below shows the possible scenarios that page visits might fall under, and how duration can be computed for each one:

| Events used | Match on | Compute by | Scenarios |
| :---- | :---- | :---- | :---- |
| $pageview, $pageleave | $session\_id, $pageview\_id | $pageleave timestamp \- $pageview timestamp | (1) Clean page visit (2) Background tab page visit (4) Multi-tab parallel page visits (5) Reloads (7) Student presses back button |
| $pageview, last event in session | $session\_id | last event in session’s timestamp \- $pageview timestamp | (3) Walked-away page visit (Session 1\) (6) Tab closed mid-visit |
| first event in session, $pageleave | $session\_id | $pageleave \- first event in session’s timestamp | (3) Walked-away page visit (Session 2\) (7) Student presses back button |

Certain scenarios overlap in terms of the events that are captured: however, there is no need to distinguish between such scenarios, as the durations computed from them will be interpreted the same way regardless of which scenario applies. 

A \`pageview\`, its corresponding \`pageleave\`, and all events between them have a shared property **\`pageview\_id\`**, which can be used to match the \`pageview\` and \`pageleave\`. \`pageview\_id\` persists across sessions; however, \`pageview\` and \`pageleave\` in different sessions should not be matched, as this will include the time between each session.   
   
All events in a session share the property **\`session\_id\`**, which persists across all events in the same session only. Unlike \`pageview\_id\`, it will refresh each time a session ends. As such, \`pageview\` and $pageleave may have the same $pageview\_id and a different $session\_id. Generally, `session_id` should be used to match `pageviews` and `pageleaves` instead of `pageview_id`, to avoid accidentally matching `pageviews` and `pageleaves` in different sessions. 

The following scenarios cover possible student behavior and the events triggered from them.  

### **1.1. Clean page visit**

**1.1.1. Description:** Student loads the tab, reads for a while then leaves the page. 

**1.1.2. Events captured** 

| Event | Triggered by | $session\_id | $pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| $pageleave | Student closes tab | 1 | 1 |

**1.1.3. Computing duration**

Method: Match \`pageview\` and \`pageleave\` by \`session\_id\` or \`pageview\_id\`. Compute the duration as the difference between the timestamps of the \`pageview\` and \`pageleave\`. 

Reasoning: In this scenario, the student opens the page and closes it after they are done with it, so both the page open (\`pageview\`) and page close (\`pageleave\`) events are recorded cleanly within the same session. As such, calculating how long the student spent on the page is straightforward, and the method outlined is able to accurately capture the duration students spent on the page.

### **1.2. Background-tab page visit** 

**1.2.1. Description:** Student opens a website page, then switches to a non-website tab. Before the session expires, the student returns to the website tab and leaves the page. 

**1.2.2. Events captured** 

| Event | Triggered by | $session\_id | $pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student switches tab | \- | \- |
| *No event triggered* | Student returns to tab before session expires | \- | \- |
| $pageleave | Student closes tab | 1 | 1 |

The events captured when this scenario happens will be **effectively the same** as in the Clean Page Visit scenario. No events currently trigger whenever the student changes tabs, and \`session\_id\` and \`pageview\_id\` stay the same across the events – therefore, there is no way to determine whether the student had the page open in the background between opening and closing it. 

**1.2.3. Computing duration**

Method: Match \`pageview\` and \`pageleave\` by \`session\_id\` or \`pageview\_id\`. Compute the duration as the difference between the timestamps of the \`pageview\` and \`pageleave\`. 

Reasoning: It is not possible to distinguish between this scenario and Scenario 1 (clean page visit), hence the same method will be used to find duration spent on a page. However, in this case, the exact duration spent on the page will not be captured accurately, as there is no way to determine when the page was in the background. This will lead to overestimating duration; the \`approximate, biased high\` time-on-page verdict is accurate. 

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

Method: 

This scenario will create 2 sessions. Both sessions should use different methods to compute duration spent on the session/on the page: 

1. Session 1: 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |

- This case can be identified by locating a \`pageview\` and checking the last event in the same session (has the same \`session\_id\` as the \`pageview\`). If this last event is **not** a \`pageleave\`, Scenario 3 may apply: in this case, the last event should be treated as a proxy for \`pageleave\`. To compute duration, find the difference between the timestamps of the \`pageview\` and the last event in the session.    
* A possible approach to this can be adding a \`pageleave\_proxy=true\` property to the last event, to mark that it should be used as a \`pageleave\` proxy. 

2. Session 2: 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

- This case can be identified by locating a \`pageleave\` and checking the first event in the same session (has the same \`session\_id\` as the \`pageleave\`). If this first event is **not** a \`pageview\`, Scenario 3 may apply: in this case, the first event will be treated as a proxy for \`pageview\`. To compute duration, find the difference between the timestamps of the first event in the session and the \`pageleave\`.  
* A possible approach to this can be adding a \`pageview\_proxy=true\` property to the first event, to mark that it should be used as a \`pageview\` proxy. 

Overall, the total duration a student spent on a page when this scenario applies can be calculated using the respective methods for Session 1 & 2\. 

Reasoning: 

*Session 1:*   
This case & Scenario 6 should be the only cases where a session does not end with a \`pageleave\`. If differentiating between scenarios is necessary, the primary way to do so is by checking: for each session without a \`pageleave\`, does the \`pageview\_id\` associated with the session’s events match the \`pageview\_id\` of the events in another session. A further check is to see if the matching session does not begin with a \`pageview\`. If so, it is likely that this case falls under Scenario 3\. 

*Session 2:*   
This case & Scenario 7 should be the only cases where a session does not start with a \`pageview\`. If differentiating between both scenarios is necessary, the primary way to do so is by checking the \`pageview\_id\`. In Scenario 3, after locating a session that starts with a \`pageview\` but does not end with \`pageleave\` (Session 1), check if the \`pageview\`’s \`pageview\_id\` has a match in the events in another session. If so, the session falls under Scenario 3 (Session 2). 

**Limitation:** This method will be accurate if computing total duration spent on a page, by adding up the durations for Session 1 and 2\. However, computing the number of views per page will overcount, and computing average duration spent on a page will undercount. 

Additionally, while \`pageview\` and \`pageleave\` will have the same **\`pageview\_id\`** and hence can be matched, duration spent on the page should not be computed using their timestamps. This is because the timestamp of the \`pageleave\` will include the time spent away from the page, which could go up to multiple days.  

\`pageview\` and \`pageleave\` should also not be matched by **\`session\_id\`**. In this case, the session with \`pageview\` (Session 1\) will expire after the student walks away, and a new session will begin after they return (Session 2). As such, the \`pageview\` and \`pageleave\` sessions will be different, and trying to match them by \`session\_id\` will lead to coverage gap (no match found). 

### **1.4. Multi-tab parallel page visits**

**1.4.1. Description:** Student opens the same page/different pages in multiple tabs and switches back and forth between tabs. Sessions do not expire. 

**1.4.2. Events captured** 

| Event | Triggered by | session\_id/pageview\_id | Current tab |
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

Method: Match each \`pageview\` with its corresponding \`pageleave\`, using the \`pageview\_id\` property. Compute the duration as the difference between the timestamps of the \`pageview\` and \`pageleave\`. 

Reasoning: Similarly to Scenario 2, it is not possible to distinguish between this scenario and Scenario 1 (clean page visit), hence the same method will be used to find duration spent on a page. The limitation of this method is the same as Scenario 2: the exact duration spent on the page will not be captured accurately, as switching between tabs does not trigger any events. As such, \`pageview\` and \`pageleave\` are the best approximations for finding time spent on page. However, since \`timestamp\` follows real world time, the computed duration will include time spent on other tabs that were open simultaneously. 

If necessary, a potential way to identify this scenario is by ordering all events by timestamp. This should be the only scenario where events in a session are not sequential, with events from one session overlapping with events from another session. As such, if events with different \`session\_id\`s interleave after ordering by timestamp, the events likely fall under this scenario. 

### **1.5. Reload during page visit**

**1.5.1. Description:** Student reloads an opened tab in the middle of a session. 

**1.5.2. Events captured** 

Scenario A: Student triggers some events before reloading

| Event | Triggered by | session\_id/pageview\_id |
| :---- | :---- | :---- |
| $pageview | Student opens tab | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 |
| $pageleave | Student reloads tab | 1 |
| $pageview |  | 2 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 2 |

The series of events triggered is the same as the series of events triggered in Scenario 1 (clean page visit). However, as the page URL (the \`pathname\` property in Posthog) will remain the same upon reload, this scenario could potentially be identified by checking each case where a \`pageleave\` is followed by a \`pageview\` around the same timestamp, and if \`pathname\` for both events are the same. 

Scenario B: Student does not trigger any events before reloading

| Event | Triggered by | session\_id/pageview\_id |
| :---- | :---- | :---- |
| $pageview | Student opens tab | 1 |
| $pageleave | Student reloads tab | 1 |
| $pageview |  | 2 |

**1.5.3. Computing duration**

Method: Match each \`pageview\` with its corresponding \`pageleave\`, using the \`pageview\_id\` property. Compute the duration as the difference between the timestamps of the \`pageview\` and \`pageleave\`. 

Reasoning: In this scenario, there are no drawbacks of using \`pageview\_id\` or \`session\_id\` to match \`pageview\` and \`pageleave\` since they follow each other instantly and hence will not result in mismatches or include duration spent away from the page. As such, this method can be used to find duration spent on a page. 

**However,** this method is only accurate if computing total duration spent on a page, as the split in sessions that reloading causes does not affect finding total session duration. If computing the number of views per page, the result will be overcounted, and computing average duration spent on a page will undercount. 

- If computing average metrics, reload scenarios can be identified through their \`pageview\`. A \`pageview\` triggered by reload will have:  
* Last event of the previous session (ordered by \`timestamp\`) is a \`pageleave\`  
* The \`pageview\` fires almost immediately after the prior session’s \`pageleave\`  
* Same path & same student as the prior session’s \`pageleave\`

### **1.6. Tab closed mid-event page visit** 

**1.6.1. Description:** Student closes the tab quickly enough that Posthog does not capture the event.

**1.6.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| *No event triggered* | Student switches off tab  |


**1.6.3. Computing duration**

Method: For each session that does not end with a \`pageleave\`, retrieve the last event with the same \`session\_id\` to use as a \`pageleave\` proxy. Compute the duration as the difference between the timestamps of the \`pageview\` and the last event. 

Reasoning: The events triggered in this scenario overlaps with the events triggered in Scenario 3’s Session 1 (both cases will not have a \`pageleave\` as the session’s last event); as such, duration spent on page can be computed using the same method. If necessary, both scenarios can be differentiated. For sessions that fall under Scenario 6, their events should have a \`pageview\_id\` that does not correspond with the \`pageview\_id\` of events from any other sessions. 

### **1.7. Student presses back button** 

**1.7.1. Description:** Student presses the browser’s back button to go from Page B to Page A. 

**1.7.2. Events captured** 

During returns to previous pages, no new \`pageview\` fires for the previous page. \`pageview\_id\` and \`session\_id\` for the events triggered after navigating back as for the events triggered on the initial page load. 

| Event | Triggered by | session\_id/pageview\_id | Current tab |
| :---- | :---- | :---- | :---- |
| $pageview 1 | Student opens page 1 | 1 | 1 |
| $pageleave 1 | Student navigates to page 2 | 1 | 1→ 2 |
| $pageview 2 |  | 2 | 1→ 2 |
| $pageleave 2 | Student presses back button to return to page 1 | 2 | 2 → 1 |
| x | x number of events (read, $autocapture, internalLinkClick etc)  | 1 | 1 |
| $pageleave 1 (double) | Student closes/navigates away from page 1 | 1 | 1 → |

In cases where the student heavily uses back/forward buttons, a session may have multiple \`pageleave\` events, which trigger when a page is navigated away from. 

**1.7.3. Computing duration**

Method: Combination of two methods: 

- a. Match each \`pageview\` with its corresponding \`pageleave\`, using the \`pageview\_id\` property. Compute the duration as the difference between the timestamps of the \`pageview\` and \`pageleave\`.   
- b. Identify sessions that do not have \`pageview\` as the first event in the session but have \`pageleave\` as the last event. For such sessions, use the first event in the session as a proxy \`pageview\`, then compute duration to the \`pageleave\`. 

Reasoning: This case produces sequential events (events from one session will not overlap with events from another session). As such, duration spent on page can be computed using the same method as Scenario 1 (clean page visit). 

For the return to page 1, no new \`pageview\` fires, but \`session\_id\` and \`pageview\_id\` are the same as before the navigation to page 2\. This is structurally identical to Session 2 in Scenario 3 (walked-away-then-resumed), and can be handled the same way. 

If necessary, Scenario 7 & 3 can be differentiated. For a session without \`pageview\` as the first event, check if the \`pageview\_id\` of the events in the session does not have a match in any other sessions. If a match is found, the session likely falls under Scenario 3\. Otherwise, it likely falls under Scenario 7\. 

## **2\. How often did a student visit the site over a given period (a week, a month, a term)?**

**Overview**

*Definition:* A site visit will be defined as an instance where a student opened the website and engaged with it for a meaningful period of time. A single visit may span multiple pages within the site.  

- The term ‘study session’ will be used throughout this section, and refers to a site visit. 

It is hard to calculate accurate site visit counts, as there are no events in Posthog that explicitly capture when a ‘site visit’ starts and ends. As such, site visits must be inferred from individual events, which involves needing to decide whether a given sequence of events counts as a single visit, or where one visit ends and the next begins. 

As different student behavior produces different sequences of events, the methods used to compute site visits have to be selected to match the scenario, to compute a count that best reflects the visit from the student's perspective. The table below shows the possible scenarios that page visits might fall under, and how duration can be computed for each one:

| Events used | Compute by | Scenarios |
| :---- | :---- | :---- |
| $timestamp | Reconstruct study sessions using timestamps (\<30min duration between events) | (1) Single page website visit (2) Multi page website visit (3) Multi tab website visit (4) Repeated website visits within 30min  |
| $pageview\_id (property) | $pageview\_id count | (5) Walked-away-then-resumed website visit  (6) Student presses back button  |

   
The methods listed below are generally reliable for finding site visit count for each scenario. However, differentiating scenarios may be hard, as events captured are quite similar across certain scenarios. The most reliable method across multiple scenarios is study session reconstruction, **where events with \<30min between each other are grouped into 1 study session.** 

- However, this method has a limitation, which significantly affects Scenario 4 (see *2.4.3. Reasoning* for details). 

### **2.1. Single page website visit**

**2.1.1. Description:** Student loads one page, reads it, then closes the tab to leave the website. 

**2.1.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| $pageleave | Student closes tab |

**2.1.3. Computing visit count**

Method: After grouping events by \`distinct\_id\` (unique identifier for each student), order all events by timestamp. A study session constitutes a sequence of events that have \<30min between their timestamp and the next event’s timestamp. 

Reasoning: In this scenario, the alternate method of counting a \`pageview\` as a single visit would also be able to accurately capture the student visiting the site once. However, this scenario cannot be differentiated from Scenarios 2, 3 and 4, as the events all four scenarios capture are the same. As such, selecting the alternate method to identify study sessions for Scenario 1 based on the series of events in 2.1.2 would mean applying the same method to Scenarios 2, 3, and 4 as well, which would produce an inaccurate site visit count.

As such, study session reconstruction using event timestamps should be used, as it is the chosen method for Scenarios 2, 3 and 4\. This method can be applied to this scenario too, as it is able to accurately capture the single visit as one study session.

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

Method: The same method as Scenario 1 can be applied. After grouping events by \`distinct\_id\` (unique identifier for each student), order all events by timestamp. A study session constitutes a sequence of events that have \<30min between their timestamp and the next event’s timestamp. 

Reasoning: A study session encompasses all pages that the student navigated to on the website. As such, distinguishing between pages is not necessary, and the pages the student navigated to can be counted as a single study session/site visit. \`session\_id\` and \`pageview\_id\` hence do not need to be considered for page identification, and timestamps alone are enough to determine whether the activity in Posthog represents a study session/continuous period of studying.

If needed, this scenario can be differentiated from Scenario 3 (Multi tab website visit) which also uses a similar method to compute visit count. Navigating to a new page (Scenario 2\) is sequential, hence **all events from the current page should complete before any event from the new page begins**. However, opening a new tab and switching between them (Scenario 3\) should produce alternating events from different pages. 

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

Method: The same method as used in Scenario 1/2 can be applied. After grouping events by \`distinct\_id\` (the unique identifier for each student), order all events by timestamp. A study session constitutes a sequence of events that have \<30min between their timestamp and the next event’s timestamp. 

Reasoning: The same as Scenario 2’s reasoning. If necessary, differentiation between Scenarios 2 and 3 can be done (see *2.2.3. Reasoning*). 

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

Method: The same method as Scenario 1/2/3 can be applied. After grouping events by \`distinct\_id\` (unique identifier for each student), order all events by timestamp. A study session constitutes a sequence of events that have \<30min between their timestamp and the next event’s timestamp. 

Reasoning: Counting unique \`session\_id\`/\`pageview\_id\` will correctly show two visits, while using study session reconstruction will incorrectly count two visits as one, as the events in this scenario will be \<30min apart, and will hence be grouped into the same study session. However, the events captured in this scenario are the same as Scenarios 1, 2 and 3; and it is not possible to distinguish between them. As the drawbacks of using \`pageview\_id\` counts are greater, session reconstruction is used here as well.

### **2.5. Walked-away-then-resumed website visit**

**2.5.1. Description:** Student loads a page, walks away, then comes back a few hours later & continues after the session expires (similar to Scenario 3 from Q1).

**2.5.2. Events captured** 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

**2.5.3. Computing visit count**

Method: For event sequences that follow the above, count the number of unique \`pageview\_id\` in the session. 

Reasoning: \`pageview\_id\` is the same across events triggered on the same page across sessions. As such, in this case, using it to count a single visit will accurately capture the number of site visits. 

To avoid selecting the session reconstruction method (which will count this scenario as two visits), this case has to be differentiated from Scenarios 1-4. This can be done by checking: for each \`pageview\`, whether events exist where the \`pageview\` and \`pageleave\` have different \`session\_id\` but the same \`pageview\_id\`. If so, the method above should be used. 

### **2.6. Student presses back button** 

**2.6.1. Description:** Student presses the browser’s back button to go from Page B to Page A. This should be counted as two page visits, as the student intentionally returns to Page A. 

**2.6.2. Events captured** 

During returns to previous pages, no new \`pageview\` fires for the previous page. \`pageview\_id\` and \`session\_id\` for the events triggered after navigating back as for the events triggered on the initial page load. 

| Event | Triggered by | session\_id/pageview\_id | Current tab |
| :---- | :---- | :---- | :---- |
| $pageview 1 | Student opens page 1 | 1 | 1 |
| $pageleave 1 | Student navigates to page 2 | 1 | 1→ 2 |
| $pageview 2 |  | 2 | 1→ 2 |
| $pageleave 2 | Student presses back button to return to page 1 | 2 | 2 → 1 |
| x | x number of events (read, $autocapture, internalLinkClick etc)  | 1 | 1 |
| $pageleave 1 (double) | Student closes/navigates away from page 1 | 1 | 1 → |

In cases where the student heavily uses back/forward buttons, a session may have multiple \`pageleave\` events, which trigger when a page is navigated away from. 

**2.6.3. Computing visit count**

Method: Identify this scenario by checking: for a \`pageview\`, the following characteristics are present: 

- The \`pageview\`’s session also contains **at least one** \`pageleave\` which is not the last event in the session (more events were triggered after the \`pageleave\`)   
- There are events from different sessions triggered in between the \`pageleave\` and the new events (including other \`pageleave\`s)

If these characteristics are true, add the number of unique \`pageview\_id\` \+ 1 to the total page visit count. 

Reasoning: After a student presses their back button to return to Page A, any events triggered on Page A will have the same \`pageview\_id\`/\`session\_id\` from before it was navigated away from. As such, only counting unique \`pageview\_id\` without taking this scenario into account would incorrectly reflect only one visit to Page A instead of two, even though the student deliberately returned to it. Identification of this scenario is hence necessary to retrieve an accurate page visit count. 

## **3\. Which pages were most/least visited (rank pages by visit count)?**

Overview

*Definition:* A \`pageview\` (page gets loaded) is counted as an individual visit. 

Across all scenarios for Question 3, counting the number of \`pageview\`s that were triggered on a single page is a reliable way to find which page was most/least visited. However, it may not accurately reflect engagement, as a single \`pageview\` event does not show how engaged a student was on the page – this issue appears most in Scenario 2 (student opens and immediately closes a page).    

| Events used | Compute by | Scenarios |
| :---- | :---- | :---- |
| $pageview | $pageview count | (1) Student loads a tracked page (2) Student opens a page & instantly closes it  (3) Page opened as a background tab but never read (4) Student reloads page (requires identification of reload cases) (5) Walked away page visit |

The step-by-step process of this method involves: 

1. Filter the event data to pageview events only.   
2. Group the events by page (\`pathname\`).   
3. Count the number of pageview events within each group: this count is the visit count for that page.   
4. Rank the pages by visit count.   
- The page with the highest count is the most visited, and the page with the lowest count is the least visited. 

 

### **3.1. Student loads a tracked page**

**3.1.1. Description:** A student opens a page. 

**3.1.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| $pageleave | Student closes tab |

**3.1.3. Computing visit count**

Method: Count the \`pageview\` triggered as a single visit. 

Reasoning: In this scenario, the student opens the page and closes it after they are done with it, so both the page open (\`pageview\`) and page close (\`pageleave\`) events are recorded cleanly within the same session. This should count as a single visit to the page, which counting the \`pageview\` accurately captures. 

### **3.2. Student opens a page & instantly closes it**

**3.2.1. Description:** A student opens a page, then instantly closes it. 

**3.2.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| $pageleave | Student closes tab |

**3.2.3. Computing visit count**

Method: Count the \`pageview\` triggered as a single visit. 

Reasoning: Counting the \`pageview\` as a single visit technically correctly captures it as a click on the page; however, the main goal of each question in the document is to represent engagement levels, which this does not do. Using this method, the visit is registered the same way as a visit where the student actually stayed and read the page (Scenario 1), hence while the page visit count increases by one, no real engagement happens. 

If necessary, a potential way to mitigate this issue could be to include a threshold for whether a \`pageview\` should be counted as a page visit. As \`pageview\` captures when a student opens a page, while \`pageleave\` captures when a student closes a page, the difference between their timestamps shows the duration they stayed on the page for. This value could be used as the filter for deciding whether the \`pageview\` should be counted in the total number of visits: if duration stayed on page is \<4s (arbitrary value, can be altered), the \`pageview\` will not be considered as a visit. 

### **3.3. Page opened as a background tab but never read**

**3.3.1. Description:** A student opens a page as a background tab, but never clicks into it. 

**3.3.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| *No events captured* | Student opens page in background  |

**3.3.3. Computing visit count**

Method: Count the \`pageview\` triggered as a single visit. 

Reasoning: As no \`pageview\` is captured, this case will not be counted in page visit count, which is accurate as the page is never clicked into and interacted with, and hence does not reflect engagement. 

### **3.4. Student reloads page**

**3.4.1. Description:** A student reloads the page they are currently on. 

**3.4.2. Events captured** 

| Event | Triggered by | session\_id |
| :---- | :---- | :---- |
| $pageview | Student opens tab | 1 |
| $pageleave | Student reloads tab | 1 |
| $pageview |  | 2 |

**3.4.3. Computing visit count**

Method: Before counting the \`pageview\` as a single visit, identify if it was triggered by a page reload. This is done by identifying the previous session (the session that came immediately before the session that the \`pageview\` is in) and checking the following characteristics: 

- The last event of the previous session is a \`pageleave\`  
- The previous session’s \`pageleave\` was triggered almost immediately before the \`pageview\`  
- The previous session’s \`pageleave\` was on the same page (has the same \`pathname\`) as the \`pageview\` 

If all characteristics above are true, the \`pageview\` is likely to be caused by a reload. As such, it should not be counted in the page’s total visit count. 

Reasoning: The check for whether a \`pageview\` is caused by a reload prevents such pageviews from being counted in total page visit. This provides a more accurate estimate of the number of visits, as from the student’s perspective, reloading the page does not make up a new visit – they are still on the same page and engaging with the same content. The reload is usually incidental (connection issue, accidental refresh, student waiting for something to load), instead of a deliberate return to the page, so counting it as a separate visit would inflate the total and misrepresent how many times the page was actually sought out. As such, excluding reloads will provide a better reflection of the true level of student interest.

### **3.5. Non-student events**

**3.5.1. Description:** All events triggered by anonymous/dev users. Currently, these users include: 

- Users in the \`persons\` table whose name property is \`joe\`, \`jonathan\` or \`fromeguest\`  
- Users who are not in the \`persons\` table, but appear in the \`events\` table through the \`person\_id\` field   
- Users who triggered events with a \`pathname\` property that includes ‘localhost’ 

 The events triggered by these users should be filtered out to exclude them from final counts. 

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

Method: Count the \`pageview\` triggered as a single visit. 

Reasoning: Counting \`pageview\` will accurately count it as a single page visit, as the visit is established at the moment the page loads, and does not depend on when (or whether) the corresponding \`pageleave\` fires. Although the \`pageleave\` in this case is triggered with a new \`session\_id\` after the student returns, it does not create a second \`pageview\`, so the page is still counted once. As such, this case will accurately be counted as a single visit. 

## **4\. How much total time did students spend on resources vs. assignments vs. schedule pages?**

Overview

Not much to add here that isn’t already covered by the [data-questions-mapping.md](http://data-questions-mapping.md) file.

Per-category breakdowns can be found by separating pages by page type (done in the \`all\_pages\` view), and the scenarios listed in Question 1 provide methods for finding duration spent on a page, which can be applied to each of the separate page categories to address this question.

## **5\. How frequently did students check the schedule page (daily, weekly, monthly)?**

Overview

Similar to Question 4, not much to add here that isn’t already covered by the [data-questions-mapping.md](http://data-questions-mapping.md) file. 

This question’s metric (a page visit to the schedule page) is similar to Question 2’s metric (a page visit), and should be defined the same way: an instance where a student opened the schedule page and engaged with it for a meaningful period of time. The scenarios that may potentially occur in this question are hence similar to Question 2’s scenarios, and all computing methods/reasoning for Question 2’s scenarios should apply here as well. 

For the scenarios listed in \`data-question-mapping.md\` that run into coverage gaps (Scenario 4 & 5), a possible workaround could be identifying the sessions triggered on the schedule page that **do not** begin with a $pageview event, then manually checking if those sessions reflected actual engagement (e.g. read event triggered). 
