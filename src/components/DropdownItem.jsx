import React from "react";

const DropdownItem = ({ type, getDeliveryType }) => {
  const onClick = () => {
    getDeliveryType(type);
  };

  return (
    <li className="type" onClick={onClick}>
      <p className="selected"></p>
      {type.name}
      <span>{type.delivery_price}</span>
    </li>
  );
};

export default DropdownItem;
