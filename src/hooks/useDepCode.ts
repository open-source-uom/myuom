import { useContext } from "react";
import { DepartmentContext, DepartmentContextType } from "../contexts/departmentContext";

export const useDepCode = (): DepartmentContextType => {
  return useContext(DepartmentContext);
};
