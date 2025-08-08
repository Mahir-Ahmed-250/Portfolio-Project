import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import JobExperience from "../JobExperience/JobExperience";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";

const JobExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Experience"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setExperiences(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);
  return (
    <>
      <Title title="Job" title2="Experience" />
      <div className="row">
        {experiences
          .sort((a, b) => a.serial - b.serial)
          .map((experience, index) => (
            <JobExperience key={index} experience={experience} index={index} />
          ))}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default JobExperiences;
