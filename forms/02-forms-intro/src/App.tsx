import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Form_Uncontrolled() {
  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const data = new FormData(event.target as HTMLFormElement);

          const name = data.get("name");
          const email = data.get("email");
        }}
      >
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" placeholder="Digite seu nome" />
        <input type="text" name="email" placeholder="Digite seu e-mail" />
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}

export default Form_Uncontrolled;
