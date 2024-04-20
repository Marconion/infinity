import React, { useRef } from "react";

export const FormRefContext = React.createContext();

export const FormRefProvider = ({ children }) => {
  const form = useRef();

  return (
    <FormRefContext.Provider value={form}>{children}</FormRefContext.Provider>
  );
};
