import { DEPARTMENTS } from "../assets/DepNames";

// export const GradData = [
//   {
//     departmentName: DEPARTMENTS[3],
//     departmentURL: "https://www.uom.gr/dai/apofoithsh",
//   },
//   {
//     departmentName: DEPARTMENTS[6],
//     departmentURL: "https://www.uom.gr/eco/dieksagogh-neas-orkomosias",
//   },
//   {
//     departmentName: DEPARTMENTS[0],
//     departmentURL: "https://www.uom.gr/11587-anakoinosh-gia-dia-zoshs-orkomosia-toy-tmhmatos",
//   },
//   {
//     departmentName: DEPARTMENTS[7],
//     departmentURL: "https://www.uom.gr/ba/anakoinosh-ypobolhs-aithseon-orkomosias-noembrioy-2019",
//   },
//   {
//     departmentName: DEPARTMENTS[4],
//     departmentURL: "https://www.uom.gr/fin/enhmerosh?tagid=7435",
//   },
//   {
//     departmentName: DEPARTMENTS[1],
//     departmentURL: "https://www.uom.gr/ies/orkomosies-apofoitoi",
//   },
//   {
//     departmentName: DEPARTMENTS[2],
//     departmentURL: "https://www.uom.gr/esp/orkomosies",
//   },
//   {
//     departmentName: DEPARTMENTS[5],
//     departmentURL: "https://www.uom.gr/msa/orkomosia-tmhmatos",
//   },
// ];

export const GradData = new Map();

GradData.set(DEPARTMENTS[0], "https://www.uom.gr/11587-anakoinosh-gia-dia-zoshs-orkomosia-toy-tmhmatos")
GradData.set(DEPARTMENTS[1], "https://www.uom.gr/ies/orkomosies-apofoitoi")
GradData.set(DEPARTMENTS[2], "https://www.uom.gr/esp/orkomosies")
GradData.set(DEPARTMENTS[3], "https://www.uom.gr/dai/apofoithsh")
GradData.set(DEPARTMENTS[4], "https://www.uom.gr/fin/enhmerosh?tagid=7435")
GradData.set(DEPARTMENTS[5], "https://www.uom.gr/msa/orkomosia-tmhmatos")
GradData.set(DEPARTMENTS[6], "https://www.uom.gr/eco/dieksagogh-neas-orkomosias")
GradData.set(DEPARTMENTS[7], "https://www.uom.gr/ba/anakoinosh-ypobolhs-aithseon-orkomosias-noembrioy-2019")
