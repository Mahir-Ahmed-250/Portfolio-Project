import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import JobExperience from "../JobExperience/JobExperience";

const JobExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  console.log(experiences);
  useEffect(() => {
    fetch("Job.JSON")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);
  return (
    <>
      <Title title="Job" title2="Experience" />
      <div className="row">
        {experiences.map((experience) => (
          <JobExperience key={experience.id} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default JobExperiences;
