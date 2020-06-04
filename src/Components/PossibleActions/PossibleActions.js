import React, { useState, useEffect } from 'react';
import { CaseActions, Checkpoints } from "../../Database/CaseActions";
import { useLocation } from 'react-router-dom';
import ActionSummary from './ActionSummary';
import { render } from '@testing-library/react';

const PossibleActions = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const lastIndex = pathname.lastIndexOf('/');
    const caseId = pathname.substr(lastIndex + 1);
    const caseAction = CaseActions[caseId - 1];

    const [state, setState] = useState(caseAction.actions[0].id);

    const renderActions = () => {
      return (
        caseAction.actions.map((data) => {
          const textColor = state == data.id ? "text-red-500 border-red-500" : "text-gray-600 border-gray-300 hover:text-red-400"
            return(
                <div 
                  className={`lato text-xl font-semibold border-r-4 cursor-pointer py-4 pr-4 ${textColor}`}
                  onClick={() => setState(data.id)}>
                    {data.action_name}
                </div>
            )
        })
      )
    }

    return (
      <div className="pt-40" style={{minWidth: '1000px', margin: "0 10%"}}>
        <div>
          <h2 className="la-h1 float-right" style={{color: '#C1C1C1'}}>{caseAction.actions.case_name}</h2>
          <h1 className="la-h1 text-gray-900 leading-tight">Understand <br/>Your Options</h1>
        </div>
        <div className="w-full h-full flex">
          <div className="py-8 w-1/4">
            {renderActions()}
          </div>
          <ActionSummary caseId={caseId} actionId={state} className="w-3/4"/>
        </div>
      </div>
    );
}

export default PossibleActions;
