
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Navlink,
} from "react-router-dom";

import "./App.css";
import styled from 'styled-components';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";

const Wrapper = styled.div`
    
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  height: 85vh;
  background-color: black;
  padding: 60px 0px;
`;

const Title = styled.div`

  margin: 0px 12px;
  font-size: 24px;
  color: #39869D;

`

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Wrapper>
          <div>
            <Title>
              <h3>Login</h3>
            </Title>
            <div>
              <Login />
            </div>
          </div>
          <div>
            <Title>
              <h3>Register</h3>
            </Title>
            <div>
              <SignUp />
            </div>
          </div>
        </Wrapper>
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
