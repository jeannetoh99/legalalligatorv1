import React, { useState } from "react";
import { words } from "../Glossary/Words";
import alligatorhead from "./../../images/alligatorhead.jpg"
import { ReactComponent as LightBulb } from '../../images/light-bulb.svg';

class DrawerComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      userInput: null,
      showSuggestions: false,
      filteredSuggestions: [],
      openDrawer: false,
      chosenWord: null,
    };
  }
  //LOAD THE GLOSSARY DICTIONARY
  static defaultProps = {
    suggestions: words,
  };



  onChange = (e) => {
    const { suggestions } = this.props;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.term.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.target.value,
    });
  };

  onClick = (e) => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
      chosenWord: e.currentTarget.innerText,
    });
   
  };

  toggleDrawer = () => {
    this.setState({openDrawer: !this.state.openDrawer});
  }

  render() {
    const {
      onChange,
      onClick,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
        
              let path = "/Glossary/" + suggestion.term.toLowerCase();
              return (
                <li
                  className="bg-white rounded w-full h-20 my-4 p-2 font-semibold "
                  key={suggestion.term}
                  onClick={onClick}
                >
                    {suggestion.term}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>Nothing found, check your spelling.</em>
          </div>
        );
      }
    } else {
      suggestionsListComponent = (
        <div className="w-full justify-center flex-row bg-gray-500 flex items-center my-20 rounded shadow">

       
          <div className="h-24 w-24 mx-4 rounded-full shadow-focus overflow-hidden m-8 bg-white">
          <img src={alligatorhead} className="mt-2" style={{height: 90, objectFit:"cover"}}/>
         
          </div>
          <p className="font-semibold text-white text-3xl">Here to<br/>help :)</p>
        </div>
      );
    }
    const expandedDefinition = (text) => {
      const defstyle = this.state.chosenWord
      ? "bg-gray-200 w-full h-auto shadow content-start"
      : "hidden";
      return(
        <div className={defstyle}>
          {this.state.chosenWord}
        </div>
      );
    }

    const styling = this.state.openDrawer
      ? "w-80 overflow-x-scroll h-full bg-green-500 p-4 shadow-2xl content-center"
      : "hidden";

    const bgColor = this.state.openDrawer ? "bg-green-500" : "bg-transparent";
    
    return (
        <div className={`mr-2 pt-16 float-right top-0 right-0 absolute h-screen ${bgColor}`} aria-label="Open Menu">
          <div className="flex">
            <svg
                fill="black"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-8 h-8 m-2 pb-2 hover:text-red"
                onClick={() => this.toggleDrawer()}
              >
            {/* <path d="M4 6h16M4 12h16M4 18h16"></path> */}
              <LightBulb fill="white"/>
            </svg>
            <h2 className={`uppercase karla text-white font-semibold text-2xl pt-2 px-2 ${this.state.openDrawer ? 'visible' : 'hidden'}`}>
              Look up a word
            </h2>
          </div>
          <div className={styling}>
            <form className="form" id="addItemForm">
              <input
                autoComplete="off"
                type="text"
                className="input w-full rounded h-10 p-2"
                id="addInput"
                onChange={onChange}
                value={userInput}
              />
            </form>
            {suggestionsListComponent}
            {expandedDefinition}
          </div>
      </div>
    );
  }
}

export default DrawerComponent;
