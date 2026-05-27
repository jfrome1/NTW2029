# Recommended Methodology Directions

### Per-student page engagement matrix

- use $pageview and read events, filtered to identified students, to build a (student x page) matrix showing : pages visited, read-heartbeat count per page, and internalLinkClick chains

- According to PostHog AI, this is an actionable analysis for informing site revisions, so I guess I was on the right track with Markov Chains.

- Key Challenge : identity fragmentation means you should work with sessions where $is_identified = True or where person.properties.name is set.


### Content Pathway / Sequence Analysis

- using internalLinkClick with "link" $pathname, reconstruct common navigation sequences per session. This reveals which pages lead students to which other pages -> useful for spotting dead ends or unexpected detours

- Key Challenge : sequences break across devices/tabs since sessions are memory-persisted


### Attention Quality Scoring (this would be after tabFocused is measured more)

- Combine "read heartbeat" counts with tabFocused.tabFocused to produce a weighted attention score per student per page. High read count + high timeFocused = deep engagement. So, high $pageview count with low read count = skimming or bouncing.

- Key Challenge : tabFocused data only started May 2026, so I guess read counts can be used for now. 
