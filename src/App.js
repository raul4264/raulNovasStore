import React from "react";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        <p> ReactJS by raulNovas </p>{" "}
      </header>{" "}
      <div>
        <NavBar />
      </div>
      <div>
        <ItemCount />
      </div>
    </div>
  );
}

export default App;
