import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DepartmentContext = createContext({
  depName: "",
});

export const DepartmentProvider = ({ children }) => {
  const [depName, setDepName] = useLocalStorage('depName', null);

  function changeDepartmentName(departmentToBeSet) {
    setDepName(departmentToBeSet);
  }

  const value = { depName, changeDepartmentName };
  return (
    <DepartmentContext.Provider value={value}>
      {children}
    </DepartmentContext.Provider>
  );
};
