import { Location } from "../../../hooks/useMapData";
import i18n from "../../../i18n";
import elevator from "./elevator_positions";
import { GROUND_FLOOR_IMG_URL, MEZZANINE_FLOOR_IMG_URL } from "./floor_images";

const locations: Location[] = [
  {
    floor: i18n.t("mezzanine_floor") ?? undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_ies") ?? undefined,
    marked_position_x: 89,
    marked_position_y: 70,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor") ?? undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_msa") ?? undefined,
    marked_position_x: 95,
    marked_position_y: 99,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor") ?? undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_bso") ?? undefined,
    marked_position_x: 106,
    marked_position_y: 102,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor") ?? undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_esp") ?? undefined,
    marked_position_x: 120,
    marked_position_y: 102,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor") ?? undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_fin") ?? undefined,
    marked_position_x: 95,
    marked_position_y: 54,
    ...elevator.gym,
  },
  {
    floor: i18n.t("mezzanine_floor") ?? undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_dai") ?? undefined,
    marked_position_x: 182,
    marked_position_y: 97,
    ...elevator.admin,
  },
  {
    floor: i18n.t("mezzanine_floor") ?? undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_ba") ?? undefined,
    marked_position_x: 203,
    marked_position_y: 100,
    ...elevator.admin,
  },
  {
    floor: i18n.t("mezzanine_floor") ?? undefined,
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: i18n.t("depname_eco") ?? undefined,
    marked_position_x: 248,
    marked_position_y: 105,
    ...elevator.admin,
  },
  {
    floor: i18n.t("ground_floor") ?? undefined,
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("diatmimatika_metaptixiaka_secretary") ?? undefined,
    marked_position_x: 150,
    marked_position_y: 39,
    ...elevator.none,
  },
];

export default locations;
