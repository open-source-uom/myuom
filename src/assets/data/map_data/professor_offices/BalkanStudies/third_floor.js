import i18n from "../../../../../i18n";
import { THIRD_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";

let third_floor_locations;
export default third_floor_locations = [
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "301",
    marked_position_x: 44,
    marked_position_y: 203,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "301" + i18n.t("office_letter_a"),
    marked_position_x: 25,
    marked_position_y: 179,
  },
  // {
  //   floor: i18n.t("third_floor"),
  //   imageURL: THIRD_FLOOR_KZ_IMG,
  //   title: "312" + i18n.t("office_letter_a"),
  //   marked_position_x: 127,
  //   marked_position_y: 50,
  // },
  // {
  //   floor: i18n.t("third_floor"),
  //   imageURL: THIRD_FLOOR_KZ_IMG,
  //   title: "312" + i18n.t("office_letter_b"),
  //   marked_position_x: 145,
  //   marked_position_y: 55,
  // },
];
