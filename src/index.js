import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Context providers
import { ProductsProvider } from "./utils/contexts/products.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>
);
