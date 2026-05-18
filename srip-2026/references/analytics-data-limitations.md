---
created: 2026-05-18
lastUpdated: 2026-05-18
---

Claude description: NTW2029 PostHog analytics data limitations for AY 2025-26 (semesters 2510 and 2520) — what the data can and can't reliably answer, the failure modes (session inactivity timeout, background-tab time, tab-never-closed gap), and the proposed visibilitychange fallback. Work-in-progress; will be updated as open design questions settle.

# Analytics Data Limitations

This document explains the failure modes in the NTW2029 PostHog analytics data collected during AY 2025-26 (semesters 2510 and 2520) and what they mean for analyses that draw on this data. It's a work-in-progress and will be updated as we settle open questions with the developer.

## How time-on-page is currently computed

PostHog autocapture records two events per visit:

- `$pageview` fires when a page loads
- `$pageleave` fires when the user navigates away or closes the tab

The existing analytics dashboard (https://us.posthog.com/project/101665/dashboard/266605) computes time-on-page by matching each `$pageview` to its `$pageleave` within the same PostHog session and taking the time delta.

PostHog automatically splits sessions on 30-minute inactivity. A session inactive for more than 30 minutes ends, so a `$pageview` with no matching `$pageleave` in-session is excluded from the calculation rather than miscounted as a multi-hour visit.

## What this means for the data

Reliable measurements (no known accuracy issue):

- Pageview counts per page
- Per-student access frequency (how often each student accessed the site)
- Timing patterns (when in the day/week students access)
- Navigation paths (sequences of pages visited)
- Page popularity (which pages get the most visits)
- Drop-off and entry/exit patterns
- Correlation of access frequency with outcomes

Time-on-page is partially reliable, with two residual failure modes:

1. Background-tab time within a session. A student loads a page, switches to another tab for 20 minutes, then comes back and closes the tab. The 20-minute period gets counted as time on the original page. The `visibilitychange` browser event (which would let us detect tab-switching) is not currently captured. This inflates time-on-page when students leave the site tab open while doing other work.

2. Tab-opened-never-closed. A student loads a page, then leaves the tab open and walks away, or the computer sleeps and the browser session eventually expires without firing `$pageleave`. No `$pageleave` event fires, so this visit has no matched pair and is excluded from time-on-page calculations entirely. This is a coverage gap, not a measurement bias — those visits don't appear in time-on-page data at all.

Unreliable measurements (use with caution or avoid):

- True time-on-page per visit (failure modes above)
- Total time-on-site per student (compounds the above)
- Engagement-depth metrics that depend on dwell time
- Distinguishing studied-page vs. glanced-page

## Proposed fix: visibilitychange fallback

Developer proposal (2026-05-18, under design):

Add a custom event triggered by the browser's `visibilitychange` API. Use it only as a fallback — when a session has a `$pageview` but no matching `$pageleave`, treat the most recent visibility-hidden event as the session-ender. Sessions with proper `$pageleave` events continue to use the existing calculation unchanged.

Why this design:

- Directly targets the tab-opened-never-closed coverage gap
- Doesn't change time-on-page calculations for well-behaved sessions
- Sidesteps false positives from brief tab-switching: if the user comes back and properly closes the tab, the `$pageleave` overrides the visibility events
- Rescues lost sessions for both coverage and (partial) time-on-page accuracy

Open design questions:

- Which visibility event counts as the session-ender — first hidden? Most recent hidden before session timeout?
- Whether to debounce (so a user briefly hiding the tab five times doesn't generate noise)
- Whether "session" here means PostHog session (30-min inactivity split) or browser tab lifetime
- Cross-browser behavior, particularly older Safari and mobile browsers

The `visibilitychange` API has good (but not universal) modern browser support — see https://caniuse.com/?search=visibilitychange.

## Implications for analyses during the internship

The internship analyses draw on the 2510 and 2520 data — what was collected during the academic year that just finished. New data collected after a visibilitychange fix lands (earliest 2610, the upcoming AY 2026-27) won't be available in time to inform this internship's analyses.

Analyses drawing on the 2510 and 2520 data should:

- Treat pageview-based measurements (frequency, navigation, timing, popularity) as reliable
- Treat time-on-page measurements as approximate, with the understanding that backgrounded tabs inflate some readings and tab-never-closed visits are absent from others
- Avoid conclusions that depend on engagement-depth or precise per-page dwell time

For research-question framing: questions like "which pages got the most attention," "how does pageview frequency correlate with outcomes," "what are the common navigation paths," "do students who return more often perform better" remain meaningful and answerable. Questions framed around precise time-on-page need either calibration to these failure modes or alternative phrasing.

## Related references

For per-metric breakdown of PostHog features as they're configured on this site, see Kristen's working docs:

- `../kristen/assignments/low-level-overview-general.md` — PostHog data model (events, properties, sessions, actions, persons, cohorts, groups), per-metric limitations for the metrics shown on the web analytics dashboard (bounce rate, entry/end paths, movement maps, outbound clicks, pageviews, session duration, traffic breakdown, user paths, funnels), and an inventory of the insights, properties, dashboards, and views already built in the NTW2029 PostHog project. Empirical verification of the tab-opened-never-closed failure mode at Section 2.4.
- `../kristen/assignments/event-level-overview.md` — per-event field and property documentation for the custom events (`read`, `openNutshell`, `closeNutshell`, `inactiveNutshell`, `internalLinkClick`, `externalLinkClick`) and default events (`$autocapture` and others).
