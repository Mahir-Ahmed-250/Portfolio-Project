import React, { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";
import swal from "sweetalert";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../../Assets/Loading.json";
import Title from "../../../Components/Title/Title";
import AdminSingleJobExperience from "./AdminSingleJobExperience/AdminSingleJobExperience";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";

const AdminJobExperience = () => {
  const [serial, setSerial] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [baseImage, setBaseImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleSerial = (e) => {
    const result = e.target.value;
    setSerial(result);
  };

  const handleName = (e) => {
    const result = e.target.value;
    setName(result);
  };

  const handleDescription = (e) => {
    const result = e.target.value;
    setDescription(result);
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
      if (baseImage && serial && name && description) {
        await addDoc(collection(db, "Experience"), {
          serial: serial,
          name: name,
          description: description,
          img: baseImage,
        });
        setSerial("");
        setName("");
        setDescription("");
        setBaseImage("");

        swal(
          "Well Done!",
          "You have successfully Added an New Experience!",
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
      console.log(error);
      swal({
        title: "Sorry",
        text: "",
        icon: "error",
        button: "OK",
      });
    }
    setLoading(false);
  };

  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    setLoading2(true);
    //create the query
    const q = query(collection(db, "Experience"));
    //create listener
    const machineryListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setExperiences(list);
      setLoading2(false);
    });
    return machineryListenerSubscription;
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
      <AdminHeader title="Current Experience" />
      <div className="container">
        <div className="row">
          {loading2 ? (
            <></>
          ) : (
            <>
              {experiences
                .sort((a, b) => a.serial - b.serial)
                .map((experience) => (
                  <AdminSingleJobExperience
                    key={experience.id}
                    experience={experience}
                  />
                ))}
            </>
          )}
        </div>
        <div style={{ marginTop: "50px" }}>
          <Title title2="Upload a new Experience" />
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
              onChange={handleName}
              placeholder="Name"
            />

            <textarea
              type="textarea"
              rows="10"
              cols="50"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-100"
              onChange={handleDescription}
              placeholder="Description"
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
                  multiple
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
export default AdminJobExperience;
