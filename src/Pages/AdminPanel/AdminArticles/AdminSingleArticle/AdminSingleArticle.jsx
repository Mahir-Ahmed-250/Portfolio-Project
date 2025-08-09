import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { db } from "../../../../Hooks/useFirebase";

function MyVerticallyCenteredModal(props) {
  const [serial, setSerial] = useState(props.article.serial);
  const [articleName, setArticleName] = useState(props.article.articleName);
  const [articleDescription, setArticleDescription] = useState(
    props.article.articleDescription
  );
  const [articleLink, setArticleLink] = useState(props.article.articleLink);
  const [baseImage, setBaseImage] = useState(props.article.img);

  const handleSerial = (e) => {
    const result = e.target.value;
    setSerial(result);
  };

  const handleArticleName = (e) => {
    const result = e.target.value;
    setArticleName(result);
  };
  const handleArticleDescription = (e) => {
    const result = e.target.value;
    setArticleDescription(result);
  };
  const handleArticleLink = (e) => {
    const result = e.target.value;
    setArticleLink(result);
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
    const articleRef = doc(db, "Article", props.article.id);
    try {
      if (
        baseImage &&
        serial &&
        articleName &&
        articleDescription &&
        articleLink
      ) {
        await updateDoc(articleRef, {
          serial: serial,
          articleName: articleName,
          articleDescription: articleDescription,
          articleLink: articleLink,
          img: baseImage,
        });
        setSerial(serial);
        setArticleName(articleName);
        setArticleDescription(articleDescription);
        setArticleLink(articleLink);
        setBaseImage(baseImage);

        swal(
          "Well Done!",
          "You have successfully Updated the Article!",
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
          {props.article.articleName}
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
            defaultValue={props.article.serial}
            placeholder="Serial"
          />

          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleArticleName}
            defaultValue={props.article.articleName}
            placeholder="Article Name"
          />
          <textarea
            type="text"
            rows="4"
            cols="50"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleArticleDescription}
            defaultValue={props.article.articleDescription}
            placeholder="Article Description"
          />
          <input
            type="text"
            id="form3Example3"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleArticleLink}
            defaultValue={props.article.articleLink}
            placeholder="Article Link"
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
              <img src={props.skill.img} height="200px" alt="" />
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

const AdminSingleArticle = ({ article }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onPressDelete = async (id) => {
    try {
      deleteDoc(doc(db, "Article", id));
    } catch (err) {}
  };
  const onPressDeleteMsg = (id) => {
    swal(
      "Delete Warning!",
      "Do you really want to Delete this Article?",
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
            "You have successfully Delete the Article!",
            "success"
          );
          break;
        default:
      }
    });
  };

  return (
    <div key={article.id} className="col-lg-4 col-md-4 mt-5">
      <div className="serialDiv">
        <span className="ps-2">{article.serial}</span>
      </div>
      <img
        src={article.img}
        alt=""
        width="100%"
        height="300px"
        style={{ border: "5px solid black" }}
      />

      <button className="delBtn" onClick={() => onPressDeleteMsg(article.id)}>
        Delete
      </button>
      <button className="editBtn" onClick={() => setModalShow(true)}>
        Edit
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        article={article}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminSingleArticle;
