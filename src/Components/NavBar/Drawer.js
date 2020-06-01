import React, { useState } from "react";
import { words } from "../Glossary/Words";

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      userInput: null,
      showSuggestions: false,
      filteredSuggestions: [],
    };
  }
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
    });
  };

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
            <em>Nothing found, try again.</em>
          </div>
        );
      }
    }

    const styling = this.props.openDrawer
      ? "navbar w-80 absolute overflow-x-scroll bg-green-500 top-0 right-0 h-screen p-4 shadow-2xl"
      : "hidden";

    return (
      <div className={styling}>
        <h2 className="uppercase karla text-white font-semibold text-2xl py-2">
          Look up a word
        </h2>
        <form className="form" id="addItemForm">
          <input
            autoComplete="off"
            type="text"
            className="input w-full rounded h-10"
            id="addInput"
            onChange={onChange}
            value={userInput}
          />
        </form>
        {suggestionsListComponent}
      </div>
    );
  }
}

export default DrawerComponent;
