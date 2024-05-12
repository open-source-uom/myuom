import second_floor from "./second_floor";
import third_floor from "./third_floor";
import { DEPARTMENT_CODES } from "../../../DepNames";
import { DepartmentLocations } from "..";
const locations = [...second_floor,...third_floor,];

const departmentLocations: DepartmentLocations = {
  department: DEPARTMENT_CODES.EDUCATION,
  locations,
};

export default departmentLocations;
