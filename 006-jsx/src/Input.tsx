import React from "react";

function getApplicationName() {
  return "Vite com JSX";
}

export const Input = () => {
  // dynamic data
  const label = "Nome";

  const numero = -1;

  return (
    <>
      <p>Paragrafo</p>
      <div>
        {/* <label>{label}</label>
        <label>{1 + 2}</label>

        <label>{getApplicationName()}</label>

        <input /> */}
        {numero > 0 ? "Positivo" : "Negativo"}
      </div>
    </>
  );
};
