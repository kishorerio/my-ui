import React from "react";
import "./App.css";
import logo from "./logo.png"; // Import your logo image
import logo1 from "./logo-vm.png"; // Import your logo image
import logo2 from "./logo2.png"; // Import your logo image
import Login from "./Login";

function App() {
  return (
    <>
      <div>
        <div className="content">
          <img src={logo} alt="Logo" className="logo" />
          <img src={logo1} alt="Logo" className="logo-vm" />
          <img src={logo2} alt="Logo" className="logo2" />
          <h3 className="text">Welcome Back !</h3>
          <h4 className="sub-text">Sign in to continue to vm</h4>
        </div>
      </div>
      <div className="container">
        <Login />
      </div>
    </>
  );
}

export default App;
