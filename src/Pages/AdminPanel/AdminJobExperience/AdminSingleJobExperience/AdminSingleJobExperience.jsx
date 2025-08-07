import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { db } from "../../../../Hooks/useFirebase";
import "./AdminSingleJobExperience.css";

function MyVerticallyCenteredModal(props) {
  const [serial, setSerial] = useState(props.experience.serial);
  const [companyPosition, setCompanyPosition] = useState(
    props.experience.companyPosition
  );
  const [companyName, setCompanyName] = useState(props.experience.companyName);
  const [workDuration, setWorkDuration] = useState(
    props.experience.workDuration
  );
  const [description1, setDescription1] = useState(
    props.experience.description1
  );
  const [description2, setDescription2] = useState(
    props.experience.description2
  );
  const [description3, setDescription3] = useState(
    props.experience.description3
  );
  const [description4, setDescription4] = useState(
    props.experience.description4
  );
  const [description5, setDescription5] = useState(
    props.experience.description5
  );
  const [baseImage, setBaseImage] = useState(props.experience.img);
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
  const onClickUpdate = async () => {
    const experienceRef = doc(db, "Experience", props.experience.id);
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
        await updateDoc(experienceRef, {
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
        setSerial(serial);
        setCompanyName(companyPosition);
        setCompanyName(companyName);
        setWorkDuration(workDuration);
        setDescription1(description1);
        setDescription2(description2);
        setDescription3(description3);
        setDescription4(description4);
        setDescription5(description5);
        setBaseImage(baseImage);

        swal(
          "Well Done!",
          "You have successfully Updated the Experience!",
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
    } catch (err) {
      swal({
        title: "Sorry",
        text: "Image Size is Not Matched",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.experience.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <input
            type="number"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleSerial}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            defaultValue={props.experience.serial}
            placeholder="Serial"
          />

          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleCompanyPosition}
            defaultValue={props.experience.companyPosition}
            placeholder="Company Position"
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleCompanyName}
            defaultValue={props.experience.companyName}
            placeholder="Company Name"
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleWorkDuration}
            defaultValue={props.experience.workDuration}
            placeholder="Work Duration"
          />

          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleDescription1}
            defaultValue={props.experience.description1}
            placeholder="Description Serial 1"
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleDescription2}
            defaultValue={props.experience.description2}
            placeholder="Description Serial 2"
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleDescription3}
            defaultValue={props.experience.description3}
            placeholder="Description Serial 3"
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleDescription4}
            defaultValue={props.experience.description4}
            placeholder="Description Serial 4"
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleDescription5}
            defaultValue={props.experience.description5}
            placeholder="Description Serial 5"
          />

          <div className="imgAndDrop">
            <div
              className="file-drop-area"
              style={{ border: "1px dashed #161616" }}>
              <span>Choose files</span>
              <span className="file-message">or drag and drop files here</span>
              <input
                className="file-input"
                type="file"
                multiple
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
            </div>
            {baseImage ? (
              <img src={baseImage} height="200px" alt="" />
            ) : (
              <img src={props.experience.img} height="200px" alt="" />
            )}
          </div>
          <button className="uploadBtn" onClick={onClickUpdate}>
            UPDATE
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="delBtn" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

const AdminSingleJobExperience = ({ experience }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onPressDelete = async (id) => {
    try {
      deleteDoc(doc(db, "Experience", id));
    } catch (err) {}
  };
  const onPressDeleteMsg = (id) => {
    swal(
      "Delete Warning!",
      "Do you really want to Delete this Experience?",
      "warning",
      {
        buttons: {
          cancel: "NO",
          catch: {
            text: "YES",
            value: "catch",
          },
        },
      }
    ).then((value) => {
      switch (value) {
        case "catch":
          onPressDelete(id);
          swal(
            "Success!",
            "You have successfully Delete the Experience!",
            "success"
          );
          break;
        default:
      }
    });
  };

  return (
    <div key={experience.id} className="col-lg-4 col-md-4 mt-5">
      <div className="serialDiv">
        <span className="ps-2">{experience.serial}</span>
      </div>
      <img
        src={experience.img}
        alt=""
        width="100%"
        height="300px"
        style={{ border: "5px solid black" }}
      />

      <button
        className="delBtn"
        onClick={() => onPressDeleteMsg(experience.id)}>
        Delete
      </button>
      <button className="editBtn" onClick={() => setModalShow(true)}>
        Edit
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        experience={experience}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminSingleJobExperience;
