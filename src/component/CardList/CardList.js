import React from "react";
import Card from "../UI/card/Card";
import BarChart from "../UI/icons/BarChart";
import BellDarkIcon from "../UI/icons/BellDarkIcon";
import CheckMark from "../UI/icons/CheckMark";
import Clock from "../UI/icons/Clock";
import TriangleDown from "../UI/icons/TriangleDown";

const CardList = () => {
  return (
    <div className="banner">
      <Card>
        <div className="card-icon-wrap  justify-bet-align-start">
          <BellDarkIcon />
          <p className="card-text-right">Save</p>
        </div>
        <div className="card-heading">
          We’ll be sending notifications to you here
        </div>
        <div className="card-input">
          <div className="input-text">hello@gmail.com</div>
        </div>
      </Card>
      <div className="card card-2">
        <div className="card-icon-wrap  justify-bet-align-start">
          <BarChart />
          <CheckMark></CheckMark>
        </div>
        <div className="card2-heading">
          Notify me when any wallets move more than $1,000.00
        </div>
        <div className="card-filter">
          <div className="filter-text">$1,000.00</div>
          <TriangleDown />
        </div>
      </div>
      <div className="card card-3">
        <div className="card-icon-wrap  justify-bet-align-start">
          <Clock />
          <CheckMark></CheckMark>
        </div>
        <div className="card3-heading">
          Notify me when any wallet dormant for
        </div>
        <div className="card-filter2">
          <div className="filter-text">{">"} 30 days</div>
          <TriangleDown />
        </div>
        <div className="card3-text">becomes active</div>
      </div>
      <Card>
        <div className="card-icon-wrap  justify-bet-align-start">
          <BellDarkIcon />
          <p className="card-text-right">Save</p>
        </div>
        <div className="card-heading">
          We’ll be sending
          <br /> notifications to you here
        </div>
        <div className="card-input">
          <div className="input-text">hello@gmail.com</div>
        </div>
      </Card>
      <div className="card card-2">
        <div className="card-icon-wrap  justify-bet-align-start">
          <BarChart />
          <CheckMark></CheckMark>
        </div>
        <div className="card2-heading">
          Notify me when any wallets move more than $1,000.00
        </div>
        <div className="card-filter">
          <div className="filter-text">$1,000.00</div>
          <TriangleDown />
        </div>
      </div>
      <div className="card card-3">
        <div className="card-icon-wrap  justify-bet-align-start">
          <Clock />
          <CheckMark></CheckMark>
        </div>
        <div className="card3-heading">
          Notify me when any wallet dormant for
        </div>
        <div className="card-filter2">
          <div className="filter-text">{">"} 30 days</div>
          <TriangleDown />
        </div>
        <div className="card3-text">becomes active</div>
      </div>
    </div>
  );
};

export default CardList;
