import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const Login = (props) => {
  //   const [user, setUser] = useState([]);

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
        console.log(res.data.token);
        // props.history.push("/protected");
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
          <div>Username</div>
          <input
            id="username"
            name="username"
            type="text"
            value={formSchema.username}
            onChange={inputChange}
          />
          {errors.username.length > 0 ? <p>{errors.username}</p> : null}
        </label>
      </div>
      <br />
      <br />
      <div>
        <label htmlFor="password">
          <div>Password</div>
          <input
            id="password"
            name="password"
            type="text"
            value={formSchema.password}
            onChange={inputChange}
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </label>
      </div>
      <button disabled={buttonDisabled}>Login</button>
    </form>
  );
};

export default Login;
