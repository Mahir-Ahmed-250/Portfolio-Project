import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import JobExperiences from "../JobExperiences/JobExperiences/JobExperiences";
import MySkills from "../MySkills/MySkills/MySkills";
import MyProjects from "../MyProjects/MyProjects/MyProjects";
import MyArticles from "../MyArticles/MyArticles/MyArticles";
import ContactMe from "../ContactMe/ContactMe";
import AboutMe from "../AboutMe/AboutMe";
import MyAchievements from "../Achievements/MyAchievements";

const Home = () => {
  return (
    <div className="container">
      <HomeBanner />
      <AboutMe />
      <MyAchievements />
      <JobExperiences />
      <MySkills />
      <MyProjects />
      <MyArticles />
      <ContactMe />
    </div>
  );
};

export default Home;
