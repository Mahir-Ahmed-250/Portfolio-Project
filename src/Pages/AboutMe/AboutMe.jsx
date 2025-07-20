import React from "react";
import Title from "../../Components/Title/Title";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../Assets/AboutMe.json";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <Title title="About" title2="Me" />
      <div className="AboutMeContainer">
        <Player autoplay loop src={animationData} />
        <p className="AboutMedescription">
          Microsoft Certified Data Analyst with 4 years of experience in Power
          BI, SQL, SSRS, Snowflake, and Microsoft Fabric. Proficient in data
          analytics, data mining, data warehousing, and data governance, with
          hands-on expertise in database design, integration, and ETL. Delivers
          actionable insights and scalable BI solutions for ERP and MIS systems
          across the pharmaceutical and FMCG sectors. Strong in problem-solving,
          performance optimization, and global client collaboration.
        </p>
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default AboutMe;
