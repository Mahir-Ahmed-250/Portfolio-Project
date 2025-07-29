import React from "react";
import "./AdminHeader.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import useFirebase from "../../Hooks/useFirebase";
import swal from "sweetalert";
import { FiLogOut } from "react-icons/fi";

const AdminHeader = ({ title }) => {
  const { logOut } = useFirebase();
  const handleLogout = () => {
    swal("Logout Warning!", "Do you really want to logout?", "warning", {
      buttons: {
        cancel: "NO",
        catch: {
          text: "YES",
          value: "catch",
        },
      },
    }).then((value) => {
      switch (value) {
        case "catch":
          logOut();
          swal("Well Done!", "You are successfully logged out!", "success");
          break;
        default:
      }
    });
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="adminHeaderContainer">
        <div>
          <h1 className="adminHeaderTitle">{title}</h1>
        </div>
        <div className="adminHeaderIconContainer">
          <Link to="/" style={{ cursor: "pointer", textDecoration: "none" }}>
            <span className="adminHeaderIconBtn">
              <div className="adminHeaderIcon">
                <IoHome className="me-2" />
                <span>Home</span>
              </div>
            </span>
          </Link>
          <div className="adminHeaderIconContainer" onClick={handleLogout}>
            <div
              style={{ cursor: "pointer", textDecoration: "none" }}
              className="ms-4">
              <span className="adminHeaderIconBtn">
                <div className="adminHeaderIcon">
                  <FiLogOut className="mt-1" />
                  <span>Log Out</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
