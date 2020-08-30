import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  height: 64.5vh;
  width: 100%;
  background-color: black;
  padding: 60px 0px;
`;

function App() {
  return (
    <Router>
      <div>
        <header>
          <NavBar />
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
