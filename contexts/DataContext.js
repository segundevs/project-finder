import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }, data) => {
  const [user, setUser] = useState("Bash");

  return (
    <DataContext.Provider value={{ user }}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
