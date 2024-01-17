import { Flex } from "@chakra-ui/react";
import i18n from "../../i18n";

function TimeTable({ title, entries, activeCategory, activeMeal }) {
  function isTableRowActive(key) {
    return activeCategory === title && activeMeal === key;
  }

  return (
    <Flex
      flexDir="column"
      borderRadius="16px"
      borderColor="#0050E0"
      _dark={{ borderColor: "#f3f3f3" }}
      borderWidth="2px"
      overflow="hidden"
    >
      <Flex
        justifyContent="center"
        borderBottom="2px"
        borderColor="#0050E0"
        _dark={{ borderColor: "#f3f3f3" }}
        py="12px"
        bg="#0050E00F"
        fontWeight="500"
        fontSize="18px"
      >
        {i18n.t(title)}
      </Flex>
      {Object.keys(entries).map((key, index) => (
        <Flex
          key={key}
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          px="18px"
          borderBottom={index === Object.keys(entries).length - 1 ? "" : "2px"}
          borderColor="#0050E0"
          bg={isTableRowActive(key) ? "#0050E0" : ""}
          color={isTableRowActive(key) ? "white" : ""}
          fontWeight={isTableRowActive(key) ? "bold" : ""}
          _dark={{
            borderColor: "#f3f3f3",
            bg: isTableRowActive(key) ? "#f3f3f3" : "",
            color: isTableRowActive(key) ? "black" : "",
          }}
        >
          <Flex>{i18n.t(key)}</Flex>
          <Flex
            style={{ fontVariantNumeric: "lining-nums tabular-nums" }}
            py="12px"
          >
            {entries[key].start} - {entries[key].end}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default TimeTable;
