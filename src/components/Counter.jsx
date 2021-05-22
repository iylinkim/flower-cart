import { useCounter } from "hooks/state";
import React, { useEffect } from "react";

const Coutner = ({ current_count, stock, getItemCount }) => {
  const { count, handleMinus, handlePlus } = useCounter(current_count, stock);

  useEffect(() => {
    getItemCount(count);
  }, [count]);
  return (
    <div className="counter">
      <button onClick={handleMinus} className="counterBtn minus" name="minus">
        -
      </button>
      <span className="number">{count}</span>
      <button onClick={handlePlus} className="counterBtn plus" name="plus">
        +
      </button>
    </div>
  );
};

export default Coutner;
