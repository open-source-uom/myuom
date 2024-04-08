import { GradData,GraduationData } from "../assets/data/Graduation";


type GradLink = GraduationData | null;

export const useGraduationLink = (depCode: string): GradLink => {
  if (!depCode) return null;

  const gradLink = GradData.find((dep) => dep.code === depCode);

  if (!gradLink) {
    console.error(`Graduation data not found for department code: ${depCode}`);
    return null;
  }

  return gradLink;
};
