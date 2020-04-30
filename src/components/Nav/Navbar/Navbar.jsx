import React from "react";
import { connect } from "react-redux";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import * as actions from "../../../core/actions";
import {clearAuthToken} from '../../../pages/authUtils';

const Navbar = ({ isLogged, onLogout }) => {
  const handleLogout = () => {
    clearAuthToken();
    onLogout();
  };
  return (
    <header className={styles.Navbar}>
      <h2 className={styles.Title}>Odil</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Days</Link>
          </li>
          <li>
            <Link to="/access" onClick={isLogged ? handleLogout : null}>
              {isLogged ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
