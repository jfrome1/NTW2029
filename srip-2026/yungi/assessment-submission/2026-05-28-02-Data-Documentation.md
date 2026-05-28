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
