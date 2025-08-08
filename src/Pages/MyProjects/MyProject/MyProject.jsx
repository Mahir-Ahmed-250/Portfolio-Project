import React from "react";
import "./MyProject.css";

const MyProject = ({ project }) => {
  const { projectName, projectDescription, projectTechnologies, img } = project;
  return (
    <div className="col-lg-4 col-md-6 mb-4 mt-4">
      <div className="card h-100 d-flex flex-column projectCard">
        <img
          src={img}
          alt={projectName}
          className="card-img-top"
          height="250px"
          style={{
            borderRadius: "20px 20px 0 0",
          }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="projectName">{projectName}</h5>
          <p className="projectDesc">{projectDescription}</p>
          <span className="tech-span mt-auto text-center">
            Technology: {projectTechnologies}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
