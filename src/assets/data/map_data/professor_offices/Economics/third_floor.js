import i18n from "../../../../../i18n";
import { THIRD_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";

let third_floor_locations;
export default third_floor_locations = [
  // {
  //   floor: i18n.t("third_floor"),
  //   imageURL: THIRD_FLOOR_CD_IMG,
  //   title: "302",
  //   marked_position_x: 26,
  //   marked_position_y: 163,
  // },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "305",
    marked_position_x: 29,
    marked_position_y: 125,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "306",
    marked_position_x: 20,
    marked_position_y: 94,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "307",
    marked_position_x: 47,
    marked_position_y: 90,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "308",
    marked_position_x: 67,
    marked_position_y: 90,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "310",
    marked_position_x: 88,
    marked_position_y: 98,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "311",
    marked_position_x: 104,
    marked_position_y: 90,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "312",
    marked_position_x: 140,
    marked_position_y: 100,
  },
  // {
  //   floor: i18n.t("third_floor"),
  //   imageURL: THIRD_FLOOR_CD_IMG,
  //   title: "313",
  //   marked_position_x: 150,
  //   marked_position_y: 186,
  // },
  // {
  //   floor: i18n.t("third_floor"),
  //   imageURL: THIRD_FLOOR_CD_IMG,
  //   title: "314",
  //   marked_position_x: 111,
  //   marked_position_y: 189,
  // },
];
