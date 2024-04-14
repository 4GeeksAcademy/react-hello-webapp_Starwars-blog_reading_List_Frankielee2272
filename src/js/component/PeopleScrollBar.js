import React from "react";
import People from "./People";

import "../../styles/home.css";

const PeopleScroller = () => {
  return (
    <div className="container">
      <div className="">
        <div className="">
          <People />
        </div>
      </div>
    </div>
  );
};

export default PeopleScroller;
