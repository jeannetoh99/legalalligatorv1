export const CaseActions = [
    {
        id: 1,
        case_name: 'Assault',
        keywords: ['fight','attack','assault'],
        actions: [
            {
                id: 1,
                action_name: 'File a police report',
                action_summary: {
                    details: 'The police may be able to assist by investigating the perpetrator’s actions, and may intervene where necessary.\n\nThe Protection from Harassment Act makes it an offence for a wide array of anti-social behaviours, and the public prosecutor may review the case.',
                    cost_estimate: 'Free',
                    duration_estimate: '15 minutes via SingPass',
                    possible_outcomes: [4, 5, 10],
                },
                checkpoint_id: 2,
            }, {
                id: 2,
                action_name: 'File a magistrate’s complaint',
                action_summary: {
                    details: 
                        'Magistrate’s Complaints are complaints filed to the State Courts by individuals who are seeking remedy for an offence they believe have been committed against them by other persons.' +
                        '\n\nMagistrate’s Complaints are suitable for non-arrestable offences that might have been committed but the offence was not taken up by the police for further investigation or prosecution. Filing a Magistrate’s complaint may lead to the police taking further action on the matter, or the commencing of private prosecutions, such that the offender may be sentenced and ordered to pay compensation to you.',
                    cost_estimate: 'S$20-100',
                    duration_estimate: '1 day - 5 months',
                    possible_outcomes: [6, 7, 8, 3],
                },
                checkpoint_id: 3,
            }, {
                id: 3,
                action_name: 'Mediation',
                action_summary: {
                    details: 'If you have a dispute with your family, friends or neighbours and a crime was not committed, you may consider contacting Community Mediation Centre (CMC) to commence a mediation session.' +
                    '\n\n Once both parties agree to mediation, a session can be arranged.' +
                    '\n\n Mediation at the CMC is an informal and voluntary process that is conducted in a private setting and done in the presence of one or two professionally trained volunteer mediators.',
                    cost_estimate: '$5 Administrative Fee',
                    duration_estimate: '2 weeks (depending on earliest opening available)',
                    possible_outcomes: [11],
                },
                checkpoint_id: 5,
            }, {
                id: 4,
                action_name: 'Civil Claim',
                action_summary: {
                    details: 'Under Section 11 of the Protection from Harassment Act, a victim may sue the perpetrator for monetary compensation for offences under Sections 3, 4, 5 and 7 of the Act.\n\nA civil claim entails the usual court procedures, including summons, submissions of affidavits, discovery and trial.',
                    cost_estimate: 'Varies',
                    duration_estimate: '3 months+',
                    possible_outcomes: [9, 3],
                },
                checkpoint_id: 4,
            }
        ],
    }, {
        id: 2,
        case_name: 'Harassment',
        keywords: ['harass'],
        actions: [
            {
                id: 1,
                action_name: 'File for Protection Order',
                action_summary: {
                    details: 'Under the Protection from Harassment Act, a victim of harassment may apply to the court for a protection order against the perpetrator. The specifics of the protection order will vary based on the particulars of the case. \n\nExpedited Protection Orders are granted on an urgent basis. If not, the application for a protection order will follow a process similar to a trial, involving a court hearing.',
                    cost_estimate: 'S$ 150-250',
                    duration_estimate: 'EPO: 1-2 weeks\nPO: 4-8 weeks',
                    possible_outcomes: [1, 2, 3],
                },
                checkpoint_id: 1,
            }, {
                id: 2,
                action_name: 'File a police report',
                action_summary: {
                    details: 'The police may be able to assist by investigating the perpetrator’s actions, and may intervene where necessary.\n\nThe Protection from Harassment Act makes it an offence for a wide array of anti-social behaviours, and the public prosecutor may review the case.',
                    cost_estimate: 'Free',
                    duration_estimate: '15 minutes via SingPass',
                    possible_outcomes: [4, 5, 10],
                },
                checkpoint_id: 2,
            }, {
                id: 3,
                action_name: 'File a magistrate’s complaint',
                action_summary: {
                    details: 
                        'Magistrate’s Complaints are complaints filed to the State Courts by individuals who are seeking remedy for an offence they believe have been committed against them by other persons.' +
                        '\n\nMagistrate’s Complaints are suitable for non-arrestable offences that might have been committed but the offence was not taken up by the police for further investigation or prosecution. Filing a Magistrate’s complaint may lead to the police taking further action on the matter, or the commencing of private prosecutions, such that the offender may be sentenced and ordered to pay compensation to you.',
                    cost_estimate: 'S$20-100',
                    duration_estimate: '1 day - 5 months',
                    possible_outcomes: [6, 7, 8, 3],
                },
                checkpoint_id: 3,
            }, {
                id: 4,
                action_name: 'Civil Claim',
                action_summary: {
                    details: 'Under Section 11 of the Protection from Harassment Act, a victim may sue the perpetrator for monetary compensation for offences under Sections 3, 4, 5 and 7 of the Act.\n\nA civil claim entails the usual court procedures, including summons, submissions of affidavits, discovery and trial.',
                    cost_estimate: 'Varies',
                    duration_estimate: '3 months+',
                    possible_outcomes: [9, 3],
                },
                checkpoint_id: 4,
            },
        ]
    }, {
        id: 3,
        case_name: 'Neighbour Disputes',
        keywords: ['neighbour', 'quarrel'],
        actions: [
            {
                id: 1,
                action_name: 'Seek Assistance from Grassroots Leaders',
                action_summary: {
                    details: 'Disputes between neighbours are difficult to manage as the relationship will continue past the issue. Therefore, they are best resolved in non-confrontational ways. It is best to attempt to settle the matter amicably before seeking legal recourse.' +
                    '\n\n You can seek assistance from Grassroots Leaders at Neighbourhood Centres (NCs) which can provide free assistance for people facing disturbances around their home. Grassroot Leaders are trained volunteers who can assist you with resolving such conflicts without needing to resort to legal options',
                    cost_estimate: 'Free',
                    duration_estimate: 'Duration Estimate: immediate (depending on availability of volunteers)',
                    possible_outcomes: [],
                },
                checkpoint_id: 6,
            }, {
                id: 2,
                action_name: 'Mediation',
                action_summary: {
                    details: 'Disputes between neighbours are difficult to manage as the relationship will continue past the issue. Therefore, they are best resolved in non-confrontational ways. It is best to attempt to settle the matter amicably before seeking legal recourse.' +
                    '\n\n Mediation is a low-cost alternative involving neutral third-party mediators who will lead the parties in a voluntary discussion in order to reach an amicable solution. Mediators are trained professionals who can assist and resolve the conflict in constructive manners. On average, more than 7 out of 10 cases brought to the Community Mediation Centre reach a settlement.',
                    cost_estimate: '$5 Administrative Fee',
                    duration_estimate: '2 weeks (depending on earliest opening available)',
                    possible_outcomes: [11],
                },
                checkpoint_id: 5,
            }, {
                id: 3,
                action_name: 'Community Disputes Resolution Tribunal',
                action_summary: {
                    details: 'CDRTs are a legal measure of last resort for residents as the other options may better preserve the neighbour relations. Other options have a greater chance of resolving the matter as the solutions reached are made by mutual consent.' +
                    '\n\n A CDRT is part of the State Courts which hears cases under the Community Disputes Resolution Act (CDRA). The tribunal is convened for statutory torts arising from the interference with the enjoyment or use of places of residence created under the CDRA. Lawyers are generally not allowed to represent the parties.' +
                    '\n\n Do read the special characteristics of CDRT proceedings available on the state courts website to gain a better understanding of how a CDRT is carried out. Note also that the Court may order for the parties to attend compulsory mediation if they had not done so previously.' ,
                    cost_estimate: 'At least $150',
                    duration_estimate: 'At least 8 weeks',
                    possible_outcomes: [12,13,14,3],
                },
                checkpoint_id: 7,
            },
        ]
    }, {
        id: 4,
        case_name: 'Stalking',
        keywords: ['stalking', 'following'],
        actions: [
        ]
    }
]

export const Checkpoints = [
    {
        id: 1,
        action_name: 'File for Protection Order',
        checkpoints: [
            {
                id: 1,
                checkpoint_name: 'Pre-Filing Assessment',
                details: 'If you are filing a PO on your own (i.e. without a lawyer), you will need to attend a pre-filing assessment at the State Courts. \n\nThe pre-filing assessment aims to give you a better understanding of the process of filing for a PO, before referring you to an Assessor who will assess your case.',
                to_do: ['Go to State Courts Central Registry at Level 2', 'Complete pre-filing Assessment', 'Wait for Magistrate Action'],
                checklist: ['NRIC', 'Evidence of the harassing act', 'Police and/or medical reports']
            }, {
                id: 2,
                checkpoint_name: 'Filing the Application',
                details: 'Certain documents are necessary when filing your application, namely the Ex Party Originating Summons (Form 235) and a Supporting Affidavit (Form 236). You must also affirm/swear that your affidavit is true to the best of your knowledge at the State Courts Central Registry. \n\nFor filing the application, several documents are to be personally filed by you at the LawNet and CrimsonLogic Service Bureau.',
                to_do: ['Complete the requisite forms', 'Affirm or swear to the truth of your affidavit'],
                checklist: ['NRIC', 'Originating Summons', 'Supporting Affidavit']
            }, {
                id: 3,
                checkpoint_name: 'Serve Summons',
                details: 'You are required to serve a copy of your Originating Summons and Supporting Affidavit to the perpetrator. \n\nWithin 8 days of serving the documents, you will need to file an Affidavit of Service',
                to_do: ['Serve OS and SA on perpetrator', 'File Affidavit of Service'],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: 'Attend PTC',
                details: 'Approximately 3-4 weeks after you have filed your application, both you and your alleged perpetrator must attend a Pre-Trial Conference (PTC). The purpose behind the PTC is to settle administrative matters such as the hearing date. \n\nThe judge may also order the parties to go for alternative dispute resolution like mediation.',
                to_do: ['Attend PTC'],
                checklist: ['NRIC']
            }, {
                id: 5,
                checkpoint_name: 'Attend Court Hearing',
                details: 'During the hearing, the judge will consider the evidence that you have put forward, as well as the alleged perpetrator’s own case, before making a decision on whether the PO should be granted.',
                to_do: ['Bring Multiple Copies of evidence', 'Wait for Magistrate Action'],
                checklist: ['NRIC', 'Evidence of the harassing act', 'Police and/or medical reports']
            }, {
                id: 6,
                checkpoint_name: 'Serve Protection Order',
                details: 'If your application for a PO is successful and the PO is granted, you must serve it on the perpetrator. The PO takes effect only after it has been served.',
                to_do: ['Serve PO'],
                checklist: []
            }
        ]
    }, {
        id: 2,
        action_name: 'File a police report',
        checkpoints: [
            {
                id: 1,
                checkpoint_name: 'Making a crime report',
                details: 
                    'When making a crime report, you should provide the following information:' +
                    '\n1.	Date, time and place of offence' +
                    '\n2.	Identity or description of the person who committed an offence' +
                    '\n3.	Circumstances leading to the offence; and' +
                    '\n4.	Any other relevant information that would be useful in Police investigations' + 
                    '\n\nOnce a Police report has been lodged, the police officers will provide you with a copy of the Police report and advise you on the next course of action. Based on the situation, the Police may:' +
                    '\nA.	Initiate investigations into the matter; or' +
                    '\nB.	Take no further action as the facts revealed that no criminal offence has been committed' +
                    '\nC.	Not be able to proceed further as the other party is unknown at that point in time' +
                    '\nD.	Give verbal advisory to keep the peace' +
                    "\n\nIf the Police has decided to proceed with B, C or D, click 'back' find out more about other alternatives to your problem." ,
                to_do: [],
                checklist: []
            }, {
                id: 2,
                checkpoint_name: 'Police Investigations',
                details: 
                    'If the Police has proceeded with A, the Police will initiate further investigations. The Investigation Officer in-charge of the case will update you on the preliminary status of your case through a letter sent to the mailing address provided in the Police report within 7 working days. Further updates on the development of the case will also be sent by post to the same address.' + 
                    '\n\nShould you need to contact the Investigation Officer to provide information on the case, you can do so during office hours from 8:30am to 6:00pm on Mondays to Thursdays and 8:30 am to 5:30pm on Fridays.',
                to_do: ['Wait for Police Investigation'],
                checklist: []
            }, {
                id: 3,
                checkpoint_name: 'After Investigations',
                details: 
                    'At the conclusion of investigations, Police will consult the Attorney General’s Chambers on the next course of action as the decision to prosecute is with the AGC. The outcomes may include: ' +
                    '\n\na.	Take no further action and cease investigations; or ' +
                    '\nb.	Initiate prosecution against the person accused of committing the crime.' +
                    "\n\nThe court has the power to award compensation to the victim of a criminal offence. In the event that the court in the criminal proceedings does not award compensation, you can commence a Civil Action to obtain compensation (Go back and see 'Civil Claim').", 
                to_do: [],
                checklist: []
            },
        ]
    }, {
        id: 3,
        action_name: 'File a magistrate’s complaint',
        checkpoints: [
            {
                id: 1,
                checkpoint_name: 'Filing a Magistrate’s Complaint',
                details: 'The Duty Magistrate will take one of the following actions: ' + 
                '\n - Dismiss the complaint' + 
                '\n - Order you and the alleged offender to attend criminal mediation ' +
                '\n - Direct the Police to commence investigations into the complaint, for the State to decide whether to prosecute the offender' +
                '\n - Postpone the complaint for parties to negotiate a settlement' +
                '\n - Issue a Summons against the alleged offender for private prosecution' + 
                '\n - Issue a Summons for a person to assist with the complaint, if the Magistrate requires the assistance of witnesses or experts in the case',
                to_do: ['Proceed to State Courts Central Registry at Level 1',
            'Complete pre-filing assessment',
            'Complete and Submit the Complaint Form',
            'Proceed to Finance Department to pay filing fee',
            'Return to the Central Registry to see the Duty Magistrate',
            'Affirm the accuracy of the matter before the Magistrate'
        ],
                checklist: ['Copy of NRIC', 'Police Report/ Case Card', 'other relevant documents']
            }, {
                id: 2,
                checkpoint_name: 'FIling the complaint form',
                details: 'The following may occur if a criminal mediation has been ordered:' +
                '\n\n - The Magistrate may refer parties to the Community Mediation Centre (CMC). ' + 
                '\n     - If the matter is settled at the CMC, parties will sign a Settlement Agreement. If settlement is not reached, fresh Notices will be sent to the Complainant and the Respondent to appear before the Magistrate on another day.' +
                '\n\n - The Magistrate may mediate the matter. ' + 
                '\n     - If the parties manage to reach a settlement, then complaint will be withdrawn and no further action will be taken. If there is no settlement, then you may wish to proceed to trial by way of a private summons. After you have prepared the charges against the alleged offender, you will be issued a Summons for you to serve on the alleged offender. Each Summons costs $20 to be issued.' +
                '\n\n - The Magistrate may refer both parties to a Court Mediator for mediation. '+
                '\n     - Depending on the outcome of the mediation, the follow-up actions may be similar to what has been discussed in the previous point.',
                to_do: [],
                checklist: []
            }, {
                id: 3,
                checkpoint_name: 'If a criminal mediation has been ordered by the Magistrate',
                details: 'The following may occur if a criminal mediation has been ordered:' +
                '\n\n - The Magistrate may refer parties to the Community Mediation Centre (CMC). ' + 
                '\n     - If the matter is settled at the CMC, parties will sign a Settlement Agreement. If settlement is not reached, fresh Notices will be sent to the Complainant and the Respondent to appear before the Magistrate on another day.' +
                '\n\n - The Magistrate may mediate the matter. ' + 
                '\n     - If the parties manage to reach a settlement, then complaint will be withdrawn and no further action will be taken. If there is no settlement, then you may wish to proceed to trial by way of a private summons. After you have prepared the charges against the alleged offender, you will be issued a Summons for you to serve on the alleged offender. Each Summons costs $20 to be issued.' +
                '\n\n - The Magistrate may refer both parties to a Court Mediator for mediation. '+
                '\n     - Depending on the outcome of the mediation, the follow-up actions may be similar to what has been discussed in the previous point.',
                to_do: [],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: 'If the Magistrate has directed the police to conduct an investigationinto the complain',
                details: 'At the conclusion of investigations, Police will consult the Attorney General’s Chambers on the next course of action as the decision to prosecute is with the AGC. The outcomes may include: ' + 
                '\n a. Take no further action and cease investigations; or' +
                '\n b. Initiate prosecution against the person accused of committing the crime.',
                to_do: [],
                checklist: []
            }, {
                id: 5,
                checkpoint_name: 'If the Magistrate has directed the service of Summons on the alleged offender',
                details: 'Where a Summons is issued, you will have to pay $20 for its issuance. You must then serve the Summons on the alleged offender. This is to notify the alleged offender that a Magistrate’s Complaint has been started against him.' + 
                '\n ',
                to_do: ['Hearing of Summons', 'Trial', 'Private Prosecution'],
                checklist: []
            }, {
                id: 6,
                checkpoint_name: 'Other Alternatives',
                details: '1. Mediation' +
                '\n     If you do not wish to recover compensation or sentence the alleged offender, but would like to reach an agreement to resolve a dispute with the alleged offender, it is advisable to seek mediation services.' +
                '\n\n 2. Commence a Civil Suit' + 
                '\n     In the event that the court in the criminal proceedings does not award compensation, you can choose to commence a civil action to obtain the same. ' +
                '\n     Compensation obtained in a criminal proceeding does not affect the victim’s rights to remedies in civil proceedings. However, the amount of compensation awarded to the victim after the criminal conviction will be taken into account in any subsequent civil suit between the victim and the offender.' +
                '\n     However, it is not advisable to commence a civil action as civil actions are more cumbersome and slower than private prosecutions in most cases. ',
                to_do: [],
                checklist: []
            }
        ]
    }, {
        id: 4,
        action_name: 'Civil Claim',
        checkpoints: [
            {
                id: 1,
                checkpoint_name: 'Commencement of a Civil Action',
                details: 'A civil action begins by filing a court document pursuant to an originating process, such as a Writ of Summons or Originating Summons. The more common originating process is the Writ of Summons. The Writ of Summons is filed as a suit in the District Court or Magistrate\'s Court, as the case may be, by the party making a claim (plaintiff) and served on the party against whom the claim is made (defendant).' +
                '\n The District Court hears civil actions where the disputed amount does not exceed $250,000 or, in the case of road traffic accident claims or claims for personal injuries arising out of industrial accidents, does not exceed S$500,000. Parties may also agree in writing to have the matter heard by the District Court, even though the sum in dispute exceeds $250,000 or, in the case of road traffic accident claims or claims for personal injuries arising out of industrial accidents, exceeds $500,000. Where the plaintiff limits his claim to $250,000, the District Court can also hear the case.' +
                '\n The Magistrate\'s Court has the power to hear civil actions where the disputed amount does not exceed $60,000.',
                to_do: ['Draft a Writ of Summons','Go to District Court/ Magistrate\'s Court to file a suit'],
                checklist: ['Writ of Summons']
            }, {
                id: 2,
                checkpoint_name: 'Service of Writ',
                details: 'After the Writ of Summons is issued, you must serve the writ on the party against whom you are claiming against (defendant).' +
                '\n A Summons cannot be served on an alleged offender who is residing outside of Singapore. If you do not know the current address of the alleged offender, the court will assist in ascertaining the address.' +
                '\n However, if it can be shown that the alleged offender is no longer residing at the address reflected in available official records, then you are under a duty to find out the alleged offender’s current address. ',
                to_do: ['Handing the Summons to the alleged offender while accompanied by a court process server', 
                '2.	Leave the Summons with an adult living with the alleged offender; or', 
                '3.	Post the Summons on the front door of the alleged offender’s place of residence'],
                checklist: ['Writ of Summons']
            }, {
                id: 3,
                checkpoint_name: 'Reply and Defence to possible counterclaims by Defendant',
                details: 'A defendant who has been served with a Writ of Summons must, if he wishes to contest the plaintiff\'s claim, inform both the Court and the plaintiff of his intention to do so by entering an appearance. He must file a memorandum of appearance in Court within 8 days after he has been served with the Writ of Summons.' + 
                '\n\n - Judgement in default of Appearance.' + 
                '\n If a defendant fails to enter an appearance within the time specified in the writ, you may enter default judgment against him. This may be a final judgment or an interlocutory judgment, depending on the nature of the claim. The Court, may, upon an application, set aside or vary such a judgment as it thinks just.' +
                '\n\n - Defence/Counterclaim by the defendant' +
                '\n Within 22 days from the date the defendant was served with the Writ of Summons, the defendant must file his defence in Court and also serve a copy of his defence on the plaintiff\'s address of service or on the plaintiff\'s solicitors at their office address, as the case may be. If a defendant alleges that he has any claim or is entitled to any relief or remedy against the plaintiff, he may make a counterclaim in the same action brought by the plaintiff. In such a case, the pleading is known as the defence and counterclaim.' +
                '\n\n - Reply and Defence to Counterclaim' +
                '\n A plaintiff may serve on the defendant his reply (and defence to a counterclaim, if applicable), within 14 days after the defence (and counterclaim) has been served on him.' +
                '\n\n - Judgement in Default of Defence' +
                '\n In the event that the defendant has been served the Writ of Summons and has entered an appearance but has no defence to the claim or any part of the claim or does not serve any defence, the plaintiff may apply to the Court for judgment against the defendant. This may be a final judgment or an interlocutory judgment, depending on the nature of the claim. The Court may, upon application made by the relevant party, set aside or vary such a judgment as it thinks just.',
                to_do: [],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: 'Pre-Trial Process',
                details: '4.1: Summons for Directions' +
                '\n Summons for Directions occur at the time when parties need to determine what further steps need to be taken in order to effectively prepare for trial. Directions pertaining to the filing and exchanging of affidavits, the number of witnesses a party may require, and the number of trial days required, are decided at this stage. Parties will also need to agree on specific evidence such as expert advice to be used at trial.' +
                '\n\n 4.2: Interlocutory applications' +
                '\n After a civil action is commenced, it usually goes through various stages before the trial actually takes place. During the pre-trial stages, both parties have to comply with the requirements set out in the Rules of Court, for example, those relating to giving further details of the facts of one\'s case, the gathering and exchange of documents to prove one\'s case and the preparation and exchange of witness statements (by way of affidavits of evidence-in-chief) which each party is relying on. In the course of preparing the case for trial during the pre-trial stages, each party may file interlocutory applications to the court in order to further the preparation of his case.' +
                '\n\n 4.3 Settling down' +
                '\n After the pleadings (such as the statement of claim, defence, reply etc) have been filed and the various pre-trial matters have been dealt with (including the disclosure of all documents and other evidence to be relied on at the trial to support each party\'s case), and parties are ready for trial, the case must be set down for trial. This is a necessary step which is to be taken by either party (usually the plaintiff) before an action goes to trial. Please refer to Order 34 of the Rules of Court for the detailed requirements and procedure to set an action down for trial.' +
                '\n\n 4.4 Pre-trail conference (PTC)' +
                '\n Pre-trial conferences are sessions with a Judge to confirm that all pre-trial matters and applications are dealt with before the matter proceeds for Trial. Generally, a trial date is fixed within 28 days from the PTC.' ,
                to_do: [],
                checklist: []
            }, {
                id: 5,
                checkpoint_name: 'Trial ',
                details: 'You must ensure that you and all your witnesses can attend Court that day. If a witness is unwilling to attend, you should apply to Court for a ‘subpoena’ to order his attendance. For more information on how to subpoena witnesses, please speak to one of our staff at the Civil Registry. You also need to be familiar with all affidavits of evidence-in-chief filed. You must plan in advance your questions for cross examining your opponent’s witnesses. ' +
                '\n\n 5.1 Preparation of witness' +
                '\n You must ensure that you and all your witnesses can attend Court that day. If a witness is unwilling to attend, you should apply to Court for a ‘subpoena’ to order his attendance. For more information on how to subpoena witnesses, please speak to one of our staff at the Civil Registry. You also need to be familiar with all affidavits of evidence-in-chief filed. You must plan in advance your questions for cross examining your opponent’s witnesses. ' +
                '\n\n 5.2 Documents to submit before trial' +
                '\n A few days before the trial date, the court will send you a letter to submit the following documents:' +
                '\n     - Bundle of affidavits of evidence-in-chief (all your witnesses’ affidavits)' +
                '\n     - Bundle of Documents (documents you intend to show the judge at trial' +
                '\n     - Bundle of Authorities (the cases/textbook extracts you are relying on)' +
                '\n     - Opening statement (a short written summary of your case)'+
                '\n\n 5.3 Sequence of Proceedings' +
                '\n - Plaintiff to introduce the parties (e.g. “I am XYZ, the Plaintiff. My learned friend ABC is counsel for the Defendant”, etc.) ' + 
                '\n - The Court will mark the bundles (e.g. “Plaintiffs Bundle of Affidavits marked PA pages 1 to 100”) ' +
                '\n - Opening statements are read by the Plaintiff followed by the Defendant '+
                '\n - Plaintiff to call witnesses; Defendant to cross examine; Plaintiff to re-examine ' +
                '\n - After all the Plaintiff ’s witnesses are called, the Plaintiff will close his case ' +
                '\n - Defendant to call witnesses; Plaintiff to cross examine; Defendant to re-examine '+
                '\n - After all the Defendant’s witnesses are called, the Defendant will close his case '+
                '\n - Submissions by parties '+
                '\n - Verdict by the Court '+
                '\n\n 5.4 Judgement' +
                '\n The judgement is the decision of the Court at the end of the trial. The Court may pronounce judgment immediately after listening to the closing submissions. Alternatively, the Court may adjourn (meaning: to postpone to a later time) the case to take more time to consider the evidence and arguments. In such an instance, the Court will inform the parties on a later date to attend before the Court for the delivery of judgment.' +
                '\n\n 5.5 Assessment of Damages' +
                '\n In certain cases, including personal injury claims, a Judge may grant judgment on the issue of liability but not make a ruling on the precise quantum of damages that has to be paid to the successful litigant by the other party. In such a case, the quantum of damages to be awarded is assessed by a Registrar in a hearing in chambers. The Registrar will hear evidence from appropriate parties, such as the injured plaintiff or medical experts, to determine the appropriate quantum of damages to be awarded.',
                to_do: ['Prepare witness', 'Prepare Documents'],
                checklist: ['NRIC', 'At least 2 set sof all Bundles', 'Writing Materials']
            }
        ]
    }, {
        id: 5,
        action_name: 'Mediation',
        checkpoints: [
            {
                id: 1,
                checkpoint_name: 'Seek Consent',
                details: 
                    'Mediation is a voluntary scheme where both parties must be willing to go through the mediation process. Therefore, you should seek your neighbour’s consent and availability for the process.',
                to_do: ['seek consent from other party'],
                checklist: []
            }, {
                id: 2,
                checkpoint_name: 'Register Case',
                details: 
                    'Registering your case can be done online directly using your SingPass, or you may call the CMC hotline at 1800-CALL-LAW (1800-2255-529) during their opening hours: weekdays 830am-5pm, excluding public holidays.' ,
                to_do: ['Register Online/CMC Enquiry Line'],
                checklist: []
            }, {
                id: 3,
                checkpoint_name: 'Attend Mediation session',
                details: 
                    'Mediation sessions will be carried out at CMC’s office and the number of sessions will differ from case to case. Your mediator will advise the parties accordingly on your first session.' ,
                to_do: ['Attend Mediation'],
                checklist: ['NRIC']
            },
        ]
    }, {
        id: 6,
        action_name: 'Seek Assistance from Grassroots Leaders',
        checkpoints: [
        ]
    }, {
        id: 7,
        action_name: 'Community Disputes Resolution Tribunal',
        checkpoints: [
            {
                id: 1,
                checkpoint_name: 'Pre-filing Assessment',
                details: 'A Community Disputes Resolution Tribunal may only be convened if the case falls under any of the cases set out under the Act. Examples may be found at the state courts website, or under section 4 of the Act itself.' +
                '\n\n If your issue is not governed under the Act, a CDRT cannot be convened and you would have to seek other legal options, such as a regular civil claim.',
                to_do: ['Pre-filing Assessment'],
                checklist: []
            }, {
                id: 2,
                checkpoint_name: 'File your Claim in Community Justice and Tribunals System (CJTS)',
                details: 'This can be accessed using your Singpass Account ',
                to_do: ['File claim in CJTS'],
                checklist: []
            }, {
                id: 3,
                checkpoint_name: 'Serve your claim and Notice of Pre-Trial Conference on the Respondent',
                details: 'After filing your claim in the CJTS, you will receive a Notice of the Pre-Trial Conference (PTC), which will be held within 4 weeks from the filing date. The Notice is to be served on the Respondent (your neighbour) within 14 days of filing.' +
                '\n\n When service is done, you must file a Declaration of Service on the CJTS.' +
                '\n\n The Respondent will also file and serve a reply on your claim.',
                to_do: ['Serve Notice to Respondent', 'File declaration of service'],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: 'Attend the Pre-Trial Conference',
                details: 'A PTC is where both parties are to come before a Registrar for him or her to monitor the progress of the case and make the necessary orders to keep the case moving efficiently.' +
                '\n\n If the parties had not attempted mediation or other non-legal options, the Registrar may make orders for you to do so.',
                to_do: ['Attend Pre-Trial Conference'],
                checklist: []
            }, {
                id: 5,
                checkpoint_name: 'Attend Hearing',
                details: 'If the Registrar sees fit, the case will go to a hearing before the CDRT. After the hearing, the CDRT may make a Court Order if it sees fit. Where a court order is made, the plaintiff must serve the Order on the persons which the order is made against.',
                to_do: ['Attend Hearing'],
                checklist: []
            }, 
        ]
    }, 
]

export const PossibleOutcomes = [
    {
        id: 1,
        outcome_name: 'Expedited Protection Order',
    }, {
        id: 2,
        outcome_name: 'Protection Order',
    }, {
        id: 3,
        outcome_name: 'Case Dismissed',
    }, {
        id: 4,
        outcome_name: 'Accused person may be let off with stern warning',
    }, {
        id: 5,
        outcome_name: 'Accused person be charged and prosecuted',
    }, {
        id: 6,
        outcome_name: 'Criminal Mediation',
    }, {
        id: 7,
        outcome_name: 'Private Prosecution',
    }, {
        id: 8,
        outcome_name: 'Order the Police to Investigate',
    }, {
        id: 9,
        outcome_name: 'Monetary Compensation',
    }, {
        id: 10,
        outcome_name: 'No further action'
    }, {
        id: 11,
        outcome_name: 'Non-Binding Settlement'
    }, {
        id: 12,
        outcome_name: 'Court Order for Damages'
    }, {
        id: 13,
        outcome_name: 'Court Order for Particular Actions'
    }, {
        id: 14,
        outcome_name: 'Court Order for an Apology'
    }
]