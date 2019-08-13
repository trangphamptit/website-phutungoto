import axios from "axios";
import { apiLinks } from "./APILinks";
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
