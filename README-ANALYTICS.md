# Analytics

## Stack

- **PostHog** (client-side via `posthog-js`) — captures behavioral events in the browser
- **Neon Postgres** (via Vercel Storage) — stores the analytics data server-side

## Architecture

All tracking logic lives in `src/components/DateAnalyticsComponent.astro`. This component is injected on every page through `CustomPagination.astro`, which overrides Starlight's default `Pagination` component (configured in `astro.config.mjs`).

On page load, the component reads an auth cookie (`PUBLIC_COOKIE_NAME` env var) containing `{ id, username }`, then calls `posthog.identify()` to associate events with the logged-in user. The site is gated behind login via `middleware.ts`, which rewrites unauthenticated requests to `/login`.

PostHog is initialized with `persistence: 'memory'` and `person_profiles: 'identified_only'`, so no data is persisted in cookies/localStorage client-side and anonymous traffic is not profiled.

## Tracked Events

| Event | Trigger | Properties |
| :--- | :--- | :--- |
| `read25` / `read50` / `read75` | Viewport bottom crosses 25% / 50% / 75% of page | `page`, `read_id`, `page_height` |
| `openNutshell` | Nutshell expandable link opened | `page`, `text` |
| `closeNutshell` | Nutshell manually closed (click text or X button) | `text` ("x" or nutshell text), `duration` |
| `inactiveNutshell` | Nutshell scrolled out of viewport while open | `text`, `duration` |
| `openQuiz` | `<details>` element expanded | `page`, `text` |
| `closeQuiz` | `<details>` element collapsed | `page`, `text`, `duration` |
| `internalLinkClick` | Click on internal `<a>` (non-nutshell) | `text`, `link` |
| `externalLinkClick` | Click on external `<a>` (non-nutshell) | `text`, `link` |
| `tabFocused` | Tab gains focus / initial visible state | `isInitial`, `page`, `totalTimeOpen`, `timeHidden` |
| `tabUnfocused` | Tab loses focus | `isInitial`, `page`, `totalTimeOpen`, `timeFocused` |
| `userIdle` | 5 minutes of zero input | `page`, `idle_id` |
| `userActive` | User returns after being idle | `page`, `idle_id`, `idle_duration` |

Duration values are in milliseconds, calculated from a `data-open-time` attribute set when the element opens.

## Changes (edits-2026)

| Change | New or updated? | What it does |
| :--- | :--- | :--- |
| Page-load setup | Updated | Now also begins tab-focus tracking as soon as the page loads. |
| Tab focus / away detection | New | Records when a student switches to or away from the course website tab, and how long they were away. |
| Nutshell close (click text) | Updated | Closing a nutshell by clicking its text is now logged as a manual close, separate from auto-close. |
| Nutshell close (X button) | New | Logs when a student closes a nutshell using the X button. |
| Nutshell link setup | Updated | Stops duplicate generic click records on nutshell links. |
| Regular link setup | Updated | Stops duplicate generic click records on normal page links. |
| Quiz/dropdown setup | Updated | Stops duplicate generic click records on quiz dropdown menus. |
| Scroll / reading depth | Updated | Reading tracked at 25%, 50%, and 75% down the page (previously only one mark at 50%). |
| Idle detection | New | Detects when a student stops interacting (idle) and logs when they become active again. |

## Key Files

| File | Role |
| :--- | :--- |
| `src/components/DateAnalyticsComponent.astro` | PostHog init, user identification, all event listeners |
| `src/components/CustomPagination.astro` | Injects analytics component on every page |
| `src/components/SocialIcons.astro` | Reads auth cookie to display username |
| `middleware.ts` | Vercel Edge middleware; gates all routes behind login |
| `src/pages/login.astro` | Login page that sets the auth cookie |

## Environment Variables

| Variable | Purpose |
| :--- | :--- |
| `PUBLIC_COOKIE_NAME` | Name of the cookie storing user auth data |
| `TOKEN` | GitHub API token (used by version-checker, not analytics) |

## Data Pipeline and Access

PostHog retains historical events going back to November 2024. PostHog does not use Postgres under the hood — it uses a hybrid system combining Postgres with ClickHouse in a proprietary format. There is no way to download data in native PostHog format, and even if you could, it wouldn't be readable outside PostHog.

To get data out, PostHog uses **Destinations** to pipe events to an external Postgres database (Vercel/Neon). This conversion step is where some property structure can be affected, since Postgres doesn't support the same nesting as PostHog's internal format. Event details are stored in Neon as JSONB columns, not truncated — but some Postgres clients don't handle JSONB well, which can make properties appear truncated or missing.

Destination configuration: https://us.posthog.com/project/101665/data-management/destinations

A sample event was tested comparing PostHog source data against the Neon Postgres destination to confirm correct field mapping (see [Gemini conversation](https://gemini.google.com/share/790d64d79e4e)).

**Storage cost:** Leaving data in the Neon analytics database is very affordable — approximately $0.35 per GB-month, with roughly 500 MB of data per term.

**Download from Neon Postgres:**

1. Log in to [Vercel](https://vercel.com) and open **JF GenAI Project Pro**.
2. Go to **Storage** and find the "analytics" entry.
3. Click **Open in Neon** to access the Neon Postgres console.
4. Go to **Tables**, clear any filters, set the limit to **500**, and use the ellipsis menu to **Download all as CSV**.