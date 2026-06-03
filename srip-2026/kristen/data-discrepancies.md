# NTW2029 data discrepancies and watch-outs

A consolidated list of the data discrepancies and watch-outs found so far, gathered from the daily reports and meetings. This is a living list: add to it as new issues surface, and note the status or workaround for each.

| Issue | Detail | Status / workaround | Open question |
|-------|--------|---------------------|---------------|
| Cross-cohort pageviews | AY24-25 pages appear in the AY25-26 pageview counts because no cohort was set up. | Filter by date for now. | |
| Person ID reuse across semesters | The same person IDs were reused for different students across semesters. | Filtered out. | |
| Mid-semester page and anchor renames | Pages were renamed and anchors standardized mid-semester, so some page-and-anchor combinations are non-unique (nutshell anchor text vs. the actual section names). A link alone does not always identify which nutshell was viewed, and some nutshells show as opened by the 2520 cohort that should not have been accessible to them (the same nutshell appears under different anchor names, e.g. "peer review groups" vs. "week 12 peer review groups"). | Known issue to revisit; renamed anchors may need grouping once the data is sorted out. | |
| Cohort membership anomaly (Bansal Naman, Ashley Goh Yu Ting) | Both are included in the 2520 cohort but were created in mid-2025, whereas the other 2520 students were created around early 2026. They triggered events in Semester 1 (2510) on pages that do not currently exist for 2520, and they also trigger events in Semester 2 (2520). | | Is there context for why these two are in 2520 with mid-2025 creation and cross-semester events? |
| Possible dropped students | A few 2520 students' last recorded event is a month or more before the semester ended. | | Did any 2520 students drop NTW2029 before the semester ended, or is the data wrong? |

## Claude analysis: suggestions for dealing with these discrepancies

_This section is AI-generated analysis (Claude), proposing how to handle the discrepancies above. It is a suggestion for discussion, not settled direction. These are analysis-phase fixes, for when the historical data is queried. They are separate from building the trusted event reference through controlled scenario recreation, which comes first._

Most of these issues come down to two underlying questions.

### Who counts as a 2520 student? (issues 1, 2, 4, 5)

Anchor the analysis population on the enrolled roster rather than on date ranges. Build one authoritative mapping of the 23 enrolled 2520 students to their PostHog person IDs, then scope every analysis to exactly those IDs. This addresses the cluster at once:

- Cross-cohort pageviews (issue 1): only roster IDs are counted, so AY24-25 and 2510 activity drops out.
- Person ID reuse (issue 2): each ID is attributed to the correct student, or excluded where it is ambiguous.
- Cohort membership anomaly (issue 4): once the matched 2510 name behind each reused ID is known, decide whether Bansal Naman and Ashley Goh are genuinely 2520, and drop their 2510 activity.
- Possible dropped students (issue 5): a roster student with no recent activity becomes a finding (a likely drop) rather than noise, and you decide per student whether to include or exclude them.

Prerequisite: the matched-names investigation, since a clean ID mapping depends on knowing which reused IDs belong to whom. One thing to verify rather than assume: whether this is best implemented as a saved PostHog cohort or a query-time list of IDs.

### Which page is which? (issue 3)

Build a rename map from each old path or anchor to a single canonical identifier, and normalize identifiers before counting, so a page or nutshell is not split across its renamed variants. Two sources can feed the map: the NTW2029 git history (file moves and content diffs across the semester) and the instructor's record of what changed. For nutshells, group the variant anchor names under one canonical nutshell.

### Rough ownership

- Instructor: provide the enrolled roster and confirm the page-rename history.
- Kristen: build the roster-anchored ID mapping and apply the page normalization.
- Claude: can draft a first-pass rename map from the repo git history.
