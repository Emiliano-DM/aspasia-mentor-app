import { createContext, useState } from "react";

export const resultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  return (
    <resultContext.Provider value={{ results, setResults }}>
      {children}
    </resultContext.Provider>
  );
};
