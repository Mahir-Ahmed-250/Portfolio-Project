import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import WhoIAm from "../WhoIAm/WhoIAm";
import JobExperiences from "../JobExperiences/JobExperiences/JobExperiences";
import MySkills from "../MySkills/MySkills/MySkills";
import MyProjects from "../MyProjects/MyProjects/MyProjects";
import MyArticles from "../MyArticles/MyArticles/MyArticles";
import ContactMe from "../ContactMe/ContactMe";

const Home = () => {
  return (
    <div className="container">
      <HomeBanner />
      <WhoIAm />
      <JobExperiences />
      <MySkills />
      <MyProjects />
      <MyArticles />
      <ContactMe />
    </div>
  );
};

export default Home;
