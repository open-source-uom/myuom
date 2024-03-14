import { useContext } from "react";
import { DepartmentContext } from "../contexts/departmentContext";

export const useDepCode = () => {
  return useContext(DepartmentContext);
};
