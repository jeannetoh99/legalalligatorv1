import React from 'react';
import { PossibleOutcomes, CaseActions } from "../../Database/CaseActions";
import { useHistory, useLocation } from 'react-router-dom';

const ActionSummary = (props) => {
    const selectedCase = CaseActions[props.caseId-1];
    const action = selectedCase.actions[props.actionId-1];
    const actionSummary = action.action_summary;
    
    const history = useHistory();
    const location = useLocation();
    console.log(location.pathname);

    const getActionDetails = () => {
        let path = `${location.pathname}/Details/${props.actionId}`;
        history.push(path);
    }


    const renderPossibleOutcomes = () => {
        return (
            actionSummary.possible_outcomes.map((data) => {
                return (
                    <div className="py-2 lato text-lg font-semibold" style={{color: '#989494'}}>
                        {PossibleOutcomes[data-1].outcome_name}
                    </div>
                )
            })
        )
    }

    return (
        <div className="my-8 ml-12 w-full">
            <h2 className="la-h2 text-gray-800 pb-2">{action.action_name}</h2>
            <div className="w-56 bg-gray-500" style={{height: '2px'}} />
            <div className="w-full flex">
                <div className="w-1/2 pr-10 pt-8">
                    <h3 className="mb-8 text-gray-700 la-h3">Summary</h3>
                    <p className="whitespace-pre-wrap" style={{color: '#707070'}}>{actionSummary.details}</p>
                </div>
                <div className="w-1/8 my-8 pr-10">
                    <h3 className="text-gray-700 la-h3 mb-4">Cost estimate</h3>
                    <h3 className="la-h3" style={{color: '#989494'}}>{actionSummary.cost_estimate}</h3>
                    <h3 className="text-gray-700 la-h3 mb-4 mt-12">Duration estimate</h3>
                    <h3 className="la-h3 whitespace-pre-wrap" style={{color: '#989494'}}>{actionSummary.duration_estimate}</h3>
                </div>
                <div className="w-3/8 my-8">
                    <h3 className="text-gray-700 la-h3 mb-4">Possible Outcomes</h3>
                    <div className="border-l-4 border-red-400 pl-4 ml-6">
                        {renderPossibleOutcomes()}
                    </div> 
                </div>
            </div>
            <button className="float-right uppercase bg-red-500 tracking-xl font-bold text-base
                text-white py-3 px-6 rounded-full shadow-lg hover:bg-red-400" 
                style={{marginRight: '10%'}}
                onClick={() => getActionDetails()}
            >
                Details
            </button>
        </div>
    )
}

export default ActionSummary;