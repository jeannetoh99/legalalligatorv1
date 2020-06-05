import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  CaseActions,
  Checkpoints,
  PossibleOutcomes,
} from "../../Database/CaseActions";
import Box from "./Box";
import ChecklistItem from "./ChecklistItem";
import pdf from "../../Database/doc.pdf";
import downloadicon from "../../images/downloadicon.png";

const ActionDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const splitPathname = pathname.split("/");
  const caseId = splitPathname[splitPathname.length - 3];
  const actionId = splitPathname[splitPathname.length - 1];

  const selectedCase = CaseActions[caseId - 1];
  const action = selectedCase.actions[actionId - 1];
  const actionSummary = action.action_summary;
  const checkpoints = Checkpoints[action.checkpoint_id - 1].checkpoints;

  const goBack = () => {
    let path = `/Actions/${caseId}`;
    history.push(path);
    window.location.reload(false);
  };

  const renderSideBar = () => {
    return (
      <div className="w-full pr-12 mr-12 my-auto">
        <HashLink to="#overview">
          <h1
            className="lato font-medium text-lg py-3 cursor-pointer border-r-4 border-gray-400 text-gray-600
                    hover:font-semibold hover:border-gray-900 hover:text-gray-900 pr-2"
          >
            Overview
          </h1>
        </HashLink>
        {checkpoints.map((data) => {
          return (
            <HashLink to={`#${data.id}`}>
              <h1
                className="lato font-medium text-medium py-3 pr-2 cursor-pointer border-r-4 border-gray-400 
                                text-gray-600 hover:font-semibold hover:border-gray-900 hover:text-gray-900"
              >
                Checkpoint {data.id}:<br />
                {data.checkpoint_name}
              </h1>
            </HashLink>
          );
        })}
      </div>
    );
  };

  const renderOverview = () => {
    return (
      <div id="overview" className="pt-40">
        <h1 className="la-h1 text-gray-900">Overview</h1>
        <div className="w-56 bg-gray-800 my-2" style={{ height: "2px" }} />
        <div className="w-full flex">
          <div className="w-2/3 pr-10">
            <h2 className="la-h2 text-gray-800 my-8">{action.action_name}</h2>
            <p className="text-gray-700 la-h4 whitespace-pre-wrap">
              {actionSummary.details}
            </p>
            <div className="w-full my-8 flex">
              <div className="w-1/2">
                <h3 className="la-h3 text-gray-800 py-2">Cost Estimate</h3>
                <h3 className="la-h3 text-gray-500 py-2">
                  {actionSummary.cost_estimate}
                </h3>
              </div>
              <div className="w-1/2">
                <h3 className="la-h3 text-gray-800 py-2">Duration Estimate</h3>
                <h3 className="la-h3 text-gray-500 py-2 whitespace-pre-wrap">
                  {actionSummary.duration_estimate}
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <h3 className="la-h3 text-green-500">Possible Outcomes</h3>
            {actionSummary.possible_outcomes.map((data) => {
              return <Box>{PossibleOutcomes[data - 1].outcome_name}</Box>;
            })}
            <div className="w-full flex flex-col my-10">
            <p className="font-semibold font-xl">Download summary</p>
            <div className=" h-12 w-12 rounded-full flex bg-green-500 my-4 items-center justify-center shadow-lg">
                    <a href={pdf} target="_blank" download>
                        <img src={downloadicon} />
                    </a>
                </div>
                </div>
      </div>
      </div>
      </div>)
      }

    const renderCheckPoint = (data) => {
        return(
            <div id={data.id} className="w-full pt-40">
                <div className="w-full border-b-2 border-gray-800 flex">
                    <div className="w-1/2">
                        <h1 className="la-h1 text-gray-900">Checkpoint {data.id}: <br/></h1>
                        <h2 className="la-h2 text-gray-800">{data.checkpoint_name}</h2>
                    </div>
                    <h3 className="w-1/4 la-h3 text-gray-900 self-end py-2">Actions</h3>
                    <h3 className="w-1/4 la-h3 text-gray-900 self-end py-2">Checklist</h3>
                </div>
                <div className="w-full flex">
                    <div className="w-1/2 py-8 pr-4">
                        <p className="text-gray-700 overflow-scroll la-h4 whitespace-pre-wrap" 
                            style={{maxHeight: '450px'}}>{data.details}</p>
                    </div>
                    <div className="w-1/4">
                        {data.to_do.map((datum) => {
                            return(
                                <Box>{datum}</Box>
                            )
                        })}
                    </div>
                    <div className="w-1/4">
                        {data.checklist.map((datum) => {
                            return <ChecklistItem item={datum} />
                        })}
                        <p className={data.checklist.length === 0 ? "visible la-h3 text-gray-500 my-4" : "hidden"}>
                            NA
                        </p>
                    </div>
             
            </div>
          </div>
      
    );
  };

  return (
    <div className="my-8 w-full" style={{ padding: "0 8% 400px" }}>
      <div className="sidebar w-1/6 fixed mt-40">
        <div
          className="mb-8 text-red-400 cursor-pointer hover:font-bold"
          onClick={() => goBack()}
        >{`< back`}</div>
        {renderSideBar()}
      </div>
      <div className="w-5/6" style={{ margin: "0 10% 0 20%" }}>
        {renderOverview()}
        {checkpoints.map((data) => renderCheckPoint(data))}
      </div>
    </div>
  );
};

export default ActionDetails;
