import i18n from "../../../../../i18n";
import { SECOND_FLOOR_HT_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const fin_second_floor_locations: Location[] = [
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "221",
    marked_position_x: 199,
    marked_position_y: 112,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "222",
    marked_position_x: 231,
    marked_position_y: 102,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "223",
    marked_position_x: 250,
    marked_position_y: 95,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "225",
    marked_position_x: 268,
    marked_position_y: 102,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "226",
    marked_position_x: 287,
    marked_position_y: 100,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "228",
    marked_position_x: 301,
    marked_position_y: 129,
  },
  {
    floor: i18n.t("second_floor")??undefined,
    imageURL: SECOND_FLOOR_HT_IMG,
    ...elevator.gym,
    title: "230",
    marked_position_x: 307,
    marked_position_y: 145,
  },
];

export default fin_second_floor_locations;
