import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Context providers
import { ProductsProvider } from "./utils/contexts/products.context";
import { CurrentProductProvider } from "./utils/contexts/currentProduct.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CurrentProductProvider>
        <App />
      </CurrentProductProvider>
    </ProductsProvider>
  </React.StrictMode>
);
