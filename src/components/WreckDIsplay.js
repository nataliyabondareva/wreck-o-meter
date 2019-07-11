import React from "react";

function WreckDisplay(props) {
  return (
    <div className="WreckDisplay">
      <p>
        <br />
        This location's wreck score is{" "}
        {props.wreck.wreck > 100
          ? "HIGH"
          : props.wreck.populationDensity < 400
          ? "LOW. Have fun!"
          : "LOW. But just so you know, its still pretty crowded!"}{" "}
        <br />
      </p>
    </div>
  );
}

export default WreckDisplay;
