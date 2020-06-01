import React, { useState } from "react";

const PollCard = (props) => {
  const [learnMore, setLearnMore] = useState(false);

  const toggleLearnMore = () => {
    setLearnMore(!learnMore);
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
    <div
      className=" cursor-pointer bg-gray-100 m-4 p-4 w-flex rounded-lg overflow-hidden h-auto "
      onClick={() => toggleLearnMore()}
    >
      <p className="text-black-500 text-left">{props.word.term} </p>

      <p className="text-gray-500 text-right">
        Upvotes - {props.word.upvotes}{" "}
      </p>
      {learnMoreComponent()}
    </div>
  );
};
export default PollCard;
