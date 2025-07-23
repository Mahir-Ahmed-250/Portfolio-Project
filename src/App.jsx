import { Route, Routes } from "react-router";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Pages/Home/Home";
import "./index.css";
import AdminHome from "./Pages/AdminPanel/AdminHome/AdminHome";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
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
    </>
  );
}

export default App;
