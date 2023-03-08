import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";

import { ProductContext } from "./../contexts/ProductsContext";

const Cart = () => {
  const { cart, addToCart, removeToCart, removeFromCart } =
    useContext(ProductContext);

  return (
    <div className="px-8 pb-10">
      <h1 className="text-center text-xl md:text-4xl font-bold mt-10 mb-5">
        Carrinho de compras
      </h1>
      <ul className="max-w-[1100px] mx-auto">
        {cart.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {cart.map((product) => {
              return (
                <li
                  key={product.id}
                  className="relative w-full h-[150px] md:h-[200px] mx-auto overflow-hidden shadow-xl flex items-center justify-between p-5 text-center bg-white group"
                >
                  <div className="bg-red-300">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 md:w-28"
                    />
                  </div>
                  <div className="text-start flex-1 pl-3 pr-5">
                    <h3 className="text-gray-600 text-xs font-medium mb-5">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base font-black">
                        <span className="text-xs font-medium mr-1">R$</span>
                        {parseFloat(product.price).toFixed(2)}
                      </span>
                      <div>
                        <button
                          onClick={() => addToCart(product, product.id)}
                          className="text-lg text-blue-600 font-bold"
                        >
                          +
                        </button>
                        <strong className="border-[1px] p-1 text-sm mx-1">
                          {product.amount}
                        </strong>
                        <button
                          onClick={() => removeToCart(product, product.id)}
                          className="text-lg text-blue-600 font-bold"
                        >
                          -
                        </button>
                      </div>
                      <span className="text-sm md:text-base font-black">
                        <span className="text-xs font-medium mr-1">R$</span>
                        {parseFloat(product.amount * product.price).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-700 text-lg font-bold"
                  >
                    X
                  </button>
                </li>
              );
            })}
          </div>
        ) : (
          <div className="w-full mt-36 flex items-center justify-center">
            <FiShoppingCart className="text-3xl md:text-4xl" />
            <h1 className="text-2xl md:text-3xl ml-5">Carrinho vazio</h1>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Cart;
