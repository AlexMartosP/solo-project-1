import React from "react";
// Components
import Button from "./Button";
// Icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="header">
      <h1 className="header__heading">Alexander Martos P</h1>
      <div className="header__title">Frontend Developer</div>
      <a className="header__link" href="#">
        alexandermp.website
      </a>
      <div className="header__buttons">
        <Button icon={faEnvelope} text="Email" />
        <Button icon={faLinkedin} text="LinkedIn" bgColor="blue" />
      </div>
    </div>
  );
}

export default Header;
