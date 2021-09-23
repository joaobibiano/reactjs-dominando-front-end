import React, { useEffect, useState } from "react";
import { getFuel } from "./services";
import {
  Box,
  Container,
  FuelPrice,
  FuelText,
  Panel,
  Row,
  SettingsIcon,
  Title,
} from "./styles";
import { FuelComponentProps, IFuel } from "./types";

export const FuelComponent = ({
  editMode,
  toggleEditMode,
}: FuelComponentProps) => {
  const [fuels, setFuels] = useState<IFuel[]>();

  async function fetchAndUpdateData() {
    const data = await getFuel();

    setFuels(data);
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  return (
    <Container>
      <Title>Posto ReactJS</Title>
      <SettingsIcon onClick={toggleEditMode} />

      {editMode && <h1>EDIT MODE ON</h1>}

      <Panel>
        {fuels?.map((fuel) => (
          <Row key={fuel.id}>
            <Box>
              <FuelText>{fuel.name}</FuelText>
            </Box>
            <Box>
              <FuelPrice>{fuel.price}</FuelPrice>
            </Box>
          </Row>
        ))}
      </Panel>
    </Container>
  );
};
