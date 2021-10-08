import styled from "styled-components";
import { Total } from "../Total";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;

export const Checkout = () => {
  return (
    <Container>
      <Title>Checkout</Title>
      <Total />
    </Container>
  );
};
