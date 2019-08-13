import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getBrands() {
  try {
    const { data } = await axios.get(apiLinks.brands);
    return data;
  } catch (err) {
    console.log(err);
  }
}
