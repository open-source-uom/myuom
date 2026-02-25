import { useState } from "react";
import {
  Flex,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Button,
  Box,
  Text,
  Icon,
  Collapse
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, InfoIcon, CheckCircleIcon } from "@chakra-ui/icons";
import i18n from "../../i18n";

function MenuTable({ title, fullMenu, isActive }) {
  const [activeMeal, setActiveMeal] = useState(i18n.t('lunch'));
  const [foodMenu, setFoodMenu] = useState(fullMenu.gevma.foodMenu);

  const mealIcons = {
    [i18n.t('lunch')]: SunIcon,
    [i18n.t('dinner')]: MoonIcon
  };

  const categoryAccents = [
    "orange.400", // Main
    "purple.400", // Special
    "green.400",  // Salad
    "pink.400",   // Dessert
    "cyan.400"    // Other
  ];

  return (
    <Flex flexDir="column" alignItems="center" w={{ sm: "98%", md: "98%", lg: "94%", "2xl": "78%", "3xl": "64%" }}>
      {/* Meal Selection Cards */}
      <Flex mb={6} gap={4} w="100%" justify="center">
        <Button
          onClick={() => {
            setFoodMenu(fullMenu.gevma.foodMenu);
            setActiveMeal(i18n.t('lunch'));
          }}
          h="auto"
          py={4}
          flex={1}
          maxW="200px"
          flexDir="column"
          gap={2}
          bg={activeMeal === i18n.t('lunch') ? useColorModeValue("white", "gray.700") : "transparent"}
          color={activeMeal === i18n.t('lunch') ? useColorModeValue("#0050E0", "#f3f3f3") : "gray.500"}
          border="2px solid"
          borderColor={activeMeal === i18n.t('lunch') ? "#0050E0" : "gray.300"}
          _hover={{
            borderColor: "#0050E0",
            bg: useColorModeValue("blue.50", "whiteAlpha.100")
          }}
          boxShadow={activeMeal === i18n.t('lunch') ? "lg" : "none"}
          borderRadius="xl"
          transition="all 0.3s ease-in-out"
        >
          <Icon as={SunIcon} boxSize={6} />
          <Text fontSize="lg" fontWeight="bold">{i18n.t('lunch')}</Text>
        </Button>

        <Button
          onClick={() => {
            setFoodMenu(fullMenu.deipno.foodMenu);
            setActiveMeal(i18n.t('dinner'));
          }}
          h="auto"
          py={4}
          flex={1}
          maxW="200px"
          flexDir="column"
          gap={2}
          bg={activeMeal === i18n.t('dinner') ? useColorModeValue("white", "gray.700") : "transparent"}
          color={activeMeal === i18n.t('dinner') ? useColorModeValue("#0050E0", "#f3f3f3") : "gray.500"}
          border="2px solid"
          borderColor={activeMeal === i18n.t('dinner') ? "#0050E0" : "gray.300"}
          _hover={{
            borderColor: "#0050E0",
            bg: useColorModeValue("blue.50", "whiteAlpha.100")
          }}
          boxShadow={activeMeal === i18n.t('dinner') ? "lg" : "none"}
          borderRadius="xl"
          transition="all 0.3s ease-in-out"
        >
          <Icon as={MoonIcon} boxSize={6} />
          <Text fontSize="lg" fontWeight="bold">{i18n.t('dinner')}</Text>
        </Button>
      </Flex>

      {/* Menu Content */}
      <Flex
        flexDir="column"
        borderRadius="xl"
        boxShadow="md"
        bg={useColorModeValue("white", "gray.800")}
        border="1px"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        overflow="hidden"
        w="100%"
        fontFamily="Syne"
      >
        {Object.keys(foodMenu).map((key, index) => (
          <Flex
            key={key}
            flexDir="column"
            borderLeftWidth="6px"
            borderLeftColor={categoryAccents[index % categoryAccents.length]}
            borderBottomWidth={index !== Object.keys(foodMenu).length - 1 ? "1px" : "0"}
            borderBottomColor={useColorModeValue("gray.100", "gray.700")}
          >
            <Flex
              py={3}
              px={4}
              bg={useColorModeValue("gray.50", "whiteAlpha.50")}
              justify="space-between"
              align="center"
            >
              <Text
                fontSize={{ sm: 18, md: 20 }}
                fontWeight="bold"
                color={useColorModeValue("gray.700", "gray.200")}
              >
                {i18n.t(key)}
              </Text>
            </Flex>

            <Box px={4} py={3}>
              <UnorderedList spacing={2} m={0} ml={4}>
                {Object.values(foodMenu[key]).map((dish, i) => (
                  <ListItem
                    key={i}
                    fontSize={{ sm: 16, md: 18 }}
                    color={useColorModeValue("gray.600", "gray.300")}
                  >
                    {dish}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default MenuTable;