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
export const Categories = [
  {
    title: "Πρόγραμμα Μαθημάτων",
    iconSVG: <CalendarTimeIcon />,
    route: "/semesterschedule",
    span: 2,
    isExternal: true,
    requireSelection: true,
  },
  {
    title: "Open eClass",
    iconSVG: <LaptopTextbookIcon />,
    route: "https://openeclass.uom.gr/",
    span: 1,

    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Εστιατόριο",
    iconSVG: <MealIcon />,
    route: "/restaurant",
    span: 1,
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "StudentsWeb",
    iconSVG: <StudentInPCIcon />,
    route: "https://services.uom.gr/unistudent/login.asp",
    span: 1,
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Βιβλιοθήκη",
    iconSVG: <LibraryIcon />,

    route: "/librarypage",
    span: 1,
    isExternal: false,
    requireSelection: false,
  },

  {
    title: "Εύδοξος",
    iconSVG: <StackedBooksIcon />,
    route: "https://eudoxus.gr/",
    span: 1,
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Πρόγραμμα Εξετάσεων",
    iconSVG: <ExamsTestIcon />,

    route: "/examschedule",
    isExternal: true,
    span: 2,
    requireSelection: true,
  },
  {
    title: "Ακαδημαϊκό Προσωπικό",
    iconSVG: <PeopleIcon />,
    route: "/professors",
    span: 1,
    isExternal: false,
    requireSelection: true,
  },
  {
    title: "Χάρτης",
    iconSVG: <LocationIcon />,
    route: "/map",
    span: 1,
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Φοιτητική Μέριμνα",
    iconSVG: <ManyPeopleIcon />,
    route: "https://www.uom.gr/student-care",
    span: 1,
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Πρωτοετείς",
    iconSVG: <PersonIcon />,

    route: "/firstyearinfo",
    span: 1,
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Ορκωμοσίες",
    iconSVG: <GraduationIcon />,
    route: "/graduationpage",
    span: 1,
    isExternal: true,
    requireSelection: true,
  },
  {
    title: "Υπόλοιπες Υπηρεσίες",
    iconSVG: <PCInterfaceIcon />,
    route: "/services",
    span: 1,
    isExternal: false,
    requireSelection: false,
  },
];
