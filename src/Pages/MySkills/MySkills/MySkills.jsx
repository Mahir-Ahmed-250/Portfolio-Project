import React, { useEffect, useState } from "react";
import MySkill from "../MySkill/MySkill";
import Title from "../../../Components/Title/Title";
import "./MySkills.css";

const MySkills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("Skills.JSON")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <>
      <Title title="My" title2="Skills" />
      <div
        className="skills-container d-flex flex-wrap justify-content-center"
        id="skills"
      >
        {skills.map((skill) => (
          <MySkill key={skill.id} skill={skill} />
        ))}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default MySkills;
