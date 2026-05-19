**Goal of Document:** For every event captured, document what it includes: fields, what elements it captures, what behavioral questions it can answer.

## **1\. Events**

All events have the fields: 

| Name | Purpose |
| :---- | :---- |
| created\_at | Timestamp where Posthog received and stored the event (NOT when event was triggered in browser) |
| distinct\_id | Identifier for the user that triggered the event |
| elements\_chain | DOM path of the element that got clicked on |
| event | Name of the event |
| person\_mode | Identifies if event is anonymous or identified  person\_mode=full : event tied to a user person\_mode=propertyless : event anonymous |
| properties | JSON data on all event properties (custom & default)  |
| team\_id | ID for project in Posthog, not necessary |
| timestamp | Timestamp of when event was triggered in the browser (client-side) |
| uuid | Unique identifier for the event row |

The properties field captures most of the additional data linked to an event, and differs for each event, both custom and default. 

## **2\. Properties** 

Default events have default properties set by Posthog. Custom events have both default properties and custom properties, which are defined by the user using posthog.capture and sent alongside the default properties. In the properties JSON, custom properties appear as the name specified in posthog.captured, while default properties have \`$\` before their name. 

Default properties largely include data that is additional and less useful for analysis, such as $browser\_language and $host. However, some default properties that could significantly value-add include:  

| Name | Purpose |
| :---- | :---- |
| $current\_url | Full URL of the page the event was triggered on  |
| $pathname | Stemmed version of the URL, without \`https://ntw-2029.vercel.app\` |
| $device | Mobile device type (Android, iPhone, iPad, Android Tablet, Generic Mobile) |
| $os | Laptop device type (iOS, Android, Windows, MacOS X, Linux) |
| $browser | Browser type where the event was triggered (Chrome, Firefox, Safari, Opera, Mobile Safari, Microsoft Edge, Samsung Internet, Android Mobile, Chrome iOS) |
| $viewport\_width, $viewport\_height | Viewport size of device |
| $is\_identified | Boolean for whether event is identified or anonymous (user not identified)  |
| distinct\_id | ID of the user who triggered the event. If the user has not been identified (is not in the list of existing users), this will be a UUID. Otherwise, it will be a short numeric number.   |

## **3\. Custom Events** 

### 3.1. read

3.1.1. **Trigger:** User scrolls past 50% of the page for the first time. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| page | Title of the page the event was triggered on  |

3.1.2. **What it can be used for:** 

*a. Analysis involving page-level engagement*  

The read event fires when a student scrolls past 50% of the page, which can be seen as engagement with the page. This is a stronger signal than $pageview – $pageview fires whenever a page loads, including accidental reloads or clicks, while read requires the student to actually scroll and engage with the content. As such, it could be a stronger signal than $pageview when measuring engagement, through: 

- Scroll rate: Comparing the count of read events to $pageview events per page displays what fraction of students who loaded the page actually scrolled into its content.   
- Identifying which pages students consume: Pages with many pageviews but few reads indicate the page is being loaded but not read, while pages with high reads : pageview ratios are receiving higher engagement. 

3.1.3. **Limitations:** 

*a. Does not capture depth of engagement*

Read will be fired as long as the student scrolls past 50% of the page, no matter how quickly or slowly they scrolled. Students who carefully read and scroll slowly through every paragraph vs. students who scroll quickly past the midpoint then navigate away, will both produce the same read event. As read measures whether the student scrolled 50% of the page, and not whether they actually engaged with the content along the way, it only provides an illusion of engagement. 

- A potential fix could be adding additional read events at different thresholds (e.g., 25%, 50%, 75%, 100%) so that scroll depth can be inferred from which events fired. 

*b. Only captures the first instance* 

The read event only fires the first time a student reaches 50% scroll depth. Subsequent scrolling behavior not captured in the same session/page. As such, students who scrolled the page once are lumped together with students who scrolled up and down the page multiple times, despite both reflecting different levels of engagement. 

### 3.2. openNutshell 

3.2.1. **Trigger:** User opens a nutshell. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| page | Title of the page the event was triggered on  |
| text | Text shown on the nutshell link |

3.2.2. **What it can be used for**

*a. Further estimate for engagement*  

Opening a nutshell link indicates that 1\. the student is interested in knowing more information and 2\. is reading the page closely enough to see the nutshell link, both of which indicate active engagement. This could be combined with $pageview and read events to give a more complete indicator of how deeply students engage with a page. 

*b. Displays what kind of content students engage more with*  

Nutshell links with higher rates of opening likely contain concepts or information that students find unfamiliar or want to verify, while pages with many nutshells but low open rates may suggest less useful nutshells or too many. This could enable analysis of the effectiveness of content, such as comparing engagement across content categories, and if there is an optimal threshold for the number of nutshells on a page. 

3.2.3. **Limitations**

*a. Does not reflect how long the nutshell was opened for*

The openNutshell event does not contain information about whether the student read the nutshell, glanced at it, or closed it immediately. As such, pairing with the corresponding inactiveNutshell is necessary to get the duration of the nutshell being opened. However, if inactiveNutshell does not exist, the duration the nutshell was opened for will be unknown. 

### 3.3. inactiveNutshell

3.3.1. **Trigger:** User scrolls away until open nutshell is out of view.

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| duration | Duration between nutshell being opened and nutshell going out of view |
| text | Visible anchor text shown for the nutshell  |

3.3.2. **What it can be used for**

*a. Measuring depth of engagement with the nutshell*

inactiveNutshell’s duration property captures how long the nutshell was open before being scrolled out of view, allowing for distinguishing students actually engaging from accidentally opening the nutshell. Grouping inactiveNutshell events by text and computing average duration shows which nutshells students spend more time with, which could indicate how effective the presence/content of the nutshell is. 

3.3.3. **Limitations**

*a. Does not reflect when the nutshell is manually closed*

The inactiveNutshell event fires when the student scrolls past the nutshell, leading to it automatically closing. However, if the student manually reclicks the nutshell link to close it, the only event that fires is $autocapture. This is expected behavior, as the inactiveNutshell event is meant to reflect students scrolling past an opened nutshell; however, the result is that no events capture students closing a nutshell other than manually parsing $autoselect. 

### 3.4. internalLinkClick

3.4.1. **Trigger:** User clicks on any internal link. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| link | Link URL |
| text | Visible anchor text shown for the link |

3.4.2. **What it can be used for**

*a. Easier querying than $autocapture*

As the link and text properties are distinct fields in the internalLinkClick event, it is the simplest way to count internal navigation events; compared to $autocapture, which requires parsing the elements\_chain property. Grouping by link shows which internal pages students click to most often, while grouping by text shows which anchor wordings are most clicked. 

3.4.3. **Limitations**

*a. Does not show which DOM element was clicked*  

internalLinkClick records link URL and anchor text, but not which element on the page contained that link. This may be an issue if a page destination can be reached from multiple elements (e.g. sidebar nav vs pagination buttons) that have similar names, as while they may reflect different behaviour, internalLinkClick will treat them as identical events. Currently, the site does not seem to be vulnerable to this issue, as text distinguishes between elements clearly (e.g. pagination buttons add ‘Previous’ and ‘Next’ to destination titles, while sidebar links use the title alone). As such, grouping by link AND text should be largely sufficient for distinguishing between which internal links were clicked on the course site.

### 3.5. externalLinkClick

3.5.1. **Trigger:** User clicks on an external link. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| link | Link URL |
| text | Visible anchor text shown for the link |

3.5.2. **What it can be used for**

*a. Shows what external resources students are engaging with*  

Clicking on an external link indicates that 1\. the student is interested in knowing more information and 2\. is reading the page closely enough to see the link, both of which indicate active engagement. This indicates how deeply students engage with a page, and what kinds of external resources are being utilized more. 

3.5.3. **Limitations**

*a. Does not show what happens after students leave the site* 

After clicking the external link, Posthog cannot continue tracking the student’s activity – as such, the student’s level of engagement with the external content is obscured, whether they read the destination or instantly closed it. externalLinkClick also does not reflect the duration the student spent on the external site or their intention (e.g. accidental click vs. actual interest), hence not being an accurate reflection of student behavioral patterns. 


### 3.6. tabFocused

3.6.1. **Trigger:** User clicks on the tab. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| isInitial | Boolean, checks if this is the initial visibility state upon page load |
| page | Link URL |
| totalTimeOpen | Time elapsed since the tab was first opened |
| timeHidden | Time elapsed since the tab was unfocused |

3.6.2. **What it can be used for**

*a. Shows what pages students are engaging with*  

The tabFocused event fires when students return to a course site tab after switching away. This provides a better estimate for when students are focusing on a certain tab, which allows tracking of how long a study session actually lasted for as well as resumed study sessions, unlike $pageview. As such, this can be paired with tabUnfocused to measure attention patterns during a session, and how long students engage with any given pages before switching. 

*b. Shows how often students multitask* 

The timeHidden property measures the duration which the tab was unfocused before being focused, which can be used to compute attention patterns. Additionally, the number of tabFocused/unfocused and which tabs it occurred on during a session can show which pages students switch away from the most, and if having multiple tabs open during a study session is common behavior. 

3.6.3. **Limitations**

*a. Does not show what happens after students leave the site* 

tabFocused does not show what caused the tab to be hidden; there are multiple reasons for a tabFocused event, including switching to other tabs, other windows or minimizing the screen. 

*b. Unable to track entire study sessions*

As Posthog is set up with \`persistence: memory\`, each session lasts for a single page. As each new tab and page reload starts a new session, a single study period may span many sessions, hence having multiple tabs open on different pages of the website will lead to multiple unique sessions. Students’ study periods can still be constructed by grouping by distinct\_id and timestamp within a certain window, but session-based analytics (e.g. session duration, funnels) will overestimate session starts and underestimate engagement throughout a study period.


### 3.7. tabUnfocused

3.7.1. **Trigger:** User clicks away from the tab (minimizes window/switches tab/switches window). 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| isInitial | Boolean, checks if this is the initial visibility state upon page load |
| page | Link URL |
| totalTimeOpen | Time elapsed since the tab was first opened |
| timeFocused | Duration that the tab was focused for  |

3.7.2. **What it can be used for**

*a. Shows how long a student engaged with a page*  

The timeFocused property allows tracking of how long the student focused on the tab before unfocusing it, which can show how long the tab was active for. However, it is unable to confirm if the student is actively looking at the tab.  

3.7.3. **Limitations**

*a. No $pageview event fires if the unfocused tab is never focused*

If a new tab is opened without the student ever clicking into the tab, a tabUnfocused will fire but no $pageview event will be triggered. If the student closes the tab without focusing on it, $pageleave will fire, but the session will not include any $pageview event. This should not be an issue if calculating session duration using $pageview and $pageleave, as it will be rightfully dropped. However, if using session counts, these sessions will be overcounted as real sessions even though the student never viewed the page. 

This could be mitigated by checking the isInitial property – in this case, filtering out sessions with a single tabUnfocused where isInitial \== true.   

*b. May overcount due to multi-tab behaviour*

If multiple tabs are unfocused (e.g. student switches to a tab without the website open), all tabs will trigger a tabUnfocused event. Each tabUnfocused tracks its own timeFocused independently – as such, metrics such as total time hidden or number of times a tab was unfocused should not be calculated by summing across tabUnfocused/tabFocused events, as this value will be overestimated. 

A solution could be computing students’ time away from the site, by reconstructing a chronological order of tabFocused/tabUnfocused events across all of the student's tabs, then checking when there were no tabs focused, and for how long this occurred. 



## **4\. Default Events** 

### 4.1. $autocapture 

4.1.1. **Trigger:** Automatically fires on every click event on the page, including properties that record what was clicked (element text). Autocapture is enabled during posthog.init by default, in DataAnalyticsComponent.astro. 

4.1.2. **What it can be used for:** 

*a. Analysis involving locating where on a page students are choosing to navigate from* 

Autocapture logs the link that was clicked, as well as the element that was clicked. This enables differentiating between the different elements students are clicking to access a page, For each page, there are multiple buttons that can lead to each page; $autocapture records both the page link that was clicked to (through elements\_chain\_href), and the element that was clicked (through elements\_chain). 

For example, the path [https://ntw-2029.vercel.app/course-ntw2029/assignments/exercises/](https://ntw-2029.vercel.app/course-ntw2029/assignments/exercises/e05-p1-conf-notes/)  
[e05-p1-conf-notes/](https://ntw-2029.vercel.app/course-ntw2029/assignments/exercises/e05-p1-conf-notes/) is anchored within the sidebar navigation as well as the ‘Previous’ and ‘Next’ buttons in the footers, but will look similar in the events table if grouped by path. This can be ignored if analysis is not concerned with where on a page students are choosing to navigate from; otherwise, the elements\_chain field provides a workaround as it captures the exact element that is clicked. 

*b. Differentiating between the type of clicks* 

Autocapture fires for every click within the website’s content – as such, all clicks will be grouped under $autocapture. However, elements\_chain\_href provides a way to distinguish between clicks: for example, navigating to another page vs. jumping to a section anchor will both be recorded in an $autocapture event \+ internalLinkClick event. The elements\_chain\_href field helps to tell both $autocapture events apart: the navigation to another page will appear as the page URL, while the section anchor will appear as the anchor text.  

By parsing elements\_chain\_href, it is possible to tell apart clicks that seem similar, to show how students are engaging with different elements within the course website.  

4.1.3. **Limitations:** 

*a. Capturing browser-specific interactions*

Autocapture only fires for clicks within the website’s content, and does not extend to the browser’s interactions, such as go back/go forward buttons, bookmarks, or address bar links. These are common ways that students access pages, with each way being driven by different behavioral patterns; hence, for analysis on how students navigate through clicks, autocapture alone will be unable to provide a complete picture.  

| Click navigation action | Events recorded |
| :---- | :---- |
| Clicking an internal link to go from Page A to Page B  | $autocapture internalLinkClick $pageleave for Page A $pageview for Page B |
| Clicking browser’s back button to go from Page A to Page B | $pageleave for Page A $pageview for Page B |
| Accessing Page B via a direct link | $pageview for Page B |

### 4.2. $identify 

4.2.1. **Trigger:** When posthog.identify is called in DataAnalyticsComponent.astro. On every page load, this fires – the call passes the user's identifier, name and timestamp of the call to Posthog. If the user is not logged in, posthog.identify throws an error which is caught and $identify does not fire, with subsequent events remaining anonymous. Otherwise, the user’s ID is logged for every event they trigger from then on. 

4.2.2. **What it can be used for**

*a. Per user, per page analysis*

Each $identify event runs alongside a $pageview event after a $pageleave event, as the new page is loaded. For each $identify, the $session\_id field is different, marking the end of the session for the previous page and the start of a new session for the next page. However, the distinct\_id and person\_id fields are constant for each user regardless of $session\_id. This allows it to show the number of pages viewed by a student across a certain time period, as well as duration between $identify events/time spent on each page. 

4.2.3. **Limitations**

*a. Limited insight into behavioral analysis* 

The $identify event is more reflective of the website’s background administrative processes than a student’s actions; as such, it cannot provide much insight into student behavioral patterns. While it enables analysis by attaching unique user ids to events, the $identify event itself is less useful to analyze. 

*b. Lack of unique use cases* 

Most of the uses for $identify can also be fulfilled by $pageview, as both fire together upon page load (e.g. counting $identify events is functionally the same as counting $pageview events). $identify does not have properties or fields that $pageview lacks. As such, it heavily overlaps with $pageview. 

### 4.3. $pageleave 

**Trigger:** Page unloads. This can be caused by actions such as the user closing the current tab, or navigating to a new tab. 

4.3.2. **What it can be used for**

*a. Signalling how the session ended*

The absence or presence of a $pageleave after a $pageview that is not followed by any other $pageview events suggests how the session ended. If the $pageleave is present, the session ended cleanly (student closed the tab). Otherwise, if a $pageview exists in a session with no corresponding $pageleave, it indicates that either: 1\. the page is still open (active tab), 2\. the session timed out before the page unloaded (abandoned tab), 3\. the page closure was too fast for the event to send (browser crash, force-quit, very rapid tab close). This could potentially provide insight into student behavioral patterns when studying. 

*b. Enables easy computation of session duration*

Each $pageleave event has the $prev\_pageview\_duration property, which shows the duration between the $pageview and $pageleave for the page. This provides an easy way to get time on page for sessions with clean exits (student closes tab). 

4.3.3. **Limitations**

*a. Requires to distinguish between reasons for $pageleave firing*  

The $pageleave fires whenever the page unloads, which includes multiple reasons such as: tab closing, browser closing, navigating to another page (both internal & external), and reloading the page. However, it does not have any field or property that specifies how the page unloaded. As such, if there is a need to understand why the page unloaded, future events need to be analysed as well.   
(e.g. if the next event is a $pageview → student navigated to another tab; if there are no other events → student closed the tab/browser)

### 4.4. $pageview

4.4.1. **Trigger:** Page loads. This can happen during actions like reloading and loading the page. 

4.4.2. **What it can be used for**  

*a. Computing basic engagement metrics*

The $pageview event can be used to count how many times each page was loaded. For instance, grouping $pageview events by $current\_url shows which pages get the most traffic. 

Another metric is how long students spent on each page. By pairing with the next event from the same student: $pageleave (closing the tab / navigating away) or the next $pageview (opening a new tab), duration is calculated as the time difference between these paired events.

Some insights currently display these (see 5\. Current usage).  

4.4.3. **Limitations** 

*a. Having multiple tabs open* 

Students often open multiple pages of the website on different tabs. Due to each session being linked to one page, multiple sessions will be created when this occurs, each with their unique ID. As such, this affects several potential insights involving **user-level behavior**. For instance, the time spent on all pages by a student may end up overrepresented if computed using the duration between $pageview and $pageleave, as durations are aggregated despite the student having been focusing only on one tab at a time. 

*b. Handling common student behaviors – forgetting about a tab*

Students often leave a tab open without closing it. When this happens, the session automatically ends after a certain level of inactivity and the $pageleave event never fires.  Returning to these tabs results in a new session being created. If the next event triggered is not a reload or navigation to another page, this new session will not begin with a $pageview event. 

This leads to several issues: 

1. **Time on page calculations may become inaccurate**: Several insights use $pageview and $pageleave events to compute time spent on pages (see 5\. Current usage). This will lead to:  
* In a session, $pageview events without corresponding $pageleave events will be dropped  
* Calculations that use $pageview events as a proxy for the beginning of a study session will be misleading, as resumed study sessions will not reflect any $pageview events   
2. **Arrival data may end up not being represented**: If the new session begins without a $pageview event despite functionally representing the student beginning a study session on that page, any insights that use $pageview as a representation for a new arrival become inaccurate. 

### 4.5. $web\_vitals  
[https://posthog.com/docs/web-analytics/web-vitals](https://posthog.com/docs/web-analytics/web-vitals) 

4.5.1. **Trigger:** After a web vitals measurement for a page becomes available, Posthog waits 5 seconds for any other measurements. If any other measurements are finalized within this window, they are batched and sent in a single $web\_vitals event. 

$web\_vitals events can include a set of metrics that measure site performance, such as the time from when the page starts loading to when any part of the page's content is rendered on the screen. They can be accessed using the properties: $web\_vitals\_CLS\_value, $web\_vitals\_FCP\_value, $web\_vitals\_LCP\_value, web\_vitals\_INP\_value.  

4.5.2. **What it can be used for**

*a. Further analysis into engagement*

The measurements in $web\_vitals provide information on page performance, such as how quickly/slowly the page content is loading. This could provide additional explanations for engagement levels – for instance, low engagement could be partially explained by poor $web\_vitals values. In such cases, the loading experience could be more at fault than page content. 

4.5.3. **Limitations**

*a. Limited insight into behavioral analysis* 

Similar to $identify, $web\_vitals is more reflective of the website’s structure and performance than a student’s actions, and hence cannot provide insights into student behavioral patterns.  

### 4.6. $rageclick

4.6.1. **Trigger:** User clicks repeatedly on an element (\>2 times). The $elements\_chain property shows the element that was clicked, but not the exact x/y-coordinates. As such, if the user clicks on empty space, $rageclick will not trigger. 

4.6.2. **What it can be used for**

*a. Identifying issues in UI*

The trigger for a $rageclick event (\>2 clicks within a short amount of time) is indicative of frustration as users are unlikely to click multiple times in quick succession, hence allowing the $rageclick event to accurately capture which elements may be confusing, unresponsive or misleading (an element that looks like a link but is static).  

In the Posthog project, the dashboard ‘Where are students experiencing frustration’ uses rageclick events to show the number of times students have rageclicked on different pages (however, it does not include an element-level breakdown).  

4.6.3. **Limitations**

*a. Only captures clicks on elements*

$rageclick only captures clicks on links . If a student clicks repeatedly on an empty space in the website, this is not captured, despite also being indicative of frustration. Additionally, it does not capture other actions indicative of frustration, such as closing or switching tabs. As such, its main use would be identifying broken UI elements.  

### 4.7. $set

4.7.1. **Trigger**: Automatically fires when a person property is set or updated on the user's profile. There are only 27 instances of this event, with all of them being in the persons table. 

4.7.2. **What it can be used for**  
\-

4.7.3. **Limitations**

*a. Incomplete (compared to persons table)*

While there are 27 distinct person IDs across $set events, there are 49 person IDs in the persons table, suggesting that $set is missing certain people. This limits its usefulness as a cross-check with the persons table. 

### 4.8. $delete\_person\_property

4.8.1. **Trigger:** Automatically fires when a person property is explicitly deleted from a user's profile. There are currently no instances of this event. 

4.8.2. **What it can be used for**  
\-

4.8.3. **Limitations**  
\- 

## **5\. Current usage**

Out of 28 insights, the following use certain events: 

| Insight | Purpose | Events used |
| :---- | :---- | :---- |
| Website Unique Users (Breakdown) | Track how often students are using the site. Monthly count of unique students per day, filtered to cohort 2510 from Aug 2025 onward | $pageview |
| Most visited page per user | For each user, find how long they spent on each page for every session, ordered by longest to shortest time | $pageview, $pageleave |
| Compare Resources vs Non-Resources | Compares total time, pageview count, and average time between /resources pages and all other pages | $pageview, $pageleave |
| all pages | Ranks all pages by how much time was spent on them, excluding time spent by test/development users  | $pageview, $pageleave |
| Average time per student on each resource page | For /resource pages, break down by time spent on them by students | $pageview, $pageleave |
| Page View (by page load)  | Ranks pages by raw pageview count (without filtering for unique users) | $pageview |
| Read(Scroll) page percentage | Counts $read events for each page (without filtering for unique users) | $read |
| time spent on page for each user | For each page, shows total time, average time per view/user, unique users, and how many users spent over 1 minute (without filtering out test/development users) | $pageview, $pageleave |
| Where are students experiencing frustration? | For each page, shows the number of $rageclick events triggered, filtering for unique users.  | $rageclick |
| Pages with longest time spent | Ranks pages by total session duration | $session\_duration |

All limitations associated with the relevant events apply. 


#### **List of all default properties** 

String   
$current\_url, $pathname, $host, $referrer, $referring\_domain, $browser, $browser\_language, $browser\_language\_prefix, $os, $os\_version, $device, $device\_type, $lib, $lib\_version, $user\_id, $raw\_user\_agent, $config\_defaults, $sdk\_debug\_extensions\_init\_method, $geoip\_country\_code, $geoip\_country\_name, $geoip\_continent\_code, $geoip\_continent\_name, $geoip\_city\_name, $geoip\_postal\_code, $geoip\_time\_zone, $geoip\_subdivision\_1\_code, $geoip\_subdivision\_1\_name, token 

Numeric  
$viewport\_width, $viewport\_height, $screen\_width, $screen\_height, $browser\_version, $geoip\_latitude, $geoip\_longitude, $geoip\_accuracy\_radius, $sdk\_debug\_extensions\_init\_time\_ms 

Boolean   
$is\_identified, $web\_vitals\_enabled\_server\_side, $exception\_capture\_enabled\_server\_side 

DateTime   
$initialization\_time, $feature\_flag\_evaluated\_at  
