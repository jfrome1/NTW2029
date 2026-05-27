# Critical limitations for our data in PostHog

## User Identity Fragmentation (red flag)

- Single student accessing the site from two tabs, two browsers, or two devices is recorded as separate distinct_id values.
- No distinct_id merging is in place. This can be noticed as the $pageview count shows 934 unique person_id, where the actual number of students is significantly lower.
- Any "per-student analysis" must treat user counts as inflated until you implement identity merging or work only with sessions where a student is explicitly identified as $identify.

## Instructor and RA data contamination (red flag)

- your own usage of the site pollutes the dataset. The "all pages" insight already excludes names/emails matching test/admin/demo patterns, but this filter needds to be applied consistently to every analysis we build


## $pageview VS $pageleave gap (~10%) (yellow flag)

- 15,891 pageviews VS 14,265 pageleaves = roughly 1,600 page exits with no $pageleave event (which consists about 10% of the sessions). This happens when students close the tab suddenly or lose connectivity for some reason. Any time-on-page calculation that relies on $pageleave timestamps will be biased downward for those sessions. Use "read" event counts as a more robust engagement proxy

- It looks like the data is not clean as it is biased and some data are wrong.


## closeNutshell is nearly absent (2 events) (yellow flag)

- There are 5,220 openNutshell events but only 2 closeNutshell events, which is really weird.
- So, this means students never closed the nutshells, or the closeNutshell event is not working properly.
- Maybe we can use the inactiveNutshell (3,439 events) as the "end of Nutshell session" signal instead.


## tabFocused/tabUnfocused are very new (yellow flag)

- So, these have only 77 and 59 events respectively, starting from May 2026. I guess this data cannot be used for analysis yet then.

## Quiz engagement is minimal

- openQuiz = 25 events from only 9 students. What would be the problem?
- either the quiz feature is rarely used, or they are presented in small number of pages.


## "read" event is page-level not section-level

- The read heartbeat records page (URL) but not scroll depth or specific section. You know a student was active on a page, but not which part of the content they engaged with. This limits content-level analysis beyond page granularity.













