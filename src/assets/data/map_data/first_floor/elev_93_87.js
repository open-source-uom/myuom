import i18n from "../../../../i18n";
const imageURL = 'https://www.uom.gr/site/images/katopseis/esot_protos.jpg';
const floor = i18n.t('first_floor');
let data;
export default data =
{
    imageURL,
    floor,
    offices:
        [{
            title: 'room 01',
            marked_position_x: 138,
            marked_position_y: 138,
        },
        {
            title: 'room 02',
            marked_position_x: 103,
            marked_position_y: 135,
        },
        {
            title: 'room 03',
            marked_position_x: 58,
            marked_position_y: 130,
        },
        {
            title: 'room 04',
            marked_position_x: 19,
            marked_position_y: 122,
        }, {
            title: 'auditorium 04',
            marked_position_x: 144,
            marked_position_y: 123,
        },
        {
            title: 'auditorium 05',
            marked_position_x: 110,
            marked_position_y: 118,
        },
        {
            title: 'auditorium 06',
            marked_position_x: 63,
            marked_position_y: 111,
        },
        {
            title: 'auditorium 07',
            marked_position_x: 29,
            marked_position_y: 105,
        }]
}