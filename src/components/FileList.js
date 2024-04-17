// Component for navigating files (left nav bar)

import React from "react";
import PropTypes from "prop-types";

import "./FileList.scss";

const FileList = ({ files, selectedIdx, clickFile, loading }) => (
  <div className="FileList">
    <div className="dataExplo fTitle">Data Explorer</div>
    <div className="fileCount fTitle"> {files.length + " files"}</div>
    {files?.map((f, idx) => (
      <div
        key={f.name}
        id={idx}
        className={idx === selectedIdx ? "selected" : ""}
        onClick={loading ? null : clickFile}
      >
        {f.name}
      </div>
    ))}
    <br />
    <br />
    <iframe
      title="GitHub"
      src="https://ghbtns.com/github-btn.html?user=evoluteur&type=star&count=true&size=small&repo=kaggle-look-alike"
      frameBorder="0"
      scrolling="0"
      width="100px"
      height="30px"
    ></iframe>
  </div>
);

export default FileList;

FileList.propTypes = {
  files: PropTypes.array.isRequired,
  selectedIdx: PropTypes.number.isRequired,
  clickFile: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
