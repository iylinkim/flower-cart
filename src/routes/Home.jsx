import { cartLists } from "data";
import CartItem from "components/CartItem";
import React, { useState } from "react";
import Dropdown from "components/Dropdown";
import "styles/home.scss";
import Total from "components/Total";

const Home = (props) => {
  const [currentDeliveryType, setCurrentDeliveryType] = useState(null);
  console.log(currentDeliveryType)
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
          <input type="checkbox" className="all_chk" />
          <label>전체</label>
        </p>
        <ul className="cart_list">
          {cartLists.map((info) => {
            return <CartItem key={info.id} info={info} />;
          })}
        </ul>
      </div>
      <Total currentDeliveryType={currentDeliveryType}/>
    </div>
  );
};

export default Home;
