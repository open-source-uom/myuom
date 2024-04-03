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

const Balkan_Studies_Link = "https://www.uom.gr/11587-anakoinosh-gia-dia-zoshs-orkomosia-toy-tmhmatos"
const European_Studies_Link = "https://www.uom.gr/ies/orkomosies-apofoitoi"
const Education_Link = "https://www.uom.gr/esp/orkomosies"
const Informatics_Link = "https://www.uom.gr/dai/apofoithsh"
const Finance_Link = "https://www.uom.gr/fin/enhmerosh?tagid=7435"
const Business_Link = "https://www.uom.gr/ba/anakoinosh-ypobolhs-aithseon-orkomosias-noembrioy-2019"
const Economics_Link = "https://www.uom.gr/eco/dieksagogh-neas-orkomosias"
const Music = "https://www.uom.gr/msa/orkomosia-tmhmatos"



export const GradData = [{
  code: DEPARTMENT_CODES.BALKAN_STUDIES,
  link: Balkan_Studies_Link
}, {
  code: DEPARTMENT_CODES.EUROPEAN_STUDIES,
  link: European_Studies_Link
}, {
  code: DEPARTMENT_CODES.EDUCATION,
  link: Education_Link
}, {
  code: DEPARTMENT_CODES.INFORMATICS,
  link: Informatics_Link
}, {
  code: DEPARTMENT_CODES.FINANCE,
  link: Finance_Link
}, {
  code: DEPARTMENT_CODES.BUSINESS,
  link: Business_Link
}, {
  code: DEPARTMENT_CODES.ECONOMICS,
  link: Economics_Link
}, {
  code: DEPARTMENT_CODES.MUSIC,
  link: Music
}

]

