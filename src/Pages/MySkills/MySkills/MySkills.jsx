import React, { useEffect, useState } from "react";
import MySkill from "../MySkill/MySkill";
import Title from "../../../Components/Title/Title";

const MySkills = () => {
  const [skills, setSkills] = useState([]);
  console.log(skills);
  useEffect(() => {
    fetch("Skills.JSON")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <>
      <Title title="My" title2="Skills" />
      <div className="row">
        {skills.map((skill) => (
          <MySkill key={skill.id} skill={skill} />
        ))}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default MySkills;
