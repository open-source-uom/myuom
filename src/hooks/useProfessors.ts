import profDataPerDepartment, { Professor } from "../assets/data/professors/index";


const getProfessorsByDepartment = (depName: string): Professor[] => {
    return profDataPerDepartment
        .filter((profsOfDepartment) => profsOfDepartment.department === depName)
        .flatMap((departmentData) => departmentData.professors);
};


export const useProfessors = (depName: string): Professor[] => {
    const profsOfDepartment: Professor[] = getProfessorsByDepartment(depName);
    return profsOfDepartment;
};
