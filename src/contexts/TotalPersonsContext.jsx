import React, { useState } from "react";

export const TotalPersonsContext = React.createContext();

export const TotalPersonsProvider = ({ children }) => {
  const [totalPersons, setTotalPersons] = useState(null);

  return (
    <TotalPersonsContext.Provider value={{ totalPersons, setTotalPersons }}>
      {children}
    </TotalPersonsContext.Provider>
  );
};
