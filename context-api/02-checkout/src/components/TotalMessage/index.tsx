import styled from "styled-components";
import { useUser } from "../../context/UserContext";

const Container = styled.div`
  display: flex;
`;

const Message = styled.p`
  font-size: 1.2rem;
`;

export const TotalMessage = () => {
  const user = useUser();

  return (
    <Container>
      <Message>
        {user.name}, o valor da sua compra ultrapassou R$ 100,00, você tem 5% de
        desconto.
      </Message>
    </Container>
  );
};
