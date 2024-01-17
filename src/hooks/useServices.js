import { servicesData as allServices } from "../assets/data/Services";


export const useServices = () => {

    return allServices.sort((a, b) => a.index - b.index);
}

