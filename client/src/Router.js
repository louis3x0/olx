import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
