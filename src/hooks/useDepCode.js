import { useContext } from "react";
import { DepartmentContext } from "../contexts/departmentContext";

export const useDepCode = () => {
  const { departmentCode, changeDepartmentCode } =
    useContext(DepartmentContext);
  return { departmentCode, changeDepartmentCode };
};
