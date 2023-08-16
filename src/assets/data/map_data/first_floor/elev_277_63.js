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
            title: 'room 09',
            marked_position_x: 215,
            marked_position_y: 68,
        },
        {
            title: 'room 10',
            marked_position_x: 253,
            marked_position_y: 75,

        }, {
            title: 'auditorium 12',
            marked_position_x: 210,
            marked_position_y: 87,
        },
        {
            title: 'auditorium 13',
            marked_position_x: 244,
            marked_position_y: 95,
        },
        {
            title: 'technical_support',
            marked_position_x: 252,
            marked_position_y: 138,
        },
        {
            title: 'ergastirio_kid',
            marked_position_x: 310,
            marked_position_y: 104,
        },
        {
            title: 'office_kid',
            marked_position_x: 315,
            marked_position_y: 83,
        },
        {
            title: 'ergasthrio_texnologikhs_ekpaideusis',
            marked_position_x: 330,
            marked_position_y: 93,
        },
        {
            title: 'conference_room',
            marked_position_x: 294,
            marked_position_y: 122,
        },
        {
            title: 'remote_education_room',
            marked_position_x: 255,
            marked_position_y: 117,
        }]
}