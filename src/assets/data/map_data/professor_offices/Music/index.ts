import third_floor from "./third_floor";
import fourth_floor from "./fourth_floor";
import { DEPARTMENT_CODES } from "../../../DepNames";
import { DepartmentLocations } from "..";
const locations = [...third_floor, ...fourth_floor];

const departmentLocations: DepartmentLocations = {
  department: DEPARTMENT_CODES.MUSIC,
  locations,
};

export default departmentLocations;
