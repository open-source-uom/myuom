import { FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import i18n from "../../i18n";

const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <FormLabel htmlFor="switch-color-mode" mb="0">
        <span style={{ fontWeight: "bold" }}>{i18n.t("toggle_dark_theme")}</span>
      </FormLabel>
      <Switch
        id="switch-color-mode"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      />
    </>
  );
};

export default ThemeToggle;
