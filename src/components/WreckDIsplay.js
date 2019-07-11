import React from "react";

function WreckDisplay(props) {
  return (
    <div className="WreckDisplay">
      <p>{props.wreck.wreck}<br/>{props.wreck.populationDensity}</p>
    </div>
  );
}

export default WreckDisplay;
