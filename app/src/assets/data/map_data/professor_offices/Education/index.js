import second_floor from "./second_floor";
import third_floor from "./third_floor";
import { DEPARTMENT_CODES } from "../../../DepNames";
let locations = second_floor.concat(third_floor);
let departmentLocations = {
  department: DEPARTMENT_CODES.EDUCATION,
  locations,
};
export default departmentLocations;
