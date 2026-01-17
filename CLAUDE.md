# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NTW2029 is a course website built with Astro and Starlight, deployed on Vercel with Neon Postgres for analytics.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Run astro check && astro build to ./dist/
npm run preview   # Preview production build locally
```

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

## Example EP Topics

When creating assignment instructions or lecture examples that reference evolutionary psychology arguments about art/media, avoid topics covered in assigned P1 and P2 readings. A table of safe example topics from past student papers is maintained at:

`{AI_PROJECTS}/.planning/scan-past-ntw2029-papers/findings.md`

This table includes topic, source paper with DOI, and student thesis for 17 past P2 papers that don't overlap with current assignments.

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

## Analytics

Course analytics stored in Vercel/Neon Postgres. Access via Vercel dashboard > Storage > Open in Neon.
