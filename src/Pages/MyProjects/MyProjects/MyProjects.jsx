import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MyProject from "../MyProject/MyProject";
import "./MyProjects.css";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Projects.JSON")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <>
      <Title title="My" title2="Projects" />
      <div className="row projectsContainer" id="projects">
        {projects.map((project) => (
          <MyProject key={project.id} project={project} />
        ))}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default MyProjects;
