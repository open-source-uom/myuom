import i18n from "../../../../../i18n";
import { THIRD_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const third_floor_locations: Location[] = [
  // {
  //   floor: String(i18n.t("third_floor")),
  //   imageURL: THIRD_FLOOR_CD_IMG,
  //   title: "302",
  //   marked_position_x: 26,
  //   marked_position_y: 163,
  // },
  {
    floor: String(i18n.t("third_floor")),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "305",
    marked_position_x: 29,
    marked_position_y: 125,
  },
  {
    floor: String(i18n.t("third_floor")),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "306",
    marked_position_x: 20,
    marked_position_y: 94,
  },
  {
    floor: String(i18n.t("third_floor")),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "307",
    marked_position_x: 47,
    marked_position_y: 90,
  },
  {
    floor: String(i18n.t("third_floor")),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "308",
    marked_position_x: 67,
    marked_position_y: 90,
  },
  {
    floor: String(i18n.t("third_floor")),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "310",
    marked_position_x: 88,
    marked_position_y: 98,
  },
  {
    floor: String(i18n.t("third_floor")),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "311",
    marked_position_x: 104,
    marked_position_y: 90,
  },
  {
    floor: String(i18n.t("third_floor")),
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "312",
    marked_position_x: 140,
    marked_position_y: 100,
  },
  // {
  //   floor: String(i18n.t("third_floor")),
  //   imageURL: THIRD_FLOOR_CD_IMG,
  //   title: "313",
  //   marked_position_x: 150,
  //   marked_position_y: 186,
  // },
  // {
  //   floor: String(i18n.t("third_floor")),
  //   imageURL: THIRD_FLOOR_CD_IMG,
  //   title: "314",
  //   marked_position_x: 111,
  //   marked_position_y: 189,
  // },
];

export default third_floor_locations;
