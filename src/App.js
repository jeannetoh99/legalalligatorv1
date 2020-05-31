import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutUs from "./Components/Pages/AboutUs";
import PossibleActions from "./Components/PossibleActions/PossibleActions";
import UsefulLinks from "./Components/Pages/UsefulLinks";
import Glossary from "./Components/Pages/Glossary";
import ActionDetails from "./Components/PossibleActions/ActionDetails";
import CaseSearchResults from "./Components/CaseSearchResult/CaseSearchResult";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="mx-auto flex flex-col w-full h-full">
        <NavBar />
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route path="/" exact component={LandingPage} />
              <Route path="/About" exact component={AboutUs} />
              <Route path="/Actions/:id" exact component={PossibleActions} />
              <Route path="/Actions/:id/Details/:id" exact component={ActionDetails} />
              <Route path="/CaseSearchResults" exact component={CaseSearchResults} />
              <Route path="/Useful-Links" exact component={UsefulLinks} />
              <Route path="/Glossary" exact component={Glossary} />
            </Switch>
          )}
        />
      </div>
    </Router>
    );
  }
}

export default App;
