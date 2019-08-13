import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getCategories() {
  try {
    const { data } = await axios.get(apiLinks.categories);
    return data;
  } catch (err) {
    console.log(err);
  }
}
