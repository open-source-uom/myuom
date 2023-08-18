import profDataPerDepartment from "../assets/data/professors/index";

const formatString = (string) =>
    string
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}| /gu, "");
const getProfessorsByDepartment = (depName) =>
    profDataPerDepartment.filter((profsOfDepartment) => profsOfDepartment.department === depName).map((departmentData) => departmentData.professors).flat();







export const useProfessors = (depName) => {
    const profsOfDepartment = getProfessorsByDepartment(depName);
    return profsOfDepartment;
}