import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home/Home";
import "./index.css";
import AdminHome from "./Pages/AdminPanel/AdminHome/AdminHome";
import { ToastContainer } from "react-toastify";
import useFirebase from "./Hooks/useFirebase";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./Assets/Loading.json";
import { useLayoutEffect } from "react";
import AdminLogin from "./Pages/AdminPanel/AdminLogin/AdminLogin";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  const { user } = useFirebase();
  const { loading } = useFirebase();
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
      <Wrapper>
        <Routes>
          {user ? (
            <>
              {" "}
              <Route path="/" element={<Home />} />{" "}
              <Route path="/admin" element={<AdminHome />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/admin" element={<AdminLogin />} />
            </>
          )}
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Wrapper>
    </>
  );
}

export default App;
