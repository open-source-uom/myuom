import i18n from "../../../i18n";

import roomsData from "./rooms";
import secretaryData from "./secretaries";
import otherData from "./other";
import auditoriumData from "./auditoriums";
import studentClubsData from "./student_clubs";
import balkanStudiesOffices from "./professor_offices/BalkanStudies";
import businessOffices from "./professor_offices/Business";
import economicsOffices from "./professor_offices/Economics";
import educationOffices from "./professor_offices/Education";
import europeanStudiesOffices from "./professor_offices/EuropeanStudies";
import financeOffices from "./professor_offices/Finance";
import informaticsOffices from "./professor_offices/Informatics";
import musicOffices from "./professor_offices/Music";

// επειδή οι κατηγορίες θα είναι mumbo jumbo κάθε τοποθεσία θα έχει
// imgUrl x,y και ασανσέρ x,y

//department specific categories will be added at runtime
export const new_merged_map_data = [
  {
    categoryName: i18n.t("secretaries"),
    locations: secretaryData,
  },
  {
    categoryName: i18n.t("rooms"),
    locations: roomsData,
  },
  // {
  //     categoryName: "Εργαστήρια",
  //     locations: []
  // }
  {
    categoryName: i18n.t("auditoriums"),
    locations: auditoriumData,
  },
  {
    categoryName: i18n.t("student_groups"),
    locations: studentClubsData,
  },
  {
    categoryName: i18n.t("other"),
    locations: otherData,
  },
];

export const department_specific_map_data = [
  {
    categoryName: i18n.t("professor_offices"),
    locationsPerDepartment: [
      balkanStudiesOffices,
      businessOffices,
      economicsOffices,
      educationOffices,
      europeanStudiesOffices,
      financeOffices,
      informaticsOffices,
      musicOffices,
    ],
  },
];
