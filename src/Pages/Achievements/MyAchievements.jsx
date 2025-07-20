import React from "react";
import Title from "../../Components/Title/Title";
import img1 from "../../Assets/Certificate1.jpg";
import img2 from "../../Assets/Certificate2.jpg";
import "./MyAchievements.css";

const MyAchievement = () => {
  return (
    <>
      <Title title="My" title2="Achievements" />

      <div className="achievementContainer">
        <img
          src={img1}
          alt=""
          width="100%"
          height="350px"
          className="achievementImg"
        />
        <img src={img2} alt="" width="100%" height="350px" />
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default MyAchievement;
