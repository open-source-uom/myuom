import i18n from "../../../../../i18n";
import { THIRD_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";


let locations: Location[];
export default locations = [
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "321",
    marked_position_x: 203,
    marked_position_y: 102,
  },
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "322",
    marked_position_x: 239,
    marked_position_y: 94,
  },
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "323",
    marked_position_x: 255,
    marked_position_y: 94,
  },
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "325",
    marked_position_x: 274,
    marked_position_y: 95,
  },
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "326",
    marked_position_x: 295,
    marked_position_y: 96,
  },
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "328",
    marked_position_x: 312,
    marked_position_y: 126,
  },
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "330",
    marked_position_x: 314,
    marked_position_y: 144,
  },
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "331",
    marked_position_x: 312,
    marked_position_y: 166,
  },
  {
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    floor: i18n.t("third_floor") as string,
    title: "332",
    marked_position_x: 294,
    marked_position_y: 183,
  },
];
