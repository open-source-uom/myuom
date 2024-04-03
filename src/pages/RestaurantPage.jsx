/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

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

import Menu from "../components/restaurant/RestaurantMenu";
import { Accordion, Box, Text, Flex } from "@chakra-ui/react";
import Schedule from "../components/restaurant/Schedule";
import TodaysMenu from "../components/restaurant/TodaysRestaurantMenu";
import i18n from "../../src/i18n";
import { useWeeklyRestaurantMenu, useScrollToTopOnLoad } from "../hooks";
export default function RestauranPage() {
  const weeklyRestaurantMenu = useWeeklyRestaurantMenu();
  useScrollToTopOnLoad();

  return (
    <Flex direction="column" align="center">
      <Box w={{ sm: "90%", md: "70%", lg: "40%", "2xl": "30%", "3xl": "25%" }}>
        <Schedule />
      </Box>
      <Box w="100%">
        <TodaysMenu />
      </Box>
      <Box
        textAlign={"center"}
        w={{ sm: "90%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
      >
        <Box align="center">
          <Text
            mt="2rem"
            mb="1rem"
            w="100%"
            display="flex"
            direction="row"
            justifyContent="start"
            fontWeight="bold"
            fontFamily="Syne"
            fontSize={{ sm: 20, md: 24, lg: 26 }}
          >
            {i18n.t("olesOiMeres")}
          </Text>
        </Box>
        <Accordion allowToggle>
          {weeklyRestaurantMenu.map((dailyFoodMenu) => {
            return (
              <Menu dailyFoodMenu={dailyFoodMenu} key={dailyFoodMenu.day} />
            );
          })}
        </Accordion>
      </Box>
    </Flex>
  );
}
