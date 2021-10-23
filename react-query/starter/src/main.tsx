import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Grommet } from "grommet";

ReactDOM.render(
  <React.StrictMode>
    <Grommet plain>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);
