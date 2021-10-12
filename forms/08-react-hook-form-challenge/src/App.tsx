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
  const { register, handleSubmit, control, formState } = useForm({
    mode: "all",
    delayError: 200,
  });

  function onSubmitHandler(values: any) {
    console.log(values);
  }

  return (
    <div className="App">
      <Title>Complete seus dados</Title>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="inteiro por favor"
            {...register("name", { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="seu melhor email"
            {...register("email", { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="cpf">CPF</label>
          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return (
                <ReactInputMask
                  mask="999.999.999-99"
                  placeholder="sua identificação"
                  {...field}
                />
              );
            }}
          />
        </FormGroup>
        <SubmitButton>Enviar</SubmitButton>
      </form>
    </div>
  );
}

export default App;
