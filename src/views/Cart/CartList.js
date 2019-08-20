import React from "react";
import CartItem from "./CartItem";
export default function CartList({ value }) {
  return (
    <tbody>
      {value.map((item, index) => {
        return <CartItem key={index} item={item} value={value} />;
      })}
    </tbody>
  );
}
