import { useState } from "react";
import {
  Flex,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import i18n from "../../i18n";

function MenuTable({ title, fullMenu, isActive }) {
console.log(isActive);

  const [activeMeal, setActiveMeal] = useState("Lunch");

  const[foodMenu,setFoodMenu]=useState(fullMenu.gevma.foodMenu);
  
  return (
    <Flex flexDir="column" alignItems="center">
    <Flex mb={4} gap={4}>
        <Button
          onClick={() => {setFoodMenu(fullMenu.gevma.foodMenu);setActiveMeal("Lunch")}}
          colorScheme={activeMeal === "Lunch" ? "blue" : "gray"}
          variant={activeMeal === "Lunch" ? "solid" : "outline"}
        >
          Lunch
        </Button>
        <Button
          onClick={() =>{ setFoodMenu(fullMenu.deipno.foodMenu);setActiveMeal("Dinner")}}
          colorScheme={activeMeal === "Dinner" ? "blue" : "gray"}
          variant={activeMeal === "Dinner" ? "solid" : "outline"}
        >
          Dinner
        </Button>
      </Flex>
      { <><Flex
        flexDir="column"
        borderRadius="16px"
        borderColor={isActive ? "#0050E0" : "black"}
        _dark={{ borderColor: "#f3f3f3" }}
        borderWidth="2px"
        overflow="hidden"
        mx={1}
        fontFamily="Syne"
        w="lg"
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
        {i18n.t(activeMeal)}
      </Flex></>}
    </Flex>
  );
}

export default MenuTable;