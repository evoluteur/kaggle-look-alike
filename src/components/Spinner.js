import React from "react";
import PropTypes from "prop-types";

import "./Spinner.scss";

// HTML & CSS from http://tobiasahlin.com/spinkit/

const Spinner = () => (
  <div className="evol-loading">
    <div className="loading_txt">Loading...</div>
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  </div>
);

export default Spinner;

Spinner.propTypes = {
  message: PropTypes.string,
};
