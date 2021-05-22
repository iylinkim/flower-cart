import React, { memo, useEffect, useRef } from "react";
import { useDropdown } from "hooks/state";
import DropdownItem from "./DropdownItem";
import { deliveryTypes } from "data";
import "styles/dropdown.scss";

const Dropdown = memo(({ setCurrentDeliveryType }) => {
  const { isDropdownOpen, deliveryType, getDeliveryType, onClick } =
    useDropdown();
  const ulRef = useRef();

  useEffect(() => {
    setCurrentDeliveryType(deliveryType);
  }, [deliveryType]);

  return (
    <>
      <div className="dropdown" onClick={onClick}>
        <p className="delivery_type">
          {!deliveryType && "선택해주세요"}
          {deliveryType && deliveryType.name}
          <span
            className={
              isDropdownOpen ? "select_icon open" : "select_icon close"
            }
          >
            <i class="fas fa-sort-down"></i>
          </span>
        </p>
      </div>
      {isDropdownOpen && (
        <ul className="types" ref={ulRef}>
          {deliveryTypes.map((type) => {
            return (
              <DropdownItem
                key={type.id}
                type={type}
                getDeliveryType={getDeliveryType}
              />
            );
          })}
        </ul>
      )}
    </>
  );
});

export default Dropdown;
