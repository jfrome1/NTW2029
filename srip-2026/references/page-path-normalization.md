---
created: 2026-06-30
lastUpdated: 2026-06-30
---

# Page-path normalization (counting a page once)

Claude description: How to count a single page once when it appears under several path strings, which splits per-page counts. Covers the two causes (trailing-slash variants and historical renames), gives a query-time normalized-pathname expression, and explains how to use it in per-page insights. Load when doing any per-page count or per-page trend.

Load when: building or correcting a per-page count or trend (not needed for section/page-type rollups).

## About this document

This builds on the rename-map work already described in `data-discrepancies.md`. It adds the trailing-slash case and a single normalized-pathname expression you can drop into per-page insights. Like the cohort filter, these are analysis-side adjustments: they change how events are counted in a query, not the website or the stored events. Drafted with Claude, reviewed by the supervisor.

## The issue

A single page can be recorded under more than one path string, which splits its per-page counts and can create artificial drop-offs in trends. Two causes:

1. Trailing slash: `/resources/citations/` and `/resources/citations` are the same page. In 2520 citations was split 86 + 37 across the two forms (123 once merged).
2. Renames: a page that moved keeps events under both its old and new path, for example `/resources/evolution/ev-religion` then `/resources/ev-religion`. Some assignment pages also gained or dropped a version suffix mid-term (e.g. `p2-p06-explain-positions-v12` vs `p2-p06-explain-positions`).

Section and page-type rollups (schedule, resources, assignments, ...) are not affected, because the variants stay in the same section. This matters only for per-page work.

## The approach (analysis-side)

Normalize the pathname before grouping or counting, in two steps.

1. Strip a trailing slash — mechanical, safe to apply everywhere:

```sql
replaceRegexpOne(coalesce(properties.$pathname, ''), '/+$', '') AS norm_path
```

2. Apply a rename map — canonicalize pages that moved. Build the map from the NTW2029 git history (file moves and renames across the term) plus the instructor's record of changes; this is the map being assembled in `data-discrepancies.md`. Apply it over `norm_path`:

```sql
multiIf(
    norm_path = '/course-ntw2029/resources/evolution/ev-religion',               '/course-ntw2029/resources/ev-religion',
    norm_path = '/course-ntw2029/resources/evolution/ev-resources',              '/course-ntw2029/resources/ev-resources',
    norm_path = '/course-ntw2029/resources/evolution/questions-about-evolution', '/course-ntw2029/resources/questions-about-evolution',
    -- ... add remaining confirmed rename pairs here ...
    norm_path
) AS canon_path
```

Then group and count on `canon_path`.

## How to use it in insights

- For any per-page insight, use `canon_path` (slash-strip plus rename map) as the grouping key instead of `properties.$pathname`.
- The trailing-slash strip can be applied immediately and everywhere. The rename map grows as pairs are confirmed from git history; until a pair is in the map, those two paths still count separately, so treat lower-volume per-page numbers as provisional until the map is filled in.
- Section and page-type rollups need no change.

## Scope and caveats

- Analysis-side only; the website and stored events are unchanged. Fixing it at the source (consistent internal links, or a capture-side rule) is a separate instrumentation item.
- The merge is only as complete as the rename map; the trailing-slash half is complete on its own.

## Related

- `data-discrepancies.md` — the rename map (in progress) and the other data issues.
- `reused-identifier-cohort-filter.md` — the cohort-identity fix (sibling document).
- `current-views.md` — `all_pages` lists the latest page set but does not merge renamed paths.
