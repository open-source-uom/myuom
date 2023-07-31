/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

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
  Box,
  Grid,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { RESTAURANT_HOURS } from "../../assets/constants";
import i18n from "../../i18n";
function Schedule() {
  return (
    <Box
      marginBottom="1rem"
      borderRadius="20"
      overflow="hidden"
      border="2px"
      borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
      bg={useColorModeValue("#0050e0", "#f3f3f3")}
      color={useColorModeValue("#f3f3f3", "black")}
    >
      <AccordionItem border="none">
        <Text>
          <AccordionButton
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="start"
            _hover={{ bg: "transparent" }}
            w="100%"
            h="100%"
            outline="none"
            bgColor="transparent"
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
            border="none"
            alt="profPic"
            overflow="hidden"
            gap={3}
          >
            <Text
              w="100%"
              display="flex"
              direction="row"
              justifyContent="start"
              fontWeight="bold"
              fontFamily="Syne"
              fontSize={{ sm: 16, md: 18, lg: 20 }}
              color={useColorModeValue("#f3f3f3", "black")}
            >
              {i18n.t("orario")}
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel
          pb={4}
          w={"100%"}
          justifyContent="start"
          fontFamily="Syne"
        >
          <Grid
            templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
            justifyContent="start"
            alignItems="start"
          >
            <Flex direction="column">
              <Text fontWeight="bold">{i18n.t("proino")}</Text>
              <Text>
                {" "}
                {RESTAURANT_HOURS.for_breakfast.on_weekdays.start.hours
                  .toString()
                  .padStart(2, "0")}
                :
                {RESTAURANT_HOURS.for_breakfast.on_weekdays.start.minutes
                  .toString()
                  .padStart(2, "0")}
                -
                {RESTAURANT_HOURS.for_breakfast.on_weekdays.end.hours
                  .toString()
                  .padStart(2, "0")}
                :
                {RESTAURANT_HOURS.for_breakfast.on_weekdays.end.minutes
                  .toString()
                  .padStart(2, "0")}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">{i18n.t("mesimeriano")}</Text>
              <Text align="center">
                {RESTAURANT_HOURS.for_lunch.on_weekdays.start.hours
                  .toString()
                  .padStart(2, "0")}
                :
                {RESTAURANT_HOURS.for_lunch.on_weekdays.start.minutes
                  .toString()
                  .padStart(2, "0")}
                -{" "}
                {RESTAURANT_HOURS.for_lunch.on_weekdays.end.hours
                  .toString()
                  .padStart(2, "0")}
                :
                {RESTAURANT_HOURS.for_lunch.on_weekdays.end.minutes
                  .toString()
                  .padStart(2, "0")}
                <br></br>
                {RESTAURANT_HOURS.for_lunch.on_weekend.start.hours
                  .toString()
                  .padStart(2, "0")}
                :
                {RESTAURANT_HOURS.for_lunch.on_weekend.start.minutes
                  .toString()
                  .padStart(2, "0")}
                -{" "}
                {RESTAURANT_HOURS.for_lunch.on_weekend.end.hours
                  .toString()
                  .padStart(2, "0")}
                :
                {RESTAURANT_HOURS.for_lunch.on_weekend.end.minutes
                  .toString()
                  .padStart(2, "0")}{" "}
                ({i18n.t("skKaiArgies")})
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">{i18n.t("vradino")}</Text>
              <Text>
                {" "}
                {RESTAURANT_HOURS.for_dinner.on_weekdays.start.hours
                  .toString()
                  .padStart(2, "0")}
                :
                {RESTAURANT_HOURS.for_dinner.on_weekdays.start.minutes
                  .toString()
                  .padStart(2, "0")}
                -{" "}
                {RESTAURANT_HOURS.for_dinner.on_weekdays.end.hours
                  .toString()
                  .padStart(2, "0")}
                :
                {RESTAURANT_HOURS.for_dinner.on_weekdays.end.minutes
                  .toString()
                  .padStart(2, "0")}
              </Text>
            </Flex>
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}

export default Schedule;
