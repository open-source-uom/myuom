import i18n from "../../../../../i18n";
import { SECOND_FLOOR_HT_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";

let fin_second_floor_locations;
export default fin_second_floor_locations = [
  // {
  //   floor: i18n.t("second_floor"),
  //   imageURL: SECOND_FLOOR_HT_IMG,
  //   title: "201" + i18n.t("office_letter_a"),
  //   marked_position_x: 42,
  //   marked_position_y: 196,
  // },
  // {
  //   floor: i18n.t("second_floor"),
  //   imageURL: SECOND_FLOOR_HT_IMG,
  //   title: "201" + i18n.t("office_letter_b"),
  //   marked_position_x: 23,
  //   marked_position_y: 180,
  // },
  // {
  //   floor: i18n.t("second_floor"),
  //   imageURL: SECOND_FLOOR_HT_IMG,
  //   title: i18n.t("lab") + " 212",
  //   marked_position_x: 151,
  //   marked_position_y: 133,
  // },
  {
    floor: i18n.t("second_floor"),
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "221",
    marked_position_x: 199,
    marked_position_y: 112,
  },
  {
    floor: i18n.t("second_floor"),
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "222",
    marked_position_x: 231,
    marked_position_y: 102,
  },
  {
    floor: i18n.t("second_floor"),
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "223",
    marked_position_x: 250,
    marked_position_y: 95,
  },
  {
    floor: i18n.t("second_floor"),
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "225",
    marked_position_x: 268,
    marked_position_y: 102,
  },
  {
    floor: i18n.t("second_floor"),
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "226",
    marked_position_x: 287,
    marked_position_y: 100,
  },
  {
    floor: i18n.t("second_floor"),
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "228",
    marked_position_x: 301,
    marked_position_y: 129,
  },
  {
    floor: i18n.t("second_floor"),
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "230",
    marked_position_x: 307,
    marked_position_y: 145,
  },
];
