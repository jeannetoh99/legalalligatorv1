import React, { Component, useState } from "react";
import { useHistory } from 'react-router-dom';
import { CaseActions } from './../../Database/CaseActions';
import CaseSearchResult from "../CaseSearchResult/CaseSearchResult";

const SearchBar = ( {caseSearchStore} ) => {
    
    const [state, setState] = useState({value: '', wordCount: '0'})
    const history = useHistory();

    const handleChange = (e) => {
        const wordCount = e.target.value === "" ? 0 : e.target.value.split(" ").length;
        setState({ value: e.target.value, wordCount: wordCount });
    }

    

    const parseWord = (word, caseScoresHashMap) => {
        return CaseActions.map((data, id) => {
            if (data.keywords.includes(word)) {
                var count = caseScoresHashMap.get(id);
                caseScoresHashMap.set(id, count+1);
                console.log(caseScoresHashMap.get(id));
            }
        })
    }

    const parseUserInput = () => {
        let caseScoresHashMap = new Map();   
        for (let i=0; i<CaseActions.length; i++) {
            caseScoresHashMap.set(i, 0);
            console.log(caseScoresHashMap.get(i))
        }

        var userSearchInput = state.value.replace(".", "");
        userSearchInput = userSearchInput.replace(",", "");
        userSearchInput = userSearchInput.replace("!", "");
        var words = userSearchInput.split(" ");
        words.map((data) => parseWord(data, caseScoresHashMap));

        return caseScoresHashMap;
    }

    const getSearchResults = () => {
        const caseScores = parseUserInput();
        const { setCaseScores } = caseSearchStore;
        setCaseScores(caseScores);
        history.push("/CaseSearchResults");
    }

    return (
        <div id="case-describer" className="flex justify-center mx-6 py-48" >
            <div className="rounded-lg h-124 w-236 py-4 px-12 bg-red-400">
                <form className="flex flex-col">
                    <label className="karla font-black text-4xl flex flex-col">
                        Describe Your Case
                        <label className="font-normal text-xl">
                            Briefly describe what happened and what you are seeking to do. Our machines
                            will read and scan through the database for relevant topics to assist you.
                        </label>
                        <textarea
                            className="bg-gray-100 rounded-lg p-2 h-64 text-lg mt-4"
                            placeholder="Please describe your case."
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <div className="flex flex-row justify-between">
                        <div className="p-2 text-sm">Word Count: {state.wordCount}/50</div>
                        <button
                            className="mt-4 h-10 w-24 bg-red-500 self-end rounded-lg text-white shadow-xl cursor-pointer hover:bg-red-300"
                            onClick={() => getSearchResults()}> Submit 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;