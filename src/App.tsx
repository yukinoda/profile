import React from "react";
import logo from "./assets/images/logo.svg";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/yukinoda"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/yukinoda
        </a>
      </header>
    </div>
  );
};

export default App;
