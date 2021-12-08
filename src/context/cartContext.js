import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import { doc, updateDoc } from "@firebase/firestore";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item, quantity) => {
    //Busco el item comparando el id
    const isInCart = cart.findIndex((i) => i.item.id === item.id);
    if (isInCart > -1) {
      //Busco la cantidad del item
      const oldQuantity = cart[isInCart].quantity;
      //Borro el item del isInCart
      cart.splice(isInCart, 1);
      //Seteo el mismo item con la quantity actualizada
      setCart([...cart, { item, quantity: quantity + oldQuantity }]);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const actStock = () => {
    const db = getFirestore();

    cart.forEach((element) => {
      const normalStock = doc(db, "items", element.id);
      updateDoc(normalStock, {
        stock: element.item.stock - element.quantity,
      });
    });
  };

  useEffect(() => {
    const totalSum = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(totalSum);
  }, [cart]);

  const clearCart = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    const deleteItem = cart.filter((element) => element.item.id !== id);
    setCart(deleteItem);
  };

  const totalPrice = () => {
    return cart.reduce(
      (total, sum) => total + sum.quantity * sum.item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
        actStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
