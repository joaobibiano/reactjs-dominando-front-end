import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Grommet } from "grommet";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Grommet plain>
        <App />
      </Grommet>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
