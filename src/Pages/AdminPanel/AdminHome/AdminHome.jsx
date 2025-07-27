import React from "react";
import swal from "sweetalert";
import Title from "../../../Components/Title/Title";
import useFirebase from "../../../Hooks/useFirebase";
import { FiLogOut } from "react-icons/fi";
import "./AdminHome.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const AdminHome = () => {
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
      <div className="container" style={{ paddingTop: "5%" }}>
        <div className="adminHomeHeader">
          <Title title1="" title2="Welcome to Admin Dashboard" />

          <Link to="/" style={{ cursor: "pointer", textDecoration: "none" }}>
            <span className="logoutBtn">
              <IoHome className="me-1" />
              Home
            </span>
          </Link>
          <span
            style={{ cursor: "pointer" }}
            className="logoutBtn"
            onClick={handleLogout}
          >
            <FiLogOut className="me-1" />
            Log Out
          </span>
        </div>
        <div className="adminHomeContainer mb-5">
          <div></div>
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6"></div>
              <div className="col-lg-6"></div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
