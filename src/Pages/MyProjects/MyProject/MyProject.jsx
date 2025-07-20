import React from "react";
import "./MyProject.css";

const MyProject = ({ project }) => {
  const { name, technology, img, desc } = project;
  return (
    <div className="col-lg-4 col-md-6 mb-4 mt-4">
      <div className="card h-100 d-flex flex-column projectCard">
        <img
          src={img}
          alt={name}
          className="card-img-top"
          style={{ borderRadius: "20px 20px 0 0" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="projectName">{name}</h5>
          <p className="projectDesc">{desc}</p>
          <span className="tech-span mt-auto text-center">
            Technology: {technology}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
