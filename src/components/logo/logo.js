import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ml4 mb4">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 45 }}
        style={{ height: 125, width: 125 }}
      >
        <div className="Tilt-inner pa3">
          <img
            src={brain}
            alt="A brain and AI combo logo from https://icons8.com"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
