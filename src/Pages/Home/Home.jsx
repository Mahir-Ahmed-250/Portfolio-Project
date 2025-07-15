import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import WhoIAm from "../WhoIAm/WhoIAm";
import JobExperiences from "../JobExperiences/JobExperiences/JobExperiences";
import MySkills from "../MySkills/MySkills/MySkills";

const Home = () => {
  return (
    <div className="container">
      <HomeBanner />
      <WhoIAm />
      <JobExperiences />
      <MySkills />
    </div>
  );
};

export default Home;
