import React from 'react';
import LongCaseCard from './LongCaseCard';
import { Cases } from './../../Database/Cases';

const CaseSearchResult = () => {

    const renderCaseCards = () => {
        return (
            <div>
                {Cases.map((data) => {
                    return <LongCaseCard case={data} />
                })}
            </div>
        )
    }

    return (
        <div className='page p-1' style={{marginLeft: '15%', marginRight: '15%'}}>
            <h1 className="la-h1 text-gray-800">
                Based on the information provided,<br/>
                here are some topics we found:
            </h1>
            {renderCaseCards()}
        </div>
    )
}
export default CaseSearchResult;