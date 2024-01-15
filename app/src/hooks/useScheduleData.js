import { schedulesData } from "../assets/data/ScheduleLink";



export const useScheduleData = (depCode) => {
    if (!depCode) return null;
    const links = schedulesData.get(depCode);

    //this should notify us
    if (!links) return null;
    return links;
}