import React from "react";
import "./JobExperience.css";

const JobExperience = ({ experience }) => {
  const { name, img, position, duration, desc1, desc2, desc3, desc4, desc5 } =
    experience;
  return (
    <>
      <div className="col-md-6 mt-4">
        <div className="companyCard w-100">
          <div className="companyCardHeader ms-4">
            <img
              style={{ borderRadius: "10px" }}
              src={img}
              width="15%"
              alt=""
            />
            <div className="ms-3">
              <span className="companyPositon">{position} </span>
              <br />
              <span className="companyName">{name}</span>
            </div>
          </div>
          <p className="companyDuration">{duration}</p>
          <ul className="companyDesc">
            <li>{desc1}</li>
            <li className="mt-1">{desc2}</li>
            <li className="mt-1">{desc3}</li>
            <li className="mt-1">{desc4}</li>
            <li className="mt-1">{desc5}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobExperience;
