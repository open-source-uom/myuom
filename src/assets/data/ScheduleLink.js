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

import { DEPARTMENTS } from "./DepNames";

export const schedulesData = new Map([
  [
    // Τμήμα Βαλκανικών, Σλαβικών & Ανατολικών Σπουδών
    DEPARTMENTS[0],
    {
      semester:
        "https://www.uom.gr/assets/site/public/nodes/4635/14544-Orologio-Programma-Xeimerinoy-2022-2023.pdf",
      exam: "https://www.uom.gr/bso/programma-eksetaseon",
    },
  ],
  [

    // Τμήμα Διεθνών & Ευρωπαϊκών Σπουδών
    DEPARTMENTS[1],
    {
      semester:
        "https://www.uom.gr/assets/site/public/nodes/4549/14545-2022_23_xeimerino2.pdf",
      exam: " https://www.uom.gr/ies/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Εκπαιδευτικής & Κοινωνικής Πολιτικής
    DEPARTMENTS[2],
    {
      semester:
        "https://www.uom.gr/assets/site/public/nodes/5233/14233-orologioxeimerino20222023.pdf",
      exam: " https://www.uom.gr/esp/programma-eksetastikhs",
    },
  ],
  [
    // Τμήμα Εφαρμοσμένης πληροφορικής
    DEPARTMENTS[3],
    {
      semester:
        "https://docs.google.com/spreadsheets/d/1bUFgxecf6WgQcP3TFnQQwGYRoXDQYATg-WHl9lw1mS0/edit#gid=830689206",
      exam: " https://www.uom.gr/dai/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Λογιστικής και Χρηματοοικονομικής
    DEPARTMENTS[4],
    {
      semester:
        "https://www.uom.gr/assets/site/public/nodes/5180/14507-accfin-orologio-programma-xeimerino-2022-2023-20221006.pdf",
      exam: " https://www.uom.gr/fin/eksetaseis",
    },
  ],
  [
    // Τμήμα Μουσικής Επιστήμης & Τέχνης
    DEPARTMENTS[5],
    {
      semester:
        "https://www.uom.gr/assets/site/public/nodes/1381/14383-OROLOGIO_2022-23.pdf",
      exam: " https://www.uom.gr/msa/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Οικονομικών Επιστημών
    DEPARTMENTS[6],
    {
      semester:
        "https://www.uom.gr/assets/site/public/nodes/3653/14480-neoprogrammadidaskalias_xeimerinou.xlsx",
      exam: " https://www.uom.gr/eco/programmata-eksetaseon",
    },
  ],
  [
    // Τμήμα Οργάνωσης & Διοίκησης Επιχειρήσεων
    DEPARTMENTS[7],
    {
      semester:
        "https://www.uom.gr/assets/site/public/nodes/12268/14532-2022-2023_xeimerino_ode_v1.pdf",
      exam: "https://www.uom.gr/ba/programma-eksetaseon-septembrioy-akad-etoys-2022-2023",
    },
  ],
]);
