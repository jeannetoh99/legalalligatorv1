import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please describe your case.',
            wordCount:'4'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const wordCount =
      event.target.value === "" ? 0 : event.target.value.split(" ").length;
      this.setState({ value: event.target.value, wordCount: wordCount });
    }

    handleSubmit(event) {
        alert('A case was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="flex justify-center" >
                <div className="rounded-lg box-border h-96 w-236 p-4 border-4 border-orange-400 bg-orange-200">
                    {/* <div className="flex justify-center">
                        <div className="self-end flex-1 rounded-lg h-48 w-196 bg-white"> */}
                    <form className="flex flex-col" onSubmit={this.handleSubmit}>
                        <label className="karla font-black text-4xl flex flex-col">
                            Describe Your Case
                            <label className="font-normal text-xl">
                                Briefly describe what happened and what you are seeking to do. Our machines
                                will read and scan through the database for relevant topics to assist you.</label>
                            <textarea className="bg-gray-100 rounded-lg p-2 h-48 text-lg" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <div className="flex flex-row justify-between">
                    <div className="p-2 text-sm">wordcount: {this.state.wordCount}</div>
                        <div className="p-2 self-end">
                            <input className="bg-green-400 p-2 rounded-lg" type="submit" value="Submit" />
                        </div>
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