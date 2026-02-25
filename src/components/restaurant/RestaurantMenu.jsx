/*
  MIT License

  Copyright (c) 2025 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  List,
  ListItem,
  Text,
  useColorModeValue,
  Flex,
  Circle,
  VStack
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import i18n from "../../i18n";

function Menu({ dailyFoodMenu }) {
  const lineColor = useColorModeValue("gray.200", "gray.600");
  const dotColor = useColorModeValue("blue.500", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Flex w="100%" position="relative" pb={8}>
      {/* Timeline Line */}
      <Box
        position="absolute"
        left="19px"
        top="40px"
        bottom="0"
        width="2px"
        bg={lineColor}
        zIndex={0}
      />

      <Box w="100%">
        <AccordionItem border="none" w="100%">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  p={0}
                  _hover={{ bg: "transparent" }}
                  _focus={{ boxShadow: "none" }}
                  mb={isExpanded ? 4 : 0}
                >
                  <Flex w="100%" align="center">
                    {/* Timeline Dot */}
                    <Circle
                      size="40px"
                      bg={isExpanded ? dotColor : useColorModeValue("white", "gray.900")}
                      border="2px solid"
                      borderColor={dotColor}
                      color={isExpanded ? "white" : dotColor}
                      zIndex={1}
                      mr={4}
                      fontWeight="bold"
                      fontSize="lg"
                      boxShadow="sm"
                    >
                      {dailyFoodMenu.day.substring(0, 1)}
                    </Circle>

                    {/* Day Card Header */}
                    <Box
                      flex={1}
                      p={4}
                      bg={cardBg}
                      borderRadius="xl"
                      boxShadow="sm"
                      border="1px"
                      borderColor={useColorModeValue("gray.200", "gray.700")}
                      transition="all 0.2s"
                      _hover={{ boxShadow: "md", borderColor: "blue.400" }}
                      textAlign="left"
                    >
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="bold" fontSize="lg" fontFamily="Syne">
                          {dailyFoodMenu.day}
                        </Text>
                        <AccordionIcon as={ChevronDownIcon} boxSize={6} />
                      </Flex>
                    </Box>
                  </Flex>
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} pl="60px">
                <VStack spacing={4} align="stretch">
                  {/* Lunch Section */}
                  <MealSection
                    title={i18n.t("gevma")}
                    items={[
                      ...dailyFoodMenu.gevmaKirios,
                      ...dailyFoodMenu.gevmaEidiko,
                      ...dailyFoodMenu.gevmaGarnitoura,
                      ...dailyFoodMenu.gevmaSalata,
                      ...dailyFoodMenu.gevmaEpidorpio,
                    ]}
                  />

                  {/* Dinner Section */}
                  <MealSection
                    title={i18n.t("deipno")}
                    items={[
                      ...dailyFoodMenu.deipnoKirios,
                      ...dailyFoodMenu.deipnoEidiko,
                      ...dailyFoodMenu.deipnoGarnitoura,
                      ...dailyFoodMenu.deipnoSalata,
                      ...dailyFoodMenu.deipnoEpidorpio,
                    ]}
                  />
                </VStack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Box>
    </Flex>
  );
}

const MealSection = ({ title, items }) => (
  <Box
    bg={useColorModeValue("gray.50", "whiteAlpha.50")}
    p={4}
    borderRadius="lg"
    borderLeft="4px solid"
    borderColor={title === i18n.t("gevma") ? "orange.400" : "purple.400"}
  >
    <Text fontWeight="bold" mb={2} color={useColorModeValue("gray.700", "gray.200")}>
      {title}
    </Text>
    <List spacing={1}>
      {items.map((val, index) =>
        val ? (
          <ListItem key={index} fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
            • {val}
          </ListItem>
        ) : null
      )}
    </List>
  </Box>
);

export default Menu;
