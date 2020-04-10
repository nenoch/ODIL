import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className={styles.Navbar}>
      <h2 className={styles.Title}>Odil</h2>
      <nav>
        <ul>
          <li><Link to="/">Days</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
  </header>
);

export default Navbar;
