import i18n from "../../../../../i18n";
import { SECOND_FLOOR_KZ_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const second_floor_locations: Location[] = [
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "202",
    marked_position_x: 25,
    marked_position_y: 131,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "205",
    marked_position_x: 27,
    marked_position_y: 95,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "208",
    marked_position_x: 78,
    marked_position_y: 58,
  },
];

export default second_floor_locations;
