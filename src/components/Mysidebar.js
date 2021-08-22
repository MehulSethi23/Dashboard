import React from "react";
import "./mysidebar.css";
import Tab from "./Tab";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function Mysidebar() {
  return (
    <div className="panel">
      <div class="container">
        <ul>
          <li>
            <Tab
              title="Home"
              icon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
            ></Tab>
          </li>
          <li>
            <Tab
              title="Profile"
              icon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
            ></Tab>
          </li>
          <li>
            <Tab
              title="Messages"
              icon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
            ></Tab>
          </li>
          <li>
            <Tab
              title="Settings"
              icon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
            ></Tab>
          </li>
          <li>
            <Tab
              title="Help"
              icon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
            ></Tab>
          </li>
          <li>
            <Tab
              title="Password"
              icon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
            ></Tab>
          </li>
          <li>
            <Tab
              title="Sign-Out"
              icon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
            ></Tab>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mysidebar;
