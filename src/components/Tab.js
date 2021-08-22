import React from "react";
import "./tabs.css";

function Tab(props) {
  return (
    <>
      <div className="ttabs">
        <div>{props.title}</div>
        <div>{props.icon}</div>
      </div>
    </>
  );
}

export default Tab;
