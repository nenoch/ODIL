import React, { useState, useEffect } from "react";
// import axios from "axios";
import styles from "./AuthPage.module.css";

const AuthPage = () => {

  const defaultUser = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState(defaultUser);

  useEffect(() => {
    setInput(defaultUser);
  }, []);

  const handleChangeField = (key, event) => {
    setInput({
      ...input,
      [key]: event.target.value,
    });
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
        <button className="Button" onClick={() => alert(input)}>
          Login
        </button>
      </div>{" "}
    </div>
  );
};

export default AuthPage;
