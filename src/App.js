import React from "react";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Comentarios from "./components/Comentarios";

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
        <Comentarios />
      </div>
    </div>
  );
}

export default App;
