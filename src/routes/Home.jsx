import { cartLists } from "data";
import CartItem from "components/CartItem";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "components/Dropdown";
import "styles/home.scss";
import Total from "components/Total";
import { useCheck } from "hooks/state";

const Home = (props) => {
  const [currentDeliveryType, setCurrentDeliveryType] = useState(null);
  const [cartListsData, setCartListsData] = useState(
    cartLists.map((data) => ({ ...data, selected: true }))
  );
  const { check, setCheck } = useCheck(cartListsData);

  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      if (check.checkedItem === cartListsData.length || check.allChk) {
        inputRef.current.checked = true;
      } else {
        inputRef.current.checked = false;
      }
    }
  }, [check, cartListsData.length]);

  const handleCheck = () => {
    setCheck((prev) => !prev);
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
        <Dropdown
          currentDeliveryType={currentDeliveryType}
          setCurrentDeliveryType={setCurrentDeliveryType}
        />
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
      />
    </div>
  );
};

export default Home;
