---
created: 2026-05-29
lastUpdated: 2026-05-29
lastEvaluated: 
writingClarityEvaluated: 
---


### Group 1 – Device and browser context

These appear on **every single event**, no matter what type. They describe the environment the student was using.

| Property | What it tells you |
| :--- | :--- |
| `$browser` | Browser name – Chrome, Safari, Firefox, etc. |
| `$browser_version` | Version number of that browser |
| `$browser_language` | Language setting of the browser – e.g. en-US |
| `$os` | Operating system – Windows, macOS, iOS, Android |
| `$os_version` | Version of that OS |
| `$device_type` | Desktop, mobile, or tablet |
| `$viewport_width` / `$viewport_height` | The size of the browser window in pixels |
| `$screen_width` / `$screen_height` | The size of the student's full screen in pixels |
| `$raw_user_agent` | The raw technical string the browser sends identifying itself |

> **Practical use:** if students report something not working, you can filter by `$browser` or `$device_type` to check if the problem is device-specific.



---

### Group 2 – Page context

These describe **where the student was** when the event fired.

| Property | What it tells you |
| :--- | :--- |
| `$current_url` | The full URL – e.g. `https://yoursite.com/week3/loops?ref=email` |
| `$pathname` | Just the path portion – e.g. `/week3/loops` |
| `$host` | Just the domain – e.g. `yoursite.com` |
| `$referrer` | The full URL the student came from |
| `$referring_domain` | Just the domain they came from – e.g. `google.com` |

> **Practical use:** `$pathname` is the one you'll use most often in student analysis – it's the clean page identifier without query strings cluttering it.

---




### Group 3 – Location (GeoIP)

PostHog estimates location from the student's IP address. These appear on every event.

| Property | What it tells you |
| :--- | :--- |
| `$geoip_country_name` / `$geoip_country_code` | Country – e.g. Singapore, SG |
| `$geoip_city_name` | City – e.g. Singapore |
| `$geoip_subdivision_1_name` | State or region |
| `$geoip_time_zone` | Their timezone – e.g. Asia/Singapore |
| `$geoip_latitude` / `$geoip_longitude` | Approximate coordinates |
| `$geoip_accuracy_radius` | How accurate the estimate is, in kilometres |

> **Practical use:** These are approximations based on IP – not GPS. Don't treat city-level data as precise.





---

### Group 4 – $pageleave-specific properties

These **only exist on $pageleave** events. They describe the page the student just left.

#### Timing

| Property | What it tells you |
| :--- | :--- |
| `$prev_pageview_pathname` | Which page they left |
| `$prev_pageview_duration` | How many seconds they spent on it |

#### Scroll depth – position-based

| Property | What it tells you |
| :--- | :--- |
| `$prev_pageview_max_scroll` | Furthest scroll position reached, in pixels |
| `$prev_pageview_max_scroll_percentage` | Same, as a % of page height |
| `$prev_pageview_last_scroll` | Scroll position at the exact moment of leaving, in pixels |
| `$prev_pageview_last_scroll_percentage` | Same, as a % |

#### Scroll depth – content-based

| Property | What it tells you |
| :--- | :--- |
| `$prev_pageview_max_content` | Furthest content that entered the viewport, in pixels |
| `$prev_pageview_max_content_percentage` | Same, as a % |
| `$prev_pageview_last_content` | Content position at the moment of leaving, in pixels |
| `$prev_pageview_last_content_percentage` | Same, as a % |

> **Max vs last:** max is the *deepest point ever reached*. Last is *where they were when they left*. A student could scroll to the bottom (max = 100%) then scroll back up before clicking away (last = 20%).





---

### Group 5 – Session-level properties

These describe the **entire session** as a whole, not individual events. You access them through the session object.

| Property | What it tells you |
| :--- | :--- |
| `$session_duration` | Total length of the session in seconds |
| `$pageview_count` | How many pages were viewed in the session |
| `$autocapture_count` | How many clicks/interactions were autocaptured |
| `$start_timestamp` | When the session began |
| `$end_timestamp` | When the last event in the session was recorded |
| `$entry_current_url` / `$entry_pathname` | The first page they landed on |
| `$end_current_url` / `$end_pathname` | The last page they were on |
| `$channel_type` | How they arrived – organic search, direct, referral, etc. |
| `$is_bounce` | `true` if they viewed only one page and left |

---

### Group 6 – Person-level $initial_ properties

These are stored on the **person profile**, not on events. They record what was true the **very first time** PostHog ever saw that student, and never change after that.

Every device/page/location property has an `$initial_` counterpart:

| Property | What it tells you |
| :--- | :--- |
| `$initial_current_url` | The first URL they ever visited on your site |
| `$initial_referring_domain` | Where they came from on their very first visit |
| `$initial_browser` | The browser they used when first seen |
| `$initial_os` | The OS they used when first seen |
| `$initial_utm_source` | UTM campaign source from their first visit |
| `$initial_utm_medium` | UTM medium from their first visit |
| `$initial_utm_campaign` | UTM campaign name from their first visit |

> For your course, `$initial_referring_domain` tells you how a student first found the site. `$initial_utm_*` properties are useful if you ever send links via email campaigns – they tell you which campaign brought each student in.

---

### Group 7 – Identity and library

These are more technical but worth knowing.

| Property | What it tells you |
| :--- | :--- |
| `$is_identified` | Whether PostHog knows who this student is (linked to a real identity via `identify()`) |
| `$user_id` | The ID your code assigned to the student, if identified |
| `$lib` / `$lib_version` | Which PostHog library sent the event and its version |
| `$is_bounce` | (Also a session property) Single-page visit with no meaningful interaction |





