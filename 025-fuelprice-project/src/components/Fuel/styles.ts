import styled from "styled-components";
import imageGasStation from "../../assets/gas-station.jpg";
import { FiSettings } from "react-icons/fi";

export const Container = styled.div`
  background: url(${imageGasStation});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  height: 100vh;

  text-align: center;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: bold;

  font-size: 48px;

  color: ${(props) => props.theme.colorGrey200};

  padding-top: 10px;
`;

export const SettingsIcon = styled(FiSettings)`
  color: ${(props) => props.theme.colorGrey200};
  font-size: 32px;
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 20px;
`;
