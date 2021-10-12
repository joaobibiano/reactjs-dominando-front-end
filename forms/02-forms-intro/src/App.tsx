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

function Form_controlled() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const [data, setData] = useState({
  //   name: '',
  //   email: ''
  // })

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(name, email);
        }}
      >
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {name === "joao" && <h1>Seja bem vindo!</h1>}

        <input
          type="text"
          name="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}

export default Form_controlled;
