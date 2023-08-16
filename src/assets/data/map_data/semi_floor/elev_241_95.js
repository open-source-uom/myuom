import i18n from "../../../../i18n"
const imageURL = 'https://www.uom.gr/site/images/katopseis/esot_imiorofos.jpg';
const floor = i18n.t('semi_floor');
let data;
export default data =
{
    imageURL,
    floor,
    offices:
        [{
            title: 'dai_secretary',
            marked_position_x: 182,
            marked_position_y: 97,
        },
        {
            title: 'ba_secretary',
            marked_position_x: 203,
            marked_position_y: 100,
        },
        {
            title: 'econ_secretary',
            marked_position_x: 248,
            marked_position_y: 105,
        },]
}