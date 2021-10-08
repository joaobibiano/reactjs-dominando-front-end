import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Checkout } from "./components/Checkout";
import { useUser } from "./context/UserContext";

function App() {
  const user = useUser();

  return (
    <div className="App">
      <p>Seja bem vindo {user.name}</p>
      <Checkout />
    </div>
  );
}

export default App;
