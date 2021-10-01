import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
