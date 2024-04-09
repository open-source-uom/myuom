import { servicesData as allServices,Tab } from "../assets/data/Services";

export const useServices = (): Tab[] => {
    const sortedServices = {
      tabs: allServices.sort((a, b) => a.index - b.index),
    };
  
    // Return the sorted tabs
    return sortedServices.tabs;
  };