import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import "./HomeBanner.css";
import Title from "../../Components/Title/Title";

const HomeBanner = () => {
  return (
    <>
      <div className="homeContainer">
        <div>
          <Title title="HI, I'M" title2="Mehedi Hasan Tushar" />

          <p className="homeTypeWriter">
            <Typewriter
              words={[
                "Data Cleaning & Preprocessing",
                "Data Analysis & Interpretation",
                "Data Visualization",
                "Statistical & Mathematical Knowledge",
                "SQL & Database Management",
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
            To utilize my expertise in data analysis, business intelligence, and
            data science, along with proficiency in Python, Power BI, R, SQL,
            and Excel, to drive strategic decision-making and business growth
            through innovative projects and actionable insights. Passionate
            about leveraging machine learning and AI, I aim to collaborate with
            teams to solve complex problems and deliver impactful solutions,
            while continuously expanding my skill set and staying abreast of
            emerging trends in data science.
          </p>
          <FaLinkedin
            style={{
              fontSize: "40px",
              border: "2px solid",
              padding: "5px",
              borderRadius: "50%",
            }}
          />
          <FaGithub
            style={{
              fontSize: "40px",
              border: "2px solid",
              padding: "5px",
              marginLeft: "8px",
              borderRadius: "50%",
            }}
          />
          <FaFacebook
            style={{
              fontSize: "40px",
              border: "2px solid",
              padding: "5px",
              marginLeft: "8px",
              borderRadius: "50%",
            }}
          />
          <FaTwitter
            style={{
              fontSize: "40px",
              border: "2px solid",
              padding: "5px",
              marginLeft: "8px",
              borderRadius: "50%",
            }}
          />
          <h5 style={{ marginTop: "20px" }}>
            <button className="hireBtn">Hire Me</button>
            <button className="resumeBtn">
              <FaLink /> MY RESUME
            </button>
          </h5>
        </div>
        <center>
          <img
            src="https://sajibkhansk.netlify.app/assets/sajib-0b6803fc.png"
            className="bannerImg"
            alt="BannerImage"
          />
        </center>
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default HomeBanner;
