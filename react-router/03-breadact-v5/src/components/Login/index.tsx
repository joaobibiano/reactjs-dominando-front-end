export const Login = () => {
  function onLogin() {
    localStorage.setItem("token", "a1b2c3d4");
  }

  return <button onClick={onLogin}>Fazer Login!</button>;
};
