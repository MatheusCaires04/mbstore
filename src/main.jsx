import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductsContext from "./contexts/ProductsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsContext>
    <App />
  </ProductsContext>
);
