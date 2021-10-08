import styled from "styled-components";
import { TotalMessage } from "../TotalMessage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerRow = styled.div`
  display: flex;
`;

const Message = styled.p`
  font-size: 1.2rem;
`;

const TotalValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

type TotalProps = {
  userName: string;
};

export const Total = ({ userName }: TotalProps) => {
  return (
    <Container>
      <ContainerRow>
        <Message>Total</Message>
        <TotalValue>R$ 100,00</TotalValue>
      </ContainerRow>

      <TotalMessage userName={userName} />
    </Container>
  );
};
