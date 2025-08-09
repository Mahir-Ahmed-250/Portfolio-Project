import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { db } from "../../../../Hooks/useFirebase";

function MyVerticallyCenteredModal(props) {
  const [serial, setSerial] = useState(props.project.serial);
  const [projectName, setProjectName] = useState(props.project.projectName);
  const [baseImage, setBaseImage] = useState(props.project.img);
  const [projectDescription, setProjectDescription] = useState(
    props.project.projectDescription
  );
  const [projectTechnologies, setProjectTechnologies] = useState(
    props.project.projectTechnologies
  );
  const [projectLink, setProjectLink] = useState("");

  const handleSerial = (e) => {
    const result = e.target.value;
    setSerial(result);
  };

  const handleProjectName = (e) => {
    const result = e.target.value;
    setProjectDescription(result);
  };
  const handleProjectDescription = (e) => {
    const result = e.target.value;
    setProjectName(result);
  };
  const handleProjectTechnologies = (e) => {
    const result = e.target.value;
    setProjectTechnologies(result);
  };
  const handleProjectLink = (e) => {
    const result = e.target.value;
    setProjectLink(result);
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
    const projectRef = doc(db, "Project", props.project.id);
    try {
      if (
        baseImage &&
        serial &&
        projectName &&
        projectDescription &&
        projectTechnologies
      ) {
        await updateDoc(projectRef, {
          serial: serial,
          projectName: projectName,
          projectDescription: projectDescription,
          projectTechnologies: projectTechnologies,
          img: baseImage,
          projectLink: projectLink,
        });
        setSerial(serial);
        setProjectName(projectName);
        setBaseImage(baseImage);
        setProjectLink(projectLink);
        swal(
          "Well Done!",
          "You have successfully Updated the Project!",
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
          {props.project.projectName}
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
            defaultValue={props.project.serial}
            placeholder="Serial"
          />

          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleProjectName}
            defaultValue={props.project.projectName}
            placeholder="Skill Name"
          />
          <textarea
            type="text"
            rows="4"
            cols="50"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleProjectDescription}
            defaultValue={props.project.projectDescription}
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleProjectTechnologies}
            defaultValue={props.project.projectTechnologies}
            placeholder="Project Technologies"
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleProjectLink}
            defaultValue={props.project.projectLink}
            placeholder="Project Link"
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
              <img src={props.project.img} height="200px" alt="" />
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

const AdminSingleProject = ({ project }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onPressDelete = async (id) => {
    try {
      deleteDoc(doc(db, "Project", id));
    } catch (err) {}
  };
  const onPressDeleteMsg = (id) => {
    swal(
      "Delete Warning!",
      "Do you really want to Delete this Project?",
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
            "You have successfully Delete the Project!",
            "success"
          );
          break;
        default:
      }
    });
  };

  return (
    <div key={project.id} className="col-lg-4 col-md-4 mt-5">
      <div className="serialDiv">
        <span className="ps-2">{project.serial}</span>
      </div>
      <img
        src={project.img}
        alt=""
        width="100%"
        height="300px"
        style={{ border: "5px solid black" }}
      />

      <button className="delBtn" onClick={() => onPressDeleteMsg(project.id)}>
        Delete
      </button>
      <button className="editBtn" onClick={() => setModalShow(true)}>
        Edit
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        project={project}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminSingleProject;
