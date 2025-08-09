import React from "react";
import "./LoadingSkeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-xl-4">
        <div className="loadingCards">
          <div className="loadingCardsImage"></div>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="loadingCards">
          <div className="loadingCardsImage"></div>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="loadingCards">
          <div className="loadingCardsImage"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
