import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addProductToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    if (existingProductIndex !== -1) {
      toast.error("Item already added to the cart");
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
      toast.success("Item added to the cart");
    }
  };

  const removeProductFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== productId
    );
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        removeProductFromCart,
        clearCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const getData = () => {
  const storedData = localStorage.getItem("products");
  return storedData ? JSON.parse(storedData) : [];
};

export const saveData = (product) => {
  const storedData = getData();
  const isExist = storedData.some((item) => item.id === product.id);
  if (isExist) {
    return toast.error("Already Added!");
  }
  const updatedData = [...storedData, product];
  localStorage.setItem("products", JSON.stringify(updatedData));
  toast.success("Added Successfully!");
};

export const deleteData = (id) => {
  const storedData = getData();
  const remaining = storedData.filter((item) => item.id !== id);
  localStorage.setItem("products", JSON.stringify(remaining));
  toast.success("Removed Successfully!");
};
