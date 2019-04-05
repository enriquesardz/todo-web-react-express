import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Root</Link>
      <span> </span>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export const ConnectedNavigation = connect(state => state)(Navigation);
