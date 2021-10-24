import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Authentification from "./pages/Authentification";
import Docs from "./pages/Docs";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/authentification">
            <Authentification />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}