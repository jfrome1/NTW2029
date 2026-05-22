

1

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 Student behavior in a web-based educational system: Exit 
 intent prediction 
 
 Ondrej Kassak, Michal Kompan, Maria Bielikovan 
 FacultyofInformaticsandInformationTechnologies,SlovakUniversityofTechnologyinBratislava,Ilkovicova2,84216Bratislava,Slovakia
 
 
 a r t i c l e i n f o 
 Availableonline2February2016 
 Keywords: 
 User-feedback 
 E-learning 
 Behaviorprediction 
 Classification 
 Stochasticgradientdescent 
 a b s t r a c t 
 Thebehaviorofusersoverthewebisoneofthemostrelevantandresearchtopicnowadays.Notonly
 miningtheuser'sbehaviorinordertoprovidebettercontentispopular,butthepredictionoftheuser's
 behavior is interesting and can increase user experience. Moreover, the business clearly desires such
 informationtoimprovetheirservices.Inthispaperwefocustotheeducationdomainasitbelongstothe
 mostdynamicallytransformingareas.Webbasede-learningsystemsarenowadaysreachingstillgreater
 popularity, because of possibilities theyoffer tostudents. We analyze various sources of "e-students"
 feedbackanddiscusstoday'schallengesfromtheloggingandfeedbackcollectingpointofview.Next,we
 focusonthepredictionofstudent'snextactionwithinane-learningapplication(inthemeanof"stayor
 leave?"question).Suchinformationcanimprovestudents'attritionratebyintroducingvariousperso-
 nalizedapproaches.Weproposedtheclassifierbasedonpolynomialregressionandstochasticgradient
 descenttolearntheattributesimportance.Inthiswayweareabletoprocessastreamofdatainone
 singleiterationandthusweareabletoreflectdynamicusers'behaviorchanges.Ourexperimentsare
 basedonthelogdatacollectedfromourweb-basededucationsystemALEFduringthree-yearperiod.We
 foundthatthereisanextensiveheterogeneityintheusers'(student)behaviorwhichwewereableto
 handlebyusingindividualweightscalculatedforeveryuser. 
 &2016ElsevierLtd.Allrightsreserved.
 1. Introduction 
 Everyoneofusisauniquepersonwhorespondsdifferentlyto 
 perceptions obtained from the environment. The task of interac- 
 tionwith a software and various systems can be problematic for 
 thisreason,sincethesystemsaremainlydesignedtooperateina 
 one strictly defined way, regardless of user who interact with 
 them.Nowadaysanincreasingamountofweb-basedsystemsuse 
 personalization,becauseitallowstomatchthecontenttospecific 
 user'sneedsandpreferences.Thisprocessmaytakemanyforms- 
 itcanbeanadaptationofacontentpresentedtotheuser,achange 
 of a search results order, an arrangement or a change of system 
 interfacecomponentsappearanceetc. 
 In order to provide adaptive, personalized or specifically 
 adjustedcontentorservice,theuserneeds,preferencesandoften 
 attitudes have to be known and visible to the system. From this 
 pointofview,theuser'sfeedbackplayscrucialrole.Astheboth- 
 users and business as well gains benefits from such a tailored 
 contentorservice(useraccessrelevantinformationorproductsin 
 shortertime,businesslowerstheadvertscostandraisesprofits),
 the "obsession" on collecting user feedback and using it to
 improvethewebincreasesdaybyday. 
 In business sphere, the task of the prediction whether a cus-
 tomerwillstayorexitusingparticularservice(e.g.,donotprolong
 thecontract)isreferredastheattritionorconversionrate.Sucha
 predictioncanbecomputedbasedonthecustomerbehaviorand
 the feedback he/she leaves during the contract (which is usually
 long term). However, in this paper, we focus on the task of the
 learning session end prediction for specific student in the e-
 learning web-based system (prediction of student exit intent in
 thesession). Thisrepresents anovelapplication ofstandardlong
 term attrition rate task to the short term behavior, which brings
 newchallengesandalsopossibilitiesforuserbehaviorprediction
 expressedbyhis/hernextaction(s). 
 E-learning systems are currently very popular and millions of
 students learn using those (Jegatha Deborah et al., 2014). Moreover,
 similarly to e-learning systems the MOOCs (Massive Open Online
 Course)areoftenusedtopromotetheuniversitiesandallowsthemto
 sellcertificatestograduates,whichbringsahugebusinesspotential.
 E-learning system typically contains various courses containing
 learning materials divided into logical units called learning objects
 (LOs), e.g., explanations, questions or the practical exercises to solve
 ContentslistsavailableatScienceDirect 
 journal homepage: www.elsevier.com/locate/engappai 
 Engineering Applications of Artificial Intelligence 
 http://dx.doi.org/10.1016/j.engappai.2016.01.018 
 0952-1976/&2016ElsevierLtd.Allrightsreserved. 
 nCorrespondingauthor. 
 E-mailaddress:Maria.Bielikova@stuba.sk(M.Bielikova). 
 EngineeringApplicationsofArtificialIntelligence51(2016)136-149



2

------------------------------------------------

 
 
 
 
 
 presented in various forms combing text and multimedia. This rich 
 informationsource canbeusedtoimprove thee-learningbasedon 
 specificstudents'characteristicsandbehavior. 
 There are many advantages of e-learning in comparison to 
 traditional education. One of the most important is, that "e-stu- 
 dents" can adjust the learning process to their own needs and 
 speed, which fit them the most. Jovanovic et al. (2012) proposed 
 the clustering method for grouping students based on their cog- 
 nitivelearningstyle.Thiswayareusersabletospendtheirtimein 
 e-learning effectively, because system is able to automatically 
 adapttheirlearningmaterialswithrespecttotheirlearningstyles. 
 Another advantage of e-learning systems is the possibility to 
 adaptthecoursestructure,navigationoritscontentexactlytothe 
 needsofeverystudentindividually.Theconceptoftheadaptation 
 and personalization of web-based systems for the domain of e- 
 learning was introduced by Brusilovsky (1996) and is still inten- 
 sivelyresearchednowadays.Therewereproposedthemethodsof 
 personalized recommendation, such as hybrid approach from 
 Klasnja-Milevic et al. (2011) which is similarly to previous 
 approachbased on students' learning styles,but in this case also 
 onfrequentsequencesofincontentlearned. 
 Thetaskofthesessionendpredictionrepresentsaninteresting 
 challenge of e-learning. Students sometimes decide to stop 
 learningwhiletheydidnotunderstandfullythematerials.Ifthee- 
 learning application would be able to predict that student will 
 probably leave soon, it could motivate him/her to stay longer, 
 remindhim/herthelearningobjecthe/shehasnotstudiedyetor 
 offer him/her some questions to test his/her real knowledge. In 
 this way the system will be able to help the student to learn 
 effectively, e.g., not miss any of topics to learn in order to better 
 prepareforhis/herexam. 
 Ourcontributionspresentedinthispapersare: 
 - Ananalysisofe-learningstudents'behaviorandfeedbacktypes 
 andsources. 
 - Novel approach for student exit intent prediction for actual 
 session designed for highly dynamic data in the form of data 
 stream. 
 In comparison to the state-of-the-art approaches and chal- 
 lengesintheattritionratepredictionincludinge-learningdomain, 
 ourproposedapproachfocusesonshort-termbehaviorprediction 
 (in the mean of one session). Proposed approach fully takes an 
 advantageofallavailableusercharacteristics-includingstudents' 
 performance, their personalities or learning styles. Thanks tothe 
 predictor architecture (polynomial binary classifier, using the 
 stochastic gradient descent algorithm), we are able to process 
 students' actions within the system as the data stream and 
 dynamically make predictions for actual sessions. Such a short- 
 term prediction is not used in today's web-based systems, 
 includingthee-learningdomain. 
 Therestofthepaperisstructuredasfollows.Therelatedwork 
 and the state-of-the-art is presented in the next section. The 
 section "E-Students" Challenges describes the current trends of e- 
 learning and its advantages in comparison to the traditional 
 learning approaches focusing on the student feedback. We 
 demonstrate the most important features and the ways of col- 
 lecting the feedback from students' actions considering our e- 
 learning system ALEF (Adaptive LEarning Framework). In the fol- 
 lowing sectionwe focus on one task of user behavior prediction. 
 Wedescribeproposedmethodforpredictionthenextuseraction 
 in web-based educational system in mean if he/she stay or will 
 leave. The section Evaluation shows the results of the proposed 
 methodusedwithvarioussettings.Finally,inthesectionConclu- 
 sionswesummarizetheachievedresultsanddiscussfuturework. 
 2. Relatedwork 
 As the students' behavior and feedback is collected ex-post
 (aftertheactionhappened),themachinelearninganddatamining
 techniques have to be used in order to predict next students'
 actions.Thereexisttwobasicdataminingtasks-descriptiveand
 predictive(Kantardzic,2011).Descriptivetasksareprimarilyused
 to discover structure, relations or patterns in mined data. There
 areusedmainlyintheunsupervisedlearningapproaches(Griraet
 al.,2004).Ontheotherhand,predictiveapproachesusemostlythe
 supervised learning (Kotsiantis et al., 2007) and are used to esti-
 mateunknownvaluesorpredictfuturetrendsindatavalues.
 Thequalityofuserbehaviorpredictionishighlydependentonthe
 qualityof user models describing user's previous behaviorand pre-
 ferences.Severalartificialintelligencemethodologiesareusedinthe
 domainofweb-basedlearning,e.g.,automatizeddiscoveringofrela-
 tions withinthe content,which are then used for useranddomain
 modeling. A process of automatic relationship discovery in domain
 modelconsideringlearningobjects as keyelementswas researched
 by(Simkoetal.,2009),anadaptivequestionselectionby(Barlaetal.,
 2010). Other approaches used for improving the e-learning use the
 predictive data mining analysis (Pena-Ayala, 2014). In addition, the
 artificial intelligence methods are used for the increase of student
 experience, typically, for personalization of the e-learning applica-
 tions.Onerepresentative-theadaptivenavigationsupportapproa-
 ches adaptively select hyperlinks available for individual students
 fromthecontentofthee-learningapplication(BrusilovskyandPesin,
 1998).Otherapproachesemploytheguidanceofrelevantcontentfor
 students by automatically generated ontology-based navigation
 (Holohanetal.,2005).Outputsofartificialintelligenceapproachesare
 ine-learningdomaingenerallyusedforobtainingqualitymetadata-
 usedforthedescriptionofuserpreferencesortypicalbehaviorand,in
 thenextstep,forthepredictionoffutureuseractions(Levy,2007).
 Inthispaperweaimtopredictstudentbehavior.Wefocuson
 the exit intent prediction within user's session. Our task can be
 formalizedastaskofpredictingif"Willthestudentgofromcurrent
 learningobjecttoanotheroneorwillhe/sheleavetheapplication?"
 This task refers to the binary classification problem, which is
 generallysuitabletobesolvedbysupervisedlearning(Pena-Ayala,
 2014).SimilartaskswereinthepastsolvedmostlybyaBayesian
 models (Li et al., 2011), decision trees (Long and Wu, 2012) or a
 neural networks (Yu et al., 2010). They were however applied
 mostlyinadifferentscaleandalsoadifferentcontextfromours.
 The problem of user attrition or conversion rate is typically
 researchedinbusinessdomainsasaretailbanking(Lietal.,2011)
 ortelecommunication(Wojewniketal.,2011),whereisthelossof
 acustomerestimatedinalongterm. 
 Whenfocusingonthee-learningdomain,thetaskofattrition
 orconversionratepredictionwasinrecentyearsexploredstrictly
 on the highabstraction level in the mean of the long termscale.
 There exist works dealing with students' dropout from the e-
 learning courses (Tan and Shao, 2015; Halawa et al., 2014, Bayer
 et al., 2012), dropout from studies (Sangodiah and Balamur-
 alithara, 2014), or freshmen students loss (Delen, 2010). These
 taskstypicallyuse classificationalgorithms asthelogisticregres-
 sion (Kotsiantis, 2012; Bukralia, 2010), multilayer perceptron
 neuralnetworks(Bukralia,2010),supportvectormachines(SVM)
 (Sangodiah and Balamuralithara, 2014; Bukralia, 2010) or rule
 basedprediction(Halawaetal.,2014). 
 Our work is focused on the classification of user behavior in
 shorter period of time, i.e., sessions. We aim at predicting the
 sessionend,whichrepresentslightlydifferenttask.Inthecaseof
 the students' dropout, there is, according to Halawa et al. (2014)
 possibletonoticefirstsignals(ofstudents'dropoutintentions)at
 least two weeks before dropout itself. On the contrary, the short
 term periods as sessions, bring significantlyless time todiscover
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 137



3

------------------------------------------------

 
 
 
 
 
 and to observe such signals. User short term behavior is also 
 biased by user's current context, mood or intent, thus it is more 
 difficulttopredictuser'sfutureactions.Toourbestknowledgeno 
 work explored the session end (exit intent) prediction task, 
 especiallyinthee-learningdomain. 
 The application of users' attrition ora userexit intent predic- 
 tiontodomainofe-learningisadifficulttask,becauseofmultiple 
 factors. There exist a lot of data about learning objects visits 
 incoming from the e-learning system as a continuous stream, so 
 standard batch approaches are not usable and it can be only 
 handled as a continuous stream of data. Data also dynamically 
 changeintimeandthereisquitedifferentbehaviorofstudentsat 
 the various course stages. The classifier has to be able to dyna- 
 mically adapt to the actual trends (or several prediction models 
 havetobetrainedforvariouscoursestages).Alsotheusersbehave 
 very individually and there are no general patterns available. As 
 userstypicallybrowsemultiplelearningobjectspersessionbefore 
 they actually leave, the classes (continue browse vs. leave the 
 application)arehighlyunbalanced.Mentionedobstructionsmade 
 fromtaskofpredictionofusers'attrition,quiteachallenge. 
 Inourwork,wedealwithabigamountofdatathatcomeinthe 
 formofadatastream.Thisfactspecifiesourtasktothesinglepro- 
 cessing of the data, which is typical for working with data streams 
 (PhridviRajandGuruRao,2014).Nowadaystherecanbeobservedthe 
 relatively huge increase of machine leaning methods working with 
 the data streams (Bifet et al., 2010). As the user preferences and 
 behaviorchangerelativelyquicklyintime(coursestart,beforeexam, 
 afterexams),itisimportantalsotobeabletoreacttothesechangesas 
 quickaspossible,i.e.inon-linetime(Yuetal.,2010). 
 Apredictionifauserwillleaveapageornot,acustomerwillbuy 
 someproductorchangehis/herbanknextmonthisatypicalrepre- 
 sentativeofbinaryclassificationtask.Insuchatasktype,theretypi- 
 callyoccursaproblemofunbalancedclasses,whichleadstoproble- 
 maticmodellearningprocess(Sunetal.,2009).Therearemuchmore 
 observationswhenausercontinuesbrowsing(becausehe/shetypi- 
 callyvisitsmultiplelearningobjectsbeforetheleave)thanobserva- 
 tionsofleaving;e.g.,morecustomerswillkeeptheirbanknextmonth 
 thanchangeit.Themostoftenusedtechniquestoreducetheunba- 
 lanced classes problem are an oversampling of the rarer class, 
 undersampling the majority class or assigning the different impor- 
 tancetoobservations(Bottou,2012). 
 3. "E-students"challenges 
 Oneofthemostdynamictransformationsinrecentyearscanbe 
 seenintheeducationdomain.Wecanseethattraditionalformofface 
 toface learningisbeingreplaced bye-learning.Thistransformation 
 creates a new kind of students, so-called "e-students". Not only the 
 studentsenjoye-learningeducation(coursera.orguserscountreaches 
 10M1)moreandmore,butthestandardeducationinstitutionsoffersa 
 great and still increasing number of courses online (nearly 2.5k 
 courses available in coursera.org). Adaptive and especially persona- 
 lizede-learningsystemsbringtostudentsnewadvantagesandchal- 
 lengesrespectively. 
 3.1. Mining"e-students" 
 Instandardfacetofaceeducation,theinteractionbetweenthe 
 teacher and a student creates a unique environment, which is 
 essential for the learning process. In the opposite, in e-learning 
 usually there is no direct interaction between students and tea- 
 chers (except indirect forms such as discussion forums), often 
 becauseofthenumberofstudentsenrolledforthecourse.Onthe
 other hand, this shortcoming can be reduced by utilizing rich
 information, which the students leave in the electronic environ-
 ment,suchasaccuratetimespentonlearningobjects,asequence
 in which student learned them, knowledge learned during
 studying (continuous testresults)or theexact information about
 which parts of learning objects student read (eye tracking), how
 longhe/shewasthinkingbeforeanswer,etc. 
 Students interacting with e-learning system provide huge
 amountofvariousindicationsorsignalsintheformofimplicitor
 explicit feedback, and behavior which can be further analyzed.
 Thisweunderstandbroadlyasnotonlystudentratingsofspecific
 content,butgenerallythestudents'knowledgelevel,theirperso-
 nalcharacteristics,communicationwithotherstudentsandmuch
 more.Thisrichsourceofstudents'feedbackbringsnewchallenges
 and possibilities for adaptation and improving of the learning
 processincomparisontostandardeducation.Bythisway,notonly
 the student experience, but the performance as well, can be
 improved(HorvathandSimko,2013). 
 Moreover,thecontentofadaptivee-learningsystemitselfcan
 beusedtoprovidenewstimulitothestudents(e.g.,personalized
 suggestions of similar topics, courses). Explanations, interactive
 animations, videos and much more may improve students
 understandinguserexperience. 
 Moreandmoreattentionispaidtothecollaborationinthee-
 learningsystemstoday.Variousenhancementstoutilizethegroup
 knowledge have been proposed, e.g., group recommendations.
 Similarly, new forms of students' feedback are researched as the
 cameraoreye-trackinginordertofindinterestingpartsofstudy
 materialsortopreventfromcheatingetc. 
 Notonlystudents'implicitdataareimportantfromthelogging
 andthefeedbackpointofview.Althoughtheyrepresentthemain
 source of feedback (describing actions of students within the
 system), other students' characteristics and information sources
 can be used. To speak more generally, e-learning students' feed-
 back can be observed from several perspectives based on its
 relationshiptothestudentbehavior.Theseperspectivesshouldbe
 considered when the students' feedback is analyzed and used in
 furthercomputation(e.g.,personalization):
 - Web-based behavior - obtained directly from the student's
 feedback, which covers his/her browsing patterns, time spent,
 sessiondurationandotherweb-relatedindicators.Itrepresents
 the main source of information when modeling students'
 behavior. As it represents the user's actual short-term prefer-
 ences-it is generally very biased, influenced by user's actual
 intent,contextandglobaltrends. 
 - Content characteristics - include the learning object content
 itself, similarities between learning objects, hierarchies, pre-
 requisite or tags. As the content does not represent a kind of
 feedback,ithasanimpacttostudentbehaviorinsystem.Forthis
 reason,itisanimportantcharacteristic,whichshouldbeknown
 (atleastonthelearningobjectslevel). 
 - Personalcharacteristics-similarlytothecontentcharacteristics
 it is not a feedback source strictlyspeaking. The description of
 student'spersonalitytraits,learningstyleetc.provideimportant
 information about individual personalities, which provide dis-
 tinctive information from the adaptation point of view and
 indirectlyinfluence thestudent behavior.Itrepresents alsothe
 user long term preferences and thus the regular behavior and
 browsingpatterns. 
 - User experience behavior - e.g., web page layout, ergonomics,
 eye-tracing etc. The user experience directly influences the
 behavior and feedback received from the students. If there are
 any usability issues within the e-learning system, received
 feedbackorbehaviorpatternscanbeskewed. 1Source:coursera.org(statisticsfortheendofthe2014)
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 138



4

------------------------------------------------

 
 
 
 
 
 Generally speaking, more relevant data sources we have, the 
 better we are able to describe student past and future behavior. 
 Thetraditionalsourceofsystemlogs(studentactivities)areoften 
 enhanced in today's modern applications. New opportunities to 
 thedatacollecting,whichdescribestudentbehavior,characteristic 
 andpreferencesareused.Thereisanintensiveresearchintheeye 
 tracking and related technologies nowadays. Eye tracking repre- 
 sentsanalternativesourceofdatatothetraditionalsourcesasthe 
 systemlogs,whichoffersanotherviewontheuseractivity.Dueto 
 the hardware requirements, it is however, not currently widely 
 employed in the standard day to day usage. So there is lack of 
 studies comparing performance of machine learning approaches 
 based also on the eye tracking vs. traditional approaches mostly 
 basedonsystemlogs.Webelievethatacombinationofbothdata 
 sources can bring an improvement to understanding the user 
 behavior. 
 In the context of prediction in e-learning domain, the eye 
 trackingwassuccessfullyusedforimplicituserintentrecognition 
 (Jang et al., 2011), intent inferring (Salvucci, 1999), minimizing 
 userattritionrate(Ribisletal.,1996),improvementofnavigation 
 within e-learning systems (Goldberg et al., 2002), discovering 
 reading patterns (Bielikova et al., 2015) or monitoring users' 
 multitasking activity (Konopka and Navrat, 2015). These approa- 
 ches extend the tracking of students' actions, e.g., recognizing 
 students' faceorgestures,which canindicatestudents' emotions 
 or even mood (Katsimerou et al., 2014). Additional devices allow 
 also to track student's biometric characteristics as a pulse, heart 
 activity or body temperature. To capture these inputs, the spe- 
 cialized hardware is required, which is usually available in 
 laboratoryconditionsonly.Asthehistoryproved,thepriceofsuch 
 deviceswilldropmassively,whichwillresulttowideavailability. 
 Theusageofwearablecomputers(e.g.,smartwatch)seemstobea 
 promisingareainconnectiontotheuser'sfeedbackcollection.The 
 reason is that implicit feedback acquired from various devices, 
 whichareabletocaptureuseractivity(fromthebiometricpointof 
 view)canbeusedtoreplacesomeoftheuserbehaviordescription 
 (acquired in the standard way). Such an enrichment or replace- 
 mentisverybeneficialintheshort-termuserbehaviorprediction, 
 whichisnaturallyveryoftennoisy. 
 3.2. ALEF-AdaptiveLEarningFramework 
 In order to better illustrate various sources of students' feed- 
 back which can be collected within the e-learning system we 
 provide a brief description of ALEF (Simko et al., 2010; Bielikova 
 etal., 2014)-the adaptive learning systembased onconceptsof 
 Web 2.0, which is developed at our faculty. Since 2009 it offers 
 multiplecoursesfocusedonprogramming(procedural,functional, 
 logical)andsoftwareengineeringeducation. 
 The system idea is based on the standard two core models - 
 domain and user model and the set of framework components 
 which provide adaptive functionality (Bielikova et al., 2014). This 
 represent typical architecture of adaptive e-learning systems, 
 introducedbyBrusilovsky(2004).Thedomainmodelisbasedon 
 lightweight semantics in theform ofdomain relevantterms. The 
 learningcontentconsistsofvarioustypesoflearningobjectsand 
 theirrelationships.Threetypesoflearningobjectsareused: 
 - Explanations - textual studying materials, similar to book 
 chapters in traditional studying materials. They are hier- 
 archicallyordered, based on the domain experts and the auto- 
 mated domain model creation as well (Simko and Bielikova, 
 2009). 
 - Questions-shorttestquestions,wherestudentscanquicklytest 
 their knowledge. Questions can be answered without need of 
 extensivesolvingandareevaluatedautomatically. 
 - Exercises-practicaltasks,whichhavetobesolvedforalonger
 time than the questions usually (the implementation task is
 oftenused). 
 Theusermodelisthenextcorecomponent,whichisbasedon
 theoverlayusermodeling.Severallayersofusercharacteristics(or
 his/her history) are added on the top of the domain model, e.g.,
 which learning object was visited, questions or exercises were
 solvedorotherstudentinteractionsweremade.Anotherexample
 of the layer refers to the student's knowledge or his/her char-
 acteristicsmappedtothekeydomainconcepts.Thankstothis,the
 knowledge is spread among domain concepts using concepts
 relationshipswhenthestudentknowledgeisupdated.
 Finally, the framework components provide active-learning,
 collaboration and adaptation support. The annotation framework
 allowsstudentstoprovide,updateandsharevariousannotations
 for educational content, which enriches the learning content.
 Students can highlight, tag, comment or extend learning content
 by external sources and definitions. Annotations can be set by
 users as private (visible only for author) or public (visible for
 others - anonymously or with author's name). Widgets provide
 interactivegatewayfortheadaptationandcollaborationfeatures.
 Thanks tothe modulardesign and implementation, widgetspro-
 videgreatreusableextendableplatformforvariousspecificfunc-
 tionalities(recommendations,student'sscorepresentationetc.).
 3.2.1. Studentbehaviorandfeedback 
 Collectionofstudents'feedbackisintheALEFsystemrealized
 bythefeedbackframeworkandtheirrequeststosystemarecap-
 turedbythe logging framework. It means, that users' interaction
 withthesystemiswellrecorded.Therearebothtypesoffeedback,
 implicit and explicit, collected. Implicit feedback is realized by
 capturinglearningobjectsvisits,theexplicitonebyusers'actions
 withinthelearningobjects(answeringthequestions,highlighting
 texts,commenting,annotatingetc.). 
 Generally, the student behavior can be captured by extensive
 logging within the system. The explicit feedback however is not
 theonlyimportantsourceofinformationformodelingofstudent's
 behavior. Ideally, the actual state of the system (in the time of
 students' interaction) should be also easily able to reconstruct,
 including the content of the dynamic page components. Such a
 complexinformationcanhelptoreallyunderstandstudents'past
 behavior and based on this knowledge to improve adaptation
 features of the system in the future. For example, if there was
 some recommendation presented to the student, which he/she
 ignored,itindicatesthattheserecommendationsarenotrelevant
 forparticularstudentandhis/hercontent. 
 3.2.2. Students'personalcharacteristics
 Students' (or users') personal data are important and can be
 used for the improving the user experience and satisfaction.
 Within the e-learning system, the student's courses enrolled,
 study results reached or his/her projects made reveal his/her
 contextandpreferences.Thesedataarerelativelyeasytocapture,
 because they are logged implicitly without need of students'
 additionaleffort. 
 In addition, the data describing students' characteristics
 from the personality point of view are also important. Student
 personalities or learning styles can improve the adaptation of
 learning content by its tailoring the special need of specific stu-
 dent.Moreover,suchinformationiscrucialfromthecollaboration
 and group construction point of view. The basic assumption for
 usage such personal characteristics data, is that there is some
 distinctive value, which can be further used in the automatized
 processing. 
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 139



5

------------------------------------------------

 
 
 
 
 
 Toillustratethedistributionofpersonalcharacteristicsofstudents 
 ine-learningsystemALEF,wepresentresults(percentile)ofNEO-FFI 
 questionnaire for 160 bachelor students of Software engineering 
 course. As we can see (Fig.1), there is huge variety in the students' 
 personalities, while neuroticism and conscientiousness seems to be 
 most diverse. On the opposite the openness and agreeableness are 
 morecompactandconsistent.Asexpectedtheextraversionismoved 
 slightly to lower values as the students of Informatics are generally 
 consideredasmoreintrovert.Ontheotherhand,ineverydimension 
 bothlowandveryhighscoreswereobserved. 
 Actuallytherecanbeobservedamassiveincreaseofe-learning 
 systems,whichbringstostudentsnewpossibilitiesincomparison 
 to the traditional approaches. Thanks to new technologies, there 
 are wide possibilities to acquire students' explicit and implicit 
 feedback. The web-based behavior representsthemain source of 
 data, but also the content and students' personal characteristics 
 are able to offer helpful information for building reliable user 
 models (with solid distinctive information). To illustrate the var- 
 iousfeedbacksourceandtoevaluateproposedapproachesweuse 
 theAdaptiveLearningSystemALEF,whichrepresentsthestate-of- 
 the-artweb-basede-learningsystem.Inaddition,systemcontains 
 forpartofstudentsalsotheirpersonalcharacteristic,whichcanbe 
 usedforbetterbehaviorprediction. 
 4. Predictionapproach 
 Inordertobeabletopredictifauserwillleavetheapplication 
 inthenextactionorhe/shewillcontinuethesession,wehaveto 
 deal with several limitations. At first, the data come in a con- 
 tinuous stream, which eliminates the usage of batch approaches. 
 Thedatastreamisrepresentedbyusers'actions(visitsoflearning 
 objectsrealizedbyusers),whereeveryactionisdescribedbyaset 
 ofattributesdescribingcurrentlyvisitedlearningobject(LO),user 
 behavior in actual session and also his/her typical behavior 
 (describedinSection5.1,AppendixA). 
 Atsecond,thedataareunbalanced,duetothefactthatusersin 
 a session typically visit multiple LOs, while every session has 
 logically only one leave action. The third limitation refers to the 
 factthatdatacharacteristicsdynamicallyevolveoverthetime,due 
 totheusers'behaviorchanges(e.g.,studentsbehavedifferentlyat 
 thebeginningof thecourseorduringthenightbeforeanexam). 
 Forthisreason,weneedtodealwithvaryingdatacharacteristics 
 intherealtime.Thisissupportedbythefactthatstudentbehavior 
 intensityisirregularandunexpected,whichmeansthatitcan'tbe
 describedbytheregularsamplingrate. 
 Based on these limitations, we proposed a polynomial binary
 classifier,usingthestochasticgradientdescentalgorithm,whichis
 able to process stream of data in real time and dynamically
 determine the importance ofcontext attributes describingobser-
 vations.Toimprovethe classifierresultswedesigned it tocalcu-
 late weights individually for every user. We also devised new
 attributes describing the observations from the point where it is
 possibletobetterdifferentiatebetweentheclassesconsidered.
 The input of the proposed classifier is a stream of user actions
 representingLOvisits.TheLOvisitscamewithoutaregularsampling
 rate, because students visit educational system irregularly, mostly
 based on their course deadlines, exams or individual preferences.
 Every incoming action is at first described by attributes capturing
 student actual behavior in the session, his/her typical behavior and
 alsobycharacteristicsofvisitedLOs.Theseattributesarethenusedfor
 thepredictionifthestudentwillleavetheeducationalapplicationin
 next n actions (or time range), or not. The attributes come from
 multiple sources.Atfirst,some attributes are acquireddirectlyfrom
 educational system logs (the user, LO, timestamp). At second, some
 attributesarederivedorcalculated(studentbehaviorinthesession,
 his/hertypicalbehavior,LOcharacteristics).Weprovidemoredetailed
 descriptionoftheattributesinSection5.3AttributesImportance.
 4.1. Stochasticgradientdescentapproach 
 Becausethedataflowinacontinuousstream,whichvariesoverthe
 time (as students behave differently in different time points of the
 course), we used the stochastic approach instead of the batch one.
 With this approach all observations are considered only once. This
 allowsusalsotohandle thelarge datastreams.Thisisalthoughnot
 absolutelynecessaryintraditionalsettingsfore-learningdomain,but
 asdescribedabove,ourproposedclassificationapproachprincipleisa
 domainindependent,itallowstoemploythemethodindomainswith
 huge amount of observations flowing in. Moreover, considering data
 signalssuchasuser'sgazeorface,evenine-learningdomainweare
 confrontedwithhugedatastreams.Ourapproachalsohelpstoprocess
 datacomingwithirregularintensityandeliminatepossibleoverload,
 which is a common example in the e-learning domain (e.g., several
 minutesbeforedeadline,nightbeforeexam). 
 Both, stochastic and batch, approaches are based on a certain
 hypothesis (Eq. (1)), which can be in the case of a third degree
 Fig.1. Big5personalitytraitsforthetotalof160bachelorstudentsofSoftwareengineeringcourse.ResultsrepresentspercentilefortheSlovakpopulationobtainedbasedon
 theNEO-FFIpersonalitytest. 
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 140



6

------------------------------------------------

 
 
 
 
 polynomialclassifier,whichweuse,describedas: 
 
 Hyphotesis:hΘ x ð Þ¼ΘT x;x2;x3 (cid:1) (cid:3) ¼Θ 1 x 1 þΘ 2 x 2 þ…þΘ nþ1 x 1 2
 þΘ nþ2 x 2 2þ…þΘ 2nþ1 x 1 3 
 þΘ 2nþ2 x 2 3þ…þΘ 3n x n 3 ð1Þ 
 wherexisasetofattributesx 
 i 
 describinganobservation,weights 
 Θ 
 representasetofimportancemeasuresbywhichareconsidered 
 observation attributes when observation is being classified. To 
 optimizetheweights 
 Θ 
 ,issequentiallycalculatedbyEq.(2). 
 Θ j ≔Θ j (cid:2)λ ∂ ∂Θ 
 j 
 J Θ 0 ;…;Θ 3n (cid:1) (cid:3) ð2Þ 
 Aftereveryiteration(allobservationconsidered),weight 
 Θ 
 j 
 is 
 reduced by derived cost function J multiplied by learning rate 
 λ 
 . 
 Thelearningrateisusedtoaffecthowmuchattributesweightsare 
 changed afterincorrect classification. Generally, it is averysmall 
 numbercloseto0ensuringthatweightsaredecreasedbyverylow 
 valueateverytimewhenclassisclassifiedincorrectly. 
 Thedifferencebetweenbatchandstochasticapproachesisina 
 way the cost function J is calculated. In batch approach (Eq. (3)) 
 (RobbinsandSiegmund,1971)thecostfunctionJiscalculatedand 
 weights Θ are modified after training the classifier on all data 
 observations(onceperiteration). 
 J Θ (cid:1) (cid:3) ¼ 1 2m Xm i¼1 hΘ xi ðÞ (cid:4) (cid:5) (cid:2)yi ðÞ (cid:4) (cid:5) 2 ð3Þ
 where m represents the number of observations considered, hΘ 
 xi ðÞ 
 (cid:1) (cid:3) 
 is the hypothesis for ith observation xi ðÞ and yi ðÞ is the real 
 observationclass.Instochasticgradientdescentapproachthatwe 
 used, every observation is considered only one time, so the big 
 amountofdatacanbeprocessed.Inthiscase,thecostfunctionJis 
 calculatedaftereveryobservation(BottouandBousquet,2008). 
 This brings the advantage of much fasterdata processing and 
 effective reaction to dynamically changing data. Single iteration 
 dataprocessingalsoeliminatestheoverfittingproblem,whichcan 
 occurinbatchapproachwithtoomanytrainingiterations.Onthe 
 other side, stochastic approach requires to be trained on much 
 moreobservationsthanthebatchonetoreachthesameclassifi- 
 cationprecision(2)(Fig.2). 
 4.2. Dealingwithunbalanceddata 
 The binary classification task is a specific type of classification 
 problem,whereassessedobservationcanbeclassifiedonlyintoone 
 of two considered classes. In case of classification the web session 
 end, this approach however suffers to unbalanced classes problem. 
 The sessionclassification ine-learningdomain is notthe exception, 
 because it is predictable that user browses multiple pages (e.g., 
 learningobjects)beforehe/sheleavestheapplication,whichbringus 
 to ratio "1: average session length" in favor to a class containing 
 observationswhenuserscontinuedtobrowsecontentinsystem.This 
 disproportioncauses,thatifclassifierwillclassifyallobservationsas
 belonging to the more numerous class it reaches the very high accuracydespitethezeroprecisiononrarerclass.
 To reduce this disproportion, there exist three standard
 techniques-the oversampling the rarer class, undersampling the
 wideroneorassignthedifferentimportancetoincorrectclassifi-
 cationtoobservationsofbothclasses(Bottou,2012).
 Variant with oversampled and slightly multiplied rarer class
 (visit of last learning object in a session) brings the more accep-
 table ratio from the view of balance between classes and con-
 currentlyitdoesnotinterferetherealsituationtoomuch.Incase of rarer class observations an overfitting problem can occurs, as
 these observations have to been multiplied to up to level of the
 majorityclassobservationsoccurrence. 
 Another possibility of dealing with unbalanced classes is to
 undersample the majority class, which would mean to throw away
 the huge amount of observations. If we want to use the under-
 sampling technique and to balance the ratio between classes to be
 similartoabovementionedone,we have tothrowawaysignificant
 portionofallobservations,whatweconsiderinappropriate.
 The third approach to solve the classes' imbalances problem-
 assign of the different importance to observations. Based on its
 idea, we proposed the adjustment of the Eq. (2), by assigning
 weightcoefficientw 
 c 
 ascanbeseeninEq.(4). 
 Θ j ≔Θ j (cid:2)w c (cid:3)λ ∂ ∂Θ 
 j 
 J Θ 0 ;…;Θ 3n (cid:1) (cid:3) ð4Þ
 Thesenseofw 
 c 
 istoreducetheclasses'imbalancesproblemby
 changing measure by which the classifier's attributes weights Θ
 areadjustedaftertheincorrectobservationclassification.Itsvalue
 is calculated by Eq. (5) as number of all observations classified
 divided bynumberof observations fromthe class as the actually
 classifiedonehas. 
 w 
 c 
 ¼ 
 #ofallobservations 
 #ofactuallclassobservations 
 ð5Þ 
 Thismodificationofstandardstochasticgradientdescentapproach
 results in the approximately equal classification precision for both
 consideredclasses,becauserarerclassisconsideredwiththehigher
 importanceintheprocessofclassifierattributesweightslearn.
 Generally, we try to do not throw any data, as this can lead to
 incorrectlytrainedclassifiermodel(byomittingsomedataandthus
 students' behavior patterns). The overfitting (introduced by over-
 samplingofrarerclass)howevermaynotbeprobleminthecaseof
 stochastic approach. Thus we propose to use the technique of
 assigningdifferentweightsforapenalizationofthewrongrarerclass
 prediction,potentiallyincombinationwiththeoversampling.
 5. Evaluationofproposedclassifier 
 To evaluate proposed classifier and to tune its features, we used
 several variants-global classifier (classifier using only the attributes
 weightstrainedforallobservations)andalsopersonalized"peruser"
 (classifier using attributes weights trained foreach user individually)
 and "per course" (classifier using attributes weights trained for each
 course separately). Next, we devised optimal settings as the value of
 learningrate 
 λ 
 ,thedegreeofoversamplingandtheweightsofobser-
 vations belonging to both classes. We repeat the training process in
 multipleiterations,inordertocompareclassificationresultsafterdif-
 ferentamountofobservationsprocessedandtoanalyzetheoverfitting
 oflearnedmodel.Wealsoconfrontourresultswithsimilarclassifica-
 tion tasks (conversion rate, etc.). As the first step we have to pre-
 processdatacomingfromthee-learningsystemtobeabletousethem
 inprocessofevaluationofproposedclassifiermethod.
 Fig.2. Principleofproposedclassifier-logstreamisclassifiedusinguniquepre- 
 diction model for every user, while model attributesweights are updated with
 everyobservationsimultaneously. 
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 141



7

------------------------------------------------

 
 
 
 
 
 5.1. Datapre-processingandfeatureextraction 
 Evaluationphasewasperformed onreal web-based logs from 
 our educational system ALEF (for more details about system, see 
 Section3.2).Forourtaskweusedtheinformationaboutstudents' 
 visitsoflearningobjects(LOs).Wehadavailableactivitylogsabout 
 learning object (LO) visits from 882 users within 3 years, which 
 meansalmost452,000observations.Theselogscontainattributes 
 describing information about the student and LO and also the 
 interactiondetailssuchas: 
 - Studentinformation-uniqueidentifier,role 
 - Learning object information - unique identifier, course, type, 
 difficulty,rating,parent,title 
 - Interactiondetails-user,LO,component,fromwhichusercame 
 toLO-menu, somewidgetorfromoutside, beginofinteraction 
 timestampandinteractionduration 
 Loggedattributesdonotofferthesufficientdistinctivefeatures 
 forclassifier,basedonwhichitwouldbeabletodecidebetween 
 classes. From the classifier performance point of view, the selec- 
 tion of distinctive features plays crucial role (Nagy and Gaspar- 
 Papanek,2009).Forthisreasonweproposedadditionalattributes 
 (forthecompletelistseeAppendixA): 
 - Sessiondescribingattributes 
 ○ Order of visited LO in session, time spent in session before 
 visitcurrentLO,flagifiscurrentLOfirstorlastinchapter,etc. 
 ○ Average session length in course (month, week, day, hour, 
 monthday,weekday) 
 ○ Actual difference from average session length in course 
 (month,week,day,hour,monthday,weekday) 
 - Advancedtimestampattributes 
 ○ Monthday,month,weekday,week,day,hour 
 ○ Booleantimeflags-isholiday?iswintersemester?issummer 
 semester?arewinterexams?aresummerexams? 
 - Behaviordescribingattributes 
 ○ The number of LO visits (or seconds) the user spends in 
 applicationbeforeleaving-averageforcourse,month,week, 
 day,hour,monthday,weekday 
 ○ ThedifferencebetweennumberofLOvisits(orseconds)the 
 user spends in application beforeleaving and the averageof 
 allusers(fordescribedtimeperiods) 
 ○ Global average probability of leaving the application from 
 currentLO? 
 ○ Flags-isactualsessionlength(clicks,time)abovetheaverage 
 incourse(month,week,day,hour,monthday,weekday)? 
 ○ User'saveragesessionlength(clicks,time) 
 - LOstructuredescribingattributes 
 ○ LOcourse 
 ○ SourceofLO 
 ○ Flag-istheLOthelastoneinchapter? 
 Weused 12directlylogged attributes,14thatoriginatedfrom 
 the transformation of polynomial attributes into the binominal 
 andwealsodevised62derivedattributes,whichtogetherresultin 
 88differentattributes.Asweusedalsosquaredandcubicpowers 
 forallattributes,weworkedwith264attributesintotal. 
 Allnumericattributeswerenormalizedtointerval o(cid:2)1;14. 
 Attributes based on average of otherattributes(e.g., averageses- 
 sionlength,averagetimespentforLOvisit)werecalculatedonly 
 from historical observations trained before. It means that quality 
 ofthiskindofattributesgrewintime. 
 Observationswereclassifiedbasedontheresultofthehypothesis 
 describedinEq.(1).Observationswiththepositivehypothesisresult 
 wereclassifiedasthevisitsoflastLOsinthesession,otherwiseasa 
 non-last (a usercontinues to study the LOs in the e-learning appli-
 cation).Theuser'sactivitywassplitintosessions,basedontherule-
 twosessionsareseparatedatleastby30mininterval(Liuetal.,2010).
 Thisrulewasdevisedespeciallyforsessionsinthee-learningdomain,
 wheretheuserscouldstudysomeLOoradifficultexerciseforalong
 timewithoutleavingtheapplication. 
 In the pre-processing we removed suspiciously long sessions.
 These are caused by various robots created due to crawl system
 educational content or to simulate students' activities. For this
 reason,weexcludedtop10%oflongestsessions.
 5.2. Classifierevaluation 
 At first we compared precision and accuracy of the classifier
 trainedbyvariousways-globallyandpersonalizedperuserandper
 course.Theglobalvariantmeans,thattheonemodelforclassification
 wastrainedforallusers.Intheopposite,inthepersonalized"peruser"
 variant,onemodelforeachuserwastrainedrespectively.Moreover,
 wealsotraineda"percourse"classifier,whichanalogicallymeans,that
 onemodelforeverycoursewastrained.AscanbeseeninFig.3a,the
 classifierresultsincreaseinallcaseslogarithmically.Afterfirstitera-
 tion (452,000 observations considered) reaches the best results the
 global classifier variant (precision: global¼0.262, per course¼0.256,
 per user¼0.229; accuracy: global¼0.812, per course¼0.810, per
 user¼0.802).Thereasonisthatthisvariantwastrainedonthehighest
 number of observations. In our data there are 5 separate courses,
 whichgivesinaverage90,400observationspercourseand882users
 with 512 observations of LO visit in average per user. Used dataset
 contains30,767sessions,whichgivesinaverage35sessionsperuser
 andconsequentlythe35observationsofrarerclass,whichisquitea
 lowamount.Forthisreason,weranexperimentondatasetinmul-
 tiple iterations, as a compensation of an observations quantity. We
 realizethepossibilityofclassifieroverfitting,whatweverifiedinlater
 experiments. 
 From the next iterations pointof view, presented in Fig. 3a, it is
 clear,thatpersonalizedapproachesreachthebetterresultsthanthe
 global variant. Per course variant outperformed the global one after
 5thiteration(2,260,000observationsconsidered,452,000inaverage
 percourse).Peruservariantovertookbothothersafter7thiteration
 (3,164,000observationsconsidered,3587inaverageperuser).
 Personalized variant reached better results as global variant, after
 someamountofiterationsconsidered,becausethedatacontainsonly
 few observations, so personalized classifier is not sufficiently trained
 before. According to collected data, the students of the ALEF system
 behaveveryheterogeneously,soitisverydifficultforclassifiertolearn
 some general rules. This problem occurs mainly for global classifier
 variant,butitpersistsalsoincaseofpercourseclassifier,becausethere
 isstillalotofusers(typicallyfewhundreds)withdifferentbehaviorin
 thecourse.Ourexperimentshows(Fig.3a)thatthesameusersbehave
 moresimilarlyacrossmultiplecoursesthanvarioususersinthesame
 course.Basedontheresultsreachedinthefirstexperimentwedecided
 to use the classifier with model trained per user in the next
 experiments. 
 In the second experiment we focused to optimization of the
 learning rate 
 λ 
 . This parameter is important in a phase of mod-
 ifying attributes weights as was shown in Eq. (2). Results clearly
 show (Fig. 4a) that all tested variants achieve a logarithmical
 increase of precision. There is also a dominance of variants con-
 sideringnumberofrowstrainedbefore. 
 As shown in the Fig. 4a, the classification precision increase
 variously, based on used learning rate. The rate λ¼ 1
 rows þ1013
 (cid:6) (cid:6) (cid:6) (cid:6)
 whichreachesthehighestprecisionafterseconditeration,wasin
 firsttwoiterationsoutperformedby4anotherlearningrates.The
 differentlearningspeedbasedonvarious 
 λ 
 ,iscausedbyafactthat
 toosmallratesslowdownthelearningprocessandareunableto
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 142



8

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 dynamicallyreacttochangesindata,whiletoobiglearningrates 
 donotofferenoughsensitivitytofittheclassificationtodata. 
 Similarly,wecomparedsolutionstoclasses'imbalancesproblem.At 
 firstweusedthetechniqueofoversamplingtherarerclass(lastLOin 
 session). The experiment has been performed with oversampling to 
 betweenclassratio1:14(realratiobetweenclasses),1:7,2:7and1:1. 
 Results in the Fig. 3b show that there is no clear winner, because 
 accuracyand precision create an inverse proportion. When the rarer 
 class is oversampled to 1:7 ratio, there is a relatively high accuracy 
 (0.796)andalsotheprecisionofrarerclassismorethandoubled(0.209 
 afterfirstiteration,0.262after5iterations)incomparisontonoover- 
 sampling.However,itisthemostappropriatetousethevariantwith 
 equalratiobetweenclasses,becauseinthiscasethemethodobtainsfor 
 bothclassessimilarresults(0.628accuracy,0.619precisionafterfirst 
 iteration). 
 Incaseofoversamplingvariants,therecaneasyoccuraproblemof 
 overfittingoftherarerclass(the1:14betweenclassesratiomeansthe 
 rarer class 14 times multiplication, which results to classifier over- 
 fitting). In case of variant used in previous experiments, there was 
 rarer class duplicated (2:7 ratio), so the observations occurrence is 
 closetotherealsituation,butherewecanseeapoorresultofrarer 
 class classification. For this reason, we experimented also the 
 assigningthedifferentweightstoobservationsbelongingtoindividual
 classestoreducetheclasses'imbalancesproblem(Fig.3c).
 Whenpredictinguser'sfuturebehavior,itisnotalwaysimportant
 onlytoidentifytheuser'slastactioninthesession.Forthistaskitis
 sufficienttofindoutthattheuserwillprobablyleavetheapplicationin
 shorttimeorafterthenextfewpageviews.Suchaninformationcan
 be even more useful than identification of the lastaction, because it
 providesmoretimetomakeanoffertothestudentwhatwillmake
 him/herretainintheapplication. 
 For this reason, we experimented with various settings of dis-
 tributingtheobservations(students'LOvisits)intoclassesindifferent
 way.Thesesettingsdeterminedwhichobservationsareconsideredas
 the near to session end. At first, we experimented with zero (as in
 previousexperiments)uptothreeLOsconsideredasanendofses-
 sion.Afterthatwealsodistributedobservationsintoclassesaccording
 to time remaining to the session end. In this case we consider as
 positive class observations the LOs visited under 5,10,15 and 30s
 beforethesessionend. 
 Theclassifierreachedinallcasesresultssimilartotheclassifier
 variantwithdifferentweightsconsidered(describedinFig.3c).In
 this experiment, we however considered sessions as a units and
 Fig.3. a)Precisionandaccuracyreachedbyvariousclassifiervariants;b)Peruserclassifierresultsforvariousoversamplingdegreesofrarerclass(userendsthesession);c)
 Peruserclassifierresultsforvariousoversamplingdegreesofrarerclass(userendsthesession)incomparisontoassigningthedifferentweightstobothclasses.
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 143



9

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 weobservedthepercentageofsuccessfullyidentifiedsessionends 
 (Fig.4bandc). 
 Aswecansee(Fig.4bandc),weareabletoclassifysessionend 
 forrelativelyextensivepercentageofsessions.Thetaskofidenti- 
 fication of session is going to end, i.e. classify at least one of the 
 lastnLOvisits,isveryhelpfulforrealwordapplications. 
 Inpreviousexperimentswecontinuouslytrainedtheclassifieron 
 the stream of all available data. Logically, this arises the question, 
 whethertheimprovingclassificationresults(Fig.3c)arenotcausedin 
 addition to classifier learning by its overfitting. For this reason, we 
 divided sessions of each user into the train and test sets (9:1 ratio). 
 Thenwetrainedtheclassifierontheonlytrainsetinmultipleitera- 
 tionsandaftereachofthemweevaluateditonlyontheobservations 
 belonging to the test set. The classification results on the test set 
 reached the initial results very similar to the ones we presented in 
 Fig.4bandc.Innextiterations,however,theincreaseofprecisionand 
 alsoaccuracyisstillvisible,butitismuchslower.Theresultisthatthe 
 stochasticclassifiertrainedindividuallyperuserneedshighamountof 
 observationstobetrainedoptimally. 
 Similarworksfocusingonexitintentorusers'attritionlookat 
 the problem typically in a larger scale. In other works, observa- 
 tionsdescribetheuserbehaviorforalongertimeperiod,sothey 
 are lessvariationprone.Also user'sdecision aboute.g.,canceling 
 his/her bank account, buying the insurance or mobile operator 
 program is a long-term decision, while our aim of leaving the 
 sessionclassificationismostlybasedontheuser'scurrentcontext, 
 whichismoredifficulttoestimate. 
 Forclassificationofbankcustomerswhoareinriskofattrition, 
 Lietal.(2011)reachedanaccuracyfrom0.618(NaïveBayes),0.793 
 (Logisticregression)to0.847(if-thenruleswithRIBBERmechan- 
 ism) and precision from 0.572 (Naïve Bayes), 0.790 (Logistic 
 regression) to 0.883 (if-then rules with RIBBER mechanism). In 
 caseofclassificationthestudent'slearningcoursedropout,Bayer
 etal.reachedwiththemostsuccessfulclassiertheaccuracy0.688
 and precision 0.705 (Bayer et al., 2012). Their solution uses the
 PARTruleclassifierbasedonstatisticalrules.
 Fromtheseresultsisvisiblethattheclassificationonlongterm
 data reach the better results. For this reason we evaluated our
 classifieralsoonbanktelemarketingdataset(Moroetal.,2014).In
 thiscaseourapproach(globalvariant)reachedaccuracy0.876and
 precision 0.485 after first iteration through dataset (45,212
 observations,1:9 ratio). Moro et al. reached on the same dataset
 accuracy 0.810 and precision 0.400 (Moroet al., 2014). Our solu-
 tion is thus comparable with current state-of-the-art and the
 computationcostislower.Thelowerresultsine-learningdomain
 arecausedbyadifficultyofatask. 
 5.3. Attributesimportance 
 It is clear that the attributes were in the classification process
 consideredwithdifferentweights(astheresultoftrainingphase).
 In other words, some of the attributes contributed to the results
 morethanother.Thetopattributesimportanceforindividualusers
 slightlyvaryfromusertouser,buttherearesomeattributes,which
 weights belong consistently to the top important (Appendix A).
 Theseattributesareconsistentwiththetopattributesoftheglobal
 classifiervariantsuchas(indescendingorder):
 1. Global average probability of leaving the application after vis-
 itingthecurrentLO 
 2.LOvisitorderinthecurrentsession 
 3.User'saveragesessionlength(LOvisits)normalizedbyastatic
 constant 
 Fig.4. a)Precisionofperuserclassifierreachedwithvariouslearningratemeasure;b),c)Precisionofidentificationthesessionend.Successfulpredictionisrepresentedby
 identificationofatleastoneofobservationsaccomplishingsetconditionsb)clicksconsidered,c)timeconsidered.
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 144



10

------------------------------------------------

 
 
 
 
 
 4.The difference of the session length (LO visits) between the 
 currentcourseandaverageofalluser'scoursesnormalizedbya 
 staticconstant 
 5.The difference of user's average session length (LO visits) and 
 theaverageofallusers'sessionsnormalizedbyastaticconstant 
 Aswecansee,themostimportantattributes(2ndupto5th)are 
 derived from the numberof LOs visited in the current session. Sur- 
 prisingly, when comparing to the attributes connected to the time 
 aspectsofstudents'behavior,theseproventobelessimportantasthe 
 simplecountofLOsvisited.Basedonthis,weconcludethatatleastin 
 thedomainofe-learning,itismoreimportantforstudentstocover 
 specifictopicsofmaterialsincomparisontotimetheyspendonit. 
 Thesecondresultisthattheimportantattributeshavebeennor- 
 malizedbythesamenormalizationmethod.Allattributeswerenor- 
 malized both by division by the maximal value for that attribute 
 measured out up to current observation (maximum was increased 
 progressively) and also by large static constant (estimated once by 
 expertbeforethetrainingprocess).Resultsshowedthattheattributes 
 normalizedbyastaticconstantreachedbetterresults.Thereasonis 
 that the normalization by a dynamically increased maximum can 
 create from the equal attribute values different results in various 
 phasesoftheclassifiertraining.Otherwell-knownapproachescanbe 
 usedforthe normalizationofattributescoveringthedynamicchar- 
 acterofdataranges(e.g.,Z-score). 
 5.4. Predictionqualityindicators 
 Inprevious experiments we found out that users behave het- 
 erogeneouslyas we mentioned before and thus the performance 
 ofproposedclassifiervariesforvarioususers.Forthisreason,we 
 wantedtoknow,forwhichofthemweareabletopredictthemost 
 precise or accurate. At first, we found out there is a correlation 
 betweencountofuser'sactivityobservations(882users)andthe 
 precision (0.10419, p¼0.00097), respectively the accuracy 
 ((cid:2)0.19284, p¼0.00001), according to the one tailed t-test on 
 Pearsoncorrelationmeasure.Fromtheseresultsitisclearthatwe 
 areabletobetterclassifysessionendsofuserswithhigheramount 
 of observations, but on the other side the overall classifier accu- 
 racyishigherforuserswithlowernumberofobservationslogged. 
 For 160 users in our dataset, we had also additional information, 
 which were not used in classification process-their study records 
 (midterm exam, activity, final exam, estimation of final exam score 
 basedonsemesterscoreandalsofinalgrade)andtheNEO-FFIques- 
 tionnaireresultsforBig5personalitytraits(neuroticism,extraversion, 
 openness to experience, agreeableness and conscientiousness) (Costa 
 and McCrae,1989). The NEO-FFI is based on the NEO-PI personality 
 inventoryandconsistof60questions(12perdimension).Despitethe 
 revisedinventoryhavebeenpublished(McCraeandCosta,2004),the 
 basicNEO-FFIisstillmassivelyusedandconsideredasreasonableand 
 reliableformostcultures(McCraeandCosta,2004;Robinsetal.,2001). 
 Fortheseusersweobservedcorrelationbetweenclassificationresults 
 andthesecharacteristics. 
 As we found out, the most correlating attributes are classifi- 
 cationpredictionandfinalcourseresultsasthefinalcoursegrade, 
 the score reached on final exam and the final course score. We 
 found the statistically significant correlation between the preci- 
 sion and the final exam score (0.1445, p¼0.03415) respectively 
 between the precision and the final course grade (0.1283, 
 p¼0.05434).Inbothcases,therewasapositivecorrelation,which 
 meansthatwewereabletoclassifybettertheactionsofuserswho 
 reachedthebetterfinalresultsintheircourses. 
 In case of NEO-FFI characteristics we found the significant 
 correlation between the conscientiousness and the accuracy 
 ((cid:2)0.2081, p¼0.00414) respective the precision ((cid:2)0.1853, 
 p¼0.00949). This personality trait describes a user's tendency to 
 showself-discipline,actdutifully,andaimforachievementagainst
 measures or outside expectations. In this case we can see the
 negative correlation, which means that we can better classify
 actions of users who are spontaneous and use instincts in com-
 parison to users who control their behavior. Except the con-
 scientiousness characteristic, we found out also the correlation
 betweenprecisionandextraversiontrait(0.1264,p¼0.05561).
 In addition to NEO-FFI, we experimented also with Felder and
 Silverman(1988)LearningStyles.IntheALEFsystemthreeyearhis-
 toryconsidered forthis evaluation, there are learning styles for233
 studentsavailable,forwhichwecomparedvariancebetweenindivi-
 dual model dimensions according to precision and accuracy of the
 proposedpredictionmethod.Basedonone-wayanalysisofvariance
 (ANOVA),wehoweverfoundoutthatthepredictionprecision(accu-
 racy) results have no statistically significant differences within the
 individual model dimensions. Based on this result we cannot prove
 the usability of Felder and Silverman Learning Styles in the task or
 user session end prediction (when the model is trained per user).
 Similarly,totheperuservariant,theglobalvariantdoesnotseemto
 perform better, when learning styles are included. However, more
 evidenceisneededtoexplorelearningstyleusageinvariouseduca-
 tionalsystems.Inadditiontocomparisonofmodeldimensions'var-
 iance(tothepredictionresults),wecomparedalsopredictionpreci-
 sion with or without learning styles considered. Our experiments
 howeverdidnotbringsignificantimprovementswithlearningstyles
 included(1stiteration:prec¼0.6018withLS,prec¼0.598withoutLS;
 5thiteration:prec¼0.625withLS,prec¼0.624withoutLS).
 ResultsobtainedforNEO-FFIcharacteristicsanduseractivitycon-
 sideration however indicate the possible improvement of prediction
 accuracyincomparisontousageofstandardusermodelbasedononly
 on the user behavior and content characteristics. Moreover, as the
 students'characteristicsandtheirstudygoalsvary,wediscoveredthat
 weareablepredictbehaviorofstudentsreceivinghigherfinalgrade.
 Thiscanbeexplainedbythefactthatitishardtopredictbehaviorof
 randomly browsing students which don't have clearly defined goal
 when learning. We believe that the usage of more students' char-
 acteristics (related to students' personalities), will even increase the
 precisionofpresentedpredictiontask. 
 6. Conclusions 
 E-learningsystemsnowadaysreachstillgreaterpopularity,dueto
 thebenefitstheybringtothelearners.Thee-learningbecame,these
 days,essentialpartofthetraditionallearning,byenhancingitbythe
 variety of offered courses to large amount of students all over the
 world, personalization of learning materials to individual student's
 needs,meansforcollaborationduringthelearningprocessandvariety
 of learning content (learning materials, exercises, tests, interactive
 videos,discussforums,etc.). 
 There are several challenges connected to the e-learning and
 students' feedback mining inparticular. The students' behavior pre-
 dictionisoneofthem.Inthispaperwefocusedonthepredictionof
 thestudent'ssessionend(generallyknownasattritionorconversion
 rate task). Prediction of users' attrition rate within the session can
 improve quality of user interactionwith an application. If we were
 abletoclassifythatuserwillprobablyleavetheapplicationverysoon,
 wecanoffertohim/hersomereasonswhytostaylonger,forexample
 by recommending him/her the interesting content. In e-learning it
 can be materials he/she did not studied before or test questions to
 evaluatehis/herknowledge,ine-shopitcanbeadiscountcouponor
 someinterestinggoodstobuy. 
 From the educational process point of view, the proposed
 approachcanbeusedtoimprovenotonlythestudentexperience(in
 thesysteminteractioncontext),butalsototheincreaseofstudents'
 performance (from the knowledge point of view). The information
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 145



11

------------------------------------------------

 
 
 
 
 indicatingstudents'exitintent-allowsustoselect,i.e.,recommenda 
 content,whichwillmaximizethestudent'sknowledge.Accordingto 
 the actual course roadmap, recommending exercises or content, 
 which provides keyconcepts, helps the students to learn important 
 conceptsmoreeffectively.Similarly,wecanmotivatethestudentsby 
 stressing various mechanisms often including in e-learning systems 
 (e.g.,student'sscore,badges,discussion).Alloftheseactionsshould, 
 however, aim to increase the students' knowledge and to increase 
 learningexperience. 
 Weexploredaclassificationofdynamicallychangingdatastreamof 
 observationaboutstudents'interactionwithlearningobjectsinvarious 
 learningcourses.Weobservedthatthereisahugeheterogeneityover 
 users'behaviorduringtheterm.Wedealtwithunbalancedclassifica- 
 tionclassesalso.Tobeabletoclassifydatawiththeseobstructionswe 
 proposed personalized polynomial classifier using attributes' weights 
 calculated for each user individually. The weights are dynamically 
 calculated using stochastic gradient descent approach, which lowers 
 computationalcosttostandardbatchapproaches. 
 We found out that the classifier variant with attributes weights 
 learnedforeveryuserreachesaftertrainingonsufficientamountof 
 databetterresultsthanthevariantwhichlearnedattributesweights 
 for all users globally. We also experimented with the data over- 
 sampling and the attributes types' augmentation which together 
 bring a significant improvement of the classification performance. 
 Duetothechanceofoverfittingtheoversampledclass,weassigned 
 thedifferentimportancetoobservationsbelongingtotheindividual 
 classifiedclasses.Inthiswayweobtainedmore robustsolutionnot 
 suffering to overfitting problem. Moreover, we applied proposed 
 methodtodatafromadomainofbanktelemarketing.Similarly,tothe 
 e-learningdomain,wereachedbetterresultsthanotherapproaches 
 usedinboththesedomains. 
 For the classificationpurposes weproposedvarious attributes 
 describing the students, learning objects, students' visits of 
 learningobjectsandalsoindividualsessions.Resultsclearlyshow 
 that the highest importance in the classification process reached 
 the attributes describing the session (not the learning object 
 content or interaction context). As the most important, showed 
 the attribute carrying the information about global probability 
 thatstudentsleavetheapplicationoncurrentlearningobject.The 
 second up to fifth most important attributes however described 
 the sessionproperties. All of them consider the session fromthe 
 some view of the amount of learning objects visited in session 
 (and not for example of time spent there, which was also con- 
 sidered in another attributes). From this, we can conclude that 
 users in e-learning system (students) care more if they studied 
 sufficient amount of materials, than the overall time spend in 
 sessionorothercharacteristic. 
 Weobservedalsotheclassifierperformancevarietyoverusers 
 intheexperiments.Theclassificationprecisionandaccuracycor- 
 relates with number of observations per user available, which is 
 obvious.Butthereexistsalsoacorrelationbetweenprecisionand 
 user's course results and also his/her personal characteristics 
 (NEO-FFIpersonalityinventory). 
 Inadditiontopredictionoflastlearningobjectvisitinthesession, 
 weextendthistasktotheidentificationthatthesessionwillprobably 
 end very soon (in next few learning object visits or the in specified 
 timeinterval).Itgives usmoretimetoinfluencethestudenttostay 
 longerintheapplication,incomparisontothecasewhentheonlylast 
 action is identified. We are able to predict the session end for more 
 than92.19%ofsessions(atleastonefromlast4learningobjectvisitsin 
 thesession)after1stdataiterationand93.53%after5thiteration.Next, 
 we are able to predict session end for 76.27% of sessions after 1st 
 classifieriterationiftimewasconsidered(atleastonelearningobject 
 fromlast30sofsession)and78.31%after5thiteration. 
 We evaluated the proposed approach on the data obtained 
 from standard e-learning system. As our aim is to predict user 
 behavior-fromtheattritionratepointofview,thisisusuallynot
 dependentonthespecificsystemstructureorcontent.Thanksto
 this, our approach is applicable to various, not only e-learning
 systems. In other words, as presented in Table A2 and A3, all
 attributes(raworderived)areusuallyloggedandstoredbyanye-
 learning system (including attributes describing a content).
 Moreover, thanks to the proposed approach variability - more
 attributes (when available) can be included, while the learning
 algorithmevaluatesitsimportance. 
 We have shown that students' feedback and behavior can be in
 connectiontothemachinelearninganddataminingtechniquesused
 toimproveuserexperience.Moreover,thepredictionofusers'behavior
 isvaluablesourceofinformationforbusinessaswell.Inthenextyears,
 thankstopopularityofwearablecomputersoreyetrackingtechnolo-
 gies,wecanexpectmoreandprecisesourcesofusers'feedback.
 Proposed approach is based on students' actions described
 (based on the stream data) from various views. We covered
 information about learning objects, their structure, user typical
 long-termandshort-termbehaviorintheactualsession.Students'
 actions are however considered separately, independently from
 previousactions.Itisclearthatbasedonstudents'similarities in
 standardbehavior,somepatternscanbediscoveredandidentified.
 Whenconsideringlowlevelactions,patternsinbrowsing,e.g.,tab
 open, close or switch can be captures. On the contrary, when
 considering high level actions, e.g., the difficulty or sequences in
 various difficult LOs' will hopefully bring additional distinctive
 information for the classifier. Such an information, will be extre-
 mely valuable when facing the cold start problem - not enough
 informationaboutuserorstudentavailable. 
 Tospeakmoregeneral,suchpatternscanbediscoveredinvarious
 domains,andbehelpfulfortheclassificationtask.Ontheotherhand,
 thesourceofsuchpatternhavetobechosenforspecificdomain,e.g.,
 learningobjectdifficultyfore-learning,topicofarticlecontentfornews
 orpricelevelfore-shop. 
 Based on these assumptions, we plan to consider also
 sequences of previousactions made bystudent in actual session.
 This may help to discover typical behavioral patterns and to
 explore latent dependencies in student's behavior (using Deep
 belieforRecurrentneuralnetworks)beforethesessionend.
 Acknowledgment 
 This work was partiallysupported by Grants nos. VG 1/0774/16,
 VG1/0646/15andKEGA009STU-4/2014anditispartialresultofthe
 Research and Development Operational Programme for the project
 International center of excellence for research of intelligent and
 secure information-communication technologies and systems, ITMS
 26240120039, co-funded by the European Regional Development
 Fund. 
 AppendixA 
 In TableA1wepresentlistofweightsofattributesusedinthe
 classificationprocess.Leftpartreferstotheweightsoftheclassi-
 fiervariantwithglobalattributes'weights;rightpart:weightsof
 classifiervariantwithperuserattributes'weights(randomuser).
 Attributesaremarkedasw01-w88,detaildescriptioncanbefound
 in Table A2. Every attribute has listed weights for basic, square
 andcubicpowers.Attributesorderissetassumofabsolutevalues
 ofallthreepowers.Inthe TableA3canbefoundattributes,which
 aredirectlyloggedbythesystemALEF.Theyareusedasthebasis
 fortheclassificationattributesdescribedinTableA2.
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 146



12

------------------------------------------------

 
 
 
 
 
 TableA1 
 Exampleoftrainedattributesweights.ThedescriptionofspecificweightispresentedinTableA2.
 Weightstrainedglobally Weightstrainedforspecificuser 
 Attribute Basic Square Cubic Attribute Basic Square Cubic 
 w34 1,65E(cid:2)17 (cid:2)2,08E(cid:2)17 9,90E(cid:2)18 w71 (cid:2)2,90E(cid:2)11 (cid:2)2,90E(cid:2)11 (cid:2)2,90E(cid:2)11
 w48 (cid:2)1,28E(cid:2)17 1,23E(cid:2)17 1,83E(cid:2)18 w34 5,60E(cid:2)11 1,63E(cid:2)11 6,82E(cid:2)12
 w06 7,87E(cid:2)18 1,88E(cid:2)18 3,90E(cid:2)18 w21 3,93E(cid:2)12 9,98E(cid:2)12 1,08E(cid:2)11
 w75 1,07E(cid:2)17 (cid:2)1,90E(cid:2)18 5,90E(cid:2)19 w72 7,47E(cid:2)12 7,47E(cid:2)12 7,47E(cid:2)12
 w80 (cid:2)9,43E(cid:2)18 (cid:2)1,86E(cid:2)18 1,77E(cid:2)18 w13 (cid:2)5,96E(cid:2)12 (cid:2)7,84E(cid:2)12 (cid:2)6,43E(cid:2)12
 w51 (cid:2)3,36E(cid:2)18 6,75E(cid:2)18 (cid:2)2,16E(cid:2)18 w73 1,37E(cid:2)11 3,20E(cid:2)12 3,20E(cid:2)12
 w74 3,15E(cid:2)18 (cid:2)4,72E(cid:2)18 3,70E(cid:2)18 w19 5,45E(cid:2)12 6,84E(cid:2)12 7,36E(cid:2)12
 w76 3,57E(cid:2)18 (cid:2)5,17E(cid:2)18 2,28E(cid:2)18 w76 6,23E(cid:2)12 6,03E(cid:2)12 5,21E(cid:2)12
 w65 1,17E(cid:2)18 5,62E(cid:2)18 3,42E(cid:2)18 w79 (cid:2)8,80E(cid:2)12 (cid:2)1,67E(cid:2)12 (cid:2)6,09E(cid:2)12
 w83 (cid:2)2,10E(cid:2)18 (cid:2)1,96E(cid:2)18 4,97E(cid:2)18 w48 3,95E(cid:2)12 4,94E(cid:2)12 4,84E(cid:2)12
 w71 (cid:2)2,90E(cid:2)18 (cid:2)2,90E(cid:2)18 (cid:2)2,90E(cid:2)18 w70 4,19E(cid:2)12 4,19E(cid:2)12 4,19E(cid:2)12
 w64 (cid:2)1,97E(cid:2)18 2,11E(cid:2)18 3,98E(cid:2)18 w05 (cid:2)4,60E(cid:2)12 3,25E(cid:2)12 (cid:2)2,59E(cid:2)12
 w01 (cid:2)5,76E(cid:2)18 (cid:2)5,76E(cid:2)19 (cid:2)5,76E(cid:2)20 w23 3,35E(cid:2)12 3,35E(cid:2)12 3,35E(cid:2)12
 w59 (cid:2)4,44E(cid:2)18 (cid:2)9,52E(cid:2)19 (cid:2)2,90E(cid:2)19 w68 3,20E(cid:2)12 3,20E(cid:2)12 3,20E(cid:2)12
 w79 (cid:2)1,25E(cid:2)18 (cid:2)2,93E(cid:2)18 (cid:2)1,27E(cid:2)18 w80 (cid:2)6,49E(cid:2)12 6,54E(cid:2)13 (cid:2)2,37E(cid:2)12
 w07 (cid:2)1,55E(cid:2)18 1,87E(cid:2)18 1,75E(cid:2)18 w06 (cid:2)4,40E(cid:2)12 2,76E(cid:2)12 (cid:2)2,04E(cid:2)12
 w54 4,61E(cid:2)18 3,85E(cid:2)19 2,45E(cid:2)20 w87 4,14E(cid:2)12 3,07E(cid:2)12 1,83E(cid:2)12
 w62 (cid:2)2,83E(cid:2)18 (cid:2)6,04E(cid:2)19 (cid:2)1,42E(cid:2)18 w26 1,67E(cid:2)12 4,34E(cid:2)12 (cid:2)2,83E(cid:2)12
 w73 1,50E(cid:2)18 1,50E(cid:2)18 1,50E(cid:2)18 w67 5,06E(cid:2)12 (cid:2)2,47E(cid:2)12 (cid:2)1,25E(cid:2)12
 w04 (cid:2)3,91E(cid:2)19 (cid:2)1,82E(cid:2)18 (cid:2)2,11E(cid:2)18 w42 (cid:2)2,88E(cid:2)12 (cid:2)2,88E(cid:2)12 (cid:2)2,88E(cid:2)12
 w82 (cid:2)1,29E(cid:2)18 (cid:2)2,26E(cid:2)18 2,04E(cid:2)19 w47 4,06E(cid:2)12 3,04E(cid:2)12 1,13E(cid:2)12
 w47 1,67E(cid:2)20 1,95E(cid:2)18 (cid:2)1,55E(cid:2)18 w22 2,67E(cid:2)12 2,67E(cid:2)12 2,67E(cid:2)12
 w87 (cid:2)4,68E(cid:2)19 1,80E(cid:2)18 (cid:2)1,23E(cid:2)18 w38 (cid:2)2,54E(cid:2)12 (cid:2)2,54E(cid:2)12 (cid:2)2,54E(cid:2)12
 w17 (cid:2)3,83E(cid:2)19 1,41E(cid:2)18 (cid:2)1,46E(cid:2)18 w25 2,32E(cid:2)12 3,49E(cid:2)12 1,53E(cid:2)12
 w84 5,71E(cid:2)20 1,31E(cid:2)18 (cid:2)1,38E(cid:2)18 w02 (cid:2)2,40E(cid:2)12 (cid:2)2,40E(cid:2)12 (cid:2)2,40E(cid:2)12
 w11 (cid:2)1,84E(cid:2)18 (cid:2)4,96E(cid:2)19 3,94E(cid:2)19 w88 (cid:2)2,38E(cid:2)12 (cid:2)2,37E(cid:2)12 (cid:2)2,35E(cid:2)12
 w77 1,67E(cid:2)18 (cid:2)7,02E(cid:2)19 1,28E(cid:2)19 w82 (cid:2)2,13E(cid:2)12 (cid:2)3,64E(cid:2)12 (cid:2)1,13E(cid:2)12
 w13 (cid:2)1,33E(cid:2)19 (cid:2)1,52E(cid:2)18 8,14E(cid:2)19 w69 (cid:2)2,00E(cid:2)12 (cid:2)2,00E(cid:2)12 (cid:2)2,00E(cid:2)12
 w19 3,70E(cid:2)19 (cid:2)1,24E(cid:2)18 8,30E(cid:2)19 w86 (cid:2)2,00E(cid:2)12 (cid:2)2,00E(cid:2)12 (cid:2)2,00E(cid:2)12
 w25 (cid:2)7,23E(cid:2)19 1,32E(cid:2)19 1,55E(cid:2)18 w39 (cid:2)1,94E(cid:2)12 (cid:2)1,94E(cid:2)12 (cid:2)1,94E(cid:2)12
 w14 7,40E(cid:2)19 1,61E(cid:2)18 5,49E(cid:2)20 w09 (cid:2)3,96E(cid:2)12 (cid:2)1,41E(cid:2)12 (cid:2)3,40E(cid:2)13
 w02 (cid:2)8,00E(cid:2)19 (cid:2)8,00E(cid:2)19 (cid:2)8,00E(cid:2)19 w41 (cid:2)2,24E(cid:2)12 (cid:2)1,83E(cid:2)12 (cid:2)1,50E(cid:2)12
 w72 8,00E(cid:2)19 8,00E(cid:2)19 8,00E(cid:2)19 w33 4,78E(cid:2)12 (cid:2)1,68E(cid:2)13 4,37E(cid:2)14
 w57 2,07E(cid:2)18 2,09E(cid:2)19 1,62E(cid:2)20 w27 1,85E(cid:2)12 (cid:2)1,27E(cid:2)12 1,64E(cid:2)12
 w05 7,95E(cid:2)19 9,91E(cid:2)19 4,08E(cid:2)19 w32 (cid:2)1,51E(cid:2)12 (cid:2)1,51E(cid:2)12 (cid:2)1,51E(cid:2)12
 w33 (cid:2)1,65E(cid:2)19 (cid:2)1,78E(cid:2)18 (cid:2)2,08E(cid:2)20 w64 (cid:2)3,68E(cid:2)12 7,07E(cid:2)13 1,38E(cid:2)14
 w52 (cid:2)1,83E(cid:2)18 (cid:2)7,95E(cid:2)20 4,30E(cid:2)20 w81 1,39E(cid:2)12 1,39E(cid:2)12 1,39E(cid:2)12
 w09 7,32E(cid:2)20 (cid:2)1,03E(cid:2)18 (cid:2)7,12E(cid:2)19 w17 1,44E(cid:2)13 (cid:2)1,20E(cid:2)12 (cid:2)2,55E(cid:2)12
 w21 (cid:2)2,46E(cid:2)19 9,28E(cid:2)19 (cid:2)4,65E(cid:2)19 w60 (cid:2)1,18E(cid:2)12 (cid:2)1,18E(cid:2)12 (cid:2)1,18E(cid:2)12
 w08 6,62E(cid:2)19 -9,26E(cid:2)19 2,82E(cid:2)20 w78 (cid:2)1,15E(cid:2)12 (cid:2)1,15E(cid:2)12 (cid:2)1,15E(cid:2)12
 w10 6,62E(cid:2)19 (cid:2)9,26E(cid:2)19 2,82E(cid:2)20 w66 3,06E(cid:2)12 (cid:2)3,05E(cid:2)13 3,55E(cid:2)14
 w58 (cid:2)1,29E-18 (cid:2)8,65E(cid:2)20 2,04E(cid:2)19 w85 1,11E(cid:2)12 1,11E(cid:2)12 1,11E(cid:2)12
 w24 (cid:2)3,20E(cid:2)21 7,35E(cid:2)19 (cid:2)8,30E(cid:2)19 w37 1,10E(cid:2)12 1,10E(cid:2)12 1,10E(cid:2)12
 w70 (cid:2)5,00E(cid:2)19 (cid:2)5,00E(cid:2)19 (cid:2)5,00E(cid:2)19 w18 (cid:2)1,82E(cid:2)12 (cid:2)1,06E(cid:2)12 3,85E(cid:2)13
 w12 (cid:2)8,31E(cid:2)19 (cid:2)5,16E(cid:2)19 (cid:2)1,31E(cid:2)19 w46 (cid:2)1,82E(cid:2)12 (cid:2)1,06E(cid:2)12 3,85E(cid:2)13
 w67 1,20E(cid:2)19 (cid:2)1,11E(cid:2)18 (cid:2)1,86E(cid:2)19 w28 (cid:2)1,07E(cid:2)12 (cid:2)1,07E(cid:2)12 (cid:2)1,07E(cid:2)12
 w03 4,72E(cid:2)19 (cid:2)3,53E(cid:2)19 (cid:2)5,90E(cid:2)19 w84 4,76E(cid:2)13 (cid:2)7,66E-13 (cid:2)1,93E(cid:2)12
 w60 (cid:2)4,00E(cid:2)19 (cid:2)4,00E(cid:2)19 (cid:2)4,00E(cid:2)19 w35 (cid:2)2,10E(cid:2)13 (cid:2)1,71E-12 (cid:2)1,05E(cid:2)12
 w18 (cid:2)3,23E(cid:2)19 8,08E(cid:2)19 (cid:2)3,75E(cid:2)20 w40 9,83E(cid:2)13 9,83E-13 9,83E(cid:2)13
 w46 (cid:2)3,23E(cid:2)19 8,08E(cid:2)19 (cid:2)3,75E(cid:2)20 w15 (cid:2)9,21E(cid:2)13 (cid:2)9,21E-13 (cid:2)9,21E(cid:2)13
 w63 (cid:2)4,61E(cid:2)20 (cid:2)6,01E(cid:2)19 (cid:2)2,87E(cid:2)19 w08 (cid:2)1,47E(cid:2)12 (cid:2)7,70E-13 (cid:2)3,03E(cid:2)13
 w31 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 w10 (cid:2)1,47E(cid:2)12 (cid:2)7,70E(cid:2)13 (cid:2)3,03E(cid:2)13
 w38 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 w14 1,30E(cid:2)12 7,27E(cid:2)13 2,72E(cid:2)13
 w42 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 w52 2,02E(cid:2)12 2,28E(cid:2)13 1,78E(cid:2)14
 w61 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 w16 6,80E(cid:2)13 6,80E(cid:2)13 6,80E(cid:2)13
 w69 3,00E(cid:2)19 3,00E(cid:2)19 3,00E(cid:2)19 w43 6,72E(cid:2)13 6,72E(cid:2)13 6,72E(cid:2)13
 w81 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 (cid:2)3,00E(cid:2)19 w58 (cid:2)6,93E(cid:2)13 (cid:2)8,46E(cid:2)13 (cid:2)2,74E(cid:2)13
 w88 (cid:2)3,87E(cid:2)19 2,34E(cid:2)20 4,31E(cid:2)19 w44 (cid:2)4,04E(cid:2)13 (cid:2)4,04E(cid:2)13 (cid:2)4,04E(cid:2)13
 w27 (cid:2)1,56E(cid:2)19 (cid:2)4,15E(cid:2)19 (cid:2)2,49E(cid:2)19 w74 8,12E(cid:2)13 2,83E(cid:2)14 (cid:2)2,12E-13
 w41 (cid:2)3,39E(cid:2)19 (cid:2)2,20E(cid:2)19 (cid:2)1,63E(cid:2)19 w61 (cid:2)3,32E(cid:2)13 (cid:2)3,32E(cid:2)13 (cid:2)3,32E-13
 w26 4,04E(cid:2)20 (cid:2)5,17E(cid:2)19 (cid:2)9,49E(cid:2)20 w75 (cid:2)3,75E(cid:2)13 (cid:2)3,89E(cid:2)13 (cid:2)1,81E(cid:2)13
 w53 (cid:2)5,75E(cid:2)19 2,84E(cid:2)20 3,37E(cid:2)20 w07 4,38E(cid:2)13 3,01E(cid:2)13 1,25E(cid:2)13
 w55 (cid:2)5,75E(cid:2)19 2,84E(cid:2)20 3,37E(cid:2)20 w24 (cid:2)2,35E(cid:2)13 (cid:2)5,99E(cid:2)13 (cid:2)2,03E(cid:2)14
 w16 2,00E(cid:2)19 2,00E(cid:2)19 2,00E(cid:2)19 w3 (cid:2)5,31E(cid:2)13 (cid:2)1,26E(cid:2)13 (cid:2)3,10E(cid:2)14
 w22 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 w45 2,20E(cid:2)13 2,20E-13 2,20E(cid:2)13
 w23 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 w56 5,85E(cid:2)13 6,54E(cid:2)14 5,58E(cid:2)15
 w29 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 -2,00E(cid:2)19 w53 4,81E(cid:2)13 9,49E(cid:2)14 1,35E(cid:2)14
 w32 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 w55 4,81E(cid:2)13 9,49E(cid:2)14 1,35E(cid:2)14
 w36 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 w04 (cid:2)4,50E(cid:2)13 (cid:2)8,79E(cid:2)14 (cid:2)1,74E(cid:2)14
 w37 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 w30 1,85E(cid:2)13 1,85E(cid:2)13 1,85E(cid:2)13
 w43 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 w83 2,12E(cid:2)13 2,32E(cid:2)13 -6,22E(cid:2)14
 w44 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 w54 3,81E(cid:2)13 9,73E(cid:2)14 1,11E(cid:2)14
 w78 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 (cid:2)2,00E(cid:2)19 w51 (cid:2)7,12E(cid:2)14 2,33E(cid:2)13 1,17E(cid:2)13
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 147



13

------------------------------------------------

 
 
 
 
 
 TableA1(continued) 
 Weightstrainedglobally Weightstrainedforspecificuser 
 Attribute Basic Square Cubic Attribute Basic Square Cubic 
 
 w66 3,52E(cid:2)19 2,64E(cid:2)21 1,85E(cid:2)21 w65 4,87E(cid:2)14 2,52E(cid:2)13 (cid:2)7,95E(cid:2)14
 w15 1,00E(cid:2)19 1,00E(cid:2)19 1,00E(cid:2)19 w59 3,29E(cid:2)13 3,90E(cid:2)14 3,41E(cid:2)15
 w20 (cid:2)1,00E(cid:2)19 (cid:2)1,00E(cid:2)19 (cid:2)1,00E(cid:2)19 w77 2,64E(cid:2)13 2,50E(cid:2)14 2,68E(cid:2)15
 w30 1,00E(cid:2)19 1,00E(cid:2)19 1,00E(cid:2)19 w11 (cid:2)2,38E(cid:2)14 1,42E(cid:2)13 7,14E(cid:2)14
 w39 (cid:2)1,00E(cid:2)19 (cid:2)1,00E(cid:2)19 (cid:2)1,00E(cid:2)19 w62 (cid:2)1,28E(cid:2)13 (cid:2)4,52E(cid:2)15 1,81E(cid:2)16
 w45 (cid:2)1,00E(cid:2)19 (cid:2)1,00E(cid:2)19 (cid:2)1,00E(cid:2)19 w57 (cid:2)1,05E(cid:2)13 (cid:2)2,21E(cid:2)15 2,59E(cid:2)16
 w50 (cid:2)1,30E(cid:2)19 (cid:2)1,21E(cid:2)19 (cid:2)3,37E(cid:2)20 w12 4,48E(cid:2)14 3,37E(cid:2)14 (cid:2)3,34E(cid:2)16
 w35 (cid:2)6,64E(cid:2)20 (cid:2)1,49E(cid:2)19 6,57E(cid:2)20 w63 (cid:2)2,24E(cid:2)14 3,04E(cid:2)15 3,30E(cid:2)16
 w56 (cid:2)1,90E(cid:2)19 1,06E(cid:2)20 3,07E(cid:2)21 w01 0 0 0 
 w86 (cid:2)5,98E(cid:2)32 (cid:2)5,98E(cid:2)32 (cid:2)5,98E(cid:2)32 w20 0 0 0
 w40 (cid:2)5,08E(cid:2)32 (cid:2)5,08E(cid:2)32 (cid:2)5,08E(cid:2)32 w29 0 0 0
 w85 (cid:2)4,03E(cid:2)32 (cid:2)4,03E(cid:2)32 (cid:2)4,03E(cid:2)32 w31 0 0 0
 w28 (cid:2)3,12E(cid:2)32 (cid:2)3,12E(cid:2)32 (cid:2)3,12E(cid:2)32 w36 0 0 0
 w68 (cid:2)2,60E(cid:2)33 (cid:2)2,60E(cid:2)33 (cid:2)2,60E(cid:2)33 w49 0 0 0
 w49 0 0 0 w50 0 0 0 
 TableA2 
 Detaildescriptionofattributesusedinproposedclassificationmethod.Shortcut'avg'usedinmeaningofarithmeticalmean.
 w01 Typeofquestionanswer;0ifLOisnotaquestion w45 FlagifLOtypeiss 
 w02 FlagifLOisapprovedbyLOusers w46 Dayinmonth 
 w03 Avgsessionlength(LOvisits)incurrentcourse w47 Monthinyear 
 w04 Avgsessionlength(LOvisits)incurrentcoursenormalizedbystatic 
 constant 
 w48 LOvisitorderincurrentsession 
 w05 Differenceofsessionlength(LOvisits)betweencurrentcourseand 
 avgofalluser'scourses 
 w49 LOratingfromusersincourse 
 w06 Differenceofsessionlength(LOvisits)betweencurrentcourseand 
 avgofalluser'scoursesnormalizedbystaticconstant 
 w50 User'srole(student,teacher) 
 w07 Avgsessionlength(LOvisits)incurrentweekofyear w51 Avgsessionlength(time) 
 w08 Avgsessionlength(LOvisits)incurrentday w52 Avgsessionlength(time)incurrentweekofyear
 w09 Avgsessionlength(LOvisits)incurrenthour w53 Avgsessionlength(time)incurrentday
 w10 Avgsessionlength(LOvisits)incurrentdayofmonth w54 Avgsessionlength(time)incurrenthour
 w11 Avgsessionlength(LOvisits)incurrentmonth w55 Avgsessionlength(time)incurrentdayofmonth
 w12 Avgsessionlength(LOvisits)incurrentdayofweek w56 Avgsessionlength(time)incurrentmonth
 w13 Avgsessionlength(LOvisits)incurrentdayofyear w57 Avgsessionlength(time)incurrentdayofweek
 w14 Avgsessionlength(LOvisits)incurrentyear w58 Avgsessionlength(time)incurrentdayofyear
 w15 Actualsessionlength(LOvisits)incourseaboveavgvalue w59 Avgsessionlength(time)incurrentyear
 w16 Actualsessionlength(time)incourseaboveavgvalue w60 Flagifitissummerexams 
 w17 Weekofyear w61 Flagifitissummersemester 
 w18 Dayinmonth w62 Avgsessionlength(time)incurrentcourse 
 w19 DifficultyofLO w63 Avgsessionlength(time)incurrentcoursenormalizedbystaticconstant
 w20 Flagifitisholiday w64 Differenceofsessionlength(time)betweencurrentcourseandavgofalluser's
 courses 
 w21 Hourinday w65 Differenceofsessionlength(time)betweencurrentcourseandavgofalluser's
 coursesnormalizedbystaticconstant 
 w22 FlagifLOis1stinchapter w66 TypeofLOrelation(didexerciserelation,didquestionrelation,rateddifficultyofLO
 relation,FollowedLOlinkrelation,ratedLOrelation,visitedLOrelation)
 w23 FlagifLOislastinchapter w67 TypeofLO(explanation,question,exercise) 
 w24 FlagifLOisinsetup w68 Flagifuserdidexerciserelation 
 w25 ElementinsystemfromwhichusercomestoLO(menu,widget,etc.) w69 Flagifuserdidquestionrelation
 w26 LOtitle w70 FlagifuserrateddifficultyofLOrelation 
 w27 LOcourse w71 FlagifuserfollowedLOlinkrelation 
 w28 FlagifLOincludestofunctionalandlogicalprogrammingcourse w72 FlagifuserratedLOrelation
 w29 FlagifLOincludestothecourseofprogramminginLisplanguage w73 FlagifuservisitedLOrelation
 w30 FlagifLOincludestothecourseinproceduralprogramming w74 User'savgsessionlength(LOvisits)
 w31 FlagifLOincludestothecourseofprogramminginProloglanguage w75 User'savgsessionlength(LOvisits)normalizedbystaticconstant
 w32 FlagifLOincludestosoftwareengineeringcourse w76 User'savgsessionlength(time)
 w33 Orderincoursechaptershierarchy w77 User'savgsessionlength(time)normalizedbystaticconstant
 w34 GlobalavgprobabilityofleavingthesystemaftervisitingcurrentLO w78 Lengthofcurrentsession(LOvisits)aboveuser'savgsessionlength
 w35 SourceofLO w79 Differenceofuser'savgsessionlength(LOvisits)andavgofallusers'sessions
 w36 FlagifLOsourceisbok w80 Differenceofuser'savgsessionlength(LOvisits)andavgofallusers'sessionsnor-
 malizedbystaticconstant 
 w37 FlagifLOsourceisbook w81 Lengthofcurrentsession(time)aboveuser'savgsessionlength
 w38 FlagifLOsourceisop w82 Differenceofuser'savgsessionlength(time)andavgofallusers'sessions
 w39 FlagifLOsourceissg w83 Differenceofuser'savgsessionlength(time)andavgofallusers'sessionsnormal-
 izedbystaticconstant 
 w40 FlagifLOsourceistg w84 Dayofweek 
 w41 TypeofLO w85 Flagifitiswinterexams 
 w42 FlagifLOtypeise w86 Flagifitiswintersemester 
 w43 FlagifLOtypeisp w87 Dayofyear 
 w44 FlagifLOtypeisq w88 Year 
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 148



14

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 References 
 
 Barla,M.,Bielikova,M.,BouEzzeddinne,A.,Kramár,T.,Simko,M.,Vozár,O.,2010. 
 On the impact of adaptive test question selection for learning efficiency.
 Comput.Educ.55(2),846-857. 
 Bayer,J.,Bydzovska,H.,Geryk,J.,Obsíva 
 č 
 ,T.,Popelinsky,L.,2012.Predictingdrop- 
 outfromsocialbehaviourofstudents,In:Proceedingsofthe5thInternational 
 ConferenceonEducationalDataMining.7,pp.103-109. 
 Bielikova,M.,Moro,R.,Simko,J.,Tvarozek,J.,2015.Adaptiveweb-basedtextbook 
 utilizinggazedata.J.EyeMov.Res.8(4),252(SpecialIssueECEM2015). 
 Bielikova,M.,Simko,M.,Barla,M.,Tvarozek,J.,Labaj,M.,Moro,R.,Srba,I.,Sevcech,
 J.,2014.ALEF:fromapplicationtoplatformforadaptivecollaborativelearning. 
 In: Manouselis, N., et al. (Eds.), Recommender Systems for Technology 
 EnhancedLearning.SpringerScienceþBusinessMedia,NewYork,pp.195-225. 
 Bifet,A.,Holmes,G.,Kirkby,R.,Pfahringer,B.,2010.Moa:massiveonlineanalysis.J.
 Mach.Learn.Res.,11;2010,pp.1601-1604. 
 BottouL.,2012.Stochasticgradientdescenttricks,In:NeuralNetworks:Tricksof 
 theTrade.LNCS,vol.7700,Springer,pp.421-436. 
 Bottou,L.,Bousquet,O.,2008.Thetradeoffsoflargescalelearning.Adv.NeuralInf. 
 Process.Syst.20,161-168. 
 Brusilovsky, P.,1996. Methods and techniques of adaptive hypermedia, In: User
 Modeling And User-adapted Interaction. 6, Kluwer academic publishers, 
 pp.87-129. 
 Brusilovsky,P.,Pesin,L.,1998.AdaptiveNavigationSupportinEducationalHyper- 
 media:AnEvaluationoftheISIS-Tutor.J.Comput.Inf.Technol.6,27-38. 
 Brusilovsky, P., 2004. KnowledgeTree: a distributed architecture for adaptive
 e-learning, In: Proceedings of the 13th Int World Wide Web Conference, 
 WWW'04.ACMPress,NY,pp.104-113. 
 Bukralia,R.,2010.Predictingdropoutinonlinecourses:comparisonofclassification
 techniques, In: Proceedings of the 5th Midwest Association for Information
 SystemsConference(MWAIS'10),paper19,pp.1-6. 
 Costa Jr., P.T., McCrae, R.R., 1989. The NEO-PI/NEO-FFI manual supplement, In:
 PsychologicalAssessmentResources,Odessa,FL. 
 Delen,D.,2010.Acomparativeanalysisofmachinelearningtechniquesforstudent 
 retentionmanagement.DecisionSupportSystems,49.Elsevier,pp.498-506. 
 Felder, R.M., Silverman, L.K., 1988. Learning and teaching styles in engineering
 education.Eng.Educ.78(7),674-681. 
 Goldberg,J.H.,Stimson,M.J.,Lewenstein,M.,Scott,N.,Wichansky,A.M.,2002.Eye 
 tracking in web search tasks: design implications, In: Proceedings of the 
 SymposiumonEyetrackingresearch&applications(ETRA'02),ACM,pp.51-58. 
 Grira, N., Crucianu, M., Boujemaa, N., 2004. Unsupervised and semi-supervised
 clustering:abrief survey, In:A Reviewof Machine Learning Techniquesfor 
 ProcessingMultimedia,ReportoftheMUSCLEEUNetworkofExcellence(FP6). 
 Halawa,S.,Greene,D.,Mitchell,J.,2014.DropoutpredictioninMOOCsusinglearner 
 activityfeatures.Exp.Best.Pr.MOOCs37,7-16. 
 Holohan,E.,Melia,M.,McMullen,D.,Pahl,C.,2005.Adaptivee-learningcontent 
 generationbasedonsemanticwebtechnology.In:ProceedingsoftheInter- 
 national Workshop on Applications of Semantic Web Technologies for E- 
 Learning (SW-EL 2005) - at the 12th International Conference on Artificial
 IntelligenceinEducation.pp1-8. 
 Horvath,R.,Simko,M.,2013.EnrichingtheWebforVocabularyLearning.Scalingup 
 Learning for Sustained Impact, Lecture Notes in Computer Science, 8095. 
 Springer,BerlinHeidelberg,pp.609-610. 
 Jang, Y., Lee, S., Mallipeddi, R., Kwak, H., Lee, M., 2011. Recognition of Human's
 Implicit Intention Based on an Eyeball Movement Pattern Analysis. Neural 
 Information Processing, Lecture Notes in Computer Science, 7062. Springer,
 BerlinHeidelberg,pp.138-145. 
 JegathaDeborah,L.,Baskaran,R.,Kannan,A.,2014.Learningstylesassessmentand
 theoretical origin in an E-learning scenario: a survey. AI Rev. vol. 42 (4),
 801-819. 
 Jovanovic,M.,Vukicevic,M.,Milovanovic,M.,Minovic,M.,2012.Usingdatamining
 onstudentbehaviorandcognitivestyledataforimprovinge-learningsystems:
 acasestudy.Int.J.Comput.Intell.Syst.5(3),597-610.
 Kantardzic,M., 2011. Data Mining: Concepts,Models, Methods, and Algorithms,
 2nded.IEEEPress,NewJersey. 
 KatsimerouC.,RediJ.A.,HeynderickxI.,2014.Acomputationalmodelformood
 recognition,In: User Modelling, Adaptation and Personalisation. LNCS 8538,
 Springer,pp.122-133. 
 Klasnja-Milicevic,A.,Vesin,B.,Ivanovic,M.,Budimac,Z.,2011.E-Learningperso-
 nalizationbasedonhybridrecommendationstrategyandlearningstyleiden-
 tification.Comput.Educ.56(3),885-899.
 KonopkaM.,NavratP.,2015.Untanglingdevelopmenttaskswithsoftwaredevel-
 oper'sactivity,In:IEEE/ACM2ndInternationalWorkshop,ContextforSoftware
 Development.IEEE/ACM,pp.13-14. 
 Kotsiantis,S.B.,2012.Useofmachinelearningtechniquesforeducationalproposes:
 adecisionsupportsystemforforecastingstudents'grades.Artif.Intell.Rev.37,
 331-344. 
 Kotsiantis, S.B., Zaharakis, I., Pintelas, P., 2007. Supervised Machine Learning: A
 ReviewofClassificationTechniques,pp.3-24.
 Levy,Y.,2007.Comparingdropoutsandpersistenceine-learningcourses.Comput.
 Educ.48(2),185-204. 
 Li,F.,Lei,J.,Tian,Y.,Punyapatthanakul,S.,Wang,Y.J.,2011.Modelselectionstrategy
 forcustomerattritionriskpredictioninretailbanking,In:Proceedingsofthe
 9thAustralasianDataMiningConference.vol.121,AustralianComputerSociety,
 Darlinghurst,Australia,pp.119-124. 
 Liu, C., White, R.W., Dumais S., 2010. Understanding web browsing behaviors
 throughWeibullanalysisofdwelltime,In:Proceedingsofthe33rdInterna-
 tional ACM SIGIR conference on Research and Development in Information
 retrieval.ACM,USA,pp.379-386. 
 Long,X.,Wu,Y.,2012.Applicationofdecisiontreeinstudentachievementeva-
 luation, In: International Conference on Computer Science and Electronics
 Engineering.vol.2,pp.243-247. 
 McCrae,R.R.,CostaJr.,P.T.,2004.AcontemplatedrevisionoftheNEOfive-factor
 inventory.Pers.Individ.Differ.36(3),587-596,ISSN0191-8869.
 Moro,S.,Cortez,P.,Rita,P.,2014.Adata-drivenapproachtopredictthesuccessof
 banktelemarketing.Decis.SupportSyst.62,22-31.
 Nagy,I.K.,Gaspar-Papanek,C.,2009.Userbehaviouranalysisbasedontimespent
 onweb pages, In: Web Mining Applications in E-commerce and E-services,
 StudiesinComputationalIntelligence.vol.172,Springer,pp.117-136.
 Pena-Ayala,A.,2014.Review:educationalDM:asurveyandaDM-basedanalysisof
 recentworks.ExpertSyst.Appl.41,1432-1462.
 PhridviRaj,M.S.B.,GuruRao,C.V.,2014.Datamining-past,presentandfuture-a
 typicalsurveyondatastreams.ProcediaTechnol.12,255-263.
 Ribisl,K.M.,Walton,M.A.,Mowbray,C.T.,Luke,D.A.,DavidsonIIW.S.,Bootsmiller,B.
 J.,1996.Minimizingparticipantattritioninpanelstudiesthroughtheuseof
 effectiveretentionandtrackingstrategies:reviewandrecommendations,In:
 EvaluationandProgramPlanning.vol.19,Elsevier,pp.1-25.
 Robbins,H.,Siegmund,D.O.,1971.Aconvergencetheoremfornonnegativealmost
 supermartingalesandsomeapplications.Optim.MethodsStat.
 Robins, R.W., Fraley, R.C.,Roberts, B.W.,Trzesniewski, K.H.,2001. A longitudinal
 studyofpersonalitychangeinyoungadulthood.J.Personal.69,617-640.
 Salvucci, D.D.,1999. Inferring intent in eye-based interfaces: tracing eye move-
 ments with process models, In: Proceedings of the SIGCHI Conference on
 HumanFactorsinComputingSystems(CHI'99).ACM,pp.254-261.
 Sangodiah,A.,Balamuralithara,B.,2014.Holisticpredictionofstudentattritionin
 higherlearninginstitutionsinMalaysiaUsingsupportvectormachinemodel.
 Int.J.Res.Stud.Comput.Sci.Eng.1(1),29-35,ARC.
 Sun,Y.,Wong,A.K.,Kamel,M.S.,2009.Classificationofimbalanceddata:areview.
 Int.J.PatternRecognit.Artif.Intell.23(4),687-719.
 Simko,M.,Bielikova,M.,2009.Automaticconceptrelationshipsdiscoveryforan
 adaptivee-course,In:BarnesT.etal(eds),Proceedingsofthe2ndInternational
 ConferenceOnEducationalDataMining.Cordoba,Spain,pp.171-179.
 Simko, M., Barla,M., Bielikova, M.,, 2010. ALEF: a framework for adaptiveweb-
 basedlearning2.0.In:Reynolds,N.,Turcsanyi-Szabo,M.(Eds.),KeyCompe-
 tenciesintheKnowledgeSociety324,Springer,Berlin,pp.367-378.
 Tan,M.,Shao,P.,2015.PredictionofstudentdropoutinE-learningprogramthrough
 theuseofmachinelearningmethod.Int.J.Emerg.Technol.Learn.10(1),11-17.
 Wojewnik, P., Kaminski, B., Zawisza, M., Antosiewicz, M., 2011. Social-network
 influenceontelecommunicationcustomerattrition.In:O'Shea,J.,etal.,(eds),
 Agent and Multi-Agent Systems: Technologies and Applications, vol. 6682,
 Springer,pp.64-73. 
 Yu, C.H., DiGangi, S., Jannasch-Pennell, A., Kaprolet, C., 2010. A data mining
 approach for identifying predictors ofstudent retention fromsophomoreto
 junioryear.J.DataSci.8,307-325. 
 TableA3 
 Descriptionofdataloggedine-learningsystemALEF(Bielikovaetal.,2014)and 
 usedinproposedclassificationmethod.Loggeddatabelongintothethreemain 
 categories-datadescribingUsers,LearningobjectsandInteractionitself. 
 Category Attribute Description 
 User User_id Uniqueidentifierofuser 
 Role Userrole[Student|Teacher] 
 Learningobject Learning_object_id UniqueidentifierofLO 
 Label LOtitle 
 Type TypeofLO[Explanation|Question| 
 Exercise] 
 Rating LOpopularity 
 Difficulty LOdifficultyo0;14 
 Parent SuperiorLOinthecoursehierarchy 
 Course Superiorcourse 
 Interaction Type Typeofrelation[Visitfrommenu| 
 Hyperlinkfollow|Suggestionfollow] 
 Interaction Typeofsource[Menu|Widget|Outside] 
 Duration Visitdurationinseconds 
 Created_at Timestamp 
 O.Kassaketal./EngineeringApplicationsofArtificialIntelligence51(2016)136-149 149

