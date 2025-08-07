import React, { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminSingleSkill from "./AdminSingleSkill/AdminSingleSkill";
import Title from "../../../Components/Title/Title";
import swal from "sweetalert";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../../Assets/Loading.json";

const AdminSkills = () => {
  const [serial, setSerial] = useState("");
  const [skillName, setSkillName] = useState("");
  const [baseImage, setBaseImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [skills, setSkills] = useState([]);
  const handleSerial = (e) => {
    const result = e.target.value;
    setSerial(result);
  };

  const handleSkillName = (e) => {
    const result = e.target.value;
    setSkillName(result);
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const onClickCreate = async () => {
    setLoading(true);
    try {
      if (baseImage && serial && skillName) {
        await addDoc(collection(db, "Skill"), {
          serial: serial,
          skillName: skillName,
          img: baseImage,
        });
        setSerial("");
        setSkillName("");
        setBaseImage("");
        swal(
          "Well Done!",
          "You have successfully Added a New Skill!",
          "success",
          {
            buttons: {
              cancel: "Cancel",
              catch: {
                text: "Go to Home",
                value: "catch",
              },
            },
          }
        ).then((value) => {
          switch (value) {
            case "catch":
              window.location.href = "/";

              break;
            default:
          }
        });
      } else {
        swal({
          title: "Sorry",
          text: `Some fields are missing!`,
          icon: "error",
          button: "OK",
        });
      }
    } catch (error) {
      swal({
        title: "Sorry",
        text: "",
        icon: "error",
        button: "OK",
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    setLoading2(true);
    //create the query
    const q = query(collection(db, "Skill"));
    //create listener
    const skillListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setSkills(list);
      setLoading2(false);
    });
    return skillListenerSubscription;
  }, []);
  if (loading) {
    return (
      <>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "500px", width: "500px" }}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <AdminHeader title="Current Skills" />
      <div className="container">
        <div className="row">
          {loading2 ? (
            <></>
          ) : (
            <>
              {skills
                .sort((a, b) => a.serial - b.serial)
                .map((skill) => (
                  <AdminSingleSkill key={skill.id} skill={skill} />
                ))}
            </>
          )}
        </div>
        <div style={{ marginTop: "50px" }}>
          <Title title2="Upload a new Skill" />
          <div>
            <input
              type="number"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-25"
              onChange={handleSerial}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Serial"
            />

            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-50"
              onChange={handleSkillName}
              placeholder="Skill Name"
            />
            <div className="imgAndDrop">
              <div className="file-drop-area">
                <span className="choose-file-button">Choose files</span>
                <span className="file-message">
                  or drag and drop files here
                </span>
                <input
                  className="file-input"
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
              </div>
              <img src={baseImage} height="200px" alt="" />
            </div>
            <button className="uploadBtn" onClick={onClickCreate}>
              Upload
            </button>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default AdminSkills;
