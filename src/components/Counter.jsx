import { useCounter } from "hooks/state";
import React from "react";

const Coutner = ({ current_count, stock }) => {
  const { count, handleMinus, handlePlus } = useCounter(current_count, stock);

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
