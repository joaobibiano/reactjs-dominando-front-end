import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Button } from "./Button";

ReactDOM.render(
  <React.StrictMode>
    <Button showAlert={() => window.alert("clicou!")} />
    <Button showAlert={() => window.alert("olá")} />
  </React.StrictMode>,
  document.getElementById("root")
);
