import i18n from "../../../../../i18n";
import { THIRD_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";

let third_floor_locations;
export default third_floor_locations = [
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "303",
    marked_position_x: 31,
    marked_position_y: 143,
  },
];
