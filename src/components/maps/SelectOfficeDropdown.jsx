import { Select } from "@chakra-ui/react";
import { mapData } from "../../assets/data/mapData";
import i18n from "../../i18n";

export default function SelectOfficeDropdown({ building, handleTitle }) {
    const options = mapData.reduce((filtered, option) => {
        if (option.building + " " + option.dep === building)
            filtered.push(option.title);

        return filtered.sort();
    }, []);
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
        {options.map((info) => (
            <option value={info} key={info}>
                {info}
            </option>
        ))}

    </Select>);
}