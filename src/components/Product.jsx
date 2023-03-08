import React, { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductContext } from "./../contexts/ProductsContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(ProductContext);
  const { id, title, image, price } = product;
  return (
    <li
      key={id}
      className="relative w-[80%] md:w-full h-[300px] md:h-[350px] mx-auto overflow-hidden shadow-xl flex flex-col items-center justify-center p-5 text-center bg-white group"
    >
      <div>
        <img src={image} alt={title} className="w-24 md:w-28" />
      </div>
      <h3 className="text-gray-600 text-sm font-medium mt-5 mb-2">{title}</h3>
      <span className="text-xl md:text-2xl font-black">
        <span className="text-base font-medium mr-2">R$</span>
        {price}
      </span>
      <div className="absolute top-[100%] left-0 w-full h-full bg-black/50 flex flex-col items-end group-hover:top-0 duration-200">
        <Link to={`item/${id}`}>
          <button className="w-10 h-10 flex items-center justify-center border-2 border-white text-white text-2xl hover:bg-white/70 hover:text-black hover:border-black duration-150 mt-2 mr-2">
            <AiOutlineEye />
          </button>
        </Link>
        <button
          onClick={() => addToCart(product, id)}
          className="w-10 h-10 flex items-center justify-center border-2 border-white text-white text-2xl hover:bg-white/70 hover:text-black hover:border-black duration-150 mt-3 mr-2"
        >
          <MdAdd />
        </button>
      </div>
    </li>
  );
};

export default Product;
