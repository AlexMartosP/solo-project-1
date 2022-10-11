import React from "react";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
  return (
    <button
      className={`button ${props.bgColor ? `button--${props.bgColor}` : ""}`}
    >
      <FontAwesomeIcon icon={props.icon} size="sm" />
      <span className="button__text">{props.text}</span>
    </button>
  );
}

export default Button;
