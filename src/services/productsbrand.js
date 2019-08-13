import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getProductsBrand(id) {
  try {
    const { data } = await axios.get(
      `https://phutungotoapi.glitch.me/products/brand/${id}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
