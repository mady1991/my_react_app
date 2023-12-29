import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import CustomAlert from "./components/CustomAlert";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContacUs";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [bgColor, setbgColor] = useState("#FFFFFF");

  const showbgColor = (bggColor) => {
    setbgColor(bggColor);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    showbgColor("#67g856");
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = bgColor;
      showAlert("Dark mode is enabled", "success");
      document.title = "Text Utils - Dark Mode ";
    } else {
      setMode("light");
      showbgColor("#FFFFFF");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "Text Utils - Light Mode ";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText={"About me"}
        mode={mode}
        toggleMode={toggleMode}
        bgColor={bgColor}
        showbgColor={showbgColor}
      />
      <CustomAlert alert={alert} />

      <Routes>
        <Route
          exact path="/"
          element={
            <TextForm
              heading="Login Form"
              mode={mode}
              showAlert={showAlert}
              bgColor={bgColor}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
