import React from "react";
import "./mainbody.css";
import Content from "./Content";
import Mysidebar from "./Mysidebar";

function Mainbody() {
  return (
    <>
      <div className="total">
        <Mysidebar></Mysidebar>
        <Content></Content>
      </div>
    </>
  );
}

export default Mainbody;
