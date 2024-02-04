import React from "react";
import "./Section.css";

export default function Section1() {
  return (
    <div className="section-1">
      <img src="images/section1-banner.jpg" alt="Background"></img>
      <div>
        <h1>
          "It's not at all important to get it right the first time. It's
          vitally important to get it right the last time."
        </h1>
      </div>
    </div>
  );
}

export function Section2() {
  return (
    <div className="section-2">
      <h1>
        "The web is like a canvas, and code is the paint. Create your
        masterpiece."
      </h1>
    </div>
  );
}
