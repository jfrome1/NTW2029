

1

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 Mining students' behavior in web-based learning programs 
 
 Man Wai Lee, Sherry Y. Chen*, Kyriacos Chrysostomou, Xiaohui Liu 
 SchoolofInformationSystems,ComputingandMathematics,BrunelUniversity,UK 
 
 a r t i c l e i n f o 
 
 Keywords: 
 Cognitivestyles 
 Datamining 
 Fielddependence 
 Web-basedlearning 
 a b s t r a c t 
 Therehasbeenaproliferationofweb-basedlearningprograms(WBLPs).Unliketraditionalcomputer-
 based learning programs, WBLPs are used by a population of learners who have diverse background.
 HowdifferentlearnersaccesstheWBLPshasbeeninvestigatedbyseveralstudies,whichindicatethat
 cognitivestyleisanimportantfactorthatinfluenceslearners'preferences.However,thesestudiesmainly
 usestatisticalmethodstoanalyzelearners'preferences.Inthispaper,weproposetoanalyzelearners'
 preferenceswithadataminingtechnique.FindingsinourstudyshowthatFieldIndependentlearners
 frequentlyusebackward/forwardbuttonsandspentlesstimefornavigation.Ontheotherhand,Field
 Dependentlearnersoftenusemainmenuandhavemorerepeatedvisiting.Implicationsforthesefindings
 arediscussed. 
 (cid:2)2008ElsevierLtd.Allrightsreserved.
 1. Introduction 
 Web-basedlearningprograms(WBLPs)changetheapproachesof 
 deliveringinstructionalmaterials(Altun&Cakan,2006)andopen 
 newwaysoflearningformanypeople(Kinshuk,2003).Oneofthe 
 differencesbetweenWBLPsandtraditionalcomputer-basedlearn- 
 ingprogramsisthatWBLPsprovidenon-linearlearning,whichal- 
 lowsstudentstohavefreedomofnavigation.However,anumber 
 ofstudies,e.g.,Chen(2002)andRogersandIba(2000),pointoutthat 
 suchalearningapproachmaynotbesuitabletoalllearners.Learners 
 mayhavedifferentbackground,especiallyintermsoftheirknowl- 
 edge,skills,andneeds,sotheymayexhibitvariouslevelsofengage- 
 mentincoursecontent(Wang,2007).Thus,individualdifferences 
 becomeanessentialissueinthedevelopmentofWBLPs. 
 Such differences include gender differences (e.g., Roy & Chi, 
 2003),priorknowledge(e.g.,Calisir&Gurel,2003),andcognitive 
 styles(e.g.,Chen&Macredie,2004).Amongthem,thisstudywill 
 focusoncognitivestylesbecausetheyinfluencetheeffectiveness 
 oflearningandteaching(Miller,1987).Aspecificresearchquestion 
 isaddressed:''howstudents'cognitivestylesaffecttheirlearning 
 behaviorinaWBLP?".Unlikemostofpreviousstudies,whichused 
 traditionalstatisticalmethodstoanalyzestudents'learningbehav- 
 ior, answers tothis research questionare soughtby using a data 
 miningtechniquetoconductdataanalyses.Thisisduetothefact 
 that data mining can uncover hidden relationships, patterns, and 
 interdependencies(Gargano&Ragged,1999;Hedberg,1995). 
 The structure of the paper is structured as follows: Section 2 
 presents the background, which presents previous works related 
 tocognitivestylesanddataminingtechniques.Section3describes
 methodologyusedtoconductanempiricalstudy.Section4analy-
 sesanddiscussestheresultsfromtheempiricalstudy.Finally,con-
 clusionsandfutureworksarepresentedinSection5.
 2. Background 
 2.1. Cognitivestyles 
 Web-basedlearningprograms(WBLPs)provideahighlyflexible
 teaching and learning environment for both instructors and stu-
 dents (Pituch & Lee, 2006). Students are able to follow paths
 throughthesubjectcontentproducedbydesignersortodevelop
 their own routes (Chen & Macredie, 2004). In addition, learners
 canreadcoursecontentthroughacomputernetworkatanytime
 andfromdifferentplaces(Changetal.,1998). However, whether
 learnersappreciatesuchflexibilityisgreatlyaffectedbyindividual
 differences. 
 Individual differences include a number of psychological fac-
 tors, one of which is cognitive styles (Wang, Rees, & Liao, 2002).
 Cognitive style, which is originally proposed by Allport (1937),
 canbeusedtodescribeandexplaindifferencesinusingstrategies
 among individuals, especially for information representation and
 informationprocessing(Riding&Rayner,1998).Themostwidely
 examined cognitive style in education is Field Dependence, of
 whichadvocatorsareWitkinandAsch(1948a,b).RidingandChe-
 ema (1991) state that Field Dependence refers to the degree to
 which a learner's perception or comprehension of information is
 influenced by the surrounding perceptual or contextual field
 (Jonassen & Grabowski, 1993). In other words, it describes how
 wellanindividualisabletorestructureinformationbasedonthe
 0957-4174/$-seefrontmatter(cid:2)2008ElsevierLtd.Allrightsreserved. 
 doi:10.1016/j.eswa.2008.02.054 
 * Correspondingauthor.Tel.:+441895266023;fax:+441895251686. 
 E-mailaddress:Sherry.Chen@brunel.ac.uk(S.Y.Chen). 
 ExpertSystemswithApplications36(2009)3459-3464 
 ContentslistsavailableatScienceDirect 
 Expert Systems with Applications 
 journal homepage: www.elsevier.com/locate/eswa 



2

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 use of salient cues and field arrangement. The key issue of Field 
 Dependence lies within the differences betweenField Dependent 
 and Field Independent learners and Table 1 presents a summary 
 oftheirdifferences. 
 A number of studies investigated how Field Dependent and 
 Field Independent differently reacted to WBLPs. For instance, Lu, 
 Yu, and Liu (2003) investigated students' learning patterns and 
 learningstylesin aWebCTcourse.Seventysixgraduatestudents 
 participated in their study and the group embedded figures test 
 (GEFT) was used to classify the participants' cognitive styles as 
 FieldDependentorFieldIndependent.TheirstudyfoundthatField 
 Dependentsubjectsmademoreuseoftheteachingnotesandother 
 classresourcesthanFieldIndependentsubjects.Additionally,Graff 
 (2003)examinedtherelationshipbetweencognitivestyleandper- 
 formanceintwoversionsofthesystem-long-pageandshort-page 
 versions.Fiftystudentstookpartintheirstudy.Riding'sCognitive 
 StyleAnalysis(1991)wasappliedtodetermineanindividual'scog- 
 nitivestyle.TheirresultsindicatedthatFieldIndependentstudents 
 achieved higher scores in the long-page condition whereas Field 
 Dependentstudentsperformedbetterintheshort-pagecondition. 
 Theaforementionedstudiesandotherpreviousstudies(e.g.,Chen 
 &Macredie,2004)provideusefulfindingsbutthesestudiesmainly 
 relyonconventionalstatisticalmethodstoanalyzelearners'pref- 
 erences. For example, frequency and percentage were applied in 
 Lu et al. (2003) and MANOVA was used in Graff (2003). Making 
 assumptionsisaninevitablestepinusingsuchstatisticalmethods. 
 Thus,somerelationshipsmaynotbeabletobediscoveredifthey 
 are neglected in the process of making assumptions. To address 
 this issue, there is a need to use intelligent technologies, one of 
 whichisdatamining. 
 2.2. Datamining 
 Dataminingrefertotheprocessofemployingoneormorema- 
 chine learning techniques to automatically analyze and extract 
 knowledgefromdatacontainedwithinadatabase(Roiger&Geatz, 
 2003). It is a systematic approach for exploring underlying pat- 
 terns,trend,andrelationshipshiddeninavailabledata(Lee,Chiu, 
 Chou,&Lu,2006),anditcanbeusedtogeneraterulestopredict 
 correlations (Gargano & Ragged, 1999). One of the advantages of 
 using data mining techniques is that unexpected relationships 
 within a dataset can be discovered (Chang & Chen, 2005; Waite, 
 Wheeler,&Bromfield,2007). 
 Anumberofdataminingtechniquesareavailable,buttheymay
 be divided into two major categories: supervized learning and
 unsupervized learning. The former refers to assigning objects to
 predefined categories or classes. (Hastie, Tibshirani, & Friedman,
 2001). On the contrary, the latter is concerned with the division
 of data into groups of similar objects (Chen & Liu, 2004; Nolan,
 2002).Todeterminetheappropriatenessofusingasupervizedor
 an unsupervized learning method, there is a need to consider
 whether there are known categories (Song, Akande, Idem, &
 Mahinpey,2007).Ifcategoriesarenotknown,unsupervizedlearn-
 ingmethodoughttobeemployed.Ontheotherhand,supervized
 learning method should be adopted. In other words, supervised
 learningcanonlybeusedifthecategoriesareknown.Thisstudy
 aims to investigate the relationships between cognitive styles
 andstudents'learningbehaviorsothereisaknowncategory,i.e.
 cognitivestyles.Therefore,asupervizedlearningmethodmaybe
 anappropriateapproachforthisstudy. 
 Classificationisawidelyusedsupervizedlearningtechniquefor
 extracting meaningful information from a dataset (Baglioni, Fur-
 letti,&Turini,2005;Roiger&Geatz,2003).Oneofpopularclassi-
 ficationtoolsisdecisiontree,whichisusedtodiscoverrulesand
 relationships by systematically dividing instances found within
 thedataset(Quinlan,1993;Wang,Chuang,Hsu,&Keh,2004).Typ-
 ically,adecisiontreebeginswiththeentiresetofdata,splitsthe
 data into two or more subsets based on the values of features,
 and then repeatedly splits each subset into smaller subsets until
 thesizeofeachsubsetreachesapredefinedlevel.Theentiremod-
 elingprocesscanberepresentedinahierarchicaltreestructure(Li,
 2005). The hierarchical structure can help readers easily under-
 standtherelationshipshiddeninthedataset.
 Dueto suchanusefulproperty,severalresearchershave used
 decision trees for classification. In particular, decision trees have
 beenusedforclassifyingusers'preferences.Zhu,Greiner,andHau-
 bl (2003), for instance, used decision trees to construct a recom-
 mendation system that helps users find relevant information on
 the Web. In a similar manner, Liu and Kešelj (2007) proposed a
 method that uses decision trees to automatically classify users'
 Web navigation patterns to predict which Web pages are more
 likely to be accessed next by them. The abovementioned studies
 indicate that decision trees provide additional benefits for data
 analysis. We, therefore, attempt to employ such a technique for
 analyzing the results of an empirical study that investigates the
 relationshipsbetweenstudents'cognitivestylesandtheirlearning
 behavior. 
 3. Methodologydesign 
 3.1. Participants 
 ThisstudywasconductedatanUKuniversity.Atotalof65stu-
 dentsparticipatedinthisstudy.Allparticipantshadthebasiccom-
 puting and Internet skills necessary to operate a WBLP. At the
 outset, they were inexperienced in the content domain of the
 WBLP. Despite the fact that the participants volunteered to take
 partinthestudy,theywerefoundtobeevenlydistributedinterms
 of cognitive styles. In addition, the participants were an almost
 equal mix of male and female within each cognitive style group.
 Fig.1,illustratesthedistributionofthesampleofthisstudy.
 3.2. Researchinstruments 
 Researchinstrumentisamechanismtohelpensurethatsame
 information can be obtained from different participants. The re-
 searchinstrumentsusedinthisstudyincludedaweb-basedlearn-
 ingprogramandriding'scognitivestyleanalysis(CSA).
 Table1 
 Differencesbetweenfielddependentandfieldindependentlearners 
 Fielddependentlearners Fieldindependentlearners 
 Theyfinditdifficulttorestructure 
 newinformationandforge 
 linkswithpriorknowledge 
 Theyareabletoreorganize 
 informationtoprovidea 
 contextforpriorknowledge 
 Theirpersonalitiesshowagreater 
 socialorientation 
 Theyareinfluencedlessbysocial 
 reinforcement 
 Theyexperiencesurroundingsina 
 relativelyglobalfashion,passively 
 conformingtotheinfluenceofthe 
 prevailingfieldorcontext 
 Theyexperiencesurroundings 
 analytically,withobjects 
 experiencedasbeingdiscrete 
 fromtheirbackgrounds 
 Theydemonstratefewerproportional 
 reasoningskills 
 Theydemonstrategreater 
 proportionalreasoningskills 
 Theypreferworkingingroups Theypreferworkingalone 
 Theystrugglewithindividualelements Theyaregoodwithproblemsthat 
 requiretakingelementsoutoftheir 
 wholecontext 
 Theyareexternallydirected Theyareinternallydirected 
 Theyareinfluencedbysalientfeatures Theyareindividualistic 
 Theyacceptideasaspresented Theyacceptideasstrengthened 
 throughanalysis 
 AdaptedfromWitkinetal.(1977),JonassenandGrabowski(1993),andMorgan 
 (1997). 
 3460 M.W.Leeetal./ExpertSystemswithApplications36(2009)3459-3464



3

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 3.2.1. Web-basedlearningprogram 
 Aweb-basedlearningprogram(WBLP)presentsanintroduction 
 toHyperTextMarkupLanguage(HTML).TheinterfaceoftheWBLP 
 wasdividedintothreesections,includingatitlebar,acontrolpa- 
 nel, and a main body. The title bar was located at the top of the 
 screen, showing the section name being viewed. The navigation 
 panelwaslocatedattheleftofthescreen.Itcontainedseveralnav- 
 igationbuttons,includingmainmenu,hierarchicalmapandalpha- 
 beticalindex,withwhichstudentscanfreelynavigateintheWBLP. 
 Themainbodywaslocatedattherightofthescreen,providingthe 
 subject contents and all relevant learning materials. The subject 
 content is divided into three sections: (1) What is HTML? (2) 
 Working with HTML, and (3) relations with SGML and WWW. 
 The key element of the WBLP is located in the second section, 
 where 12 sub-topics are included. Each sub-topic is further split 
 intofiveparts:(1)overview,(2)detailedtechniques,(3)examples, 
 (4) related skills, and (5) references. By doing so, students' pre- 
 ferred content presentation could be undertaken by examining 
 theirlearningpaths. 
 3.2.2. Cognitivestyleanalysis 
 ThecognitivestyleinvestigatedinthisstudywasFieldDepen- 
 dence.Groupembeddedfigurestest(GEFT)byWitkin,Oltman,Ra- 
 skin, and Karp (1971) and the cognitive styles analysis (CSA) by 
 Riding(1991)twowidelyusedinstrumentsforthemeasurement 
 of Field Dependence. Riding's CSA was selected in this study be- 
 cause Field Dependence can be positively measured, instead of 
 inferringfromthepoorFieldIndependentcapability(Ford&Chen, 
 2001).Riding'sCSAincludestwosub-tests,eachofwhichhasdiffer- 
 ent purposes. The first sub-test aims at identifying participants' 
 Field Dependent capabilities by requesting participants to deter- 
 minewhetherpairsofcomplexgeometricalfiguresareeitherthe 
 sameordifferent.Thesecondsub-testaimsatinvestigatingthedis- 
 embeddingcapacityassociatedwithFieldIndependencebyasking 
 participantstoidentifywhetherasimplegeometricalshape,such 
 asasquareoratriangle,isincludedinacomplexgeometricalfigure. 
 TheCSAmeasureswhatRidingandSadler-Smith(1992)referto 
 asawholist/analytic(W/A)dimension,notingthatthisisequiva- 
 lenttoFieldDependence/Independence.AsWitkinetal.(1971)ar- 
 gued,aFieldIndependentindividualiscapableofamoreanalytical 
 cognitivefunctionthanaFieldDependentindividual,whousesa 
 more global approach. Riding (1991) recommendations are that 
 scores below 1.03 denote Field Dependent individuals; scores of 
 1.36 and above denote Field Independent individuals; students 
 scoringbetween1.03and1.35areclassedasIntermediate.Inthis 
 study,categorizationswerebasedontheserecommendations. 
 3.3. Procedure 
 The study consisted of three steps. Firstly, the participants 
 were asked to take Riding's CSA test to classify their cognitive 
 styles. All participants were then given an introduction about
 howtousethisWBLP.Subsequently,theywereaskedtointeract
 with the WBLP program for 90min and their interaction was re-
 corded in a log file. 
 3.4. Dataanalyses 
 AsdescribedinBackgroundsection,decisiontreeswereusedto
 analyze students' learning behavior. Popular decision tree algo-
 rithmsincludesclassification&regressiontrees(C&RT)(Breiman,
 Friedman,Olshen,&Stone,1984),chi-squaredautomaticinterac-
 tiondetection(CHAID)(Kass, 1980), and C4.5 (Quinlan,1993). In
 thisstudy,weusedtheC4.5becauseitisawell-knownclassifica-
 tionalgorithmandcangenerateeasilyunderstandablerules(Ding,
 Ding,&Perrizo,2002).Themaingoalofthealgorithmistodiscover
 relationshipsbetweenagivenclassificationofobjectsandasetof
 attributes.Theoutputofthealgorithmisaclassificationtreeshow-
 inghowobjectsmaybeassignedtothegivenclassesonthebasis
 ofvaluesoftheseattributes(Andrienko&Andrienko,1999).Tree
 productionhasthreephasesinthisalgorithm.InPhaseI,aninitial
 and large tree is created from the sets of examples according to
 attribute selection measures. In Phase II, an error-based pruning
 method is used to simplify the tree by discarding one or more
 sub-trees and replacing them with leaves or branches (Quinlan,
 1993). In Phase III, the classification performance of the decision
 treeistestedbyanalyzingthenumberofcorrectlyandincorrectly
 classified instances. The number of correct classified instances
 determineswhetherthedecisiontreecanbeappliedtothedata-
 sets,orwhetherfurtherpreparationwillbenecessary.
 To further verify the relevance of attributes identified by the
 decision tree, a series of ANalysis Of VAriance (ANOVA) was
 adoptedtodeterminethesignificanceofeachattribute.Asignifi-
 cancelevelofp<0.05wasadoptedforthestudy.
 4. Resultsanddiscussion 
 Adecisiontreewascreatedtoillustratethelearningbehaviorof
 eachcognitivestylegroup(seeFig.2).Asshowninthisfigure,the
 frequency of using the backward/forward button is the most
 importantfeatureforclassifyingthecognitivestylesandthesec-
 ond most important features are the frequencies of using over-
 views and those of having repeated visiting. In other words,
 thesethreeattributeshavecloserelationshipswithcognitivestyles
 andtheyshouldbeconsideredforthedevelopmentofWBLPsthat
 meettheneedsofeachcognitivestyle. 
 Inadditiontoillustratingthestudents'learningbehaviorwitha
 tree structure, the decision tree can also be converted to create
 rulesforthepredictionsofthestudents'cognitivestyles,i.e.,iden-
 tifyingthecognitivestylesofnewstudentsbasedontheirlearning
 behavior. Table 2 lists 10 rules drawn from the decision tree. As
 showed in this table, different rules lead to different cognitive
 styles.Acognitivestyle couldbereached bymore thanonerule.
 In this case, threerules are connected with Field Dependent stu-
 dents, four rules are associated with Intermediate students, and
 threerulesarerelatedtoFieldIndependentstudents.Theserules
 can be applied to replace the CSA or other cognitive style tests
 and work as criteria for automatic identification of the students'
 cognitivestyles.Inotherwords,thestudents'cognitivestylescan
 beautomaticallyrecognizedbasedontheirlearningbehaviorand
 suchautomaticmechanismareusefulfordevelopingpersonalized
 WBLPsthatcanaccommodatestudents'cognitivestyles.
 AsshowninFig.2andTable2,therelevantattributesforiden-
 tifyingstudents'cognitivestylesincludetheuseofbackward/for-
 ward button, overview, example, reference, and main menu, the
 repeated visiting and time spent for navigation. The ANOVA was
 0 
 5 
 10 
 15 
 20 
 25 
 30 
 Field Independent Intermediate Field Dependent 
 Female 
 Male 
 Fig.1. Distributionsofparticipants. 
 M.W.Leeetal./ExpertSystemswithApplications36(2009)3459-3464 3461



4

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 usedtoexaminethesignificanceoftheseattributesandtheresults 
 indicatethatcognitivestyleshavesignificanteffectsontheseattri- 
 butes,apartfromtheuseofreferences(Table3).Table4presents
 themeanandstandarddeviationofthefrequencyofeachattribute
 foreachcognitivestylegroup. 
 Asindicatedbytheaforementionedresults,learnerswithdiffer-
 ent cognitive styles demonstrate different learning behavior in
 using the WBLP. Their differences can be considered as a mirror
 of the characteristics of different cognitive styles. For example,
 FieldIndependentstudentsmadelessuseofoverview.Itisproba-
 bly because Field Independent learners tend to take a serialist
 learning approach that concentrated primarily on procedural de-
 tails when processing information in a learning context (Pask,
 1976, 1979). Therefore, a global picture provided by overview is
 lessinterestingtothem.Furthermore,theyspentlesstimefornav-
 igation.ApossibleinterpretationofthisfindingisthatFieldInde-
 pendentstudentstendtobemoreanalytical(Ford,Wood,&Walsh
 1994) and they are very task oriented (Witkin, Moore, Gooden-
 ough, & Cox, 1977). Hence, they only pay attention to particular
 topicsrelatedtotheirlearning,whichthey,inturn,needlesstime
 fornavigation.Inaddition,theyfavoredtousebackward/forward
 buttons.ItsuggeststhatFieldIndependentstudentsfeelcomfort-
 able to jump freely within a learning environment with back-
 ward/forward buttons. In other words, they prefer non-linear
 navigation.SuchafindingisinlinewiththoseofLee,Cheng,Rai,
 and Depickere (2005) which indicate that Field Independent stu-
 dentshaveapreferencefornon-linearlearning.
 Table2 
 Decisionrulesfordifferentcognitivestyles 
 Cognitivestyles Decisionrules 
 Fieldindependent 
 (ruleA) 
 Learnerswhohaveaccessedbackward/forwardbuttonmore 
 thanonce,haverepeatedvisiting40timesorless 
 than40times,selectoverviewsixtimesorlessthansix 
 times,andspentnavigationtimefor91minorlessthan 
 91min 
 Fieldindependent 
 (ruleB) 
 Learnerswhohaveaccessedbackward/forwardbuttonmore 
 thanonce,haverepeatedvisiting40timesorless 
 than40times,selectoverviewmorethansixtimes,andhave 
 repeatedvisiting22timesorlessthan22times 
 Fieldindependent 
 (ruleC) 
 Learnerswhohaveaccessedbackward/forwardbuttonmore 
 thanonce,haverepeatedvisitingmorethan40times, 
 selectreferencesmorethantwice,andusemainmenumore 
 thaneighttimes 
 Intermediate 
 (ruleD) 
 Learnerswhohaveaccessedbackward/forwardbuttononce 
 orlessthanonce,overviewmorethansixtimes,and 
 exampleeighttimesorlessthaneighttimes 
 Intermediate 
 (ruleE) 
 Learnerswhohaveaccessedbackward/forwardbuttonmore 
 thanonce,haverepeatedvisiting40timesorless 
 than40times,selectoverviewsixtimesorlessthansix 
 times,andspentnavigationtimeformorethan91min 
 Intermediate 
 (ruleF) 
 Learnerswhohaveaccessedbackward/forwardbuttonmore 
 thanonce,haverepeatedvisiting40timesorless 
 than40times,selectoverviewmorethansixtimes,andhave 
 repeatedvisitingmorethan22times 
 Intermediate 
 (ruleG) 
 Learnerswhohaveaccessedbackward/forwardbuttonmore 
 thanonce,haverepeatedvisitingmorethan 
 40times,selectreferencesmorethantwice,andusemain 
 menueighttimeorlessthaneighttimes 
 Fielddependent 
 (ruleH) 
 Learnerswhohaveaccessedbackward/forwardbuttononce 
 orlessthanonce,overviewsixtimesorlessthansixtimes 
 Fielddependent 
 (ruleI) 
 Learnerswhohaveaccessedbackward/forwardbuttononce 
 orlessthanonce,overviewmorethansixtimes, 
 andexamplemorethaneighttimes 
 Fielddependent 
 (ruleJ) 
 Learnerswhohaveaccessedbackward/forwardbuttonmore 
 thanonce,haverepeatedvisitingmorethan 
 40times,andselectreferencestwiceorlessthantwice 
 Table3 
 SignificanceofcognitivestylesbasedonANOVA(df=2,62)
 Attributes Significance 
 Backward/forward F=8.857;p<.01
 Overview F=8.496;p<.01
 Repeatedvisiting F=5.065;p<.01
 Example F=4.892;p<.05
 References F=.606;p>.05
 Mainmenu F=3.876;p<.05
 Navigationtime F=7.601;p<.01
 Backward/ 
 Forward 
 Button 
 Repeated 
 Visiting 
 <=1.0 >1.0 
 <=6.0 
 Overview 
 Examples 
 Field 
 Dependent 
 >6.0 
 Overview References 
 >40.0 <=40.0 
 Main Menu 
 > 2.0 
 < 
 = 2. 0 
 Field 
 Dependent 
 > 8.0 
 Field 
 Independent 
 <= 8.0 
 Intermediate 
 Field 
 Dependent 
 Field 
 Independent 
 <= 8.0 > 8.0 
 Intermediate 
 Navigation 
 Time 
 Repeated 
 Visiting 
 <=6.0 >6.0 
 Intermediate 
 <=91.0 > 91.0 
 Field 
 Independent 
 Intermediate 
 <=22.0 >22.0 
 Rule H 
 Rule D Rule I Rule J 
 Rule A Rule E Rule B Rule F Rule G Rule C 
 Fig.2. DecisiontreemodelforCSAvs.navigationtools. 
 3462 M.W.Leeetal./ExpertSystemswithApplications36(2009)3459-3464



5

------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 In contrast, Field Dependent students often look at examples. 
 Examplesaredown-to-earthvisualmaterialtoprovideillustrations 
 withpracticalcases.Therefore,theyarebeneficialtoFieldDepen- 
 dent individuals, who rely more on external frames of reference 
 andoperatebestwhereanalysesarealreadyprovided(Lyons-Law- 
 rence, 1994). Moreover, Field Dependent students frequently use 
 themainmenu,whichreflectstheconceptualstructureofthesub- 
 jectcontent.ThismightbecausedbythefactthatFieldDependent 
 studentstendtotakeapassiveapproachbyrelyingonsalientcues 
 (Anastasi,1988)andhavemoredifficultiesinseparatingtheindivid- 
 ualpartswithinawhole(Witkinetal.,1977).Withtheextraguid- 
 ance provided by the main menu, Field Dependent students can 
 more easily access meaningful information. Additionally, Field 
 Dependentstudentshavemorerepeatedvisiting,whichmightsug- 
 gestthattheyarenotverysurewheretheyshouldgoandfeellostin 
 hyperspace.ThismaybeduetothefactthatFieldDependentpeople 
 preferlinearpresentationoflearningmaterialandhavedifficulties 
 in non-linear learning. These findings echoed previous research 
 (Witkinetal.,1977);suggestingthatFieldDependentstudentshave 
 more difficulties dealing with confusion, complexity, and dimen- 
 sionswhichareoftenpresentinWBLPs. 
 Ontheotherhand,diversedecisionrules,includingrulesD,E,F, 
 andG,canbeusedtoidentifyIntermediatestudents.Itmaysug- 
 gest that they are equally comfortable using each learning path. 
 OnepossibleinterpretationisthatindividualspossessinganInter- 
 mediate cognitive style combine the characteristics of both Field 
 IndependenceandFieldDependenceandemployamoreversatile 
 strategyfor their learning.Versatile students,who haveacquired 
 theskilltomovebackandforthbetweendifferentlearningstrate- 
 gies,aremorecapableofadaptingthemselvestosuitthelearning 
 programs(Ford,2000).Thus,Intermediatestudentscanberecog- 
 nizedbyusingavarietyofdecisionrules. 
 5. ImplicationsforWBLPsdevelopment 
 Astheresultsshowedintheprevioussection,cognitivestyles 
 havesignificanteffectsonlearners'behaviorinWBLPs.Inparticu- 
 lar,theyinfluencetheuseofbackward/forwardbuttons,theuseof 
 overview,andthefrequenciesofhavingrepeatedvisiting.Thedif- 
 ferencesintheirlearningbehaviorhaveimplicationsforthedevel- 
 opmentofpersonalizedWBLPs. 
 Personalization can be delivered by providing adaptivity or 
 adaptability.Withrespecttotheformer,learners'cognitivestyles 
 can be identified by either monitoring his/her learning patterns 
 withdataminingtechniquesorbyobtainingthisinformationfrom 
 anexternalsurvey.Accordingtotheircognitivestyles,thedesign 
 ofWBLPscouldbeautomaticallytailoredtomatchthepreferences 
 ofeachindividual.Withrespecttothelatter,usersareallowedto 
 modify navigation tools and content presentation by themselves. 
 For example, a checkbox-based form can be applied to identify 
 learners'preferences.Eachlearnerwillexpresshis/herpreferences 
 byenteringacheckmarkinasuitablecheckbox.Thedesignofthe 
 WBLPswillbechangedbasedonhis/herchoicesinthecheckbox- 
 basedform. 
 6. Conclusionsandfutureworks 
 Twomainconclusionscanbedrawnfromthisstudy.Thefirstis
 that cognitive style is an important factor that determines stu-
 dents'learningbehavior.Thisconclusionstrengthenedthefindings
 frompreviousstudies,suchasFordandChen(2001)andChenand
 Macredie(2004).However,itwasonlyonerelativelysmallstudy.
 Furtherworkneedstobeundertakenwithalargersampletopro-
 videadditionalevidence. 
 Thesecondisthatdatamining,morespecificallydecisiontrees,
 isausefultoolforclassifyingstudents'cognitivestyles.Theadvan-
 tageofusingdataminingratherthanstatisticalmethodsisthatit
 is not necessary to make any assumptions. However, this study
 onlyuseddecisiontrees.Furtherworkcananalysestudents'learn-
 ingpatternsusingotherclassificationmethods,suchask-nearest
 neighbor or support vector machines. It would be interesting to
 seewhethersimilarresultswouldbefoundbyusingtheseclassifi-
 cationmethods. 
 References 
 Allport,G.W.(1937).Personality:Apsychologicalinterpretation.NewYork:Holt&
 Co. 
 Altun,A.,&Cakan,M.(2006).Undergraduatestudents'academicachievement,field
 dependent/independent cognitive styles and attitude toward computers.
 EducationalTechnology&Society,9(1),289-297.
 Anastasi,A.(1988).Psychologicaltesting.NewYork:Macmillan.
 Andrienko,G.L.,Andrienko,N.V.(1999).DataMiningwithC4.5andinteractive
 cartographic visualization. In Proceedings of user interfaces to data intensive
 systems(pp.162-165). 
 Baglioni, M., Furletti, B., Turini, F. (2005). Means of prior knowledge. In ACM
 symposiumonappliedcomputing(pp.474-481).
 Breiman,L.,Friedman,J.H.,Olshen,R.A.,&Stone,C.J.(1984).Classificationand
 regressiontrees.California,Inc.:Wadsworth.
 Calisir,F.,&Gurel,Z.(2003).Influenceoftextstructureandpriorknowledgeofthe
 learneronreadingcomprehension,browsingandperceivedcontrol.Computers
 inHumanBehavior,19,135-145. 
 Chang,L.Y.,&Chen,W.C.(2005).Dataminingoftree-basedmodelstoanalyze
 freewayaccidentfrequency.JournalofSafetyResearch,36,365-375.
 Chang,H.H.,Henriquez,A.,Honey,M.,Light,D.,Moeller,B.,&Ross,N.(1998).The
 Union City story: Education reform and technology students' performance on
 standardizedtestsNewYork.CenterforChildrenandTechnology.
 Chen, S. Y. (2002). A cognitive model for non-linear learning in hypermedia
 programmes.BritishJournalofEducationalTechnology,33(4),453-464.
 Chen,S.Y.,&Liu,X.(2004).Thecontributionofdataminingtoinformationscience.
 JournalofInformationScience,30(6),550-558.
 Chen,S.Y.,&Macredie,R.D.(2004).Cognitivemodelingofstudentlearninginweb-
 based instructional programs. International Journal of Human-Computer
 Interaction,17(3),375-402. 
 Ding,Q.,Ding,Q.,Perrizo,W.(2002). Decisiontreeclassificationofspatialdata
 streamsusingPTrees.InACMSAC(pp.426-431).Madrid.
 Ford,N.(2000).Cognitivestylesandvirtualenvironments.JournaloftheAmerican
 SocietyforInformationScience,51(6),543-557.
 Ford,N.,&Chen,S.Y.(2001).Matching/mismatchingrevisited:Anempiricalstudy
 oflearningandteachingstyles.BritishJournalofEducationalTechnology,32(1),
 5-22. 
 Ford,N.,Wood,F.,Walsh,C.(1994).CognitivestylesandonlinesearchingOnlineand
 CD_ROMReview18(2),79-86. 
 Gargano, M. L., & Ragged, B. G. (1999). Data mining - A powerful information
 creatingtool.OCLCSystemsServices,15(2),81-90.
 Graff, M. (2003). Learning from web-based instructional systems and cognitive
 style.BritishJournalofEducationalTechnology,34,407-418.
 Hastie,T.,Tibshirani,R.,&Friedman,J.(2001).Theelementsofstatisticallearning:
 Datamining,inference,andprediction.NewYork:Springer.
 Table4 
 Meanfrequency(standarddeviation)ofattributesineachcognitivestyle 
 Cognitivestyles Backward/forward Overview Repeatedvisiting Example Reference Mainmenu Navigationtime
 Fieldindependent 4.88 5.12 26.76 4.92 1.72 3.28 79.92 
 (0.9) (0.6) (3.4) (0.7) (0.1) (0.3) (3.6) 
 Intermediate 3.00 7.26 32.05 7.16 2.05 4.21 89.21 
 (0.7) (0.5) (3.1) (0.4) (0.9) (0.3) (0.5) 
 Fielddependent 2.76 5.71 39.14 8.62 1.81 5.81 90.71 
 (0.9) (0.2) (0.8) (0.4) (0.9) (0.8) (5.7) 
 All 3.65 5.94 32.31 6.77 1.85 4.37 86.12 
 (0.2) (0.9) (0.9) (0.2) (0.1) (0.2) (1.2) 
 M.W.Leeetal./ExpertSystemswithApplications36(2009)3459-3464 3463



6

------------------------------------------------

 
 
 
 
 
 Hedberg,S.R.(1995).Thedatagoldrush.Byte,20(10),83-88. 
 Jonassen,D.H.,&Grabowski,B.(1993).Individualdifferencesandinstruction.Allen& 
 Bacon:NewYork. 
 Kass,G.V.(1980).Anexploratorytechniqueforinvestigatinglargequantitiesof 
 categoricaldata.AppliedStatistics,29,119-127. 
 Kinshuk (2003). Online education at Massey University. Educational Technology,
 43(3),59-64. 
 Lee,C.,Cheng,Y.W.,Rai,S.,&Depickere,A.(2005).Whataffectstudentcognitive 
 style in the development of hypermedia learning system? Computers and 
 Education,44(1),1-19. 
 Lee,T.S.,Chiu,C.C.,Chou,Y.C.,&Lu,C.J.(2006).Miningthecustomercreditusing 
 classificationandregressiontreeandmultivariateadaptiveregressionsplines. 
 ComputationalStatisticsandDataAnalysis,50,1113-1130. 
 Li, X. (2005). A scalable decision tree system and its application in pattern
 recognitionandintrusiondetection.DecisionSupportSystems,41(1),112-130. 
 Liu,H.,&Kešelj,V.(2007).Combinedminingofwebserverlogsandwebcontents 
 forclassifyingusernavigationpatternsandpredictingusers'futurerequests. 
 DataandKnowledgeEngineering,61(2),304-330. 
 Lu, J., Yu, C., & Liu, C. (2003). Learning style, learning patterns, and learning
 performanceinaWebCT-basedMIScourse.InformationandManagement,40, 
 497-507. 
 Lyons-Lawrence,C.L.(1994).Effectsoflearningstylesonperformanceinusing 
 computer-basedinstructioninofficesystems.TheDeltaPiEpsilonJournal,36(3), 
 166-175. 
 Miller, A. (1987). Cognitive styles: An integrated model. Educational Psychology,
 7(4),251-268. 
 Morgan,H.(1997).Cognitivestylesandclassroomlearning.Westrport,CT:Pragerger 
 Publisher. 
 Nolan,J.R.(2002).Computersystemsthatlearn:Anempiricalstudyoftheeffectof 
 noiseontheperformanceofthreeclassificationmethods.ExpertSystemswith 
 Applications,23(1),3-14. 
 Pask, G. (1976). Styles and strategies of learning. British Journal of Educational
 Psychology,46,128-148. 
 Pask, G. (1979). Final report of S.S.R.C. research programme HR 2708 Richmond,
 England:SystemResearch. 
 Pituch, K. A., & Lee, Y. K. (2006). The influence of system characteristics on E-
 learninguse.ComputersandEducation,47,222-244. 
 Quinlan,J.R.(1993).C4.5Programsformachinelearning.SanFrancisco:Morgan 
 Kauffman. 
 Riding,R.,&Cheema,I.(1991).Cognitivestyles-Anoverviewandintegration. 
 EducationalPsychology,11(3-4),193-215. 
 Riding,R.,&Rayner,S.G.(1998).Cognitivestylesandlearningstrategies.London:
 DavidFultonPublisher. 
 Riding, R. J. (1991). Cognitive styles analysis learning and training technology,
 Birmingham. 
 Riding,R.J.,&Sadler-Smith,E.(1992).Typeofinstructionalmaterial,cognitivestyle
 andlearningperformance.EducationalStudies,18,323-340.
 Rogers,S.,&Iba,W.(2000).AdaptiveuserinterfacesAAAIsymposium(technicalreport
 55-00-01).MenloPark:AAAIPress. 
 Roiger,R.J.,&Geatz,M.W.(2003).Datamining:Atutorial-basedprimer.Montreal:
 Addison-Wesley. 
 Roy,M.,&Chi,M.T.H.(2003).Genderdifferencesinpatternsofsearchingtheweb.
 JournalofEducationalComputingResearch,29(3),335-348.
 Song, S., Akande, A. J., Idem, R. O., & Mahinpey, N. (2007). Inter-relationship
 betweenpreparationmethods,nickelloading,characteristicsandperformance
 inthereformingofcrudeethanoloverNi/Al2O3catalysts:Aneuralnetwork
 approach.EngineeringApplicationsofArtificialIntelligence,20,261-271.
 Waite,S.J.,Wheeler,S.,&Bromfield,C.(2007).Ourflexiblefriend:Theimplications
 ofindividualdifferencesforinformationtechnologyteaching.Computersand
 Education,48,80-99. 
 Wang,M.(2007).Designingonlinecoursesthateffectivelyengagelearnersfrom
 diverseculturalbackgroundsBritish.JournalofEducationalTechnology,38(2),
 294-311. 
 Wang,M.,Rees,S.J.,&Liao,S.Y.(2002).Buildinganonlinepurchasingbehavior
 analytical system with neural network. In A. Zanasi, C. A. Brebbia, N. F. F.
 Ebecken,&P.Melli(Eds.).DataMiningIII.WITPress.
 Wang, Y., Chuang, Y., Hsu, M., & Keh, H. (2004). A personalized recommender
 system for the cosmetic business. Expert Systems with Applications, 26(3),
 427-434. 
 Witkin,H.A.,&Asch,S.E.(1948a).StudiesinspaceorientationIII:Perceptionofthe
 uprightintheabsenceofavisualfield.JournalofExperimentalPsychology,38,
 603-614. 
 Witkin, H. A., & Asch, S. E. (1948b). Studies in space orientation IV. Further
 experimentsonperceptionoftheuprightwithdisplayedvisualfield.Journalof
 ExperimentalPsychology,38,762-782. 
 Witkin,H.A.,Moore,C.A.,Goodenough,D.R.,&Cox,P.W.(1977).Fielddependent
 and field independent cognitive styles and their educational implications.
 ReviewofEducationalResearch,47,1-64. 
 Witkin,H.A.,Oltman,P.K.,Raskin,E.,&Karp,S.A.(1971).AManualforthegroup
 embeddedfigurestest.PaloAlto,CA:ConsultingPsychologistsPress.
 Zhu,T.,Greiner,R.,&Haubl,G.(2003).Learningamodelofawebuser'sinterests.
 LectureNotesinArtificialIntelligence,2702,11-21.
 3464 M.W.Leeetal./ExpertSystemswithApplications36(2009)3459-3464

