Hi Yungi and Kristen,

I've read your daily reports through 7-02 and Yungi's description summary. Answers to your questions and next steps for each of you below.

## Yungi

November anomaly: good work tracking the root cause to the uncleaned dataset, and catching your own mix-up is exactly the kind of verification I want to see. The drop after Nov 17 is expected behavior, not an anomaly: students submit the final exercises early, so activity falls off before the last due date. No need to investigate further.

Rage clicks: that answers it. They're concentrated in a few students, so a one-line note in the summary is enough.

Student names for 2510: references/cohort-rosters.md now includes each 2510 student's matric number, so you can map the A0... IDs in PostHog to names.

Description summary: good start. You kept it descriptive, held the correlation question, and flagged the read-event problem, which is exactly the discipline we discussed. Note that the pageview/pageleave/internalLinkClick similarity is expected rather than a finding: we would expect those events to all rise and fall together with overall site activity. It would be more worth highlighting as a finding if they were not moving together.

Next steps:

1. Rebuild the summary as a story, not a list of observations. Pick the two or three key takeaways (e.g., usage was broad across all 24 students; activity tracked the paper deadlines, including your "M" shape; nutshell opens peaked around the final paper) and organize the document around them, like a thesis you're defending or a story you're telling.
2. Embed the charts that support each point. Right now the text refers to graphs the reader can't see.
3. Make sure the counts use the corrected cohort filter and the path normalization from references/reused-identifier-cohort-filter.md and references/page-path-normalization.md (coordinate with Kristen), and say in the document that they do.
4. Before working your pageview-to-pageleave question, read Kristen's mapping docs and analytics-data-limitations.md; that ground is already covered. Hold the openNutshell-vs-duration question for now, since it depends on duration numbers we only partly trust.
5. After the summary is solid, run this analysis: for each resources page, split its pageviews by how students arrived: from an assignment page link, from elsewhere on the site, or directly (bookmark or typed URL). The $referrer property on each pageview records the source page URL (it's populated for about three quarters of pageviews), and internalLinkClick's link property gives you a second route to cross-check. Use the cleaned cohort filter and normalize paths on both sides (referrer URLs have the same trailing-slash variants). The question this answers: which resources do students seek out on their own, versus only reach when an assignment sends them there? That tells me which resource pages are worth expanding as standalone pages and which should be folded into the assignment pages that drive their traffic.
6. So you can see what's next: your next piece after that is helping design next term's measurement improvements. Start from the questions we couldn't answer confidently this term (how long students actually spend on a page, whether they actually read it, whether a resource is used because it's helpful or just because it's required) and for each one, propose what we could measure next term that would answer it. You can be a bit creative here; for example, suggesting that we add buttons to the UI or have survey questions at the bottom of the page (although I'm not recommending either of those). The test for every proposal: name a decision I could make differently depending on the result. If you can't name one, drop the measure. Your learning-analytics reading is an asset here; what do the studies you read actually measure, beyond raw usage counts? Your proposals will feed Kristen's recommendations document.

## Kristen

Documenting the views: yes, document and organize them. They're not disposable. The views plus current-views.md are what future terms inherit, and they feed directly into your instrumentation-recommendations writeup.

The X-close addition to event-level-overview.md is exactly right: quantifying the undercount (roughly 640 unmatched opens, 71 x-closes) instead of just naming it.

Next steps:

1. Finish the 2510 path mapping. Use the rename map in your data-discrepancies.md and the site's git history as the reference; anything you still can't verify, list as unverified and move on rather than blocking on it.
2. Check and apply the two filter docs (reused-identifier-cohort-filter.md and page-path-normalization.md) with Yungi and confirm 2510 reads 24 students, so the executive summary runs on the cleaned data.
3. Start drafting the next-term instrumentation recommendations for Joe, with duration measurement as the centerpiece: the shorter idle timeout, the heartbeat idea for active-tab time, the read-event redefinition, and your closeNutshell proposal. Fold your duration-confidence assessment into it (the 15-minute split, the background-tab and mouse-movement caveats) so the recommendations are grounded in what we couldn't trust this term. Yungi's measurement proposals (his step 6) will feed this document too; you own the technical side and the writeup.
4. Keep the view documentation current as you clean up, since that's now a confirmed deliverable.

See you next week!
