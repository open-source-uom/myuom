import i18n from '../../../../../i18n';
import elevator from '../../elevator_positions';
import { Location } from '../../../../../hooks/useMapData';
import { FOURTH_FLOOR_CD_IMG } from "../../floor_images";

const locations: Location[] = [
  {
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    floor: String(i18n.t('fourth_floor')),
    title: '421',
    marked_position_x: 207,
    marked_position_y: 110,
  },
  // {
  //   imageURL: FloorImage.FOURTH_FLOOR_CD_IMG,
  //   floor: String(i18n.t('fourth_floor')),
  //   title: '422',
  //   marked_position_x: 241,
  //   marked_position_y: 97,
  // },
  {
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    floor: String(i18n.t('fourth_floor')),
    title: '423',
    marked_position_x: 261,
    marked_position_y: 95,
  },
  {
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    floor: String(i18n.t('fourth_floor')),
    title: '425',
    marked_position_x: 277,
    marked_position_y: 100,
  },
  {
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    floor: String(i18n.t('fourth_floor')),
    title: '426',
    marked_position_x: 300,
    marked_position_y: 98,
  },
  {
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    floor: String(i18n.t('fourth_floor')),
    title: '427',
    marked_position_x: 324,
    marked_position_y: 102,
  },
  {
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    floor: String(i18n.t('fourth_floor')),
    title: '428',
    marked_position_x: 320,
    marked_position_y: 131,
  },
  {
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    floor: String(i18n.t('fourth_floor')),
    title: '430',
    marked_position_x: 320,
    marked_position_y: 148,
  },
  // {
  //   imageURL: FloorImage.FOURTH_FLOOR_CD_IMG,
  //   floor: String(i18n.t('fourth_floor')),
  //   title: '431',
  //   marked_position_x: 320,
  //   marked_position_y: 170,
  // },
  {
    imageURL: FOURTH_FLOOR_CD_IMG,
    ...elevator.library,
    floor: String(i18n.t('fourth_floor')),
    title: '432',
    marked_position_x: 311,
    marked_position_y: 203,
  },
  // {
  //   imageURL: FloorImage.FOURTH_FLOOR_CD_IMG,
  //   floor: String(i18n.t('fourth_floor')),
  //   title: '433',
  //   marked_position_x: 278,
  //   marked_position_y: 199,
  // },
  // {
  //   imageURL: FloorImage.FOURTH_FLOOR_CD_IMG,
  //   floor: String(i18n.t('fourth_floor')),
  //   title: '434',
  //   marked_position_x: 220,
  //   marked_position_y: 193,
  // },
  // {
  //   imageURL: FloorImage.FOURTH_FLOOR_CD_IMG,
  //   floor: String(i18n.t('fourth_floor')),
  //   title: '435',
  //   marked_position_x: 175,
  //   marked_position_y: 203,
  // },
];

export default locations;
