import { Select } from "@chakra-ui/react";
import i18n from "../../i18n";
export default function SelectOfficeDropdown({ locations, handleChange }) {

    const shouldBeDisabled = locations.length === 0;
    return (<Select
        w={{ base: "75%", lg: "50%" }}
        isDisabled={shouldBeDisabled}
        onChange={handleChange}
        defaultValue={"default"}
        id="title"
    >
        <option hidden value="default">
            {i18n.t("select_location")}
        </option>
        {
            locations.map((option, index) => (
                <option value={option.title} key={index}>
                    {option.title}
                </option>
            ))
        }
    </Select>);
}