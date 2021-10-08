import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Message = styled.p`
  font-size: 1.2rem;
`;

type TotalMessageProps = {
  userName: string;
};

export const TotalMessage = ({ userName }: TotalMessageProps) => {
  return (
    <Container>
      <Message>
        {userName}, o valor da sua compra ultrapassou R$ 100,00, você tem 5% de
        desconto.
      </Message>
    </Container>
  );
};
