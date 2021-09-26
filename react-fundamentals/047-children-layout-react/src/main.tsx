import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Layout } from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
      {/* <div>
        <button>Oi</button>
        <p>Teste</p>
        <h1>teste</h1>
      </div> */}
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
