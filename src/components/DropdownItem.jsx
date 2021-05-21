import { useDeliveryType, useDropdown } from "hooks/state";
import React, { useEffect } from "react";

const DropdownItem = ({ type, isDropdownOpen, setCurrentDeliveryType }) => {
  const { deliveryType, getDeliveryType, setIsDropdownOpen } =
    useDropdown(false);

  const onClick = () => {
    getDeliveryType(type);
    setCurrentDeliveryType(deliveryType);
  };

  console.log(isDropdownOpen)

 
  return (
    <li className="type" onClick={onClick}>
      <p className="selected"></p>
      {type.name}
      <span>{type.delivery_price}</span>
    </li>
  );
};

export default DropdownItem;
