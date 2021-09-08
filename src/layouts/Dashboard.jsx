import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CardDetail from "../pages/CardDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"></ToastContainer>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:name" component={ProductDetail} />
            <Route exact path="/card" component={CardDetail} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
