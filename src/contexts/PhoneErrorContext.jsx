import React, { useState } from "react";

export const PhoneErrorContext = React.createContext();

export const PhoneErrorProvider = ({ children }) => {
  const [phoneError, setPhoneError] = useState(false);

  return (
    <PhoneErrorContext.Provider value={{ phoneError, setPhoneError }}>
      {children}
    </PhoneErrorContext.Provider>
  );
};
