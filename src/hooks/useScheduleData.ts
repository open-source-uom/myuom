import { schedulesData } from "../assets/data/ScheduleLink";

export const useScheduleData = (depCode:string ) => {
  if (!depCode) return null;
  
  const links = schedulesData[depCode];

  if (!links) return null;

  return links;
};
