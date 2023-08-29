import { GROUND_FLOOR_IMG_URL, MEZZANINE_FLOOR_IMG_URL } from "./floor_images";
import i18n from "../../../i18n";
import elevator from "./elevator_positions";

let locations;
export default locations = [
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_ies"),
    marked_position_x: 89,
    marked_position_y: 70,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_msa"),
    marked_position_x: 95,
    marked_position_y: 99,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_bso"),
    marked_position_x: 106,
    marked_position_y: 102,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_esp"),
    marked_position_x: 120,
    marked_position_y: 102,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_fin"),
    marked_position_x: 95,
    marked_position_y: 54,
    ...elevator.gym,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_dai"),
    marked_position_x: 182,
    marked_position_y: 97,
    ...elevator.admin,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_ba"),
    marked_position_x: 203,
    marked_position_y: 100,
    ...elevator.admin,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_eco"),
    marked_position_x: 248,
    marked_position_y: 105,
    ...elevator.admin,
  },
  {
    floor: i18n.t("ground_floor"),
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("diatmimatika_metaptixiaka_secretary"),
    marked_position_x: 150,
    marked_position_y: 39,
    ...elevator.none,
  },
];
