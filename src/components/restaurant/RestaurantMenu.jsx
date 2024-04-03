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
} from "@chakra-ui/react";

import i18n from "../../i18n";

function Menu({ dailyFoodMenu }) {
  return (
    <Box
      marginBottom="1rem"
      borderRadius="24px"
      overflow="hidden"
      border="2px"
      borderColor={useColorModeValue("#0050e0", "#f3f3f3")}>
      <AccordionItem border="none" w="100%">
        <AccordionButton
          // display="flex"
          direction="row"
          alignItems="center"
          justifyContent="start"
          _hover={{ bg: "transparent" }}
          w="100%"
          h="100%"
          outline="none"
          textAlign="center"
          bgColor="transparent"
          color={useColorModeValue("black", "white")}
          fontFamily="Syne"
          border="none"
          alt="profPic"
          overflow="hidden"
          gap={3}>
          <Text
            w="100%"
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="start"
            fontWeight="bold"
            fontSize={{ sm: 14, md: 16, lg: 18 }}>
            {dailyFoodMenu.day}
          </Text>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel px="15px" pb="15px">
          <Accordion allowToggle>
            {/*Accordion gia geuma*/}
            <Box
              w="100%"
              marginBottom="5"
              borderRadius="16px"
              overflow="hidden"
              border="2px"
              borderColor={useColorModeValue("#0050e0", "#f3f3f3")}>
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  _hover={{ bg: "transparent" }}
                  w="100%"
                  h="100%"
                  outline="none"
                  textAlign="center"
                  bgColor="transparent"
                  color={useColorModeValue("black", "white")}
                  fontFamily="Syne"
                  border="none"
                  alt="profPic"
                  overflow="hidden"
                  gap={3}>
                  <Text
                    w="100%"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="start"
                    fontWeight="bold"
                    fontFamily="Syne"
                    fontSize={{ sm: 14, md: 16, lg: 18 }}>
                    {i18n.t("gevma")}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <List spacing={2}>
                    {Object.values([
                      ...dailyFoodMenu.gevmaKirios,
                      ...dailyFoodMenu.gevmaEidiko,
                      ...dailyFoodMenu.gevmaGarnitoura,
                      ...dailyFoodMenu.gevmaSalata,
                      ...dailyFoodMenu.gevmaEpidorpio,
                    ]).map((val, index) =>
                      val ? (
                        <ListItem key={index}>
                          <Text
                            w="100%"
                            display="flex"
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="center"
                            fontWeight="bold"
                            fontFamily="Syne"
                            fontSize={{ sm: 14, md: 16, lg: 18 }}>
                            {val}
                          </Text>
                        </ListItem>
                      ) : null
                    )}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Box>
            {/*Accordion gia deipno*/}
            <Box
              w="100%"
              borderRadius="16px"
              overflow="hidden"
              border="2px"
              borderColor={useColorModeValue("#0050e0", "#f3f3f3")}>
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  direction="row"
                  alignItems="center"
                  justifyContent="100start"
                  _hover={{ bg: "transparent" }}
                  w="100%"
                  h="100%"
                  outline="none"
                  textAlign="center"
                  bgColor="transparent"
                  color={useColorModeValue("black", "white")}
                  fontFamily="Syne"
                  border="none"
                  alt="profPic"
                  overflow="hidden"
                  gap={3}>
                  <Text
                    w="100%"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="start"
                    fontWeight="bold"
                    fontFamily="Syne"
                    fontSize={{ sm: 14, md: 16, lg: 18 }}>
                    {i18n.t("deipno")}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <List spacing={2}>
                    {Object.values([
                      ...dailyFoodMenu.deipnoKirios,
                      ...dailyFoodMenu.deipnoEidiko,
                      ...dailyFoodMenu.deipnoGarnitoura,
                      ...dailyFoodMenu.deipnoSalata,
                      ...dailyFoodMenu.deipnoEpidorpio,
                    ]).map((val, index) =>
                      val ? (
                        <ListItem key={index}>
                          <Text
                            w="100%"
                            display="flex"
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="center"
                            fontWeight="bold"
                            fontFamily="Syne"
                            fontSize={{ sm: 14, md: 16, lg: 18 }}>
                            {val}
                          </Text>
                        </ListItem>
                      ) : null
                    )}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Box>
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}

export default Menu;
