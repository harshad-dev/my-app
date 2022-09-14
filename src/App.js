import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
// import About from "./Component/About";
import Alert from "./Component/Alert";
import { useState } from "react";
// import { BrowserRouter as Router, Switch,Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Utilities - Dark Mode";
      setInterval(() => {
        document.title = "Text Utilities is Amazing";
      }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Utilities - Light Mode";
      setInterval(() => {
        document.title = "Text Utilities is Great";
      }, 1500);
    }
  };
  return (
    <>

      {/* <Router> */}
      <Navbar title={`Dipa Text Utilities`} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
          {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
      {/* <About/> */}
    </>
  );
}

export default App;
