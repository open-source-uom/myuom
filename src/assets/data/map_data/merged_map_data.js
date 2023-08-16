import i18n from "../../../i18n"
import dai_floor_5 from "./fifth_floor/dai_building"
import dai_floor_4 from "./fourth_floor/dai_building"
import dai_floor_3 from "./third_floor/dai_building"
import dai_floor_2 from "./second_floor/dai_building"


import econ_floor_5 from "./fifth_floor/econ_building"
import econ_floor_4 from "./fourth_floor/econ_building"
import econ_floor_3 from "./third_floor/econ_building"
import econ_floor_2 from "./second_floor/econ_building"

import ba_floor_4 from "./fourth_floor/ba_building"
import ba_floor_3 from "./third_floor/ba_building"
import ba_floor_2 from "./second_floor/ba_building"

import bso_floor_4 from "./fourth_floor/bso_building"
import bso_floor_3 from "./third_floor/bso_building"
import bso_floor_2 from "./second_floor/bso_building"

import fin_floor_4 from "./fourth_floor/fin_building"
import fin_floor_3 from "./third_floor/fin_building"
import fin_floor_2 from "./second_floor/fin_building"

import ies_floor_4 from "./fourth_floor/ies_building"
import ies_floor_3 from "./third_floor/ies_building"
import ies_floor_2 from "./second_floor/ies_building"

import semi_floor_1 from "./semi_floor/elev_116_37"
// import semi_floor_2 from "./semi_floor/elev_277_63"
import semi_floor_3 from "./semi_floor/elev_93_87"
import semi_floor_4 from "./semi_floor/elev_241_95"

import first_floor_1 from "./first_floor/elev_116_37"
import first_floor_2 from "./first_floor/elev_277_63"
import first_floor_3 from "./first_floor/elev_93_87"

import roomsData from "./rooms"
import secretaryData from "./secretaries"
import auditoriumData from "./auditoriums"
import studentClubsData from "./student_clubs"
import informaticsOffices from "./professor_offices/Informatics"
export const merged_map_data = [
    {
        depname: "",
        building: i18n.t("primary_building"),
        map_data: [
            semi_floor_1,
            // semi_floor_2,
            semi_floor_3,
            semi_floor_4,
            first_floor_1,
            first_floor_2,
            first_floor_3,

            //semi-floor,
            //first-floor,
            //ground-floor,
        ]
    }
    ,

    {
        depname: i18n.t("depname_dai"),
        building: i18n.t("building_C"),
        ground_floor_elevator_x: 277,
        ground_floor_elevator_y: 63,
        map_data: [

            dai_floor_2,
            dai_floor_3,
            dai_floor_4,
            dai_floor_5
        ]
    },
    {
        depname: i18n.t("depname_eco"),
        building: i18n.t("building_D"),
        ground_floor_elevator_x: 277,
        ground_floor_elevator_y: 63,
        map_data: [

            econ_floor_2,
            econ_floor_3,
            econ_floor_4,
            econ_floor_5
        ]
    }
    , {
        depname: i18n.t("depname_ba"),
        building: i18n.t("building_G"),
        ground_floor_elevator_x: 116,
        ground_floor_elevator_y: 37,
        map_data: [

            ba_floor_2,
            ba_floor_3,
            ba_floor_4
        ]
    }, {
        depname: i18n.t("depname_bso"),
        building: i18n.t("building_K"),
        ground_floor_elevator_x: 93,
        ground_floor_elevator_y: 87,
        map_data: [

            bso_floor_2,
            bso_floor_3,
            bso_floor_4
        ]
    }, {
        depname: i18n.t("depname_fin"),
        building: i18n.t("building_H"),
        ground_floor_elevator_x: 116,
        ground_floor_elevator_y: 37,
        map_data: [
            fin_floor_2,
            fin_floor_3,
            fin_floor_4
        ]
    },
    {
        depname: i18n.t("depname_ies"),
        building: i18n.t("building_F"),
        ground_floor_elevator_x: 93,
        ground_floor_elevator_y: 87,
        map_data: [

            ies_floor_2,
            ies_floor_3,
            ies_floor_4
        ]
    }
]


// επειδή οι κατηγορίες θα είναι mumbo jumbo κάθε τοποθεσία θα έχει
// imgUrl x,y και ασανσέρ x,y

//department specific categories will be added at runtime
export const new_merged_map_data = [
    {
        categoryName: "Γραμματείες",
        locations: secretaryData
    },
    {
        categoryName: "Αίθουσες",
        locations: roomsData
    }
    // {
    //     categoryName: "Εργαστήρια",
    //     locations: []
    // }
    , {
        categoryName: "Αμφιθέατρα",
        locations: auditoriumData
    },
    {
        categoryName: "Φοιτητικές ομάδες",
        locations: studentClubsData
    },
    // {
    //     categoryName: "Γραφεία Καθηγητών",
    //     locations: []
    // }
]

export const department_specific_map_data = [
    {
        categoryName: "Γραφεία Καθηγητών",
        locationsPerDepartment: [informaticsOffices]
    },

]