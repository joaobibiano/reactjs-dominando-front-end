import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Switch>
          <Route exact path="/">
            Olá, seja bem vindo
          </Route>

          <Route path="/about-us">Encontre aqui o Sobre nós</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
