**Goal:** To provide an overview of how Posthog event capturing can be modified to enable easier/more detailed analysis. This doc is split into 3 sections: 1\. events with recommended changes, 2\. events that could be added, and 3\. events that do not need improvements. 

## **1\. Events with recommended changes**

### **1.1. read**

**Current behavior:** read fires the first time a user scrolls more than 50% of the page. However, it does not trigger any other times in the session, regardless of further scrolling behavior.  

**Why this is an issue:** With the current implementation, actual reading and other common behavior that happens to trigger the same event cannot be distinguished. For example, a student who immediately scrolls to the bottom just to check the page length triggers the same read event as a student who scrolls slowly and actually reads. 

**Recommended changes:** **Adding multiple read events that trigger at different thresholds of the page, such as 25%, 50% and 75%.** This enables computing how long the student took to scroll to each threshold through the timestamps attached to each read event, which can provide a better idea of engagement depth – for instance, a student who went from 25% to 100% in \<1s most likely did not actually read the page. 

**Purpose of change:** Scroll speed/how quickly a student read through the page is a good indicator of engagement. This change enables computing scroll speed, as logging events at multiple thresholds (25%, 50%, 75%, 100%), allows scroll speed to be computed from the timestamps between each threshold. Additionally, using this method over just capturing scrolling movements prevents the data from getting overclogged with scroll events. 

**Limitations:**

- A student that scrolls to the 25% threshold and stays for a long time, then returns and scrolls quickly to the bottom of the page will be logged as having a slow scroll rate, hence overestimating their engagement. This limitation is present for all other events, hence no single event is able to accurately estimate engagement. The best solution is to use a combination of events to do so; however, this will still be an inference, and cannot be completely verified as actual engagement. 

- A student that scrolls to the bottom of the page immediately to check page length, then scrolls back up to read through slowly will only have the initial quick page scroll logged. As such, even if this student carefully reads the page content on the second scroll through the page, this second scroll will not be captured. Computing scroll speed will hence show the student as having a very fast scroll speed, and the resulting inference that the student is not engaged will be inaccurate. A potential solution could be **combining scroll speed with time on page**, to identify such cases. 

### **1.2. inactiveNutshell**

**Current behavior:** inactiveNutshell is captured every time an open nutshell is closed, no matter if it was closed by the student scrolling past it (automatic) or by the student clicking on the nutshell link.   

**Why this is an issue:** inactiveNutshell does not provide any properties that distinguish between automatic and manual closing; as of SRIP 2026, the best way to do so is to check if there are any $autocapture events that happened at the same time as the inactiveNutshell event, as $autocapture is triggered alongside inactiveNutshell when the user clicks a nutshell link (done in the \`actual\_user\_events\_2510/2520\` views). 

**Recommended changes:** **See 2.1. closeNutshell.** 

Purpose of change: To enable distinguishing between user manually closing nutshell vs. user scrolling past nutshell. This will allow analysis of the behaviors driving manual vs automatic nutshell closing.  

**Limitations:** 

- None

### **1.3. $autocapture**

**Current behavior:** $autocapture fires every time an element is clicked. As such:  

- Elements that have custom events attached will fire both the custom event and a generic $autocapture for the same click.   
- The location of which element triggered an $autocapture can only be estimated using \`$element\_chain\`, if the element does not have custom events. 

**Why this is an issue:** The current behavior causes some $autocapture events in Posthog to be double counted alongside a custom event for the same interaction. The fix as of SRIP 2026 is to match $autocapture events to their corresponding custom event (using \`properties.el\_text\` and \`properties.external\_click\_url\`) and exclude those $autocapture events, and to categorize the remaining $autocapture events by which part of the website they came from – however, this matching is only an estimate and is tedious. 

**Recommended changes:** Prevent $autocaptures from being fired on elements that have custom events, and capture additional identifying properties in $autocaptures that are triggered by elements without custom events (i.e. text of the element, page that the element redirects to etc).  

**Purpose of change:** To remove need to match custom events to $autocapture events (for deduplication when making charts), and enable understanding of where $autocapture events are mostly being triggered. 

**Limitations:**

- None

### **1.4. $rageclick** 

**Current behavior:** $rageclick triggers when a student clicks rapidly on an element \>2 times without moving their mouse. However, its current properties make it hard to identify which element it was triggered on, as while some $rageclick events have a \`$el\_text\` property, others do not.  

**Why this is an issue:** The main purpose of $rageclick events is to find which elements of the website are most confusing/have the most rageclicks. However, $rageclick does not have properties that can identify the element they were triggered on. 

**Recommended changes:** Add a \`text\` property similar to internalLinkClick and externalLinkClick events, which shows the text of the element that was clicked on. 

**Purpose of change:** Allow easier identification of which elements triggered $rageclick events. 

**Limitations:** 

- None

## **2\. Events for better metric measurements**

### **2.1. closeNutshell** 

**Trigger:** User clicks an element to close an open nutshell (either nutshell text, or the ‘x’ button at the bottom of the open nutshell’s text. 

**Custom properties:** 

| Name | Purpose |
| :---- | :---- |
| duration | Duration between nutshell being opened and nutshell closing |
| text | Visible anchor text shown for the nutshell  |

**Purpose:** To allow differentiation of whether an open nutshell was manually closed or automatically closed, which may reflect different student behavioral patterns. 

**What does it do**

*a. Indicates when an open nutshell was manually closed*  

The closeNutshell event fires when students click on an open nutshell to close it, while inactiveNutshell will fire if the open nutshell is scrolled past/out of view. 

*b. Indicates which element was clicked on to close the nutshell* 

The \`text\` property will be either 1\. the nutshell text (if a student clicked on the nutshell text) or 2\. ‘x’ (if a student clicked on the ‘x’ button contained in the nutshell text). If identification of how the nutshell is closed is needed, this enables easier identification. As of now, inactiveNutshell does not fire when the ‘x’ button is clicked, and the $autocapture fired does not store the properties of the nutshell, which prevents matching to the openNutshell. As such, closeNutshell fixes this issue. 

**Limitations:**

*a. $autocapture should be disabled for nutshell elements* 

To prevent duplicate $autocapture events from firing alongside closeNutshell events, $autocapture should be disabled for the nutshells. 

### **2.2. tabFocused** 

**Trigger:** User clicks on the tab. 

**Custom properties:** 

| Name | Purpose |
| :---- | :---- |
| isInitial | Boolean, checks if this is the initial visibility state upon page load |
| page | Title of the page the event was triggered on  |
| totalTimeOpen | Time elapsed since the tab was first opened |
| timeHidden | Time elapsed between the tab being unfocused and focused |

**Purpose:** To remove part of the uncertainty on whether students are actually engaging with the website content. Students might switch between website tabs and non-website tabs – currently, there is no way to identify when this switch occurs, hence time spent on non-website tabs will be counted into the duration students spent on the website (overcounting). This event fixes this issue, as it allows computing how long students spent off a page/not engaging with the website (timeHidden property). 

**What does it do**

*a. Shows what pages students are engaging with*  

The tabFocused event fires when students return to a course site tab after switching away. This provides a better estimate for when students are focusing on a certain tab, which allows tracking of how long a study session actually lasted for as well as resumed study sessions, unlike $pageview. As such, this can be paired with tabUnfocused to measure attention patterns during a session, and how long students engage with any given page before switching. 

*b. Shows how often students multitask* 

The timeHidden property measures the duration which the tab was unfocused before being focused, which can be used to compute attention patterns of a student. Additionally, the number of tabFocused/unfocused and which tabs it occurred on during a session can show which pages students switch away from the most, and if having multiple tabs open during a study session is common behavior. 

**Limitations:**

*a. tabFocused triggering for every page*

Students may have multiple pages open at the same time (split screen). This will lead to overlapping tabFocused events. Additionally, if both pages are switched away from at the same time, multiple tabUnfocused events will be triggered – when switching back, all pages will fire tabFocused. As such, before calculating metrics involving tabFocused and its properties, tabFocused will need to be deduplicated (i.e. checking if there are multiple tabFocused with similar timestamps) to avoid overcounting.  

### **2.3. tabUnfocused** 

**Trigger:** User clicks away from the tab (minimizes window/switches tab/switches window). 

**Custom properties:** 

| Name | Purpose |
| :---- | :---- |
| isInitial | Boolean, checks if this is the initial visibility state upon page load |
| page | Title of the page the event was triggered on  |
| totalTimeOpen | Time elapsed since the tab was first opened |
| timeFocused | Duration that the tab was focused for  |

**Purpose:** Same as 2.2. tabFocused – this event is meant to enable easier computing of how long students spent on a page/not engaging with the website (timeFocused property). 

**What does it do:**

*a. Shows how long a student engaged with a page*  

The timeFocused property allows tracking of how long the student focused on the tab before unfocusing it, which can show how long the tab was active for. However, it is unable to confirm if the student is actively looking at the tab.  

**Limitations:**

*a. No $pageview event fires if the unfocused tab is never focused*

If a new tab is opened without the student ever clicking into the tab, a tabUnfocused will fire but no $pageview event will be triggered. If the student closes the tab without focusing on it, $pageleave will fire, but the session will not include any $pageview event. This should not be an issue if calculating session duration using $pageview and $pageleave, as it will be rightfully dropped. However, if using session counts, these sessions will be overcounted as real sessions even though the student never viewed the page. 

This could be mitigated by checking the isInitial property – in this case, filtering out sessions with only one tabUnfocused where isInitial \== true. 

*b. May overcount as multiple tabUnfocused can be fired at the same time*

If a student has multiple website tabs open, then switches to a non-website tab, each website tab will trigger a tabUnfocused, which inflates the tabUnfocused count and causes the sessions that the tabUnfocused events belong to to overlap in time instead of happening sequentially. Additionally, since each tabUnfocused tracks its own timeFocused independently, metrics such as total time hidden or number of times a student left the site should not be calculated by summing timeFocused across all tabUnfocused/tabFocused events, as this will count the same period of time multiple times, which will overestimate final value. 

A solution could be computing students’ time away from the site, by:

1. Reconstructing a chronological order of tabFocused/tabUnfocused events across all of the student's tabs  
2. Checking each stretch of time when the student was likely to be active (events are \<10min apart), for whether there was a period where no tabs were focused, and for how long this occurred. 

### **2.4. userIdle** 

**Trigger:** User does not move their mouse OR trigger any events for 3 minutes. 

**Custom properties:** 

| Name | Purpose |
| :---- | :---- |
| idle\_id | Unique ID for one idle period, shared by the opening userIdle, all userStillIdle heartbeats in that period, and the closing userActive. This allows each period of inactivity to be reconstructed. |

**Purpose:** This event is meant to identify whether a student was inactive on a page. Mouse movements can keep a session active, but are not captured in the events table in Posthog – this produces two problems: 

- Sessions can contain events more than 30 minutes apart under the same session\_id (unexpected due to the 30min inactivity timeout), due to unlogged mouse movement resetting the timeout.   
- Duration becomes hard to verify, as a long gap between logged events could reflect a student reading and scrolling throughout, or a tab left open and abandoned/only scrolled once to reset the timeout. In the second case, duration becomes substantially inflated.

As such, this event closes this gap. Since it indicates whether a student was idle, the idle time can be computed and used to identify more metrics (e.g. ratio of active time on page to idle time on page). 

**What does it do:**

*a. Indicates whether a student went idle*  

There is currently no marker for whether a student was idle when looking at the events in a session, as mouse movements on a page are not recorded in Posthog. userIdle hence provides a marker that shows when a student was inactive. Combined with the events 2.4. userStillIdle and 2.5. userActive, it should be able to show how long users were inactive on a page for. 

**Limitations:**

*a. Calculating idle time on page*

userIdle alone will be unable to find idle duration on the page. This is because instances where students leave a tab open and walk away will lead to the following events: 

| Event | Description | session\_id |
| :---- | :---- | :---- |
| $pageview | Student opens the page | 1 |
| x | Student triggers x events | 1 |
| userIdle | Student walks away/goes idle for 3min | 1 |
| *No event triggered* | 30min passes | \- |
| x  | Student returns & triggers x events | 2 |

As there is no $pageleave event/last event in the session triggered if the student leaves the tab open and leaves, it is not possible to calculate how long the student was idle on the page for.   
\*\*Note: 2.4. userStillIdle is intended to solve this issue. 

### **2.5. userStillIdle** 

**Trigger:** Heartbeat event – user has not moved their mouse OR triggered any events for 5 minutes (since the last event). 

**Custom properties:** 

| Name | Purpose |
| :---- | :---- |
| idle\_id | Unique ID for one idle period, shared by the opening userIdle, all userStillIdle heartbeats in that period, and the closing userActive. This allows each period of inactivity to be reconstructed. |

**Purpose:** userStillIdle is a complement to userIdle, and serves as a heartbeat event that tracks if the user is still idle. It closes the issue of sessions with userIdle not having a last event, by indicating whether a student was idle at certain times. 

**What does it do:**

*a. Allows calculation of idle time on page*

Allows idle time on a page to be calculated and subtracted from total duration, so long gaps between logged events do not get counted as active time. Without the userStillIdle heartbeat events, the session will end at userIdle (if the student never returns to the page), which makes calculating idle duration impossible. 

**Limitations:**

*a. Session will not expire*

A session will not expire if events are constantly being fired – as such, userStillIdle will keep sessions where a user has walked away active until the user returns and closes the page. This will lead to very long sessions. However, the ‘student walks away’ scenario will stop creating single-event sessions (i.e. sessions where a student returns to an open page only to close a tab → $pageleave). 

### **2.6. userActive**

**Trigger:** User focuses on a page they were idle on (no mouse movements/events triggered) and triggers a mouse movement or an event. 

**Custom properties:** 

| Name | Purpose |
| :---- | :---- |
| idle\_id | Unique ID for one idle period, shared by the opening userIdle, all userStillIdle heartbeats in that period, and the closing userActive. This allows each period of inactivity to be reconstructed. |
| idle\_duration | Duration between user going idle and user returning to the page |

**Purpose:** To mark the end of an idle period (starts with userIdle), when the user returns to the page. Including userIdle and userStillIdle, the intended flow of events is: 

| Event | Description | session\_id |
| :---- | :---- | :---- |
| $pageview | Student opens the page | 1 |
| x | Student triggers x events | 1 |
| userIdle | Student walks away/goes idle for 3min | 1 |
| userStillIdle | 10min passes | 1 |
| userStillIdle | 10min passes | 1 |
| userActive  | Student returns & triggers x events | 1 |
| x |  | 1 |

**What does it do:**

*a. Allows calculation of idle time on page*

Allows idle time on a page to be calculated and subtracted from total duration, by marking the end of an idle period. userActive is used instead of the first logged event after the student returns, as a student may resume activity by moving their mouse or scrolling, which keep the session alive but are not recorded in the events table. userActive captures this, hence it marks the true end of an idle period.

*b. Makes mouse movements visible*

Mouse movements prevent a session from becoming inactive but are not logged in the events table, so cases involving mouse movement will not leave any traces (e.g. student returning to the page and moving their cursor). userActive surfaces these moments explicitly, and marks when the student resumed activity even if their return was via mouse movement rather than a logged event like a click or scroll.

**Limitations:**

*a. Will not fire if student never returns*

If a student goes idle and never closes the tab without coming back, userActive will not be triggered, and session duration will be increased by the trailing userStillIdle pings. 

## **3\. Events that do not require improvements**

### **3.1 pageview**

### **3.2 pageleave**

### **3.3 openNutshell**

### **3.4 internalLinkClick**

### **3.5 externalLinkClick**

