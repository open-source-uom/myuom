import second_floor from "./second_floor";
import third_floor from "./third_floor";
import fourth_floor from "./fourth_floor";
import { DEPARTMENT_CODES } from "../../../DepNames";
let locations = second_floor.concat(third_floor).concat(fourth_floor);
let departmentLocations = {
  department: DEPARTMENT_CODES.ACCOUNTING_FINANCE,
  locations,
};
export default departmentLocations;
