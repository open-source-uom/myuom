import i18n from "../../../../../i18n";
import { SECOND_FLOOR_HT_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const ba_second_floor_locations: Location[] = [
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "202",
    marked_position_x: 40,
    marked_position_y: 163,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "203",
    marked_position_x: 36,
    marked_position_y: 145,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "205",
    marked_position_x: 37,
    marked_position_y: 128,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "206",
    marked_position_x: 27,
    marked_position_y: 102,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "207",
    marked_position_x: 52,
    marked_position_y: 102,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "208",
    marked_position_x: 71,
    marked_position_y: 97,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "210",
    marked_position_x: 89,
    marked_position_y: 96,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "211",
    marked_position_x: 108,
    marked_position_y: 99,
  },
  {
    floor:i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "212",
    marked_position_x: 139,
    marked_position_y: 114,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "213-214",
    marked_position_x: 119,
    marked_position_y: 176,
  },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_HT_IMG,
  //   title: "220",
  //   marked_position_x: 211,
  //   marked_position_y: 133,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_HT_IMG,
  //   title: "227",
  //   marked_position_x: 310,
  //   marked_position_y: 105,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_HT_IMG,
  //   title: "231",
  //   marked_position_x: 302,
  //   marked_position_y: 183,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_HT_IMG,
  //   title: "232",
  //   marked_position_x: 222,
  //   marked_position_y: 190,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_HT_IMG,
  //   title: "234" + i18n.t("office_letter_a") + "-234" + i18n.t("office_letter_b"),
  //   marked_position_x: 187,
  //   marked_position_y: 185,
  // },
];

export default ba_second_floor_locations;