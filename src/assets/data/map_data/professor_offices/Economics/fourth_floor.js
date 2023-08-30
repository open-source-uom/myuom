import i18n from "../../../../../i18n";
import { FOURTH_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";

let fourth_floor_locations;
export default fourth_floor_locations = [
  {
    floor: i18n.t("fourth_floor"),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "401" + i18n.t("office_letter_a"),
    marked_position_x: 28,
    marked_position_y: 186,
  },
  // {
  //   floor: i18n.t("fourth_floor"),
  //   imageURL: FOURTH_FLOOR_CD_IMG,
  //   title: "402",
  //   marked_position_x: 28,
  //   marked_position_y: 167,
  // },
  {
    floor: i18n.t("fourth_floor"),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "403",
    marked_position_x: 28,
    marked_position_y: 148,
  },
  // {
  //   floor: i18n.t("fourth_floor"),
  //   imageURL: FOURTH_FLOOR_CD_IMG,
  //   title: "405",
  //   marked_position_x: 33,
  //   marked_position_y: 129,
  // },
  {
    floor: i18n.t("fourth_floor"),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "406",
    marked_position_x: 24,
    marked_position_y: 105,
  },
  {
    floor: i18n.t("fourth_floor"),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "407",
    marked_position_x: 51,
    marked_position_y: 99,
  },
  {
    floor: i18n.t("fourth_floor"),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "408",
    marked_position_x: 72,
    marked_position_y: 105,
  },
  {
    floor: i18n.t("fourth_floor"),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "410",
    marked_position_x: 91,
    marked_position_y: 98,
  },
  {
    floor: i18n.t("fourth_floor"),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "411",
    marked_position_x: 110,
    marked_position_y: 97,
  },
  {
    floor: i18n.t("fourth_floor"),
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    title: "412",
    marked_position_x: 144,
    marked_position_y: 113,
  },
  // {
  //   floor: i18n.t("fourth_floor"),
  //   imageURL: FOURTH_FLOOR_CD_IMG,
  //   title: "413",
  //   marked_position_x: 151,
  //   marked_position_y: 182,
  // },
  // {
  //   floor: i18n.t("fourth_floor"),
  //   imageURL: FOURTH_FLOOR_CD_IMG,
  //   title: "414",
  //   marked_position_x: 99,
  //   marked_position_y: 195,
  // },
];
