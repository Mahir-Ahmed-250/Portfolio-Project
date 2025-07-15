import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import WhoIAm from "../WhoIAm/WhoIAm";
import JobExperiences from "../JobExperiences/JobExperiences/JobExperiences";

const Home = () => {
  return (
    <div className="container">
      <HomeBanner />
      <WhoIAm />
      <JobExperiences />
    </div>
  );
};

export default Home;
