import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../core/actions";
import { clearAuthToken } from "../../pages/authUtils";

const Logout = ({ onLogout }) => {

  useEffect(() => {
    const handleLogout = () => {
      clearAuthToken();
      onLogout();
    };
    handleLogout();
  }, [onLogout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
