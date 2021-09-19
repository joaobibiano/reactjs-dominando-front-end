import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChatApi } from "./services/ChatApi";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    ChatApi.connect();

    // clean up effect

    return () => {
      ChatApi.disconnect();
    };
  }, []);

  useEffect(() => {
    // console.log("executando");
  }, []);

  useEffect(() => {
    // console.log("counter foi atualizado!");
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default App;
