Reference : https://posthog.com/blog/best-product-analytics-tools-for-startups#:~:text=Product%20analytics%20is%20event%2Dbased,%2C%20filter%2C%20and%20act%20on.

<h3>Assessment : How to plan and approach analytics for a non-financial website — dashboards vs. ad-hoc queries, how to think about what's worth measuring, workflow strategies. Avoid the "I can build a panel that does X" trap.
</h3> 

<br>

<h1>Dashboards VS Ad-Hoc Queries
</h1>
<p>Dashboards are like the general overview of the predefined metrics, like daily active users or overall retention. This monitors things in the long term, showing us the trend of the user’s behaviors. In contrast, ad-hoc queries are spontaneous, one-off investigations designed to solve specific mysteries or test hypotheses, such as drilling down why a particular group of users abandoned a page during a specific hour. Dashboards are more like the change in metric while ad-hoc queries provide the filtered evidence needed to understand the “why” behind that change, serving as the bridge between noticing a trend and taking an informal action for it.
</p>

<h1>Prerequisites</h1>
<p>
1) <b>Product Analytics :</b> “Event-Based Tracking” that measures how users interact with your product (not just whether they visit your website). So, in this case, every button click, feature used, form submitted, and page navigated becomes a data point we can query, filter, and act upon. Unlike Google Analytics where it tells you how many people visited the product and their average screentime, Product Analytics helps us determine which user_id signed up when, and what kind of features for how long the user has used.
</p>

<br>

<p>
2) <b>Components of Product Analytics :</b>
- Funnels : can determine where users drop off between signup and activation? (funnels are the whole step by step journey an user takes while experiencing the product)
- Retention Cohorts : can determine groups of users who signed up, and how many come back
- Segmentation : Do users coming from X behave differently than those from Y?
- Feature Adoption : You shipped a new feature. Is anyone using it? Are those users retaining better?
</p>

<br>

<p>
3) <b>Product Market Fit :</b>
- This determines whether you’ve built a product that the user “actually” wants, and keeps coming back to. So, in this case, the retention curve would flatten instead of declining to zero and the users would start recommending your product without being asked.
</p>

<br>

<h1>What is worth measuring : Pre-Product Market Fit Version (pre-PMF)</h1>
<p>Situation : Retention would be a mystery, and we would not be sure if the product would/is getting value.</p>

<br>

<p>The metrics (quantitative measurement of data) that matter : focus on building a key metrics dashboard and find the activation metrics (set of actions a new user performs that correlate with greater retention). So, instead of just guessing, you are testing using correlation which set of actions may have the user back.</p>

<p>
  Another thing to look at is onboarding completion rate, which in our case, would be irrelevant as we don’t have an authentication feature.
  In this stage, we can use 3 analytics tool from PostHog : 

  <ol>
    <li>Session Replay - where we can determine how the user actually acts live when using our product</li>
    <li>Surveys - Running a PMF survey such as “How disappointed would you be if you could no longer use this product”? Evaluate exit intent and onboarding feedback surveys</li>
    <li>Cohort Comparison (Cohort : list of users who completes the similar actions)</li>
  </ol>
  
</p>


<br>

<h1>What is worth measuring : Post-Product Market Fit version (Post-PMF)</h1>
Situation : Users are returning, revenue is growing, and have the question : “Is this working well? How do we grow further? How do we grow efficiently?”


<p>
  The metrics that matter : 
  
  <ol>
    <li>Cohort Retention Curves - retention by signup week. Is the curve declining to zero or steady? (this tells us if the website for the course is actually useful to users, as we would know if they come back frequently. But, for this I am assuming it would be good since all the information that are related to assignments and grading is on the website). </li>
    <li>Engagement Depth - DAU/MAU ratio (daily active users / monthly active users), session frequency, feature breadth per user</li>
    <li>Feature adoption - what % of activated users tried the new feature? We can use the lifecycle feature (Product Analytics > +New Insights > Lifecycle) from PostHog to see if they retain better</li>
    <li>Conversion to Paid (Irrelevant in our case)</li>
  
  </ol>

</p>
<br>

<p>
  Potential Tools we can pair with our analytical tool : 
  <ol>
    <li>Feature Flags : gradual rollouts (1% -> 10% -> 100%), kill switches, targeting for beta access</li>
    <li>A/B test : test onboarding flows, pricing pages, feature gates against retention or conversion goals.</li>
    <li>Error Tracking : Correlate bugs with churn rate (“users who hit the checkout error in this feature churned at 3x the normal rate)</li>
    <li>LLM observability : (But, this is only when we use LLM from another company, as in we are using LLM from OpenAI API for our product, so posthog will analyze the cost of LLM per user, cost by model, generation calls, and AI generation call error (API call error), which in our case, since we don’t have a chatbot in the website, it is irrelevant).</li>
  </ol>
</p>


<br>
<br>



















