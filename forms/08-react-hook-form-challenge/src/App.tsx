import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import ReactInputMask from "react-input-mask";

const Title = styled.h1``;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    width: 80%;
    height: 40px;
    padding: 0 10px;
    border-radius: 3px;
    font-size: 18px;
    color: #2c2b3c;
  }
`;

function App() {
  return (
    <div className="App">
      <Title>Complete seus dados</Title>
      <form>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="cpf">CPF</label>
          <ReactInputMask mask="999.999.999-99" />
        </FormGroup>
      </form>
    </div>
  );
}

export default App;
