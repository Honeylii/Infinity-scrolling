import React from "react";
import { useContext } from "react";
import { CounterContext } from "../App";

const Counter = () => {
  const [counter, setCounter] = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => {
          setCounter((v) => {
            return v + 1;
          });
        }}
      >
        Add on
      </button>
    </div>
  );
};
export default Counter;
