

1

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 AcademicEditor:Grigorios 
 L.Kyriakopoulos 
 Received:20December2024 
 Revised:8January2025 
 Accepted:11January2025 
 Published:13January2025 
 Citation: Wong,B.T.M.;Li,K.C.;Liu, 
 M.TheRoleofLearningAnalyticsin 
 EvaluatingCourseEffectiveness. 
 Sustainability2025,17,559. https:// 
 doi.org/10.3390/su17020559 
 Copyright:©2025bytheauthors. 
 LicenseeMDPI,Basel,Switzerland. 
 Thisarticleisanopenaccessarticle 
 distributedunderthetermsand 
 conditionsoftheCreativeCommons 
 Attribution(CCBY)license 
 (https://creativecommons.org/ 
 licenses/by/4.0/). 
 Review 
 The Role of Learning Analytics in Evaluating 
 Course Effectiveness 
 BillyT.M.Wong* ,KamCheongLi andMengjinLiu 
 InstituteforResearchinOpenandInnovativeEducation,HongKongMetropolitanUniversity,Homantin,
 Kowloon,HongKong,China;kcli@hkmu.edu.hk(K.C.L.);maggie_liu@hkbu.edu.hk(M.L.)
 * Correspondence:tamiwong@hkmu.edu.hk 
 Abstract: Thisstudyaimstoexaminetheuseoflearninganalyticsincourseevaluation
 within higher education institutions, in order to identify effective methodologies and
 best practices for leveraging data to improve educational effectiveness. Following the
 PRISMA guidelines, a systematic literature search was conducted in Scopus, yielding
 34relevantstudiespublishedbetween2015and2024foranalysis.Theresultsrevealsixkey
 categoriesoflearninganalyticsapplications: sentimentanalysis,questionnaireanalysis,
 engagementanalysis,topicclassification,predictivemodelling,andperformanceanalysis.
 Thedatasourcesforlearninganalyticsapplicationsprimarilyincludequestionnairesand
 learning management systems. While descriptive analysis was found to be the most
 commonlyemployedanalyticaltechnique,advancedtechniquessuchasmachinelearning,
 artificial intelligence, and social network analysis are becoming more prominent. The
 studiesaddressedawiderangeofelementsassociatedwithcourseevaluation,including
 coursedesign,contentquality,assignments,instructionalstrategies,workload,feedback
 mechanisms,andtheintegrationoftechnology.Thesefindingshighlighttheimportanceof
 adoptingholisticapproachestocapturethemultifacetednatureofstudentexperiences.This
 studyalsouncoversmajorlimitationsintheexistingresearch,suchassmallsamplesizes,
 potentialbiasesduetotheuseofsurvey-basedmethods,andchallengesingeneralising
 findings across disciplines. These insights underscore the need for further research to
 enhancethemethodologiesusedincourseevaluations.Thisstudycontributestoadvancing
 learninganalyticspracticesandemphasisestheimportanceofinnovativeapproachesfor
 evaluatingandimprovingcourseeffectiveness. 
 Keywords: learning analytics; course evaluation; machine learning; educational data
 mining;educationalquality 
 1. Introduction 
 Inaneramarkedbyrapidtechnologicaladvancementsandanincreasingemphasison
 data-drivendecisionmaking,educationhasbeenundergoingatransformativeshift.Learn-
 inganalytics,whichinvolvesgatheringandanalysingdataaboutlearnersandlearning
 contexts[1],hasemergedasapowerfultooltoaddresschallengesrelatedtothisshift.By
 harnessinglargeamountsofeducationaldata,learninganalyticsholdssignificantpromise
 for advancing educational sustainability. It has demonstrated potential in facilitating
 personalisedlearning,improvingacademicperformance,andcreatingadaptivelearning
 environments[2-4],ensuringthateducationaldeliveryremainsresponsiveandsustainable
 whilemeetingthedynamicdemandsofsociety. 
 Asanessentialcomponentofcoursedelivery,courseevaluationsystematicallyassesses
 thesuccessandeffectivenessofeducationalofferings[5,6].Itprovidesevidenceregarding
 Sustainability2025,17,559 https://doi.org/10.3390/su17020559



2

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 2of22 
 
 
 the performance of teaching staff [7], identifies areas for quality enhancement [8], and
 informscurriculumdesignanddevelopment[9].Insightsgainedfromcourseevaluations
 empowerpolicymakers, coursecoordinators, andinstructorstodetermineappropriate
 actions, allocate resources effectively, and implement necessary support measures for
 continuouscourseimprovement[10]. 
 Courseevaluationhastraditionallyreliedonmethodssuchasquestionnairesurveys
 andinterviewswithstudentstoinvestigatetheirperceptionsofacourse[11]. Theinte-
 grationoflearninganalyticshasbroadeneditsscope,enablingamoredata-drivenand
 comprehensive approach. For example, analyses on student engagement data can be
 conductedregardingparticipationindiscussions,timespentoncoursematerials,video-
 watchingbehaviours,andcompletionofassignments[12-14],providingdata-informed
 insightsintohowstudentsinteractwithcoursecontentsandactivities.Additionally,tex-
 tualfeedbackcanbeprocessedusingnaturallanguageprocessingtechniquestouncover
 commonthemes,sentiments,andareasofconcern[15-17]. 
 Despitetheincreasedadoptionoflearninganalyticsincourseevaluation,thereremains
 alackofsystematicanalysesofthepatternsandpracticesassociatedwithitsimplementa-
 tion.Thisstudyseekstoaddressthisresearchgapbyexamininghowlearninganalyticshas
 beenappliedincourseevaluationwithinhighereducationinstitutions,aswellasidentify-
 ingeffectivemethodologiesandbestpracticesforleveragingdatatoenhanceeducational
 outcomes.Specifically,thestudyisguidedbythefollowingresearchquestions:
 
 1. Whataretheapplicationcategoriesoflearninganalyticsincourseevaluation?
 2. What are the features of learning analytics in course evaluation, in terms of data
 collectionmethods,analysistechniques,andtheevaluatedaspects?
 3. Whatarethe mainlimitationsinexistingstudiesfocusedonlearninganalyticsin
 courseevaluation? 
 
 2. RelatedWork 
 Course evaluation involves a systematic assessment of a course's effectiveness in
 achievingitseducationalobjectives.Thisprocesstypicallyencompassesacomprehensive
 analysisofcurriculumdesign,learningoutcomes,andinstructionalmethods[18].Existing
 researchoncourseevaluationhasaddressedabroadrangeofaspects,suchasthepurposes
 of course evaluation [5,19], the elements to assess [20-22], and the stakeholder groups
 involved in the process [23-25]. Kogan and Shea [26] have proposed a framework for
 course evaluation that integrates four key dimensions: why evaluate (goals), what is
 evaluated(processandoutcomes),whoevaluates(students,peers,andself),andwhento
 evaluate(duringthecourse,endofthecourse,andsometimeinthefuture).
 Inhighereducationsettings,studentevaluationsarethemostcommonlyemployed
 methodforcourseevaluation[11,27].Theytypicallyinvolvecollectingdatafromcourse
 evaluation questionnaires to investigate students' perspectives on the course contents,
 teachingapproaches,instructionalmethods,andtheoverallqualityofacourse.Relevant
 questionnairesoftenincludebothquantitativeitemsinaLikertscaleonteachingpractices
 andcoursecomponents,aswellasqualitative,open-endedquestionsthatallowstudents
 toprovidedetailedfeedbackandsuggestionsforimprovement[28].
 Courseevaluationisrelatedtobutdiffersfromstudentevaluationsofteachingor
 studentsatisfactionsurveys. Bothofthelatteraimtogatherfeedbackfromstudentsto
 assessinstructionalqualityandoveralllearningexperiences;however,studentevaluations
 ofteachingfocusonevaluatingtheperformanceandeffectivenessofindividualinstructors,
 offeringtargetedfeedbackonaspectssuchasclarityofexplanation,enthusiasm,availability,
 andresponsivenesstostudents'needs[29-31]. Incontrast,studentsatisfactionsurveys
 adopt a broader perspective, assessing students' perceptions and feelings about their
 
 
 
 
 
 



3

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 3of22 
 
 
 educationalexperience.Thesesurveyscovernotonlyteachingqualityandcoursedelivery,
 but also factors such as administrative support, campus facilities, and extracurricular
 activities[32]. Whilehighlevelsofstudentsatisfactionmayindicateapositivelearning
 environment,theydonotnecessarilyreflecttheeducationaleffectivenessofacourse[33].
 Furthermore,highratingsforteachingdonotalwayscorrelatewithhighratingsforthe
 courseitself[34]. 
 Advances in information technology have influenced course evaluation practices,
 particularlyregardingtheadoptionofonlineevaluationmethodsandtheevaluationof
 onlinecourses. Andersonetal.[35]havecomparedonlineandtraditionalpaper-based
 evaluationsandidentifiedtheadvantagesofonlineapproaches, includingtheefficient
 collectionoffeedback,theabilitytomaintainanonymity,andthequickgenerationand
 accessibilityofevaluationreports.Alturkistanietal.[6]conductedasystematicreviewon
 evaluationmethodsformassiveopenonlinecourses(MOOCs),highlightingkeychallenges
 suchasalackoflongitudinaldataandthelimitedconsiderationofconfoundingvariables.
 Thevastamountofdatageneratedfromonlinelearningandonlineevaluationshas
 fosteredtheapplicationoflearninganalyticsforcourseevaluation. Learninganalytics
 hasbeenappliedfortaskssuchasextractingsentimentsandsuggestionsfromstudents'
 qualitativefeedback[36],analysingstudents'onlinelearningbehavioursandinterests[37],
 andidentifyingareasforcourseimprovementbasedoninsightsfromstudents'performance
 andlearningachievements[38]. 
 Despitethegrowinguseoflearninganalyticsincourseevaluation,therehasbeena
 lackofcomprehensivereviewstudiesfocusedonthisemergingarea. Whileindividual
 studieshaveexploredvariousapplicationsoflearninganalyticsinthecontextofcourse
 
 evaluation,thereisnoconsolidatedunderstandingofhowthesetoolsarebeingutilised
 acrossdifferentcontextsandtheiroverallimpact.Acomprehensivereviewinthisareais
 neededtoprovideaholisticviewofthecurrentstateofresearch,identifybestpractices,
 andhighlightareasneedingfurtherinvestigation.Toaddressthisgap,thepresentstudy
 examinedtheempiricalliteraturefocusedontheapplicationoflearninganalyticsincourse
 evaluation,inordertocategorisetheapplicationsoflearninganalyticsinthisdomainand
 identifythepatternsofevaluationpractices,includingdatacollectionmethods,analysis
 techniques,andtheevaluatedaspects.Thisstudyaimstobridgetheexistingresearchgap
 byofferingadetailedsynthesisofhowlearninganalyticscanenhancecourseevaluation
 processes,ultimatelycontributingtomoreeffectiveanddata-driveneducationalpractices.
 3. Methodology 
 
 Thisstudyinvestigatedhowlearninganalyticscontributestothecourseevaluation
 process.ItsmethodologyfollowedthePRISMA(PreferredReportingItemsforSystematic
 Reviews and Meta-Analyses) guidelines [39], ensuring a systematic, transparent, and
 replicableapproachtoliteraturereviewanddatasynthesis. 
 3.1.SearchStrategyandScreeningMethod 
 
 RelevantresearcharticlesweresourcedfromScopus.Thispublicationdatabasewas
 selectedduetoitswidelyrecognisedutilityforconductingliteraturereviewsacrossdiverse
 disciplines[40].Ineducationaldisciplines,Scopushasbeenadoptedforreviewsintopics
 relatedtolearninganalytics[2-4]andvariouslearningapproaches[41,42].
 The database search focused on journal articles published between 2015 and 2024
 (until21October2024).Thefollowingsearchstringswereutilisedtoquerythearticletitles,
 abstracts,andkeywords: 
 
 
 
 
 
 
 
 



4

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 4of22 
 
 
 ("learninganalytics"OR"educationaldatamining"OR"machinelearning"OR"ar-
 tificialintelligence"OR"deeplearning")ANDcourseAND(evaluat*ORmeasure*OR
 assess*ORimprove*ORenhance*)AND(effectivenessORqualityORsuccess).
 Toensuretheselectionofrelevantstudies,thefollowinginclusioncriteriawereapplied:
 
 i. The study presents empirical research on the application of learning analytics for
 courseevaluation; 
 ii. ThepaperiswritteninEnglish; 
 iii. Thefulltextisaccessible; 
 iv. Datacollectionmethodsandlearninganalyticstechniquesareclearlydescribed.
 Figure 1 illustrates the search and selection process, which followed the PRISMA
 framework. Initially, atotalof3726articleswereidentifiedduringthedatabasesearch
 phase.Arigorousscreeningprocesswasconductedtoeliminateirrelevantarticles,during
 which the titles and abstracts of each paper were scrutinised to verify their alignment
 withtheinclusioncriteria. Asaresult,3583recordswereexcludedatthisstage. Inthe
 subsequenteligibilityassessment,129recordswereretainedforfull-textexamination.This
 stepledtotheexclusionof95recordsthatfailedtomeetthedefinedcriteria. Notably,
 articlesprimarilyfocusedonstudentsatisfactionorstudentevaluationofteachingwere
 excluded,astheseconceptsdiffersubstantiallyfromcourseevaluation,asdiscussedinthe
 previoussection.Thisselectionprocessensuredafocusoncourseevaluationandavoided
 conceptualoverlaps.Finally,34articleswereselectedforinclusioninthereview.
 Sustainability 2025, 17, x FOR PEER REVIEW 4 of 22 
 The database search focused on journal articles published between 2015 and 2024
 (until 21 October 2024). The following search strings were utilised to query the article ti-
 tles, abstracts, and keywords: 
 ("learning analytics" OR "educational data mining" OR "machine learning" OR "ar-
 tificial intelligence" OR "deep learning") AND course AND (evaluat* OR measure* OR
 assess* OR improve* OR enhance*) AND (effectiveness OR quality OR success).
 To ensure the selection of relevant studies, the following inclusion criteria were ap-
 plied: 
 i. The study presents empirical research on the application of learning analytics for
 course evaluation; 
 ii. The paper is written in English; 
 iii. The full text is accessible; 
 iv. Data collection methods and learning analytics techniques are clearly described.
 Figure 1 illustrates the search and selection process, which followed the PRISMA
 framework. Initially, a total of 3726 articles were identified during the database search
 phase. A rigorous screening process was conducted to eliminate irrelevant articles, during
 which the titles and abstracts of each paper were scrutinised to verify their alignment with
 the inclusion criteria. As a result, 3583 records were excluded at this stage. In the subse-
 quent eligibility assessment, 129 records were retained for full-text examination. This step
 led to the exclusion of 95 records that failed to meet the defined criteria. Notably, articles
 primarily focused on student satisfaction or student evaluation of teaching were excluded,
 as these concepts differ substantially from course evaluation, as discussed in the previous
 section. This selection process ensured a focus on course evaluation and avoided concep-
 tual overlaps. Finally, 34 articles were selected for inclusion in the review.
 
 Figure 1. Procedures for the search and selection of relevant publications. Figure1.Proceduresforthesearchandselectionofrelevantpublications.
 
 Figure2presentsthenumberofstudiespublishedannuallyfrom2015to2024,high-
 lightinganoverallupwardtrendovertheyears. Theearlyyearssawminimalrelevant
 
 
 
 
 
 



5

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 5of22 
 
 
 activities,withonlyatotalof4articlespublishedbetween2015and2018. However,rel-
 evantstudiesbegangainingtractionfrom2019,culminatinginapeakofinterestduring
 2021and2022.Althoughaslightdeclinewasobservedin2023,thesustainedinterestand
 ongoingresearchsuggestapromisingoutlookfor2024. Thispatternreflectsagrowing
 recognitionandexplorationoflearninganalyticsasanintegraltoolforenhancingcourse
 evaluationinrecentyears. 
 Sustainability 2025, 17, x FOR PEER REVIEW 5 of 22 
 Figure 2 presents the number of studies published annually from 2015 to 2024, high-
 lighting an overall upward trend over the years. The early years saw minimal relevant
 activities, with only a total of 4 articles published between 2015 and 2018. However, rele-
 vant studies began gaining traction from 2019, culminating in a peak of interest during
 2021 and 2022. Although a slight decline was observed in 2023, the sustained interest and
 ongoing research suggest a promising outlook for 2024. This pattern reflects a growing
 recognition and exploration of learning analytics as an integral tool for enhancing course
 evaluation in recent years. 
 
 
 
 Figure 2. Number of relevant studies in each year from 2015 to 2024.
 3.2. Data Analysis 
 
 To analyse the 34 selected articles, a content analysis approach was employed. Each
 article was examined to extract and categorise information on the features of learning an-
 alytics approaches used in course evaluation. Based on the analytics techniques reported
 in the reviewed studies, six categories of learning analytics applications for course evalu-
 ation were identified. The analysis focused on (i) the types, sources, and size of data used
 for learning analytics; (ii) the aspects of courses being evaluated; (iii) the analysis tech-
 niques applied; and (iv) the limitations addressed in the studies. The coding process was
 conducted collaboratively by two researchers to ensure reliability. One researcher was re-
 sponsible for identifying and categorising relevant information, while the other reviewed
 and verified the categorisation. Any discrepancies were resolved through further discus-
 sion and review until a consensus was reached. Finally, the features of learning analytics
 approaches for course evaluation were analysed based on the coding results.
 
 4. Applications of Learning Analytics for Course Evaluation 
 Figure 3 illustrates the six categories of learning analytics applications in course eval-
 uation. Note that some studies utilised multiple applications. The most prevalent category
 was sentiment analysis, appearing in 14 studies. This was followed by questionnaire anal-
 ysis with 11 studies and engagement analysis with 10 studies. The remaining categories
 included topic classification and predictive modelling, each appearing in 7 studies, and
 performance analysis, which was used in 4 studies. 
 0 
 1 
 2 
 1 
 5 
 2 
 7 7 
 4 
 5 
 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 
 N u 
 m 
 b 
 e 
 r 
 of 
 s t 
 u 
 di 
 e 
 s 
 Figure2.Numberofrelevantstudiesineachyearfrom2015to2024. 
 3.2.DataAnalysis 
 Toanalysethe34selectedarticles,acontentanalysisapproachwasemployed.Each
 article was examined to extract and categorise information on the features of learning
 analyticsapproachesusedincourseevaluation.Basedontheanalyticstechniquesreported
 inthereviewedstudies,sixcategoriesoflearninganalyticsapplicationsforcourseeval-
 uationwereidentified. Theanalysisfocusedon(i)thetypes, sources, andsizeofdata
 usedforlearninganalytics; (ii)theaspectsofcoursesbeingevaluated; (iii)theanalysis
 techniquesapplied;and(iv)thelimitationsaddressedinthestudies.Thecodingprocess
 was conducted collaboratively by two researchers to ensure reliability. One researcher
 was responsible for identifying and categorising relevant information, while the other
 reviewedandverifiedthecategorisation.Anydiscrepancieswereresolvedthroughfurther
 discussion and review until a consensus was reached. Finally, the features of learning
 analyticsapproachesforcourseevaluationwereanalysedbasedonthecodingresults.
 4. ApplicationsofLearningAnalyticsforCourseEvaluation 
 Figure3illustratesthesixcategoriesoflearninganalyticsapplicationsincourseevalu-
 ation.Notethatsomestudiesutilisedmultipleapplications.Themostprevalentcategory
 wassentimentanalysis,appearingin14studies.Thiswasfollowedbyquestionnaireanal-
 ysiswith11studiesandengagementanalysiswith10studies.Theremainingcategories
 includedtopicclassificationandpredictivemodelling,eachappearingin7studies,and
 performanceanalysis,whichwasusedin4studies. 
 Sustainability 2025, 17, x FOR PEER REVIEW 6 of 22 
 Figure 3. Distribution of studies in each application category.
 Figure 4 depicts the adoption of various learning analytics applications across two
 distinct periods: 2015-2019 and 2020-2024. Despite the number of studies being much
 larger in the latter period, the proportion of learning analytics applications reveals the
 focus of development in each period. During the earlier period (2015-2019), engagement
 analysis was most frequently used, followed by questionnaire analysis. In contrast, the
 period from 2020 to 2024 marks a significant shift in the types of learning analytics appli-
 cations used for course evaluation. Sentiment analysis emerged as the most dominant ap-
 plication, underscoring a growing emphasis on understanding student sentiment and its
 role in improving educational experiences. While questionnaire analysis remained the
 second most frequent type of application, its growth was more modest compared to the
 surge in sentiment analysis. The other types of application (engagement analysis, topic
 classification, predictive modelling, and performance analysis) also showed a notable in-
 crease in number, demonstrating comprehensive growth in the use of all types of learning
 analytics applications for course evaluation. 
 Figure 4. Trends in learning analytics applications across two time periods.
 4.1. Sentiment Analysis 
 Sentiment analysis, also known as opinion mining, examines natural language frag-
 ments to identify and classify the emotional attitudes expressed within a text [43,44].
 Through a systematic examination of students' textual feedback, educators can gain in-
 sights into their emotional responses and pinpoint possible areas of frustration or confu-
 sion. These insights help to create a responsive, engaging, and effective learning environ-
 ment. 
 14 
 11 
 10 
 7 
 7 
 4 
 Sentiment analysis 
 Questionnaire analysis 
 Engagement analysis 
 Topic classification 
 Predictive modelling 
 Performance analysis 
 Number of studies 
 2 
 12 
 3 
 8 
 4 
 6 
 2 
 5 
 2 
 5 
 1 
 3 
 2015-2019 2020-2024 
 Sentiment analysis 
 Questionnaire analysis
 Engagement analysis 
 Topic classification
 Predictive modelling
 Performance analysis
 Figure3.Distributionofstudiesineachapplicationcategory. 



6

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 6of22 
 
 
 Figure4depictstheadoptionofvariouslearninganalyticsapplicationsacrosstwo
 distinctperiods: 2015-2019and2020-2024. Despitethenumberofstudiesbeingmuch
 largerinthelatterperiod,theproportionoflearninganalyticsapplicationsrevealsthefocus
 ofdevelopmentineachperiod.Duringtheearlierperiod(2015-2019),engagementanalysis
 was most frequently used, followed by questionnaire analysis. In contrast, the period
 from2020to2024marksasignificantshiftinthetypesoflearninganalyticsapplications
 usedforcourseevaluation.Sentimentanalysisemergedasthemostdominantapplication,
 underscoring a growing emphasis on understanding student sentiment and its role in
 improvingeducationalexperiences. Whilequestionnaireanalysisremainedthesecond
 mostfrequenttypeofapplication,itsgrowthwasmoremodestcomparedtothesurgein
 sentimentanalysis.Theothertypesofapplication(engagementanalysis,topicclassifica-
 tion,predictivemodelling,andperformanceanalysis)alsoshowedanotableincreasein
 number,demonstratingcomprehensivegrowthintheuseofalltypesoflearninganalytics
 applicationsforcourseevaluation. 
Sustainability 2025, 17, x FOR PEER REVIEW 6 of 22 
 Figure 3. Distribution of studies in each application category. 
 Figure 4 depicts the adoption of various learning analytics applications across two
 distinct periods: 2015-2019 and 2020-2024. Despite the number of studies being much
 larger in the latter period, the proportion of learning analytics applications reveals the
 focus of development in each period. During the earlier period (2015-2019), engagement
 analysis was most frequently used, followed by questionnaire analysis. In contrast, the
 period from 2020 to 2024 marks a significant shift in the types of learning analytics appli-
 cations used for course evaluation. Sentiment analysis emerged as the most dominant ap-
 plication, underscoring a growing emphasis on understanding student sentiment and its
 role in improving educational experiences. While questionnaire analysis remained the
 second most frequent type of application, its growth was more modest compared to the
 surge in sentiment analysis. The other types of application (engagement analysis, topic
 classification, predictive modelling, and performance analysis) also showed a notable in-
 crease in number, demonstrating comprehensive growth in the use of all types of learning
 analytics applications for course evaluation. 
 
 Figure 4. Trends in learning analytics applications across two time periods.
 
 4.1. Sentiment Analysis 
 
 Sentiment analysis, also known as opinion mining, examines natural language frag-
 ments to identify and classify the emotional attitudes expressed within a text [43,44].
 Through a systematic examination of students' textual feedback, educators can gain in-
 sights into their emotional responses and pinpoint possible areas of frustration or confu-
 sion. These insights help to create a responsive, engaging, and effective learning environ-
 
 ment. 
 14 
 11 
 10 
 7 
 7 
 4 
 Sentiment analysis 
 Questionnaire analysis 
 Engagement analysis 
 Topic classification 
 Predictive modelling 
 Performance analysis 
 Number of studies 
 2 
 12 
 3 
 8 
 4 
 6 
 2 
 5 
 2 
 5 
 1 
 3 
 2015-2019 2020-2024 
 Sentiment analysis 
 Questionnaire analysis 
 Engagement analysis 
 Topic classification 
 Predictive modelling 
 Performance analysis 
 Figure4.Trendsinlearninganalyticsapplicationsacrosstwotimeperiods.
 4.1.SentimentAnalysis 
 Sentimentanalysis,alsoknownasopinionmining,examinesnaturallanguagefrag-
 ments to identify and classify the emotional attitudes expressed within a text [43,44].
 Throughasystematicexaminationofstudents'textualfeedback,educatorscangainin-
 sightsintotheiremotionalresponsesandpinpointpossibleareasoffrustrationorconfusion.
 Theseinsightshelptocreatearesponsive,engaging,andeffectivelearningenvironment.
 Table 1 summarises the applications of learning analytics reported in the selected
 studiesforsentimentanalysis.Thesestudiesleverageavarietyofdata,includingMOOC
 reviews,studentreflections,andopen-endedfeedbackfromquestionnaires.Thesample
 sizesacrossthesestudiesvaryconsiderably,rangingfromasfewas118open-endedre-
 sponsesfrom42studentstoover217,000coursereviewcomments,reflectingthescalability
 ofsentimentanalysistechniquesacrossdifferentcontexts.Notably,onlytwostudiesexplic-
 itlyspecifiedtheevaluatedaspects,focusingoneducationalexperiencessuchaslearning
 contentandresources,teachingmethods,lecturequality,andassessment.Theseaspects
 arefundamentalforidentifyingactionableinsightstoenhanceeducationalprocesses.



7

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 7of22 
 
 
 Table1.Summaryoflearninganalyticsapplicationsforsentimentanalysis.
 
 Ref. DataType DataSource SampleSize 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [45] 
 Students' 
 textual 
 comments 
 Course 
 reviewson 
 China 
 University 
 MOOC 
 platform 
 11,293reviews N/A 
 Convolutional 
 Neural 
 Network 
 (CNN),Long 
 Short-Term 
 Memory 
 Capturingnuanced 
 sentimentscanbe 
 challengingdueto 
 diverseexpressions. 
 [46] 
 Students' 
 textual 
 comments 
 Course 
 reviewson 
 China 
 University 
 MOOC 
 platform 
 217,778review 
 comments 
 Course 
 content, 
 teaching 
 methods, 
 lecture, 
 assessment 
 SBSA 
 leveragingthe 
 BERTmodel, 
 andABSA 
 employingthe 
 LCF-ATEPC 
 model 
 Currentmodelonly 
 identifiesnegativeand 
 positiveemotions, 
 missingneutralones. 
 [47] 
 Students' 
 textual 
 comments 
 Course 
 reviewson 
 China 
 University 
 MOOC 
 platform 
 9944reviews N/A 
 BERT- 
 BiLSTM- 
 Attention 
 Usingtextalonefor 
 sentimentanalysislimits
 theabilitytocapture 
 emotionalnuances 
 presentedinaudioand 
 visualmodalities. 
 [48] 
 Students' 
 textual 
 comments 
 MOOC 
 platform 
 (http://open. 
 163.com/) 
 1850reviews N/A 
 Multi-swarm 
 particle 
 swarm 
 optimisation 
 (MSPSO) 
 method 
 Lackofaspecialised 
 sentimentlexiconand 
 appraisalexpressions 
 forlearnersinMOOCs. 
 [49] 
 Students' 
 textual 
 comments 
 Students' 
 reflection 
 questions 
 42students, 
 118open- 
 ended 
 responsesets 
 N/A 
 Unsupervised 
 machine 
 learning 
 • 
 Termsmaybe 
 inaccurately 
 labelleddueto 
 insufficient 
 contextual 
 assessmentand 
 relianceon 
 lexicons; 
 • 
 Unsupervised 
 learninglacks 
 depthand 
 accuracy; 
 • 
 Theanalysis 
 focusedonterms 
 withinconsistent 
 sentimentvalues, 
 limitingtheoverall 
 scope. 
 [50] 
 Students' 
 open-ended 
 feedback 
 Student 
 questionnaire 1603phrases 
 Instructor, 
 lecture, 
 textbook, 
 exams, 
 homework, 
 course 
 management 
 portal,office 
 hours,labs 
 GoogleCloud 
 Platform's 
 Sentiment 
 AnalysisAPI 
 • 
 Limiteduser 
 autonomyinterms 
 ofinputand 
 customisation 
 options; 
 • 
 Transitioningtoa 
 web-basedformat 
 mayintroduce 
 technical 
 difficulties. 
 Awiderangeofanalysismethodsandtoolshavebeenemployedinsentimentanalysis,
 withdeeplearningtechniquesbeingthemostcommonlyutilised,especiallyfortheanalysis
 of MOOC reviews. For instance, Refs. [45,46] adopted Convolutional Neural Network
 (CNN)andLongShort-TermMemory(LSTM)models,whileRef.[46]alsoincorporated



8

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 8of22 
 
 
 BERT and the LCF-ATEPC model for sentiment- and aspect-based sentiment analysis,
 respectively.HuangandRaga[47]haveimplementedaBERT-BiLSTM-Attentionmodel,
 whichcombinesthecontextualstrengthsofBERTwiththesequentialprocessingcapabilities
 ofBiLSTMandattentionmechanisms.Theirmodelcanaccountforthemajorcomponents
 ofatext,resultinginahighlyrobustframeworkforsentimentanalysis.
 Machinelearningtechniqueshavebeenalsowidelyutilisedinsentimentanalysis.
 For example, Liu et al. [48] have employed the multi-swarm particle swarm optimisa-
 tion(MSPSO)methodtoenhancesentimentrecognitioninonlinecoursereviews. This
 methodreducesfeatureredundancyandselectsdiscriminativeemotionalfeaturesthrough
 optimised feature selection using a binary vector encoding strategy. Roy and Rambo-
 Hernandez[49]haveusedunsupervisedmachinelearningmethodstouncoverpatterns
 andsentimentsinstudentreflectionsoncourseactivities. Theirapproachincorporated
 external references, such as lexicons, to support the sentiment analysis. Additionally,
 cloud-basedtools,suchastheGoogleCloudPlatform'sSentimentAnalysisAPI,havebeen
 appliedtoanalysesentimentsinstudentfeedback,showcasingtheintegrationofscalable,
 cloud-basedservicesineducationalanalytics[50]. 
 
 4.2.PredictiveModelling 
 Predictive modelling has become a key focus in learning analytics, reflecting the
 increasingsignificanceofdata-drivendecisionmakingineducationalsettings[51]. This
 approachleveragesstatisticaltechniquesandmachinelearningalgorithmstoanalysedata
 andpredicteducational outcomes, empoweringeducators torefineteachingstrategies
 basedonactionableinsights.Table2providesanoverviewofthevariouslearninganalytics
 applicationsemployedforpredictivemodelling. 
 
 Table2.Summaryoflearninganalyticsapplicationsforpredictivemodelling.
 
 Ref. DataType DataSource 
 Sample 
 Size 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [52] 
 Priorknowledge, 
 demographic 
 information, 
 participationand 
 learningvariables, 
 academic 
 achievement 
 University 
 records,LMS, 
 question- 
 naires 
 Five 
 courses, 
 722 
 students 
 Overall 
 effectiveness 
 onlearning 
 outcomes 
 Multiple 
 regression 
 analysis,factor 
 analysis 
 Insufficient 
 assessmentofthe 
 reliabilityofaffective
 andmotivational 
 itemsinweb-based 
 courses. 
 [53] 
 Student 
 demographics, 
 background,course 
 enrolment 
 numbers,course 
 assessmentdata, 
 experiencewith 
 onlinecourses, 
 academicrecords, 
 participationlevels 
 inLMS 
 Student 
 information 
 database, 
 institutional 
 databases, 
 LMS 
 One 
 course, 
 214 
 students 
 Instructional 
 modalities, 
 student 
 engagement, 
 assessment 
 methods 
 Machinelearning 
 techniquessuch 
 asrandomforests 
 andlasso 
 regression 
 Thepresenceof 
 missingdatamay 
 affecttheresults. 



9

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 9of22 
 
 
 Table2.Cont. 
 
 Ref. DataType DataSource 
 Sample 
 Size 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [14] 
 Studentlogdata, 
 satisfactionscores 
 MOOC 
 platform, 
 student 
 questionnaire 
 16 
 courses, 
 6016 
 students, 
 308,517,712 
 learning 
 be- 
 haviour 
 data 
 Workload, 
 need 
 fulfilment, 
 intelligibility, 
 instructor 
 style,and 
 student 
 engagement 
 Deepneural 
 network(DNN) 
 withregression 
 Lackofconsideration 
 forvariationsin 
 coursecontentand 
 difficulty,whichmay 
 impactstudent 
 engagement. 
 [17] 
 Students'textual 
 comments 
 MOOC 
 reviews 
 dataset 
 66,000 
 reviews 
 Learning 
 contentand 
 resources 
 Supervised 
 learning 
 algorithms:naïve 
 Bayes,support 
 vectormachines, 
 logistic 
 regression, 
 k-nearest 
 neighbours,and 
 randomforest 
 algorithm; 
 ensemble 
 learningmethods: 
 AdaBoost, 
 Bagging,Random 
 Subspace,voting, 
 andStacking 
 Thestudy 
 emphasises 
 classification 
 accuracyasa 
 primaryevaluation 
 metric.Other 
 metrics,suchas 
 precision,recall,and
 F1-score,could 
 provideamore 
 comprehensive 
 assessmentofmodel 
 performance, 
 especiallyin 
 imbalanceddatasets. 
 [54] 
 Students'textual 
 comments 
 Twitter 
 dataset 
 162,969 
 tweets N/A 
 Bi-LSTM,logistic 
 regression, 
 supportvector 
 machine,and 
 naïveBayes 
 classifier 
 • 
 Lackof 
 contextual 
 analysis,which 
 canalter 
 sentiment 
 interpretation; 
 • 
 The 
 effectivenessof 
 hyperparameter 
 tuningwasnot 
 thoroughly 
 explored, 
 possibly 
 limitingmodel 
 performance 
 insights. 
 [55] 
 Students'textual 
 comments 
 Bangladeshi 
 learning 
 websites 
 12,536 
 data 
 points 
 Qualityof 
 instruction, 
 overallcourse 
 experience 
 Transformers: 
 XLM-RoBERTa; 
 deeplearning 
 methods:CNN 
 andBi-LSTM, 
 machinelearning: 
 naïveBayes, 
 supportvector 
 machine,and 
 randomforest, 
 ensemble 
 learning,and 
 hybrid 
 approaches 
 • 
 Limiteddataset 
 diversity 
 restricts 
 comprehensive 
 sentiment 
 analysisacross 
 variedcontexts; 
 • 
 Challengesarise 
 inaccurately 
 analysing 
 sentiments 
 acrossdifferent 
 languagesand 
 cultural 
 contexts. 



10

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 10of22 
 
 
 Table2.Cont. 
 
 Ref. DataType DataSource 
 Sample 
 Size 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [56] 
 Students' 
 open-ended 
 feedback 
 Student 
 questionnaire 
 One 
 course, 
 280 
 students, 
 232text 
 data 
 points 
 N/A 
 Randomforest, 
 J48decisiontree, 
 naïveBayes,and 
 supportvector 
 machine 
 • 
 Thehighest 
 accuracy 
 achievedwas 
 63.79%, 
 indicating 
 potential 
 limitationsin 
 sentiment 
 classification; 
 • 
 Limiteddataset. 
 Arangeofdatatypesandsourceshavebeenutilisedinpredictivemodellingstudies.
 Three studies [14,52,53] relied on quantitative data, including student log data, course
 assessment scores, and demographic information. These datasets were obtained from
 platformssuchasstudentinformationsystems,learningmanagementsystems,andstudent
 questionnaires, and were used to build models that identify key predictors of course
 effectiveness.Incontrast,fourstudies[17,54-56]focusedonqualitativedata(e.g.,textual
 commentsandopen-endedfeedback)gatheredfromMOOCplatforms,learningwebsites,
 and Twitter datasets, in order to analyse students' sentiments. This diversity in data
 types and sources enables a comprehensive analysis of both behavioural patterns and
 subjectiveexperiences. 
 Theevaluationaspectsacrossthesestudiesencompassspecificeducationaloutcomes,
 suchasworkloadandstudentengagement,aswellasbroadermeasuressuchasinstruc-
 tionalqualityandoverallcourseexperience. 
 Theanalysismethodsandtoolsemployedforpredictivemodellingarealsodiverse.
 Derr[52]hasusedstatisticalmethods,includingmultipleregressionanalysisandfactor
 analysis, to identify key predictors of academic success and evaluate their impact on
 learningoutcomes.Traditionalmachinelearningtechniques,suchasrandomforestsand
 lasso regression, have been employed to predict student performance [53], while deep
 neuralnetworks(DNNs)withregression—adeeplearningtechnique—havebeenusedto
 forecaststudents'courseevaluationscores[14]. 
 Machinelearningtechniques,includingnaïveBayes,supportvectormachines,and
 randomforests,havebeenwidelyappliedtoclassifystudentsentimentintocategories
 suchaspositive/negative[17,54,56]orpositive/negative/neutral[55].Ensemblemethods,
 whichcombinemultiplemodelstoimprovepredictiveaccuracy,havealsobeenemployedin
 relevantstudies[17,55].Advanceddeeplearningtechniqueshavealsobeenusedtoanalyse
 sentiment,providingafoundationfortheimplementationofpredictivemodelling[54,55].
 4.3.QuestionnaireAnalysis 
 Questionnaireanalysisinvolvesthesystematicevaluationofdatacollectedthrough
 questionnairesdistributedtostudents,educators,orstakeholdersinaneducationalcon-
 text.Table3summarisesthestudiesthathaveemployedlearninganalytics—specifically,
 descriptiveanalyticsmethods—toanalysestudentquestionnairedata.



11

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 11of22 
 
 
 Table3.Summaryofselectedlearninganalyticsapplicationsforquestionnaireanalysis.
 
 Ref. DataType DataSource SampleSize EvaluationAspect 
 Analysis 
 Method/Tool 
 Limitation 
 [57] 
 Courserating, 
 teacherrating 
 Student 
 questionnaire 
 N/A 
 Courseorganisation, 
 content,assessment, 
 workload,learning 
 outcomes,teacher 
 Descriptive 
 analytics 
 Itsfocusonliberalarts
 limitsgeneralisability
 tootherdisciplines. 
 [58] 
 Courserating, 
 teacherrating 
 Student 
 questionnaire 
 669courses 
 and2664 
 responses 
 Courseorganisation, 
 content,assessment, 
 workload,learning 
 outcomes,teacher 
 Descriptive 
 analytics 
 • 
 Limitedfocuson 
 performingarts 
 education 
 restrictsbroader 
 applicability; 
 • 
 Exclusionofsmall 
 classdatamay 
 omitsignificant 
 insights. 
 [59] 
 Quantitative 
 and 
 qualitative 
 feedback 
 Student 
 questionnaire 
 228responses 
 Overalllearning 
 experience, 
 objectives,difficulty 
 oftheassignments, 
 material,difficulty 
 levelofthecourse, 
 livesession,virtual 
 approachofteaching, 
 performanceinthe 
 virtualmodeof 
 learning 
 Descriptive 
 analytics 
 Limitedsamplesize. 
 Lietal.[57]havefocusedonquantitativedatarelatedtocourseandteacherratings.
 Theirstudyevaluatedkeyaspectssuchascourseorganisation,content,assessmentmeth-
 ods,workload,learningoutcomes,andteachereffectiveness.Theanalysisaimedtoidentify
 coursesrequiringacloserexaminationtopinpointareasinneedofimprovement.Similarly,
 Ref.[58]analysedalargedatasetcomprising669coursesand2664studentresponses.The
 studyfocusedoncomparableevaluationcriteriaandsoughttoidentifyunderperforming
 coursesthatmightbenefitfromtargetedenhancements.Kurnietal.[59]haveadopteda
 mixed-methodsapproach,incorporatingbothquantitativeandqualitativefeedback.Us-
 ingafive-pointLikertscaleandopen-endedquestions,theygathered228responsesthat
 provideddetailedinsightsintothevirtuallearningexperience. Theyaimedtouncover
 factorsthatcouldinformthedevelopmentofeffectivepedagogicalstrategiestoenhance
 thequalityofonlinecourses. 
 4.4.EngagementAnalysis 
 Studentengagementisacrucialfactorthatprofoundlyinfluencestheircomprehension,
 learningexperience,andoverallperformancebytheendofacourse[60,61]. Therefore,
 analysingengagementisvitalformaintainingqualityinthecontextofhighereducation[62].
 Table4illustratestheapplicationsoflearninganalyticsforengagementanalysisreported
 inselectedstudies. Thelearninganalyticsforengagementanalysisincourseevaluation
 encompassed three distinct studies, each utilising data from online learning platforms.
 Thesestudiesemployedvariousdatatypesandanalysismethodstoevaluatedifferent
 aspectsofcourseeffectiveness. 



12

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 12of22 
 
 
 Table4.Summaryofselectedlearninganalyticsapplicationsforengagementanalysis.
 
 Ref. DataType DataSource SampleSize 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 
 [37] 
 Previous 
 year's 
 course's 
 average 
 grades,log 
 data 
 e-learning 
 platform 
 OpeneClass 
 40courses, 
 985students 
 Content 
 qualityand 
 quantity, 
 overallcourse 
 effectiveness 
 Ranking 
 algorithms: 
 CCA(Course 
 Classification 
 Algorithm) 
 andSUGAL 
 (Suggestion 
 Algorithm) 
 • 
 Validationlimitedto 
 oneGreek 
 university's 
 departmentaffects 
 generalisabilityof 
 findings; 
 • 
 Somecourses, 
 labelled 
 "Overlapped", 
 cannotberankedin 
 multiplealgorithm 
 runs; 
 • 
 S-Algosometimes 
 failstoclusteror 
 ranklow-order 
 courseseffectively. 
 [63] 
 Course 
 structure, 
 learnerdemo- 
 graphics, 
 performance 
 data,daily 
 eventlogs 
 edXplatform 1608students 
 Course 
 structure, 
 student 
 engagement, 
 instructional 
 methods, 
 feedback 
 mechanisms, 
 assessment 
 methods 
 Social 
 network 
 analysis, 
 descriptive 
 analytics 
 • 
 Findingsmaynot 
 applytoother 
 populationsbeyond 
 Boeingengineersin 
 workforcetraining; 
 • 
 Shortcourse 
 durationmaylimit 
 depthoflearning 
 andretentionfor 
 practicalapplication.
 [64] 
 Quantitative 
 dataon 
 behavioural 
 engagement, 
 qualitative 
 dataon 
 emotionaland 
 cognitive 
 engagement 
 Moodle, 
 personalmeta- 
 reflective 
 diaries 
 (MRDs) 
 56students, 
 9students' 
 complete 
 MRDswith 
 27,362words 
 Teaching 
 mode, 
 teaching 
 methods 
 Descriptive 
 analysis, 
 phenomeno- 
 logical 
 analysiswith 
 predefined 
 codes 
 • 
 Thenumberof 
 studentsincludedin 
 thedataanalysiswas 
 limited,duetothe 
 extensiveeffort 
 requiredforin-depth 
 manualanalysis; 
 • 
 Thestudyfocused 
 solelyonlogdata 
 fromMoodle. 
 Kazanidisetal.[37]haveanalysedthepreviousyear'saveragegradesandlogdata
 from40coursesinvolving985students.Theyfocusedonevaluatingcontentqualityand
 overallcourseeffectivenessusingrankingalgorithmssuchastheCourseClassification
 Algorithm and the Suggestion Algorithm. Ginda et al. [63] have incorporated course
 structure,learnerdemographics,performancedata,anddailyeventlogsfromasample
 of1608students.Socialnetworkanalysisanddescriptiveanalyticswereutilisedtoassess
 variousaspectsofthecourse,includingcoursestructure,studentengagement,instructional
 methods,feedbackmechanisms,andassessmentmethods.YangandGhislandi[64]have
 investigatedbehavioural,emotional,andcognitiveengagementusingdatacollectedfrom
 Moodleandstudents'personalmeta-reflectivediaries. Combiningdescriptiveandphe-
 nomenologicalanalyseswithpre-definedcodes,theyconductedanin-depthexamination
 ofteachingmodesandmethods. 
 4.5.TopicClassification 
 Topic classification is a widely used method in learning analytics for conducting
 comprehensive content analysis. This approach involves categorising and organising
 textualdatatoidentifythemesandpatternswithineducationalmaterialsorstudentfeed-



13

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 13of22 
 
 
 back[65].Table5providesanoverviewofvariouslearninganalyticsapplicationsfocused
 ontopicclassification. 
 
 Table5.Summaryofselectedlearninganalyticsapplicationsfortopicclassification.
 
 Ref. DataType DataSource SampleSize 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [15] 
 Students' 
 textual 
 comments 
 MOOCcourse 
 reviews 
 dataset 
 50courses N/A 
 LatentDirichlet 
 Allocation 
 (LDA), 
 classification 
 withthenaïve 
 Bayesalgorithm 
 Thereisaneedtoadd 
 modelperformance 
 metrics,suchas 
 inter-wordcoherencein 
 topicandinter-topic 
 coherence. 
 [66] 
 Students' 
 open-ended 
 feedback 
 Course 
 evaluation 
 survey 
 36courses, 742responses 
 Workload, 
 teaching 
 methods, 
 learning 
 support 
 Structuraltopic model 
 • 
 Usersmust 
 download,format, 
 andanalysedata 
 externallybefore 
 re-uploadingthem; 
 • 
 Thestudy 
 intentionally 
 excluded 
 collaborative 
 taggingto 
 concentrateon 
 specific 
 researchissues. 
 [67] 
 Students' 
 open-ended 
 feedback 
 Student 
 questionnaire 
 16students 
 Coursematerial, 
 platform, 
 quizzesand 
 exercises, 
 personaltutor, 
 learning 
 outcomes 
 Kanomodel 
 andthe 
 machine 
 learningtool 
 Word2Vec 
 Limitedsamplesize. 
 Lubis et al. [15] have analysed students' textual comments from a MOOC course
 reviewsdataset,examining50coursesusingtheLatentDirichletAllocationandnaïveBayes
 classificationalgorithms. Theyextracteddifferenttopicsandidentifiedtheword-topic
 probabilityundereachtopic.Grönbergetal.[66]havefocusedonstudents'open-ended
 feedbackcollectedfromacourseevaluationsurveyinvolving36coursesand742responses.
 Theyassessedworkload, teachingmethods, andlearningsupportthroughastructural
 topicmodel. Theproposedtool,calledPalaute,effectivelyidentifiedthemostcommon
 themesinstudentfeedbackandgeneratedindicatorsofhighteachingquality.Marutschke
 andHayashi[67]haveexaminedopen-endedfeedbackfromaquestionnaireinvolving
 16 students, evaluating aspects such as course material and learning outcomes. They
 employedtheKanomodelandthemachinelearningtoolWord2Vectogaininsightsinto
 studentexpectationsandtheiroveralllearningexperience. 
 4.6.IntegratedApplications 
 Atotalof12studiesutilisedintegratedapplicationsoflearninganalyticsforcourse
 evaluation,offeringacomprehensiveframeworkforassessingtheeffectivenessofcourses
 andenhancingtheoveralllearningexperience.Themostcommonapproachesincludethe
 integrationoftopicclassificationwithsentimentanalysis,aswellasthecombinationof
 engagementanalysiswithquestionnaireanalysis. 
 AsshowninTable6,thecombinationoftopicclassificationandsentimentanalysis
 focusesonanalysingqualitativedata,suchastextualcommentsfromcoursereviews[16,68]
 andfeedbackcollectedthroughquestionnaires[69,70].Thisintegratedapproachaimsto



14

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 14of22 
 
 
 implementcontentanalyticstoexplorestudents'perceptions,emotions,andexperiences
 regardingthecoursecontent,instructionalmethods,andinteractions.
 
 Table6.Summaryofselectedintegratedlearninganalyticsapplicationsfortopicclassificationand
 sentimentanalysis. 
 
 Ref. DataType DataSource SampleSize 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [16] 
 Students' 
 textual 
 comments 
 Coursereviews 
 atwebsite 
 https://www. 
 coursereport. 
 com 
 10,610reviews N/A 
 BERT(Bidirectional 
 Encoder 
 Representations 
 fromTransformers), 
 RoBERTa(Robustly 
 optimisedBERT 
 approach),and 
 XLNet(Generalised 
 Auto-regression 
 Pre-training) 
 • 
 Thecategorisationof 
 topicswasnot 
 well-focused; 
 • Thereispotentialoverlap
 interminologybetween
 differentcourses,which
 couldleadtoconfusion
 andmisinterpretationin
 theevaluationprocess.
 [68] 
 Students' 
 textual 
 comments 
 ChineseMOOC 
 platformcalled 
 GuokrWeb 
 50courses, 
 12,524reviews 
 N/A 
 Amachinelearning 
 methodcalled 
 Behaviour- 
 SentimentTopic 
 Mixture(BSTM) 
 • 
 Theneedfortailored 
 phrasesegmentationand
 sentimentannotation 
 ruleslimitsapplicability
 acrossdifferentstudies;
 • 
 Humaneffortsfor 
 textualcontentlabelling
 mayintroducebiases 
 andinconsistencies. 
 [69] 
 Students' 
 qualitative 
 feedback 
 Student 
 questionnaire 
 1067students 
 Coursecontent, 
 interactivity, 
 assessment, 
 overall 
 effectiveness 
 AFINN-111lexicons, 
 LDA 
 • 
 Lackofdemographic 
 datapreventsassessment
 ofthesample's 
 representativeness. 
 • 
 Non-nativespeakers 
 mayhavebeen 
 discouragedfrom 
 providingfeedbackor 
 offeredlessdetailed 
 responses. 
 [70] 
 Students' 
 qualitative 
 feedback 
 Student 
 questionnaire 
 2500survey 
 responses(625 
 foreachoffour 
 open-ended 
 questions) 
 Courselogistics 
 andfit,content 
 andstructure, 
 teaching 
 modality, 
 teaching, 
 assessment, 
 resources,peer 
 andteacher 
 interaction 
 LLMsGPT-4and 
 GPT-3.5 
 • 
 Datawereonlyfrom 
 onlinebiomedical 
 sciencecourses,limiting
 generalisability; 
 • 
 Thestudyexclusively 
 usedEnglish,excluding
 otherlanguagesfrom 
 analysis; 
 • 
 Resultsheavilyreliedon
 promptingtechniques,
 leadingtoinconsistent
 modelperformance; 
 • 
 Focusedprimarilyon 
 OpenAImodelswithout 
 comparingother 
 advancedmodels. 
 Withtheassistanceofdeeplearning,machinelearningmethods,andlargelanguage
 models,substantialsamplesizescanbeeffectivelyanalysed.Forexample,Koufakou[16]
 hasexamined10,610reviewsusingadvancedmodelssuchasBERT,RoBERTa(Robustly
 optimisedBERTapproach),andXLNet(GeneralisedAuto-regressionPre-training)togain
 insightsintostudentsentimentsandtopics.Liuetal.[68]haveanalysed50courseswith
 atotalof12,524reviews,employingamachinelearningtechniqueknownasBehaviour-
 SentimentTopicMixture(BSTM)toidentifythemostfrequentlydiscussedtopicsamong
 learners,analysethesentimentsassociatedwiththesetopics,andunderstandhowstudents
 engagewiththem.Additionally,inBorakati'sstudy[69],datagatheredfrom1067students
 wereanalysedthroughtheuseoftextminingtechniquesthatfocusedonidentifyingthe
 mostfrequentlyusedwords. Theanalysisalsoincludedsentimentevaluationusingthe



15

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 15of22 
 
 
 AFINN-111andsyuzhetlexicons,alongwithtopicmodellingemployingLatentDirichlet
 Allocation(LDA).Parkeretal.[70]haveanalysed2500qualitativesurveyresponsesthrough
 classification, extraction, thematic analysis, and sentiment analysis. These tasks were
 executedusingthelargelanguagemodelsGPT-4andGPT-3.5,showcasingthemodels'
 capabilitiesintermsofprocessingandinterpretingcomplextextualdataefficiently.
 Table7presentsasummaryoflearninganalyticsapplicationsfocusedonengagement
 andquestionnaireanalyses. Theseapplicationstypicallyinvolvedatasuchasstudents'
 learningactivities,quantitativeperceptionsofcoursematerials,andinteractionswithcourse
 content, obtainedfromdatasourcesincludingplatformssuchasMoodleandMOOCs,
 alongside student questionnaires and focus group discussions. The sample sizes vary,
 withstudiesofteninvolvinghundredsofstudentsacrossmultiplecourses(e.g.,659stu-
 dentsinfourcoursesor3691logfilerecordsfromasinglecourse). Evaluationaspects
 focusoncriticalelementssuchascoursedesign,communicationeffectiveness,workload
 management,andoveralllearningexperiences.Descriptivestatisticswereprimarilyem-
 ployedintheseapplications,whiledataminingtechniqueswereusedinRef.[71]totrace
 students'activities. 
 
 Table7.Summaryofselectedintegratedlearninganalyticsapplicationsforengagementandques-
 tionnaireanalyses. 
 
 Ref. DataType DataSource SampleSize EvaluationAspect 
 Analysis 
 Method/Tool 
 Limitation 
 [71] 
 Students'learning 
 activitiesand 
 quantitative 
 perceptionsofthe 
 course 
 Moodle, 
 student 
 questionnaire 
 Fourcourses, 
 659students, 
 260 
 questionnaires 
 Coursedesign, 
 contentsand 
 assignments, 
 communication, 
 workload,overall 
 learning 
 experience 
 Data 
 mining, 
 descriptive 
 statistics 
 • 
 Limitedsample 
 size; 
 • 
 Thelackofanalysis 
 oninstructor 
 characteristics 
 leavesagapin 
 understanding 
 theirimpacton 
 courseoutcomes. 
 [72] 
 Students' 
 perceptions, 
 "postedmessages" 
 intheMoodle 
 platform 
 Students' 
 questionnaire 
 survey,focus 
 group 
 discussion, 
 Moodle 
 Onecourse, 
 18students 
 Course 
 organisation, 
 resources, 
 assignments, 
 acquired 
 competences 
 Descriptive 
 statistics 
 • 
 Limitedsample 
 size; 
 • 
 Thesurveywas 
 conductedbythe 
 teacher,which 
 introducesariskof 
 bias. 
 [73] 
 Student 
 background 
 information, 
 interactionswith 
 coursematerials, 
 progressthrough 
 thecourse 
 modules,students' 
 feedback, 
 discussionforum 
 contributions 
 FutureLearn 
 MOOC 
 platform, 
 surveys 
 conductedat 
 variouspoints 
 duringthe 
 course 
 380students 
 Coursecontent 
 andmaterials, 
 learningactivities 
 Descriptive 
 analytics 
 Thecourse'shigh 
 attritionrateslimitthe
 generalisabilityof 
 findings,asonlyasmall
 subsetofengaged 
 learnersprovided 
 feedback. 
 [74] 
 Course 
 information, 
 students' 
 behaviour, 
 quantitative 
 perceptionsofthe 
 course,levelof 
 satisfactionwith 
 thecourse 
 Moodle, 
 student 
 questionnaire 
 Onecourse, 
 3691logfile 
 records 
 Organisationand 
 presentation, 
 learningobjectives 
 andassessments, 
 interpersonal 
 interaction,useof 
 technology,course 
 materials 
 Descriptive 
 analytics 
 Limitednumberof 
 coursesatonlyone 
 highereducation 
 institution. 
 AsshowninTable8,onestudy[12]integratedperformanceandquestionnaireanalyses
 forcourseevaluation.Theauthorsembeddedalearninganalyticstoolwithinthelearning



16

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 16of22 
 
 
 management system to enhance advising and support throughout the academic year.
 Unlike the traditional reliance on grades, this tool provides real-time data to multiple
 stakeholders,facilitatingmeaningfuldiscussionsaboutlearningobjectivesandidentifying
 areasforcourseimprovement. 
 
 Table8.Summaryofastudyutilisingintegratedlearninganalyticsapplicationforperformanceand
 questionnaireanalyses. 
 
 Ref. DataType DataSource SampleSize 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [12] 
 Courseobjectiveswith 
 correspondingoverall 
 studentachievement 
 percentages,students' 
 quantitativeperceptions 
 ofthecourseand 
 instructors 
 Desire2Learn 
 Brightspace 
 LMS,student questionnaire 
 50students 
 Teachingstyles, 
 coursecontent, 
 alignment 
 between 
 learning 
 objectivesand 
 assessments 
 Descriptive 
 analysis 
 • 
 Limitedsample 
 size; 
 • 
 Lackof 
 qualitative 
 insights. 
 Table9summarisestheintegratedlearninganalyticsapplicationsusedforengagement,
 questionnaire,andperformanceanalysesinthecontextofcourseevaluation.Notably,all
 threestudieswereconductedduringtheCOVID-19pandemic,focusingonthetransition
 fromface-to-facetoonlinecoursedelivery. Theseapplicationsalignwithotherresearch
 indicatingthatstudentengagement,performance,andperceptionsarecrucialelements
 ofonlinecourseexperiences[75,76]. Whilelearninganalyticswereappliedforvarious
 purposes,onlydescriptiveanalysiswasutilisedacrossthesestudies.
 Table9.Summaryofselectedintegratedlearninganalyticsapplicationsforengagement,question-
 naire,andperformanceanalyses. 
 Ref. DataType DataSource SampleSize 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [13] 
 Student 
 performance, interactions 
 withcourse 
 materialsand 
 activitieson 
 LMS, 
 evaluationsof 
 thecourse 
 Academicrecords, 
 LMS,student 
 questionnaire 
 Sixcourses 
 fromeachof 
 twoacademic 
 years,300 
 students 
 Contentquality, 
 teaching 
 methods,skills 
 development, 
 student 
 involvement, 
 curriculum 
 structure, 
 feedback 
 mechanisms 
 Descriptive 
 analysis 
 • 
 Limitedsamplesize; 
 • 
 Findingsfromthe 
 emergencyremote 
 teachingcontextmay 
 notbegeneralisableto
 well-plannedonline 
 learningenvironments.
 [77] 
 Student 
 performance, 
 satisfactionand 
 engage- 
 ment/behaviour 
 assessment 
 results,student 
 evaluationsof 
 learningand 
 teaching, 
 learning 
 activities 
 Canvas,student 
 questionnaire 
 98learners 
 Learning 
 objectives, 
 course 
 organisation, 
 strategies, 
 resourcesand 
 technologies, 
 assessment 
 methods, 
 feedback, 
 overall 
 satisfaction 
 Descriptive 
 analytics 
 • 
 Thestudy'sfindings 
 arelimitedtothe 
 FoundationsofWine 
 Sciencecourse, 
 reducingtheir 
 generalisabilityto 
 othersubjectsor 
 disciplines. 
 • 
 Theresearchexamines 
 theshiftfrom 
 face-to-facetoonline
 learning,whichmay 
 introduceconfounding
 factorsaffecting 
 studentexperiences. 



17

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 17of22 
 
 
 Table9.Cont. 
 
 Ref. DataType DataSource SampleSize 
 Evaluation 
 Aspect 
 Analysis 
 Method/Tool 
 Limitation 
 [78] 
 Students' 
 performance, 
 behaviour, 
 student 
 opinionsfrom 
 surveys, 
 interactiondata 
 Course 
 management 
 system,Google 
 Analyticsand 
 WeeblyAnalytics, 
 YouTubeAnalytics, 
 student 
 questionnaire 
 52students 
 Learning 
 outcomes, 
 technology 
 integration, 
 course 
 structure 
 Descriptive 
 analytics 
 Lackofconsiderationfor
 technologyaccess,support
 resources,andfamily 
 context. 
 5. Discussion 
 The findings of this study illuminate the features and trends associated with the
 application of learning analytics for course evaluation. They contribute to advancing
 practicesusinglearninganalyticstoassesscourseeffectiveness,providinginsightsinto
 thecurrentstateofdevelopmentandidentifyingfutureresearchneedsinthisarea. The
 researchquestionsofthisstudyarerevisitedandaddressedbelow,inaccordancewiththe
 insightsderivedfromthefindings. 
 Research question 1: What are the application categories of learning analytics in
 courseevaluation? 
 Intherealmoflearninganalyticsforcourseevaluation,sixprimaryapplicationcate-
 gorieswereidentified,withsentimentanalysisemergingasthemostprominent.Itsusage
 hasseenasignificantincreasefrom2020to2024,underscoringitsgrowingimportancein
 capturingandinterpretingstudentemotionsandopinionstoenhancecourseeffectiveness.
 Thissurgecanbeattributedtoadvancementsincutting-edgeAIalgorithmsduringthis
 period[79].However,sentimentanalysisisnotwithoutchallenges,includingdifficultiesin
 interpretingcontext,sarcasm,complexlanguage,andmixedsentiments,whichcanleadto
 misclassificationandinaccuraciesinfeedbackanalysis[44,80].
 Followingsentimentanalysisisquestionnaireanalysis,withthreeandeightinstances
 recordedinthetwoperiods,respectively.Thisdemonstratesitscontinuedrelevanceasa
 toolforgatheringstructuredfeedbackfromstudents. Engagementanalysisrankednext
 (with10instancesintotal),highlightingthecriticalroleofassessingstudentinteraction
 and participation in course evaluation. Notably, engagement analysis was the leading
 applicationduringthe2015-2019period,likelyduetothelimitedtechnologicaladvance-
 mentsatthattime. Metricssuchasattendance, participation, andactivitytrackingare
 morestraightforwardtomeasureandanalyse,comparedtothecomplexitiesofsentiment
 analysis,makingengagementanalysisfoundationalintheearlystagesoflearninganalytics.
 Topic classification and predictive modelling each accounted for seven instances,
 showcasingtheirutilityinorganisingqualitativefeedbackandforecastingcourseeffective-
 ness,respectively.Finally,performanceanalysiswastheleastprevalentcategory,typically
 usedinconjunctionwithotherapplications.Thisintegrationoffersamorecomprehensive
 understandingofstudentoutcomesandcomplementsinsightsgainedfromengagement
 andquestionnaireanalysis. 
 Researchquestion2:Whatarethefeaturesoflearninganalyticsinthesepractices,in
 termsofdatacollectionmethods,analysistechniques,andevaluatedaspects?
 Themostcommondatasourceforcourseevaluationisstudentquestionnaires,which
 collect both qualitative data through open-ended questions and quantitative data via
 Likertscalesorratingsforcoursesandinstructors.Typicallyadministeredattheendofa
 course,studentquestionnairesprovidevaluableinsights;however,itisworthnotingthat
 onlyonestudyconductedsurveysatvariouspointsduringthecourse[73]. Inaddition
 to questionnaires, learning management systems, MOOC platforms, and educational



18

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 18of22 
 
 
 websitesserveascommondatasources.Theseplatformsprovideinformationonlearner
 demographics,behaviours,andperformance.Theaccessibilityofthesedatahasincreased
 withtheriseofonlinelearning,offeringmoreobjectiveperspectivesforcourseevaluation.
 Intermsoflearninganalyticstechniques,descriptiveanalysiswasthemostcommonly
 used,particularlyforquestionnaire,engagement,andperformanceanalyses. Moread-
 vancedtechniques,suchasmachinelearningapproaches,havebeenemployedfortasks
 including sentiment analysis, topic classification, and predictive modelling. Emerging
 artificialintelligencetools,includinglargelanguagemodelssuchasGPT-4andGPT-3.5,
 havebeenutilisedforclassification,extraction,thematicanalysis,andsentimentanalysisof
 qualitativefeedback.Additionally,socialnetworkanalysishasbeencarriedouttoexamine
 studentengagement. 
 Courseevaluationencompassesseveralcriticalaspectsthatcontributetotheoverall
 learningexperienceandeffectiveness,aligningwiththeprimarygoalsofevaluation.Key
 elementsincludecoursedesign,contentquality,assignments,andinstructionalmethods,all
 ofwhichsignificantlyinfluencestudentengagementandlearningoutcomes.Factorssuch
 aseffectivecommunication,manageableworkload,andtheorganisationofcoursematerials
 areevaluatedtofosterapositiveeducationalenvironment.Moreover,assessmentmethods
 andfeedbackmechanismsaremonitoredtotrackstudentprogressandensurealignment
 with learning objectives, while the integration of technology and interactive resources
 is assessed to enhance the online learning experience. Typically, the aspects evaluated
 are specified through structured student questionnaires or the intentional collection of
 behavioural data via learning platforms. In contrast, students' textual comments are
 generallyprovidedfreely,withoutspecificguidance,whichmeanstheymaynotclearly
 
 specifytheevaluatedaspects.Whilethisunstructuredfeedbackallowsforrich,nuanced
 insights, it can also introduce ambiguity and make it challenging to derive actionable
 conclusions[81]. 
 Researchquestion3: Whatarethemainlimitationsinexistingstudiesfocusedon
 learninganalyticsincourseevaluation? 
 The studies examining the application of learning analytics in course evaluation
 revealedseveralkeylimitationsthathindertherobustnessandgeneralisabilityoftheir
 findings. One prominent issue is limited sample sizes, which often restrict the ability
 todrawbroadconclusionsthatareapplicabletodiversepopulations. Additionally,the
 relianceonsurveysconductedbyinstructorsintroducespotentialbias,asstudentsmight
 tailortheirfeedbackbasedonperceptionsoftheinstructor'sexpectations.Moreover,while
 lexicon-basedapproachesarecriticalforsentimentanalysis,theabsenceofaspecialised
 sentimentlexiconforstudentreviewcommentshamperstheeffectivenessofthismethod.
 Thisgapcanleadtoinsufficientcontextualanalysisandinaccuraciesinsentimentinter-
 pretation,resultingininconsistenciesacrossdifferentstudies.Furthermore,thefocuson
 specificsubjects—suchasliberalartsorbiomedicalsciences—limitstheapplicabilityof
 theobtainedfindingstootherdisciplines,potentiallyoverlookingvaluableinsightsfroma
 broadereducationalcontext. 
 Anothersignificantlimitationistherelianceonquantitativemeasures,whichmay
 notfullycapturethecomplexitiesofstudentexperiences.Whiledescriptiveandadvanced
 analyticaltechniquessuchasmachinelearningoffervaluableinsights,theyoftenfallshort
 inaddressingthenuancedemotionalresponsesoflearners.Sentimentanalysisfrequently
 categorisestextintojusttwoorthreesentimenttypes,reducingthedimensionalityofthe
 dataandpotentiallyoverlookingmoremeaningfuldetails. Additionally, challengesin
 analysingsentimentsacrossdifferentlanguagesandculturalcontextsfurthercomplicate
 theevaluationprocess.Collectively,theselimitationsunderscoretheneedformorecom-
 
 
 
 
 
 
 



19

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 19of22 
 
 
 prehensiveandinclusiveapproachesinfutureresearchfocusedonlearninganalyticsfor
 courseevaluation. 
 
 6. Conclusions 
 This study contributes to the growing body of literature on learning analytics by
 systematicallyexaminingitsapplicationsincourseevaluation.ByadheringtothePRISMA
 guidelines,theresearchensuredarigorousandtransparentmethodology,allowingfora
 comprehensivesynthesisofrelevantstudies.Theidentificationofsixprimaryapplication
 categories—includingsentimentanalysis,questionnaireanalysis,engagementanalysis,
 topicclassification,predictivemodelling,andperformanceanalysis—highlightsthediver-
 sityofapproachesemployedintheevaluationofcourseeffectiveness. Furthermore,the
 explorationofdatacollectionmethodsandanalyticstechniquesprovidedinsightsintohow
 learninganalyticscanbeleveragedtoenhanceeducationalpractices.Overall,thefindings
 ofthisresearchunderscorethesignificanceoflearninganalyticsinunderstandingstudent
 experiencesandimprovingcoursedesign,ultimatelyfosteringbetterlearningoutcomes.
 Thefindingsofthisstudyofferimplicationsforeducatorsandinstitutionsseekingto
 
 implementlearninganalyticseffectively.Byrevealingthepredominantrelianceonstudent
 questionnairesandtheincreasingprominenceofsentimentanalysis,thisstudyemphasises
 theneedforinstitutionstoadoptmorenuancedapproachestodatacollectionandanalysis.
 Additionally, theinsightsgainedthroughtheevaluationofdifferentlearninganalytics
 techniquescanguideeducatorsinselectingappropriatemethodsfortheirspecificcontexts.
 Thestudyalsohighlightedtheimportanceofaddressingthelimitationsassociatedwith
 currentresearch,suchastheneedforspecialisedsentimentlexiconsandtheexploration
 ofqualitativedata,inordertoenhancetherobustnessandapplicabilityoftheobtained
 findingstodiverseeducationalsettings. 
 Thepresentstudywaslimitedbyitsrelianceonaspecifictimeframeanddatabase,
 focusingexclusivelyonarticlespublishedwithinthepastdecadeinScopus. Thismay
 restrictthebreadthofperspectivesconsidered,potentiallyoverlookinginsightsfromother
 databasesorearlierstudies. Additionally,thestringentinclusioncriteriamayhaveled
 to the exclusion of some relevant studies, thus affecting the comprehensiveness of the
 review. Addressing these limitations in future research could provide a more holistic
 understandingoftheapplicationoflearninganalyticsacrossdifferenteducationalsettings
 andpopulations. 
 
 Funding:ThisresearchwaspartiallysupportedbyagrantfromHongKongMetropolitanUniversity
 (CP/2022/04). 
 ConflictsofInterest:Theauthorsdeclarenoconflictofinterest.
 
 References 
 1. Long,P.;Siemens,G.PenetratingtheFog:AnalyticsinLearningandEducation.Educ.Rev.2011,46,31-40.
 2. Wong,B.T.M.Learninganalyticsinhighereducation: Ananalysisofcasestudies. AsianAssoc. OpenUniv. J.2017,1,21-40.
 [CrossRef] 
 3. Wong,B.T.M.;Li,K.C.;Choi,S.P.M.Trendsinlearninganalyticspractices:Areviewofhighereducationinstitutions.Interact.
 Technol.SmartEduc.2018,15,132-154.[CrossRef] 
 4. Wong,B.T.;Li,K.C.;Cheung,S.K.S.Ananalysisoflearninganalyticsinpersonalisedlearning.J.Comput.High.Educ.2023,35,
 371-390.[CrossRef] 
 5. Cronbach,L.J.Courseimprovementthroughevaluation.Teach.Coll.Rec.1963,64,672-683.[CrossRef]
 6. Alturkistani,A.;Lam,C.;Foley,K.;Stenfors,T.;Blum,E.R.;VanVelthoven,M.H.;Meinert,E.MassiveOpenOnlineCourse
 EvaluationMethods:SystematicReview.J.Med.InternetRes.2020,22,e13851.[CrossRef]
 7. Avery,R.J.;Bryant,W.K.;Mathios,A.;Kang,H.;Bell,D.ElectronicCourseEvaluations:DoesanOnlineDeliverySystemInfluence
 StudentEvaluations?J.Econ.Educ.2006,37,21-37.[CrossRef] 
 
 
 
 
 



20

------------------------------------------------

 
 
 
 
 Sustainability2025,17,559 20of22 
 
 
 8. Edström,K.Doingcourseevaluationasiflearningmattersmost.High.Educ.Res.Dev.2008,27,95-106.[CrossRef]
 9. Hilliger,I.;Miranda,C.;Celis,S.;Pérez-Sanagustín,M.Curriculumanalyticsadoptioninhighereducation:Amultiplecasestudy
 engagingstakeholdersindifferentphasesofdesign.Br.J.Educ.Technol.2024,55,785-801.[CrossRef]
 10. Peterson,S.L.;Wittstrom,K.M.;Smith,M.J.Acourseassessmentprocessforcurricularqualityimprovement.Am.J.Pharm.Educ.
 2011,75,157.[CrossRef] 
 11. Wagner,Z.M.Usingstudentjournalsforcourseevaluation.Assess.Eval.High.Educ.1999,24,261-272.[CrossRef]
 12. Ozdemir,D.;Opseth,H.M.;Taylor,H.Leveraginglearninganalyticsforstudentreflectionandcourseevaluation.J.Appl.Res.
 High.Educ.2020,12,27-37.[CrossRef] 
 13. Corbu,E.C.;Edelhauser,E.ResponsiveDashboardasaComponentofLearningAnalyticsSystemforEvaluationinEmergency
 RemoteTeachingSituations.Sensors2021,21,7998.[CrossRef][PubMed] 
 14. Tzeng,J.W.;Lee,C.A.;Huang,N.F.;Huang,H.H.;Lai,C.F.MOOCEvaluationSystemBasedonDeepLearning.Int.Rev.Res.
 OpenDistanceLearn.2022,23,21-40.[CrossRef] 
 15. Lubis,F.F.; Rosmansyah,Y.; Supangkat,S.H.TopicdiscoveryofonlinecoursereviewsusingLDAwithleveragingreviews
 helpfulness.Int.J.Electr.Comput.Eng.2019,9,426.[CrossRef] 
 16. Koufakou,A.Deeplearningforopinionminingandtopicclassificationofcoursereviews.Educ.Inf.Technol.2024,29,2973-2997.
 [CrossRef] 
 17. Onan,A.Sentimentanalysisonmassiveopenonlinecourseevaluations:Atextmininganddeeplearningapproach.Comput.
 Appl.Eng.Educ.2021,29,572-589.[CrossRef] 
 18. Baldwin,S.J.;Ching,Y.H.Onlinecoursedesign:AreviewoftheCanvascourseevaluationchecklist.Int.Rev.Res.OpenDistance
 Learn.2019,20,268-282.[CrossRef] 
 19. Smith, C.Buildingeffectivenessinteachingthroughtargetedevaluationandresponse: Connectingevaluationtoteaching
 improvementinhighereducation.Assess.Eval.High.Educ.2008,33,517-533.[CrossRef]
 20. Braga,M.; Paccagnella,M.; Pellizzari,M.Evaluatingstudents'evaluationsofprofessors. Econ. Educ. Rev. 2014,41,71-88.
 [CrossRef] 
 21. Gelmez,K.;Efilti,P.;Yilmaz,O."Well,atoughquestion.Congratulations":Howandinwhataspectsdodesignstudentsevaluate
 adesignstudiocourse?Int.J.Technol.Des.Educ.2023,33,1585-1606.[CrossRef] 
 22. Hew,K.F.;Liu,S.;Martinez,R.;Bonk,C.;Lee,J.Onlineeducationevaluation:Whatshouldweevaluate?InProceedingsofthe
 AssociationforEducationalCommunicationsandTechnologyConference(AECT2004),Chicago,IL,USA,19-23October2004;
 pp.243-246. 
 23. Bingham,R.;Ottewill,R.Whateverhappenedtopeerreview?Revitalisingthecontributionoftutorstocourseevaluation.Qual.
 Assur.Educ.2001,9,32-39.[CrossRef] 
 24. Feldman,K.A.Instructionaleffectivenessofcollegeteachersasjudgedbyteachersthemselves,currentandformerstudents,
 colleagues,administrators,andexternal(neutral)observers.Res.High.Educ.1989,30,137-194.[CrossRef]
 25. Marsh,H.W.;Roche,L.A.Makingstudents'evaluationsofteachingeffectivenesseffective:Thecriticalissuesofvalidity,bias,and
 utility.Am.Psychol.1997,52,1187.[CrossRef] 
 26. Kogan,J.R.;Shea,J.A.Courseevaluationinmedicaleducation.Teach.Teach.Educ.2007,23,251-264.[CrossRef]
 27. Beleche,T.;Fairris,D.;Marks,M.Docourseevaluationstrulyreflectstudentlearning?Evidencefromanobjectivelygradedpost-test.
 Econ.Educ.Rev.2012,31,709-719. 
 28. Steyn,C.;Davies,C.;Sambo,A.Elicitingstudentfeedbackforcoursedevelopment: Theapplicationofaqualitativecourse
 evaluationtoolamongbusinessresearchstudents.Assess.Eval.High.Educ.2019,44,11-24.[CrossRef]
 29. Uttl,B.;White,C.A.;Gonzalez,D.W.Meta-analysisoffaculty'steachingeffectiveness:Studentevaluationofteachingratingsand
 studentlearningarenotrelated.Stud.Educ.Eval.2017,54,22-42.[CrossRef] 
 30. Denson,N.;Loveday,T.;Dalton,H.Studentevaluationofcourses:Whatpredictssatisfaction?High.Educ.Res.Dev.2010,29,
 339-356.[CrossRef] 
 31. Goos,M.;Salomons,A.Measuringteachingqualityinhighereducation:Assessingselectionbiasincourseevaluations.Res.High.
 Educ.2017,58,341-364.[CrossRef] 
 32. Wiers-Jenssen,J.;Stensaker,B.;Grøgaard,J.B.Studentsatisfaction:Towardsanempiricaldeconstructionoftheconcept.Qual.
 High.Educ.2002,8,183-195.[CrossRef] 
 33. Grace,D.;Weaven,S.;Bodey,K.;Ross,M.;Weaven,K.Puttingstudentevaluationsintoperspective:Thecourseexperiencequality
 andsatisfactionmodel(CEQS).Stud.Educ.Eval.2012,38,35-43.[CrossRef] 
 34. Kulik,J.A.;McKeachie,W.J.TheEvaluationofTeachersinHigherEducation.Rev.Educ.Res.1975,3,210-240.
 35. Anderson,H.M.;Cain,J.;Bird,E.Onlinestudentcourseevaluations:Reviewofliteratureandapilotstudy.Am.J.Pharm.Educ.
 2005,69,34-43.[CrossRef] 
 36. Pyasi,S.;Gottipati,S.;Shankararaman,V.Sufat-ananalyticstoolforgaininginsightsfromstudentfeedbackcomments. In
 Proceedingsofthe2018IEEEFrontiersinEducationConference(FIE),SanJose,CA,USA,3-6October2018;pp.1-9.
 
 

