// Component to disply list of columns and info like their min, max, null count...

import React from "react";
import PropTypes from "prop-types";

import "./Stats.scss";

const statNames = ["nulls", "min", "max", "mean", "stdDev"]; //,"total"

const Stats = ({ metadata }) => {
  const columns = metadata.columns;

  const renderFeature = (col) => {
    const colStats = this.props.stats[col.name];
    // TODO: handle types below
    if (["string", "date", "time", "timestamp"].includes(col.type)) {
      return (
        <div>
          <label>nulls</label>
          <span>{colStats.nulls}</span>
        </div>
      );
    } else {
      return statNames.map((sn) => (
        <div key={sn}>
          <label>{sn}</label>
          <span>{colStats[sn]}</span>
        </div>
      ));
    }
  };

  return (
    <div className="Stats">
      {columns.map((c, idx) => (
        <div key={"c" + idx}>
          <h3>
            {c.name} <span>{c.type}</span>
          </h3>
          {renderFeature(c)}
        </div>
      ))}
      <span className="clearer"></span>
    </div>
  );
};

export default Stats;

Stats.propTypes = {
  metadata: PropTypes.object.isRequired,
  stats: PropTypes.object.isRequired,
};
