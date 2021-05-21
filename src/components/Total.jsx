import { useDropdown } from "hooks/state";
import React, { useEffect } from "react";

const Total = ({ currentDeliveryType }) => {
  return (
    <div className="total">
      <p className="total_item price">
        총 상품 금액<span></span>원
      </p>
      <p className="total_item price">
        총 상품 수량<span></span>개
      </p>
      <p className="total_item price">
        총 배송비
        <span>
          {currentDeliveryType
            ? new Intl.NumberFormat("en-IN").format(
                currentDeliveryType.delivery_price
              )
            : 0}
        </span>
        원
      </p>
      <p className="total_item price">
        총 결제하실 금액<span></span>원
      </p>
    </div>
  );
};

export default Total;
