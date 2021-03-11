import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './componet/home/Home';
import NoMatch from './componet/nomatch/NoMatch';
import TeamDetails from './componet/teamdetails/TeamDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exa path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team/:teamId">
            <TeamDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
