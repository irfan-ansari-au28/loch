import React from "react";
import Eye from "../UI/icons/Eye";
import cohort from "../../assets/img/cohort.png";

const FeatureSection = () => {
  return (
    <div className="feature-section justify-bet-align-start ">
      <div className="image-container">
        <img src={cohort} alt="cohort" className="image" />
      </div>
      <div className="feature-right-wrap">
        <Eye />
        <div className="feature-info-heading">
          Watch what the whales are doing
        </div>
        <div className="feature-info-text">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
