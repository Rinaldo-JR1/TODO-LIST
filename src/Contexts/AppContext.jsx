import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [criador, setCriador] = useState("Rinaldo");

  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <AppContext.Provider value={{ criador }}>{children}</AppContext.Provider>
  );
};
