import React from "react";

function Meter(props) {
  return (
    <>
    <div className="title"><strong>WRECK-O-METER</strong></div>
    <div class="body">
    <div class="explanation">
      Hey, do you have Instagram? A billion people do, and it's having a big
      effect on our planet and its resources. Instagram is playing a greater and greater role in
      helping people choose their destinations, these destinations become
      crowded, rents go up, environment gets damaged - you know the drill.{" "}
    </div>
    <br />
    <div class="links">
      <a href="https://www.seattletimes.com/life/outdoors/piles-of-poop-litter-on-trails-trampled-wildflowers-in-the-social-media-era-washingtons-public-lands-are-being-destroyed-what-can-be-done/">
        The Seattle Times article on this
      </a>
      <br/>
      <a href="https://www.instagram.com/insta_wrecked/">@insta_wrecked</a><br/>
      So before you go on a trip, why not check whether you'll be contributing to this and make your choice responsibly?
    </div></div>
    <form className="form" onSubmit={props.onSubmit}>
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
    </>
  );
}

export default Meter;
