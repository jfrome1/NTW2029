# current tasks:

NTW 2029 tasks:

- set up https://github.com/HiDeoo/starlight-auto-drafts
-

- analytics, add a heartbeat event every 15 seconds to help count 10% of pageview events that don't have corresponding pageleave events
	- this isn't primarily for page views, but for getting accurate time on page
	- but, can also only help filter out page views that are very short (under 15 seconds, or may want to change the amount of time)
- connect PostHog to (anonymized?) grade data Excel sheet to let PostHog answer queries about relationships between student usage and grades

# on hold, waiting on JF next steps:

# maybe:


# completed:

- add student and instructor log-in
- change Nutshell icon pop-up message to small bubble that just says, "the text-expansion links are based on Nicky Case's [Nutshell](https://ncase.me/nutshell/)"
- fill in guide to proper internal Markdown links (part of the solution is to use absolute links rather than relative)
- set up analytics that can provde the info I want about the site
- fix Nutshell links line break--links with text in them have a line break after the first word (see `:formatting guidelines` link on `guidelines.md`)
- remove space between Nutshell bulleted lists
- fix button spacing for close button at bottom of Nutshells (currently it's too short, so hard to click links on last line of bubble text)
- fix text wrap for table cells and for code blocks in Nutshells
- remove or change 'Overview' in right sidebar
- fix dependabot auto-merge on GitHub repos
- figure out how to create markdown links that allow students to download files from my GitHub repo folder public/downloads/
- add FeelBack or other free feedback system
- describe method to use [HiDeoo/starlight-links-validator: Starlight plugin to validate internal links](https://github.com/HiDeoo/starlight-links-validator) to test links on local build
	- confirm that Starlight links validator can be set to ignore Nutshell links
	- explain how to config it to do so
	- activate links validator on ntw2029 site and test
- add a small-font text message in light grey above navigation buttons: "Send me questions or feedback about the website via Teams or email for class participation credit." It might look like the "Send a message" text in the message form on Upwork.
- add "last updated" to each page, maybe using `https://inox-tools.fryuni.dev/content-utils/git`?
- create a tool to validate Nutshell links, maybe by by building the site and then searching the build to match anchor links on one page to headings on the same page

# rejected

- set up GitHub repository properly with github.io/NTW2029 URL

2024-11-11

Name and password login,
