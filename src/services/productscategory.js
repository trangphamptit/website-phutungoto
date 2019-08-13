import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getProductscategory(id) {
  try {
    const { data } = await axios.get(
      `https://phutungotoapi.glitch.me/products/category/${id}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
