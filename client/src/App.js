import React from "react";
import './App.scss';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Search from "./pages/Search";
import UserHome from "./pages/UserHome";
import Add from "./pages/Add";
import Details from "./pages/Details";
import Featured from "./pages/Featured";

import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
      <Navbar id="main-nav">
      <Navbar.Brand>
        <Link to="/">NAVBAR</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/"> Home </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/featured"> Featured </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/login"> Login </Link>
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/featured" component={Featured} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/user/:id" component={UserHome} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
