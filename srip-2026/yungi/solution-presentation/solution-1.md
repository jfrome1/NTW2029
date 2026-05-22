# Presentation of my findings for several days

- Main Problem : PostHog dashboards only provide "descriptive" data ("a button was clicked x times"). These are discrete variables that would not be helpful for explaining the dyanmical nature of students' behavior in our website.
  
- So, our approach should shift to diagnostic and predictives analysis, using modern algorithms (proving which certain actionas may negatively impact students' overall learning.


<h3>Methodologies that were investigated</h3>

1) Psychological Mapping ("Action Library")
- A framework to translate raw, meaningless computer logs into cognitive Self-Regulated Learning (SRL) States
- So, we basically convert PostHog log events into psychological categories. For example, a rapid jump to a grading page from another page becomes "ForeThought/Planning" while a rage click becomes "UI_Friction".


2) Event-Level Time Thresholding (FMM) -> Filtering the noise
- A mathematical method called (Finite Mixture Modeling) to analyze the duration of a page visit to determine the students' true intent. Since we already have this data, we can use this to label a student who stayed in a particular page for 5 seconds as "Skip" or "Read_No" rather than classifying the same as other students who have been in that page for an hour.



3) Stochastic Modeling & seqMAC
- Sequence-based Markov Machine Learning Classification (seqMAC) : Instead of the static clicks, or time, this replaces that with a Markov Chain transition matrices, calculating the exact probabiity of a student moving from State A to State B.

- We first make the transition probability matrix. Then, after we feed this into a machine learning algorithm, we apply SHAP algorithm, that would help us determine which specific website transitions are driving high/low success.


4) Behavioral Clustering (K-Means Learner Archetypes)

- This is basically grouping students based on their behavior patterns instead of splitting them depending on their grades.

- We can have clusters such as the "High performers" (who read main texts and don't need nutshells), "Strugglers" (who click in an unordered way), and "Methodical Learners" (who rely on nutshells only). This shows how the course involvements must be targeted to specific learner types, not applied uniformly throughout.


5) Temporal Shift Analysis (Tracking "Burnout")

- Tracking how student's navigational strategy changes chronologically througout the semester.
- So, for example, the student might be on track by being in the homepage and assignment page for a certain amount of time, but during week 8, let's say the amount of rage clicks and paths the student taked is a bit irregular. Then, we can predict the student's burnout.

















