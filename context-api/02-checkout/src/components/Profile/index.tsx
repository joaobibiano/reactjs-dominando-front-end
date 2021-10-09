import styled from "styled-components";
import { useUser } from "../../context/UserContext";

const Container = styled.div`
  display: flex;
  border: 2px solid red;
`;

const Message = styled.p`
  font-size: 1.2rem;
`;

const InputName = styled.input`
  font-size: 1.2rem;
`;

export const Profile = () => {
  const user = useUser();

  return (
    <Container>
      <Message>Olá seja bem vindo ao seu profile</Message>
      <InputName
        value={user.state.name}
        onChange={(ev) => {
          // user.updateUserName(ev.target.value);
          user.dispatch({
            type: "update_name",
            newName: ev.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          user.dispatch({
            type: "update_token",
            newToken: "TOKEN_NOVO_A1B2C3D4",
          });
        }}
      >
        Atualizar token
      </button>

      <button
        onClick={() => {
          user.dispatch({
            type: "increment_clicks",
          });
        }}
      >
        Adicionar click count
      </button>
    </Container>
  );
};
