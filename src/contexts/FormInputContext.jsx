import React, { useState } from "react";

export const FormInputContext = React.createContext();

export const FormInputProvider = ({ children }) => {
  const [areFieldsFilled, setAreFieldsFilled] = useState(false);

  return (
    <FormInputContext.Provider value={{ areFieldsFilled, setAreFieldsFilled }}>
      {children}
    </FormInputContext.Provider>
  );
};
