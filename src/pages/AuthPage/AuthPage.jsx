import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./AuthPage.module.css";
import { parseAuthToken } from "../authUtils";
import * as actions from "../../core/actions";

const apiUrl = process.env.REACT_APP_API_URL;

const AuthPage = ({ onLogin }) => {
  const history = useHistory();
  const defaultInput = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState(defaultInput);
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    setInput(input);
  }, [input]);

  const handleChangeField = (key, event) => {
    setInput({
      ...input,
      [key]: event.target.value,
    });
  };

  const handleAuth = async (input) => {
    const { username, password } = input;
    const urlPath = isSignup ? "users": "login";
    const res = await axios.post(
      `${apiUrl}/${urlPath}`,
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("auth-token", res.data.token);
    onLogin(parseAuthToken());
    history.push("/");
  };

  const handleSignup = () => {
    setIsSignup(!isSignup);
  };

  const { username, password } = input;

  return (
    <div className={styles.Content}>
      <div className={styles.FormContainer}>
        <input
          className={styles.Field}
          onChange={(e) => handleChangeField("username", e)}
          value={username}
          placeholder="Username"
        />
        <input
          className={styles.Field}
          onChange={(e) => handleChangeField("password", e)}
          value={password}
          placeholder="Password"
        />
        <button className="Button" onClick={() => handleAuth(input)}>
          {isSignup ? "Sign up": "Login"}
        </button>
        <button className={styles.Switch} onClick={() => handleSignup()}>switch to {isSignup ? "LOGIN": "SIGN UP"}</button>
      </div>{" "}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(actions.login(data)),
});

export default connect(null, mapDispatchToProps)(AuthPage);
