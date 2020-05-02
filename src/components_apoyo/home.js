import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Servicios from "./servicios";
import Settings from "./settings";
import User from "./user";



export default function BasicExample() {
  return (
    <Router>
      <div class="container">
        <div class="row">
          <ul>
            <Link to="/"> Home </Link>
            <Link to="/settings"> settings </Link>
          </ul>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Servicios />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/users/:id" exact>
          <User />
        </Route>
      </Switch>

    </Router>
  );
}

