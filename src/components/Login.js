// located in the HomePage Component;

import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  //   const [user, setUser] = useState([]);
  const history = useHistory();

  const [serverError, setServerError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    username: yup.string().required("Please enter your username."),
    password: yup.string().required("Please enter your password."),
  });

  useEffect(() => {
    formSchema.isValid(credentials).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [credentials]);

  const inputChange = (e) => {
    e.persist();

    const newFormData = {
      ...credentials,
      [e.target.name]: e.target.value,
    };

    validateChange(e);
    setCredentials(newFormData);
  };

  const userSubmit = (e) => {
    e.preventDefault();

    //     axios
    //       .post("https://webpt15-sleep-tracker-api.herokuapp.com/api/auth/login", credentials)
    //       .then((res) => {
    //         setUser(res.data);
    //         console.log("success", user);
    //         setCredentials({
    //           username: "",
    //           password: "",
    //         });

    //         setServerError(null);
    //       })
    //       .catch((err) => {
    //         setServerError("There has been an error");
    //       });
    //   };
    axios
      .post(
        "https://webpt15-sleep-tracker-api.herokuapp.com/api/auth/login",
        credentials
      )
      .then((res) => {
        console.log("rh: login success: res ", res);
        localStorage.setItem("authToken", res.data.token);
        console.log(
          "rh: Login.js: this is the auth token data",
          res.data.token
        );
        history.push("/protected");
      })
      .catch((err) => {
        console.error("rh: login failed: err:", err.message);
        localStorage.removeItem("authToken");
      });
  };

  return (
    <form onSubmit={userSubmit}>
      {serverError ? <p>{serverError}</p> : null}
      <div>
        <label htmlFor="username">
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formSchema.username}
            onChange={inputChange}
          />
          <Error>
            {errors.username.length > 0 ? <p>{errors.username}</p> : null}
          </Error>
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <Input
            id="password"
            name="password"
            type="text"
            placeholder="Password"
            value={formSchema.password}
            onChange={inputChange}
          />
          <Error>
            {errors.password.length > 0 ? <p>{errors.password}</p> : null}
          </Error>
        </label>
      </div>
      <Button disabled={buttonDisabled}>Login</Button>
    </form>
  );
};

export default Login;

const Input = styled.input`
  border: 3px solid #39869d;
  border-radius: 20px;
  outline: none;
  height: 30px;
  width: 250px;
  font-size: 1.2rem;
  font-family: sans-serif;
  padding: 3px 12px;
  margin: 12px 0px;
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

const Error = styled.div`
  margin: 0px 12px;
  color: red;
`;
