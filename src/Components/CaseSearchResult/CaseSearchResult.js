import React, { Component, useState, useEffect } from 'react';
import LongCaseCard from './LongCaseCard';
import { Cases } from './../../Database/Cases';
import ScrollToTop from './../ScrollToTop';

class CaseSearchResult extends Component {

    //take each word from the sentence
    //check through with each keyword in each case keyword
    //see if got function to check if word in array
    //give each case a score
    //sort case, map render


    /*useEffect(() => {
        setState(getUserSearchInput);
        parseUserInput();
    },[])*/

    constructor(props) {
        super(props);
    }

    renderCaseCards = () => {
        const getCaseScores = this.props.caseScores;
        if (getCaseScores !== undefined) {
            return (
                <div>
                    {Cases.sort((a,b) => getCaseScores.get(a.id -1) < getCaseScores.get(b.id -1) ? 1 : -1).map((data) => {
                        return <LongCaseCard case={data} />
                    })}
                </div>
            )
        } else {
            return (
                <div>
                    {Cases.map((data) => {
                        return <LongCaseCard case={data} />
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div className='page' style={{marginLeft: '15%', marginRight: '15%'}}>
                <ScrollToTop />
                <h1 className="la-h1 text-gray-800">
                    Based on the information provided,<br/>
                    here are some topics we found:
                </h1>
                <div>{this.renderCaseCards()}</div>
            </div>
        )
    }
}
export default CaseSearchResult;