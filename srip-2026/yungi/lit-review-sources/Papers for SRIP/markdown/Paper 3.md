

1

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 Research Article 
 Online Behavior Analysis-Based Student Profile for 
 
 Intelligent E-Learning 
 
 
 
 KunLiang,1YiyingZhang,1YeshenHe,2YilinZhou,3WeiTan,2andXiaoxiaLi2 
 
 1CollegeofComputerScienceandInformationEngineering,TianjinUniversityofScience&Technology,Tianjin300222,China
 2ChinaGRIDCOMCo.,Ltd.,Shenzhen518031,China 
 3XiamenGreatPowerGeoInformationTechnologyCo.Ltd.,Xiamen,Fujian361000,China
 CorrespondenceshouldbeaddressedtoYiyingZhang;yiyingzhang@tust.edu.cn 
 Received 15 November 2016; Accepted 23 February 2017; Published 13 March 2017
 
 AcademicEditor:SookYoon 
 Copyright©2017KunLiangetal. This is an open access article distributed under the Creative Commons Attribution License,
 whichpermitsunrestricteduse,distribution,andreproductioninanymedium,providedtheoriginalworkisproperlycited.
 
 Withthedevelopmentofmobileplatform,suchassmartcellphoneandpad,theE-Learningmodelhasbeenrapidlydeveloped.
 However,duetothelowcompletionrateforE-Learningplatform,itisverynecessarytoanalyzethebehaviorcharacteristicsof
 onlinelearnerstointelligentlyadjustonlineeducationstrategyandenhancethequalityoflearning.Inthispaper,weanalyzed
 therelationindicatorsofE-Learningtobuildthestudentprofileandgavecountermeasures.Adoptingthesimilaritycomputation
 andJaccardcoefficientalgorithm,wedesignedasystemmodeltocleananddigintotheeducationaldataandalsothestudents'
 learningattitudeandthedurationoflearningbehaviortoestablishstudentprofile.AccordingtotheE-Learningresourcesand
 learnerbehaviors,wealsopresenttheintelligentguidemodeltoguidebothE-Learningplatformandlearnerstoimprovelearning
 things.ThestudyonstudentprofilecanhelptheE-Learningplatformtomeetandguidethestudents'learningbehaviordeeplyand
 alsotoprovidepersonalizedlearningsituationandpromotetheoptimizationoftheE-Learning.
 
 
 1.Introduction 
 Asaneffectivewayforeducation,theE-Learningsupported 
 moreknowledgeandskillsthanthetraditionaleducationand 
 alsoisbeyondtherestrictionoftimeandspacebasedonnew 
 information and communication technologies [1]. MOOC 
 (massive open online courses) is a representative online 
 educationplatform.AndtheCourseraisthelargestMOOC 
 platformintheworld,establishedbytheUSAtopuniversities 
 networklearningplatform.Atpresent,thereareabout1563 
 courses and more than 17 million registered students on 
 the platform. Based on edX, the largest MOOC platform 
 (http://www.xuetangx.com) is developed by Tsinghua Uni- 
 versity,inChina.Ithasabout3millionmemberswhichare 
 frommorethan200countriesandregions[2]. 
 E-Learning education has had a rapid development. 
 Figure1showsthatthenumberofChineseE-Learningusers 
 reached 90.992 million in 2015, which is with an annual 
 growthrateof56%;itwillgrowto120millionpeopleby2017. 
 However,althoughmoreandmorepeopleareconcerned
 abouttheE-Learningplatform,thereareonly7%-9%learn-
 ers who completed MOOC's course according to Coursera
 statisticsdata[3].Therefore,itisverynecessarytoimprove
 thequalityoflearningandoptimizetheteachingmechanism
 topushthecourseaccurately.Thestudentprofileisanovel
 methodtoanalyzethebasicinformationandlearnthebehav-
 iorofonlinelearners.Throughtheestablishmentofstudent
 profile, it is to achieve personalized situation construction
 and learn process guidance, which plays a positive role in
 promotingonlinelearning. 
 Thestudentprofileisafigureportraitanalysisbasedon
 thebigdataandlabeling.Wecollect,process,andanalyzethe
 data generated in the learners'behavior, foran information
 description of individual students or groups. According to
 the theory of behavioral psychology, use of the student
 profile to analyze the data on student behavior can reflect
 the students' behavior characteristics and psychodynamics.
 For example, the Education Big Data Research Institute of
 Hindawi 
 Journal of Electrical and Computer Engineering 
 Volume 2017, Article ID 9720396, 7 pages 
 https://doi.org/10.1155/2017/9720396 



2

------------------------------------------------

 
 
 
 2 JournalofElectricalandComputerEngineering
 
 
 
 
 44.718 
 51.895 
 59.056 67.2 
 77.969 
 90.992 
 2010 2011 2012 2013 2014 2015 
 User scale (million) 
 Growth rate 
 0 
 10 
 20 
 30 
 40 50 
 60 
 70 80 
 90 
 100 
 0.0 
 2.0 
 4.0 
 6.0 
 8.0 10.0 
 12.0 14.0 
 16.0 
 18.0 
 ( %) 
 Figure1:2010-2015E-Learninguserscale. 
 UESTC (University of Electronic Science and Technology 
 of China) cooperate with other departments in developing 
 theStudentProfileSystem,whichcangiveanearlywarning 
 about failing the exam [4]. Similarly, Southwest Jiaotong 
 Universitycollectedandanalyzedthebigdatadrawnstudents 
 on campus "behavior track" model to predict students' 
 future development [5]. In foreign countries, researchers 
 haveprovedthatusingthebigdatatoanalyzethestudents' 
 learningbehaviorsuchasreadingcourseinformationonline, 
 submittinghomework,andexchangingdetectedthewarning 
 informationinpoorlearningperformance.Accordingtothis 
 warning information, the teachers made recommendations 
 forimprovementandgivensomeguidance,toensurethatthe 
 studentslearneffectively.However,"studentprofile"hasbeen 
 appliedintheeducationfield;thebigdataprofiletechnology 
 combined with education has a very important practical 
 significance. 
 InviewoftheE-Learningdata,weusethebigdatatech- 
 nologytoanalyzetheE-Learningcharacteristic,andthemain 
 researchcontentsofthispaperareasfollows:(1)analysisof 
 factorsaffectingthestudentprofile.Thestudentsareclassified 
 according to age, and then we define the relations between 
 studentbehaviorandduration;(2)buildingastudentprofile 
 model.Wecollectedandpreprocesseddataanddugoutthe 
 connection on the students' learning behavior attributes by 
 theJaccardalgorithm,toformthestudentprofilefinally;(3) 
 analysis on the student profile. It is to contribute to the E- 
 Learningplatformtobetterunderstandthelearningbehavior 
 ofstudents. 
 2.TheDefinitionoftheStudentProfile 
 The student profile described the learning characteristics 
 frommultidimensionsandmultiangle.Itincludestheanaly- 
 sisindicatorsandinfluencingfactors,suchasstudentbehav- 
 ior,datacollection,datacleaning,andstudentprofilebuilding 
 andanalyzing[6]. 
 2.1. Student Definition. The main research on the student 
 profileisthestudentsintheschoolorE-Learningplatform. 
 Assumethestudentsetasfollows: 
 𝑆={𝑠𝑗 
 𝑖 
 |𝑠𝑗 
 1 
 ,𝑠𝑗 
 2 
 ,...,𝑠𝑗 
 𝑛 
 }, (1) 
 Table1:Learners'agesegmenttable. 
 Years Symbol Example 
 <17 𝑎 Itmeansstudent𝑠 1isunderthe17years
 18-24 𝑏 Itmeansstudent𝑠 2is18-24years
 25-34 𝑐 Itmeansstudent𝑠 3is25-34years
 35-54 𝑑 Itmeansstudent𝑠 4is35-54years
 >55 𝑒 Itmeansstudent𝑠 5isover55years
 Table2:Preset12kindsofonlinelearningbehavior.
 ID Learningbehavior 
 𝑏1 Browselearninggoals 
 𝑏2 Textlearning 
 𝑏3 Multimedialearning 
 𝑏4 Practiceonline 
 𝑏5 Search&viewreference 
 𝑏6 Makenotes 
 𝑏7 Downloadcourseware 
 𝑏8 Questiononline 
 𝑏9 Exchangeinteraction 
 𝑏10 CommunicatethroughE-mail
 𝑏11 Restorlistentomusic 
 𝑏12 TalkaboutQQwhenlearning
 where𝑠𝑗 
 𝑖 
 indicatesthestudentsclassifiedbyage;𝑖meansthe
 individual;𝑗denotesthestudentagelevel(forconvenience,
 thesuperscriptisusuallyomittedas𝑠 𝑖),andthereare5types
 ofstudentsclassifiedindifferentage,whichincludeslessthan
 17yearsold,18-24yearsold,25-34yearsold,35-54yearsold,
 andover55yearsold,asshowninTable1. 
 According to age, we can predict learner profile infor-
 mation and further dig into the characteristics of students
 learning. 
 2.2. Definition of Learning Behavior. The online learning
 behavioristhekindsoflearningbehaviorunderthenetwork
 environment.Wefocusondiggingoutthecharacteristicsof
 learnersfromonlinelearningbehaviorafteranalysis,inorder
 tounderstandthestudent'sperformance.Thecoreoflearning
 behavioristheoperationofonlinelearningbehaviors[7,8].
 For example, learner clicks on a course, browses the page,
 playsthevideo,anddownloadstherelevantcourseware.The
 "click"and"download"arethetwooperationsaboutlearning
 behaviors.Thebehaviorset(behavior)inthestudentprofile
 isdefinedas 
 𝐵={𝑏 𝑖 |𝑏 1 ,𝑏 2 ,...,𝑏 𝑛 }, (2)
 where𝑏 𝑖indicatesvarietiesofbehaviorandincludes12kinds
 of learning behaviors, such as learning goal, text learning,
 onlinepractice,andmakingnotes,asshowninTable2.
 Since the online learning is the period of time process
 with online learning behavior, it is an important parameter
 to evaluate the quality of online learning. In particularly, it
 1742,
 2017,
 1, 
 D 
 ow 
 nloaded
 from
 https://onlinelibrary.w
 iley.com
 /doi/10.1155/2017/9720396,
 W 
 iley
 O nline
 L ibrary
 on 
 [13/05/2026].
 S ee
 the
 T 
 erm
 s and
 C 
 onditions
 (https://onlinelibrary.w
 iley.com
 /term
 s-and-conditions)
 on 
 W 
 iley
 O 
 nline
 L 
 ibrary
 for
 rules
 of 
 use;
 O A
 articles
 are
 governed
 by 
 the
 applicable
 C reative
 C 
 om 
 m 
 ons
 L 
 icense



3

------------------------------------------------

 
 
 
 JournalofElectricalandComputerEngineering 3 
 
 
 Data source 
 
 Data acquisition 
 
 
 
 Data cleaning 
 Attribute 
 induction D 
 at a 
 pr 
 o 
 c 
 essi 
 n g 
 Text mining 
 Cluster analysis 
 Correlation 
 Classification predication K n o wl 
 e 
 d 
 g e 
 b 
 as e 
 A 
 n al ysis 
 a 
 n 
 d 
 mi 
 ni n 
 g 
 Give up type 
 Moderate type 
 Deep type 
 Questions type 
 Inquisitive type 
 Multitype 
 ··· 
 Figure2:Studentprofilemodel. 
 reflects the degree of focus on learning. The duration set 
 (timeslot)instudentprofileisdefinedasfollows: 
 𝑇={𝑡 𝑖 |𝑡 1 ,𝑡 2 ,...,𝑡 𝑛 }, (3) 
 where 𝑡 𝑖 indicates various of durations; it is divided into periods as 1-10 minutes, 10-20 minutes, 20-30 minutes,
 30-40minutes,40-50minutes,50-60minutes,andsoforth. 
 Accordingtotheabovedefinitions,𝑠 1 ⋅𝑏 𝑖meansthebehav- 
 ior 𝑏 𝑖 of the student 𝑠 1. We suppose behavioral differences 
 Δ𝑏=𝑠 1 ⋅𝑏 𝑖 −𝑠 2 ⋅𝑏 𝑖;itrepresentsthestudents'differencesina certainbehavior.Forexample,supposecollegelearner𝑠 1,job
 learner𝑠 2,andonlinetraining𝑏 1.WeadoptΔ𝑏=𝑠 
 1 
 ⋅𝑏 
 1 
 −𝑠 
 2 
 ⋅𝑏 
 1 
 to analyze the differences between college learner and job 
 learnerinthebehaviorofthetrainingonline. 
 3.StudentProfileModel 
 The student profile has a complete model to guide us to 
 analyzing the students' online learning process. The stu- 
 dent profile model (Figure2) includes data collection, data 
 cleaning, and portrait analysis. Firstly, data collection can 
 obtain the original data by means of E-Learning platform 
 or questionnaire survey. Secondly, we utilize the attribute 
 reduction to clean the original data and then employ the 
 Jaccardcoefficientalgorithmfordataanalysisanddatamin- 
 ing.Finally,welabelthestudentsaccordingtoresultsofthe 
 analysisinordertoformthestudentprofile.Simultaneously, 
 webuildtheknowledgebase(KB)forstorageofknowledge 
 sheetaboutthestudentprofile[9].Instudentprofilemodel, 
 KBisparalleltothedatamininglevelandinteraction.From 
 theknowledgebase,wetakesomeofthestudentprofilesetto 
 digintoandanalyzeandstoretheresultsintheKB.Therefore, 
 the KB of the student profile has the self-growth and self- 
 perfectionability. 
 3.1. Data Acquisition. Data acquisition includes four cate- 
 gories, such as student user registration data, web log data, 
 learningbehaviordata,andlearningcontentpreferencedata.
 The student user registration data is mainly analysis on the
 characteristicsofthelearners,includingusername,sex,date
 of birth, geography, occupation, and hobbies. The web log
 datareflectstheoperationofE-Learningplatform,including
 active number, page views, access time, activation rate, and
 learning path. The learning behavior data is helpful for
 statisticsanalysisofonlinelearningperformance,including
 learning time, learning activities, learning resources, and
 examination results. The learning content preference data
 canbeusedtoanalyzethepreferenceofcoursesorteachers,
 including browse/collection content, review content, and
 interactivecontent.Itcanbehelpfulforpushingthecourse
 accurately. 
 3.2. Data Cleaning. Data cleaning preprocesses the original
 data, removes redundant data, retains the useful data for
 the analysis, and organizes the data into a standard format.
 Becausetheinterferenceofabnormalvaluesoftenresultsin
 data mining distortion [10-12], data cleaning improves the
 accuracy of data analysis and ensures the reliability of data
 mining. 
 Attribute induction is the most important process of
 collectingthedatasourcepretreatment.Supposetheoriginal
 data field to {𝐺 1 ,𝐺 2 ,...,𝐺 𝑁 
 𝐺 
 }, where 𝑁 𝐺 is the dimension
 of the original data field. Set the vector 𝐴, where 𝐴 ∈ {𝐺 1 ,𝐺 2 ,...,𝐺 𝑛 } and 𝐴 means desirable property. By the
 propertystatuteofdatapreprocessingtogiveallthedesired
 properties,theattributeinductionmethodisdefinedassig,
 cleaningthedatatogetthefollowingresults:
 {𝐴 1 ,𝐴 2 ,...,𝐴 𝑁 𝐴 }=sig {𝐺 1 ,𝐺 2 ,...,𝐺 𝑛 }, (4)
 inwhich𝑁 𝐴isanimportantpropertyforthedimension
 data field. In our solution, we calculate the importance of
 thepropertyandselectthesamebehavioranalysisrelatedto
 the desired attributes. Our solution does not deal with the
 concreteimplementationoftheattributeinductionaboutsig.
 4.StudentProfileAnalysis 
 In this section, we calculate the similarity in the behavior
 set of different students, through the Jaccard coefficient
 similarity algorithm compared with the online behavior
 characteristics and duration of learners, similar properties
 classifiedasaclass,andthedifferencepropertiesclassifiedto
 differentclasses. 
 4.1.StudentBehaviorFeatureSimilarityCalculation. Similar-
 ityamongthebehavioralcharacteristicsofdifferentstudents
 objects belongs to nonnumeric objects; we adopt Jaccard
 coefficient calculated similarity [13, 14]. The similarity for-
 mulaisasfollows: 
 𝑟 𝑖𝑗𝑘 =Jaccard(𝑠 𝑖 ⋅𝑏 𝑘 ,𝑠 𝑗 ⋅𝑏 𝑘 )= 
 󵄨󵄨󵄨󵄨󵄨󵄨󵄨󵄨󵄨󵄨 
 𝑠 𝑖 ⋅𝑏 𝑘 ∩𝑠 𝑗 ⋅𝑏 𝑘 
 𝑠 
 𝑖 
 ⋅𝑏 
 𝑘 
 ∪𝑠 
 𝑗 
 ⋅𝑏 
 𝑘 
 󵄨󵄨󵄨󵄨󵄨󵄨󵄨󵄨󵄨󵄨 
 , (5) 
 where𝑠 𝑖 ⋅𝑏 𝑘 and𝑠 𝑗 ⋅𝑏 𝑘 representthebehavior𝑏 𝑘 ofstudents
 𝑠 𝑖 and𝑠 𝑗.Supposethestudent𝑠 𝑖 belongstoKB;wecompare
 1742,
 2017,
 1, 
 D 
 ow 
 nloaded
 from
 https://onlinelibrary.w
 iley.com
 /doi/10.1155/2017/9720396,
 W iley O
 nline
 L ibrary
 on 
 [13/05/2026].
 S ee
 the
 T erm
 s and C onditions
 (https://onlinelibrary.w
 iley.com
 /term
 s-and-conditions)
 on 
 W 
 iley
 O nline
 L 
 ibrary
 for
 rules
 of 
 use;
 O A
 articles
 are
 governed
 by 
 the
 applicable
 C reative
 C 
 om 
 m 
 ons
 L 
 icense



4

------------------------------------------------

 
 
 
 4 JournalofElectricalandComputerEngineering
 
 
 (1)Input:𝑠𝑠//𝑠𝑠isasetofstudents 
 (2)Output: 𝑅[𝑖][𝑗] 
 (3)/∗ 
 similarityofbehaviorcharacteristics 
 betweenstudent𝑖and𝑗. ∗/ 
 (4)Dim𝑅 AsFloat[][];//similaritymatrix 𝑅 
 (5)Dim𝑖, 𝑗,𝑛Asint; 
 (6)Dim𝑘 Asfloat; 
 (7)Begin 
 (8)𝑛=𝑠𝑠.length; 
 (9)//getthenumberofStudentset 
 (10)For𝑖=0To𝑛{ 
 (11) For𝑗=𝑖+1To𝑛{ (12) For 𝑘=0To|𝐵| (13) //|𝐵|isthenumberofbehaviortypes (14) { (15) 𝑟[𝑖][𝑗][𝑘]=Jaccard(𝑠𝑠[𝑖][𝑗][𝑘]); (16) } (17) 𝑅[𝑖][𝑗]=Sim(𝑠𝑠[𝑖],𝑠𝑠[𝑗]) (18)}}
 
 
 
 (19)Return𝑅 
 (20)End 
 
 Algorithm1:Jaccardcoefficientalgorithm. 
 
 𝑠 𝑗to𝑠 𝑖.If𝑠 𝑗and𝑠 𝑖similaritydifferenceistoolarge,itwillbe 
 addedtotheKBasanewclass. 
 Usersimilarityisdefinedas 
 
 𝑅 𝑖𝑗 =Sim(𝑠 𝑖 ,𝑠 𝑗 )= 
 1 
 𝑀 
 𝑀 
 ∑ 
 𝑘=1 
 𝑟 𝑖𝑗𝑘 , (6) 
 inwhichSim(𝑠 
 𝑖 
 ,𝑠 
 𝑗 
 )indicatesthesimilaritybetweenstudents 
 𝑠 𝑖 and 𝑠 𝑗; 𝑀 indicates the behavior dimension attributes of 
 studentset𝑆;𝑟 
 𝑖𝑗𝑘 
 representsthesimilarityaboutproperty𝑘 
 betweenstudents𝑠 𝑖and𝑠 𝑗,and𝑖 ̸ =𝑗. 
 Accordingtosimilaritycalculation,weobtainMatrixsim 
 asfollows: 
 Matrixsim = 
 [ 
 [ [ 
 [ [ 
 [ 
 [ [ 
 [ 
 [ 
 [ 
 [ 
 [ 
 [ 
 [ 
 [ 
 [ 
 1 𝑅 
 12 
 𝑅 
 13 
 ⋅⋅⋅ ⋅⋅⋅ 𝑅 
 1𝑁 
 0 1 𝑅 23 ⋅⋅⋅ ⋅⋅⋅ ⋅⋅⋅ 𝑅 2𝑁 
 0 0 1 ⋅⋅⋅ ⋅⋅⋅ 𝑅 
 3𝑁 
 . . 
 . d 
 . . 
 . 
 1 
 . . 
 . 
 . . 
 . 
 ⋅⋅⋅ 0 d 𝑅 
 𝑁−1,𝑁 
 0 0 0 1 
 ] 
 ] ] 
 ] ] 
 ] 
 ] ] 
 ] 
 ] 
 ] 
 ] 
 ] 
 ] 
 ] 
 ] 
 ] 
 . (7) 
 Itisanuppertriangularmatrix,where0 < 𝑅 
 𝑖𝑗 
 < 1,𝑅 
 𝑖𝑗 
 denotedline𝑖androw𝑗,anditisthesimilarityofbehavior 
 characteristicsbetweenstudent𝑖andstudent𝑗. 
 Jaccard coefficient algorithm is described as shown in 
 Algorithm1. 
 According to the result of Jaccard coefficient algorithm, 
 wecanlabelthelearners.Supposethatthecalculationisfrom 
 two dimensions about learning behavior and duration. The 
 94.30% 
 5.70% 
 18.47% 
 58.60% 
 6.70% 
 45.90% 
 17.51% 
 55.73% 
 16.88% 
 9.87% 
 0.00 
 10.00 
 20.00 
 30.00 
 40.00 
 50.00 
 60.00 
 70.00 
 80.00 
 90.00 
 100.00 
 ( 
 %) 
 H el pf 
 ul 
 U n h el pf 
 ul 
 H a 
 v e cl e ar l e ar ni n g o bj e cti v
 es 
 S o m eti m es l e ar ni n g g o
 als 
 O ft e n m a k e l e ar ni n g pl a
 ns 
 N ot m a ki n g l e ar ni n g pl a
 ns 
 C o 
 n c e nt r at e o n l e ar ni n g t as
 ks 
 Gi v e pri orit y t o l e ar ni n
 g 
 Pl a y first a n d t h e n l e ar
 n 
 F or g ot t o l e ar
 n 
 Figure3:Learningattitudeanalysis.
 studentcouldbelabeled"depthlearningtype"iflearningper-
 formancetakesmorethan60minutes.Similarly,thestudent
 couldbelabeled"tastedtype"iflearningperformancetakes
 less than 10 minutes. Additionally, based on the frequency
 ofonlinequestionandonlinetraining,welabeled"inquisi-
 tive type," "application type," and "perseverance type." The
 specificlabelingmethoddoesnotrepeatthemhere.Weonly
 proposedJaccardcoefficientalgorithmandlabelingideafor
 readers. 
 4.2. Learning Attitude Analysis. The students' learning atti-
 tudemakesadifferencetolearningeffect.Wecollecteddata
 from18-24-year-oldstudentgroupandstatisticallyanalyzed
 it, such as whether having the clear learning goal or not
 and whether having the learning plan or not. As shown
 in Figure3, it reflects the learners' subjective initiative and
 recognition to E-Learning courses, which contributes to
 analyzingtheinterferencefactorsofE-Learning.
 In the 18-24-year-old group, there are about 94.3%
 learners who believed that E-Learning courses are helpful
 for them. There are 18.47% learners who have the clear
 learning objectives, and 58.6% learners have clear learning
 objectivesoccasionally.Thisratioreflectsthatmoststudents
 are quite blindly taking the E-Learning course. There are
 45.9% learners who have no learning plan, and 55.73%
 learnersarelearningonlinewhiledoingotherthings,suchas
 QQchatandlisteningtomusic.AccordingtoFigure3,wecan
 concludethatE-Learningcourserequiresdefiniteobjective,
 inner motive, synchronous feedback, and independence of
 thelearners.Sincetheonlinelearnershavemuchrecognition
 of online courses, the E-Learning platform has the broader
 prospectsfordevelopment. 
 4.3. Duration Analysis of Online Learning Behavior. The
 learningbehaviorofonlinelearnersisdiversity.Toacertain
 1742,
 2017,
 1, 
 D 
 ow 
 nloaded
 from
 https://onlinelibrary.w
 iley.com
 /doi/10.1155/2017/9720396,
 W iley O nline L ibrary
 on 
 [13/05/2026].
 S 
 ee 
 the
 T 
 erm
 s and
 C onditions
 (https://onlinelibrary.w
 iley.com
 /term
 s-and-conditions)
 on 
 W iley
 O nline
 L ibrary
 for
 rules
 of 
 use;
 O 
 A articles
 are
 governed
 by 
 the
 applicable
 C reative
 C 
 om 
 m 
 ons
 L 
 icense



5

------------------------------------------------

 
 
 
 JournalofElectricalandComputerEngineering 5 
 
 
 
 
 
 
 
 
 
 
 
 60% 
 20% 
 90% 
 50% 
 40% 
 20% 
 55% 
 10% 
 50% 
 20% 
 80% 
 80% 
 20 40 60 80 100 120 0 
 (%) 
 1-5 times 
 5-10 times 
 >10times 
 b12 
 b11 
 b10 
 b9 
 b8 
 b7 
 b6 
 b5 
 b4 
 b3 
 b2 
 b1 
 Figure4:Learners'onlinelearningbehaviorstatistics. 
 extent,thefrequencyoflearningbehaviorreflectstheatten- 
 tion of learners to the learning resources. According to the 
 frequencystatistics[15],weanalyzedwhichcourseresources 
 are more likely to be accepted by the learners as shown in 
 Figure4. 
 In Figure4, behaviors 1-7 are an independent learning 
 behavior.Behaviors8-11areaninteractivelearningbehavior. 
 Behaviors 11-12 have nothing to do with learning. Most 
 learnersbrowsethetextandmakenotesfrequently;therefore 
 thetextresourceisthemostpopulartypeofresources.About 
 90% learners will first browse multimedia resources. Only 
 50% of the learners will participate in online exercises and 
 only 1-5 times. About 60% learners will choose to view 
 the learning objectives before studying the course, and the 
 numberofviewsisgenerallylessthan5times.80%learners 
 will rest; listen to music; or QQ chat 1-5 times during the 
 learningprocess.Thisshowsthatmostlearnershaveasense 
 of learning strategies. They are interested in multimedia 
 resources,buttheyaremoreusedtolearningthroughreading 
 text resources. Online interactive learning behavior is low 
 [16,17].Learninginthenetworkeasilycausesfatigueandis 
 affectedbychatandotherfactors. 
 4.4.IntelligentLearningGuide 
 4.4.1. Achievement Predicting. MOOC is a popular E- 
 Learning platform, whose importance is reflected in the 
 pass rate of the course. In view of the low pass rate on 
 MOOC [15, 18], it is supposed that a course is expected 
 to be predicting whether the learner will eventually get the 
 certificate according to the characteristics of the learner's 
 behavior.Andwealsotrytoverifythepreviousanalysisand 
 conclusions. 
 Wesupposethatthebehavioraldatawascollectedfrom 
 the registered learners on Data Structures and Algorithm 
 Analysis(DSAA)courseforthefirst5-7weeks.Afterfiltering 
 thebehaviorofunregisteredlearnersinthedatarecord,the 
 samplestatisticsareshowninTable3. 
 Table3:Numberofsamples. 
 Course 1-5weeks 1-6weeks 1-7weeks 
 DSAA 9401 9543 9990 
 Define each course having𝑖 learners and each learner
 having𝑛characteristicvalues 
 𝐶={𝐶 
 1 
 ,...,𝐶 
 𝑛 
 }∈𝑅𝑖×𝑛. (8) 
 Predictivevalueis 
 𝑃=𝑓(𝐶)∈𝑅𝑖, 𝑝∈{0,1}, (9) 
 inwhich𝐶 
 𝑛 
 denotesacourse;𝑝 = 0meansitisunlikelyto
 getacertificate,and𝑝=1meansyoumightgetacertificate;
 and𝑓(𝐶)areapredictivefunction. 
 Wehavechosenthecharacteristicvaluesofthecourses,
 and they have an impact on result about learner's study.
 FromTable2,theyarethenumberoftextlearningbehaviors
 (𝑏2),thenumberofmultimedialearningbehaviors(𝑏3),the
 number of online practice behaviors (𝑏4), the number of
 download courseware behaviors (𝑏7), and the number of
 onlinequestionsbehaviors(𝑏8). 
 According to this course, the data set is divided into
 training set, validation set, and test set randomly; the ratio
 is 3:1:1. To use the training parameters with the training
 set for each experiment, select the optimal parameters for
 the validation set, and then use the test set to calculate
 the indicators. We used three classification models: linear
 discriminant analysis (LDA), logistic regression (LR), and
 linear support vector machine (LSVM). They are used to
 predict the course, and the experimental results are shown
 inTable4. 
 The experimental results show that the three classifiers
 show consistent performance, and the accuracy is higher.
 Figure5 shows the time series changes of the predicted F-
 core by DSAA course. According to the learners' learning
 behaviors in the first half of the semester, we accurately
 predicted the final study results, whether it can obtain the
 certificate [2]. In fact, if a learner performs well in the first
 halfofthesemester,itisshownthatheisfirmandcapable.
 Heismorelikelythanotherstogetthecertificatefinally.
 4.4.2. Emotional Guide Analysis. Achievement prediction
 can help E-Learning platform to discover the abnormal
 situation, so as to timely intervention and guidance for
 students. Because online learners are mainly independent
 learners,theyareinisolationandlackemotionalcommuni-
 cation,whichmakesthemlackemotionalsupportandhave
 difficultyinmaintaininglong-termlearningenthusiasm[19].
 It is an effective way to solve the emotional deficiency by
 constructing an intelligent learning guiding mechanism in
 the student profile and providing some emotional help and
 supportservicestothelearnersduringthelearningprocess
 [20]. 
 According to the E-Learning resources and learners'
 behaviors, we can present an evaluation model supported
 by the duration, frequency of access, concentration, and
 1742,
 2017,
 1, 
 D 
 ow 
 nloaded
 from
 https://onlinelibrary.w
 iley.com
 /doi/10.1155/2017/9720396,
 W 
 iley
 O nline
 L 
 ibrary
 on 
 [13/05/2026].
 S 
 ee 
 the
 T 
 erm
 s 
 and
 C 
 onditions
 (https://onlinelibrary.w
 iley.com
 /term
 s-and-conditions)
 on 
 W 
 iley
 O nline
 L 
 ibrary
 for
 rules
 of 
 use;
 O 
 A 
 articles
 are
 governed
 by 
 the
 applicable
 C reative
 C 
 om 
 m 
 ons
 L 
 icense



6

------------------------------------------------

 
 
 
 6 JournalofElectricalandComputerEngineering
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 LDA 58.20% 50% 64.00% 
 LR 51.90% 60% 70.30% 
 LSVM 50.00% 66.70% 72.00% 
 0.00 
 10.00 
 20.00 
 30.00 
 40.00 
 50.00 
 60.00 
 70.00 
 80.00 
 ( 
 %) 
 1-5 weeks 1-6weeks 1-7weeks 
 Figure5:SequentialvariationofDSAAcourse. 
 Table4:Comparisonoftheforecastingresults. 
 Course Classifier Accuracy Precision Recall 𝐹-score 
 DSAA 
 LDA 
 LR 
 LSVM 
 99.6 
 99.5 
 99.7 
 50.0 
 65.0 
 64.3 
 88.9 
 76.5 
 81.8 
 64.0 
 70.3 
 72.0 
 E-Learning resources Learner behaviors 
 Duration 
 Frequency 
 Concentration 
 Happy 
 Confused 
 Frustrated 
 Learning interest 
 Strategy adjustment 
 Emotional guide 
 ··· 
 ··· ··· 
 b1 
 b2 
 b3 
 Figure6:Emotionalevaluationmodel. 
 otherparameterstoevaluationlearners'emotionasshownin 
 Figure6. 
 5.Conclusion 
 In this paper, we deeply study the online learning behav- 
 ior and build the student profile with big data processing 
 technology.Firstly,weanalyzethecharacteristicsoflearners 
 and the factors that influence the learning behavior and 
 use the method of attribute reduction to cleaning the data. 
 Then, we calculate the similarity of students' behavior and 
 usetheJaccardcoefficientalgorithmtoclassifythestudents. 
 Finally, the student profile has been established as well as
 visualanalysis.WeconfirmthatE-Learningcourserequires
 definiteobjective,innermotive,synchronousfeedback,and
 independence of the learners. The student profile helps the
 student to understand their learning situation, to find their
 ownproblems,andtoimprovethecompletionrateofonline
 courses. With the continuous accumulation of education
 dataandin-depthdevelopment,thestudentprofileisbound
 to promote the healthy development of E-Learning. In the
 future,wewillconductin-depthstudyonthefragmentation
 ofknowledgeaggregationonline. 
 ConflictsofInterest 
 The authors declare that there are no conflicts of interest
 regardingthepublicationofthispaper. 
 Acknowledgments 
 This work was supported by the Tianjin University of
 Science and Technology Youth Innovation Foundation (no.
 2016LG28). 
 References 
 [1] T.-H. Wang, "Developing an assessment-centered e-Learning
 systemforimprovingstudentlearningeffectiveness,"Computers
 &Education,vol.73,pp.189-203,2014. 
 [2] Z.Jiang,Y.Zhang,andX.Li,"Learningbehavioranalysisand
 predictionbasedonMOOCdata,"JournalofComputerResearch
 andDevelopment,vol.52,no.3,pp.614-628,2015.
 1742,
 2017,
 1, 
 D 
 ow 
 nloaded
 from
 https://onlinelibrary.w
 iley.com
 /doi/10.1155/2017/9720396,
 W 
 iley
 O 
 nline
 L 
 ibrary
 on 
 [13/05/2026].
 S 
 ee 
 the
 T erm
 s 
 and
 C 
 onditions
 (https://onlinelibrary.w
 iley.com
 /term
 s-and-conditions)
 on 
 W 
 iley
 O 
 nline
 L 
 ibrary
 for
 rules
 of 
 use;
 O 
 A 
 articles
 are
 governed
 by 
 the
 applicable
 C reative
 C 
 om 
 m 
 ons
 L 
 icense



7

------------------------------------------------

 
 
 
 JournalofElectricalandComputerEngineering 7 
 
 
 [3] C.Bo,M.Wang,A.I.Mørch,N.-S.Chen,Kinshuk,andJ.M. 
 Spector,"ResearchonE-Learningintheworkplace2000-2012: 
 abibliometricanalysisoftheliterature,"EducationalResearch 
 Review,vol.11,pp.56-72,2014. 
 [4] M.RaspopovicandA.Jankulovic,"Performancemeasurement 
 of e-learning using student satisfaction analysis," Information 
 SystemsFrontiers,pp.1-12,2016. 
 [5] C. G. Brinton, S. Buccapatnam, M. Chiang, and H. V. Poor, 
 "Mining MOOC Clickstreams: on the relationship between 
 learnerbehaviorandperformance:computerscience,"https:// 
 arxiv.org/abs/1503.06489. 
 [6] T.Sinha,"'Yourclickdecidesyourfate':leveragingclickstream 
 patterns from MOOC videos to infer students' information 
 processing&attritionbehavior,"https://arxiv.org/abs/1407.7143. 
 [7] Y. Liu and H. Feng, "An empirical study on the relationship 
 between metacognitive strategies and online-learning behav- 
 ior & test achievements," Journal of Language Teaching and 
 Research,vol.2,no.1,pp.990-992,2011. 
 [8] S.Dumais,R.Jeffries,D.M.Russelletal.,"Understandinguser 
 behaviorthroughlogdataandanalysis,"inWaysofKnowingin 
 HCI,pp.349-372,Springer,NewYork,NY,USA,2014. 
 [9] I. Jo, T. Yu, H. Lee, and Y. Kim, "Relations between student 
 onlinelearningbehaviorandacademicachievementinhigher 
 education:alearninganalyticsapproach,"inEmergingIssuesin 
 SmartLearning,LectureNotesinEducationalTechnology,pp. 
 275-287,Springer,Berlin,Germany,2015. 
 [10] I. H. Witten and E. Frank, Data Mining: Practical Machine 
 LearningTools&TechniqueswithJavaImplementations,vol.13, 
 no.4,MorganKaufmann,Burlington,Mass,USA,2011. 
 [11] D.Agrawal,C.Budak,A.ElAbbadi,T.Georgiou,andX.Yan, 
 "Big data in online social networks: user interaction analysis 
 to model user behavior in social networks," in Databases in 
 Networked Information Systems, vol. 8381 ofLecture Notes in 
 ComputerScience,pp.1-16,SpringerInternationalPublishing, 
 2014. 
 [12] Y.ArandE.Bostanci,"Ageneticalgorithmsolutiontothecol- 
 laborativefilteringproblem,"ExpertSystemswithApplications, 
 vol.61,pp.122-128,2016. 
 [13] J. Santisteban and J. Tejada-C´ arcamo, "Unilateral weighted 
 JaccardcoefficientforNLP,"inProceedingsofthe14thMexican 
 InternationalConferenceonArtificialIntelligence(MICAI'15), 
 pp.14-20,IEEE,Cuernavaca,Mexico,October2015. 
 [14] X.Xian,F.Chen,andJ.Wang,"Aninsightintocampusnetwork 
 user behavior analysis decision system," in Proceedings of the 
 2nd International Symposium on Computer, Consumer and 
 Control(IS3C'14),pp.537-540,Taichung,Taiwan,June2014. 
 [15] H. Khalil and M. Ebner, "'How satisfied are you with your 
 MOOC?'—a research study about interaction in huge online 
 courses,"Journalism&MassCommunicationQuarterly,vol.5, 
 no.12,pp.629-639,2016. 
 [16] D. Hempel, S. Sinnathurai, S. Haunhorst et al., "Influence of 
 case-based e-learning on students' performance in point-of- 
 careultrasoundcourses:arandomizedtrial,"EuropeanJournal 
 ofEmergencyMedicine,vol.23,no.4,pp.298-304,2016. 
 [17] D.D.Prior,J.Mazanov,D.Meacheam,G.Heaslip,andJ.Han- 
 son,"Attitude,digitalliteracyandselfefficacy:flow-oneffects 
 for online learning behavior," Internet and Higher Education, 
 vol.29,pp.91-97,2016. 
 [18] L. Geoffrey, From E-Reading to E-Learning: A Pedagogical 
 FrameworkforOnlineLearning,2016. 
 [19] Huang,ResearchonLearner'sEmotionModelingandItsAppli-
 cationinE-Learning,CentralChinaNormalUniversity,Wuhan,
 China,2014. 
 [20] S. Bhuta, A. Doshi, U. Doshi, and M. Narvekar, "A review of
 techniquesforsentimentanalysisofTwitterdata,"inProceed-
 ingsoftheInternationalConferenceonIssuesandChallengesin
 IntelligentComputingTechniques(ICICT'14),pp.583-591,IEEE,
 Ghaziabad,India,February2014. 
 1742,
 2017,
 1, 
 D 
 ow 
 nloaded
 from
 https://onlinelibrary.w
 iley.com
 /doi/10.1155/2017/9720396,
 W 
 iley
 O 
 nline
 L 
 ibrary
 on 
 [13/05/2026].
 S 
 ee 
 the
 T 
 erm
 s 
 and
 C 
 onditions
 (https://onlinelibrary.w
 iley.com
 /term
 s-and-conditions)
 on 
 W 
 iley
 O 
 nline
 L ibrary
 for
 rules
 of 
 use;
 O 
 A 
 articles
 are
 governed
 by 
 the
 applicable
 C 
 reative
 C 
 om 
 m 
 ons
 L 
 icense

