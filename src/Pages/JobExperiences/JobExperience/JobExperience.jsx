import React from "react";
import "./JobExperience.css";

const JobExperience = ({ experience, index }) => {
  const {
    companyPosition,
    img,
    companyName,
    workDuration,
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,
  } = experience;

  const aosAnimation = index % 2 === 0 ? "fade-up" : "fade-down"; // alternate

  return (
    <div
      className="col-lg-6 mt-4"
      data-aos={aosAnimation}
      data-aos-offset="500"
      data-aos-delay="80"
      data-aos-duration="2000">
      <div className="companyCard w-100">
        <div className="companyCardHeader ms-4">
          <img
            style={{ borderRadius: "10px", height: "100px" }}
            src={img}
            width="20%"
            alt=""
          />
          <div className="ms-3">
            <span className="companyPosition">{companyPosition}</span>
            <br />
            <span className="companyName">{companyName}</span>
          </div>
        </div>
        <p className="companyDuration">{workDuration}</p>
        <ul className="companyDesc">
          {description1 ? <li>{description1}</li> : <></>}
          {description2 ? <li>{description2}</li> : <></>}
          {description3 ? <li>{description3}</li> : <></>}
          {description4 ? <li>{description4}</li> : <></>}
          {description5 ? <li>{description5}</li> : <></>}
          {description6 ? <li>{description6}</li> : <></>}
          {description7 ? <li>{description7}</li> : <></>}
          {description8 ? <li>{description8}</li> : <></>}
        </ul>
      </div>
    </div>
  );
};
export default JobExperience;
