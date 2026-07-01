---
created: 2026-05-22
lastUpdated: 2026-07-01
---

# Per-student due dates (NTW2029 2510 and 2520)

**Description:** Per-student due dates for conference-driven assignments in NTW2029, both AY 2025-26 cohorts (2510 Fall 2025 "NTW Evolution"; 2520 Spring 2026 "EP and Art"). Two CSV files alongside this README:

- `per-student-due-dates.csv` — wide format, one row per student, one column per assignment, with a leading `cohort` column
- `per-student-due-dates-long.csv` — long format, one row per student-assignment pair, with a `cohort` column

Source: Canvas API (courses 80105 for 2510, 87908 for 2520). Fetched 2026-07-01.

## What the dates mean

Each cell is the effective calendar due date (the day the deadline falls on), in SGT.

For 2520, that date is the **noon-the-next-day extended deadline**: the original assignment deadline is 23:59 SGT the night before, students automatically get a 12-hour extension to noon the next day, and submissions in that window aren't late. So a 2520 cell of `2026-02-20` means due noon SGT on Feb 20; subtract one day for the original 23:59 deadline.

For 2510, the same automatic-extension policy applied, but the stored Canvas deadline times are inconsistent (some assignments store noon, others 23:59), so treat a 2510 cell as the effective calendar date the deadline falls on rather than assuming a fixed time. Consult Canvas for the exact stored time on a specific 2510 assignment.

A blank cell means the student had no per-student override for that assignment, so the assignment's single base due date applied to them. Blank does not mean the data is missing.

## Why these eight assignments

These eight have per-student due dates because they're tied to or cascade from each student's individual conference time. All other assignments use a single base due date that applies to every student. Both cohorts run the same eight; 2520 labels them by code, 2510 by description (mapped to the shared codes below).

| Code | 2510 title | 2520 title | Rule |
|---|---|---|---|
| E05 | Exercise 5 - Paper 1 conference summary | E05 - Paper 1 Conference report | Due day of P1 draft conference (Week 6) |
| E06 | Exercise 6 - Paper 1 writing reflection | E06 - Paper 1 Writing reflection | One day after P03 |
| E10 | Exercise 10 - Paper 2 explain positions conference summary | E10 - Paper 2 Conference report (positions) | Due day of P2 explain-positions conference (Week 11) |
| E11 | Exercise 11 - Paper 2 draft conference summary | E11 - Paper 2 Conference report (draft) | Due day of P2 draft conference (Week 13) |
| E12 | Exercise 12 - Paper 2 writing reflection | E12 - Paper 2 Writing reflection | One day after P09 |
| E13 | Exercise 13 - workload report, Nov (final) | E13 - Workload report, Apr (final) | One day after P09 |
| P03 | P03: Paper 1 | P03 - Paper 1 Final | Six days after P1 conference |
| P09 | P09: Paper 2 | P09 - Paper 2 Final | Six days after P2 draft conference |

(The other E13 monthly workload reports — Jan/Feb/Mar for 2520, Aug/Sep/Oct for 2510 — use a single base date for everyone and aren't included here.)

## Refreshing the data

The script at `research/srip-2026/scripts/fetch-per-student-due-dates.py` in the AI-projects repo re-fetches this from Canvas for both cohorts. Re-run when overrides change (extensions granted, conferences rescheduled).
