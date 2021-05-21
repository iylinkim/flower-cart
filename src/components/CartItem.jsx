import React from "react";
import Coutner from "./Counter";
import "styles/cartItem.scss";

const CartItem = ({ info, setCartListsData }) => {
  const { image_url, product_name, product_price, current_count, stock } = info;
  const deleteItem = (e) => {
    console.log(info.id);
    setCartListsData(prev => prev.filter(data => data.id !== info.id))
  };
  return (
    <li className="cart_item">
      <p className="chk">
        <input type="checkbox" />
      </p>
      <p className="cart_item_img">
        <img src={image_url} alt={product_name} />
      </p>
      <strong className="cart_item_title">{product_name}</strong>
      <Coutner current_count={current_count} stock={stock} />
      <strong className="cart_item_price">
        {new Intl.NumberFormat("en-IN").format(product_price)}원
      </strong>
      <button onClick={deleteItem} className="delete_btn">
        x
      </button>
    </li>
  );
};

export default CartItem;
