import { createContext, useState } from "react";
import {DEPARTMENTS} from '../assets/DepNames';

export const DepartmentContext = createContext({
  depName: "",
});

export const DepartmentProvider = ({ children }) => {
  const [depName, setDepName] = useState(DEPARTMENTS[0]);

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
