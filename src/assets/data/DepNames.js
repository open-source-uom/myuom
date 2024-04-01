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
import i18n from "../../i18n";

export const DEPARTMENT_CODES = {
  INFORMATICS: "dai",
  ECONOMICS: "eco",
  BUSINESS_ADMINISTRATION: "ba",
  ACCOUNTING_FINANCE: "fin",
  EUROPEAN_STUDIES: "ies",
  BALKAN_STUDIES: "bso",
  MUSIC: "msa",
  EDUCATION: "esp",
}
export const DEPARTMENTS = [
  {
    code: DEPARTMENT_CODES.BALKAN_STUDIES,
    name: i18n.t("bso_department"),
  }, {
    code: DEPARTMENT_CODES.EUROPEAN_STUDIES,
    name: i18n.t("ies_department"),
  }, {
    code: DEPARTMENT_CODES.BUSINESS_ADMINISTRATION,
    name: i18n.t("ba_department"),
  }, {
    code: DEPARTMENT_CODES.ACCOUNTING_FINANCE,
    name: i18n.t("fin_department"),
  }, {
    code: DEPARTMENT_CODES.MUSIC,
    name: i18n.t("msa_department"),
  }, {
    code: DEPARTMENT_CODES.EDUCATION,
    name: i18n.t("esp_department"),
  }, {
    code: DEPARTMENT_CODES.ECONOMICS,
    name: i18n.t("eco_department"),
  }, {
    code: DEPARTMENT_CODES.INFORMATICS,
    name: i18n.t("dai_department"),
  },

];

// export const DEPARTMENTS = [
//   i18n.t("bso_department"),
//   i18n.t("ies_department"),
//   i18n.t("esp_department"),
//   i18n.t("dai_department"),
//   i18n.t("fin_department"),
//   i18n.t("msa_department"),
//   i18n.t("eco_department"),
//   i18n.t("ba_department")
// ]
