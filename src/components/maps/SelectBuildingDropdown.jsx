import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import i18n from "../../i18n";
export default function SelectBuildingDropdown({ handleChange, newOptions }) {
  const [selectedText, setSelectedText] = useState(
    i18n.t("select_where_to_go")
  );

  const handleMenuItemClick = (option) => {
    setSelectedText(option);
    handleChange(option);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="transparent"
        w={{ base: "75%", lg: "50%" }}
        py={"0.5rem"}
        px={"1rem"}
        borderRadius={"md"}
        borderWidth={"1px"}
        transition="all 0.2s"
        style={{ WebkitTapHighlightColor: "transparent" }}
        _hover={{ borderColor: "gray.300", bg: "transparent" }}
        _expanded={{ borderColor: "#0050e0", bg: "transparent" }}
        _focus={{ bg: "transparent" }}
        fontWeight={100}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxWidth="100%"
        >
          <Box
            as="span"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            flex="1"
            textAlign="left"
          >
            {selectedText}
          </Box>
          <ChevronDownIcon boxSize={5} />
        </Flex>
      </MenuButton>
      <MenuList maxHeight="50vh" maxWidth="80vw" overflowY="auto" zIndex={100}>
        {newOptions.map((option, index) => (
          <MenuItem
            key={index}
            value={option}
            onClick={() => handleMenuItemClick(option)}
            _focus={{ bg: "transparent" }}
          >
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
