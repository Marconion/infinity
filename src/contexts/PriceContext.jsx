import React, { useState } from "react";

export const PriceContext = React.createContext();

export const PriceProvider = ({ children }) => {
  const [price, setPrice] = useState(null);

  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      {children}
    </PriceContext.Provider>
  );
};
