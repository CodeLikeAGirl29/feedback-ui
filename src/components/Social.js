import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <h3>Social Follow</h3>
    <a href="https://www.github.com/codelikeagirl29"
      className="youtube social">
      <FontAwesomeIcon icon={faGithub} size="md" />
    </a>
    <a href="https://www.facebook.com/codelikeagirl91/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="md" />
      </a>
      <a href="https://www.twitter.com/dev_lindseyk" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="md" />
      </a>
      <a href="https://www.stackoverflow.com/users/14072521/lindsey"
        className="stackoverflow social">
        <FontAwesomeIcon icon={faStackOverflow} size="md" />
      </a>
</div>
  );
}