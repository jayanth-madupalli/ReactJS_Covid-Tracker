import React from "react";
import CountUp from "react-countup";
import "./Cards.css";
const Cards = (props) => {
  return Object.keys(props.data).map((value, key) => {
    return (
      <div className={value + " counter col-md-3 col-6"} key={key}>
        <h5>{value}</h5>
        <h1>
          <CountUp end={props.data[value].data} duration={3} separator="," />
        </h1>
        <p>
          {value !== "Active"
            ? "+[" + props.data[value].new.toLocaleString() + "]"
            : ""}
        </p>
      </div>
    );
  });
};

export default Cards;
