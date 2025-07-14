import React from "react";
import Title from "../../Components/Title/Title";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../Assets/WhoIAm.json";
import "./WhoIAm.css";

const WhoIAm = () => {
  return (
    <>
      <Title title="WHO" title2="I AM?" />
      <div className="whoIAmContainer">
        <Player autoplay loop src={animationData} />

        <p className="whoIAMdescription">
          Welcome! I'm Sajib Khan, a passionate professional in computer science
          and engineering, specializing in data science. Throughout my academic
          journey at East-West University, I've cultivated expertise in data
          analytics, full-stack web development, business intelligence, and
          machine learning.
          <br />
          <br />
          Driven by a desire to harness technology for positive change, I
          believe in the transformative power of data-driven insights. My
          portfolio showcases a range of projects that highlight my creative
          problem-solving skills and commitment to delivering impactful
          solutions.
          <br />
          <br />
          I'm dedicated to pushing boundaries and creating innovative solutions
          that drive meaningful impact across industries. Let's connect and
          explore how we can collaborate to shape a brighter future through
          technology.
        </p>
      </div>
    </>
  );
};

export default WhoIAm;
