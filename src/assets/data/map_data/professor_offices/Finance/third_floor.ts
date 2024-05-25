import i18n from "../../../../../i18n";
import { THIRD_FLOOR_HT_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const third_floor_locations: Location[] = [
  {
    floor: i18n.t("third_floor")??undefined,
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "322",
    marked_position_x: 237,
    marked_position_y: 97,
  },
  {
    floor: i18n.t("third_floor")??undefined,
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "323",
    marked_position_x: 256,
    marked_position_y: 94,
  },
  {
    floor: i18n.t("third_floor")??undefined,
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "325",
    marked_position_x: 273,
    marked_position_y: 88,
  },
  {
    floor: i18n.t("third_floor")??undefined,
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "326",
    marked_position_x: 294,
    marked_position_y: 97,
  },
  {
    floor: i18n.t("third_floor")??undefined,
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "328",
    marked_position_x: 307,
    marked_position_y: 124,
  },
  {
    floor: i18n.t("third_floor")??undefined,
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "333",
    marked_position_x: 273,
    marked_position_y: 196,
  },
];

export default third_floor_locations;
