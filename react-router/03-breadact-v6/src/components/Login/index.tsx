import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  function onLogin() {
    localStorage.setItem("token", "a1b2c3d4");
    navigate("/stock");
  }

  return <button onClick={onLogin}>Fazer Login!</button>;
};
