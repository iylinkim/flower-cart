import React, { memo, useEffect, useRef, useState } from "react";
import { useDropdown } from "hooks/state";
import DropdownItem from "./DropdownItem";
import { deliveryTypes } from "data";

const Dropdown = memo(({currentDeliveryType,setCurrentDeliveryType}) => {
  const { isDropdownOpen, onClick } = useDropdown();

  const ulRef = useRef();

  return (
    <>
      <div onClick={onClick}>
        {!currentDeliveryType && "선택해주세요"}
        {currentDeliveryType && currentDeliveryType.name}
      </div>
      {isDropdownOpen && (
        <ul className="types" ref={ulRef}>
          {deliveryTypes.map((type) => {
            return (
              <DropdownItem
                key={type.id}
                type={type}
                isDropdownOpen={isDropdownOpen}
                setCurrentDeliveryType={setCurrentDeliveryType}
              />
            );
          })}
        </ul>
      )}
    </>
  );
});

export default Dropdown;
