import i18n from "../../../../../i18n";
import { SECOND_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const econ_second_floor_locations: Location[] = [
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_CD_IMG,
  //   title: "201" + String(i18n.t("office_letter_a")),
  //   marked_position_x: 35,
  //   marked_position_y: 197,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_CD_IMG,
  //   title: "201" + String(i18n.t("office_letter_b")),
  //   marked_position_x: 30,
  //   marked_position_y: 178,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_CD_IMG,
  //   title: "202",
  //   marked_position_x: 30,
  //   marked_position_y: 158,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_CD_IMG,
  //   title: "205",
  //   marked_position_x: 30,
  //   marked_position_y: 118,
  // },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_CD_IMG,
    ...elevator.library,
    title: "206",
    marked_position_x: 29,
    marked_position_y: 88,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_CD_IMG,
    ...elevator.library,
    title: "207",
    marked_position_x: 55,
    marked_position_y: 88,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_CD_IMG,
    ...elevator.library,
    title: "208",
    marked_position_x: 76,
    marked_position_y: 88,
  },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_CD_IMG,
  //   title: "211",
  //   marked_position_x: 113,
  //   marked_position_y: 88,
  // },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_CD_IMG,
    ...elevator.library,
    title: "212",
    marked_position_x: 150,
    marked_position_y: 88,
  },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_CD_IMG,
  //   title: "213-214",
  //   marked_position_x: 130,
  //   marked_position_y: 183,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_CD_IMG,
  //   title: "216",
  //   marked_position_x: 145,
  //   marked_position_y: 121,
  // },
];

export default econ_second_floor_locations;
