import { useContext, useState } from "react";
import { department_specific_map_data, new_merged_map_data } from "../assets/data/map_data/merged_map_data";
import { DepartmentContext } from "../contexts/departmentContext";

export const useMapData = () => {
    const { depName } = useContext(DepartmentContext);
    console.log("Department is: ", depName)
    const [selectedLocationCategory, setSelectedLocationCategory] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");


    const generalCategoryOptions = new_merged_map_data.map((info) =>
        info.categoryName);
    const departmentSpecificCategoryOptions = department_specific_map_data.map((info) =>

        info.categoryName);
    const categoryOptions = generalCategoryOptions.concat(departmentSpecificCategoryOptions);
    let locations = [];
    let isSpecificForDepartment = false;
    if (selectedLocationCategory) {
        // check if location is general or specific
        if (generalCategoryOptions.includes(selectedLocationCategory)) {
            locations = new_merged_map_data.find(data => data.categoryName === selectedLocationCategory).locations
        } else {
            if (depName) {
                const locationsOfCategoryFromAllDepartments = department_specific_map_data.find(data => data.categoryName === selectedLocationCategory);
                const locationsOfSelectedDepartment = locationsOfCategoryFromAllDepartments.locationsPerDepartment.find(data => data.department === depName);
                locations = locationsOfSelectedDepartment.locations;
                isSpecificForDepartment = true;
            }
            //εδώ στο else τι θα γίνει?
        }


    }
    let locationData = {};
    if (selectedLocation) {
        locationData = locations.find(loc => loc.title === selectedLocation);
    }
    return { isSpecificForDepartment, categoryOptions, locations, locationData, selectedLocationCategory, selectedLocation, setSelectedLocation, setSelectedLocationCategory }
}
