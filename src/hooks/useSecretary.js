import secrData from "../assets/data/secretaries.js";

const getSecretaryFromDepartment = (depName) =>
    secrData.find((data) => data.name === depName);


export const useSecretary = (depName) => {
    const secretary = getSecretaryFromDepartment(depName);
    return secretary;
}