import React from "react";
import { Footer } from "../Styles/Footer.style";
import linkedin from "../Images/linkedin-100.png";
import email from "../Images/email-100.png";
import github from "../Images/github-100.png";

export default function FooterLign() {
  return (
    <footer>
      <Footer>
        <div> © Made by Céline</div>
        <div>
          <a href="https://github.com/ocsiddisco/Treenation-Project">
            <img src={github} alt="github" width="60px" height="60px" />
          </a>
          <a href="https://www.linkedin.com/in/celinelecorvaisier/">
            <img src={linkedin} alt="linkedin" width="60px" height="60px" />
          </a>
          <a href="mailto:celine.le.corv@gmail.com">
            <img src={email} alt="email" width="60px" height="60px" />
          </a>
        </div>
      </Footer>
    </footer>
  );
}
