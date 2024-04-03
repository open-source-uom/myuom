/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

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

import { DEPARTMENT_CODES } from "./DepNames";

export const schedulesData = new Map([
  [
    // Τμήμα Βαλκανικών, Σλαβικών & Ανατολικών Σπουδών
    DEPARTMENT_CODES.BALKAN_STUDIES,
    {
      semester:
        "https://www.uom.gr/bso/orologio-programma",
      exam: "https://www.uom.gr/bso/programma-eksetaseon",
    },
  ],
  [

    // Τμήμα Διεθνών & Ευρωπαϊκών Σπουδών
    DEPARTMENT_CODES.EUROPEAN_STUDIES,
    {
      semester:
        "https://www.uom.gr/ies/orologio-programma",
      exam: " https://www.uom.gr/ies/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Εκπαιδευτικής & Κοινωνικής Πολιτικής
    DEPARTMENT_CODES.EDUCATION,
    {
      semester:
        "https://www.uom.gr/esp/orologio-programma-didaskalias",
      exam: " https://www.uom.gr/esp/programma-eksetastikhs",
    },
  ],
  [
    // Τμήμα Εφαρμοσμένης πληροφορικής
    DEPARTMENT_CODES.INFORMATICS,
    {
      semester:
        "https://www.uom.gr/dai/programmata-didaskalias",
      exam: " https://www.uom.gr/dai/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Λογιστικής και Χρηματοοικονομικής
    DEPARTMENT_CODES.ACCOUNTING_FINANCE,
    {
      semester:
        "https://www.uom.gr/fin/orologio-programma",
      exam: " https://www.uom.gr/fin/eksetaseis",
    },
  ],
  [
    // Τμήμα Μουσικής Επιστήμης & Τέχνης
    DEPARTMENT_CODES.MUSIC,
    {
      semester:
        "https://www.uom.gr/msa/orologio-programma",
      exam: " https://www.uom.gr/msa/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Οικονομικών Επιστημών
    DEPARTMENT_CODES.ECONOMICS,
    {
      semester:
        "https://www.uom.gr/eco/orologia-programmata-mathhmaton",
      exam: " https://www.uom.gr/eco/programmata-eksetaseon",
    },
  ],
  [
    // Τμήμα Οργάνωσης & Διοίκησης Επιχειρήσεων
    //Αυτό χρειάζεται αλλαγή σε κάθε εξάμηνο λόγω γραμματείας
    DEPARTMENT_CODES.BUSINESS_ADMINISTRATION,
    {
      semester:
        "https://www.uom.gr/ba/orologio-programma-didaskalias-earinoy-eksamhnoy-akad-etoys-2023-2024",
      exam: "https://www.uom.gr/ba/programma-eksetastikhs-periodoy-febroyarioy-2024",
    },
  ]
]);
