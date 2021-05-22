import { cartLists } from "data";
import CartItem from "components/CartItem";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "components/Dropdown";
import "styles/home.scss";
import Total from "components/Total";
import { useCheck } from "hooks/state";

const Home = () => {
  const [currentDeliveryType, setCurrentDeliveryType] = useState(null);
  const [cartListsData, setCartListsData] = useState(
    cartLists.map((data) => ({ ...data, selected: true }))
  );
  const { check, setCheck } = useCheck(cartListsData);
  const [orderResult, setOrderResult] = useState({
    totalPrice: 0,
    cartListsData: [],
    currentDeliveryType,
  });

  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      if (cartListsData.filter(data => data.selected).length === cartLists.length) {
        inputRef.current.checked = true;
      } else {
        inputRef.current.checked = false;
      }
    }
  }, [check, cartListsData.length]);


  const handleCheck = () => {
    setCheck((prev) => ({ ...prev, allChk: !prev.allChk }));
  };

  useEffect(() => {
    setOrderResult((prev) => ({
      ...prev,
      currentDeliveryType,
      cartListsData: cartListsData.filter((data) => data.selected),
    }));
  }, [currentDeliveryType, cartListsData]);

  const getTotalPrice = (result) => {
    setOrderResult((prev) => ({ ...prev, totalPrice: result }));
  };

  const handleOrder = () => {
    if (!orderResult.cartListsData.length) alert("상품을 선택해주세요");
    else if (currentDeliveryType === null) alert("배송 방법을 선택해주세요");
    else console.log(orderResult);
  };

  return (
    <div className="cart">
      <h2 className="cart_title main">장바구니</h2>
      <div className="cart_content">
        <h3 className="cart_title address">주소</h3>
        <p>서울시 강남구 도산대로 174 7층</p>
      </div>
      <div className="cart_content">
        <h3 className="cart_title">배송방법</h3>
        <Dropdown setCurrentDeliveryType={setCurrentDeliveryType} />
      </div>
      <div className="cart_content">
        <h3 className="cart_title">상품 내역</h3>
        <p className="all_chk_area">
          <input
            type="checkbox"
            className="all_chk"
            ref={inputRef}
            onClick={handleCheck}
          />
          <label>전체</label>
        </p>
        <ul className="cart_list">
          {cartListsData.length
            ? cartListsData.map((info) => {
                return (
                  <CartItem
                    key={info.id}
                    info={info}
                    cartListsData={cartListsData}
                    setCartListsData={setCartListsData}
                    check={check}
                    setCheck={setCheck}
                  />
                );
              })
            : "장바구니가 비었습니다"}
        </ul>
      </div>
      <Total
        currentDeliveryType={currentDeliveryType}
        cartListsData={cartListsData}
        getTotalPrice={getTotalPrice}
      />
      <div className="order_area">
        <button className="order_btn" onClick={handleOrder}>
          주문하기
        </button>
      </div>
    </div>
  );
};

export default Home;
