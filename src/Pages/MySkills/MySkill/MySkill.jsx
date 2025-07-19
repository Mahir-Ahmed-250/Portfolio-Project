import React from "react";
import "./MySkill.css";

const MySkill = ({ skill }) => {
  const { name, img } = skill;
  return (
    <>
      <div>
        <center style={{ borderRadius: "10px" }} className="skillsCard p-4">
          <img src={img} width="40%" alt="" />
          <br />
          <br />
          <span className="skillsName">{name}</span>
        </center>
      </div>
    </>
  );
};

export default MySkill;
