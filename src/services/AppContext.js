import React, { Component } from "react";
import { getProducts } from "./products";
import { getCategories } from "./categories";
import { getBestsellers } from "./bestseller";
import { getProductscategory } from "./productscategory";
import { getOrdersCustomer } from "./getorderscustomer";
import { getStatus } from "./getstatus";
import {getBrands} from './getbrands';
import {getProductsBrand} from './productsbrand';
export const AppContext = React.createContext();
class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      categories: [],
      bestsellers: [],
      productscategory: [],
      cart: [],

      modalOpen: false,
      orders: [],
      user: {},
      deliveryInfor: {},
      brands: [],
      productsbrand: [],
      // status: "",
      // getStatus: async () => {
      //   const status = await getStatus();
      //   this.setState({ status });
      //   console.log("status", status);
      // },
      getProducts: async () => {
        const products = await getProducts();
        this.setState({ products });
      },
      getCategories: async () => {
        const categories = await getCategories();
        this.setState({ categories });
        console.log("categories", categories);
      },
      getBrands: async () => {
        const brands = await getBrands();
        this.setState({ brands });
        console.log("brands", brands);
      },
      getBestsellers: async () => {
        const bestsellers = await getBestsellers();
        this.setState({ bestsellers });
      },
      getProductscategory: async id => {
        const productscategory = await getProductscategory(id);
        this.setState({ productscategory });
      },
      getProductsBrand: async id => {
        const productsbrand = await getProductsBrand(id);
        this.setState({ productsbrand });
      },
      getOrdersCustomer: async customerID => {
        const orders = await getOrdersCustomer(customerID);
        this.setState({ orders });
      }
    };
  }

  login = user => {
    this.setState({ user });
    localStorage.setItem("user", JSON.stringify(user));
  };
  getOrderStatus = status => {
    let orderstatus = "";
    if (status === "5d50e0a270e4970501ff2b6a") {
      orderstatus = "Đang xử lý";
    }
    return orderstatus;
  };
  logout = user => {
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  addToCart = product => {
    product.cartquantity = 1;
    this.setState({
      cart: this.state.cart.concat(product)
    });
    // console.log("cart", this.state.cart);
  };
  getTotal = cart => {
    let _total = 0;
    cart.map(item => {
      _total += (item.price - item.discountAmount) * item.cartquantity;
    });
    return this.formatMoney(_total);
  };
  getLengthCart = cart => {
    let lengthCart = 0;
    cart.map(item => {
      lengthCart += item.cartquantity;
    });
    return lengthCart;
  };
  clearCart = () => {
    this.setState({ cart: [] });
  };
  removeItem = _id => {
    let tempCart = this.state.cart.filter(item => item._id !== _id);
    this.setState({ cart: tempCart });
  };
  componentDidMount = async () => {
    const user = await localStorage.getItem("user");
    this.setState({ user: JSON.parse(user) });
  };
  increment = item => {
    let tempCart = [...this.state.cart];

    let index = tempCart.indexOf(item);
    if (tempCart[index].cartquantity < tempCart[index].quantity) {
      tempCart[index].cartquantity += 1;

      this.setState({ cart: [...tempCart] });
    } else {
      alert("chỉ còn " + tempCart[index].quantity + "sản phẩm");
    }
  };
  decrement = item => {
    let tempCart = [...this.state.cart];
    let index = tempCart.indexOf(item);
    tempCart[index].cartquantity -= 1;
    this.setState({ cart: [...tempCart] });
    console.log("cart", this.state.cart);
  };
  openModal = () => {
    this.setState(() => {
      return { modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  getFromLocal = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    // const deliveryinfor = JSON.parse(localStorage.getItem("deliveryinfor"));
    this.setState({ user: user });
  };
  getDeliveryLocal = () => {
    const deliveryInfor = JSON.parse(localStorage.getItem("deliveryinfor"));
    this.setState({ deliveryInfor: deliveryInfor });
  };

  formatMoney= (number)=> {
    
number = number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
return number;
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          getTotal: this.getTotal,
          clearCart: this.clearCart,
          removeItem: this.removeItem,
          login: this.login,
          logout: this.logout,
          increment: this.increment,
          decrement: this.decrement,
          openModal: this.openModal,
          closeModal: this.closeModal,
          getLengthCart: this.getLengthCart,
          getFromLocal: this.getFromLocal,
          getDeliveryLocal: this.getDeliveryLocal,
          getOrderStatus: this.getOrderStatus,
          formatMoney: this.formatMoney
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
