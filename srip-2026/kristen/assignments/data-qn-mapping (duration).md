## **1\. How much time did a student spend on a single page (one page visit)?**

***\*\*Note:** This is the newest version of [data-qn-mapping-overview.md](http://data-qn-mapping-overview.md) \- Question 1\.* 

**Overview**

*Definition:* Each time a student opens an individual page, the time between them opening the page and when they leave. 

The previous version of this question involved the following methods for computing duration, based on different possible scenarios:  

| Events used | Match on | Compute by | Scenarios |
| :---- | :---- | :---- | :---- |
| $pageview, $pageleave | $session\_id, $pageview\_id | $pageleave timestamp \- $pageview timestamp | (1) Clean page visit (2) Background tab page visit (4) Multi-tab parallel page visits (5) Reloads (7) Student presses back button |
| $pageview, last event in session | $session\_id | last event in session’s timestamp \- $pageview timestamp | (3) Walked-away page visit (Session 1\) (6) Tab closed mid-visit |
| first event in session, $pageleave | $session\_id | $pageleave \- first event in session’s timestamp  | (3) Walked-away page visit (Session 2\) (7) Student presses back button |

These methods were built on the assumptions that 1\. sessions end after a \`pageleave\`, and 2\. sessions end after 30min of inactivity (no events triggered on the page). However, there were sessions in the Posthog data where these assumptions were false. 

1. Sessions not ending after a \`pageleave\`: \`session\_id\` persisted even after a \`pageleave\` event, where events triggered after the \`pageleave\` retained the same \`session\_id\`.   
- As such, using the original methods above to compute duration overcounted duration, as the initial \`pageview\` would be matched to the last \`pageleave\` even if there was another \`pageleave\` triggered earlier. 

2. Sessions not ending after 30min inactivity\`: \`session\_id\` persisted past 30min of no events being triggered, when a new session should have started after 30min.   
- This led to multiple sessions with events that had large time gaps between them. These time gaps were included when computing final duration using the above methods, hence leading to overcounting duration.  
- This was caused by mouse movements being able to keep a session active, despite session replay (captures mouse movement data) not being enabled in the Posthog project. However, the new method & 30min threshold cutoff will still be maintained, as keeping the time gaps >30min  produces unrealistic values (e.g. additional ~1000min for a single student). 
   - Large time gaps are likely to be caused by students switching back and forth between tabs while occasionally triggering mouse movements on these tabs. **There is currently no way to accurately estimate when students switch between tabs and hence exact durations spent on page, but this issue should be fixed with the addition of tabFocused events.**

\*\*(Evidence: [https://drive.google.com/file/d/1l6zBnNEq3sZmsKDTg4CGBXohbAf0SHMv/view?usp=sharing](https://drive.google.com/file/d/1l6zBnNEq3sZmsKDTg4CGBXohbAf0SHMv/view?usp=sharing)) 

As such, a different method will be used to compute duration. Similarly to the previous methods, it has the major limitation of being unable to tell if a student was actually actively engaging with the page, or if the student left the page open/went to another page.  

| Events used | Match on | Compute by | Scenarios |
| :---- | :---- | :---- | :---- |
| \- | $session\_id | last event in session’s timestamp \- first event in session’s timestamp  | (1) Clean page visit (2) Background tab page visit (4) Multi-tab parallel page visits (5) Reloads (7) Student presses back button |

 

The method to compute duration is the same across all scenarios, and no differentiation of scenarios is required. It involves the steps: 

1. Group each session by \`session\_id\`  
2. For each session, go through the events and check if the gap between each event’s timestamp & the previous event’s timestamp is \>15min . If so, split the session into two subsessions by these events.  
- Reasoning: 15min threshold is chosen based on what is assumed to be a reasonable amount of time for students to spend between triggering events; any time gap longer than this is assumed to be the student idling/not being active on the website.   
- This step handles both inconsistencies:  
* \`session\_id\` is not relied on to determine duration/what events are in a session beyond the initial grouping.   
* Implausible durations between events in the same session (e.g. \`pageview\` triggered at 5pm and the next event triggered at 6pm) are handled, as these durations will not be counted in total duration.   
3. Calculate duration of the events in a session using the timestamps of the first & last events in the session.  

### **Limitations**

**1\. Students idle on website**

As the current inactivity threshold is set to 900 seconds/15 minutes, this method will only split a session if the time gap between two consecutive events is greater than this threshold. Time gaps between two events may be barely below the threshold (i.e. \~14min), which will cause them to be counted in full as engagement time, even though the student may have been inactive for most of that interval. As there is currently no way to tell if students were actually active on the page (e.g. reading instead of switching to a non-website tab) or inactive (e.g. leaving the tab open & walking away), the best estimate is the time between events; which cannot distinguish sustained reading from a temporary absence that happened to end before the timeout. Hence, measured duration will be biased high.   
\*\*Note: The inactivity threshold is arbitrary, and was chosen based on what is assumed to be a reasonable amount of time for students to spend between triggering events. However, different events may have different inactivity thresholds depending on the element that triggered the event: for instance, students would be expected to spend more time on a nutshell with more text than a shorter nutshell. 

**2\. Last-event duration undercounting**

This method uses min(timestamp) and max(timestamp) to get the first and last events in a session; duration is then calculated using the time difference between these events. However, there are some sessions where the last event is not a \`pageleave\` – in these cases, there is no marker for when the student actually left the page. If the student continues using the website for a while after triggering the last event, this trailing time is not captured by max(timestamp) and will be excluded from the total duration. As such, sessions with a non-pageview event as the last event may have **undercounted durations.** Currently, 1988/6947 sessions/sub-sessions have a non-pageleave event as the last event and may be affected. 

**3\. Threshold sensitivity**

Different inactivity thresholds will lead to different durations-per-session. Final durations will shift according to the threshold set – a 900-second threshold will lead to larger durations per session compared to a 600-second threshold, as the events will be split fewer times and hence retain the time gaps in the final duration. Total durations will also change – from previous tests, the 600-second threshold produced 6917.64 minutes spent on site across all students from the 2520 cohort, while the 900-second threshold produced 9587.00 minutes. The total duration for the 600-second threshold being smaller than the 900-second threshold is expected, as smaller thresholds will filter out more time gaps and split sessions more frequently. 

In summary, the threshold selected has the potential issues: if it is too low, gaps where the student was actually engaging with the site will be filtered out (undercounting engagement). If it is too high, gaps where the student actually walked away will be credited as engagement and counted in total duration (overcounting engagement). 

- Solution: tabFocused events would make a student switching off tabs visible, which removes uncertainty around whether a gap was caused by the student switching off the tab (not engaging). Time spent with the tab unfocused could then be confidently identified, instead of being assumed using a threshold. 

\*\*Test results for 600s & 900s thresholds: [https://drive.google.com/file/d/1aoGeCT6QLHlz9SAsh0LGGQTGSgQuPek7/view?usp=sharing](https://drive.google.com/file/d/1aoGeCT6QLHlz9SAsh0LGGQTGSgQuPek7/view?usp=sharing) 

