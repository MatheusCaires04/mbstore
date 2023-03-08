import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";

import { ProductContext } from "./../contexts/ProductsContext";

const Header = () => {
  const { countItems } = useContext(ProductContext);

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] shadow-md bg-white px-8 z-[999]">
      <nav className="max-w-[1100px] mx-auto h-full flex items-center justify-between">
        <Link
          to="/"
          className="flex items-end gap-1 text-xl md:text-2xl font-icon"
        >
          <BsBag className="text-2xl md:text-3xl" />{" "}
          <span className="leading-5 md:leading-6">MBStore</span>
        </Link>
        <ul className="flex items-center gap-4">
          <Link to="/cart">
            <button className="relative text-xl md:text-2xl hover:scale-110 duration-200 p-2 bg-slate-200 rounded-full">
              <MdShoppingCart />
              <span className="absolute -top-1 right-0 text-sm font-semibold">
                {countItems}
              </span>
            </button>
          </Link>
          <button className="px-3 py-1 text-xs md:text-sm font-global font-bold border-2 border-black rounded-md hover:text-white hover:bg-black duration-200">
            Entrar
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
