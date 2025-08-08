import React, { useEffect, useState } from "react";
import MySkill from "../MySkill/MySkill";
import Title from "../../../Components/Title/Title";
import "./MySkills.css";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";

const MySkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   fetch("Skills.JSON")
  //     .then((res) => res.json())
  //     .then((data) => setSkills(data));
  // }, []);
  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Skill"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setSkills(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);
  return (
    <>
      <Title title="My" title2="Skills" />
      <div
        className="skills-container d-flex flex-wrap justify-content-center"
        id="skills">
        {skills
          .sort((a, b) => a.serial - b.serial)
          .map((skill, index) => (
            <MySkill key={index} skill={skill} index={index} />
          ))}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default MySkills;
