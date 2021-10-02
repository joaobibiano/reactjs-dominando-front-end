import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Production } from "./components/Production";
import { Stock } from "./components/Stock";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

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

          <ProtectedRoute path="/stock">
            <Stock />
          </ProtectedRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
