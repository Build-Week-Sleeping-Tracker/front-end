
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Navlink,
} from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Sleep Tracker App</h2>
          <div>
            <h3>Login</h3>
            <Login />
            <br />
            <br />
            <br />
            <h3>Sign-Up</h3>
            <SignUp />
          </div>
        </header>
        <Switch>
          <Route exact path="/" />
          <PrivateRoute exact path="/protected" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
