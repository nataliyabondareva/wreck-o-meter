import React from "react";

function WreckDisplay(props) {
  return (
    <div className="WreckDisplay">
      <p>
        <br />
        This location's wreck score is {props.wreck.wreck > 100 ? 'HIGH' : props.wreck.populationDensity < 400 ? 'LOW. Enjoy!' : 'LOW. But its still pretty crowded - beware!'} <br/>
        {/* But wait! It's still pretty crowded. Population density: {props.wreck.populationDensity} */}
      </p>
    </div>
  );
}

export default WreckDisplay;
