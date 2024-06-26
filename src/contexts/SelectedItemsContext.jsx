import React, { useState } from "react";

export const SelectedItemsContext = React.createContext();

export const SelectedItemsContextProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  return (
    <SelectedItemsContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedItemsContext.Provider>
  );
};
