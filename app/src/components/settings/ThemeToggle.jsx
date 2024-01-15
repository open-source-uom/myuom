import {
    FormLabel,
    Switch, useColorMode,
    Text
} from "@chakra-ui/react";
import i18n from "../../i18n";

export default function ThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    // not sure if the whole form thing needed
    return (<>
        <FormLabel htmlFor="switch-color-mode" mb="0">
            <Text as="span" fontWeight={"bold"}>
                {i18n.t("toggle_dark_theme")}
            </Text>
        </FormLabel>
        <Switch
            id="switch-color-mode"
            onChange={toggleColorMode}
            isChecked={colorMode === "dark"} />
    </>);
}
