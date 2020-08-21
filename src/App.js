import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navlink,
} from "react-router-dom";

import "./App.css";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Sleep Tracker App</h2>
        </header>
        <Wrapper>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <PrivateRoute exact path="/protected" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>

            {/* <SignUp /> */}
          </div>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
