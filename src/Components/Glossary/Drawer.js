import React, { useState } from "react";
import PollCard from "./PollCard";
import { useHistory } from "react-router-dom";
import { words } from "./Words";

const GlossaryDrawer = () => {
  const [learnMore, setLearnMore] = useState(false);

  const toggleLearnMore = () => {
    setLearnMore(!learnMore);
  };

  const learnMoreComponent = () => {
    const styling = learnMore
      ? "flex-column w-auto z-20 top-0 right-0"
      : "hidden"; 
    return (
      <div className={styling}>
        <div className="float-right w-1/3 h-2/3 bg-white z-20 rounded-lg border-4 border-green-500 p-8">
          <h2 className="text-5xl font-bold text-center uppercase karla">
            Pop up thing
          </h2>
          <div className="flex justify-center items-center">
            <p className="inline ml-6 whitespace-pre-wrap">asodifjaosidf</p>
          </div>
          <button
            className="text-green-600 float-right"
            onClick={() => toggleLearnMore()}
          >
            close
          </button>
        </div>
        <div className="float-right w-1/3 h-2/3 bg-white z-20 rounded-lg border-4 border-green-500 p-8">
          <h2 className="text-5xl font-bold text-center uppercase karla">
            Pop up thing
          </h2>
          <div className="flex justify-center items-center">
            <p className="inline ml-6 whitespace-pre-wrap">asodifjaosidf</p>
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
  var lst = words;
  lst.sort(function (a, b) {
    return b.upvotes - a.upvotes;
  });
  return (
    <div classNAme="w-full h-screen flex flex-row justify-center items-center visible z-11 fixed top-0 left-0">
      <div
        className="bg-red-500 float-right top-0 right-0 p-4 rounded"
        onClick={() => toggleLearnMore()}
      >
        <p className="uppercase font-semibold karla text-white">Look up a word</p>
        {learnMoreComponent()}
      </div>
    </div>
  );
};

export default GlossaryDrawer;
