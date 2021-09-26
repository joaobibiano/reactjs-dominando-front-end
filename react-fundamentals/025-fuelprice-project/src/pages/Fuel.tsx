import React, { useState } from "react";
import { FuelComponent } from "../components/Fuel";

export const FuelPage = () => {
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode() {
    setEditMode((prev) => !prev);
  }

  return <FuelComponent editMode={editMode} toggleEditMode={toggleEditMode} />;
};
