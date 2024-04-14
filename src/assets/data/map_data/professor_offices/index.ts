// εδώ πρέπει να τα συνδυάσω, να βάλω ονομασίες ανά σχολή και να τα κάνω export
import InformaticsLocations from "./Informatics"
import { Location } from "../../../../hooks/useMapData";
// βλέπει ./Informatics/index.js για το κόλπο με το concat ώστε να είναι flat array
export interface DepartmentLocations {
    department: string;
    locations: Location[];
  }
let merged_locations = InformaticsLocations

export default merged_locations;