**Goal of Document:** For every event captured, document what it includes: fields, what elements it captures, what behavioral questions it can answer.

### **1\. Events**

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

### **2\. Properties** 

Default events have default properties set by Posthog. Custom events have both default properties and custom properties, which are defined by the user using posthog.capture and sent alongside the default properties. In the properties JSON, custom properties appear as the name specified in posthog.captured, while default properties have \`$\` before their name. 

Default properties largely include data that is additional and less useful for analysis, such as $browser\_language and $host. However, some default properties that could significantly value add include:  

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

#### **2.1. Custom Events** 

#### 2.1.1. read

**Trigger:** User scrolls past 50% of the page. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| page | Title of the page the event was triggered on  |

What it can be used for: Page engagement related analysis

Limitations 

#### 2.1.2. openNutshell 

**Trigger:** User opens a nutshell. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| page | Title of the page the event was triggered on  |
| text | Text shown on the nutshell link |

What it can be used for

Limitations

#### 2.1.3. inactiveNutshell

**Trigger:** User scrolls away until open nutshell is out of view.

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| duration | Duration between nutshell being opened and nutshell going out of view |
| text | Visible anchor text shown for the nutshell  |

What it can be used for

Limitations

#### 2.1.4. internalLinkClick

**Trigger:** User clicks on any internal link. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| link | Link URL |
| text | Visible anchor text shown for the link |

What it can be used for

Limitations

#### 2.1.5. externalLinkClick

**Trigger:** User clicks on an external link. 

Custom properties: 

| Name | Purpose |
| :---- | :---- |
| link | Link URL |
| text | Visible anchor text shown for the link |

What it can be used for

Limitations

#### **2.2. Default Events** 

#### 2.2.1. $autocapture 

**Trigger:** Automatically fires on every click event on the page. Autocapture is enabled during posthog.init by default, in DataAnalyticsComponent.astro. 

What it can be used for: 

Limitations 

#### 2.2.2. $identify 

**Trigger:** When posthog.identify is called in DataAnalyticsComponent.astro. On every page load, this fires – the call passes the user's identifier, name and timestamp of the call to Posthog. If the user is not logged in, posthog.identify throws an error which is caught and $identify does not fire, with subsequent events remaining anonymous. Otherwise, the user’s ID is logged for every event they trigger from then on. 

What it can be used for

Limitations

#### 2.2.3. $pageleave 

**Trigger:** Page unloads. This can be caused by actions such as the user closing the current tab, or navigating to a new tab. 

What it can be used for

Limitations

#### 2.2.4. $pageview

**Trigger:** Page loads. This can happen during actions like reloading and loading the page. 

What it can be used for

Limitations

#### 2.2.5. $web\_vitals  
[https://posthog.com/docs/web-analytics/web-vitals](https://posthog.com/docs/web-analytics/web-vitals) 

**Trigger:** Automatically fires 5 seconds after a web vitals measurement for a page becomes available. If any other measurements are finalized within the 5 second window, they will be batched and sent in a single $web\_vitals event. 

$web\_vitals events can include a set of metrics that measure site performance, such as the time from when the page starts loading to when any part of the page's content is rendered on the screen. They can be accessed using the properties: $web\_vitals\_CLS\_value, $web\_vitals\_FCP\_value, $web\_vitals\_LCP\_value.  

What it can be used for

Limitations

#### 2.2.6. $rageclick

**Trigger:** User clicks repeatedly on an element. The $elements\_chain property shows the element that was clicked, but 

What it can be used for

Limitations

#### 2.2.7. $set

**Trigger:** Automatically fires when a person property is set or updated on the user's profile.

What it can be used for

Limitations

#### 2.2.8. $delete\_person\_property

**Trigger:** Automatically fires when a person property is explicitly deleted from a user's profile. There are currently no instances of this event. 

What it can be used for

Limitations


### **2.3. List of all default properties** 

String   
$current\_url, $pathname, $host, $referrer, $referring\_domain, $browser, $browser\_language, $browser\_language\_prefix, $os, $os\_version, $device, $device\_type, $lib, $lib\_version, $user\_id, $raw\_user\_agent, $config\_defaults, $sdk\_debug\_extensions\_init\_method, $geoip\_country\_code, $geoip\_country\_name, $geoip\_continent\_code, $geoip\_continent\_name, $geoip\_city\_name, $geoip\_postal\_code, $geoip\_time\_zone, $geoip\_subdivision\_1\_code, $geoip\_subdivision\_1\_name, token 

Numeric  
$viewport\_width, $viewport\_height, $screen\_width, $screen\_height, $browser\_version, $geoip\_latitude, $geoip\_longitude, $geoip\_accuracy\_radius, $sdk\_debug\_extensions\_init\_time\_ms 

Boolean   
$is\_identified, $web\_vitals\_enabled\_server\_side, $exception\_capture\_enabled\_server\_side 

DateTime   
$initialization\_time, $feature\_flag\_evaluated\_at  
