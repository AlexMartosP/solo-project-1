import React from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <FontAwesomeIcon icon={faTwitterSquare} size="xl" />
      <FontAwesomeIcon icon={faFacebookSquare} size="xl" />
      <FontAwesomeIcon icon={faInstagramSquare} size="xl" />
      <FontAwesomeIcon icon={faGithubSquare} size="xl" />
    </footer>
  );
}

export default Footer;
