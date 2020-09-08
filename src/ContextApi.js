import React, { useState, createContext } from "react";

const ContextApi = createContext();

export const ContextProvider = (props) => {
  const initialState = {
    open: false,
  };
  const [open, setMenu] = useState(initialState.open);

  return (
    <ContextApi.Provider value={[open, setMenu]}>
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextApi;
