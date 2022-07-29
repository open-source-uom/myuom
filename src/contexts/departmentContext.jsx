import { createContext, useState } from "react";

export const DepartmentContext = createContext({
  depName: "",
});

export const DepartmentProvider = ({ children }) => {
  const [depName, setDepName] = useState("Εφαρμοσμένης Πληροφορικής");
  const value = { depName, setDepName };
  return (
    <DepartmentContext.Provider value={value}>
      {children}
    </DepartmentContext.Provider>
  );
};
