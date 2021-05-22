import React from "react";
import "styles/dropdown.scss";

const DropdownItem = ({ type, getDeliveryType }) => {
  const onClick = () => {
    getDeliveryType(type);
  };

  return (
    <li className="type" onClick={onClick}>
      {type.name}
      <span>{type.delivery_price}원</span>
    </li>
  );
};

export default DropdownItem;
