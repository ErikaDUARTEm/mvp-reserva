import { createContext, useContext, useEffect, useState } from "react";
import categoriesData from "../services.json";

// Creamos el contexto
export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
     setCategories(categoriesData.services)
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useProgress debe ser usado dentro de un ProgressProvider");
  }
  return context;
};
