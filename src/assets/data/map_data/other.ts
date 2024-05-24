import { Location } from "../../../hooks/useMapData";
import i18n from "../../../i18n";
import elevator from "./elevator_positions";
import {
  FIRST_FLOOR_IMG_URL,
  GROUND_FLOOR_IMG_URL,
  MEZZANINE_FLOOR_IMG_URL,
} from "./floor_images";

const locations: Location[] = [
  {
    floor: i18n.t("mezzanine_floor")??undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("library")??undefined,
    marked_position_x: 244,
    marked_position_y: 60,
    ...elevator.library,
  },
  {
    floor:i18n.t("mezzanine_floor")??undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("liaison_office")??undefined,
    marked_position_x: 145,
    marked_position_y: 107,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor")??undefined,
    imageURL: FIRST_FLOOR_IMG_URL,
    title: i18n.t("office_kid")??undefined,
    marked_position_x: 315,
    marked_position_y: 83,
    ...elevator.library,
  },
  {
    floor: i18n.t("mezzanine_floor")??undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("internship_office_2")??undefined,
    marked_position_x: 132,
    marked_position_y: 105,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor")??undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("student_care_office")??undefined,
    marked_position_x: 145,
    marked_position_y: 90,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("ground_floor")??undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("gym")??undefined,
    marked_position_x: 55,
    marked_position_y: 53,
    ...elevator.none,
  },
  {
    floor: i18n.t("ground_floor")??undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("uni_publications")??undefined,
    marked_position_x: 297,
    marked_position_y: 68,
    ...elevator.none,
  },
  {
    floor: i18n.t("first_floor")??undefined,
    imageURL: FIRST_FLOOR_IMG_URL,
    title: i18n.t("ergastirio_kid")??undefined,
    marked_position_x: 310,
    marked_position_y: 104,
    ...elevator.library,
  },
  {
    floor: i18n.t("first_floor")??undefined,
    imageURL: FIRST_FLOOR_IMG_URL,
    title: i18n.t("ergasthrio_texnologikhs_ekpaideusis")??undefined,
    marked_position_x: 330,
    marked_position_y: 93,
    ...elevator.library,
  },
  {
    floor: i18n.t("ground_floor")??undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("student_restaurant")??undefined,
    marked_position_x: 55,
    marked_position_y: 85,
    ...elevator.none,
  },
  {
    floor: i18n.t("ground_floor")??undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("concierge")??undefined,
    marked_position_x: 214,
    marked_position_y: 95,
    ...elevator.none,
  },
  {
    floor: i18n.t("ground_floor")??undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("cafeteria")??undefined,
    marked_position_x: 150,
    marked_position_y: 99,
    ...elevator.none,
  },
  {
    floor: i18n.t("ground_floor")??undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("uom_students_club")??undefined,
    marked_position_x: 259,
    marked_position_y: 52,
    ...elevator.none,
  },
  {
    floor: i18n.t("ground_floor")??undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("post_office")??undefined,
    marked_position_x: 247,
    marked_position_y: 52,
    ...elevator.none,
  },
  {
    floor: i18n.t("first_floor")??undefined,
    imageURL: FIRST_FLOOR_IMG_URL,
    title: i18n.t("technical_support")??undefined,
    marked_position_x: 252,
    marked_position_y: 138,
    ...elevator.library,
  },
  {
    floor: i18n.t("ground_floor")??undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("photocopy_space")??undefined,
    marked_position_x: 139,
    marked_position_y: 34,
    ...elevator.none,
  },
];

export default locations;