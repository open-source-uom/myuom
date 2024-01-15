import { useContext } from "react";
import { DepartmentContext } from "../contexts/departmentContext";



export const useDepCode = () => {
    // console.log("useDepName.js: useDepName()", useContext(DepartmentContext));
    const { departmentCode, changeDepartmentCode } = useContext(DepartmentContext);
    return [departmentCode, changeDepartmentCode];

}
