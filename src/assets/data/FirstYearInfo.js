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
import i18n from "../../i18n";

const FirstYearInfo = [
  {
    text: i18n.t("registration_application_title"),
    guidePath: i18n.t("registration_application_guide"),
  },
  {
    text: i18n.t("uom_register_title"),
    guidePath: i18n.t("uom_register_guide"),
  },
  {
    text: i18n.t("institutional_account_title"),
    guidePath: i18n.t("institutional_account_guide"),
  },
  {
    text: i18n.t("academic_email_activation_title"),
    guidePath: i18n.t("academic_email_activation_guide"),
  },
  { text: i18n.t("academic_id_title"), guidePath: i18n.t("academic_id_guide") },
  {
    text: i18n.t("eudoxus_books_title"),
    guidePath: i18n.t("eudoxus_books_guide"),
  },
  {
    text: i18n.t("library_registration_title"),
    guidePath: i18n.t("library_registration_guide"),
  },
  { text: i18n.t("open_eclass_title"), guidePath: i18n.t("open_eclass_guide") },
  { text: i18n.t("boarding_title"), guidePath: i18n.t("boarding_guide") },
  { text: i18n.t("housing_title"), guidePath: i18n.t("housing_guide") },
  { text: i18n.t("healthcare_title"), guidePath: i18n.t("healthcare_guide") },
];

export default FirstYearInfo;
