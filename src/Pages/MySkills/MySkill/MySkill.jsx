import React from "react";
import "./MySkill.css";

const MySkill = ({ skill, index }) => {
  const { skillName, img } = skill;

  const aosAnimations = [
    "flip-left",
    "flip-down",
    "flip-left",
    "flip-down",
    "zoom-in",
  ];
  const animation = aosAnimations[index % aosAnimations.length];

  return (
    <div
      data-aos={animation}
      data-aos-offset="200"
      data-aos-delay={index * 10}
      data-aos-duration="3000" // slower animation (1.5s)
    >
      <center style={{ borderRadius: "10px" }} className="skillsCard">
        <img src={img} width="40%" height="60%" alt="skillLogo" />
        <br />
        <br />
        <span className="skillsName">{skillName}</span>
      </center>
    </div>
  );
};

export default MySkill;
