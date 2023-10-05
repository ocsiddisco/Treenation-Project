import React from "react";
import scrollTop from "../Images/scrollTop.png";
import { ScrollStyle } from "../Styles/Scroll.style";

export default function Scroll() {
  return (
    <ScrollStyle>
      <div>
        <img
          src={scrollTop}
          alt="scroll-top"
          width="30px"
          height="30px"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        />
      </div>
    </ScrollStyle>
  );
}
