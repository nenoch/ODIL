import React from "react";
import { connect } from "react-redux";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ isLogged }) => {
  return (
    <header className={styles.Navbar}>
      <h2 className={styles.Title}>Odil</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Days</Link>
          </li>
          <li>
            {isLogged ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/access">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

export default connect(mapStateToProps, null)(Navbar);
