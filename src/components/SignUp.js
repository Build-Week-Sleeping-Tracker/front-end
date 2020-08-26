import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components';

const Input = styled.input`

    border: 3px solid #39869D;
    border-radius: 20px;
    outline: none;
    height: 30px;
    width: 250px;
    font-size: 1.2rem;
    padding: 3px 12px;
    margin: 12px 0px;
`

const Button = styled.button`

    background-color: #39869D;
    border-radius: 20px; 
    padding: 5px 32px;
    font-size: 1.2rem;
    color: white;
    margin: 24px 0px;

`

const Error = styled.div`

    margin: 0px 12px;
    color: red;
`

const SignUp = () => {
  const [user, setUser] = useState([]);

  const [serverError, setServerError] = useState("");

  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
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
    fname: yup.string().required("Please enter your first name."),
    lname: yup.string().required("Please enter your last name."),
    email: yup.string().required("Please enter a valid email address."),
    username: yup.string().required("Create a username."),
    password: yup.string().required("Create a password."),
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

    axios
      .post(
        "https://webpt15-sleep-tracker-api.herokuapp.com/api/auth/register",
        credentials
      )
      .then((res) => {
        setUser(res.data);
        console.log("success", user);
        setCredentials({
          fname: "",
          lname: "",
          email: "",
          username: "",
          password: "",
        });

        setServerError(null);
      })
      .catch((err) => {
        console.error("your signup has failed", err.message);
      });
  };

  return (
    <form onSubmit={userSubmit}>
      {serverError ? <p>{serverError}</p> : null}
      <div>
        <label htmlFor="firstName">
          <Input
            id="firstName"
            name="fname"
            type="text"
            placeholder="First Name"
            value={credentials.fname}
            onChange={inputChange}
          />
          <Error>{errors.fname.length > 0 ? <p>{errors.fname}</p> : null}</Error>
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          <Input
            id="lastName"
            name="lname"
            type="text"
            placeholder="Last Name"
            value={credentials.lname}
            onChange={inputChange}
          />
          <Error>{errors.lname.length > 0 ? <p>{errors.lname}</p> : null}</Error>
        </label>
      </div>
      <div>
        <label htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={inputChange}
          />
          <Error>{errors.email.length > 0 ? <p>{errors.email}</p> : null}</Error>
        </label>
      </div>
      <div>
        <label htmlFor="username">
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={inputChange}
          />
          <Error>{errors.username.length > 0 ? <p>{errors.username}</p> : null}</Error>
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <Input
            id="password"
            name="password"
            type="text"
            placeholder="Password"
            value={credentials.password}
            onChange={inputChange}
          />
          <Error>{errors.password.length > 0 ? <p>{errors.password}</p> : null}</Error>
        </label>
      </div>
      <Button disabled={buttonDisabled}>Sign Up</Button>
    </form>
  );
};

export default SignUp;
