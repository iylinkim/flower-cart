import { useEffect, useState } from "react";

export const useCounter = (current_count, stock) => {
    const [count, setCount] = useState(current_count);
  
    const handleMinus = () => {
      setCount((prev) => prev - 1);
    };
    const handlePlus = () => {
      setCount((prev) => prev + 1);
    };
  
    useEffect(() => {
      if (count < current_count) {
        setCount(current_count);
      } else if (count > stock) {
        setCount(stock);
      }
    }, [count]);
  
    return { count, handleMinus, handlePlus };
  };