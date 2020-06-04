export const CaseActions = [
    {
        id: 1,
        case_name: 'Assault',
        keywords: ['fight','attack','assault'],
        actions: [
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
            }
        ]
    }, {
        id: 3,
        case_name: 'Neighbour Disputes',
        keywords: ['neighbour', 'quarrel'],
        actions: [
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
                to_do: [],
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
                id: 3,
                checkpoint_name: 'If the Magistrate has directed the police to conduct an investigationinto the complain',
                details: 'At the conclusion of investigations, Police will consult the Attorney General’s Chambers on the next course of action as the decision to prosecute is with the AGC. The outcomes may include: ' + 
                '\n a. Take no further action and cease investigations; or' +
                '\n b. Initiate prosecution against the person accused of committing the crime.',
                to_do: [],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: 'If the Magistrate has directed the service of Summons on the alleged offender',
                details: 'Where a Summons is issued, you will have to pay $20 for its issuance. You must then serve the Summons on the alleged offender. This is to notify the alleged offender that a Magistrate’s Complaint has been started against him.' + 
                '\n ',
                to_do: ['Hearing of Summons', 'Trial', 'Private Prosecution'],
                checklist: []
            }, {
                id: 5,
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
                to_do: [],
                checklist: []
            }, {
                id: 2,
                checkpoint_name: 'Service of Writ',
                details: 'After the Writ of Summons is issued, you must serve the writ on the party against whom you are claiming against (defendant).',
                to_do: [],
                checklist: []
            }, {
                id: 3,
                checkpoint_name: 'Reply and Defence to possible counterclaims by Defendant',
                details: 'A defendant who has been served with a Writ of Summons must, if he wishes to contest the plaintiff\'s claim, inform both the Court and the plaintiff of his intention to do so by entering an appearance. He must file a memorandum of appearance in Court within 8 days after he has been served with the Writ of Summons.',
                to_do: [],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: 'Pre-Trial Process',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 5,
                checkpoint_name: 'Trial ',
                details: 'You must ensure that you and all your witnesses can attend Court that day. If a witness is unwilling to attend, you should apply to Court for a ‘subpoena’ to order his attendance. For more information on how to subpoena witnesses, please speak to one of our staff at the Civil Registry. You also need to be familiar with all affidavits of evidence-in-chief filed. You must plan in advance your questions for cross examining your opponent’s witnesses. ',
                to_do: ['Prepare witness', 'Prepare Documents'],
                checklist: ['NRIC', 'At least 2 set sof all Bundles', 'Writing Materials']
            }
        ]
    }
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
    }
]