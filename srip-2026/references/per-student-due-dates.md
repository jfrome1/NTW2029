---
created: 2026-05-22
lastUpdated: 2026-05-22
---

# Per-student due dates (NTW2029 2520)

**Description:** Per-student due dates for conference-driven assignments in NTW2029 (Spring 2026). Two CSV files alongside this README:

- `per-student-due-dates.csv` — wide format, one row per student, one column per assignment
- `per-student-due-dates-long.csv` — long format, one row per student-assignment pair

Source: Canvas API. Fetched 2026-05-22.

## What the dates mean

The date in each cell is the **noon-the-next-day extended deadline** — the effective deadline students work with.

The original assignment deadline is 23:59 SGT the night before. Students automatically get a 12-hour extension to noon the next day, and submissions during that window are not considered late. The dates here are that noon-next-day form.

Example: a cell with `2026-02-20` means the assignment is due at noon SGT on Feb 20. The original deadline was 23:59 SGT on Feb 19.

To recover the original deadline, subtract one day.

## Why only these eight assignments

These eight have per-student due dates because they're tied to or cascade from each student's individual conference time. All other assignments use a single base due date that applies to every student.

| Code | Assignment | Rule |
|---|---|---|
| E05 | Paper 1 conference report | Due day of P1 draft conference (Week 6) |
| E06 | Paper 1 writing reflection | One day after P03 |
| E10 | Paper 2 conference report, explain positions | Due day of P2 explain-positions conference (Week 11) |
| E11 | Paper 2 conference report, draft | Due day of P2 draft conference (Week 13) |
| E12 | Paper 2 writing reflection | One day after P09 |
| E13 | Workload report, April final | One day after P09 |
| P03 | Paper 1 final | Six days after P1 conference |
| P09 | Paper 2 final | Six days after P2 draft conference |

(The other three E13 monthly reports — January, February, March — use a single base date for everyone and aren't included here.)

## Refreshing the data

The script at `research/srip-2026/scripts/fetch-per-student-due-dates.py` in the AI-projects repo re-fetches this from Canvas. Re-run when overrides change (extensions granted, conferences rescheduled).
