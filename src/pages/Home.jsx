import React, { useContext, useState } from "react";

import Product from "../components/Product";

import { ProductContext } from "./../contexts/ProductsContext";

const Home = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div className="w-full px-8">
      <h1 className="my-6 text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
        Catálogo de Produtos
      </h1>
      <ul className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
