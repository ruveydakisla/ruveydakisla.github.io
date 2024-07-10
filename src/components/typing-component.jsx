import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ReactTyped } from "react-typed";
export default function Typingcomponent() {
  return (
    <span>
      <ReactTyped
        typeSpeed={60}
        className="text-[2em]"
        strings={["Coder", "Junior Software Developer"]}
        loop
      />
    </span>
  );
}
