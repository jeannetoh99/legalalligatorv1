import React from 'react';
import CaseCard from './CaseCard';
import assaultImage from './../images/assault.png';
import harassmentImage from './../images/harassment.png';
import neighbourDisputesImage from './../images/neighbour_disputes.png';

const common_cases = [
    {
        case_name: 'Assault',
        imageURL: assaultImage,
        brief_description: 'An assault is the act of inflicting physical harm or unwanted physical contact upon a person or, in some specific legal definitions, a threat or attempt to commit such an action. \n\nIt is both a crime and a tort and, therefore, may result in either criminal and/or civil liability. Generally, the common law definition is the same in criminal and tort law.',
    }, {
        case_name: 'Harassment',
        imageURL: harassmentImage,
        brief_description: 'Harassment is an offence under the Protection from Harassment Act, and can involve varying degrees and types of behaviour, including: \n\n- threatening, abusive, or insulting language, comments and non-verbal gestures \n- cyber bullying \n- sexual harassment \n- stalking'
    }, {
        case_name: 'Neighbour Disputes',
        imageURL: neighbourDisputesImage,
        brief_description: 'Neighbour disputes involve any conflicts between yourself and your neighbours (including anyone in your building). \n\nThere are a large number of conflicts covered under the law, including excessive noise or. smoke, messy corridors, trespassing and many more.'
    }
]

const CommonCase = () => {

    const renderCaseCards = () => {
        return (
            common_cases.map((data) => {
                return <CaseCard case={data} />
            })
        )
    }

    return(
        <div className="w-screen justify-center flex">
            {renderCaseCards()}
        </div>
    )
}

export default CommonCase;