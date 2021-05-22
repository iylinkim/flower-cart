import React, { useEffect, useRef } from "react";
import Coutner from "./Counter";
import "styles/cartItem.scss";

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
    if (check.allChk) {
      if (check) {
        inputRef.current.checked = true;
      } else {
        inputRef.current.checked = false;
      }
    }
  }, [check]);

  const handleClick = (e) => {
    if (!e.currentTarget.checked) {
      setCheck((prev) => ({
        checkedItem: (prev.checkedItem -= 1),
        ...prev,
      }));

      setCartListsData(
        cartListsData.map((info) => {
          if (info.id === id) return { ...info, selected: false };
          else return { ...info };
        })
      );
    } else {
      setCheck((prev) => ({
        checkedItem: (prev.checkedItem += 1),
        ...prev,
      }));
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

  useEffect(() => {
    if (inputRef.current) {
      if (info.selected) {
        inputRef.current.checked = true;
      } else {
        inputRef.current.checked = false;
      }
    }
  }, [check, cartListsData.length]);

  return (
    <li id={id} className="cart_item">
      <p className="chk">
        <input type="checkbox" ref={inputRef} onClick={handleClick} />
      </p>
      <p className="cart_item_img">
        <img src={image_url} alt={product_name} />
      </p>
      <div className="cart_item_text">
        <strong className="cart_item_title">{product_name}</strong>
        <strong className="cart_item_price">
          {new Intl.NumberFormat("en-IN").format(product_price)}원
        </strong>
      </div>
      <Coutner
        current_count={current_count}
        stock={stock}
        getItemCount={getItemCount}
      />
      <button onClick={deleteItem} className="delete_btn">
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default CartItem;
