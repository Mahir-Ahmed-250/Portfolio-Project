import React from "react";
import Title from "../../Components/Title/Title";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../Assets/Person.json";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <Title title="About" title2="Me" />
      <div className="AboutMeContainer" id="about">
        <Player autoplay loop src={animationData} />
        <p
          className="AboutMeDescription"
          data-aos="flip-right"
          data-aos-offset="500"
          data-aos-delay="80"
          data-aos-duration="2000">
          📊 Business Intelligence & Data Visualization I design and build
          insightful dashboards using Power BI, delivering actionable metrics,
          KPIs, and drill-down analytics for business stakeholders.
          <br />
          <br />
          🛠 ETL & Data Engineering I develop scalable ETL/ELT pipelines using
          SSIS, Python, and Azure Data Factory, and integrate seamlessly with
          modern data platforms like Microsoft Fabric and Snowflake.
          <br />
          <br />
          🧠 Data Analysis & Forecasting I perform in-depth data analysis using
          SQL, DAX, Pandas, and Python, including predictive analytics and trend
          forecasting for strategic planning.
          <br />
          <br />
          ☁ Cloud-Based Data Solutions I work with Microsoft Azure services
          including Fabric, Synapse Analytics, and Data Lake, as well as
          Snowflake to build modern, cloud-native analytics solutions.
          <br />
          <br />
          🧱 Data Modeling & Architecture I design robust star/snowflake
          schemas, dimensional models, and database architectures to support
          high-performance analytics and enterprise reporting systems.
        </p>
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default AboutMe;
