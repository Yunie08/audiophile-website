import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Context providers
import { ProductsProvider } from "./utils/contexts/products.context";
import { CurrentProductProvider } from "./utils/contexts/currentProduct.context";
import { CartProvider } from "./utils/contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <CurrentProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CurrentProductProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>
);
