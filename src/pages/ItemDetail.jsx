import React, { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

import { ProductContext } from "../contexts/ProductsContext";

const ItemDetail = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, image, price } = product;

  console.log(product);
  console.log(id);

  return (
    <div className="px-8 pb-5">
      <h1 className="text-center text-3xl font-medium mt-10 mb-5">
        Detalhes do produto
      </h1>
      <div className="flex flex-col items-center bg-white p-5 px-10">
        <img src={image} alt={title} className="w-36 md:w-44" />
        <h1 className="text-base md:text-lg font-medium text-center text-gray-600 mt-6 mb-3">
          {title}
        </h1>
        <strong className="text-xl">R$ {parseFloat(price).toFixed(2)}</strong>
        <button
          className="flex items-center gap-1 text-sm font-medium mt-7 border-2 border-black px-2 py-1"
          onClick={() => addToCart(product, id)}
        >
          <BsFillCartPlusFill className="text-xl " />
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
