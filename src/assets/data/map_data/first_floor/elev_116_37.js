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
            title: 'room 05',
            marked_position_x: 56,
            marked_position_y: 44,
        },
        {
            title: 'room 06',
            marked_position_x: 92,
            marked_position_y: 50,
        },
        {
            title: 'room 07',
            marked_position_x: 138,
            marked_position_y: 57,
        },
        {
            title: 'room 08',
            marked_position_x: 173,
            marked_position_y: 64,
        }, {
            title: 'auditorium 08',
            marked_position_x: 50,
            marked_position_y: 60,
        },
        {
            title: 'auditorium 09',
            marked_position_x: 85,
            marked_position_y: 69,
        },
        {
            title: 'auditorium 10',
            marked_position_x: 130,
            marked_position_y: 76,
        },
        {
            title: 'auditorium 11',
            marked_position_x: 165,
            marked_position_y: 80,
        },
        ]
}