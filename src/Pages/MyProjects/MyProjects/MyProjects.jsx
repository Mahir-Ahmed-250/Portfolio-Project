import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MyProject from "../MyProject/MyProject";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    fetch("Projects.JSON")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <>
      <Title title="My" title2="Projects" />
      <div className="row">
        {projects.map((project) => (
          <MyProject key={project.id} project={project} />
        ))}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default MyProjects;
