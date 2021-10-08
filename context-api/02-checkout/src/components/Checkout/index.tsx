import styled from "styled-components";
import { Total } from "../Total";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;

type CheckoutProps = {
  userName: string;
};

export const Checkout = ({ userName }: CheckoutProps) => {
  return (
    <Container>
      <Title>Checkout</Title>
      <Total userName={userName} />
    </Container>
  );
};
