export const CaseActions = [
    {
        id: 1,
        case_name: 'Assault',
        action_ids: [
            2, 4
        ],
        keywords: ['fight','attack','assault']
    }, {
        id: 2,
        case_name: 'Harassment',
        action_ids: [
            1, 2, 3, 4
        ],
        keywords: ['harass']
    }, {
        id: 3,
        case_name: 'Neighbour Disputes',
        action_ids: [
            1, 3, 4
        ],
        keywords: ['neighbour', 'quarrel']
    }, {
        id: 4,
        case_name: 'Stalking',
        action_ids: [],
        keywords: ['stalking', 'following']
    }
]

export const AllActions = [
    {
        id: 1,
        action_name: 'File for Protection Order',
        action_summary: {
            details: 'Under the Protection from Harassment Act, a victim of harassment may apply to the court for a protection order against the perpetrator. The specifics of the protection order will vary based on the particulars of the case. \n\nExpedited Protection Orders are granted on an urgent basis. If not, the application for a protection order will follow a process similar to a trial, involving a court hearing.',
            cost_estimate: 'S$ 150-250',
            duration_estimate: 'EPO: 1-2 weeks\nPO: 4-8 weeks',
            possible_outcomes: [1, 2, 3],
        },
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
        action_name: 'Make a police report',
        action_summary: {
            details: 'The police may be able to assist by investigating the perpetrator’s actions, and may intervene where necessary.\n\nThe Protection from Harassment Act makes it an offence for a wide array of anti-social behaviours, and the public prosecutor may review the case.',
            cost_estimate: 'Free',
            duration_estimate: 'NA',
            possible_outcomes: [4, 5],
        },
        checkpoints: [
            {
                id: 1,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 2,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 3,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 5,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }
        ]
    }, {
        id: 3,
        action_name: 'File a magistrate’s complaint',
        action_summary: {
            details: 'Magistrate’s Complaints are filed by individuals who are seeking redress for an offence which they believed was committed against them but was not taken up by the police for further investigation.\n\nThe Magistrate will make a decision on whether the case may be tried as a private prosecution, or whether any other solution may be appropriate.',
            cost_estimate: 'S$20-100',
            duration_estimate: '1 day - 5 months',
            possible_outcomes: [6, 7, 8, 3],
        },
        checkpoints: [
            {
                id: 1,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 2,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 3,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 5,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }
        ]
    }, {
        id: 4,
        action_name: 'Civil Claim',
        action_summary: {
            details: 'Under Section 11 of the Protection from Harassment Act, a victim may sue the perpetrator for monetary compensation for offences under Sections 3, 4, 5 and 7 of the Act.\n\nA civil claim entails the usual court procedures, including summons, submissions of affidavits, discovery and trial.',
            cost_estimate: 'Varies',
            duration_estimate: '3 months+',
            possible_outcomes: [9, 3],
        },
        checkpoints: [
            {
                id: 1,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 2,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 3,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 4,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
            }, {
                id: 5,
                checkpoint_name: '',
                details: '',
                to_do: [],
                checklist: []
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
        outcome_name: 'Stern Warning',
    }, {
        id: 5,
        outcome_name: 'Charged',
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
    }
]