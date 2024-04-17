// Bar charts component

import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

import "./Bars.scss";

const Bars = ({ data }) => {
  if (data) {
    const maxSize = d3.max(data);
    return (
      <div className="Bars">
        {data.map((b, idx) => (
          <div
            key={"b" + idx}
            style={{
              left: idx * 10 + "px",
              height: parseInt(100 * (b / maxSize)) + "px",
            }}
            title={b}
          ></div>
        ))}
      </div>
    );
  } else {
    return <div className="NoBars">N/A</div>;
  }
};

export default Bars;

Bars.propTypes = {
  data: PropTypes.array,
};
