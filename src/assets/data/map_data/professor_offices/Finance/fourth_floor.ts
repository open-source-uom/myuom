import i18n from "../../../../../i18n";
import { FOURTH_FLOOR_HT_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const fourth_floor_locations: Location[] = [
  {
    floor: i18n.t("fourth_floor")??undefined,
    imageURL: FOURTH_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "421",
    marked_position_x: 143,
    marked_position_y: 196,
  },
  {
    floor: i18n.t("fourth_floor")??undefined,
    imageURL: FOURTH_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "422",
    marked_position_x: 235,
    marked_position_y: 100,
  },
  {
    floor: i18n.t("fourth_floor")??undefined,
    imageURL: FOURTH_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "423",
    marked_position_x: 252,
    marked_position_y: 98,
  },
  {
    floor: i18n.t("fourth_floor")??undefined,
    imageURL: FOURTH_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "425",
    marked_position_x: 270,
    marked_position_y: 98,
  },
  {
    floor: i18n.t("fourth_floor")??undefined,
    imageURL: FOURTH_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "426",
    marked_position_x: 291,
    marked_position_y: 98,
  },
  {
    floor: i18n.t("fourth_floor")??undefined,
    imageURL: FOURTH_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "427",
    marked_position_x: 313,
    marked_position_y: 98,
  },
  {
    floor: i18n.t("fourth_floor")??undefined,
    imageURL: FOURTH_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "428",
    marked_position_x: 304,
    marked_position_y: 127,
  },
];

export default fourth_floor_locations;
