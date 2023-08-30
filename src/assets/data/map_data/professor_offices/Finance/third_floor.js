import i18n from "../../../../../i18n";
import { THIRD_FLOOR_HT_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";

let third_floor_locations;
export default third_floor_locations = [
  // {
  //   floor: i18n.t("third_floor"),
  //   imageURL: THIRD_FLOOR_HT_IMG,
  //   title: "303",
  //   marked_position_x: 35,
  //   marked_position_y: 143,
  // },
  // {
  //   floor: i18n.t("third_floor"),
  //   imageURL: THIRD_FLOOR_HT_IMG,
  //   title: "313",
  //   marked_position_x: 160,
  //   marked_position_y: 132,
  // },
  // {
  //   floor: i18n.t("third_floor"),
  //   imageURL: THIRD_FLOOR_HT_IMG,
  //   title: "314",
  //   marked_position_x: 116,
  //   marked_position_y: 188,
  // },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "322",
    marked_position_x: 237,
    marked_position_y: 97,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "323",
    marked_position_x: 256,
    marked_position_y: 94,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "325",
    marked_position_x: 273,
    marked_position_y: 88,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "326",
    marked_position_x: 294,
    marked_position_y: 97,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "328",
    marked_position_x: 307,
    marked_position_y: 124,
  },
  {
    floor: i18n.t("third_floor"),
    imageURL: THIRD_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "333",
    marked_position_x: 273,
    marked_position_y: 196,
  },
];
