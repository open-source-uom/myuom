import third_floor from "./third_floor";
import fourth_floor from "./fourth_floor";
import { DEPARTMENT_CODES } from "../../../DepNames";
let locations = third_floor.concat(fourth_floor);
let departmentLocations = {
  department: DEPARTMENT_CODES.MUSIC,
  locations,
};
export default departmentLocations;
