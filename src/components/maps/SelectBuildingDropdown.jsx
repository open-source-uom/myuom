import { Select } from "@chakra-ui/react";
import { mapData } from "../../assets/data/mapData";
import i18n from "../../i18n";
export default function SelectBuildingDropdown({ handleChange }) {
    // might have performance issues
    /* Insert all buildings into an array and convert set to remove duplicates */
    // Possibly just add them to a set? Not sure about complexity
    const arr = mapData.map((info) => info.building + " " + info.dep);
    const options = [...new Set(arr)];
    return (<Select
        w={{ base: "75%", lg: "50%" }}
        justifyContent={"center"}
        onChange={handleChange}
        defaultValue={"default"}
    >
        <option hidden disabled value="default">
            {i18n.t("select_building")}
        </option>
        {options.map((building) => (
            <option value={building} key={building}>
                {building}
            </option>
        ))}
    </Select>);
}