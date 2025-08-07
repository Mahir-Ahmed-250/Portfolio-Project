import { Route, Routes, useLocation, useNavigate } from "react-router";
import Home from "./Pages/Home/Home";
import "./index.css";
import AdminHome from "./Pages/AdminPanel/AdminHome/AdminHome";
import { ToastContainer } from "react-toastify";
import useFirebase from "./Hooks/useFirebase";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./Assets/Loading.json";
import { useEffect, useLayoutEffect } from "react";
import AdminLogin from "./Pages/AdminPanel/AdminLogin/AdminLogin";
import AdminJobExperience from "./Pages/AdminPanel/AdminJobExperience/AdminJobExperience";
import AdminSkills from "./Pages/AdminPanel/AdminSkills/AdminSkills";
import AdminProjects from "./Pages/AdminPanel/AdminProjects/AdminProjects";
import AdminArticles from "./Pages/AdminPanel/AdminArticles/AdminArticles";

function App() {
  const { user } = useFirebase();
  const { loading } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect unauthenticated user from protected admin routes
  useEffect(() => {
    const adminProtectedRoutes = [
      "/admin",
      "/admin/jobExperiences",
      "/admin/skills",
      "/admin/projects",
      "/admin/articles",
    ];

    const isAdminPath = adminProtectedRoutes.some((route) =>
      location.pathname.startsWith(route)
    );

    if (!user && isAdminPath) {
      navigate("/admin");
    }
  }, [user, location.pathname, navigate]);
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

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
        {user ? (
          <>
            <Routes>
              {" "}
              <Route path="/" element={<Home />} />
            </Routes>

            <div className="adminBg">
              <Routes>
                <Route path="/admin" element={<AdminHome />} />
                <Route
                  path="/admin/jobExperiences"
                  element={<AdminJobExperience />}
                />
                <Route path="/admin/skills" element={<AdminSkills />} />
                <Route path="/admin/projects" element={<AdminProjects />} />
                <Route path="/admin/articles" element={<AdminArticles />} />
              </Routes>
            </div>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <div className="adminBg">
              <Routes>
                <Route path="/admin" element={<AdminLogin />} />
              </Routes>
            </div>
          </>
        )}

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
