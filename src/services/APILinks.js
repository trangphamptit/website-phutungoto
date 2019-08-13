const url = "https://phutungotoapi.glitch.me";
let apiLinks = {
  brands: `${url}/brands`,
  categories: `${url}/categories`,
  login: `${url}​/login`,
  signup: `${url}/signup`,
  ranks: `${url}/customer-ranks`,
  products: `${url}/products`,
  orders: `${url}/orders`,
  ordersHistory: url + "/orders/customer/{id}",
  details: url + "/products/${id}",
  orderStatus: `${url}/order-statuses`,
  bestsellers: `${url}/best-sellers`,
  productscategory: url + "/products/category/${id}",
  productsbrand: url + "/products/brand/${id}",
  getOrdersCustomer: url + "/orders/customer/${customerID}"
};

export { apiLinks };
