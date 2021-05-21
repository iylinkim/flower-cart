import React from "react";

const CartItem = ({ info }) => {
  const { id, image_url, product_name, product_price, current_count, stock } =
    info;
  return (
    <li className="cart_item">
      <p className="chk">
        <input type="checkbox" />
      </p>
      <p className="cart_item_img">
        <img src={image_url} alt={product_name} />
      </p>
      <strong className="cart_item_title">{product_name}</strong>
      <strong className="cart_item_price">{product_price}원</strong>
      <button className="delete_btn">x</button>
    </li>
  );
};

export default CartItem;
