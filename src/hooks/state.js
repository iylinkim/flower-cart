import { cartLists } from "data";
import { useEffect, useState } from "react";

export const useCounter = (current_count, stock) => {
  const [count, setCount] = useState(current_count);

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };
  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count < current_count) {
      setCount(current_count);
    } else if (count > stock) {
      setCount(stock);
    }
  }, [count, current_count, stock]);

  return { count, handleMinus, handlePlus };
};

export const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deliveryType, setDeliveryType] = useState(null);

  const onClick = () => setIsDropdownOpen((prev) => !prev);

  const getDeliveryType = (type) => setDeliveryType(type);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    onClick,
    deliveryType,
    getDeliveryType,
  };
};

export const useCheck = (cartItems) => {
  const [check, setCheck] = useState({
    allChk: true,
    checkedItem: cartItems.length,
  });

  const handleCheck = () =>
  setCheck((prev) => ({ ...prev, allChk: !prev.allChk }));

  return { check, setCheck,handleCheck };
};

export const useCartLists = () => {
  const [cartListsData, setCartListsData] = useState(
    cartLists.map((data) => ({ ...data, selected: true }))
  );

  return { cartListsData, setCartListsData };
};

export const useOrderResult = (type,data) => {
  const [orderResult, setOrderResult] = useState({
    totalPrice: 0,
    cartListsData: [],
    currentDeliveryType: type,
  });

  const getTotalPrice = (result) => {
    setOrderResult((prev) => ({ ...prev, totalPrice: result }));
  };

  useEffect(() => {
    setOrderResult((prev) => ({
      ...prev,
      currentDeliveryType:type,
      cartListsData: data.filter((data) => data.selected),
    }));
  }, [type, data]);

  return { orderResult, setOrderResult,getTotalPrice };
};
