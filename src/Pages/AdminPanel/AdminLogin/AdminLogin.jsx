import React from "react";
import { useState } from "react";
import Title from "../../../Components/Title/Title";
import useFirebase from "../../../Hooks/useFirebase";
import loginImg from "../../../Assets/login.png";
import "./AdminLogin.css";
import Button from "../../../Components/Button/Button";

const AdminLogin = () => {
  const { loginUser, loading } = useFirebase();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    const result = event.target.value;
    setEmail(result);
  };
  const handlePassword = (event) => {
    const result = event.target.value;
    setPassword(result);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };
  return (
    <>
      {loading ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="loading-gif"></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        <>
          <br />
          <br />
          <br />
          <center>
            {" "}
            <Title title1="" title2="Admin Login" />
          </center>
          <div className="loginContainer">
            <div>
              <img src={loginImg} alt="" />
            </div>
            <div className="loginForm">
              <form onSubmit={handleLogin}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg mb-2 w-100"
                    onChange={handleEmail}
                    required
                    placeholder="Admin Email"
                  />
                </div>

                <div className="form-outline">
                  <input
                    className="form-control form-control-lg mb-2 w-100"
                    type={passwordShown ? "text" : "password"}
                    required
                    onChange={handlePassword}
                    placeholder="Enter a password"
                  />

                  <input
                    className="form-check-input ms-1"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                    onClick={togglePassword}
                  />
                  <label className="form-check-label ms-4">Show Password</label>
                </div>
                <Button
                  title="Login"
                  width="100px"
                  border="2px solid black"
                  color="black"
                  fontSize="16px"
                />
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default AdminLogin;
