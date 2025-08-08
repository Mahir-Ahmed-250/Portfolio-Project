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
  const [companyPosition, setCompanyPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workDuration, setWorkDuration] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const [description5, setDescription5] = useState("");
  const [baseImage, setBaseImage] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleSerial = (e) => {
    const result = e.target.value;
    setSerial(result);
  };

  const handleCompanyPosition = (e) => {
    const result = e.target.value;
    setCompanyPosition(result);
  };
  const handleCompanyName = (e) => {
    const result = e.target.value;
    setCompanyName(result);
  };
  const handleWorkDuration = (e) => {
    const result = e.target.value;
    setWorkDuration(result);
  };
  const handleDescription1 = (e) => {
    const result = e.target.value;
    setDescription1(result);
  };
  const handleDescription2 = (e) => {
    const result = e.target.value;
    setDescription2(result);
  };
  const handleDescription3 = (e) => {
    const result = e.target.value;
    setDescription3(result);
  };
  const handleDescription4 = (e) => {
    const result = e.target.value;
    setDescription4(result);
  };
  const handleDescription5 = (e) => {
    const result = e.target.value;
    setDescription5(result);
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
      if (
        (baseImage &&
          serial &&
          companyPosition &&
          companyName &&
          workDuration) ||
        description1 ||
        description2 ||
        description3 ||
        description4 ||
        description5
      ) {
        await addDoc(collection(db, "Experience"), {
          serial: serial,
          companyPosition: companyPosition,
          companyName: companyName,
          workDuration: workDuration,
          description1: description1,
          description2: description2,
          description3: description3,
          description4: description4,
          description5: description5,
          img: baseImage,
        });
        setSerial("");
        setCompanyName("");
        setCompanyName("");
        setWorkDuration("");
        setDescription1("");
        setDescription2("");
        setDescription3("");
        setDescription4("");
        setDescription5("");
        setBaseImage("");
        swal(
          "Well Done!",
          "You have successfully Added a New Experience!",
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
    const q = query(collection(db, "Experience"));
    //create listener
    const experienceListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setExperiences(list);
      setLoading2(false);
    });
    return experienceListenerSubscription;
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
              onChange={handleCompanyPosition}
              placeholder="Company Position"
            />
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-50"
              onChange={handleCompanyName}
              placeholder="Company Name"
            />
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-50"
              onChange={handleWorkDuration}
              placeholder="Work Duration"
            />

            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-100"
              onChange={handleDescription1}
              placeholder="Description Serial 1"
            />
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-100"
              onChange={handleDescription2}
              placeholder="Description Serial 2"
            />
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-100"
              onChange={handleDescription3}
              placeholder="Description Serial 3"
            />
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-100"
              onChange={handleDescription4}
              placeholder="Description Serial 4"
            />
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg mb-2 w-100"
              onChange={handleDescription5}
              placeholder="Description Serial 5"
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
