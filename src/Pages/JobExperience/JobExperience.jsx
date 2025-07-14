import React from "react";

const JobExperience = ({ experience }) => {
  const { name, img, position, duration } = experience;
  return (
    <>
      <div className="col-md-6">
        <div className="mb-5 card w-100">
          <center>
            <img src={img} alt="" width="50%" />
            <p className="testimonial-name-occupation">
              {" "}
              <span className="testimonial-name">{name}</span>
              <span className="ms-1">|</span>{" "}
              <span className="ms-2 ">{position} </span>
            </p>
            <center>
              <div className="testimonial-line"></div>
            </center>
            <p className="testimonial">{duration}</p>
          </center>
        </div>
      </div>
    </>
  );
};

export default JobExperience;
