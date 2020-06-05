import React, { useState } from "react";
import { words } from "../Glossary/Words";
import alligatorhead from "./../../images/alligatorhead.jpg"
import { ReactComponent as LightBulb } from '../../images/light-bulb.svg';

class DrawerComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
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
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.target.value,
    });
  };

  onClick = (term, id) => {
    // Update the user input and reset the rest of the state
    this.setState({
      filteredSuggestions: [words[id-1]],
      showSuggestions: true,
      userInput: term,
      chosenWord: id,
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
              return (
                <li
                  className="bg-white rounded w-full my-4 p-2 text-left"
                  key={suggestion.term}
                  onClick={() => onClick(suggestion.term, suggestion.id)}
                >
                    <h1 className="capitalize font-semibold">{suggestion.term}</h1>
                    <p className="font-semibold text-xs text-gray-800"><i>{suggestion.definition}</i></p>
                    <p className="font-medium text-xs text-gray-800">{suggestion.brief_description}</p>
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
    } 

    const styling = this.state.openDrawer
      ? "w-80 overflow-x-scroll bg-green-500 p-4 shadow-2xl content-center"
      : "hidden";

    const bgColor = this.state.openDrawer ? "bg-green-500" : "bg-transparent";
    
    return (
        <div className={`h-auto fixed ${bgColor} z-20`} aria-label="Open Menu">
          <div className="fixed top-0 right-0">
          <div className={`pt-4 flex ${bgColor}`}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default DrawerComponent;
