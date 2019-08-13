import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getStatus() {
  try {
    const { data } = await axios.get(apiLinks.orderStatus);
    return data;
  } catch (err) {
    console.log(err);
  }
}
