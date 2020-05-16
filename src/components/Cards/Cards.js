import React from "react";
import CountUp from "react-countup";
import "./Cards.css";
const Cards = (props) => {
  return Object.keys(props.data).map((value) => {
    return (
      <div className={value + " counter col-lg-2 col-sm-5"}>
        <h5>{value}</h5>
        <h1>
          <CountUp end={props.data[value].data} duration={3} separator="," />
        </h1>
        <p>{value !== "Active" ? "+[" + props.data[value].new + "]" : ""}</p>
      </div>
    );
  });
};

export default Cards;
