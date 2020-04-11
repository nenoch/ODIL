import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./AuthPage.module.css";

const apiUrl = process.env.REACT_APP_API_URL;

const AuthPage = () => {
  const history = useHistory();
  const defaultUser = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState(defaultUser);

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
    setInput(defaultUser);
    console.log("res", res.data);
    localStorage.setItem("auth-token", res.data.token);
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

export default AuthPage;
