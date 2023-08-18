
import { useDepartments } from "./useDepartments";
import { useDepCode } from "./useDepCode";
export const useDepName = () => {
    const departments = useDepartments();
    const [depCode, setDepCode] = useDepCode();
    let foundDepartment = departments.find(dep => dep.code === depCode);
    let depName = ""
    if (foundDepartment) {
        depName = foundDepartment.name;
    }


    return [depName, depCode, setDepCode];
}