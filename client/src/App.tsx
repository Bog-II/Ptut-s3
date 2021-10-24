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
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/authentification">Authentification</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/docs">Editer Document</Link>
            </li>
          </ul>
        </nav> */}

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