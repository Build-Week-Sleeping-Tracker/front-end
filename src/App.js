
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

const Wrapper = styled.div`
    
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled.div`

  margin: 0px 12px;
  font-size: 24px;
  color: #282c34;

`

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Sleep Tracker App</h2>
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
