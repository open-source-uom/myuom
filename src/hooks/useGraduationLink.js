import { GradData } from "../assets/data/Graduation";

export const useGraduationLink = (depCode) => {
  if (!depCode) return null;
  const gradLink = GradData.find((dep) => dep.code === depCode);
  //we should be notified of this if it happens
  if (!gradLink) return null;
  return gradLink;
};
