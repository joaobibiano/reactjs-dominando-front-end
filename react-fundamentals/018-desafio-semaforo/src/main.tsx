import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Semaforo } from "./components/Semaforo";

ReactDOM.render(
  <React.StrictMode>
    <Semaforo />
  </React.StrictMode>,
  document.getElementById("root")
);
