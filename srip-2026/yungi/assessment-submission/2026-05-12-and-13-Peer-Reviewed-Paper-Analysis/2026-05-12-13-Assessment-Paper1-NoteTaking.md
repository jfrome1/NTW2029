# Paper 1 : The Role of Learning Analytics in Evaluating Course Effectiveness


# Pre-Requisite from past research
- Definition of Course Evaluation : systematic assessment of a course's effectiveness in achieving its educational objectives
- Proposed framework for course evaluation :
  1) Why evaluate (goals)
  2) What is evaluated (process and outcomes)
  3) Who evaluates (students, peers, and self)
  4) When to evaluate (during the course, end of the course, sometime in the future)
 
- In higher education settings, they typically involve collecting data from course evaluation questionnaires to investigate students' perspectives
- Students focus on evaluating the performance/effectiveness of the instructors, targeting clarity of explanation, enthusiasm, availability, and responsiveness to students' needs.

- In contrast, there are the student satifaction surveys (?), which assesses students' perceptions / feelings about their educational experience

- However, positive learning environment, and high ratings of teaching does not always correlate with high ratings for the course itself.

- Due to the advancements of information technology, online evaluation started to be a trend, where learning analytics became a tool to analyze the vast amounts of data.

- However, "there has been a lack of comprehensive review studies focused on this emerging area" (pg. 3)
- Hence, this research focuses on a comprehensive review of the usage of learning analytics and its applications such as identifying the patterns of evaluation practices, data collection methods, analysis techniques, and the evaluated aspects.

- Basically, talks about what learning analytics is consisted of, and how it may help out with enhancing the course evaluation process.

<hr>

# Methodologies (I am assuming this part is not too significant for our understanding)
- Follows PRISMA (Preferred Reporting Items for Systematic Review and Meta-Analyses).
- The author used a platform called Scopus, a database used for conducting literature reviews across disciplines. The authors focused on keywords such as "Learning Analytics" OR "Machine Learning" OR "Educational Data Mining". 
- The authors filtered the database search so that papers that are relevant to "course evaluation" were chosen.
- The number of studies regarding relevant studies increased from 2019 to 2024, showing the increment of recognition of learning analytics reasearch.

There were six categories of learning analytics applications for course evaluation : 
1) The types, sources, and size fo data used for learning analytics
2) The aspects of courses being evaluated
3) The analysis techniques applied
4) The limitations addressed in the studies


<hr>

# Applications of Learning Analytics for Course Evaluation
<p align="center"><img src="assets/number-of-studies.png" width="400"></p>
<p align="center"><img src="assets/trends-in-LA-Applications.png" width="400"></p>

These pictures represent the distribution of studies in each application category for learning analytics and how the trend in the application of learning analytics changes across periods. 

According to the data shown, Sentiment Analysis was the most frequently used application for learning analytics.


## Application 1) Sentiment Analysis
- Known as the method of "opinion mining", it uses "natural language to identify and classify the emotional attitudes expressed within a text". (page 6)

- So, it basically uses the data gained from the feedbacks and analyze the students' emotional response depending on what they wrote for the course evaluation.

- Wide range of analysis methods and tools has been used for sentiment analysis. The most frequently used techniques were machine learning algorithms such as CNN, LSTM, MSPSO (multi-swarm optimization method), and used models such as BERT, BERT-BiLSTM attention model.

- Hence, machine learning algorithms, cloud based tools were used for sentiment analysis.

<br>


## Application 2) Predictive Modelling (basically machine learning, may be relevant)

- This method reflects the increasing significance of data-driven decision making in educational settings.
- This approach mainly utilizes statistical techniques and machine learning algorithms to not only analyze, but also to predict educational outcomes, which would let educators refine teaching strategies.

- For this method, a lot of statistical algorithms were represented. The main ones were regression analysis, supervised/unsupervised learning algorithms and deep learning algorithms.

<h3>Data types</h3>
<p>
  <ul>
    <li>Quantitative Data : Student log data, Course Assessment Scores, and Demographic Information : these data were      obtained in student infromation systems, learning management systems, and student questionnaires</li>
    <li>Qualitative Data : Textual Comments, Open-ended Feedback gathered from MOOC platforms, learning websites, and       Twitter datasets for sentiments.</li>
  </ul>
</p>


<br>



## Application 3) Questionnaire Analysis
- This method involves the systematic evaluation of data collected through questionnaires distributed to students, educators, or stakeholders in an educational context.
- They say "quantitative" analysis of the course evaluation, but I feel like it is more qualitative as students probably chose their satisfaction from 1~5 levels in like a google form.



<br>


## Application 4) Engagement Analysis (Relevant to ours)

1) E-learning Platform (Open eClass: 985 students) : They used ranking algorithms such as CCA (Course Classification Algorithm) and SUGAL (Suggestion Algorithm) in order to evaluate the content quality quantity, and overall course effectiveness.

2) edX Platform (1608 students) : Used Social Network Analysis and Descriptive Analytics in order to evaluate course structure, student engagement, instructional methods, feedback mechanisms, assessment methods

3) Moodle, Personal meta-reflective diaries : Used descriptive analysis, phenomenological analysis with predefined codes.


- these all evaluate the quality of the course, how well-engaged the courses are, how good the instructions were, how well the assessments were done, and the students' behavioural, emotional, and cognitive engagement using data.


<br>


## Application 5 : Topic Classification (Relevant)

- Widely used method in learning analytics for conducting comprehensive content analysis.
- This approach involves categorising and organising textual data to identify themes and patterns within the educational materials or student feedback.

<h2>Methods used for this : </h2>

1) Latent Dirichlet Allocation (LDA) and Naive Bayes : Extracting different topics and identified the word-topic probability under each topic.

2) Structural Topic Model : Assessed workload, teaching methods, and learning support through structural topic model, by analyzing (using the algorithm) how frequent the particular topic was mentioned in the evaluation. (Topics such as workload, teaching methods, and learning support)

3) Kano Model & Word2Vec Software : Analyzes the overall experience of students from the questionnaire


<br>


## Application 6 : Integrated Applications (relevant)

- We realize how the assistance of machine learning methods with substantial sample sizes can be effectively analyzed.
- For data types that are integrated from Moodle, Student questionnaires, and Surveys, data mining techniques and Descriptive statistics were frequently use for evaluation analysis.
- If we were to use methodologies mentioned in this paper, it would be good to study specifically how the methodologies such as utilizing machine learning algorithms, descriptive statistics work.

- The studies have shown that student engagement, performance, and perceptions are crucial elements of online course experiences.


<br>
<hr>


# Discussion / Conclusion

- The main research question (1) that this paper answered : What are the application categories of learning analytics in course evaluation?

- With cutting-edge AI algorithms, it is shown how it is helpful to evaluate the overall emotions and opinions about the course, which would lead the educators to understand how to enhance the course.

- The main research question (2) that this paper answered : What are the features of learning analytics in these practices, in terms of data collection methods, analysis techniques, and evaluated aspects?

- The most common data source for course evaluation was student questionnaires, which collect both qualitative data through open-ended questions and quantitative data.

- In addition to that, learning management systems (somewhat relevant to our case) and educational websites (our case) serve as common data sources too. These platforms provide information on learner demographics, behaviors, and performance.

- In terms of learning analytics techniques, descriptive analysis was the most commonly used, for questionnaire, engagement, and performance analysis. There were also more advanced techniques such as machine learning approaches that would be good for sentiment analysis, topic classification and predictive modelling.

- AI tools can be utilised good for classification, extraction, thematic analysis, and sentiment anlysis of qualitative feedback.

- But, of course, limitations occur, where students' textual comments are generally provided freely, which may lead for them NOT to specify the evaluated aspects.

- The main research question (3) that this paper answered : What are the main limitations in existing studies focused on learning analytics in course evaluation?

- One main limitation was limited sample size, and bias (as students may have written according to what the instructor wants). So, formally, it is phrased : This gap can lead to insufficient contextual analysis and inaccuracies in sentiment interpretation, resulting in inconsistencies across different studies.

- In addition, quantitative measures may not fully capture the complexities of student experiences.






















