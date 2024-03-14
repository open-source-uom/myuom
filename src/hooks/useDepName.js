import { useDepartments } from "./useDepartments";
import { useDepCode } from "./useDepCode";
export const useDepName = () => {
  const departments = useDepartments();
  const { departmentCode: depCode, changeDepartmentCode: setDepCode } =
    useDepCode();
  const foundDepartment = departments.find((dep) => dep.code === depCode);
  const depName = foundDepartment?.name || ""; //! TODO: maintain optional type & adapt, empty strings are riskier due to their falsy value

  return { depName, depCode, setDepCode };
};
