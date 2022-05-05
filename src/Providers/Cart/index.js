import { createContext, useState } from "react";
import { v1 } from "uuid";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.includes(item)) {
      const { name, price, img, category } = item;
      const newItem = {
        id: v1(),
        name: name,
        img: img,
        price: price,
        category: category,
      };
      setCart([...cart, newItem]);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((itemBag) => itemBag.id !== item.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
