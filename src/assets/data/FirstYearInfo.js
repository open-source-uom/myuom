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
import registration_application from "./guides/el/registration_application.md";
import uom_register from "./guides/el/uom_register.md";
import institutional_account from "./guides/el/institutional_account.md";
import academic_email_activation from "./guides/el/academic_email_activation.md";
import academic_id from "./guides/el/academic_id.md";
import eudoxus_books from "./guides/el/eudoxus_books.md";
import library_registration from "./guides/el/library_registration.md";
import open_eclass from "./guides/el/open_eclass.md";
import boarding from "./guides/el/boarding.md";
import housing from "./guides/el/housing.md";
import healthcare from "./guides/el/healthcare.md";

import en_registration_application from "./guides/en/registration_application.md";
import en_uom_register from "./guides/en/uom_register.md";
import en_institutional_account from "./guides/en/institutional_account.md";
import en_academic_email_activation from "./guides/en/academic_email_activation.md";
import en_academic_id from "./guides/en/academic_id.md";
import en_eudoxus_books from "./guides/en/eudoxus_books.md";
import en_library_registration from "./guides/en/library_registration.md";
import en_open_eclass from "./guides/en/open_eclass.md";
import en_boarding from "./guides/en/boarding.md";
import en_housing from "./guides/en/housing.md";
import en_healthcare from "./guides/en/healthcare.md";
import i18n from "../../i18n";


const guides = {
  el:
    [
      {
        text: i18n.t("registration_application_title"),
        guidePath: registration_application,
      },
      {
        text: i18n.t("uom_register_title"),
        guidePath: uom_register,
      },
      {
        text: i18n.t("institutional_account_title"),
        guidePath: institutional_account,
      },
      {
        text: i18n.t("academic_email_activation_title"),
        guidePath: academic_email_activation,
      },
      { text: i18n.t("academic_id_title"), guidePath: academic_id },
      {
        text: i18n.t("eudoxus_books_title"),
        guidePath: eudoxus_books,
      },
      {
        text: i18n.t("library_registration_title"),
        guidePath: library_registration,
      },
      { text: i18n.t("open_eclass_title"), guidePath: open_eclass },
      { text: i18n.t("boarding_title"), guidePath: boarding },
      { text: i18n.t("housing_title"), guidePath: housing },
      { text: i18n.t("healthcare_title"), guidePath: healthcare },
    ],
  en: [

    {
      text: i18n.t("registration_application_title"),
      guidePath: en_registration_application,
    }, {
      text: i18n.t("uom_register_title"),
      guidePath: en_uom_register,

    }, {
      text: i18n.t("institutional_account_title"),
      guidePath: en_institutional_account,

    },
    {
      text: i18n.t("academic_email_activation_title"),
      guidePath: en_academic_email_activation,
    }, {
      text: i18n.t("academic_id_title"),
      guidePath: en_academic_id,
    }, {
      text: i18n.t("eudoxus_books_title"),
      guidePath: en_eudoxus_books,
    }, {
      text: i18n.t("library_registration_title"),
      guidePath: en_library_registration,
    }, {
      text: i18n.t("open_eclass_title"),
      guidePath: en_open_eclass,
    }, {
      text: i18n.t("boarding_title"),
      guidePath: en_boarding,
    }, {
      text: i18n.t("housing_title"),
      guidePath: en_housing,
    }, {
      text: i18n.t("healthcare_title"),
      guidePath: en_healthcare,
    }
  ]
}

export default guides;
