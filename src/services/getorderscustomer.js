import axios from "axios";
export async function getOrdersCustomer(customerID) {
  try {
    const { data } = await axios.get(
      `https://phutungotoapi.glitch.me/orders/customer/${customerID}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
