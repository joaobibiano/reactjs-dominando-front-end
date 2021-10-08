import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Checkout } from "./components/Checkout";

function App() {
  const [user, setUser] = useState({
    name: "Maria",
  });

  return (
    <div className="App">
      <p>Seja bem vindo {user.name}</p>
      <Checkout userName={user.name} />
    </div>
  );
}

export default App;
