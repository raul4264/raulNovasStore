import React from "react";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
/* import ItemCount from "./components/ItemCount"; */
import { MoviesGrid } from "./components/MoviesGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="80px" />
      </header>
      <div>
        <NavBar />
      </div>
      <main className="main">
        <h1>Movies</h1>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
