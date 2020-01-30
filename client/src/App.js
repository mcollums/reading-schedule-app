import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Search from "./pages/Search";
import UserHome from "./pages/UserHome";
import Details from "./pages/Details";
import {Nav} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/user/:id" component={UserHome} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
