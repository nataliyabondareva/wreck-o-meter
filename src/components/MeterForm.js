import React from "react";

function Meter(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Enter a destination:
        <input
          type="text"
          name="location"
          placeholder="location"
          value={props.location}
          onChange={props.onChange}
        />
      </label>
      <button type="submit">WRECK CHECK</button>
    </form>
  );
}

export default Meter;
