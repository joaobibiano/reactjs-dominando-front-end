import React, { useState } from "react";
import "./styles.css";

export const Semaforo = () => {
  const [selected, setSelected] = useState<"red" | "yellow" | "green">();

  return (
    <div className="container">
      <div className="semaforo">
        <button
          // red selected
          className={`red ${selected === "red" ? "selected" : ""}`}
          onClick={() => setSelected("red")}
        />
        <button
          className={`yellow ${selected === "yellow" ? "selected" : ""}`}
          onClick={() => setSelected("yellow")}
        />
        <button
          className={`green ${selected === "green" ? "selected" : ""}`}
          onClick={() => setSelected("green")}
        />
      </div>

      <div className="info">
        {selected === "red" && <span>Cuidado! Espere abrir o sinal</span>}
        {selected === "yellow" && <span>Atenção, irá fechar em breve!</span>}
        {selected === "green" && <span>Pode passar</span>}
      </div>
    </div>
  );
};
