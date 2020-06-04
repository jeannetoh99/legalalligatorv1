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
import CaseSearchResult from './Components/CaseSearchResult/CaseSearchResult';
import { CaseSearchStore } from './mobx-store/CaseSearchStore';
import { observer } from 'mobx-react';

const caseSearchStore = new CaseSearchStore();

class App extends Component {
  render() {
    return (
      <Router>
      <div className="mx-auto flex flex-col w-full h-full">
        <NavBar />
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route path="/" exact={true}
                  render={(props) => (<LandingPage {...props} caseSearchStore={caseSearchStore} />)}  />
              <Route path="/About" exact component={AboutUs} />
              <Route path="/Actions/:id" exact component={PossibleActions} />
              <Route path="/Actions/:id/Details/:id" exact component={ActionDetails} />
              <Route 
                  path="/CaseSearchResults" 
                  exact={true}
                  render={(props) => (<CaseSearchResult {...props} caseSearchStore={caseSearchStore} />)} 
              />
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
App = observer(App);
export default App;
