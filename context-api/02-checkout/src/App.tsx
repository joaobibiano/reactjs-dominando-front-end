import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Checkout } from "./components/Checkout";
import { useUser } from "./context/UserContext";
import { Profile } from "./components/Profile";

function App() {
  const { state, dispatch } = useUser();

  return (
    <div className="App">
      <p>Seja bem vindo {state.name}</p>
      <small>Seu token é: {state.token}</small>
      <p>Você clicou {state.totalClicks} vezes</p>
      <Checkout />
      <Profile />
    </div>
  );
}

export default App;
