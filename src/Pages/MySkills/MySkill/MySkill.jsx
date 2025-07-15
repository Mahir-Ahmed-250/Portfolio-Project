import React from "react";
import "./MySkill.css";

const MySkill = ({ skill }) => {
  const { name, img } = skill;
  return (
    <>
      <div className="col-md-2 mt-4">
        <center
          style={{ borderRadius: "10px" }}
          className="companyCard w-100 p-5">
          <img src={img} width="100%" alt="" />
          <br />
          <br />
          <span className="skillsName">{name}</span>
        </center>
      </div>
    </>
  );
};

export default MySkill;
