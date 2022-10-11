import React from "react";

function Details() {
  return (
    <div className="details">
      <div>
        <h2 className="details__heading">About</h2>
        <p className="details__content">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div>
        <h2 className="details__heading">Interests</h2>
        <p className="details__content">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default Details;
