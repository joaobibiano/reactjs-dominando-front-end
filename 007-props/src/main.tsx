import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Input } from "./Input";

ReactDOM.render(
  <React.StrictMode>
    <Input type="Name" />
    <Input type="Age" />
    <Input type="Address" />
  </React.StrictMode>,
  document.getElementById("root")
);
