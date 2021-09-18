import React from "react";

type ButtonType = {
  showAlert: () => void;
};

export const Button = (props: ButtonType) => {
  return <button onClick={props.showAlert}>Clique aqui</button>;
};
