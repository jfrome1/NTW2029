**1\. How much time did a student spend on a single page (one page visit)?**

Matching

$pageview and their corresponding $pageleave events have a shared property **$pageview\_id**, which can be used to match a $pageview to its corresponding $pageleave. This can be done across sessions; however, $pageleaves and $pageviews in different sessions should not be matched, as this will include the time between each session.   
   
The property **$session\_id** persists across all events in the same session, and can be used to identify events that happened in the same session. 

| Events | Match | Compute by | Scenarios |
| :---- | :---- | :---- | :---- |
| $pageview, $pageleave | $session\_id, $pageview\_id | $pageleave timestamp \- $pageview timestamp | (1) Clean page visit (2) Background tab page visit (4) Multi-tab parallel page visits (5) Reloads |
| $pageview, last event in session | $session\_id | last event in session’s timestamp \- $pageview timestamp | (3) Walked-away page visit (Session 1\) (6) Tab closed mid-visit |
| first event in session, $pageleave | $session\_id | $pageleave \- first event in session’s timestamp | (3) Walked-away page visit (Session 2\) |

**1.1. Clean page visit**

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

**1.2. Background-tab page visit** 

**1.2.1. Description:** Student switches to a non-website tab, then returns to the website tab and leaves the page. The session does not expire. 

**1.2.2. Events captured** 

| Event | Triggered by |
| :---- | :---- |
| $pageview | Student opens tab |
| x  | x number of events (read, $autocapture, internalLinkClick etc) |
| $pageleave | Student closes tab |

The events triggered in this scenario will be **effectively the same** as in the Clean Page Visit scenario, as there is currently no way to determine when a student switches tabs. 

**1.2.3. Computing duration**

Similar to clean page visits, using the time difference between the $pageview timestamp and $pageleave timestamp. However, this will not give the exact duration spent on the page for the session. 

**1.3. Walked-away page visit** 

**1.3.1. Description:** Student loads the tab, then switches off the tab and never returns to the page. The session expires. (30 minutes after)

**1.3.2. Events captured** 

Scenario A: Student does not trigger any events before switching off the page

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

The events triggered in this scenario will be **effectively the same** as in the **Reload scenario**, as there is currently no way to determine when a student switches tabs. 

Scenario B: Student triggers events before switching off the page

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

**1.3.3. Computing duration**

In this case, $pageleave timestamps **should not** be used although they can be matched to their $pageview, to avoid including the time spent away from the page. 

This scenario will create 2 sessions, which should be handled differently: 

1. Session 1: 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| $pageview | Student opens tab | 1 | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 | 1 |
| *No event triggered* | Student switches off tab & session expires | \- | \- |

- For each $pageview, retrieve the last event with the same session\_id to use as a $pageleave proxy.   
2. Session 2: 

| Event | Triggered by | session\_id | pageview\_id |
| :---- | :---- | :---- | :---- |
| x | Student returns to the original tab x days/hours later and triggers events | 2 | 1 |
| $pageleave | Student closes the tab | 2 | 1 |

- This session will not start with a $pageview. As such, sessions where the first event is not a $pageview should use the first event as a $pageview proxy, then combined with the $pageleave timestamp to compute duration. 

- This should be the only case where a session does not start with a pageview: can be confirmed by checking if the first event of the session has a pageview\_id matching the last non-$pageleave event of a previous session. 

**Limitation:** This method will be accurate if computing total duration spent on a page, by adding up the durations for session 1 and 2\. However, computing the number of views per page will overcount, and computing average duration spent on a page will undercount. 

**1.4. Multi-tab parallel page visits**

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

**1.5. Reload during page visit**

**1.5.1. Description:** Student reloads an opened tab. 

**1.5.2. Events captured** 

Scenario A: Student triggers some events before reloading

| Event | Triggered by | session\_id |
| :---- | :---- | :---- |
| $pageview | Student opens tab | 1 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 1 |
| $pageleave | Student reloads tab | 1 |
| $pageview |  | 2 |
| x  | x number of events (read, $autocapture, internalLinkClick etc) | 2 |

The series of events triggered overlaps with the series of events triggered in Scenario 1 (clean page visit). However, as pathname will remain the same upon reload, a potential identifier for this scenario could be checking each case where a $pageleave is followed by a $pageview around the same timestamp, and if the pathnames for both events are the same. 

Scenario B: Student does not trigger any events before reloading

| Event | Triggered by | session\_id |
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

**1.6. Tab closed mid-event page visit** 

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

