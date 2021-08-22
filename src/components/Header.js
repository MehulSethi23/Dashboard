import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="top">
        <div className="left">
          <div className="name">Name</div>
          <div className="search">Search</div>
        </div>

        <div className="right">
          <button></button>
          <button className="centerbutton"></button>
          <button></button>
        </div>
      </div>
    </>
  );
}

export default Header;
