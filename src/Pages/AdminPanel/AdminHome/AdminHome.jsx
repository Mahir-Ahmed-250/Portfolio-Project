import React from "react";
import image from "../../../Assets/dashboard.png";
import "./AdminHome.css";
import { Link } from "react-router-dom";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";

const AdminHome = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <AdminHeader title="Welcome to Admin Panel" />
      <div className="container" style={{ paddingTop: "5%" }}>
        <div className="adminHomeContainer mb-5">
          <div>
            <img src={image} alt="" width="100%" height="100%" />
          </div>
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-6 ">
                <Link
                  to="/admin/jobExperiences"
                  style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="adminNavigationTitle">Job Experience</h2>
                    <h6 className="adminNavigationText">
                      Upload, Update & Delete Job Experience Here
                    </h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                {" "}
                <Link to="/admin/skills" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation ">
                    <h2 className="adminNavigationTitle">My Skills</h2>
                    <h6 className="adminNavigationText">
                      Upload, Update & Delete My Skills Here
                    </h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                {" "}
                <Link to="/admin/projects" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="adminNavigationTitle">My Projects</h2>
                    <h6 className="adminNavigationText">
                      Upload, Update & Delete My Projects Here
                    </h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                {" "}
                <Link to="/admin/articles" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="adminNavigationTitle">My Articles</h2>
                    <h6 className="adminNavigationText">
                      Upload, Update & Delete My Articles Here
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="mt-4" />
        <p className="copyrightText">
          Copyright © {year} Mehedi Hasan Tushar. All Rights Reserve
        </p>
      </div>
    </>
  );
};

export default AdminHome;
