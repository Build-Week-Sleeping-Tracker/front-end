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
  color: #39869d;
`;

const Button = styled.button`
  background-color: #39869d;
  border-radius: 20px;
  padding: 5px 32px;
  font-size: 1.2rem;
  font-family: sans-serif;
  color: white;
  margin: 24px 0px;
`;
