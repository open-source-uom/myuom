import i18n from "../../../../../i18n";
import { SECOND_FLOOR_CD_IMG, SECOND_FLOOR_KZ_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const bso_second_floor_locations: Location[] = [
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "200",
    marked_position_x: 80,
    marked_position_y: 162,
  },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_KZ_IMG,
  //   title: "201",
  //   marked_position_x: 41,
  //   marked_position_y: 173,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_KZ_IMG,
  //   title: "203",
  //   marked_position_x: 35,
  //   marked_position_y: 110,
  // },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_CD_IMG,
    ...elevator.library,
    title: "203",
    marked_position_x: 30,
    marked_position_y: 138,
  },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_KZ_IMG,
  //   title: "206",
  //   marked_position_x: 32,
  //   marked_position_y: 71,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_KZ_IMG,
  //   title: "207",
  //   marked_position_x: 57,
  //   marked_position_y: 65,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_KZ_IMG,
  //   title: "210",
  //   marked_position_x: 97,
  //   marked_position_y: 61,
  // },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_CD_IMG,
    ...elevator.library,
    title: "210",
    marked_position_x: 95,
    marked_position_y: 88,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "211",
    marked_position_x: 113,
    marked_position_y: 68,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "212",
    marked_position_x: 151,
    marked_position_y: 77,
  },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_KZ_IMG,
  //   title: "213",
  //   marked_position_x: 161,
  //   marked_position_y: 148,
  // },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_KZ_IMG,
  //   title: "214" + i18n.t("office_letter_a"),
  //   marked_position_x: 148,
  //   marked_position_y: 160,
  // },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "214",
    marked_position_x: 125,
    marked_position_y: 156,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "215",
    marked_position_x: 149,
    marked_position_y: 99,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "221" + i18n.t("office_letter_a"),
    marked_position_x: 211,
    marked_position_y: 79,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "222",
    marked_position_x: 245,
    marked_position_y: 66,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "223",
    marked_position_x: 264,
    marked_position_y: 66,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "225",
    marked_position_x: 282,
    marked_position_y: 66,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "226",
    marked_position_x: 304,
    marked_position_y: 66,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "227",
    marked_position_x: 329,
    marked_position_y: 66,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "228",
    marked_position_x: 329,
    marked_position_y: 96,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "230",
    marked_position_x: 320,
    marked_position_y: 114,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "231",
    marked_position_x: 330,
    marked_position_y: 132,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "232" + i18n.t("office_letter_b"),
    marked_position_x: 324,
    marked_position_y: 170,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "233",
    marked_position_x: 282,
    marked_position_y: 154,
  },
  // {
  //   floor: String(i18n.t("second_floor")),
  //   imageURL: SECOND_FLOOR_KZ_IMG,
  //   title: "234" + i18n.t("office_letter_a"),
  //   marked_position_x: 260,
  //   marked_position_y: 152,
  // },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "234" + i18n.t("office_letter_b"),
    marked_position_x: 247,
    marked_position_y: 151,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "234" + i18n.t("office_letter_c"),
    marked_position_x: 230,
    marked_position_y: 157,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "234" + i18n.t("office_letter_d"),
    marked_position_x: 210,
    marked_position_y: 152,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_KZ_IMG,
    ...elevator.restaurant,
    title: "235",
    marked_position_x: 198,
    marked_position_y: 150,
  },
];

export default bso_second_floor_locations;
