import { useDepartments } from "./useDepartments";
import { Department } from "../assets/data/DepNames";
import { useDepCode } from "./useDepCode";
import { DepartmentContextType } from "../contexts/departmentContext";

interface UseDepNameResult {
  depName: string;
  depCode: string | null; // Allow `null` as a valid type for `depCode`
  setDepCode: (newDepCode: string) => void;
}

export const useDepName = (): UseDepNameResult => {
  const departments: Department[] = useDepartments();
  const { departmentCode: depCode, changeDepartmentCode: setDepCode } =
    useDepCode() as DepartmentContextType;

  const foundDepartment: Department | undefined = departments.find(
    (dep: Department) => dep.code === depCode
  );

  const depName: string = foundDepartment?.name || "";

  return { depName, depCode: depCode || "", setDepCode }; // Ensure `depCode` is not `null` in the returned object
};