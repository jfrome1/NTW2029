---
lastUpdated: 2026-08-04
lastEvaluated: 2026-06-18
writingClarityEvaluated: 2026-06-18
---

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NTW2029 is a course website built with Astro and Starlight, deployed on Vercel. Student-interaction analytics are captured with PostHog and mirrored to a Neon Postgres database (provisioned through Vercel) for SQL querying.

This repository contains only the course website. Course design work, class meeting transcripts, and other course materials are stored separately in:
`C:\Dev\repos\AI-projects\ntw2029 course design\`

Transcripts are organized by semester in:
`C:\Dev\repos\AI-projects\ntw2029 course design\tasks\transcript-analysis\transcripts organized\`

## Commands

This project uses pnpm, not npm. Always use `pnpm` for installs and scripts; do not run `npm install` or `npm run ...`.

```bash
pnpm install      # Install dependencies (uses pnpm-lock.yaml)
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Run astro check && astro build to ./dist/
pnpm preview      # Preview production build locally
```

Do not run `pnpm build` without explicit user approval. Content review and editing does not require building.

## Architecture

- **Framework**: Astro 5 with Starlight documentation theme
- **Content**: Markdown/MDX files in `src/content/docs/`
- **Styling**: Custom CSS in `src/styles/custom.css`
- **Components**: Custom Astro components in `src/components/`

### Key Plugins

- `starlight-links-validator`: Validates internal links at build time
- `starlight-nutshell`: Expandable inline content (`:link text` syntax)
- `starlight-auto-drafts`: Draft content management
- `rehype-external-links`: Adds external link indicators

### Troubleshooting Missing Pages

When a page doesn't appear in the sidebar or on the live site, check the page's frontmatter for `draft: true`. The `starlight-auto-drafts` plugin hides draft pages from the sidebar in production, even if they're explicitly listed in the sidebar config in `astro.config.mjs`.

### Content Entry Requirements

All .md files under Astro's content directory (`src/content/docs/`) must have YAML frontmatter with at least a `title:` field. Files without frontmatter cause `InvalidContentEntryDataError` and fail the Vercel build. A blank line between the opening `---` and the first field can also cause parsing failures.

### Custom Components

- `CustomTableOfContents.astro`: Modified TOC behavior
- `CustomPagination.astro`: Modified pagination
- `Mermaid.astro`: Mermaid diagram support (MDX files only)

## Content Structure

Content lives in `src/content/docs/course-ntw2029/`:

- `schedule.md`: Course schedule (sidebar root)
- `course-info/`: Course information pages
- `assignments/exercises/`: Exercise assignments
- `assignments/papers/`: Paper assignments
- `resources/`: Course resources

### Term-Suffixed Pages and Staged Next-Term Versions

Paper assignment pages carry the semester code in the filename, and therefore in the student-visible URL: `p1-2520.md` serves `/course-ntw2029/assignments/papers/p1-2520/`. Exercise pages carry no semester code and pass between terms unchanged.

When a page exists in two term versions at once (for example `p2-p06-explain-positions-2520.md` alongside `p2-p06-explain-positions-2610.md`), the pair is deliberate. The later-term file holds revisions the instructor wants for the following term but does not want live during the current one, and `draft: true` in its frontmatter is what keeps it hidden. Do not treat such a pair as duplication to clean up, and do not merge the staged file into the live page. Rolling the site over to a new term means promoting the staged file (clear its `draft: true`) and retiring the old term's page.

Retiring matters because the sidebar autogenerates from the directory listings for `assignments/exercises`, `assignments/papers`, `course-info`, and `resources`. A page left in one of those directories stays visible to students unless its frontmatter sets `draft: true`, so an old term's page does not disappear on its own when the new term's page is added.

## Topic-Triggered References

Before responding, check if the prompt involves these topics. If so, load the corresponding reference file.

| Topic triggers                                                          | Load file                                                                                      |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| FAQ, nutshell, anchor link, content placement                           | `{AI_PROJECTS}/ntw2029 course design/standards/nutshell-vs-anchor-links.md`                    |
| link syntax, markdown links, heading ID                                 | `{AI_PROJECTS}/ntw2029 course design/references/link-syntax-quick-reference.md`                |
| astro.config.mjs, build config, astro-compress, sidebar missing, responsive CSS not applying, Vercel deployment or build logs, ignored build step, rehype plugins, site URL | `{AI_PROJECTS}/ntw2029 course design/context/project-website-context.md`                       |
| writing style, student email, post-class feedback, course document tone | `{AI_PROJECTS}/ntw2029 course design/standards/JF_Frome_writing_style.md`                      |
| assignment structure, assignment template, creating assignment          | `{AI_PROJECTS}/ntw2029 course design/standards/assignment-template.md`                         |
| page criteria, page evaluation, requirements page, resource page        | `{AI_PROJECTS}/ntw2029 course design/standards/course-page-criteria.md`                        |
| EP paper examples, assignment topic examples, P2 examples, lecture examples | `{AI_PROJECTS}/ntw2029 course design/references/p2-example-topics-2420.md`                 |

## Link Formats

For internal links use absolute paths from site root:

- Page: `[text](/course-ntw2029/path/to/page)`
- Heading: `[text](/course-ntw2029/path/to/page/#heading-id)`
- Nutshell expandable: `[:text](/course-ntw2029/path/to/page)`

## Utilities

- `checkNutshellLinks.js`: Validates Nutshell links in markdown files

  ```bash
  node checkNutshellLinks.js src/content/docs
  ```

## Writing Style

When creating or revising documents, don't use "this" by itself as the subject of a sentence. "This" must be followed by a noun that clarifies what it refers to.

- Not OK: "This is when your analysis begins."
- OK: "This assignment is when your analysis begins."
- Not OK: "This prevents premature conclusions."
- OK: "This step prevents premature conclusions."

## Custom Code Restrictions

Do not create custom Starlight plugins, custom Astro integrations, or other custom components without explicit user approval first. Prefer using existing plugins and standard configuration options.

## Grading Comment Conventions

The instructor aims to offer positive comments for all student work, regardless of quality, so indicators of good work do not actually mean the work is above average. "Good work" might be given for below-average work as encouragement. "Very good work" is usually reserved for above-average work.

The Canvas gradebook is used by the instructor to communicate individual assignment grades to students. It is not used to calculate final grades, and you should not attempt to infer a student's final grade or overall performance from the gradebook. Although the gradebook may show a calculated "final grade" column, students are told to ignore it, and student-facing text should follow that guideline.

## Analytics

Student-interaction events are captured by PostHog and continuously mirrored to a Neon Postgres database (provisioned through Vercel) via a PostHog Destination, so the same data is queryable in standard SQL. PostHog project: `us.posthog.com/project/101665` (dashboards, HogQL queries). Neon SQL mirror: Vercel dashboard, Storage, Open in Neon. The analytics code is in `src/components/DateAnalyticsComponent.astro`; `README-ANALYTICS.md` in this repo is the canonical analytics reference.
