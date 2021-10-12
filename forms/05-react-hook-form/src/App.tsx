import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  "Primeiro Nome": string;
  "Último nome": string;
  Email: string;
  "Mobile number": string;
  Title: string;
  Developer: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "all",
    delayError: 500,
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Primeiro Nome"
        {...register("Primeiro Nome", { required: true, maxLength: 8 })}
      />
      <input
        type="text"
        placeholder="Último nome"
        {...register("Último nome", { required: true, maxLength: 12 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input
        {...register("Developer", { required: true })}
        type="radio"
        value="Yes"
      />
      <input
        {...register("Developer", { required: true })}
        type="radio"
        value="No"
      />

      <input type="submit" />
    </form>
  );
}
