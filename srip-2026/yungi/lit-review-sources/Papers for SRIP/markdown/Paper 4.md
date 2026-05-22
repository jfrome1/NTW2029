

1

------------------------------------------------

 
 
 
 
 
 
 
 The effect of providing learning analytics 
 on student behaviour and performance 
 in programming: a randomised controlled experiment 
 
 
 JanHellings1&CarlaHaelermans2 
 
 #TheAuthor(s)2020 
 
 
 Abstract 
 We use a randomised experiment to study the effect of offering half of 556 freshman
 studentsalearninganalyticsdashboardandaweeklyemailwithalinktotheirdashboard,
 on student behaviour in the online environment and final exam performance. The
 dashboard shows their online progress in the learning management systems, their pre-
 dictedchanceofpassing,theirpredictedgradeandtheironlineintermediateperformance
 compared with the total cohort. The email with dashboard access, as well as dashboard
 use,haspositiveeffectsonstudentbehaviourintheonlineenvironment,butnoeffectsare
 foundonstudentperformanceinthefinalexamoftheprogrammingcourse.However,we
 dofinddifferentialeffectsbyspecialisationandstudentcharacteristics.
 Keywords Randomisedcontrolledexperiment.Learninganalyticsdashboard.Student
 behaviour.Studentperformance.Highereducation 
 
 
 Introduction 
 
 Many policymakers and higher education institutes (HEIs) are concerned with the low
 completionratesinhighereducation,whichareoftenascribedtothehighnumberofstudent
 dropoutsinthefirstyearsofthebacheloreducation.IntheUSA,onlyalittleoverhalfofthe
 https://doi.org/10.1007/s10734-020-00560-z 
 Electronicsupplementarymaterial Theonlineversionofthisarticle(https://doi.org/10.1007/s10734-020-
 00560-z)containssupplementarymaterial,whichisavailabletoauthorizedusers.
 * CarlaHaelermans 
 Carla.haelermans@maastrichtuniversity.nl 
 JanHellings 
 j.f.hellings@hva.nl 
 
 1 DepartmentofComputerScience,AmsterdamUniversityofAppliedSciences,Wibautstraat2-4,
 1091GMAmsterdam,TheNetherlands 
 2 ResearchCentreforEducationandtheLabourMarket(ROA),SchoolofBusinessandEconomics,
 MaastrichtUniversity,POBox616,6200MDMaastricht,TheNetherlands
 Published online: 10 June 2020 
 Higher Education (2022) 83:1-18 



2

------------------------------------------------

 
 
 
 
 students graduate from a bachelor's degree within 6 years (Symonds et al. 2011). In the
 Netherlands,only40%ofthestudentsgraduatewithin5years(froma4-yearprogram)andin
 thefirstyear,36%ofthestudentsdropout(MinistryofEducationCultureandScience2016).
 Recent research has shown that nowadays students seem less prepared and often have a
 differentstudyattitudethanbefore,leadingtolowperformance(Beattieetal.2018).Itisalso
 often said that a lackofmotivationandself-regulatoryskillsfromthe studentsmightbethe
 reason for the high dropout numbers (Kitsantas et al. 2008), as well as that they have
 difficultiespredictingorknowingduringthecourse,whethertheyaredoingwellornot.These
 issuesareprevalentinhighereducationingeneral,butspecificallyinengineeringeducation.
 Therefore, the management and teacher bodies at the HEIs are looking for ways to better
 inform students, and increaseinvolvement and self-regulation by students, to make students
 moreresponsible,havethemstudymoreandtodecreasedropoutrates.Giventheincreasing
 use of online environments, in combination with the desire to increase self-regulation and
 involvementofstudents,oneoptionistousevisualisationtechniquesuchasdashboardsbased
 on learning analytics, in combination with early warning systems, to signal to students how
 theyaredoingontheiractivitiesinonlineenvironmentsandtoremindthemtostudyregularly
 (Bos 2016 ) (Lauría et al. 2013), and by sending regular emails with access links to the
 dashboard and the learning analytics, which might also serve as a reminder for their
 coursework(similartowhathasbeendonepreviouslyintheliterature,see,e.g.Beattieetal.
 2018;OreopoulosandPetronijevic2018). 
 The aim of the study at hand is to analyse the effectiveness of a learning analytics
 dashboard (LAD), with weekly email with a personalised link to the dashboard, aimed to
 signalstudentsabouttheirstudyprogressaswellasabouttheirchancesofsuccess,byshowing
 visualperformanceindicatorsofthestudentandtheaverageofthecohort.Weareinterestedin
 the effects on both online behaviour and performance of students as well as their final
 performance in the course. Our study is carried out among 556 freshman computer science
 studentsofaDutchUniversityofAppliedScienceswhoattendaJavaprogrammingcourseto
 acquiretheir basic Javaprogrammingskillsin2015. About half ofthesestudents (n = 276)
 wereconditionallyrandomassignedtothetreatmentgroupofhavingaccesstotheLADduring
 the8-weekcourse,andtheotherhalf(n=280)tothecontrolgroup,withoutdashboard.The
 studentsinthetreatmentgroupreceivedaweeklyemailwithapersonalisedlinktotheLAD.
 Allstudentsaresupposedtoweeklyperformexercisesintheonlineenvironmentofthecourse.
 Wefind that the weekly email and corresponding dashboardaccess (intent-to-treat, ITT), as
 well as dashboard use (two-stage least squares, 2SLS), have positive effects on student
 performance in the online environment during the course (standardised effect sizes of 0.2
 and0.25),butnotonstudentbehaviourintheonlineenvironment,oronstudentperformance
 inthefinalexamortheirchancesofpassingtheprogrammingcourse.However,heterogenous
 analysis shows that final exam grades are significantly higher for treatment students in the
 specialisationsoftwareengineeringandaresignificantlylowerfortreatmentstudentsingame
 development(thetwolargestspecialisations). 
 Sofar,thereisnotmuchevidencethatusinglearninganalyticsdashboardsforthestudent
 willinfluencestudentbehaviourandultimatelyexamperformance.Thereareonlyfewcausal
 studiesontheeffectivenessoflearninganalyticsdashboards(LAD)(e.g.Dodgeet al.2015;
 Kimetal.2015;ParkandJo2015),asalsoemphasisedbyBodilyandVerbert(2017).These
 fewstudiesshowmixedresults,andeachhastheirflaws.ThestudyofParkandJo(2015)is
 oneofthefewexamplesthatanalysedtheeffectsofanLADinhighereducation.Inthisstudy,
 studentsfromtwoclasseswererandomlyassignedtothetreatmentgroupandreceivedaLAD
 2 Higher Education (2022) 83:1-18



3

------------------------------------------------

 
 
 
 
 (73observationsintotal,randomisationattheclasslevel).Nosignificanteffectswerefoundon
 student learning outcomes, but it is very well likely that this is due to the low number of
 observations, and therefore low power, of this study. Dodge et al. (2015) also perform a
 randomised experiment among 883 students using learning analytics in two courses with
 historicallylowpassrates.Theyfindnoeffectongradesofthetreatmentingeneral,butthey
 doseeaneffectonlow-SESstudents,foroneofthetwocourses.Inanotherstudy,Kimetal.
 (2015) investigated the effect of a LAD in a management Statistics e-learning course at a
 privateuniversitylocatedinKorea.ThetreatmentgroupreceivingtheLADscored12%higher
 than the control group. However, there seems to be no random assignment, so it is unclear
 whether the found effect can be attributed to the LAD or whether there may have been
 selectionintothetreatmentgroupthatexplainsthiseffect. 
 Apart from these causal studies, there is larger body of correlational studies looking into
 learning analytics dashboards, sometimes combined with an early warning system (e.g. Hu
 etal.2014;Verbertetal.2013),findingmixedresultsoftherelationshipbetweenthelearning
 analytics dashboard and student performance and motivation. The recent overview study of
 Teasley(2017)sumsthisupnicelyaswell.Fromthesestudies,itseemsthatacertaintypeof
 intervention might be beneficial for student performance, if certain requirements of the
 dashboard, such as integrating data from student information systems, are fulfilled (e.g.
 Teasley2017,andreferencestherein). 
 So, althoughquite somestudiesonlearninganalyticsdashboards exist, only few provide
 causalevidenceonthe effectsof LADsandnoneofthese causal studiesincludesprediction
 models for the content of the LAD. Furthermore, the results of the few causal and mostly
 correlationalstudiesaremixedandnoneoftheseexperimentalstudieshasbeenperformedina
 Western context, making these results not automatically applicable to the situation in most
 European countries. Although quite some correlational studies exist from these countries
 pointing in the direction of a positive effect, we cannot draw causal conclusions from these
 studies.Lastly,toourbestknowledge,thereisnootherstudycombiningthelearninganalytics
 dashboardwithanearlywarningsystem,usingpredictionmodelswithdatafromtheLADand
 from student characteristics to inform students about their chance of success. The only two
 studies(Huetal.2014andVerbertetal.2013)thatincludepredictionmodelswithaLADare
 correlationalandnotcausal.Therefore,thisstudyaimstoaddtothisbodyofknowledgewitha
 randomised experiment testing the effectiveness of sending a weekly email with a link to a
 learning analytics dashboard (with prediction models therein) in a freshmen programming
 courseinhighereducationintheNetherlands.Additionalanalyseshaveshownthatsuccessin
 thisprogrammingcourserelatesinadisproportionallyhighwaytosuccessinthefirstyearof
 thebachelor'sdegree(significantoddsratioof12),makingitanextremelyrelevantcoursefor
 studentsuccess.Therefore,themaincontributionofourstudytotheliteratureandtopolicyis
 the unique combination of causal analysis of LADs combined with prediction models in a
 Western setting in higher education on the effect of providing students with weekly emails
 with a link to their learning analytics dashboard in their programming course. Another
 contribution is that the combined treatment of the email and the dashboard is a low-cost
 innovationthatiseasytoimplement.Furthermore,otherinnovativefeaturesofthedashboard
 (besides the prediction models) are that it has a signalling function (with an early warning
 systemusingpredictionmodels)andincludeselementsofcompetition.
 Intheremainderofthispaper,wefirstpresentthecontextofthestudy,describingboththe
 learninganalytics dashboardtreatment andthe Dutch higher education system in which this
 experiment took place. The "Data and methodology" section presents the data and
 3 Higher Education (2022) 83:1-18



4

------------------------------------------------

 
 
 
 
 methodology, describing also the identification strategy, compliance with the assignment to
 treatmentgroupandthedashboarduse.Inthe"Results"section,wedescribetheresults.We
 alsoperformsomeadditionalanalysesonpotentialheterogenouseffects.The"Conclusionand
 discussion"sectionconsistsoftheconclusionandadiscussion.
 
 
 Context of the study 
 
 Thetreatment 
 
 Thetreatmentconsistsofalearninganalyticsdashboard(LAD)forfreshmenstudentsinaJava
 Programming Course at a University of Applied Sciences in the Netherlands. The Java
 Programming course is a blended learning course (Bos 2016) with an online practice envi-
 ronment, which consists of both a Moodle (https://moodle.org/) course with quizzes and
 practical assignments and a Myprogramming lab (MPL) e-text environment. The learning
 analyticsdashboardusesthebehaviourofthestudentintheMoodleandMyprogramminglab
 environment to make predictions about the student's chance of passing the course, their
 predictedgrade,andtoshowstudentstheirprogressintheonlineenvironment.Inthelearning
 analyticsdashboard,thestudentsgetinformationontheirexpectedgrade(andtherebychances
 ofpassingthecourse)andtheexpectedgradeoftheirfellowstudents(basedonthepredictions
 ofthewholecohort)andabouttheirprogressintheMoodleandMyprogrammingLab,again
 comparedwiththeirfellowstudents.Treatmentstudentsreceiveaweeklyemailwithadirect
 linkto their personal dashboard,toremind them of theexistence ofthedashboardandsend
 theminformationabouttheirexpectedresult. 
 InFig.1,anexampleisshownofthedashboardthatstudentshadaccesstoiftheywerein
 thetreatmentgroup.Thelearninganalyticsdashboardshowsatthetop(1)theexpectedgrade
 rangingfrom1to10and(2)theaveragegradeofthetotalcohort.Belowthis,itpresentsthe
 expectation with respect to whether the student will pass the course, and the certainty with
 whichthispredictionismade.Inthemiddle,itshowsaprogressbar(3)withthetotalonline
 progressinMoodleandMPL.Atthebottom,therearetwopiechartsshowingtheprogressin
 (4) Moodle and (5) Myprogramming Lab with the averages of the total cohort. As Fig. 1
 shows,thedashboardcontainedmanyelementsthathavepreviouslyalsobeenusedinstudies
 onlearninganalyticsdashboardsand/orearlywarningsystems,asisdiscussedinJivetetal.
 (2017)andshownintheirTable2. 
 Tempelaar et al. (2015) and Hu et al. (2014) found in their research a strong relation
 betweentheonlinebehaviourandthecourseresultsanditisthereforeexpectedthatproviding
 studentswith informationon their onlinebehaviour andperformance sofar (resultingin the
 predictionofthegradeforthecourse)willincreasetheonlinebehaviourandviathatwaythe
 resultsintheprogrammingcourse.AsTeasley(2017)discusses,thevisualrepresentationisa
 meta-cognitivetool(DurallandGros2014)thatrelatestoincreasedawareness,self-reflection
 and sense-making (Bodily and Verbert 2017; Verbert et al. 2014). Furthermore, previous
 research shows that a visual representation of study progress might be an effective way of
 informingstudents(e.g.Tufte1991).Informingstudentsabouttheirstudyprogressissaidto
 be a good stimulator for students to increase their work effort and time spent studying (e.g.
 Bandiera et al. 2015; Chevalier et al. 2014). Furthermore, providing a comparison with
 performanceoffellowstudentsisshowntorelatetoincreasedcompetitionwhichisalsosaid
 to have positive effects on the subsequent (practice) behaviour of students (e.g. Lam et al.
 4 Higher Education (2022) 83:1-18



5

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 2004). At the same time, Teasley (2017) and references therein warns for this competitive
 element, as it might have unanticipated consequences on motivation and through that on
 performance(ChristyandFox2014;HanusandFox2015). 
 To build the learning analytics dashboard, the online behaviour as well as student back-
 groundcharacteristics(whichmatterforcourseperformance,asweknowfromtheanalysesof
 data from previous cohorts) had to be collected and analysed. The analyses of the online
 behaviour in the population of the 684 students in the year before the experiment (2014)
 furthermore showed that a correlation exists between the online behaviour and the result of
 programming.Studentswhodidalltheonlineexercisesscoredanaverageof6.8(SD=2.7)on
 ascaleof1to10andtheoneswhodidnotwritealltheonlineexercisesscoredanaverageof
 4.8(SD=3.5)(t(682)=−7.84,p<0.00). 
 In Verbert et al. (2012), six objectives of learning analytics are distinguished: predicting
 learnerperformanceandmodelinglearners,suggestingrelevantlearningresources,increasing
 reflection and awareness, enhancing social learning environments, detecting undesirable
 learner behaviours and detecting affective states, like boredom confusion, frustration and
 Eurekaoflearners.Inthisstudy,thefocuswillbeontwoofthem:(1)topredictthelearner
 performanceand(2)toincreasereflectionandawarenessofthelearner.
 The learning performance is predicted using data mining techniques. Dynamic data from
 theuseoftheonlineenvironmentoftheMoodleandtheMyprogrammingLabinadditionto
 thedemographicandhistoricaldatacanbeusedforreliableforecastingofstudentperformance
 (Huetal.2014).Thepredictionmodelsarebasedondatafromthepreviouscohorts(2014)but
 arealsocheckedwiththe2013cohortandwiththerealoutcomesofthe2015cohort,leading
 Fig.1 Dashboardofastudentinweek1 
 5 Higher Education (2022) 83:1-18



6

------------------------------------------------

 
 
 
 
 tosimilarresults(thechi-squaretestshowedthatthepassingratepredictedbytheprediction
 modelandtheactualpassingwerehighlyassociatedaswellasthetypeIandIIerrors).We
 built a linear prediction model to predict the grade, and we used Decision Stump combined
 with AdaBoost to predict the chance of success in the course (a machine learning model
 combined with an adaptive boosting algorithm that uses iterations of formative learning
 outcomes to make the best forecasts, see Wayne and Langley (1992), Rojas (2009) and Hu
 et al. (2014) for more information on this technique). The prediction models are based on
 student background variables (prior education level and specialisation) and the variables of
 onlinebehaviour(thenumberofpracticalassignments,theaveragegradeofthoseassignment,
 theaveragegradeoftheonlinequizzesandtheaveragegradeoftheonlinemasteryexercises).
 Thepredictionitselfforthe2015cohortismadebyapplyingthesepredictionmodelstothe
 learninganalyticsdatafromthe2015cohort. 
 The Java Programming course has a study load of 3 ECTS (European Credit Transfer
 System)whichcorrespondsto84hofstudyattainment.Thereare30classhours,andtherestis
 pre-classpreparation.Unlikepreviousyears,the onlineassignmentswerenot mandatoryfor
 students (i.e. the online activities had a formative nature this year), due to an organisational
 changeattheinstitute.Theclasstimeisreservedforacquiringprogramingskillsbyprogram-
 ming the practical assignments. These practical assignments are uploaded to Moodle and
 gradedbythelecturer.Attheendofthecourse,thestudentsaretaskedwithprogramminga
 smallJavaprogramandarethengraded(1-100,100beingthehighestgrade)ontheresultsof
 theirefforts.Studentswhofailedthefirstexamcantakearesit5weekslater.Notethatforthis
 study we only use the first time each student wrote the final exam, (first sit, for almost all
 students) for fair comparison of grades, but also because the dashboard is only generated
 duringthefirst8weeksandnotduringtheresitperiod. 
 The expectationis that the learning analytics dashboardand correspondingweekly email
 willhaveasignallingfunction,asthelatterremindsthemofthedashboardwhichinturn,when
 theyclickonthelink,informsstudentsabouttheirperformancesofarinthecourse(inabsolute
 numbers,butalsorelativetofellowstudents),andwhatthatmeansfortheircurrentchancesof
 passingthecourse.Previousliteraturehasshownthatresultsmightbemostlyexpecteddueto
 the information on relative performance, although earlier studies have also showed positive
 effectsofprovidingfeedbackonabsoluteperformance(see,e.g.AzmatandIriberri2010,and
 references therein). The signal that is given through the learning analytics in the dashboard
 environment is then expected to stimulate the student to practice in the online environment,
 andworkontheweekly(digital)assignment.Thisisexpectedtodirectlyinfluencethechances
 ofreceivingahighergradeinthefinalexamoftheprogrammecourse,andhencepassingthe
 course.Thelatterexpectationisbasedonpreviouscohortswherealargecorrelationwasfound
 betweenonlinepracticebehaviour(andparticularlytheassignmentsinthesecondhalfofthe
 course)andtheexamperformanceandcourseoutcome.Notethatalthoughitispossiblethat
 students communicate with each other, possibly leading to control students also being
 reminded to workon their onlineassignments (which in turn might lead to our effect being
 alowerbound),controlstudentsdonothaveaccesstoadashboardandthereforedonotgetan
 indicationofboththeirabsoluteandrelativeperformance. 
 DutchhighereducationandtheICT-curriculum 
 Dutchsecondaryeducation,whichprecedeshighereducation,hasatrackingsystemfrom7th
 gradeonwith3differenttracks.Preparatorysecondaryvocationaleducation(VMBO)takes4
 6 Higher Education (2022) 83:1-18



7

------------------------------------------------

 
 
 
 
 years until graduation and prepares for senior secondary vocational education and training
 (MBO).Seniorgeneralsecondaryeducation(HAVO)takes5yearsanduniversitypreparatory
 education (VWO) takes 6 years until graduation. Students are admitted to a University of
 Applied Sciences (HBO) if they have a diploma from senior general secondary education
 (HAVO), seniorsecondaryvocational education(MBO) or pre-universityeducation(VWO)
 (Fig.2)(Nuffic2015).Thestudyathandtakesplaceatthecomputerscience(ICT)bachelor
 programmeataUniversityofAppliedSciences(HBO),abbreviatedtoHBO-ICTinthispaper.
 WithintheHAVOandtheVWOtrack,therearetwospecialisations,economicsandscience,
 wherethesciencespecialisationismorerelatedtoHBO-ICT.InMBO,therearerelatedand
 non-relatedspecialisations.SpecialisationslikeMBO-softwareengineering(SE)orsystemand
 networkengineering(SNE)arerelatedtotheHBO-ICT.Forinterpretationpurposeslaterinthe
 paper,itisimportanttomentionthatintheDutcheducationalsystem,gradesrangefrom0to
 10,with10beingthehighestgrade.Agradeof5.5isconsideredsufficienttopassthecourse.
 StudentsregisteringforHBO-ICTimmediatelychooseaspecialisationwhentheysignup
 forthestudy.Theyareputintoclassesbasedonthespecialisation.Thecomputersciencestudy
 at hand has five specialisations: game development (GD), business IT management (BIM),
 system and networkengineering(SNE),softwareengineering(SE)andtechnical computing
 (TC).Thestudyconsistsofseveralspecialisationspecificcoursesandseveraljointcoursesthat
 arecompulsoryforallstudents.Thejavaprogrammingcoursethatweanalyseinthisstudyis
 oneofthecompulsorycourses,asitisacrucialcourseforlatercoursesinthesecondandthird
 yearofthebachelorprogram,regardlessofthespecialisation.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Primary educa(cid:2)on 
 VWO-cer(cid:2)ficate 
 University preparatory 
 educa(cid:2)on 
 HAVO-cerificate 
 Senoir general 
 secondary educa(cid:2)on 
 VMBO-cer(cid:2)ficate
 Preparatory secondary
 voca(cid:2)onal educa(cid:2)on
 MBO-cer(cid:2)ficate
 Senior secondary
 voca(cid:2)onal educa(cid:2)on
 and training 
 Bachelor's degree 
 University of applied 
 sciences / Computer 
 Science (HBO-ICT) 
 4 
 6 5 4 
 4 
 8 
 # = years of educa(cid:2)on 
 Fig.2 Dutcheducationsystemuntilthebachelor'sdegreewiththepossibleroutes
 7 Higher Education (2022) 83:1-18



8

------------------------------------------------

 
 
 
 
 Data and methodology 
 
 Data 
 
 This experiment is conducted at a University of Applied Sciences among 556 freshman
 students that started the study programme computer sciences in 2015. Both before the start
 of the study and during the Java programming course, a lot of data is collected on these
 students,theirstudybehaviourandstudyperformance.Fortheanalysisofthispaper,weuse
 three types of data: student characteristics, student online practice behaviour and student
 performance. 
 The student characteristics that we include are gender, age, ethnicity (Dutch or other), a
 dummy whether the student was born in the Netherlands, order of registration (i.e. the
 sequence number of the student with regard to when he/she subscribed for the study of
 computer science, as a proxy for motivation), the specialisation and the class of the student
 within the study computer sciences and the previous educational level that the student
 attended. The latter is used as an indication of ability level of the student, since we do not
 have prior grades (because this is the first course in higher education for the students). The
 combinationofpreviouseducationallevelandspecialisation/majoratthepreviouslevelisan
 indicationofpriorknowledgeofthetopic. 
 The studentonlinepractice behaviourcontainsinformationon 3indicatorsthat areregis-
 tered each week: online practical assignment (dummy whether student has done the assign-
 ment,foreachofthe6weeksofthestudy),onlinequizzes(gradesbetween0and10)andthe
 average mastery score of a set of online exercises (score ranging from 0 to 100, number of
 exercisesvaryingperweek).Table1presentsthedescriptivestatisticsoftheonlinebehaviour
 indicators.AnimportantobservationfromTable1isthatwedonothavealltheseindicators
 forall556students.Therearedifferentnumbersofobservationsforeachindicator,whichwe
 willexplicitlytakeintoaccountinourlateranalyses. 
 Thestudentperformanceindicatorsthatweincludeareboththegradefortheprogramming
 course(rangingfrom1to10,usingtheDutchgradingsystem)andanindicatorforwhetherthe
 student passed the course. Table 1 also includes the descriptive statistics of the student
 performanceindicators.Notethatwealsohavesomemissingsinthegradefortheprogram-
 ming course, as some students did not write an exam at all for this course (and thereby
 automaticallyfailedthecourse). 
 Identificationstrategy 
 The study is organised as a randomised controlled trial (RCT) in which individuals are
 randomlyassignedtoeitherthetreatmentgroup(emailanddashboard)orthecontrolgroup.
 
 Table1 Descriptivestatisticsstudentonlinepracticebehaviourandstudentperformance
 Variable N Mean SD Min Max 
 
 Numberofsufficientpracticalassignments 465 3.02 1.80 0 6
 Averagegradeofonlinequizzes 433 6.56 1.69 1.93 10 
 Averagescoremasterylevelexercises 478 52.23 29.33 1.83 100
 Gradeinprogrammingcourse 456 57.43 28.07 0 100 
 Passingtheprogrammingcourse(1=yes) 556 0.43 0.49 0 1 
 8 Higher Education (2022) 83:1-18



9

------------------------------------------------

 
 
 
 
 Individual randomisation with this sample size gives high confidence that the treatment and
 controlgroupwillbesimilarinbothobservableandunobservablecharacteristics.
 Figure 3 presents the experimental setup of the study. Out of the initial 558 freshman
 computerscienceinthecohort,2studentsdecidednottotakepartintheexperimentandchose
 tooptout.Theremaining556studentsareindividuallyrandomisedintothetreatmentgroup(n
 =276)orthecontrolgroup(n=280).Weappliedstratified(conditional)randomisationatthe
 specialisation level, as student performance at the programming course is likely to differ by
 specialisation(basedonanalysesofthegradesoftheprevioustwocohorts).
 Our analysisshows that themean differences ofindividualcategoriesarenotstatistically
 significant at the 5% level. Chi-squared statistics of the specialisation variable, the previous
 educationallevelvariableandclassdistributionalsodonotshowanysignificance.AjointF-
 testonallthecharacteristicsalsodoesnotshowasignificantdifference(F(38,517)=0.87,p
 = 0.70). Given these results, we expect the random assignment process to have functioned
 well,producingatreatmentandcontrolgroupthatwere'equalinexpectation'atthestartofthe
 experiment. 
 Compliancewithassignmenttotreatmentgroup 
 
 As it happens, not all students complied with the random assignment in the experiment.
 Although we technically disabled the dashboard for control students, treatment students can
 still decide not to open the dashboard, and some indeed did not use the dashboard at all.
 Among the students that did use the dashboard, there is large variation in the usage. This
 meansthatwehavethreegroupsofstudents:(1)studentsthatwereassignedtothetreatment
 group(A=1)andalsoopenedthedashboardatleastonce(D=1)(n=205),(2)studentsthat
 wereassignedtothecontrolgroup(A=0)andthereforecouldnotusethedashboard(D=0)(n
 =280)and(3)studentsthatwereassignedtothetreatmentgroup(A=1),butwhodidnotopen
 thedashboardatall(D=0)(n=71).Comparisonofthesethreegroupsofstudentsshowsthat
 thiscomplianceisnotarandomprocess,andthiswillexplicitlybetakenintoaccountinthe
 usedempiricalstrategy,aswillbeexplainedinmoredetailinthe"Empiricalstrategy"section.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Fig.3 Experimentalsetupofthestudy 
 9 Higher Education (2022) 83:1-18
 



10

------------------------------------------------

 
 
 
 
 Dashboarduse 
 
 Asdescribedabove,thesetupoftheexperimentissuchthatstudentshavetoactivelyclickon
 the email to open the dashboard and see its content. Therefore, in addition to studying the
 effect of giving the student access to the dashboard, it is also interesting to look into the
 intensityofthetreatment. 
 In Fig. 4, we show the descriptive statistics of the dashboard usage of student per week
 (there were 2 weeks in between the end ofthe experiment and the exam,in which students
 couldalsoopenthedashboard).Figure4showsthespreadofnumberofstudentsthatusedthe
 dashboardatleast onceandthenumberoftimesperweekthedashboardwasusedbythese
 samestudents.Intotal,205studentsusedthedashboardatleastonceduringthewholeperiod
 of8weeks,foranaverageof18timesintotal.However,therangeislarge,asthenumberof
 timesthedashboardwasopenedvariesfrom1to203timesintotal.
 Figure 4 furthermore shows that the average number of times the student opened the
 dashboardeachweekdeclinesduringthelast6weeksofthecourse,toanaverageofalittle
 less than 3 times per weekin week 8.The number ofstudents that used the dashboardwas
 highestinthefirst3weeks(uptoalmost200inthesecondweek)butdeclinedtoarelatively
 stablenumberofaround75fromweek4on. 
 Empiricalstrategy 
 
 As the selective non-compliance that we showed in the "Compliance with assignment to
 treatment group" section is likely to create (a small) bias in the estimated effect, that is, a
 simplecomparisonofthecontrolandexperimentgroupsrevealstheintent-to-treateffect(ITT)
 andtheeffectofsendingaweeklyemail,butnottheaveragetreatmenteffect(ATE)ofactually
 using thelearning analytics dashboard, because a specific groupseemstohaveself-selected
 away from treatment. Therefore, we control for the non-compliance using a two-stage least
 
 
 
 
 
 
 
 
 
 
 
 
 
 0 
 20 
 40 
 60 
 80 
 100 
 120 
 140 
 160 
 180 
 200 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 Week 1 Week 2 Week 3 Week 4 Week 5 Week 6 Week 7 Week 8
 N 
 u 
 m 
 b 
 e r 
 of 
 s 
 t 
 u 
 d e n 
 t 
 s 
 D a 
 s 
 h b 
 o a 
 r 
 d 
 u s e 
 Dashboard usage per week 
 Number of students Average (cid:2)mes dashboard use
 Fig.4 Statisticsondashboarduse(onlystudentsthatusedthedashboardatleastonce)
 10 Higher Education (2022) 83:1-18



11

------------------------------------------------

 
 
 
 
 squares(2SLS)instrumentalvariableapproachinordertocontrolfortheactualuseofthetool
 (seeMurnaneandWillett2011Chapter11foranextensivedescriptionofanexampleofthis
 methodappliedtoeducation).Here,weusethedummythatindicatestherandomassignment
 tothetreatmentasaninstrumentfortheactualuseofthedashboard.Bydoingthis,weensure
 that we can still use the randomisation to analyse causal effects, but at the same time, we
 analysethemoreinterestingquestionwhetheractualuseofthedashboardhasapositiveeffect
 onperformance.For thisanalysis, itis importantthattheassignment to treatmentorcontrol
 group is (highly)correlated with the use of the tool, which is represented in the statistically
 significantandlargecoefficientofthetreatmentgroupindicator(accesstothetool)inthefirst
 stage regression. This first stage regression estimates the probability that students that were
 randomised into the treatment group actually use the dashboard. In the second stage of the
 regression,weusetheoutcomeofthefirststage(predictedprobability)toestimatetheeffectof
 usingthedashboard.Ratherthanusingtheobserveduseofthedashboard,wenowgaugethe
 effectofpredicteduse,beinganindicatorthatdoesnotentailunobservedreasonsfortheuseof
 thetoolbutstrictlyreflectstheeffectoftheofferofthedashboard.Intheregressions,weadd
 thefollowingcontrolvariables:age,gender,ethnicity,orderofregistration,specialisationand
 formereducationlevel.Inouranalyses,westandardiseouroutcomevariablessuchthatallthe
 variableshave ameanofzeroanda standarddeviationofone.Thisimpliesthatdifferences
 between treatment and control group in the t tests and the regression coefficient of the
 treatment orusagedummycanbe interpretedasstandardisedeffects(i.e.Cohen'sd),where
 0.2isasmalleffect,0.5isamediumeffectand0.8isalargeeffect.
 
 Results 
 Inthissection,wepresenttheresultsofthedashboard:first,ononlinebehaviourofstudents
 throughout the course and next, on student performance on the final outcomes. Lastly, we
 presentheterogenous analyses. Inthe"Effectson online behaviour" section and "Effects on
 student performance" section, we present 4 types of analyses in each table. First of all, we
 showtheintent-to-treat(ITT),whichpresentstheeffectofsendingtheweeklyemailwiththe
 linktothedashboard(providingaccesstothedashboard).Thesecondtypeofanalysisisthe
 simpleOLS-analysis,inwhichwelookattherelationbetweenactualdashboarduseandthe
 outcome, without controlling for selection effects. In the third analysis, we present the first
 stage results, which analyse the take-up rate (dashboard use) of students that were in the
 treatmentgroup.Thefinalanalysisshowsthetwo-stageleastsquares(2SLS)analysisinwhich
 we analyse the effect of actual dashboard use while controlling for the randomisation into
 treatmentandcontrolgroup.Inthe"Heterogenouseffects"section,wherewecheckheterog-
 enouseffects,weonlyshowthe2SLSresults. 
 Effectsononlinebehaviour 
 
 Beforeweanalysetheeffectsonstudentperformance,itisimportanttoanalysewhetherthe
 dashboardhasmadeadifferenceinstudents'onlinebehaviour.Wedothisbecauseweassume
 the effect of the dashboard to work via the online behaviour of the student, as in previous
 cohorts,theonlinebehaviourwasalargepredictorofstudentperformanceonthefinaltest.As
 explainedabove,weonlyincludestudentsthathaveshownonlinebehaviourforeachofthe
 indicators at least once (regardless of whether these students are in the treatment or control
 11 Higher Education (2022) 83:1-18
 



12

------------------------------------------------

 
 
 
 
 group).Thisimpliesthatwehavedifferentnumbersofobservationsforeachonlinebehaviour
 outcome.Notethatwehavecheckedthecomparisonoftreatmentandcontrolgroupsforeach
 ofthesubselections,whichdidnotgiveusreasonforconcernforanyoftheonlinebehaviour
 outcomes. 
 First, we analyse the effect on the number of practical assignments that the student has
 completed that were graded as sufficient. Table 2 shows the results of this analysis, with
 standardisedcoefficients,whereweonlyincludestudentsthatwroteatleastoneoutofthe6
 practicalassignmentsoverthe8weeksofthecourse.Table2showsthatthereisnoeffectof
 thedashboarduseoraccessonthenumberofsufficientassignmentswrittenbythestudents.
 AlthoughthesimpleOLSshowspositivesignificantresults,thereisclearlyselection,asthese
 resultsdisappearassoonaswecontrolfortheoriginalrandomisation.
 InTable3,againwithstandardisedcoefficients,weshowtheeffectsontheaveragegrade
 of the online quizzes, again, only for students who wrote at least one quiz during those 6
 weeks.Theaverageisbasedonlyonthequizzestheywrote.Table3showsthatonlyhaving
 access to the dashboard already increases the average grade in the quizzes by 0.16 of a
 standarddeviation.The first stage showsthat therandomisationto thedashboardgroup is a
 strongpredictorforactualdashboarduse.TheresultsintheOLSaremuchhigherthaninthe
 ITT, but they are an overestimation, as the 2SLS shows. The effect of dashboard use on
 average quiz grade is about 0.2 of a standard deviation. However, we also see that the
 coefficients of the ITT and the 2SLS are almost equal, implying that there is no separate
 nudging effect from sending the email with the link to the dashboard. The potentially
 signalling function of the email to remind students of their coursework does not have a
 separateeffect,regardlessofthedashboarduse.Notethattheresultsareverystablebetween
 themodelswithandwithoutcovariates. 
 InTable 4, weshow the final indicatorofonline usage, namely theaverage gradeofthe
 onlinemasteryexercises,whereweagainonlyincludestudentsthatwrotethemasteryexercise
 atleastonce.Table4showssimilarresultstoTable3,withrespecttosignificanceandtheOLS
 overestimating the effect of actual dashboard use. Note that the coefficients are similar in
 magnitude as before. Table 4 shows that access to the dashboard gives a significant higher
 performance on the online mastery exercises, which works through the actual use of the
 dashboard(althoughtheintent-to-treatcoefficientsarealsosignificant,butsmaller).
 Table 2 Regression results for effect on the number of sufficient practical assignments over all weeks
 (standardisedcoefficients) 
 Outcome=numberofpract. 
 sufficient 
 ITT OLS Firststage 2SLS 
 Dashboardgroup 0.024 0.096 0.848*** 0.851*** 
 (0.090) (0.080) (0.020) (0.020) 
 Dashboarduse 0.204** 0.223*** 0.028 0.112 
 (0.090) (0.080) (0.110) (0.090)
 Covariates No Yes No Yes No Yes No Yes 
 N 465 465 465 465 465 465 465 465 
 F-stat 0.067 5.436 4.773 5.662 1304.764 38.819 0.067 5.487
 R2 0.002 0.261 0.008 0.271 0.738 0.751 0.000 0.268
 Standarderrorsbetweenbrackets.Covariatesarespecialisation,previouseducationallevelandclass
 *p<0.10,**p<0.05,***p<0.01 
 12 Higher Education (2022) 83:1-18



13

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Effectsonstudentperformance 
 
 Nowthatwehaveestablishedthatstudentsthathaveaccesstothedashboard,andactuallyuse
 it, have a higher performance in the online exercises, the next question is whether this
 accumulatestoa higherperformanceonthe final examofthe courseaswell.First,welook
 atthegradeinthefirstchanceofthefinalexam,foreverystudentthatwrotetheexam,and
 nextatthechanceofpassingthecourse(forallstudents,regardlessofwhethertheywrotethe
 exam,iftheydidnotwritetheexam,theyautomaticallydidnotpassthecourse).
 Table5showsthatthereisnoeffectofdashboardaccessnordashboarduseonthegradeof
 thefinalexamoftheprogrammingcourse,notevenintheOLSanalysis.Theeffectsizeis0.05
 of a standard deviation (in the analysis with covariates), and the standard errors are large.
 Givenoursamplesize,weshouldbeabletodetectaneffectof0.23ofastandarddeviation,
 whichstrengthensoursuspicionthatoverallthereisnoeffectongrades.
 Table 6 shows a similar picture as in Table 5, except that here we do see a significant
 coefficient in the OLS analysis, which disappears once we properly control for the
 randomisation (again indicating selection). Based on the above found effects on online
 behaviour, we might have expected to find a positive effect here as well. However, further
 analyses including interaction terms (moderatoreffects) betweenthe twovariables ofonline
 Table3 Regressionresultsforeffectontheaveragegradeoftheonlinequizzesoverallweeks(standardised
 coefficients) 
 Outcome=averagegrade 
 quizzes 
 ITT OLS Firststage 2SLS 
 Dashboardgroup 0.158* 0.160* 0.845*** 0.845*** 
 (0.100) (0.090) (0.020) (0.030) 
 Dashboarduse 0.269*** 0.242*** 0.187* 0.189* 
 (0.100) (0.090) (0.110) (0.100)
 Covariates No Yes No Yes No Yes No Yes 
 N 433 433 433 433 433 433 433 433 
 F-stat 2.719 3.041 7.800 3.169 1159.853 33.880 2.747 3.067
 R2 0.004 0.149 0.015 0.157 0.728 0.738 0.014 0.156
 Standarderrorsbetweenbrackets.Covariatesarespecialisation,previouseducationallevelandclass
 *p<0.10,**p<0.05,***p<0.01 
 Table 4 Regression results for effect on the average grade of the online mastery exercises over all weeks
 (standardisedcoefficients) 
 Outcome=averagescore 
 masterylevel 
 ITT OLS Firststage 2SLS 
 Dashboardgroup 0.162* 0.192** 0.795*** 0.793*** 
 (0.090) (0.080) (0.030) (0.030) 
 Dashboarduse 0.487*** 0.436*** 0.204* 0.242***
 (0.090) (0.080) (0.110) (0.100)
 Covariates No Yes No Yes No Yes No Yes 
 N 478 478 478 478 478 478 478 478 
 F-stat 3.143 5.477 28.547 6.339 941.544 27.494 3.243 5.682
 R2 0.004 0.263 0.055 0.298 0.7664 0.679 0.035 0.290
 Standarderrorsbetweenbrackets.Covariatesarespecialisation,previouseducationallevelandclass
 *p<0.10,**p<0.05,***p<0.01 
 13 Higher Education (2022) 83:1-18



14

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 behaviour that wefound a significanteffectonwithassignment toand compliancewith the
 treatment were not significant and had a coefficient close to zero in both analyses (results
 available upon request from the corresponding author), implying that the relation between
 onlinebehaviourandstudentperformanceisnotsignificantlydifferentbetweenthetreatedand
 thecontrolstudents.Itisalsopossiblethattheoneindicatorofonlinebehaviourforwhichwe
 didnotfindaneffect(onlineassignments)isthemostimportantoneinpredictingthecourse
 outcome.Anotherpossibleexplanationisthatallstudentsrealisedthattheyhavenotusedthe
 online environment to practice (enough) and all put such a large amount of study hours in
 preparing for the exam that the small effects that were found on online behaviour fade out
 because of the large amount of preparation. A last possibility is that there are heterogenous
 effects,whichmayexplainthealmostzeroresultongrades,whichwewillexploreinthenext
 section. 
 Heterogenouseffects 
 
 Table 7 shows the heterogenous effects of the effect analysis on grade by specialisation.
 Becausesomespecialisationsaremoredirectlyrelatedtotheprogrammingcourse,itislikely
 thatstudentsformthemorerelatedspecialisationsaremoremotivatedand/orseetherelevance
 ofthe course fortheir futurestudiesmore. These separate analysesmightgive anindication
 Table5 Regressionresultsforeffectonthegradeofthecourse(standardisedcoefficients)
 Outcome=grade ITT OLS Firststage 2SLS 
 Dashboardgroup −0.006 0.034 0.835*** 0.835*** 
 (0.090) (0.080) (0.020) (0.020) 
 Dashboarduse 0.153 0.120 −0.007 0.041 
 (0.100) (0.090) (0.110) (0.100)
 Covariates No Yes No Yes No Yes No Yes 
 N 456 456 456 456 456 456 456 456 
 F-stat 0.004 5.004 2.584 5.073 1167.398 34.802 0.004 5.015
 R2 0.002 0.246 0.003 0.249 0.719 0.733 0.003 0.247
 Standarderrorsbetweenbrackets.Covariatesarespecialisation,previouseducationallevelandclass
 *p<0.10,**p<0.05,***p<0.01 
 Table6 Regressionresultsforeffectonthepassingrateofthecourse(standardisedcoefficients)
 Outcome=passed ITT OLS Firststage 2SLS 
 Dashboardgroup 0.013 0.062 0.743*** 0.747*** 
 (0.080) (0.080) (0.030) (0.030) 
 Dashboarduse 0.335*** 0.231*** 0.017 0.084 
 (0.090) (0.080) (0.110) (0.100)
 Covariates No Yes No Yes No Yes No Yes 
 N 556 556 556 556 556 556 556 556 
 F-stat 0.022 4.947 14.912 5.206 805.543 26.957 0.022 4.984
 R2 0.002 0.217 0.024 0.228 0.592 0.646 0.001 0.223
 Standarderrorsbetweenbrackets.Covariatesarespecialisation,previouseducationallevelandclass
 *p<0.10,**p<0.05,***p<0.01 
 14 Higher Education (2022) 83:1-18



15

------------------------------------------------

 
 
 
 
 whytheoveralleffectisaroundzero(andnotsignificant).InTable7,weseethatforstudents
 fromgamedevelopment,thetreatmenthasanegativeeffectontheirgrade(atasignificance
 level of 10%), whereas for students from software engineering, there is a positive and
 significanteffectontheirgrade.Fortheotherspecialisations,wedonotfindanything.These
 heterogenousfindingsseemaplausibleexplanationastowhywefindacoefficientofalmost
 zerointheoveralleffectanalysisongrade. 
 Further heterogenous analyses based on this variable, on passing the course, provide a
 similarpictureasshowninTable7.Anotheranalysis,wherewesplitthesamplebywhether
 thepreviouseducationallevelis related to programming (regardless of the level ofprevious
 education) or not (potentially signalling a better preparation for a course such as program-
 ming), does not reveal any significant results (results for further heterogenous analyses are
 available upon request). Splitting up by previous education or gender leads to too small
 subsamples and thereby unreliable results. However, if we split the sample by whether the
 studentwasbornintheNetherlands,(n=52),whichmightindicateahighermotivation,we
 findhighlysignificantpositive resultsforthestudentsthatwerenot borninthe Netherlands
 (bothforgradesandforwhetherthestudentpassedtheexamthefirsttime)andnosignificant
 results for students that were born in the Netherlands (n = 404). Students that were born in
 othercountriesalsomoreoftenchoosethesoftwareengineeringspecialisationandlessoften
 gamedevelopment.Unfortunately,duetotoosmall subsamplesize,wecannot checkwhich
 oneofthetwocharacteristicsisdrivingourresults. 
 
 Conclusion and discussion 
 
 In this study, we analyse the effects of a randomised controlled experiment on providing
 freshmanstudentsinaJavaprogrammingcoursewithaLearningAnalyticsDashboard,with
 weeklyemailswithapersonalisedlink,aimedtosignalstudentsabouttheirstudyprogressas
 wellasabouttheirchancesofsuccess,byshowingvisualperformanceindicatorsofthestudent
 and the average of the cohort. The results show that the weekly email and corresponding
 dashboard access (ITT), as well as dashboard use (2SLS), have positive effects on student
 performanceintheonlineenvironmentduringthecourse(standardisedeffectsizesof0.2and
 0.25),butnotonstudentbehaviourintheonlineenvironmentoronstudentperformanceinthe
 final exam or their chances of passing the programming course. However, heterogenous
 Table7 Heterogenouseffectsbyspecialisation(only2SLSshown)(standardisedcoefficients)
 Outcome= 
 grade 
 BusinessIT 
 management 
 (BIM) 
 Game 
 development 
 (GD) 
 Software 
 engineering 
 (SE) 
 Systemandnetwork 
 engineering(SNE) 
 Technical 
 computing 
 (TC) 
 Dashboard 
 use 
 0.25 −0.42* 0.24* −0.16 −0.08 
 (0.34) (0.22) (0.14) (0.18) (0.28) 
 Covariates Yes 
 N 74 110 162 63 47 
 F-stat 1.59 2.07 2.73 1.80 0.55 
 R2 0.30 0.30 0.30 0.42 0.22 
 Standarderrorsbetweenbrackets.Covariatesarepreviouseducationallevelandclass
 *p<0.10,**p<0.05,***p<0.01 
 15 Higher Education (2022) 83:1-18



16

------------------------------------------------

 
 
 
 
 analysis shows that final exam grades are significantly higher for treatment students in the
 specialisationsoftwareengineeringandaresignificantlylowerfortreatmentstudentsingame
 development (the two largest specialisations). We also discuss key challenges and possible
 solutionswhenusinglearninganalyticsdashboardsincombinationwithpredictionmodelsthat
 arelinkedtoonlinestudentbehaviour 
 Thefactthatwedonotfindanoverallresultonstudentperformanceisinlinewithfindings
 from previous studies (e.g. Dodge et al. 2015; Park and Jo 2015). However, we do find
 heterogenouseffectsbyspecialisation,andwealsofindpositiveeffectsforintermediateresults
 suchasthequizzesandtheonlinemasteryexercises.Possibleexplanationsfromtheliterature
 why a dashboardwouldnotwork, such as thecompetition elementthat couldlead tolower
 motivationorthe'onesizefitsall'approachthatcouldleadtoineffectiveuse(Teasley2017),
 therefore do not seem fit for our study. In our case, the lack of effects on overall student
 performance is more likely to be due to too low online activity by the students and due to
 differencesbetweenspecialisations. 
 AnimportantaspectofthedashboardtreatmentistheeffectoftheLADontheuseofthe
 onlineenvironmentsbythestudents.Andalthoughouranalysisshowsthatthereisapositive
 effectofthedashboardoftheuseofandperformanceintheonlineenvironmentsbystudents,
 theonlineactivitystronglydeclinedovertimeanddroppedfromabout70%inweek1toless
 than50%inweek3.Thiswasmostlikelyduetothesummativenatureoftheonlineactivities.
 After2weeks,(some)studentsprobablyfiguredoutthattherewerenosanctionsagainstpoor
 online performance and they stopped using Moodle and MyProgramming Lab or only used
 theminfrequently.Apparently,alsothe dashboardcouldnot encourage students(enough)to
 do their online exercises. Maybe this is due to the business tone of the dashboard or to the
 inaccurate predictions of the dashboard. The dashboard should have stimulated the students
 moretodotheironlineexercises,andmaybethiscanbebetterachievedbyonlyshowingthe
 realfactsliketheonlineprogressandnotpresentthepredictedvaluesoftheirgradeanymore,
 whichwouldprobablyincreasetheirfaithinthedashboard.Itisimportanttorealisethatthe
 predictionmodelswouldmostlikelyhavebeenmuchmoreaccurateiftheonlineassignments
 hadasummativenature,whichcouldhaveledtoadifferenteffectofthedashboard.
 It is very likely that students realised that they had spent too little time in the online
 environment (where the dashboard group spent a little more time online than the treatment
 group, but still not much) and therefore overcompensated with additional study hours as
 preparation for the exam. This may explain why we do not see an effect on the overall
 performance,becausetheeffectwouldhavetorunthroughonlineactivity,whichwastoolow,
 andforwhichstudentsmayhavecompensatedwithadditionalstudyhoursfortheexam.
 The heterogenous effects that we find may point towards something like a motivation
 effect.Thegeneralcontentofsoftwareengineeringismuchmorerelatedtoprogrammingthan
 the general content of game development, so SE-students may be more motivated for the
 programmingcourse,eitherbecauseitverymuchrelatestothestudyoftheirchoiceorbecause
 theyseethebenefitofthiscoursemorefortheirfuturestudentlife(althoughitisbeneficialfor
 allstudents,asweargueanddescribeintheintroduction,itisunlikelythatfreshmanstudents
 of more unrelated specialisations also see it that way). The same might hold for country of
 birth:studentsthatwerenotbornintheNetherlandsmightbemoremotivatedtosucceedin
 theirstudies. 
 Futureworkshouldfocusmoreontheseheterogenouseffects,aswellasseriouslyconsider
 the formative nature of these online exercises, as both these aspects have most likely
 influencedtheresultswepresentinthispaper. 
 16 Higher Education (2022) 83:1-18



17

------------------------------------------------

 
 
 
 
 Dataavailability ThispaperusesconfidentialstudentdatafromtheUniversityofAppliedSciencesthatwe
 studyandcanthereforenotmadepubliclyavailablewithoutviolatingtheEuropeanGeneralDataProtection
 Regulations(GDPR). 
 
 OpenAccessThisarticleislicensedunderaCreativeCommonsAttribution4.0InternationalLicense,which
 permitsuse,sharing,adaptation,distributionandreproductioninanymediumorformat,aslongasyougive
 appropriatecredittotheoriginalauthor(s)andthesource,providealinktotheCreativeCommonslicence,and
 indicateifchangesweremade.Theimagesorotherthirdpartymaterialinthisarticleareincludedinthearticle's
 CreativeCommonslicence,unlessindicatedotherwiseinacreditlinetothematerial.Ifmaterialisnotincluded
 in the article's Creative Commons licence andyour intendeduse is not permittedbystatutoryregulationor
 exceedsthepermitteduse,youwillneedtoobtainpermissiondirectlyfromthecopyrightholder.Toviewacopy
 ofthislicence,visithttp://creativecommons.org/licenses/by/4.0/.
 References 
 
 Azmat,G.,&Iriberri,N.(2010).Theimportanceofrelativeperformancefeedbackinformation:evidencefroma
 natural experiment using high school students ☆., 94, 435-452. https://doi.org/10.1016/j.
 jpubeco.2010.04.001. 
 Bandiera, O., Larcinese, V., & Rasul, I. (2015). Blissful ignorance? A natural experiment on the effect of
 feedbackonstudents'performance.LabourEconomics,34,13-25.
 Beattie,G.,Laliberté,J.W.P.,&Oreopoulos,P.(2018).Thriversanddivers:usingnon-academicmeasuresto
 predictcollegesuccessandfailure.EconomicsofEducationReview,62(January2017),170-182.https://doi.
 org/10.1016/j.econedurev.2017.09.008. 
 Bodily, R., & Verbert, K. (2017). Trends and issues in student-facing learning analytics reporting systems
 research.ProceedingsoftheSeventhInternationalLearningAnalytics&KnowledgeConferenceon-LAK',
 17,309-318.https://doi.org/10.1145/3027385.3027403. 
 Bos,N.(2016).Effectivenessofblendedlearning.Heerlen:OpenUniversity,Heerlen.
 Chevalier,A.,Luehrmann,M.,&Dolton,P.(2014)."Makingitcount":evidencefromafieldexperimenton
 assessmentrules,studyincentivesandstudentperformance.IZADiscussionPapers,No.8582(Vol.C07).
 Bonn. 
 Christy,K. R., & Fox, J. (2014).Leaderboards in a virtual classroom: a test of stereotype threat and social
 comparisonexplanationsforwomen'smathperformance.ComputersandEducation,78,66-77.https://doi.
 org/10.1016/j.compedu.2014.05.005. 
 Dodge,B.,Whitmer,J.,&Frazee,J.P.(2015).Improvingundergraduatestudentachievementinlargeblended
 coursesthroughdata-driveninterventions.ProceedingsoftheFifthInternationalConferenceonLearning
 AnalyticsAndKnowledge-LAK'15,412-413.https://doi.org/10.1145/2723576.2723657.
 Durall,E.,&Gros,B.(2014).Learninganalyticsasametacognitivetool.InCSEDU(1)(pp.380-384).
 Hanus,M.D.,&Fox,J.(2015).Assessingtheeffectsofgamificationintheclassroom:alongitudinalstudyon
 intrinsic motivation, social comparison, satisfaction, effort, and academic performance. Computers and
 Education,80,152-161.https://doi.org/10.1016/j.compedu.2014.08.019.
 Hu,Y.-H.,Lo,C.-L.,&Shih,S.-P.(2014).Developingearlywarningsystemstopredictstudents'onlinelearning
 performance.ComputersinHumanBehaviour,36(0),469-478.https://doi.org/10.1016/j.chb.2014.04.002.
 Jivet,I.,Scheffel,M.,Drachsler,H.,&Specht,M.(2017).Awarenessisnotenough.Pitfallsoflearninganalytics
 dashboardsin the educationalpractice. In Data driven approaches indigitaleducation: 12th European
 ConferenceonTechnologyEnhancedLearning,EC-TEL2017,Tallinn,Estonia,September12-15,2017,
 Proceedings(p.14).https://doi.org/10.1007/978-3-319-66610-5.
 Kim,J.,Jo,I.H.,&Park,Y.(2015).Effectsoflearninganalyticsdashboard:analyzingtherelationsamong
 dashboard utilization, satisfaction, and learning achievement. Asia Pacific Education Review, 13-24.
 https://doi.org/10.1007/s12564-015-9403-8. 
 Kitsantas,A.,Winsler,A.,&Huie,F.(2008).Self-regulationandabilitypredictorsofacademicsuccessduring
 college.JournalofAdvancedAcademics,20(1),42-68. 
 Lam,S.-F.,Yim,P.-S.,Law,J.S.F.,&Cheung,R.W.Y.(2004).Theeffectsofcompetitiononachievement
 motivationinChineseclassrooms.BritishJournalofEducationalPsychology,74(2),281-296.
 Lauría,E.J.M.,Moody,E.W.,Jayaprakash,S.M.,Jonnalagadda,N.,&Baron,J.D.(2013).Openacademic
 analyticsinitiative:initialresearchfindings.Proceedingsofthe3rdInternationalConferenceonLearning
 AnalyticsandKnowledge(LAK'13),150-154.https://doi.org/10.1145/2460296.2460325.
 17 Higher Education (2022) 83:1-18



18

------------------------------------------------

 
 
 
 
 Ministry of Education Culture and Science. (2016). 123studiekeuze. Retrieved June 16, 2016, from
 https://student.hva.nl/hbo-ict/a-z/item/propedeuse-hbo-ict.html?f=propedeuse
 Murnane,R.J.,&Willett,J.B.(2011).Methodsmatter:Improvingcausalinferenceineducationalandsocial
 scienceresearch.Oxford:OxfordUniversityPress. 
 Nuffic.(2015).TheDutcheducationsystemdescribed.RetrievedMarch10,2017,fromhttps://www.epnuffic.
 nl/en/publications/find-a-publication/education-system-the-netherlands.pdf
 Oreopoulos, P., Petronijevic, U. (2018). Student coaching: how far can Technology go? Journal of Human
 Resources,53(2),299-329. 
 Park,Y.,&Jo,I.(2015).JournalofUniversalComputerScienceSupportStudents'LearningPerformance,
 21(JANUARY2015),110-133. 
 Rojas,R.(2009).AdaBoostandthesuperbowl ofclassifiersatutorial introductiontoadaptiveboosting.Freie
 Universitat Berlin. Retrieved from http://www.inf.fu-berlin.de/inst/ag-ki/rojas_
 home/documents/tutorials/adaboost4.pdf.Accessed9Jun2020.
 Symonds,William,C.,Schwartz,R.,&Ferguson,R.F.(2011).Pathwaysprosperitymeetingthechallengeof
 preparingyoungAmericansforthe21stcentury.HarvardUniversityGraduateSchoolofEducation.
 Teasley,S.D.(2017).Studentfacingdashboards:onesizefitsall?Technology,KnowledgeandLearning,1-8.
 Tempelaar,D.T.,Rienties,B.,&Giesbers,B.(2015).Insearchforthemostinformativedataforfeedback
 generation: learning analytics in a data-rich context. Computers in Human Behaviour, 47, 157-167.
 https://doi.org/10.1016/j.chb.2014.05.038. 
 Tufte,E.R.(1991).Envisioninginformation.Optometry&VisionScience,68(4),322-324.
 Verbert,K.,Manouselis,N.,Drachsler,H.,&Duval,E.(2012).Dataset-drivenresearchtosupportlearningand
 knowledgeanalytics.JournalofEducationalTechnology&Society,15,133-148.
 Verbert,K.,Duval,E.,Klerkx,J.,Govaerts,S.,&Santos,J.L.(2013).Learninganalyticsdashboardapplica-
 tions.AmericanBehaviouralScientist,57(10),1500-1509.https://doi.org/10.1177/0002764213479363.
 Verbert,K.,Govaerts,S.,Duval,E.,Santos,J.L.,VanAssche,F.,Parra,G.,&Klerkx,J.(2014).Learning
 dashboards: an overview and futureresearchopportunities. Personal andUbiquitous Computing, 18(6),
 1499-1514.https://doi.org/10.1007/s00779-013-0751-2. 
 Wayne, I., & Langley, P. (1992). Induction of one-level decision trees. In 9th international conference on
 MachineLearning. 
 Publisher'snote SpringerNatureremainsneutralwithregardtojurisdictionalclaimsinpublishedmapsand
 institutionalaffiliations. 
 18 Higher Education (2022) 83:1-18
 
 
 
 
 
 
 
 
 
 
 
 
 
 

