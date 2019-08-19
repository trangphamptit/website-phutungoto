import axios from "axios";
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
