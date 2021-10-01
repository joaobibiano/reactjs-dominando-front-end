import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/production" />
          </Route>

          <Route path="/production">Produção</Route>

          <Route path="/stock">Estoque</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
