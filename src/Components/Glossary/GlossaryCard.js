
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { words } from "./Words";

const GlossaryCard = (props) => {
    const [learnMore, setLearnMore] = useState(false);
    const history = useHistory();
  
    const toggleLearnMore = () => {
      setLearnMore(!learnMore);
    };
  
    const getPossibleActions = () => {
      let path = `/Actions/${"qwert"}`;
      history.push(path);
      window.location.reload(false);
    };
  
    const learnMoreComponent = () => {
      const styling = learnMore
        ? "w-full h-screen flex flex-row justify-center items-center visible z-10 fixed top-0 left-0"
        : "hidden";
      return (
        <div
          className={styling}
          style={{ backgroundColor: "rgb(256,256,256,0.9)" }}
        >
          <div className="w-2/3 h-2/3 bg-white z-20 rounded-lg border-4 border-green-500 p-8">
            <h2 className="text-5xl font-bold text-center uppercase karla">
              {props.word.term}
            </h2>
            <div className="flex justify-center items-center">
              <p className="inline ml-6 whitespace-pre-wrap">
                {props.word.brief_description}
              </p>
            </div>
            <button
              className="text-green-600 float-right"
              onClick={() => toggleLearnMore()}
            >
              close
            </button>
          </div>
        </div>
      );
    };
  
    return (
      <div>
        <div className="m-4 p-4 w-flex rounded-lg overflow-hidden bg-gray-100">
          
          <div className="cursor-pointer" onClick={() => toggleLearnMore()}>
            <h2 className="uppercase font-bold text-3xl text-left w-full karla leading-tight">
              {props.word.term}
            </h2>
            <div className="h-1 w-flex bg-gray-300"/>
            <p className="font-regular text-left karla text-xl">
             {props.word.definition}
            </p>
            <p className="text-xl text-gray-500 text-right">
              Upvotes - {props.word.upvotes}
            </p>
          </div>
        </div>
        {learnMoreComponent()}
      </div>
    );
  };

  export default GlossaryCard;