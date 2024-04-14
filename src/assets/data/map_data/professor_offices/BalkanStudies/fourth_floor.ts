import i18n from "../../../../../i18n";
import { FOURTH_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const fourth_floor_locations: Location[] = [
  // {
  //   floor: String(i18n.t("fourth_floor")),
  //   imageURL: FOURTH_FLOOR_KZ_IMG,
  //   title: "413",
  //   marked_position_x: 154,
  //   marked_position_y: 138,
  // },
  // {
  //   floor: String(i18n.t("fourth_floor")),
  //   imageURL: FOURTH_FLOOR_KZ_IMG,
  //   title: "414",
  //   marked_position_x: 118,
  //   marked_position_y: 141,
  // },
  // {
  //   floor: String(i18n.t("fourth_floor")),
  //   imageURL: FOURTH_FLOOR_KZ_IMG,
  //   title: "415",
  //   marked_position_x: 73,
  //   marked_position_y: 142,
  // },
  {
    floor: String(i18n.t("fourth_floor")),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "415",
    marked_position_x: 68,
    marked_position_y: 185,
  },
];

export default fourth_floor_locations;
