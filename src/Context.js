// Context.js
import React, { createContext, useState } from 'react';

export const IdContext = createContext();

const Context = ({ children }) => {
  const [id, setId] = useState(null);
  const [forgotPasswordToken, setForgotPasswordToken] = useState(null);

  return <IdContext.Provider value={{ id, setId, forgotPasswordToken, setForgotPasswordToken }}>{children}</IdContext.Provider>;
};

export default Context;