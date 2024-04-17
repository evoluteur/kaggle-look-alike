import React from "react";
import PropTypes from "prop-types";
import { CloudDownload, ViewModule, Label } from "@material-ui/icons";

import "./TitleBar.scss";

const TitleBar = ({ name, count, url, toggleViewFunc, view }) => (
  <div className="TitleBar">
    <h1>
      {name + " "}
      <span>{count}</span>
    </h1>
    <div className="topIcons">
      {view === "table" ? (
        <Label onClick={toggleViewFunc} />
      ) : (
        <ViewModule onClick={toggleViewFunc} />
      )}
      <a href={url} target="_new">
        <CloudDownload />
      </a>
    </div>
  </div>
);

export default TitleBar;

TitleBar.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  toggleViewFunc: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};
