import React from "react";
import PropTypes from "prop-types";
import Bars from "./Bars";

import "./Table.scss";

export default class Table extends React.PureComponent {
  render() {
    const props = this.props;
    const showAllRows = props.showAllRows;
    const data = showAllRows ? props.data : props.data.slice(0, 200);
    const stats = props.stats;
    const metadata = props.metadata;
    const columns = metadata.columns;
    const sorting = props.sorting;

    return (
      <React.Fragment>
        <table className="Table">
          <thead>
            <tr className="rowLabels">
              {columns.map((c, idx) => (
                <th
                  id={c.name}
                  key={"c" + idx}
                  className={
                    c.type === "integer" || c.type === "decimal"
                      ? "rightAlign"
                      : ""
                  }
                  onClick={props.sortFunc}
                >
                  <div>{c.name}</div>
                </th>
              ))}
            </tr>
            <tr className="rowHisto">
              {columns.map((c, idx) => (
                <td key={"c" + idx}>
                  <Bars data={stats[c.name].hist} />
                </td>
              ))}
            </tr>
          </thead>
          <tbody className={sorting ? "hidden" : ""}>
            {data.map((d, idx) => (
              <tr key={"r" + idx}>
                {columns.map((c, idx) => (
                  <td
                    key={"c" + idx}
                    className={
                      c.type === "integer" || c.type === "decimal"
                        ? "rightAlign"
                        : ""
                    }
                  >
                    {d[c.name]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {showAllRows || data.length === props.data.length ? null : (
          <div className="showMore">
            Currently showing {data.length} rows.
            <span className="fakeLink" onClick={props.removeSizeLimitFunc}>
              Show all {props.data.length} rows
            </span>
          </div>
        )}
      </React.Fragment>
    );
  }

  showAll = () => {
    this.setState({
      showAllRows: true,
    });
  };
}

Table.propTypes = {
  metadata: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  stats: PropTypes.object,
  sortFunc: PropTypes.func.isRequired,
  removeSizeLimitFunc: PropTypes.func.isRequired,
  lastSort: PropTypes.string,
  showAllRows: PropTypes.bool,
};
