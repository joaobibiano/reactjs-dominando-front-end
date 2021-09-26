import React from "react";

type InputProps = {
  type: string;
};

export const Input = (props: InputProps) => {
  return (
    <div>
      <label>{props.type}</label>
      <input />
    </div>
  );
};
