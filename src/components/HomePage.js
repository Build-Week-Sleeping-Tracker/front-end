import React, { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleIsClicked = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <>
      <h3>Login</h3>
      <Login />
      <h3>Don't have an Account?</h3>
      <Link to="/signup">
        <button onClick={toggleIsClicked}>Sign Up Here!</button>
      </Link>
    </>
  );
};

export default HomePage;
