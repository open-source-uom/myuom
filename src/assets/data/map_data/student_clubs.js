import { FIRST_FLOOR_IMG_URL, GROUND_FLOOR_IMG_URL } from "./floor_images";
import i18n from "../../../i18n";
import elevator from "./elevator_positions";
// να μπει η ομάδα μας εδώ OPEN SOURCE UOM
// και η ρομποτική που είναι μαζί μας
// μετά υπάρχουν κάτι για erasmus που πρέπει να ρωτήσουμε
let locations;
export default locations = [
  {
    floor: i18n.t("ground_floor"),
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("aiesec"),
    marked_position_x: 95,
    marked_position_y: 65,
    ...elevator.none,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: i18n.t("open_source_uom"),
    marked_position_x: 238,
    marked_position_y: 118,
    ...elevator.library,
  },
];
