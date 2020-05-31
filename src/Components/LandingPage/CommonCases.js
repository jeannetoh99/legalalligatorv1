import React from 'react';
import CaseCard from './CaseCard';
import { Cases } from './../../Database/Cases';

const common_cases = Cases.slice(0,3);

const CommonCase = () => {

    const renderCaseCards = () => {
        return (
            common_cases.map((data) => {
                return <CaseCard case={data} />
            })
        )
    }

    return(
        <div id="common-cases" className="pt-40 flex content-center flex-wrap justify-center">
            <div className="mx-12 text-center">
                <h1 className="text-3xl karla font-bold">Select what best describes your case</h1>
                <h2 className="text-lg"> Here are the most common cases:</h2>
            </div>
            <div className="w-full justify-center flex py-8">
                {renderCaseCards()}
            </div>
            <div className="mx-12 text-center">
                <h1 className="text-2xl karla font-bold">Not what you're looking for?</h1>
                <h2 className="text-lg hover:font-semibold"><a href="#case-describer">Describe your case!</a></h2>
            </div>
        </div>
    )
}

export default CommonCase;