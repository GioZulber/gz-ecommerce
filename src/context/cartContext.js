import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { ...item, counter: quantity };
    const isInCart = cart.some((prod) => prod.id === item.id);
    console.log(isInCart);
    if (!isInCart) {
      setCart([...cart, newItem]);
    } else {
      const findItem = cart.find((prod) => prod.id === item.id);
      findItem.counter = findItem.counter + quantity;
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    const deleteItem = cart.filter((element) => element.item.id !== id);
    setCart([...deleteItem]);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
