import React, { Component } from "react";

import "./App.css";
import Home from "./views/Home/Home";
import UserProfile from "./views/UserProfile/UserProfile";
import Details from "./views/Details/Details";
import ListCategory from "./views/ListCategory/ListCategory";
import Products from "./views/Products/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BestSeller from "./views/BestSeller/BestSeller";
import ContainerPage from "./containerpage/ContainerPage";
import Cart from "./views/Cart/Cart";
import BillForm from "./views/BillForm.js";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Delivery from "./views/Delivery/Delivery";
import VisaForm from "./views/Payment/VisaForm";
import AppProvider from "./services/AppContext";
import ProductsCategory from "./views/ProductsCategory/ProductsCategory";
import ProductsBrand from "./views/ProductsBrand/ProductsBrand";
import About from "./views/About/About";
import OrdersCustomer from "./views/OrdersCustomer/OrdersCustomer";
import ListBrands from "./views/ListBrands/ListBrands";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <BrowserRouter>
          <ContainerPage>
            <div className="App">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/userprofile" component={UserProfile} />
                <Route path="/details/:id" component={Details} />
                <Route path="/listcategory" component={ListCategory} />
                <Route path="/products" component={Products} />
                <Route path="/bestseller" component={BestSeller} />
                <Route path="/cart" component={Cart} />
                <Route path="/billform" component={BillForm} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/delivery" component={Delivery} />
                <Route path="/visaform" component={VisaForm} />
                <Route path="/orders" component={OrdersCustomer} />
                <Route
                  path="/productscategory/:id"
                  component={ProductsCategory}
                />
                <Route path="/about" component={About} />
                <Route path="/brands" component={ListBrands} />
                <Route path="/productsbrand/:id" component={ProductsBrand} />
              </Switch>
            </div>
          </ContainerPage>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;
