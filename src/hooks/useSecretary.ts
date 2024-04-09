import secrData,{SecretariesData} from "../assets/data/secretaries.ts";

const getSecretaryFromDepartment = (depName:string):SecretariesData|undefined =>
    secrData.find((data) => data.name === depName);


export const useSecretary = (depName:string):SecretariesData|undefined => {
    const secretary = getSecretaryFromDepartment(depName);
    return secretary;
}