import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext(null);

// const getItemStorage = (key) => {
//   JSON.parse(localStorage.getItem(key));
// };

const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [countItems, setCountItems] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newItem = [...cart].map((item) => {
        if (item.id === id) {
          return { ...product, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newItem);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeToCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newItem = [...cart].map((item) => {
        if (item.id === id) {
          return { ...product, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newItem);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  useEffect(() => {
    const countCart = cart.length;
    setCountItems(countCart);
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        addToCart,
        cart,
        countItems,
        removeToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContext;
