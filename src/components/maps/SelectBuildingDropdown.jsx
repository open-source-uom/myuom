import { Select } from "@chakra-ui/react";
import i18n from "../../i18n";
export default function SelectBuildingDropdown({ handleChange, newOptions }) {
    console.log(newOptions, "newOptions")

    return (<Select
        w={{ base: "75%", lg: "50%" }}
        justifyContent={"center"}
        onChange={handleChange}
        defaultValue={"default"}
    >
        <option hidden disabled value="default">
            {i18n.t("select_where_to_go")}
        </option>
        {newOptions.map((option, index) => (
            <option value={option} key={index}>
                {option}
            </option>
        ))}
    </Select>);
}