import React from "react";
import "./CountryTable.css";

const CountryTable = (props) => {
  return (
    <table className="table table-hover tableFixHead">
      <thead className="thead-light">
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        <Rows rows={props.data} />
      </tbody>
    </table>
  );
};

const Rows = (props) => {
  return props.rows.map((row, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.Country}</td>
        <td>{row.TotalConfirmed.toLocaleString()}</td>
        <td>{row.TotalRecovered.toLocaleString()}</td>
        <td>{row.TotalDeaths.toLocaleString()}</td>
      </tr>
    );
  });
};

export default CountryTable;
