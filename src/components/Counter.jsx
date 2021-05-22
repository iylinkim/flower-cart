import { useCounter } from "hooks/state";
import React, { useEffect } from "react";
import "styles/counter.scss";

const Coutner = ({ current_count, stock, getItemCount }) => {
  const { count, handleMinus, handlePlus } = useCounter(current_count, stock);

  useEffect(() => {
    getItemCount(count);
  }, [count]);
  return (
    <div className="counter">
      <button onClick={handleMinus} className="counterBtn minus" name="minus">
        <i className="fas fa-minus"></i>
      </button>
      <span className="number">{count}</span>
      <button onClick={handlePlus} className="counterBtn plus" name="plus">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default Coutner;
