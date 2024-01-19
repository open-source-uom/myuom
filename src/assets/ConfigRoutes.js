/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/
import {
  DepAnnounceIcon,
  CalendarTimeIcon,
  ExamsTestIcon,
  GraduationIcon,
  LaptopTextbookIcon,
  LibraryIcon,
  LocationIcon,
  ManyPeopleIcon,
  MealIcon,
  PCInterfaceIcon,
  PeopleIcon,
  PersonIcon,
  StackedBooksIcon,
  StudentInPCIcon,
} from "./icons";
import AnnouncementsPage from "../pages/AnnouncementPage";
import ProfInfoPage from "../pages/ProfInfoPage";
import RestaurantPage from "../pages/RestaurantPage";
import ServicesPage from "../pages/ServicesPage";
import GraduationPage from "../pages/GraduationPage";
import LibraryPage from "../pages/LibraryPage";
import FirstYearInfoPage from "../pages/FirstYearInfoPage";
import SchedulePage from "../pages/SchedulePage";
import MapPage from "../pages/MapPage";
import { FaUniversity } from "react-icons/fa";
import i18n from "../i18n";
export const Categories = [
  {
    title: i18n.t("course_schedule"),
    iconSVG: <CalendarTimeIcon />,
    route: "/semesterschedule",
    span: 2,
    isExternal: true,
    requireSelection: true,
    position: 1,
    hide: false,
    pageToDisplay: <SchedulePage semesterProp />,
  },
  {
    title: "Open eClass",
    iconSVG: <LaptopTextbookIcon />,
    route: "https://openeclass.uom.gr/",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 2,
    hide: false,
    pageToDisplay: null,
  },
  {
    title: i18n.t("restaurant"),
    iconSVG: <MealIcon />,
    route: "/restaurant",
    span: 1,
    isExternal: false,
    requireSelection: false,
    position: 3,
    hide: false,
    pageToDisplay: <RestaurantPage />,
  },
  {
    title: "Student Portal",
    iconSVG: <StudentInPCIcon />,
    route: "https://sis-portal.uom.gr",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 4,
    hide: false,
    pageToDisplay: null,
  },
  {
    title: i18n.t("library"),
    iconSVG: <LibraryIcon />,
    position: 5,
    hide: false,
    route: "/librarypage",
    span: 1,
    isExternal: false,
    requireSelection: false,
    pageToDisplay: <LibraryPage />,
  },

  {
    title: i18n.t("eudoxus"),
    iconSVG: <StackedBooksIcon />,
    route: "https://eudoxus.gr/",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 6,
    hide: false,
    pageToDisplay: null,
  },
  {
    title: i18n.t("exams_schedule"),
    iconSVG: <ExamsTestIcon />,
    route: "/examschedule",
    isExternal: true,
    span: 2,
    requireSelection: true,
    position: 7,
    hide: false,
    pageToDisplay: <SchedulePage examsProp />,
  },
  {
    title: i18n.t("academic_personnel"),
    iconSVG: <PeopleIcon />,
    route: "/professors",
    span: 1,
    isExternal: false,
    requireSelection: true,
    position: 8,
    hide: false,
    pageToDisplay: <ProfInfoPage />,
  },
  {
    title: i18n.t("map"),
    iconSVG: <LocationIcon />,
    route: "/map",
    span: 1,
    isExternal: false,
    requireSelection: false,
    position: 9,
    hide: false,
    pageToDisplay: <MapPage />,
  },
  {
    title: i18n.t("foititiki_merimna"),
    iconSVG: <ManyPeopleIcon />,
    route: "https://www.uom.gr/student-care",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 10,
    hide: false,
    pageToDisplay: null,
  },
  {
    title: i18n.t("freshmen_guides"),
    iconSVG: <PersonIcon />,
    route: "/firstyearinfo",
    span: 2,
    isExternal: false,
    requireSelection: false,
    position: 11,
    hide: false,
    pageToDisplay: <FirstYearInfoPage />,
  },
  {
    title: i18n.t("orkomosies"),
    iconSVG: <GraduationIcon />,
    route: "/graduationpage",
    span: 1,
    isExternal: true,
    requireSelection: true,
    position: 12,
    hide: false,
    pageToDisplay: <GraduationPage />,
  },
  {
    title: i18n.t("other_services"),
    iconSVG: <PCInterfaceIcon />,
    route: "/services",
    span: 1,
    isExternal: false,
    requireSelection: false,
    position: 13,
    hide: false,
    pageToDisplay: <ServicesPage />,
  },
  {
    title: i18n.t("announcements"),
    iconSVG: <DepAnnounceIcon />,
    route: "/announcements",
    span: 1,
    isExternal: true,
    requireSelection: true,
    position: 13,
    hide: false,
    pageToDisplay: <AnnouncementsPage />,
  },
  {
    title: i18n.t("masters"),
    iconSVG: <FaUniversity       width="150%"
                                 size="150%"
                                 height="150%"
                                 version="1.1"
                                 viewBox="0 0 700 700"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 fill="#f3f3f3" />,
    route: "https://www.uom.gr/programmata-metaptyxiakon-spoydon",
    span: 1,
    isExternal: true,
    requireSelection: false,
    position: 14,
    hide: false,
    pageToDisplay: null,
  },
];
