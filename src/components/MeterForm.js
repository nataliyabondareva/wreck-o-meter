import React from "react";

function Meter(props) {
  return (
    <form onSubmit={props.onSubmit}>
      Hey, do you have Instagram? A billion people do, and it's having a big effect on our planet and its resources. Instagram plays a big role in helping people choose their destinations, these destinations become crowded, rents go up, environment gets damaged - you know the drill. <br/>
      <a href="https://www.instagram.com/insta_wrecked/">@insta_wrecked</a>  <br/>
      <label>
        Enter a capital city:
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
