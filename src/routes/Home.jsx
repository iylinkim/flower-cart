import { cartLists } from "data";
import CartItem from "components/CartItem";
import React from "react";
import Dropdown from "components/Dropdown";

const Home = (props) => {
  return (
    <div className="cart">
      <Dropdown/>
      <h2>장바구니</h2>
      <h3>주소</h3>
      <p>서울시 강남구 도산대로 174 7층</p>
      <h3>배송방법</h3>
      <h3>상품 내역</h3>
      <input type="checkbox" className="all_chk" />
      <ul className="cart_list">
        {cartLists.map((info) => {
          return <CartItem key={info.id} info={info} />;
        })}
      </ul>
     
    </div>
  );
};

export default Home;
