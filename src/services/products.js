import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getProducts() {
  try {
    const { data } = await axios.get(apiLinks.products);
    return data;
  } catch (err) {
    console.log(err);
  }
}
