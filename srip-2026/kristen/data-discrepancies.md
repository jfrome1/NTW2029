# NTW2029 data discrepancies and watch-outs

A consolidated list of the data discrepancies and watch-outs found so far, gathered from the daily reports and meetings. This is a living list: add to it as new issues surface, and note the status or workaround for each.

| Issue | Detail | Status / workaround | Open question |
|-------|--------|---------------------|---------------|
| Cross-cohort pageviews | AY24-25 pages appear in the AY25-26 pageview counts because no cohort was set up. | Filter by date for now. | |
| Person ID reuse across semesters | The same person IDs were reused for different students across semesters. | Filtered out. | |
| Mid-semester page and anchor renames | Pages were renamed and anchors standardized mid-semester, so some page-and-anchor combinations are non-unique (nutshell anchor text vs. the actual section names). A link alone does not always identify which nutshell was viewed, and some nutshells show as opened by the 2520 cohort that should not have been accessible to them (the same nutshell appears under different anchor names, e.g. "peer review groups" vs. "week 12 peer review groups"). | Known issue to revisit; renamed anchors may need grouping once the data is sorted out. | |
| Cohort membership anomaly (Bansal Naman, Ashley Goh Yu Ting) | Both are included in the 2520 cohort but were created in mid-2025, whereas the other 2520 students were created around early 2026. They triggered events in Semester 1 (2510) on pages that do not currently exist for 2520, and they also trigger events in Semester 2 (2520). | | Is there context for why these two are in 2520 with mid-2025 creation and cross-semester events? |
| Possible dropped students | A few 2520 students' last recorded event is a month or more before the semester ended. | | Did any 2520 students drop NTW2029 before the semester ended, or is the data wrong? |
