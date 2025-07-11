import { Route, Routes } from "react-router";
import "./index.css";
import NavigationBar from "./Pages/Home/NavigationBar/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1>THIS IS HOME</h1>} />
      </Routes>
    </>
  );
}

export default App;
