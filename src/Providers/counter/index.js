import { createContext } from "react";
// import { CartContext } from "../Cart";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const addNumber = (product) => {
    product.quantidade += 1;
  };

  const subNumber = (product) => {
    product.quantidade -= 1;
  };

  return (
    <CounterContext.Provider value={{ addNumber, subNumber }}>
      {children}
    </CounterContext.Provider>
  );
};
