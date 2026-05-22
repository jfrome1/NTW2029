

1

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Citation:Mudawi,N.A.;Pervaiz,M.; 
 Alabduallah,B.I.;Alazeb,A.; 
 Alshahrani,A.;Alotaibi,S.S.;Jalal,A. 
 PredictiveAnalyticsforSustainable 
 E-Learning:TrackingStudent 
 Behaviors.Sustainability2023,15, 
 14780. https://doi.org/10.3390/ 
 su152014780 
 AcademicEditor:Hao-Chiang 
 KoongLin 
 Received:23June2023 
 Revised:3October2023 
 Accepted:6October2023 
 Published:12October2023 
 
 
 
 Copyright: © 2023 by the authors. 
 Licensee MDPI, Basel, Switzerland. 
 This article is an open access article 
 distributed under the terms and 
 conditionsoftheCreativeCommons 
 Attribution(CCBY)license(https:// 
 creativecommons.org/licenses/by/ 
 4.0/). 
 sustainability 
 Article 
 Predictive Analytics for Sustainable E-Learning: Tracking 
 Student Behaviors 
 NaifAlMudawi1 ,MahwishPervaiz2,BayanIbrahimmAlabduallah3,*,AbdulwahabAlazeb1 ,
 AbdullahAlshahrani4,SaudS.Alotaibi5 andAhmadJalal6,* 
 1 DepartmentofComputerScience,CollegeofComputerScienceandInformationSystems,NajranUniversity,
 Najran55461,SaudiArabia;naalmudawi@nu.edu.sa(N.A.M.);afalazeb@nu.edu.sa(A.A.)
 2 DepartmentofComputerScience,BahriaUniversity,Islamabad44000,Pakistan;
 mahwish.buic@bahria.edu.pk 
 3 DepartmentofInformationSystems,CollegeofComputerandInformationSciences,PrincessNourahbint
 AbdulrahmanUniversity,Riyadh11671,SaudiArabia 
 4 DepartmentofComputerScienceandArtificialIntelligence,CollegeofComputerScienceandEngineering,
 UniversityofJeddah,Jeddah21959,SaudiArabia;asalshahrani2@uj.edu.sa
 5 InformationSystemsDepartment,UmmAl-QuraUniversity,Makkah24382,SaudiArabia;
 ssotaibi@uqu.edu.sa 
 6 DepartmentofComputerScience,AirUniversity,E-9,Islamabad44000,Pakistan
 * Correspondence:bialabdullah@pnu.edu.sa(B.I.A.);ahmadjalal@mail.au.edu.pk(A.J.)
 Abstract:TheCOVID-19pandemichasspeduptheacceptanceofonlineeducationasasubstitutefor
 conventionalclassroominstruction.E-Learningemergedasaninstantsolutiontoavoidacademic
 lossforstudents.Asaresult,educatorsandacademicsarebecomingmoreandmoreinterestedin
 comprehendinghowstudentsbehaveine-learningsettings. Behavioranalysisofstudentsinan
 e-learningenvironmentcanprovidevisionandinfluentialfactorsthatcanimprovelearningoutcomes
 andguidethecreationofefficientinterventions.Themainobjectiveofthisworkistoprovideasystem
 thatanalyzesthebehaviorandactionsofstudentsduringe-learningwhichcanhelpinstructorsto
 identifyandtrackstudentattentionlevelssothattheycandesigntheircontentaccordingly.Thisstudy
 haspresentedafreshmethodforexaminingstudentbehavior.Viola-Joneswasusedtorecognizethe
 studentusingtheobject'smovementfactor,andaregion-shrinkingtechniquewasusedtoisolate
 occludeditems.Eachobjecthasbeencheckedbyahumanusingatemplate-matchingapproach,and
 foreachobjectthathasbeenconfirmed,featuresarecomputedattheskeletonandsilhouettelevels.
 Ageneticalgorithmwasusedtocategorizethebehavior.Usingthissystem,instructorscanspotkids
 whomightbefailingoruninterestedinlearningandofferthemspecificinterventionstoenhance
 theirlearningenvironment.TheaverageattainedaccuracyfortheMEDandEdu-Netdatasetsare
 90.5%and85.7%,respectively. Theseresultsaremoreaccuratewhencomparedtoothermethods
 currentlyinuse. 
 Keywords: crowd management; human verification; machine learning; big data analytics; GA
 classifier;Viola-Jones 
 1. Introduction 
 Internetusagehasrapidlyincreasedduringthelasttenyears. Peopleareconstantly
 using the Internet to carry out a variety of tasks, including studying, commerce, and
 research. Theoldclassroomsettinghasgivenwaytothenewdigitalphenomenawhere
 computersaidinteaching[1-4]. Today,theInternetisagreatresourceforfindingcourses,
 seminars, credentials, and other educational activities. The efficiency of the traditional
 educationalstrategystillusedatuniversitiesandothereducationalinstitutionshasbeen
 calledintoquestionbythiswaveofinstructionalmaterialsande-learning[5,6]. Asaresult,
 these institutions are finding it difficult to redefine and restructure their approaches to
 offeringinformationandeducation(AssociationofEuropeanUniversities,1996)[7]. Given
 Sustainability2023,15,14780.https://doi.org/10.3390/su152014780 https://www.mdpi.com/journal/sustainability



2

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 2of18 
 
 
 
 thecurrentstudentpopulation,educationalinstitutionsarescramblingtodeveloponline
 learningresourcesthatwillenablecomputer-assistedinstructionintheclassroom. There
 appeartobetwomainresearchareasine-learning[8],oneofwhichfocusesonthecreation
 ofeffectivedesignsandtheotherontheevaluationofstudentsatisfactionandbehaviorin
 relation[9]tothecourseascomparedtoaconventionalface-to-facecourse.
 E-learning has become a necessary and timely solution, as the global COVID-19
 pandemichasparticularlyshown[10]. TheCOVID-19pandemiccausedglobaltraditional
 educationsystemstoexperienceformerlyunprecedenteddisturbances. Attheheightofthe
 pandemic,195nationsandmorethan1.5billionstudentswereaffectedbyschoolclosings,
 accordingtoUNESCO[11]. Millionsofstudentswereaffectedbyprolongedclosuresof
 schoolsandcollegestostopthespreadofviruses[12]. 
 E-learningquicklyemergedasavitalresourcetoguaranteeeducationalcontinuitydur-
 ingthiscrisis[13]. Technology-drivenlearningplatformshelpededucationalinstitutionsto
 adaptandofferremotelearningpossibilitiesasphysicalclassroomsbecameinaccessible.
 Theavailabilityofavarietyofcoursesandmaterialsone-learningplatformsensuredthat
 learningcouldcontinuedespitetherestrictionsputinplacebythepandemic[14].
 We suggested a useful approach to evaluate human behavior during e-Learning,
 whetherinaclassroomoranypublicareasetting,whichwasmotivatedbytheimportance
 oftheengagementoflearnersinane-learningenvironment. Thissystem'sobjectiveisto
 findanomalousbehaviors[15]thatareprohibitedineducationalsettings. Forinstance,
 inanyeducationalsetting,sittingorstandingandwritingonanotebookorboardareall
 permissibleactivities,butthrowingobjects,slapping,kicking,andtakingnapsarenot. Any
 sortofe-learningenvironmentshouldbeabletousethesuggestedsystemtomonitorand
 evaluatestudentbehavior[16]. 
 Onthefoundationofthisidea,weofferedasophisticatedpredictiveanalyticsystem
 thatcanmonitorandforecaststudentbehaviorinanonlinelearningenvironment. The
 maincontributionofthisworkisafreshapproachtoanalyzingandtrackingthebehavior
 ofstudentsduringe-learningusingamultimodalapproachoffeatureextraction. Toboost
 theaccuracyofoursystemascomparedtootherstate-of-the-artmethods,weextracted
 featuresofobjectswithtwodifferentapproaches,oneatobjectlevelandoneusingastick
 model[17]extractedfromobjects. Moreover, wetestedoursystemusingtwodifferent
 settings,onewithemotion-baseddataandtheotherwithaction-baseddata.
 Withafocusonsustainablepractices[18],thisstudyaimstoinvestigateanddemon-
 stratethepotentialofthesepredictiveanalyticssystemsine-learningenvironments. We
 intendtocontributetothelong-termsuccessofonlineeducationinitiativesbyfocusing
 onthesustainabilityofe-learningandthereforeprovidingarichlearningenvironment
 thatmayefficientlyaugment,andinsomecircumstances,replacetraditionalface-to-face
 education. 
 Theidentificationofmotion-based[19]elementsthatcanbeusedtoaccuratelydetect
 pedestrianbehavioristhekeycontributiontothisresearch. Theocclusionremovalproce-
 dureistheothercrucialcomponentofthiseffort. Ifanocclusion[20]wasdiscovered,we
 usedtheHoughtransform[21]withasemi-circletodeterminethepedestrian'sheadparts,
 andthenweusedbodypartsestimation[22]toroughlydeterminehowthesilhouettes
 werelaidout. Then,approximatedzoneswereseparatedandocclusionwasremoved.
 Thearticle'sremainingsectionsareorganizedasfollows: Section2presentsrelated
 work; Section 3 covers the detailed methodology of the system followed by Section 4,
 wheretheexperimentalresultsarereportedtogetherwithacomparisontocomparable
 state-of-the-art HAR systems. Discussion on the pros and cons of the system has been
 presentedinSection5andthepaperisconcludedinSection6. 
 2. RelatedWork 
 TheCOVID-19pandemichasacceleratedtheadoptionofe-learningasanalternativeto
 traditionalclassroomeducation[23]. Asaresult,educatorsandresearchersareincreasingly
 interested in understanding the behavior of students in e-learning environments [24].
 
 
 



3

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 3of18 
 
 
 
 Behavioranalysisisausefulapproachforstudyingstudentbehaviorine-learning,asit
 canprovideinsightsintofactorsthatinfluencelearningoutcomesandinformthedesignof
 effectiveinterventions[25]. Behavioranalysishasbeenutilizedinseveraltypesofresearch
 tolookintohowstudentsbehaveine-learningsettings. Thebehaviorofpupilsduringa
 computer-basedtrainingprogram,forinstance,wasexaminedbyKunetal.[26]usinga
 microanalytictechnique. Theydiscoveredthatstudentswhoexhibitedmoreactivelearning
 behaviors,suchastakingnotesandaskingquestions,outperformedpassivelearnersin
 terms of their learning results. Similarly, Liu et al. [27] examined student behavior in
 a massive open online course (MOOC) using data mining tools. They discovered that
 studentsweremorelikelytofinishthecourseandreceivehigherscoresiftheyparticipated
 inmorediscussionforumsandcourseactivities. Somemoreresearchcontributionsare
 summarizedinTable1. 
 Table1.Summaryofstate-of-the-artmethods. 
 
 Reference Objectives Advantages Disadvantages 
 
 [28] 
 Earlyexplorationofe-learning 
 behaviortracking. 
 Establishedtheimportanceof 
 engagementmetrics.Pavedthe 
 wayforfutureresearch. 
 Lackofreal-timemonitoring,
 Limitedemphasison 
 individualizedfeedback. 
 [29] 
 Focusonlearner-centeredtracking 
 usingamixedmethodsapproach, 
 includingsurveysandbehavioral 
 analysis. 
 Enhancedunderstandingof 
 self-regulation. 
 Time-consumingdataanalysisand
 difficultiesinmeasuringsubjective
 behaviors. 
 [30] 
 Useofpredictivemodelingfor 
 retention.Usedmethodof 
 longitudinaldatacollectionand 
 machinelearningtechniques. 
 Informedpersonalized 
 interventions.Highlightedthe 
 roleofsocialinteraction. 
 Challengesinpredicting 
 non-academicbehaviorsand 
 privacyconcerns. 
 [31] 
 Applicationofdatamining 
 techniques.Performedanalysisof 
 large-scalelearningdatausingdata 
 miningalgorithms. 
 Insightsintocollaborative 
 learningbehaviorsand 
 identificationoffactorsaffecting 
 performance. 
 Ethicalconsiderations, 
 resource-intensivedatacollection,
 andlimitedexplanationofcausality.
 [32] 
 Integrationofmultimodaldata 
 sources.Datafusionofvarious 
 sources,includingclickstreamand 
 biometricdata. 
 Comprehensivelearnerprofile 
 generationandpersonalized 
 learningpathway 
 recommendations. 
 Technicalchallengesindatafusion
 andlimitedgeneralizability.
 Privacyandsecurityconcerns.
 [33] 
 Exploretrackingstudentengagement. 
 Performedsurveys,interviews,and 
 behavioraldataanalysisand 
 identifiedfactorsinfluencingonline 
 behaviors. 
 Establishedtheimportanceof 
 engagementmetrics.Informative 
 forinstructionaldesign. 
 Limitedsamplesize,lackof 
 long-termdata,anddependencyon
 self-reporteddata. 
 [34] 
 Investigatesocialnetworkinfluence 
 usingsocialnetworkanalysisand 
 contentanalysis. 
 Provideinsightsintocollaborative 
 learningdynamics.Integrationof 
 socialnetworkanalysis. 
 Limitedfocusonnon-cognitive
 behaviors,ethicalconsiderations,
 andincompletedatafromprivate
 groups. 
 [35] 
 Examineonlineprocrastinationusing 
 surveysandanalysisofonline 
 procrastinationbehaviors.Proposed 
 strategiesforreducing 
 procrastination. 
 Implicationsfortime 
 managementine-learning. 
 Limitedgeneralizability, 
 self-reportingbias,andlimited
 considerationofotherbehaviors.
 [36] 
 Developedasystemforgiving 
 studentsimmediatefeedback 
 throughoutanonlinecourseusinga 
 behavioranalyticapproach. 
 Identifiedeffectofindividual 
 differencesonstudentsbehavior 
 ine-learningsettings. 
 Resultscanbebiasedbasedonfalse
 feedback. 



4

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 4of18 
 
 
 Table1.Cont. 
 
 Reference Objectives Advantages Disadvantages 
 
 
 [37] 
 Discoveredthatstudentswhohad 
 highlevelsofmotivationand 
 self-efficacyweremorelikelyto 
 participateinactivelearning 
 strategies. 
 Suggestparametersthatwill 
 increasestudentperformanceand 
 engagementine-learning. 
 Motivationlevelisaderived
 parameterthatcannotbemeasured
 accurately;itcanaffectperformance
 ofthesystem. 
 Mostofthestudiesinvestigatedintheliteraturefocusedonderivedparameterslike
 eyemovementratio,screenactivitymonitoringthroughtheirscreenrecording,andtheir
 interactionwiththesystembutnotontherealactionsandemotionsofstudents. Thiscan
 predicttheirengagementlevelbutnottheirrealfeelingsandinvolvementinthesubject. In
 thisstudy,wetakeintoaccounttheconclusionsofotherscholarsandsuggestanefficient
 approachtoexaminestudentbehaviorduringonlinelearning. Thebasicmotivationbehind
 this work is to use the emotions and actions of students to analyze their behavior and
 identifyprohibitedactionsduringtheclass.Also,wehavetakenintoaccountthevariability
 intheirbehaviorandhaveusedseveraldatasetscontainingavarietyofactivitiestakenin
 differentsettingstotrainoursystemtohandleavarietyofbehaviors.
 3. ProposedSystemMethodology 
 Inthispart,thesuggestedsystemmethodologyisexplained. Theentireworkflowof
 thesystemisshowninFigure1. TheMotionEmotionDataset(MED)[38]andEdu-Net
 datasets [39] have been chosen to assess the efficacy of the proposed technique in both
 indoorandoutdoorsettings,respectively. Sixelementsmakeupthesystemusedtoassess
 howwellstudentsbehavedinanonlinelearningenvironment. Thecompletealgorithm
 hasbeenpresentedinAlgorithm1. 
 Algorithm1Multistageprocessingtodetectstudents'behaviorine-Learning.
 Input:Image(1) 
 Step1:PreprocessingPhase 
 1.1ApplyNoiseRemovalTechniques 
 1_{denoised}=Denoise(l) 
 1.2PerformImageEnhancement 
 I_{enhanced)=Enhance(l_{denoised}) 
 1.3ApplyObjectFiltering 
 I_{filtered)=Filter(I_{enhanced}) 
 Step2:ObjectExtraction 
 2.1UseViolaJonesObjectDetection 
 Detected_Objects=ViolaJones(l_{filtered}) 
 Step3:FeatureExtraction 
 3.1ExtractFullObjectFeatures 
 Full_Object_Features=CalculateStatistics(Detected_Objects)
 3.2GenerateStickModelSkeleton 
 Skeletons=ExtractSkeletons(Detected_Objects) 
 3.3ExtractSkeletonFeatures 
 Skeleton_Features=MeasureSkeletonAttributes(Skeletons)
 Step4:TrainingandClassificationusingGeneticAlgorithm 
 4.1DefineGeneticAlgorithmParameters 
 Parameters=DefineParameters() 
 4.2InitializePopulation 
 Population=InitializePopulation(Parameters) 
 4.3EvaluateFitness 
 Fitness_Values=EvaluateFitness(Population) 
 4.4GeneticOperations 
 New:_Population=ApplyGeneticOperators(Population,Fitness_Values)



5

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 5of18 
 
 
 
 Algorithm1Cont. 
 4.5ReplacePopulation 
 Population=New_Population 
 4.6TerminationCriterion 
 Termination=CheckTerminationCriterion() 
 Step5:ClassificationandResultAnalysis 
 5.1SelectBestFeatures 
 Best_Features=SelectBestFeatures(Population) 
 5.2TrainClassifier 
 Classifier=TrainClassifier(Best_Features) 
 5.3PerformClassification 
 Classification_Results=Classifylmage(l,Classifier)
 5.4AnalyzeResults 
 Analysis_Metrics=AnalyzeClassificationResults(Classification_Results)
 Output:BehaviorType[Classification_Results] 
 EndAlgorithm 
 Sustainability 2023, 15, x FOR PEER REVIEW 6 of 19 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Figure 1. Proposed methodology to detect learner behavior. 
 
 3.1. Image Preprocessing 
 Our dataset was in the form of videos. The next step we performed was frame ex-
 traction from the video, and then we utilized each frame to preprocess the image. As seen
 in Equation (1), a special median filter has been used to remove noise and smooth the
 video frame images that were retrieved. Then, the foreground objects' appearance was
 improved using image enhancement as shown in Figure 2. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Figure 2. The process used to extract objects of interest in the image.
 
 The median filter opted to remove the noise from the frames extracted from video
 data according to Equation (1). 
 (u,v) = m{i(u + i,v + j)|(u,v) ∈ R} (1) 
 
 In the following stage, we used gamma correction as provided in Equation (2) to
 enhance the brightness of the image. Results from the preprocessing step are shown in
 Figure 3. 
 Figure1.Proposedmethodologytodetectlearnerbehavior. 
 Toachieveaccurateandsuccessfuloutcomes, astrongandmultifacetedtechnique
 was used in the development of our system for monitoring student behaviors in the
 classroom. Preprocessing was the first phase of this procedure, which was performed
 toisolateimportantclassroomitemsandremovebackgroundnoise. Objectsoutsideof
 the established threshold range were eliminated, leaving just the characteristic human
 layout. Our dataset contains a variety of outdoor locations and objects that may have
 difficult shadows; thus, an additional step was included to improve the quality of the
 humansilhouettes. Inordertoshowhumanformsmoreaccuratelyandclearly,shadows
 hadtobefoundandtheneliminated[40]. 
 Weemployedthetemplatematchingtechnique[41]toextractexclusivelyhumandata
 fromtheimagedatainordertoimprovetheaccuracyofoursystem. Thesestepscame
 togethertoisolateandextracthumansilhouettes, whichservedasthebasisforfurther
 analysis. 
 Continuingwithourmethodology,thenextcriticalphaseinvolvedtheextractionof
 featuresfromthehumansilhouettesutilizingconditionalrandomfields. Thisstepallowed



6

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 6of18 
 
 
 
 foramorecomprehensiveunderstandingofthevariousaspectsofhumanbehaviorand
 posturewithintheclassroomsetting. Toclassifytheactivitiesperformedbystudentsas
 eitherallowedorprohibited,weemployedageneticalgorithm[42]. Thissophisticated
 algorithmplayedapivotalroleincategorizingandanalyzingstudentbehaviors,offeringa
 dynamicandadaptiveapproachtotheassessmentofclassroomactivities. Byintegrating
 these various techniques and algorithms, our system was well equipped to accurately
 andefficientlytrackandcategorizestudentbehaviors,providingeducatorswithvaluable
 insightsandtoolsformaintainingaconduciveandproductivelearningenvironment.
 3.1. ImagePreprocessing 
 Our dataset was in the form of videos. The next step we performed was frame
 extractionfromthevideo,andthenweutilizedeachframetopreprocesstheimage. As
 seeninEquation(1),aspecialmedianfilterhasbeenusedtoremovenoiseandsmooth
 thevideoframeimagesthatwereretrieved. Then,theforegroundobjects'appearancewas
 improvedusingimageenhancementasshowninFigure2. 
 Sustainability 2023, 15, x FOR PEER REVIEW 6 of 19 
 Figure 1. Proposed methodology to detect learner behavior. 
 3.1. Image Preprocessing 
 Our dataset was in the form of videos. The next step we performed was frame ex-
 traction from the video, and then we utilized each frame to preprocess the image. As seen
 in Equation (1), a special median filter has been used to remove noise and smooth the
 video frame images that were retrieved. Then, the foreground objects' appearance was
 improved using image enhancement as shown in Figure 2. 
 
 
 
 
 
 
 
 Figure 2. The process used to extract objects of interest in the image.
 
 The median filter opted to remove the noise from the frames extracted from video
 data according to Equation (1). 
 (u,v) = m{i(u + i,v + j)|(u,v) ∈ R} (1) 
 
 In the following stage, we used gamma correction as provided in Equation (2) to
 enhance the brightness of the image. Results from the preprocessing step are shown in
 Figure 3. 
 Figure2.Theprocessusedtoextractobjectsofinterestintheimage.
 Themedianfilteroptedtoremovethenoisefromtheframesextractedfromvideo
 dataaccordingtoEquation(1). 
 (u, v) = m{i(u + i, v + j)|(u, v) ∈ R} (1) 
 In the following stage, we used gamma correction as provided in Equation (2) to
 enhancethebrightnessoftheimage. Resultsfromthepreprocessingstepareshownin
 Figure3. 
 (c) = I_out = I_inˆγ (2) 
 Sustainability 2023, 15, x FOR PEER REVIEW 7 of 19 
 (c) = I_out = I_in^γ (2) 
 (a) (b) (c) 
 Figure 3. Preprocessing. (a) Original image, (b) noise removed, and (c) image enhancement.
 
 3.2. Object Extraction 
 Object extraction was performed using the Viola-Jones algorithm which involves
 Haar-like features extraction, Adaboost [43] training, and a cascade of classifier. The de-
 cision to use the Viola-Jones algorithm for human detection in the context of our research
 on monitoring student behaviors in the classroom was carefully examined and was in-
 fluenced by a number of variables. We chose the Viola-Jones algorithm due to the specific
 benefits it offers within the scope of our project, despite the fact that deep learning-based
 algorithms have acquired significant popularity in recent years for their outstanding ca-
 pabilities in object detection and categorization. The Viola-Jones technique is computa-
 tionally effective and substantially faster than deep learning-based approaches. We were
 able to monitor and analyze student behaviors in a timely manner without adding a lot of
 latency due to its capacity to achieve real-time performance, even on hardware with
 constrained computational capabilities. 
 In comparison to deep learning-based techniques, the Viola-Jones algorithm also
 needs less training data. It can be difficult and time-consuming to gather a sizable dataset
 for deep learning models in a real-world classroom setting. The Viola-Jones method was
 a practical choice for our research because of its propensity to perform well with small
 datasets. Nextstep includes a set of rectangular Haar-like features defined to capture the
 difference between the object and background regions. Each feature was represented as
 the difference between the sum of pixel intensities in two rectangular regions. Using the
 Adaboost approach, a set of weak classifiers were trained on a set of positive and nega-
 tive examples. Each weak classifier was trained to classify an image patch as containing
 the object or not based on a selected Haar-like feature [44], and then classifiers were
 combined into a cascade of strong classifiers. Each weak classifier in a strong classifier
 was trained to pass the positive data to the next stage while highly likely rejecting the
 background samples. The cascade of classifiers was applied to the input video frames by
 sliding a window over each frame and evaluating the objectness score for each window.
 The results are shown in Figure 4. 
 O(x,y) = ∑i αiT_i(f_i(x,y)) (3) 
 Figure3.Preprocessing.(a)Originalimage,(b)noiseremoved,and(c)imageenhancement.



7

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 7of18 
 
 
 3.2. ObjectExtraction 
 
 ObjectextractionwasperformedusingtheViola-JonesalgorithmwhichinvolvesHaar-
 likefeaturesextraction,Adaboost[43]training,andacascadeofclassifier. Thedecision
 to use the Viola-Jones algorithm for human detection in the context of our research on
 monitoringstudentbehaviorsintheclassroomwascarefullyexaminedandwasinfluenced
 byanumberofvariables. WechosetheViola-Jonesalgorithmduetothespecificbenefitsit
 offerswithinthescopeofourproject,despitethefactthatdeeplearning-basedalgorithms
 haveacquiredsignificantpopularityinrecentyearsfortheiroutstandingcapabilitiesin
 objectdetectionandcategorization. TheViola-Jonestechniqueiscomputationallyeffective
 andsubstantiallyfasterthandeeplearning-basedapproaches. Wewereabletomonitor
 and analyze student behaviors in a timely manner without adding a lot of latency due
 to its capacity to achieve real-time performance, even on hardware with constrained
 computationalcapabilities. 
 In comparison to deep learning-based techniques, the Viola-Jones algorithm also
 needslesstrainingdata. Itcanbedifficultandtime-consumingtogatherasizabledataset
 fordeeplearningmodelsinareal-worldclassroomsetting. TheViola-Jonesmethodwas
 apracticalchoiceforourresearchbecauseofitspropensitytoperformwellwithsmall
 datasets. NextstepincludesasetofrectangularHaar-likefeaturesdefinedtocapturethe
 differencebetweentheobjectandbackgroundregions. Eachfeaturewasrepresentedas
 thedifferencebetweenthesumofpixelintensitiesintworectangularregions. Usingthe
 Adaboostapproach,asetofweakclassifiersweretrainedonasetofpositiveandnegative
 examples. Eachweakclassifierwastrainedtoclassifyanimagepatchascontainingthe
 objectornotbasedonaselectedHaar-likefeature[44],andthenclassifierswerecombined
 intoacascadeofstrongclassifiers. Eachweakclassifierinastrongclassifierwastrained
 to pass the positive data to the next stage while highly likely rejecting the background
 samples. The cascade of classifiers was applied to the input video frames by sliding a
 windowovereachframeandevaluatingtheobjectnessscoreforeachwindow. Theresults
 areshowninFigure4. 
 O(x,y) = 
 ∑ 
 iαiT_i(f_i(x,y)) (3) 
 Sustainability 2023, 15, x FOR PEER REVIEW 8 of 19
 
 
 
 
 
 
 (a) (b) 
 Figure 4. Object detection using Viola-Jones. (a) Original image and (b) object detection using Vi-
 ola-Jones. 
 
 3.3. Feature Extraction 
 The feature extraction procedure for human silhouettes discovered by the layout
 verification module is described in this section. Full human silhouettes' features were
 extracted, as well as the skeleton against each silhouette [45]. The features extraction
 outline is presented in Figure 5 and is divided into two directions.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Figure 5. Features extraction for full body and skeleton levels.
 
 3.3.1. Full Silhouette Features 
 The positions of each human silhouette in the current frame and the frame before it
 were obtained, as illustrated in Equation (4), and they were regarded as separate objects.
 𝑃(𝐼 (cid:3042),(cid:3033) )=𝐼 (cid:3051),(cid:3052) ∈𝑂 (4)
 
 where the current frame is represented by f and the current silhouette by o. Movement of
 centroid among successive frames concerning time was used to determine the distance
 for each silhouette using Equation (5). 
 𝑑 =(cid:3493)(𝑥 
 (cid:2870) 
 −𝑥 
 (cid:2869) 
 )(cid:2870)+(𝑦 
 (cid:2870) 
 −𝑦 
 (cid:2869) 
 )(cid:2870) (5)
 𝑣𝑒𝑙𝑜𝑐𝑖𝑡𝑦= 
 𝑑𝑢 
 𝑑𝑡 
 (cid:3415) (6)
 Then, the velocity [46] of each object was computed using Equation (6) and the dis-
 tance was calculated using Equation (7); these factors were then used to distinguish be-
 tween the allowed actions and prohibited actions. 
 Figure 4. Object detection using Viola-Jones. (a) Original image and (b) object detection using
 Viola-Jones. 
 3.3. FeatureExtraction 
 The feature extraction procedure for human silhouettes discovered by the layout
 verification module is described in this section. Full human silhouettes' features were
 extracted, as well as the skeleton against each silhouette [45]. The features extraction
 outlineispresentedinFigure5andisdividedintotwodirections. 



8

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 8of18 
 Sustainability 2023, 15, x FOR PEER REVIEW 8 of 19 
 (a) (b) 
 Figure 4. Object detection using Viola-Jones. (a) Original image and (b) object detection using Vi-
 ola-Jones. 
 3.3. Feature Extraction 
 The feature extraction procedure for human silhouettes discovered by the layout
 verification module is described in this section. Full human silhouettes' features were
 extracted, as well as the skeleton against each silhouette [45]. The features extraction
 outline is presented in Figure 5 and is divided into two directions.
 
 
 
 
 
 
 
 
 Figure 5. Features extraction for full body and skeleton levels.
 3.3.1. Full Silhouette Features 
 
 The positions of each human silhouette in the current frame and the frame before it
 were obtained, as illustrated in Equation (4), and they were regarded as separate objects.
 𝑃(𝐼 (cid:3042),(cid:3033) )=𝐼 (cid:3051),(cid:3052) ∈𝑂 (4)
 
 where the current frame is represented by f and the current silhouette by o. Movement of
 centroid among successive frames concerning time was used to determine the distance
 for each silhouette using Equation (5). 
 𝑑 =(cid:3493)(𝑥 (cid:2870) −𝑥 (cid:2869) )(cid:2870)+(𝑦 (cid:2870) −𝑦 (cid:2869) )(cid:2870) (5)
 
 𝑣𝑒𝑙𝑜𝑐𝑖𝑡𝑦= 
 𝑑𝑢 
 𝑑𝑡 
 (cid:3415) (6) 
 Then, the velocity [46] of each object was computed using Equation (6) and the dis-
 tance was calculated using Equation (7); these factors were then used to distinguish be-
 tween the allowed actions and prohibited actions. 
 Figure5.Featuresextractionforfullbodyandskeletonlevels. 
 3.3.1. FullSilhouetteFeatures 
 Thepositionsofeachhumansilhouetteinthecurrentframeandtheframebeforeit
 wereobtained,asillustratedinEquation(4),andtheywereregardedasseparateobjects.
 P 
 (cid:16) 
 I o,f 
 (cid:17) 
 = I x,y ∈O (4) 
 wherethecurrentframeisrepresentedbyf andthecurrentsilhouettebyo. Movementof
 centroidamongsuccessiveframesconcerningtimewasusedtodeterminethedistancefor
 eachsilhouetteusingEquation(5). 
 d = 
 (cid:113) 
 (x 
 2 
 −x 
 1 
 )2+(y 
 2 
 −y 
 1 
 )2 (5) 
 velocity =du/dt (6) 
 Then,thevelocity[46]ofeachobjectwascomputedusingEquation(6)andthedistance
 wascalculatedusingEquation(7);thesefactorswerethenusedtodistinguishbetweenthe
 allowedactionsandprohibitedactions. 
 θ = tan −1(y/x) (7) 
 Wefirstselectedrandompointsofthecompletesilhouettetodescribethestructureof
 theobject,usingPrincipalComponentAnalysis(PCA)[47]todeterminetheorientation
 oftheobject. Thecoordinatesorpositionoftheobjectshouldbedisclosedforeachdata
 point. Thedataset'scovariancematrix,whichillustratestheconnectionsbetweenvarious
 dimensionsofthedatapoints,wasthencomputed. Theprinciplecomponentswerethen
 obtainedbyapplyingPCAtothedataset. Theseelementswereeigenvectorsthatshowed
 wherethedata'sgreatestvarianceoccurs. Wemaydeterminetheobject'sfundamental
 orientationbyexaminingthefirstprincipalcomponent,whichcapturesthemostsignificant
 change. Theorientationoftheobjectcanbeinferredfromthefirstprincipalcomponent's
 direction(SeeFigure6). 



9

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 9of18 
 Sustainability 2023, 15, x FOR PEER REVIEW 9 of 19 
 𝜃 =𝑡𝑎𝑛(cid:2879)(cid:2869)( 
 𝑦 
 𝑥 (cid:3415) ) (7) 
 We first selected random points of the complete silhouette to describe the structure
 of the object, using Principal Component Analysis (PCA) [47] to determine the orienta-
 tion of the object. The coordinates or position of the object should be disclosed for each
 data point. The dataset's covariance matrix, which illustrates the connections between
 various dimensions of the data points, was then computed. The principle components
 were then obtained by applying PCA to the dataset. These elements were eigenvectors
 that showed where the data's greatest variance occurs. We may determine the object's
 fundamental orientation by examining the first principal component, which captures the
 most significant change. The orientation of the object can be inferred from the first prin-
 cipal component's direction (See Figure 6). 
 
 
 
 
 Figure 6. PCA to compute the orientation of the object. 
 3.3.2. Stick Model Features 
 
 Stick models were used to extract the features at the micro level. The human sil-
 houette's skeleton was first removed, and endpoints and junction nodes were located.
 Endpoints and junction points were utilized to draw the stick model in Figure 7 to
 demonstrate it. To connect the nodes, we employed the optical flow [33,34] of each node
 presenting the model, as well as the distance and angle between the slants.
 
 
 
 
 
 
 
 
 
 
 (a) (b) 
 Figure 7. Stick model presentation of human silhouettes detected. (a) Humans detected, and (b)
 Stick Model for each detected human 
 Figure6.PCAtocomputetheorientationoftheobject. 
 3.3.2. StickModelFeatures 
 Stick models were used to extract the features at the micro level. The human sil-
 houette's skeleton was first removed, and endpoints and junction nodes were located.
 EndpointsandjunctionpointswereutilizedtodrawthestickmodelinFigure7todemon-
 strateit.Toconnectthenodes,weemployedtheopticalflow[33,34]ofeachnodepresenting
 themodel,aswellasthedistanceandanglebetweentheslants. 
 Sustainability 2023, 15, x FOR PEER REVIEW 9 of 19 
 𝜃 =𝑡𝑎𝑛(cid:2879)(cid:2869)( 
 𝑦 
 𝑥 (cid:3415) ) (7) 
 We first selected random points of the complete silhouette to describe the structure
 of the object, using Principal Component Analysis (PCA) [47] to determine the orienta-
 tion of the object. The coordinates or position of the object should be disclosed for each
 data point. The dataset's covariance matrix, which illustrates the connections between
 various dimensions of the data points, was then computed. The principle components
 were then obtained by applying PCA to the dataset. These elements were eigenvectors
 that showed where the data's greatest variance occurs. We may determine the object's
 fundamental orientation by examining the first principal component, which captures the
 most significant change. The orientation of the object can be inferred from the first prin-
 cipal component's direction (See Figure 6). 
 Figure 6. PCA to compute the orientation of the object. 
 3.3.2. Stick Model Features 
 Stick models were used to extract the features at the micro level. The human sil-
 houette's skeleton was first removed, and endpoints and junction nodes were located.
 Endpoints and junction points were utilized to draw the stick model in Figure 7 to
 demonstrate it. To connect the nodes, we employed the optical flow [33,34] of each node
 presenting the model, as well as the distance and angle between the slants.
 (a) (b) 
 Figure 7. Stick model presentation of human silhouettes detected. (a) Humans detected, and (b)
 Stick Model for each detected human 
 Figure7.Stickmodelpresentationofhumansilhouettesdetected.(a)Humansdetected,and(b)Stick
 Modelforeachdetectedhuman. 
 3.4. FeatureOptimizationandClassification 
 Thegeneticalgorithm[48]wasutilizedasaclassifier,witheachdatapointassigned
 tooneofseveralpredefinedcategoriesbasedonitsfeaturesorattributes. Toachievethis,
 theGAcreatesasetofcandidateclassifiers,eachrepresentedbyasetofparametersthat
 defineitsdecisionboundary[49]. Thefitnessofeachclassifierisevaluatedbyitsability
 tocorrectlyclassifyasetoftrainingdata,andtheGAevolvesthepopulationofclassifiers
 by selecting the fittest ones and generating new ones through crossover and mutation
 operations. Theprocesscontinuesuntilsatisfactoryclassificationaccuracyisachievedon
 thetrainingdata,andthefinalclassifiercanthenbeusedtoclassifynew,unseendata.
 ThemainreasonforusingtheGAforclassificationisthatitcansearchalargesolution
 spaceanddiscovercomplexdecisionboundariesthatmaybedifficulttofindusingother
 methods. However, theeffectivenessoftheGAdependsonvariousfactorssuchasthe
 qualityofthetrainingdata,thechoiceofgeneticoperators,andthenumberofparameters
 intheclassifier. Nonetheless,theGAremainsapopularandpowerfultechniquefordata
 classificationinvariousdomainssuchasimagerecognitionandbioinformatics.Thegeneral
 architecture of the genetic algorithm is displayed in Figure 8. Initially, a population of
 the potential solution was created, where each individual represents a solution and is



10

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 10of18 
 
 
 
 evaluatedbythefitnessfunction. Thesolutionwithahigherfitnessvaluewaschosento
 becomeaparentforthenextgenerationandparentswerecombinedtogenerateanew
 population;mutationwasperformedtoavoidprematureconvergence. Thecyclerepeated
 untilasatisfactoryfitnesslevelwasachieved. Onceitwasterminated,theindividualwith
 thehighestfitnessvaluewasconsideredasthebestsolution. 
 Sustainability 2023, 15, x FOR PEER REVIEW 10 of 19
 3.4. Feature Optimization and Classification 
 The genetic algorithm [48] was utilized as a classifier, with each data point assigned
 to one of several predefined categories based on its features or attributes. To achieve this,
 the GA creates a set of candidate classifiers, each represented by a set of parameters that
 define its decision boundary [49]. The fitness of each classifier is evaluated by its ability to
 correctly classify a set of training data, and the GA evolves the population of classifiers by
 selecting the fittest ones and generating new ones through crossover and mutation oper-
 ations. The process continues until satisfactory classification accuracy is achieved on the
 training data, and the final classifier can then be used to classify new, unseen data.
 The main reason for using the GA for classification is that it can search a large solu-
 tion space and discover complex decision boundaries that may be difficult to find using
 other methods. However, the effectiveness of the GA depends on various factors such as
 the quality of the training data, the choice of genetic operators, and the number of pa-
 rameters in the classifier. Nonetheless, the GA remains a popular and powerful technique
 for data classification in various domains such as image recognition and bioinformatics.
 The general architecture of the genetic algorithm is displayed in Figure 8. Initially, a
 population of the potential solution was created, where each individual represents a so-
 lution and is evaluated by the fitness function. The solution with a higher fitness value
 was chosen to become a parent for the next generation and parents were combined to
 generate a new population; mutation was performed to avoid premature convergence.
 The cycle repeated until a satisfactory fitness level was achieved. Once it was terminated,
 the individual with the highest fitness value was considered as the best solution.
 
 
 
 
 
 
 
 
 Figure 8. The architecture of the genetic algorithm with population distribution and selection.
 Figure8.Thearchitectureofthegeneticalgorithmwithpopulationdistributionandselection.
 4. ExperimentsandResults 
 Thissectiondiscussesthedatasetandthespecificsoftheresearch,suchastheexperi-
 mentalsetup,theperformanceofthesuggestedsystem,andacomparisonanalysiswith
 cutting-edgetechniques. 
 4.1. Dataset 
 Twodifferentdatasetswereusedtoevaluatetheperformanceofthesystemindifferent
 environmentsandhaddifferentactionsperformedbymultiplepersons. Thefirstdataset
 ismadeupofaround44,000normalandabnormalvideoclipsdividedacross31video
 sequences. The videos are 554 × 235 in resolution and were recorded at 30 frames per
 second using a fixed video camera that was raised above and looked down on specific
 paths. Weonlyselectedsampledatahavingvideosannotatedwithhumanemotions. Other
 datasetswerecollectedfromYouTubevideosandrecordingsfromactualclassroomsin
 arangeofsettings,includingthosewithdifferentageranges,classstandards,andrural
 and urban settings. There are 200 video clips in each activity category within the 7851
 totalvideoclipsthatmakeuptheproduceddataset. Eachvideocliplastsbetween3and
 
 
 



11

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 11of18 
 
 
 
 12 s. The video lasts for about 12 h in total. The collection comprises recordings from
 actualclassroomsaswellasrealvideosfromYouTubethathavebeenuploadedbyusers
 fromaroundtheworld. Wechosevideosrecordedintheactualclassroomenvironment
 asoursampledata. Weseparatedthesamplesofeachclassrandomlyintoatrainingset,
 validationset,andtestset,witharatioof80%,10%,and10%,accordingtotheestablished
 datasetdivisionrules[50]. Completedetailsofbothdatasetsaregivenasfollows.
 4.1.1. MED(MotionEmotionDataset) 
 Twosignificantsegmentsinvariousindoor-outdoorsituationscanbefoundinthe
 MEDdataset[51]. Onesectionincludesvideoclipsthatdemonstratefivedistinctbehaviors:
 panic,fighting,congestedarea,obstacleorstrangeobject,andneutral. Theothersection,
 ontheotherhand,ismadeupofvariousvideosequencesthatprovideinformationonsix
 distinctemotions: anger,happiness,excitement,fear,sadness,andneutrality.
 31actor-filledvideoclipsmakeupthevideos,andthedatasetalsoincludesnumerous
 motorbikes and bicycles that behave as obstacles. The remaining 40% of the dataset
 is utilized for testing, with the remaining 60% used for training. Figure 9 displays a
 fewinstancesofMEDsceneries. Wehavecombinedtheseemotionsintwoclassesand
 categorized all emotions and behavioral videos into allowed and prohibited behavior
 categories. 
 Sustainability 2023, 15, x FOR PEER REVIEW 11 of 19 
 4. Experiments and Results 
 This section discusses the dataset and the specifics of the research, such as the ex-
 perimental setup, the performance of the suggested system, and a comparison analysis
 with cutting-edge techniques. 
 4.1. Dataset 
 Two different datasets were used to evaluate the performance of the system in
 different environments and had different actions performed by multiple persons. The
 first dataset is made up of around 44,000 normal and abnormal video clips divided across
 31 video sequences. The videos are 554 × 235 in resolution and were recorded at 30 frames
 per second using a fixed video camera that was raised above and looked down on specific
 paths. We only selected sample data having videos annotated with human emotions.
 Other datasets were collected from YouTube videos and recordings from actual class-
 rooms in a range of settings, including those with different age ranges, class standards,
 and rural and urban settings. There are 200 video clips in each activity category within
 the 7851 total video clips that make up the produced dataset. Each video clip lasts be-
 tween 3 and 12 s. The video lasts for about 12 h in total. The collection comprises re-
 cordings from actual classrooms as well as real videos from YouTube that have been up-
 loaded by users from around the world. We chose videos recorded in the actual class-
 room environment as our sample data. We separated the samples of each class randomly
 into a training set, validation set, and test set, with a ratio of 80%, 10%, and 10%, accord-
 ing to the established dataset division rules [50]. Complete details of both datasets are
 given as follows. 
 4.1.1. MED (Motion Emotion Dataset) 
 Two significant segments in various indoor-outdoor situations can be found in the
 MED dataset [51]. One section includes video clips that demonstrate five distinct behav-
 iors: panic, fighting, congested area, obstacle or strange object, and neutral. The other
 section, on the other hand, is made up of various video sequences that provide infor-
 mation on six distinct emotions: anger, happiness, excitement, fear, sadness, and neu-
 trality. 
 31 actor-filled video clips make up the videos, and the dataset also includes nu-
 merous motorbikes and bicycles that behave as obstacles. The remaining 40% of the da-
 taset is utilized for testing, with the remaining 60% used for training. Figure 9 displays a
 few instances of MED sceneries. We have combined these emotions in two classes and
 categorized all emotions and behavioral videos into allowed and prohibited behavior
 categories. 
 Figure 9. Examples of different scenes of the MED dataset.
 4.1.2. Edu Net Dataset 
 There are several videos of various e-learning-related acts on EduNet [52]. The da-
 taset, which includes several teachers and pupils, was obtained from a classroom setting.
 Videos show a variety of permitted classroom behaviors, such as standing, writing on the
 board, raising hands, and maintaining a book in hand. Prohibited behaviors include
 Figure9.ExamplesofdifferentscenesoftheMEDdataset. 
 4.1.2. EduNetDataset 
 Thereareseveralvideosofvariouse-learning-relatedactsonEduNet[52]. Thedataset,
 whichincludesseveralteachersandpupils,wasobtainedfromaclassroomsetting. Videos
 showavarietyofpermittedclassroombehaviors,suchasstanding,writingontheboard,
 raisinghands,andmaintainingabookinhand. Prohibitedbehaviorsincludeeating,using
 aphone,andbouncingaroundduringclass. Figure10showssomeexamplesoftheEduNet
 datasethavingmultipleallowedandnotallowedactions. 
 Sustainability 2023, 15, x FOR PEER REVIEW 12 of 19 
 eating, using a phone, and bouncing around during class. Figure 10 shows some exam-
 ples of the EduNet dataset having multiple allowed and not allowed actions.
 Figure 10. Allowed and prohibited behavior of the Edu-net dataset.
 4.2. Performance Metric and Experimental Outcome 
 Precision [53] was chosen as the performance metric for our system evaluation to
 assess its effectiveness. Equation (8) was used to calculate precision [54],
 Precision= 
 t 
 (cid:2913) (t 
 (cid:2913) 
 +f 
 (cid:2913) 
 ) (cid:3415) , (8) 
 where tc represents the total number of prohibited actions classified correctly and fc
 represents the total number of false detected actions. The results of the MED and
 Edu-Net datasets are shown in Table 2. Classes are categorized into allowed and prohib-
 ited behavior and each subcategory has been evaluated. 
 The statistical analysis discussed in the preceding sections offers important insights
 into how well the suggested system performs in identifying and categorizing both per-
 mitted and forbidden behaviors in the MED and Edu-Net datasets. The performance
 metric of precision shows how well the system performs in correctly identifying actions
 while reducing false detections. A great overall performance is indicated by the average
 accuracy values for both datasets, which vary from 85.75% to 90.5%.
 Table 2. The experimental outcome of MED and Edu-Net dataset.
 DataSet MED Dataset 
 Activity Allowed Behaviors Prohibited Behavior 
 Actions Happy Sad Excited Neutral Panic Fight Scared Angry 
 Accuracy 89% 86% 89% 82% 92% 94% 89% 87% 
 Average Accuracy 85.75% 90.5% 
 Dataset Edu-Net Dataset 
 Activity Allowed Behaviors Prohibited Behaviors 
 Action Writing on Board 
 Writing on 
 Book 
 Reading 
 Book 
 Hand Raise 
 Sleeping 
 on Chair 
 Eating 
 Food 
 Holding 
 Mobile 
 Phone 
 Fighting 
 Accuracy 83% 85% 89% 82% 83% 84% 89% 87% 
 Average 85% 86% 
 To visualize the results in more detail, those for each dataset are displayed sepa-
 rately in Figures 11 and 12. The name of each subcategory that is used to evaluate the
 behavior is displayed on the X-axis, while the accuracy of each behavior is displayed on
 the Y-axis. 
 Figure10.AllowedandprohibitedbehavioroftheEdu-netdataset. 
 4.2. PerformanceMetricandExperimentalOutcome 
 Precision [53] was chosen as the performance metric for our system evaluation to
 assessitseffectiveness. Equation(8)wasusedtocalculateprecision[54],
 Precision=tc/(tc +fc ), (8) 



12

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 12of18 
 
 
 
 wheret 
 c 
 representsthetotalnumberofprohibitedactionsclassifiedcorrectlyandfcrep-
 resentsthetotalnumberoffalsedetectedactions. TheresultsoftheMEDandEdu-Net
 datasetsareshowninTable2. Classesarecategorizedintoallowedandprohibitedbehavior
 andeachsubcategoryhasbeenevaluated. 
 Table2.TheexperimentaloutcomeofMEDandEdu-Netdataset. 
 DataSet MEDDataset 
 Activity AllowedBehaviors ProhibitedBehavior 
 Actions Happy Sad Excited Neutral Panic Fight Scared Angry 
 Accuracy 89% 86% 89% 82% 92% 94% 89% 87% 
 Average 
 Accuracy 
 85.75% 90.5% 
 Dataset Edu-NetDataset 
 Activity AllowedBehaviors ProhibitedBehaviors 
 Action 
 Writingon 
 Board 
 Writingon 
 Book 
 Reading 
 Book 
 HandRaise 
 Sleepingon 
 Chair 
 Eating 
 Food 
 Holding 
 MobilePhone 
 Fighting 
 Accuracy 83% 85% 89% 82% 83% 84% 89% 87% 
 Average 85% 86% 
 Thestatisticalanalysisdiscussedintheprecedingsectionsoffersimportantinsights
 intohowwellthesuggestedsystemperformsinidentifyingandcategorizingbothpermit-
 tedandforbiddenbehaviorsintheMEDandEdu-Netdatasets. Theperformancemetric
 ofprecisionshowshowwellthesystemperformsincorrectlyidentifyingactionswhile
 reducingfalsedetections. Agreatoverallperformanceisindicatedbytheaverageaccuracy
 valuesforbothdatasets,whichvaryfrom85.75%to90.5%. 
 Tovisualizetheresultsinmoredetail,thoseforeachdatasetaredisplayedseparately
 inFigures11and12. Thenameofeachsubcategorythatisusedtoevaluatethebehavioris
 displayedontheX-axis,whiletheaccuracyofeachbehaviorisdisplayedontheY-axis.
 Sustainability 2023, 15, x FOR PEER REVIEW 13 of 19 
 
 
 
 
 
 
 
 Figure 11. Results of behavior detection with MED dataset.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Figure 12. Results of behavior detection with Edu-Net dataset.
 
 The area under the curve (AUC) [55], error equivalence rate (EER) [56], and decida-
 bility [57] are used to assess the performance across both datasets in greater detail. Figure
 13 shows the combined performance of the two datasets. Additionally, the study is fur-
 ther enhanced by the use of additional performance indicators including AUC [55], EER
 [56], and decidability. AUC provides total performance measurements over all possible
 classification criteria [58]. The value of AUC might be between 0 and 1 [59]. EER is em-
 ployed as a threshold parameter to indicate false acceptance and false rejection rates [60].
 These metrics offer a thorough evaluation of the system's capability to distinguish be-
 tween permitted and unacceptable behavior while taking into account the trade-off be-
 tween erroneous acceptances and false denials. A comprehensive assessment of the sys-
 tem's capabilities across both datasets is provided by the combined performance
 measures shown in Figure 13. 
 Happy Sad Excited Neutral Panic Fight Scared Angry
 Allowed Activitites Prohibited Actions 
 Series1 89% 86% 89% 82% 92% 94% 89% 87% 
 76% 
 78% 
 80% 
 82% 
 84% 
 86% 
 88% 
 90% 
 92% 
 94% 
 96% 
 A c 
 c 
 u 
 r 
 a 
 c 
 y 
 Behavior Analysis using MED Dataset 
 Writing 
 on 
 Board 
 Writing 
 on Book 
 Reading 
 Book 
 Hand 
 Raise 
 Sleepin 
 g on 
 Chair 
 Eating 
 Food 
 Holding 
 Mobile 
 Phone 
 Fighting 
 Allowed Activitites Prohibited Actions 
 Series1 83% 85% 89% 82% 83% 84% 89% 87% 
 78% 
 80% 
 82% 
 84% 
 86% 
 88% 
 90% 
 A 
 c 
 c 
 u 
 r 
 a 
 c 
 y 
 Behavior analysis using edu-Net dataset 
 Figure11.ResultsofbehaviordetectionwithMEDdataset. 



13

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 13of18 
 Sustainability 2023, 15, x FOR PEER REVIEW 13 of 19 
 Figure 11. Results of behavior detection with MED dataset. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Figure 12. Results of behavior detection with Edu-Net dataset.
 
 The area under the curve (AUC) [55], error equivalence rate (EER) [56], and decida-
 bility [57] are used to assess the performance across both datasets in greater detail. Figure
 13 shows the combined performance of the two datasets. Additionally, the study is fur-
 ther enhanced by the use of additional performance indicators including AUC [55], EER
 [56], and decidability. AUC provides total performance measurements over all possible
 classification criteria [58]. The value of AUC might be between 0 and 1 [59]. EER is em-
 ployed as a threshold parameter to indicate false acceptance and false rejection rates [60].
 These metrics offer a thorough evaluation of the system's capability to distinguish be-
 tween permitted and unacceptable behavior while taking into account the trade-off be-
 tween erroneous acceptances and false denials. A comprehensive assessment of the sys-
 tem's capabilities across both datasets is provided by the combined performance
 measures shown in Figure 13. 
 Happy Sad Excited Neutral Panic Fight Scared Angry
 Allowed Activitites Prohibited Actions 
 Series1 89% 86% 89% 82% 92% 94% 89% 87% 
 76% 
 78% 
 80% 
 82% 
 84% 
 86% 
 88% 
 90% 
 92% 
 94% 
 96% 
 A c 
 c 
 u 
 r 
 a 
 c 
 y 
 Behavior Analysis using MED Dataset 
 Writing 
 on 
 Board 
 Writing 
 on Book 
 Reading 
 Book 
 Hand 
 Raise 
 Sleepin 
 g on 
 Chair 
 Eating 
 Food 
 Holding 
 Mobile 
 Phone 
 Fighting 
 Allowed Activitites Prohibited Actions 
 Series1 83% 85% 89% 82% 83% 84% 89% 87% 
 78% 
 80% 
 82% 
 84% 
 86% 
 88% 
 90% 
 A 
 c 
 c 
 u 
 r 
 a 
 c 
 y 
 Behavior analysis using edu-Net dataset 
 Figure12.ResultsofbehaviordetectionwithEdu-Netdataset. 
 Theareaunderthecurve(AUC)[55],errorequivalencerate(EER)[56],anddecidabil-
 ity[57]areusedtoassesstheperformanceacrossbothdatasetsingreaterdetail. Figure13
 showsthecombinedperformanceofthetwodatasets. Additionally,thestudyisfurther
 enhancedbytheuseofadditionalperformanceindicatorsincludingAUC[55],EER[56],
 anddecidability. AUCprovidestotalperformancemeasurementsoverallpossibleclassifi-
 cationcriteria[58]. ThevalueofAUCmightbebetween0and1[59]. EERisemployedasa
 thresholdparametertoindicatefalseacceptanceandfalserejectionrates[60]. Thesemetrics
 offerathoroughevaluationofthesystem'scapabilitytodistinguishbetweenpermittedand
 unacceptablebehaviorwhiletakingintoaccountthetrade-offbetweenerroneousaccep-
 tancesandfalsedenials. Acomprehensiveassessmentofthesystem'scapabilitiesacross
 bothdatasetsisprovidedbythecombinedperformancemeasuresshowninFigure13.
 Sustainability 2023, 15, x FOR PEER REVIEW 14 of 19 
 Figure 13. Performance measures of both datasets were used to evaluate the system.
 The comparison with current cutting-edge approaches also reveals the advantages of
 the proposed technology. It performs better than conventional techniques in terms of
 precision and accuracy, demonstrating its promise as a cutting-edge approach to behav-
 ior identification in academic and practical settings. The significance of the study and its
 possible effects on enhancing security and monitoring in educational settings are high-
 lighted by this comparison. Comparative analysis of the suggested approach and the ex-
 isting method, which both used the same assessment datasets, was performed (See Table
 3). Compared to other state-of-the-art methods, the proposed system performs admira-
 bly. 
 Table 3. Comparison of the stated system with other contemporary methods.
 Dataset Methods Accuracy (%) Methods Accuracy Methods Accuracy 
 MED Khalid [52] 84.9 Alberto et al. [59] 87.4 Proposed Method 89.2
 Edu-Net Rawashdeh et al. [60] 80.3 Fuady et al. [61] 82.2 Proposed Method 85.5
 5. Discussion 
 Access to educational opportunities has been made simpler due to the growth of
 e-learning. However, concerns about student misconduct and reduced engagement have
 also arisen as a result of the increased use of e-learning platforms. A mechanism has been
 developed in place to solve this problem that looks at visual data to find students prac-
 ticing unauthorized behaviors during online learning. This article offers a comprehensive
 overview of the system, its elements, and its functionality.
 The preprocessing stage of the system, which aims to lower noise and improve im-
 age quality, is the first stage. The Viola-Jones technique [62] is then used for object de-
 tection to determine whether a person is present in the frame. By using template match-
 ing, it is possible to confirm that the identified object is a human. Each silhouette is sub-
 jected to skeleton extraction, and feature extraction is conducted for both skeleton points
 and human silhouettes. A genetic algorithm is then used for classification.
 The system was assessed using a collection of videos of students engaging in online
 learning activities. The algorithm accurately identified 90.5% of the prohibited actions,
 including talking, using a phone, standing on a chair, and sleeping. The system's per-
 formance was also assessed in terms of detection time, and it was found that it ran in real
 time with a frame rate of 30 frames per second. 
 Figure13.Performancemeasuresofbothdatasetswereusedtoevaluatethesystem.
 Thecomparisonwithcurrentcutting-edgeapproachesalsorevealstheadvantages
 oftheproposedtechnology. Itperformsbetterthanconventionaltechniquesintermsof
 precisionandaccuracy,demonstratingitspromiseasacutting-edgeapproachtobehavior
 identificationinacademicandpracticalsettings. Thesignificanceofthestudyanditspossi-
 bleeffectsonenhancingsecurityandmonitoringineducationalsettingsarehighlightedby



14

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 14of18 
 
 
 
 thiscomparison. Comparativeanalysisofthesuggestedapproachandtheexistingmethod,
 whichbothusedthesameassessmentdatasets,wasperformed(SeeTable3). Comparedto
 otherstate-of-the-artmethods,theproposedsystemperformsadmirably.
 Table3.Comparisonofthestatedsystemwithothercontemporarymethods.
 
 Dataset Methods Accuracy(%) Methods Accuracy Methods Accuracy 
 MED Khalid[52] 84.9 Albertoetal.[59] 87.4 ProposedMethod 89.2 
 Edu-Net Rawashdehetal.[60] 80.3 Fuadyetal.[61] 82.2 ProposedMethod 85.5 
 
 5. Discussion 
 
 Access to educational opportunities has been made simpler due to the growth of
 e-learning. However,concernsaboutstudentmisconductandreducedengagementhave
 alsoarisenasaresultoftheincreaseduseofe-learningplatforms. Amechanismhasbeen
 developedinplacetosolvethisproblemthatlooksatvisualdatatofindstudentspractic-
 ingunauthorizedbehaviorsduringonlinelearning. Thisarticleoffersacomprehensive
 overviewofthesystem,itselements,anditsfunctionality. 
 Thepreprocessingstageofthesystem,whichaimstolowernoiseandimproveimage
 quality,isthefirststage. TheViola-Jonestechnique[62]isthenusedforobjectdetection
 todeterminewhetherapersonispresentintheframe. Byusingtemplatematching,itis
 possibletoconfirmthattheidentifiedobjectisahuman. Eachsilhouetteissubjectedto
 skeletonextraction,andfeatureextractionisconductedforbothskeletonpointsandhuman
 silhouettes. Ageneticalgorithmisthenusedforclassification. 
 Thesystemwasassessedusingacollectionofvideosofstudentsengaginginonline
 learning activities. The algorithm accurately identified 90.5% of the prohibited actions,
 includingtalking,usingaphone,standingonachair,andsleeping. Thesystem'sperfor-
 mancewasalsoassessedintermsofdetectiontime,anditwasfoundthatitraninrealtime
 withaframerateof30framespersecond. 
 Animportantareaofinterestintherealmofeducationistheassessmentofstudent
 behaviors in e-learning. Understanding and observing student behavior has become
 essentialforteachersandeducationalinstitutionstoeffectivelyhelpstudentsandimprove
 learningoutcomesasaresultoftherisingpopularityofonlinelearningplatforms. The
 objectiveofthisdiscussionistocriticallyexaminestudentbehaviorassessmentinonline
 learninganditsimplicationsforeducationalpractices. 
 ThereisapotentialconnectionbetweenHARoutcomesande-learning. HARtech-
 nologycouldbeusedtotrackstudentinvolvementandengagementinonlinelearning.
 Educationalsystemscouldassessstudents'levelsofengagement,interaction,andparticipa-
 tionbyexaminingvideofeedsfromonlineclasses. Withthehelpofthisdata,instructional
 strategiesmightbecustomized,andonlinelearningcouldbemadebetteroverall. Gaining
 insights into students' involvement, participation, and learning progress is one of the
 mainbenefitsofevaluatingstudentactionsine-learning. Usingthisdata,instructorscan
 identifychildrenwhomightbefailingoruninterestedinlearningandofferthemspecific
 interventionstoenhancetheirlearningenvironment. 
 Additionally, e-learning assessments of student behavior enable personalized and
 adaptivelearningprocesses. Educationalplatformscanproducedata-drivenrecommen-
 dationsandpersonalizedfeedbackbasedonthebehaviorsandpreferencesofindividual
 studentsbyutilizingpredictiveanalyticsandmachinelearningalgorithms. Thistailored
 strategy improves learning outcomes by making sure that resources and activities are
 tailored to the individual needs of the students while also increasing their enthusiasm
 tolearn. 
 Theevaluationofstudentbehaviorine-learningdoesnot,however,comewithout
 difficultiesandrestrictions. Whengatheringandexaminingstudentdata,privacyissues
 andethicalproblemsmustbecarefullyconsidered. Educationalorganizationsmustmake
 surethatdatacollectingproceduresareopenandthattheyseekstudentconsentwhile
 
 



15

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 15of18 
 
 
 
 protectingthesecurityandconfidentialityofthedatacollected. Additionally,thereisa
 dangerofplacinganunduerelianceonquantitativebehavioralmeasurements,whichcould
 meanignoringthequalitativecomponentsofstudentengagementandlearning. Tofully
 understandstudentbehaviorsine-learning,abalancedstrategycombiningquantitative
 andqualitativeassessmentmethodologiesisrequired. 
 Withanemphasisonsustainability,theblendingtechnologiesofAI,digitaltransfor-
 mation,IoT,andedgecomputingshowenormouspotentialintransformingthelandscape
 of e-learning. Educational institutions can use the potential of data-driven insights to
 customizelearningexperiencesforspecificstudentsbyintegratingAIintoe-learning. This
 includesfastfeedback,automatedgrading,andrecommendationsfortailoredmaterial. In
 addition,interactivecomponentslikevirtuallabs,simulations,andAR/VRapplications
 canbeincorporatedintothedigitaltransformationprocesstogobeyondthelimitationsof
 traditionalonlinelectures. Thesedevelopmentsencourageincreasedcomprehensionand
 involvementamongstudents,convertinginactivelearningintoactiveparticipation.
 Alongsidethesedevelopments,theInternetofThings(IoT)canmakereal-timedatacol-
 lectingeasierandprovideeducatorswithinsightfuldataonstudentbehavior,preferences,
 andperformance. Thisdatacanbehandledlocallywhenusedinconjunctionwithedge
 computing,allowingforquickanswersandfluidcommunicationinthee-learningenviron-
 ment. Byminimizingtheenvironmentalimpactconnectedwithphysicalinfrastructureand
 travel-relatedemissions,e-Learninglinkseducationwithsustainabilityaims. Inaddition
 torevolutionizinge-learning,thiscomprehensiveintegrationoftechnologydemonstratesa
 dedicationtoopen,individualized,andenvironmentallyresponsibleeducation.
 Inconclusion,therearemanyimportantbenefitsofusingpredictiveanalyticstomoni-
 torstudentbehaviorinsustainablee-learning. Firstofall,itenableseducatorstomonitor
 studentengagement,involvement,andperformanceinreal-time,allowingthemtoquickly
 identifyat-riskpupilsandstepintointerveneandgivetherequiredsupport. Second,the
 approachprovidesstudentswithapersonalizedlearningexperiencebyadaptinginter-
 ventionsandcontenttotheiruniquebehaviorsandrequirements. Thisnotonlyimproves
 thequalityoflearningoverallbutalsoincreasestheretentionofstudents. Additionally,
 predictiveanalyticscanofferinsightfuldataontheefficiencyofdifferentteachingmethods
 and materials, assisting in curriculum optimization and ongoing curriculum improve-
 ment. Additionally,itlessensresourcewasteanddropoutrates,whichcontributetothe
 sustainabilityofe-learningandmakeitanimportanttoolinthechangingenvironment.
 Although predictive analytics in sustainable e-learning has a lot of potential, it is
 notwithoutdifficultiesanddrawbacks. Theethicaluseofdataisoneimportantworry,
 astrackingandanalyzingstudentbehaviorcanleadtoprivacyconcerns,ifnothandled
 appropriately.Itisessentialtomakesurethatdataaresecureandanonymous.Additionally,
 thequantityandqualityofdataobtained,whichcanoccasionallybeconstrainedorbiased,
 haveasignificantimpactonhowaccuratepredictivemodelsare. Additionally,thereisa
 chancethatanexcessivedependenceonalgorithmsandstatisticswillleadtoapotential
 disregardforthevalueofqualitativeinsightsandhumancontactineducation. Theuseof
 data-drivendecisionmakingandinstructionalknowledgeshouldbebalancedbyeducators.
 Despite these obstacles, the proposed approach's importance to the area of study
 cannot be emphasized enough because it provides a potent instrument for improving
 studentperformanceandinstitutionaladvancementwhileenhancingthesustainabilityand
 effectivenessofe-learning. Futureresearchshouldconcentrateonimprovingthesystem's
 flaws to boost performance. If you want to increase system coverage and decrease the
 effectsofocclusion,thinkaboutusingmultiplecamerastoincreasethesystem'saccuracy
 indetectingillicitactivities. Researchersarealsolookingintotheuseofadditionalsensors,
 such as microphones. Additional research can examine the incorporation of machine
 learningmethodslikedeeplearningtoboostthesystem'saccuracyanddetectionspeed.
 Additionally,itiscriticaltorecognizethattheapplicationofpredictiveanalyticsand
 monitoring systems for sustainable e-learning is an area that is always changing. New
 opportunitiesanddifficultieswillariseastechnologydevelopsandourcomprehensionof
 
 



16

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 16of18 
 
 
 
 studentbehaviorgrows. Toexpandandimprovethesesystemsandguaranteetheircontin-
 uedefficacyandmorality,ongoingresearchanddevelopmentarerequired. Additionally,
 theresearchofmultisensortechniquesandtheincorporationofcutting-edgetechnologies
 likedeeplearningwillprobablyimprovetheprecisionandthoroughnessofthesesystems.
 Thesustainedsuccessoftheseprojectswillalsodependoncreatingacollaborativeatmo-
 spherewhereeducators,datascientists,andpolicymakerscancooperatetofindtheideal
 balancebetweendata-drivendecisionmakingandthehumanaspectineducation. Inthe
 end,predictiveanalyticshasthepotentialtoprovidesustainablee-learning,buttofully
 realizeitspotentialwhileresolvingitsdrawbacks,constantdiligenceandinnovationare
 needed. 
 6. Conclusions 
 E-learning is the top trending source of education in this era especially after the
 COVID-19pandemic. Educatorsandresearchersarepayingmoreattentiontoimproving
 e-learning systems. The behavior of students and their engagement level is the most
 importantfactorofthee-learningsystem. Thissystemwasimplementedtoidentifythe
 behaviorofstudentsinane-learningenvironment. Multipledatasetswereusedtoevaluate
 theperformanceofthissystem. Videoswereconvertedintoframesandthenobjectswere
 segmentedtonarrowdowntheregionofinterest. Featuresforeachobjectanditsskeleton
 modelswereusedtocharacterizethebehaviorofstudents. Datasetsweredividedinto
 allowedandprohibitedbehaviors. Experimentswereperformedandanaverageaccuracy
 of89%and85.5%wasachievedonbothdatasets. 
 
 Author Contributions: Validation, M.P. and N.A.M.; Formal analysis, N.A.M., M.P. and A.A.
 (Abdulwahab Alazeb); Investigation, B.I.A.; Resources, B.I.A. and A.A. (Abdullah Alshahrani);
 Datacuration,N.A.M.;SystemImplementation,Writing—originaldraft,M.P.(MahwishPervaiz);
 Writing—review&editing, A.A.(AbdulwahabAlazeb), A.A.(AbdullahAlshahrani)andS.S.A.;
 Supervision,A.J.Allauthorshavereadandagreedtothepublishedversionofthemanuscript.
 Funding:PrincessNourahbintAbdulrahmanUniversityResearchersSupportingProjectnumber
 (PNURSP2023R440),PrincessNourahbintAbdulrahmanUniversity,Riyadh,SaudiArabia. The
 authorsarethankfultotheDeanshipofScientificResearchatNajranUniversityforfundingthiswork
 undertheResearchGroupFundingprogramgrantcode(NU/RG/SERC/12/6).
 Acknowledgments:PrincessNourahbintAbdulrahmanUniversityResearchersSupportingProject
 Number(PNURSP2023R440),PrincessNourahbintAbdulrahmanUniversity,Riyadh,SaudiArabia.
 ConflictsofInterest:Theauthorsdeclarethattheyhavenoconflictofinteresttoreportregarding
 thepresentstudy. 
 
 References 
 1. James,R.J.E.;Tunney,R.J.Theneedforabehavioralanalysisofbehavioraladdiction.Clin.Psychol.Rev.2017,52,69-76.[CrossRef]
 [PubMed] 
 2. Miah,S.J.;Vu,H.Q.;Gammack,J.;McGrath,M.Abigdataanalyticsmethodfortouristbehaviouranalysis.Inf.Manag.2017,54,
 771-785.[CrossRef] 
 3. Zhang, X.; Wen, S.; Yan, L.; Feng, J.; Xia, Y. A Hybrid-Convolution Spatial-Temporal Recurrent Network for Traffic Flow
 Prediction.Comput.J.2022,bxac171.[CrossRef] 
 4. Li,B.;Tan,Y.;Wu,A.;Duan,G.Adistributionallyrobustoptimizationbasedmethodforstochasticmodelpredictivecontrol.
 IEEETrans.Autom.Control.2021,67,5762-5776.[CrossRef] 
 5. Matthew,T.;Banhazi,T.M.Abriefreviewoftheapplicationofmachinevisioninlivestockbehavioranalysis.Agrárinform./J.Agric.
 Inform.2016,7,23-42. 
 6. Jaganeshwari,K.;Djodilatchoumy,S.AnAutomatedTestingToolBasedonGraphicalUserInterfacewithExploratoryBehavioural
 Analysis.J.Theor.Appl.Inf.Technol.2022,22,6657-6666. 
 7. Michalis,V.;Nikou,C.;Kakadiaris,I.A.Areviewofhumanactivityrecognitionmethods.Front.Robot.AI2015,2,28.
 8. Qian,L.;Zheng,Y.;Li,L.;Ma,Y.;Zhou,C.;Zhang,D.ANewMethodofInlandWaterShipTrajectoryPredictionBasedonLong
 Short-TermMemoryNetworkOptimizedbyGeneticAlgorithm.Appl.Sci.2022,12,4073.[CrossRef]
 9. Guo, F.; Zhou, W.; Lu, Q.; Zhang, C.Pathextensionsimilaritylinkpredictionmethodbasedonmatrixalgebraindirected
 networks.Comput.Commun.2022,187,83-92.[CrossRef] 
 
 



17

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 17of18 
 
 
 
 10. Ferhat,A.;Mohammed,S.;Dedabrishvili,M.;Chamroukhi,F.;Oukhellou,L.;Amirat,Y.Physicalhumanactivityrecognition
 usingwearablesensors.Sensors2015,15,31314-31338. 
 11. Xie,X.;Xie,B.;Cheng,J.;Chu,Q.;Dooling,T.AsimpleMonteCarlomethodforestimatingthechanceofacycloneimpact.Nat.
 Hazards2021,107,2573-2582.[CrossRef] 
 12. Gupta,N.;Gupta,S.K.;Pathak,R.K.;Jain,V.;Rashidi,P.;Suri,J.S.Humanactivityrecognitioninartificialintelligenceframework:
 Anarrativereview.Artif.Intell.Rev.2022,55,4755-4808.[PubMed] 
 13. Jiang,H.;Wang,M.;Zhao,P.;Xiao,Z.;Dustdar,S.AUtility-AwareGeneralFrameworkWithQuantifiablePrivacyPreservation
 forDestinationPredictioninLBSs.IEEE/ACMTrans.Netw.2021,29,2228-2241.[CrossRef]
 14. Long,W.;Xiao,Z.;Wang,D.;Jiang,H.;Chen,J.;Li,Y.;Alazab,M.UnifiedSpatial-TemporalNeighborAttentionNetworkfor
 DynamicTrafficPrediction.IEEETrans.Veh.Technol.2023,72,1515-1529.[CrossRef]
 15. Xiao,Z.;Li,H.;Jiang,H.;Li,Y.;Alazab,M.;Zhu,Y.;Dustdar,S.PredictingUrbanRegionHeatviaLearningArrive-Stay-Leave
 BehaviorsofPrivateCars.IEEETrans.Intell.Transp.Syst.2023,24,10843-10856.[CrossRef]
 16. Wang,W.;Liu,A.X.;Shahzad,M.;Ling,K.;Lu,S.Understandingandmodelingofwifisignalbasedhumanactivityrecognition.
 InProceedingsofthe21stAnnualInternationalConferenceonMobileComputingandNetworking,Paris,France,7-11September
 2015;pp.65-76. 
 17. Abdulmajid,M.;Pyun,J.-Y.Deeprecurrentneuralnetworksforhumanactivityrecognition.Sensors2017,17,2556.
 18. Ortiz,R.;Jorge,L.;Oneto,L.;Samà,A.;Parra,X.;Anguita,D.Transition-awarehumanactivityrecognitionusingsmartphones.
 Neurocomputing2016,171,754-767.[CrossRef] 
 19. Chen,G.;Chen,P.;Huang,W.;Zhai,J.ContinuanceIntentionMechanismofMiddleSchoolStudentUsersonOnlineLearning
 PlatformBasedonQualitativeComparativeAnalysisMethod.Math.Probl.Eng.2022,2022,3215337.[CrossRef]
 20. Xiong,Z.;Liu,Q.;Huang,X.TheinfluenceofdigitaleducationalgamesonpreschoolChildren'screativethinking.Comput.Educ.
 2022,189,104578.[CrossRef] 
 21. Lu,S.;Liu,M.;Yin,L.;Yin,Z.;Liu,X.;Zheng,W.;Kong,X.Themulti-modalfusioninvisualquestionanswering:Areviewof
 attentionmechanisms.PeerJComput.Sci.2023,9,e1400.[CrossRef][PubMed] 
 22. Ann,R.C.;Cho,S.B.Humanactivityrecognitionwithsmartphonesensorsusingdeeplearningneuralnetworks.ExpertSyst.Appl.
 2016,59,235-244. 
 23. Chen,K.; Zhang,D.; Yao,L.; Guo,B.; Yu,Z.; Liu,Y.Deeplearningforsensor-basedhumanactivityrecognition: Overview,
 challenges,andopportunities.ACMComput.Surv.CSUR2021,54,1-40.[CrossRef] 
 24. Qiu,S.;Zhao,H.;Jiang,N.;Wang,Z.;Liu,L.;An,Y.;Fortino,G.Multi-sensorinformationfusionbasedonmachinelearningfor
 realapplicationsinhumanactivityrecognition:State-of-the-artandresearchchallenges.Inf.Fusion2022,80,241-265.[CrossRef]
 25. Li,Y.;Yang,G.;Su,Z.;Li,S.;Wang,Y.Humanactivityrecognitionbasedonmulti-environmentsensordata.Inf.Fusion2023,91,
 47-63.[CrossRef] 
 26. Kun,X.;Huang,J.;Wang,H.LSTM-CNNarchitectureforhumanactivityrecognition.IEEEAccess2020,8,56855-56866.
 27. Liu,X.;Shi,T.;Zhou,G.;Liu,M.;Yin,Z.;Yin,L.;Zheng,W.Emotionclassificationforshorttexts: Animprovedmulti-label
 method.Humanit.Soc.Sci.Commun.2023,10,306.[CrossRef] 
 28. Feng,W.;Hannafin,J.Design-basedresearchandtechnology-enhancedlearningenvironments.Educ.Technol.Res.Dev.2005,53,
 5-23. 
 29. Liu,X.; Zhou,G.; Kong,M.; Yin,Z.; Li,X.; Yin,L.; Zheng,W.DevelopingMulti-LabelledCorpusofTwitterShortTexts: A
 Semi-AutomaticMethod.Systems2023,11,390.[CrossRef] 
 30. Lu,C.;Shi,J.;Jia,J.Abnormaleventdetectionat150fpsinMatlab. InProceedingsoftheIEEEInternationalConferenceon
 ComputerVision,Sydney,NSW,Australia,1-8December2013. 
 31. Degardin, B.; Proença, H. Human Activity Analysis: Iterative Weak/Self-Supervised Learning Frameworks for Detecting
 Abnormal Events. In Proceedings of the IEEE International Joint Conference on Biometrics (IJCB), Houston, TX, USA, 28
 September-1October2020. 
 32. Merad,D.;Drap,P.Trackingmultiplepersonsunderpartialandglobalocclusions:Applicationtocustomers'behavioranalysis.
 PatternRecognit.Lett.2016,81,11-20.[CrossRef] 
 33. Chen,T.;Chen,H.Anomalydetectionincrowdedscenesusingmotionenergymodel.Multimed.ToolsAppl.2018,77,14137-14152.
 [CrossRef] 
 34. Klingner,J.Thepupillometricprecisionofaremotevideoeyetracker.InProceedingsoftheETRA2010(EyeTrackingResearch
 andApplicationsSymposium),Austin,TX,USA,22-24March2010;pp.259-262. 
 35. Srichanyachon,N.EFLLearners'PerceptionsofUsingLMS.TOJETTurk.OnlineJ.Educ.Technol.2014,13,30-35.
 36. Liang,M.;Hu,X.RecurrentConvolutionalNeuralNetworkforObjectRecognition.InProceedingsoftheIEEEConferenceon
 ComputerVisionandPatternRecognition,Boston,MA,USA,7-12June2015;pp.3367-3375.
 37. Jalal,A.;Mahmood,M.;Siddiqi,M.A.Robustspatiotemporalfeaturesforhumaninteractionrecognitionviaanartificialneural
 network.InProceedingsoftheIEEEConferenceonInternationalConferenceonFrontiersofInformationTechnology,Islamabad,
 Pakistan,17-19December2018. 
 38. Jalal,A.;Quaid,M.A.K.;Sidduqi,M.A.ATriaxialacceleration-basedhumanmotiondetectionforanambientsmarthomesystem.
 InProceedingsoftheIEEEInternationalConferenceonAppliedSciencesandTechnology,Islamabad,Pakistan,8-12January2019.



18

------------------------------------------------

 
 
 
 
 Sustainability2023,15,14780 18of18 
 
 
 
 39. Dahlstrom,E.;Brooks,D.C.;Bichsel,J.TheCurrentEcosystemofLearningManagementSystemsinHigherEducation:Student,Faculty,
 andITPerspectives;Educause:Boulder,CO,USA,2014. 
 40. Nawaratne,R.;Yu,X.Spatiotemporalanomalydetectionusingdeeplearningforreal-timevideosurveillance.IEEETrans.Ind.
 Inform.2019,16,393-402.[CrossRef] 
 41. Oliveira,P.C.D.;Cunha,C.;Nakayama,M.K.LearningManagementSystems(LMS)ande-learningmanagement:Anintegrative
 reviewandresearchagenda.JISTEM-J.Inf.Syst.Technol.Manag.2016,13,157-180.[CrossRef]
 42. Ahmad,F.Deepimageretrievalusingartificialneuralnetworkinterpolationandindexingbasedonsimilaritymeasurement.
 CAAITrans.Intell.Technol.2022,7,200-218.[CrossRef] 
 43. Hassan,F.S.;Gutub,A.ImprovingdatahidingwithincolorimagesusinghuecomponentofHSVcolourspace.CAAITrans.Intell.
 Technol.2022,7,56-68.[CrossRef] 
 44. Quaid,M.A.K.;Jalal,A.Wearablesensorsbasedhumanbehavioralpatternrecognitionusingstatisticalfeaturesandreweighted
 geneticalgorithm.Multimed.ToolsAppl.2019,79,6061-6083.[CrossRef] 
 45. Nadeem,A.;Jalal,A.;Kim,K.Humanactionstrackingandrecognitionbasedonbodypartsdetectionviaanartificialneural
 network.InProceedingsoftheIEEEInternationalConferenceonAdvancementsinComputationalSciences,Lahore,Pakistan,
 17-19February2020. 
 46. Golestani,N.;Moghaddam,M.Humanactivityrecognitionusingmagneticinduction-basedmotionsignalsanddeeprecurrent
 neuralnetworks.Nat.Commun.2020,11,1551.[CrossRef][PubMed] 
 47. Liu,X.;Song,M.;Tao,D.;Bu,J.;Chen,C.RandomGeometricPriorForestforMulticlassObjectSegmentation.IEEETrans.Image
 Process.2015,24,3060-3070.[PubMed] 
 48. Jalal,A.;Khalid,N.;Kim,K.AutomaticrecognitionofhumaninteractionviahybriddescriptorsandmaximumentropyMarkov
 modelusingdepthsensors.Entropy2020,22,817.[CrossRef][PubMed] 
 49. Rafique, A.; Ahmad, J.; Kim, K. Automated sustainable multi-object segmentation and recognition via modified sampling
 consensusandkernelslidingperceptron.Symmetry2020,13,1928.[CrossRef] 
 50. Zhang,J.;Ye,G.;Tu,Z.;Qin,Y.;Qin,Q.;Zhang,J.;Liu,J.Aspatialattentiveandtemporaldilated(SATD)GCNforskeleton-based
 actionrecognition.CAAITrans.Intell.Technol.2022,7,46-55.[CrossRef] 
 51. Pervaiz,M.;Jalal,A.;Kim,K.Hybridalgorithmformulti-peoplecountingandtrackingforsmartsurveillance.InProceedingsof
 theIEEE2021InternationalBhurbanConferenceonAppliedSciencesandTechnologies(IBCAST),Islamabad,Pakistan,12-16
 January2021. 
 52. Khalid,N.;Gochoo,M.;Jalal,A.;Kim,K.Modelingtwo-personsegmentationandlocomotionforstereoscopicactionidentification:
 Asustainablevideosurveillancesystem.Sustainability2021,12,970.[CrossRef] 
 53. Cong,R.;Lei,J.;Fu,H.;Cheng,M.-M.;Lin,W.;Huang,Q.ReviewofVisualSaliencyDetectionwithComprehensiveInformation.
 IEEETrans.CircuitsSyst.VideoTechnol.2018,29,2941-2959.[CrossRef] 
 54. Nadeem, A.; Jalal, A.; Kim, K.Automatichumanpostureestimationforsportsactivityrecognitionwithrobustbodyparts
 detectionandentropyMarkovmodel.Multimed.ToolsAppl.2021,80,21465-21498.[CrossRef]
 55. Meng,J.;Li,Y.;Liang,H.;Ma,Y.Single-imageDehazingbasedontwo-streamconvolutionalneuralnetwork. J.Artif. Intell.
 Technol.2022,2,100-110.[CrossRef] 
 56. Liu,Y.;Wang,K.;Liu,L.;Lan,H.;Lin,L.Tcgl:Temporalcontrastivegraphforself-supervisedvideorepresentationlearning.IEEE
 Trans.ImageProcess.2022,31,1978-1993.[CrossRef][PubMed] 
 57. Zheng,M.;Zhi,K.;Zeng,J.;Tian,C.;You,L.AhybridCNNforimagedenoising.J.Artif.Intell.Technol.2022,2,93-99.[CrossRef]
 58. Hu,X.;Kuang,Q.;Cai,Q.;Xue,Y.;Zhou,W.;Li,Y.ACoherentPatternMiningAlgorithmBasedonAllContiguousColumn
 Bicluster.J.Artif.Intell.Technol.2022,2,80-92.[CrossRef] 
 59. Alberto,R.;Briones,A.;Hernandez,G.;Prieto,J.;Chamoso,P.Artificialneuralnetworkanalysisoftheacademicperformanceof
 studentsinvirtuallearningenvironments.Neurocomputing2021,423,713-720. 
 60. Rawashdeh,A.;Zuhir,A.;Mohammed,E.Y.;AlArab,A.R.;Alara,M.;Al-Rawashdeh,B.Advantagesanddisadvantagesofusing
 e-learninginuniversityeducation:Analyzingstudents'perspectives.Electron.J.E-Learn.2021,19,107-117.[CrossRef]
 61. Fuady,I.;Sutarjo,M.A.S.;Ernawati,E.Analysisofstudents'perceptionsofonlinelearningmediaduringtheCOVID-19pandemic
 Studyofe-learningmedia:Zoom,GoogleMeet,GoogleClassroom,andLMS.RandwickInt.Soc.Sci.J.2021,2,51-56.[CrossRef]
 62. Li,T.;Fan,Y.;Li,Y.;Tarkoma,S.;Hui,P.UnderstandingtheLong-TermEvolutionofMobileAppUsage.IEEETrans.Mob.Comput.
 2023,22,1213-1230.[CrossRef] 
 Disclaimer/Publisher's Note: The statements, opinions and data contained in all publications are solely those of the individual
 author(s)andcontributor(s)andnotofMDPIand/ortheeditor(s).MDPIand/ortheeditor(s)disclaimresponsibilityforanyinjuryto
 peopleorpropertyresultingfromanyideas,methods,instructionsorproductsreferredtointhecontent.
 
 
 
 

