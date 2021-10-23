import "./App.css";
import { ProductsTable } from "./components/ProductsTable";
import { Layout } from "./components/Layout";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import { Heading } from "grommet";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Heading>Bem vindo!</Heading>
          </Route>

          <Route exact path="/products/:id">
            <ProductDetail />
          </Route>

          <Route exact path="/products">
            <ProductsTable />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
