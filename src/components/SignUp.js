import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

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
          <div>First Name</div>
          <input
            id="firstName"
            name="fname"
            type="text"
            value={credentials.fname}
            onChange={inputChange}
          />
          {errors.fname.length > 0 ? <p>{errors.fname}</p> : null}
        </label>
      </div>
      <br />
      <br />
      <div>
        <label htmlFor="lastName">
          <div>Last Name</div>
          <input
            id="lastName"
            name="lname"
            type="text"
            value={credentials.lname}
            onChange={inputChange}
          />
          {errors.lname.length > 0 ? <p>{errors.lname}</p> : null}
        </label>
      </div>
      <br />
      <br />
      <div>
        <label htmlFor="email">
          <div>Email</div>
          <input
            id="email"
            name="email"
            type="email"
            value={credentials.email}
            onChange={inputChange}
          />
          {errors.email.length > 0 ? <p>{errors.email}</p> : null}
        </label>
      </div>
      <br />
      <br />
      <div>
        <label htmlFor="username">
          <div>Create a Username</div>
          <input
            id="username"
            name="username"
            type="text"
            value={credentials.username}
            onChange={inputChange}
          />
          {errors.username.length > 0 ? <p>{errors.username}</p> : null}
        </label>
      </div>
      <br />
      <br />
      <div>
        <label htmlFor="password">
          <div>Create a Password</div>
          <input
            id="password"
            name="password"
            type="text"
            value={credentials.password}
            onChange={inputChange}
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </label>
      </div>
      <button disabled={buttonDisabled}>Sign Up</button>
    </form>
  );
};

export default SignUp;
