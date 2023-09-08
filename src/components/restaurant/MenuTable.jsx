import {
  Flex,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import i18n from "../../i18n";

function MenuTable({ title, foodMenu, isActive }) {
  return (
    <Flex flexDir="column" alignItems="center">
      <Flex
        flexDir="column"
        borderRadius="16px"
        borderColor={isActive ? "#0050E0" : "black"}
        _dark={{ borderColor: "#f3f3f3" }}
        borderWidth="2px"
        overflow="hidden"
        mx={1}
        fontFamily="Syne"
        w={{ sm: "98%", md: "98%", lg: "94%", "2xl": "78%", "3xl": "64%" }}
      >
        {Object.keys(foodMenu).map((key, index) => (
          <Flex
            key={key}
            flexDir="column"
            alignItems="center"
            borderTop={index === 0 ? "" : "2px"}
            borderColor={isActive ? "#0050E0" : "black"}
            _dark={{
              borderColor: "#f3f3f3",
            }}
          >
            <Flex
              py="8px"
              px="10px"
              w="100%"
              bg={isActive ? "#0050E00F" : "#0000000F"}
              _dark={{ bg: "#f3f3f30F" }}
              fontSize={{ sm: 18, md: 20, lg: 22 }}
              fontWeight="semibold"
            >
              {i18n.t(key)}
            </Flex>
            <Flex
              flexDir="column"
              style={{ fontVariantNumeric: "lining-nums tabular-nums" }}
              py="8px"
              px="10px"
              w="100%"
              fontSize={{ sm: 16, md: 18, lg: 20 }}
            >
              <UnorderedList spacing={2}>
                {Object.values(foodMenu[key]).map((dish, index) => (
                  <ListItem key={index}>{dish}</ListItem>
                ))}
              </UnorderedList>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex
        fontFamily="Syne"
        justifyContent="center"
        color={useColorModeValue(isActive ? "#0050E0" : "black", "#f3f3f3")}
        py={2}
        fontWeight="semibold"
        fontSize="22px"
      >
        {i18n.t(title)}
      </Flex>
    </Flex>
  );
}

export default MenuTable;
