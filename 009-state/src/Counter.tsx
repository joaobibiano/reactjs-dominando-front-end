import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter((previousCounter) => previousCounter + 1);

    // imperativo
    // document.querySelector('h3')?.innerText = counter + 1
  }

  function subtract() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
};
