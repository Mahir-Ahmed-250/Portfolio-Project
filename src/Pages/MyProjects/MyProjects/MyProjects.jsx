import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MyProject from "../MyProject/MyProject";
import "./MyProjects.css";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   fetch("Projects.JSON")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data));
  // }, []);
  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Project"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setProjects(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);
  return (
    <>
      <Title title="My" title2="Projects" />
      <div className="row projectsContainer" id="projects">
        {projects
          .sort((a, b) => a.serial - b.serial)
          .map((project) => (
            <MyProject key={project.id} project={project} />
          ))}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default MyProjects;
