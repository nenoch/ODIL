import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./AuthPage.module.css";
import { parseAuthToken } from "../authUtils";

const apiUrl = process.env.REACT_APP_API_URL;

const AuthPage = ({onLogin}) => {
  const history = useHistory();
  const defaultInput = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState(defaultInput);

  useEffect(() => {
    setInput(input);
  }, [input]);

  const handleChangeField = (key, event) => {
    setInput({
      ...input,
      [key]: event.target.value,
    });
  };

  const handleLogin = async (input) => {
    const { username, password } = input;
    const res = await axios.post(
      `${apiUrl}/login`,
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
        <button className="Button" onClick={() => handleLogin(input)}>
          Login
        </button>
      </div>{" "}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch({ type: "LOGIN", data }),
});

export default connect(null, mapDispatchToProps)(AuthPage);
