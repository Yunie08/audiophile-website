import { createContext, useState } from "react";

export const CurrentProductContext = createContext({
  currentProduct: null,
  setCurrentProduct: () => null,
});

export const CurrentProductProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const value = { currentProduct, setCurrentProduct };

  return (
    <CurrentProductContext.Provider value={value}>
      {children}
    </CurrentProductContext.Provider>
  );
};
