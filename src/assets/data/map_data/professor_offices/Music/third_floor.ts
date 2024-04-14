import i18n from "../../../../../i18n";
import { THIRD_FLOOR_CD_IMG } from "../../floor_images";
import elevator from "../../elevator_positions";
import { Location } from "../../../../../hooks/useMapData";

const third_floor_locations:Location[] = [
  {
    floor: i18n.t("third_floor") as string,
    imageURL: THIRD_FLOOR_CD_IMG,
    ...elevator.library,
    title: "303",
    marked_position_x: 31,
    marked_position_y: 143,
  },
];

export default third_floor_locations