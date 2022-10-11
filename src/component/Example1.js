import React, { useState, createContext, useContext } from "react";

export const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>;
};

const Counter1 = () => {
  const setCounter = useContext(CounterContext);
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

const Container = () => {
  const setCounter = useContext(CounterContext);
  return (
    <div>
      <Counter1 setCounter={setCounter} />
    </div>
  );
};

const Count = () => {
  const counter = useContext(CounterContext);
  console.log(counter);
  return <div>Count: {counter}</div>;
};

const Example1 = () => {
  // const [counter, setCounter] = useState(0);
  return (
    <CounterContextProvider className="container">
      <Container />
      <Count />
    </CounterContextProvider>
  );
};

export default Example1;
