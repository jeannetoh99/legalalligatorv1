import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            wordCount:'0'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const wordCount = e.target.value === "" ? 0 : e.target.value.split(" ").length;
        this.setState({ value: e.target.value, wordCount: wordCount });
    }

    handleSubmit(e) {
        alert('A case was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <div className="flex justify-center mx-6 mb-40" >
                <div className="rounded-lg h-96 w-236 py-4 px-12 bg-red-400">
                    {/* <div className="flex justify-center">
                        <div className="self-end flex-1 rounded-lg h-48 w-196 bg-white"> */}
                    <form className="flex flex-col" onSubmit={this.handleSubmit}>
                        <label className="karla font-black text-4xl flex flex-col">
                            Describe Your Case
                            <label className="font-normal text-xl">
                                Briefly describe what happened and what you are seeking to do. Our machines
                                will read and scan through the database for relevant topics to assist you.</label>
                            <textarea 
                                className="bg-gray-100 rounded-lg p-2 h-40 text-lg mt-4" 
                                placeholder="Please describe your case."
                                onChange={this.handleChange} 
                            />
                        </label>
                        <div className="flex flex-row justify-between">
                            <div className="p-2 text-sm">Word Count: {this.state.wordCount}/50</div>
                                <input 
                                    className="mt-4 h-10 w-24 bg-red-500 self-end rounded-lg text-white shadow-xl cursor-pointer hover:bg-red-300" 
                                    type="submit" 
                                    value="Submit" 
                                />
                            </div>
                        </form>
                    {/* </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default SearchBar;