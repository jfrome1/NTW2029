---
created: 2026-05-18
lastUpdated: 2026-06-29
---

Claude description: NTW2029 PostHog analytics data limitations for AY 2025-26 (semesters 2510 and 2520) — what the data can and can't reliably answer, the failure modes (session inactivity timeout, background-tab time, tab-never-closed gap), and the proposed visibilitychange fallback, plus cross-category time-on-page comparison and schedule-check-frequency caveats. Work-in-progress; will be updated as open design questions settle.

# Analytics Data Limitations

## About this document

This document provides system-level orientation to what the NTW2029 analytics data can and can't reliably answer. It frames the failure modes across metrics so analyses can be anchored to questions the data can actually support.

**Origin:** Synthesized from existing per-metric and per-event documentation plus the 2026-05-18 conversation with the developer about visibility tracking. Drafted with AI assistance under specific reference-document conventions, then reviewed and edited by the instructor.

**Relationship to other docs in this workspace:** This doc is the orientation layer. Granular references live in `kristen/assignments/`:

- `event-level-overview.md` — per-event field and property documentation
- `low-level-overview-general.md` — per-metric breakdown and current PostHog usage

This doc cross-references both for detail. The granular docs cover what each event or metric does and its specific limitations; this doc covers what kinds of analyses the overall data supports.

## What this document covers

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
- Page popularity (which pages get the most visits)
- Correlation of access frequency with outcomes

Time-on-page is partially reliable, with two residual failure modes:

1. Background-tab time within a session. A student loads a page, switches to another tab for 20 minutes, then comes back and closes the tab. The 20-minute period gets counted as time on the original page. The `visibilitychange` browser event (which would let us detect tab-switching) is not currently captured. This inflates time-on-page when students leave the site tab open while doing other work.

2. Tab-opened-never-closed. A student loads a page, then leaves the tab open and walks away, or the computer sleeps and the browser session eventually expires without firing `$pageleave`. No `$pageleave` event fires, so this visit has no matched pair and is excluded from time-on-page calculations entirely. This is a coverage gap, not a measurement bias — those visits don't appear in time-on-page data at all.

Unreliable measurements (use with caution or avoid):

- True time-on-page per visit (failure modes above)
- Total time-on-site per student (compounds the above)
- Engagement-depth metrics that depend on dwell time
- Distinguishing studied-page vs. glanced-page
- Navigational metrics (e.g. sequence of pages visited, drop-off & entry/exit patterns)
    - PostHog is initialized with `persistence: memory`, which ties individual sessions to a single page. However, built-in navigation features (user paths, funnels, entry/exit paths) assume multi-page sessions, so viewing them will require reconstructing navigational paths across pages by timestamp (i.e. grouping $pageview events by distinct_id & ordering by timestamp).

## Comparing time-on-page across page categories

When time-on-page is aggregated by page category (resources vs. assignments vs. schedule), the failure modes don't apply evenly, so the bias direction differs by category. Background-tab and multi-tab use are more common on resources pages (a student keeps a resource open in another tab while writing) and on the schedule page (left open and consulted periodically) than on assignment pages (usually the primary tab the student is actively reading). Because background-tab time inflates time-on-page, resources and schedule pages are inflated more than assignment pages.

The consequence: a ranking of the form "students spent more time on X than on Y" is unreliable when X and Y are different categories, because the inflation is heavier on one side. The ranking can reflect differing bias rather than differing real attention. Safer comparisons that avoid the time-on-page failure modes are pageview counts and read-event counts by category, rather than dwell time. This is also the comparison the visibilitychange fix would change most, since subtracting background-tab time would compress the resources/schedule inflation.

## Schedule-page check frequency

Counting how often a student checks the schedule page is reliable for students who close the schedule tab between checks, since each check is a fresh page-load and fires a $pageview. It is biased low for students who keep the schedule open in a background tab and "check" it by switching back to that tab: tab switches fire no event, so those checks are invisible and the count is undercounted. The same undercount applies to checks reached by the browser back button or a bookmark, which load the page without reliably firing a $pageview.

A diagnostic for spotting the background-tab pattern is the per-student ratio of schedule $pageviews to schedule read events. The read event fires at most once per page-load (when the student scrolls past the page midpoint), so a student who keeps the tab open and switches back to it repeatedly shows a read count of 1 while their actual number of consultations is unknown. The visibilitychange fix (a tabFocused event on the schedule page) would let analyses count tab-returns as additional checks.

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
