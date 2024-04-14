import i18n from "../../../../../i18n";
import { FIFTH_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const fifth_floor_locations: Location[] = [
  {
    floor: String(i18n.t("fifth_floor")),
    imageURL: FIFTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "502",
    marked_position_x: 31,
    marked_position_y: 99,
  },
  {
    floor: String(i18n.t("fifth_floor")),
    imageURL: FIFTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "503",
    marked_position_x: 55,
    marked_position_y: 93,
  },
  {
    floor: String(i18n.t("fifth_floor")),
    imageURL: FIFTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "504",
    marked_position_x: 76,
    marked_position_y: 96,
  },
  {
    floor: String(i18n.t("fifth_floor")),
    imageURL: FIFTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "507",
    marked_position_x: 112,
    marked_position_y: 93,
  },
  {
    floor: String(i18n.t("fifth_floor")),
    imageURL: FIFTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "508",
    marked_position_x: 146,
    marked_position_y: 111,
  },
];

export default fifth_floor_locations;
