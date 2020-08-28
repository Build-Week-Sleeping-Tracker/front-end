import React, { useState } from "react";

import Login from "./Login";
import styled from "styled-components";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Title>
        <h3>Login</h3>
        <Login />
      </Title>
      <Title>
        <h3>Don't have an Account?</h3>
        <Link to="/signup">
          <Button>Sign Up Here!</Button>
        </Link>
      </Title>
    </>
  );
};

export default HomePage;

const Title = styled.div`
  margin: 0px 12px;
  font-size: 24px;
  font-family: sans-serif;
<<<<<<< HEAD
  color: #39869d;
`;

const Button = styled.button`
  background-color: #39869d;
=======
  color: #39869D;
`;

const Button = styled.button`
  background-color: #39869D;
>>>>>>> 56205a12e8a4fb582b8830132f53b78a3a7f1568
  border-radius: 20px;
  padding: 5px 32px;
  font-size: 1.2rem;
  font-family: sans-serif;
  color: white;
  margin: 24px 0px;
`;
