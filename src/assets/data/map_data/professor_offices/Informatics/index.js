import second_floor from "./second_floor"
import third_floor from "./third_floor"
import fourth_floor from "./fourth_floor"
import fifth_floor from "./fifth_floor"
import i18n from "../../../../../i18n"

let locations = second_floor.concat(third_floor).concat(fourth_floor).concat(fifth_floor)
let departmentLocations = {
    department: i18n.t("depname_dai"),
    locations
}
export default departmentLocations;