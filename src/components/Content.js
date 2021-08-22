import React from "react";
import "./content.css";
import newim from "./bar.png";
import npie from "./pie.png";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TelegramIcon from "@material-ui/icons/Telegram";

function Content() {
  return (
    <>
      <div className="all">
        <div className="dash">
          <div>
            <b>DashBoard</b>
          </div>
        </div>
        <div className="topp">
          {/* 305, 100 */}
          <div class="polaroid">
            <div className="views">
              <div>Views Today</div>
              <VisibilityIcon />

              <div>18090</div>
            </div>
          </div>
          <div class="polaroid">
            <div className="nusers">
              <div>New Users</div>
              <GroupAddIcon />
              <div>749</div>
            </div>
          </div>
          <div class="polaroid">
            <div className="norders">
              <div>New Orders</div>
              <ShoppingBasketIcon></ShoppingBasketIcon>

              <div>3210</div>
            </div>
          </div>
          <div class="polaroid">
            <div className="torders">
              <div>Total Orders</div>
              <TelegramIcon></TelegramIcon>

              <div>47318</div>
            </div>
          </div>
        </div>
        <div className="middle">
          {/* 280 280 987 310 */}
          <div class="polaroid">
            <img src={newim} width="987px" height="440px"></img>
          </div>
          <div class="polaroid">
            <div className="middleleft">
              <img src={npie} width="280px" height="280px"></img>
              <button className="btn">Show More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
