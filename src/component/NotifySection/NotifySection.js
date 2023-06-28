import React from "react";
import CardList from "../CardList/CardList";
import BellIcon from "../UI/icons/BellIcon";

const NotifySection = () => {
  return (
    <div className="notify-section flex-center">
      <div className="notify-left-wrap">
        <BellIcon />
        <div className="notify-info-heading">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="notify-info-text">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.{" "}
        </div>
      </div>
      <div className="notify-right-wrap ">
        <div className="left"></div>
        <CardList></CardList>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default NotifySection;
