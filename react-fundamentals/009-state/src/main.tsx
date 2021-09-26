import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Counter } from "./Counter";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);
