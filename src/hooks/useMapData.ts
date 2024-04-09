import { useState } from "react";
import {
  department_specific_map_data,
  new_merged_map_data,
} from "../assets/data/map_data/merged_map_data";
import { useDepName } from "./useDepName";

interface Location {
  title: string;
  elevatorx:number;
  elevatory:number;
  floor:string;
  imageURL:string; 
  marked_position_x:number; 
  marked_position_y:number;
}

interface LocationCategory {
  categoryName: string;
  locations: Location[];
}

interface MapData {
  isSpecificForDepartment: boolean;
  categoryOptions: string[];
  locations: Location[];
  locationData: Location | {};
  selectedLocationCategory: string;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  setSelectedLocationCategory: (category: string) => void;
}

export const useMapData = (): MapData => {
  const { depCode } = useDepName();
  console.log("Department is: ", depCode);
  const [selectedLocationCategory, setSelectedLocationCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const generalCategoryOptions: string[] = new_merged_map_data.map(
    (info) => info.categoryName
  );
  const departmentSpecificCategoryOptions: string[] = department_specific_map_data.map(
    (info) => info.categoryName
  );
  const categoryOptions: string[] = generalCategoryOptions.concat(
    departmentSpecificCategoryOptions
  );
  let locations: Location[] = [];
  let isSpecificForDepartment: boolean = false;

  if (selectedLocationCategory) {
    // Check if location is general or specific
    if (generalCategoryOptions.includes(selectedLocationCategory)) {
      const generalData = new_merged_map_data.find(
        (data) => data.categoryName === selectedLocationCategory
      );
      if (generalData) {
        locations = generalData.locations;
      }
    } else {
      if (depCode) {
        const specificData = department_specific_map_data.find(
          (data) => data.categoryName === selectedLocationCategory
        );
        if (specificData) {
          const departmentData = specificData.locationsPerDepartment.find(
            (data) => data.department === depCode
          );
          if (departmentData) {
            locations = departmentData.locations;
            isSpecificForDepartment = true;
          }
        }
      }
    }
  }

  let locationData: Location | {} = {};
  if (selectedLocation) {
    locationData = locations.find((loc) => loc.title === selectedLocation) || {};
  }

  return {
    isSpecificForDepartment,
    categoryOptions,
    locations,
    locationData,
    selectedLocationCategory,
    selectedLocation,
    setSelectedLocation,
    setSelectedLocationCategory,
  };
};
