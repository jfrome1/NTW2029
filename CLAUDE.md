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

This project uses pnpm, not npm. Always use `pnpm` for installs and scripts; do not run `npm install` or `npm run ...`. The available scripts are listed in `package.json`.

Do not run `pnpm build` without explicit user approval. Content review and editing does not require building.

## Term-Suffixed Pages and Staged Next-Term Versions

Paper assignment pages carry the semester code in the filename, and therefore in the student-visible URL: `p1-2520.md` serves `/course-ntw2029/assignments/papers/p1-2520/`. Exercise pages carry no semester code and pass between terms unchanged.

When a page exists in two term versions at once (for example `p2-p06-explain-positions-2520.md` alongside `p2-p06-explain-positions-2610.md`), the pair is deliberate. The later-term file holds revisions the instructor wants for the following term but does not want live during the current one, and `draft: true` in its frontmatter is what keeps it hidden. Do not treat such a pair as duplication to clean up, and do not merge the staged file into the live page. Rolling the site over to a new term means promoting the staged file (clear its `draft: true`) and retiring the old term's page.

Retiring matters because the sidebar autogenerates from the directory listings for `assignments/exercises`, `assignments/papers`, `course-info`, and `resources`. A page left in one of those directories stays visible to students unless its frontmatter sets `draft: true`, so an old term's page does not disappear on its own when the new term's page is added.

## Topic-Triggered References

Before responding, check if the prompt involves these topics. If so, load the corresponding reference file.

| Topic triggers                                                          | Load file                                                                                      |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| FAQ, nutshell, anchor link, content placement                           | `{AI_PROJECTS}/ntw2029 course design/standards/nutshell-vs-anchor-links.md`                    |
| link syntax, markdown links, heading ID                                 | `{AI_PROJECTS}/ntw2029 course design/references/link-syntax-quick-reference.md`                |
| astro.config.mjs, build config, astro-compress, sidebar missing, page not appearing, draft frontmatter, content entry error, responsive CSS not applying, Vercel deployment or build logs, ignored build step, rehype plugins, site URL, log in to the site, inspect the live site, view as a student | `{AI_PROJECTS}/ntw2029 course design/context/project-website-context.md`                       |
| writing style, student email, post-class feedback, course document tone | `{AI_PROJECTS}/ntw2029 course design/standards/JF_Frome_writing_style.md`                      |
| assignment structure, assignment template, creating assignment          | `{AI_PROJECTS}/ntw2029 course design/standards/assignment-template.md`                         |
| page criteria, page evaluation, requirements page, resource page        | `{AI_PROJECTS}/ntw2029 course design/standards/course-page-criteria.md`                        |
| EP paper examples, assignment topic examples, P2 examples, lecture examples | `{AI_PROJECTS}/ntw2029 course design/references/p2-example-topics-2420.md`                 |

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

`README-ANALYTICS.md` in this repo is the canonical analytics reference. It covers the PostHog and Neon Postgres stack, the tracked events, the key files, the environment variables, and how to pull the data out of Neon. Read it for any analytics question.
