import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import store from "./store";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import Alert from "./other/Alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Router = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={Products} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
