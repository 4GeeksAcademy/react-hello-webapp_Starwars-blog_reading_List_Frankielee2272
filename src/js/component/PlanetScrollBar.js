import React from "react";
import Planet from "./Planet";

import "../../styles/home.css";

const PlanetScroller = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Planet />
        </div>
      </div>
    </div>
  );
};

export default PlanetScroller;

