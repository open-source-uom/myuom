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
import ProfInfoPage from "../pages/ProfInfoPage";
import RestaurantPage from "../pages/RestaurantPage";
import ServicesPage from "../pages/ServicesPage";
import GraduationPage from "../pages/GraduationPage";
import LibraryPage from "../pages/LibraryPage";
import FirstYearInfoPage from "../pages/FirstYearInfoPage";
import SchedulePage from "../pages/SchedulePage";
import FAQSettingsPage from "../pages/FAQSettingsPage";
import AboutSettingsPage from "../pages/AboutSettingsPage";
import MapPage from "../pages/MapPage";
export const Categories = [
    {
        title: "Πρόγραμμα Μαθημάτων",
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
        title: "Εστιατόριο",
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
        title: "StudentsWeb",
        iconSVG: <StudentInPCIcon />,
        route: "https://services.uom.gr/unistudent/login.asp",
        span: 1,
        isExternal: true,
        requireSelection: false,
        position: 4,
        hide: false,
        pageToDisplay: null,
    },
    {
        title: "Βιβλιοθήκη",
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
        title: "Εύδοξος",
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
        title: "Πρόγραμμα Εξετάσεων",
        iconSVG: <ExamsTestIcon />,

        route: "/examschedule",
        isExternal: true,
        span: 2,
        requireSelection: true,
        position: 7,
        hide: false,
        pageToDisplay: null,
    },
    {
        title: "Ακαδημαϊκό Προσωπικό",
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
        title: "Χάρτης",
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
        title: "Φοιτητική Μέριμνα",
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
        title: "Πρωτοετείς",
        iconSVG: <PersonIcon />,
        route: "/firstyearinfo",
        span: 1,
        isExternal: false,
        requireSelection: false,
        position: 11,
        hide: false,
        pageToDisplay: <FirstYearInfoPage />,
    },
    {
        title: "Ορκωμοσίες",
        iconSVG: <GraduationIcon />,
        route: "/graduationpage",
        span: 1,
        isExternal: true,
        requireSelection: true,
        position: 12,
        hide: false,
        pageToDisplay: null,
    },
    {
        title: "Υπόλοιπες Υπηρεσίες",
        iconSVG: <PCInterfaceIcon />,
        route: "/services",
        span: 1,
        isExternal: false,
        requireSelection: false,
        position: 13,
        hide: false,
        pageToDisplay: <ServicesPage />,
    },
];
