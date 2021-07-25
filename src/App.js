import logo from "./logo.svg";
import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo"
        width = "100px" / >
        <
        p > ReactJS by raulNovas < /p> {"😎 "}{" "} < /
        header > { " " }

        <
        /div>
    );
}

export default App;