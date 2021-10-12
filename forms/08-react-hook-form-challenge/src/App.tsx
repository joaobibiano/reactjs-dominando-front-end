import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import ReactInputMask from "react-input-mask";

const Title = styled.h1`
  color: #afe0ce;
  padding-bottom: 30px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  input {
    width: 80%;
    height: 40px;
    padding: 0 10px;
    border-radius: 3px;
    font-size: 18px;
    color: #2c2b3c;

    &.error {
      transition: 1s ease-out;
      border: 2px solid red;
    }

    &::placeholder {
      font-size: 12px;
    }
  }

  label {
    margin-right: 10px;
    font-size: 20px;
    width: 10%;
    text-align: right;
    color: #afe0ce;
  }
`;

const SubmitButton = styled.button`
  height: 40px;
  padding: 5px 20px;
  background-color: #afe0ce;
  border: none;
  color: #0d1321;
  font-size: 20px;
  cursor: pointer;
`;

function App() {
  return (
    <div className="App">
      <Title>Complete seus dados</Title>
      <form>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" placeholder="inteiro por favor" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="seu melhor email" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="cpf">CPF</label>
          <ReactInputMask
            mask="999.999.999-99"
            placeholder="sua identificação"
          />
        </FormGroup>
        <SubmitButton>Enviar</SubmitButton>
      </form>
    </div>
  );
}

export default App;
