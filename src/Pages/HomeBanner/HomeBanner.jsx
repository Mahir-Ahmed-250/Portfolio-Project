import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import Img from "../../Assets/Banner.jpg";
import Title from "../../Components/Title/Title";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <>
      <div className="homeContainer" id="home">
        <div>
          <Title title="Learn BI with" title2="Tushar" />

          <p className="homeTypeWriter">
            <Typewriter
              words={[
                "Microsoft Certified Data Analyst",
                "Data Engineer",
                "Data Enthusiast",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="homeDescription">
            I’m Mehedi Hasan Tushar, a Microsoft Certified Data Analyst and Data
            Engineer with 4+ years of industry experience turning raw data into
            powerful business decisions through compelling visuals and
            intelligent automation.
            <br />
            <br />
            Currently working at GhorerBazar BD, I specialize in building
            scalable data architectures, automating ETL pipelines, and
            developing end-to-end BI solutions using Power BI, SQL, Python, and
            modern tools like Microsoft Fabric.
            <br />
            <br /> Previously at Labaid Pharmaceuticals Ltd, I played a key role
            in ERP and MIS data workflows—focusing on performance tuning, data
            governance using DQS & MDM, and crafting enterprise-grade SSIS
            pipelines.
            <br />
            <br />
            🔍 Whether it's exploring customer lifecycle trends, forecasting
            demand, or enabling self-service analytics, I thrive as a data
            storyteller, visualization expert, and BI strategist—bridging the
            gap between data complexity and business clarity.
          </p>
          <a
            href="https://www.linkedin.com/in/mehedihtushar84659a148/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}>
            <FaLinkedin
              style={{
                fontSize: "40px",
                border: "2px solid",
                padding: "5px",
                borderRadius: "50%",
              }}
            />
          </a>

          <a
            href="https://github.com/Tushar3749"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}>
            <FaGithub
              style={{
                fontSize: "40px",
                border: "2px solid",
                padding: "5px",
                marginLeft: "8px",
                borderRadius: "50%",
              }}
            />
          </a>

          <FaFacebook
            style={{
              fontSize: "40px",
              border: "2px solid",
              padding: "5px",
              marginLeft: "8px",
              borderRadius: "50%",
            }}
          />

          <h5 style={{ marginTop: "20px" }}>
            <a href={`#contact`}>
              {" "}
              <button className="hireBtn">Hire Me</button>
            </a>

            <button className="resumeBtn">
              <FaLink /> MY RESUME
            </button>
          </h5>
        </div>
        <center>
          <img src={Img} className="bannerImg" alt="BannerImage" />
        </center>
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default HomeBanner;
