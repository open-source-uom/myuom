import { Select } from "@chakra-ui/react";
import i18n from "../../i18n";
import { merged_map_data } from "../../assets/data/map_data/merged_map_data";
export default function SelectOfficeDropdown({ building, handleTitle }) {
    console.log("Building: ", building)
    const options_object_of_building_selected = merged_map_data.filter((info) => info.building == building)
    console.log("New options:", options_object_of_building_selected)

    const floors_of_building_selected = options_object_of_building_selected.map((info) => info.map_data)
    console.log("Floors of building selected: ", floors_of_building_selected)
    return (<Select
        w={{ base: "75%", lg: "50%" }}
        isDisabled={!building}
        onChange={handleTitle}
        defaultValue={"default"}
        id="title"
    >
        <option hidden value="default">
            {i18n.t("select_office")}
        </option>
        {
            floors_of_building_selected.map((floor_data, idx) => (
                floor_data.map((floor, index) => (
                    <optgroup label={floor.floor + " " + i18n.t("floor")}>
                        {floor.offices.map((office) => (
                            <option value={index + " " + office.title} key={office.title}>
                                {office.title}
                            </option>
                        ))}
                    </optgroup>
                ))))
        }
    </Select>);
}