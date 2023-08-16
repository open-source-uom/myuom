import { GROUND_FLOOR_IMG_URL } from "./floor_images"
import i18n from "../../../i18n"
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
        elevatorx: 0,
        elevatory: 0,
    }
]