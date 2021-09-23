import React from "react";
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

export const FuelComponent = () => {
  getFuel();
  return (
    <Container>
      <Title>Posto ReactJS</Title>
      <SettingsIcon />

      <Panel>
        <Row>
          <Box>
            <FuelText>Gasolina Comum</FuelText>
          </Box>
          <Box>
            <FuelPrice>4.59</FuelPrice>
          </Box>
        </Row>

        <Row>
          <Box>
            <FuelText>Gasolina Comum</FuelText>
          </Box>
          <Box>
            <FuelPrice>4.59</FuelPrice>
          </Box>
        </Row>

        <Row>
          <Box>
            <FuelText>Gasolina Comum</FuelText>
          </Box>
          <Box>
            <FuelPrice>4.59</FuelPrice>
          </Box>
        </Row>
      </Panel>
    </Container>
  );
};
