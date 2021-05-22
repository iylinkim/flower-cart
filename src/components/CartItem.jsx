import React, { useEffect, useRef } from "react";
import Coutner from "./Counter";
import "styles/cartItem.scss";
import { useCheck } from "hooks/state";

const CartItem = ({
  info,
  cartListsData,
  setCartListsData,
  check,
  setCheck,
}) => {
  const { id, image_url, product_name, product_price, current_count, stock } =
    info;
  const deleteItem = () => {
    setCartListsData((prev) => prev.filter((data) => data.id !== info.id));
    setCheck((prev) => ({ ...prev, checkedItem: cartListsData.length }));
  };

  const inputRef = useRef();
  useEffect(() => {
    if (check.checkedItem === cartListsData.length) {
      if (check) {
        inputRef.current.checked = true;
      } else {
        inputRef.current.checked = false;
      }
    }
  }, [check, cartListsData.length]);

  const handleClick = (e) => {
    if (!e.currentTarget.checked) {
      check.checkedItem -= 1;
      setCartListsData(
        cartListsData.map((info) => {
          if (info.id === id) return { ...info, selected: false };
          else return { ...info };
        })
      );
    } else {
      check.checkedItem += 1;
      setCartListsData(
        cartListsData.map((info) => {
          if (info.id === id) return { ...info, selected: true };
          else return { ...info };
        })
      );
    }
  };

  const getItemCount = (count) => {
    setCartListsData((prev) =>
      prev.map((data) => ({ ...data, select_count: count }))
    );
  };
  return (
    <li id={id} className="cart_item">
      <p className="chk">
        <input type="checkbox" ref={inputRef} onClick={handleClick} />
      </p>
      <p className="cart_item_img">
        <img src={image_url} alt={product_name} />
      </p>
      <strong className="cart_item_title">{product_name}</strong>
      <Coutner
        current_count={current_count}
        stock={stock}
        getItemCount={getItemCount}
      />
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
