import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Production } from "./components/Production";
import { Stock } from "./components/Stock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/production" />
          </Route>

          <Route path="/production/:selectedProduct?">
            <Production />
          </Route>

          <Route path="/stock">
            <Stock />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
