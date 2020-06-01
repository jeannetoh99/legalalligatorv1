import React, {useState} from "react";
import GlossaryCard from "../Glossary/GlossaryCard";
import { words } from "../Glossary/Words";
import PollCard from "../Glossary/PollCard";

const Glossary = () => {
  var lst = words;
  lst.sort(function(a, b) {
    var textA = a.term.toUpperCase();
    var textB = b.term.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  return (
    <div className="flex flex-wrap">
     

      <div className="page flex w-full">
        <div className="text-center karla w-3/4 ">
         {words.map((item ) => 
            <GlossaryCard word={item}/>
          )}

        </div>
        <div className=" w-1/4">
          <Poll />
        </div>
      </div>
    </div>
  );
};

export default Glossary;

const Poll = () => {
  var lst = words; 
  lst.sort(function(a, b){return b.upvotes-a.upvotes}); 
  return(
    <div className="bg-green-500 m-4 p-4 w-flex rounded-lg overflow-hidden h-auto">
      <h2 className="uppercase font-bold text-3xl text-left w-full karla leading-tight text-white">
       top hits this week
      </h2>
      {
        lst.map((item) => <PollCard word={item} />)
      }
    </div>
  );
}


  