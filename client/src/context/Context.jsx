import { createContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [inventories, setInventories] = useState([]);
  const { data, error } = useApi("/");

  useEffect(() => {
    if (data) {
      setInventories(data);
    }
  }, [data]);

  return (
    <Context.Provider value={{ inventories, setInventories }}>{children}</Context.Provider>
  );
};
