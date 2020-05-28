import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import FooterComp from "./Components/FooterComp";
import AboutUs from "./Components/Pages/AboutUs";
import PossibleActions from "./Components/Pages/PossibleActions";
import UsefulLinks from "./Components/Pages/UsefulLinks";
import Glossary from "./Components/Pages/Glossary";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="mx-auto flex flex-col w-screen h-full">
        <NavBar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/About" exact component={AboutUs} />
                  <Route path="/Actions" exact component={PossibleActions} />
                  <Route path="/Useful-Links" exact component={UsefulLinks} />
                  <Route path="/Glossary" exact component={Glossary} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <FooterComp />
      </div>
    </Router>
    );
  }
}

export default App;
