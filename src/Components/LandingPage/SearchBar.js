import React, { Component, useState } from "react";
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    
    const [state, setState] = useState({value: '', wordCount: '0'})
    const history = useHistory();

    const handleChange = (e) => {
        const wordCount = e.target.value === "" ? 0 : e.target.value.split(" ").length;
        setState({ value: e.target.value, wordCount: wordCount });
    }

    const handleSubmit = (e) => {
        alert('A case was submitted: ' + state.value);
        e.preventDefault();
    }

    const getSearchResults = (e) => {  
        history.push("/CaseSearchResults");
    }

    return (
        <div id="case-describer" className="flex justify-center mx-6 py-48" >
            <div className="rounded-lg h-124 w-236 py-4 px-12 bg-red-400">
                <form className="flex flex-col" onSubmit={() => handleSubmit()}>
                    <label className="karla font-black text-4xl flex flex-col">
                        Describe Your Case
                        <label className="font-normal text-xl">
                            Briefly describe what happened and what you are seeking to do. Our machines
                            will read and scan through the database for relevant topics to assist you.
                        </label>
                        <textarea
                            className="bg-gray-100 rounded-lg p-2 h-64 text-lg mt-4"
                            placeholder="Please describe your case."
                            onChange={() => handleChange()}
                        />
                    </label>
                    <div className="flex flex-row justify-between">
                        <div className="p-2 text-sm">Word Count: {state.wordCount}/50</div>
                        <input
                            className="mt-4 h-10 w-24 bg-red-500 self-end rounded-lg text-white shadow-xl cursor-pointer hover:bg-red-300"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>
                <div onClick={() => getSearchResults()} className="cursor-pointer hover:font-bold">
                    See sample search result page here!
                </div>
            </div>
        </div>
    );
}

export default SearchBar;