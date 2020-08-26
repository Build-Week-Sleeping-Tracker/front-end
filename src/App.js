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
<<<<<<< HEAD
import NavBar from "./components/NavBar";
=======
import styled from "styled-components";
>>>>>>> e8e29824c144dc93f426e63fa191be28a31a7db1

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  height: 85vh;
  background-color: black;
  padding: 60px 0px;
`;

<<<<<<< HEAD
const Title = styled.div`

  margin: 0px 12px;
  font-size: 24px;
  color: #39869D;

`

=======
>>>>>>> e8e29824c144dc93f426e63fa191be28a31a7db1
function App() {
  return (
    <Router>
      <div className="App">
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
