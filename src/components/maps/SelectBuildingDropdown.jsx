import { Select } from "@chakra-ui/react";
import i18n from "../../i18n";
import { merged_map_data } from "../../assets/data/map_data/merged_map_data";
export default function SelectBuildingDropdown({ handleChange }) {

    const options = merged_map_data.sort((a, b) => a.building.localeCompare(b.building)).map((info) => { return { depname: info.depname, building: info.building } });

    return (<Select
        w={{ base: "75%", lg: "50%" }}
        justifyContent={"center"}
        onChange={handleChange}
        defaultValue={"default"}
    >
        <option hidden disabled value="default">
            {i18n.t("select_building")}
        </option>
        {options.map((option, index) => (
            <option value={option.building} key={index}>
                {option.building} {option.depname}
            </option>
        ))}
    </Select>);
}