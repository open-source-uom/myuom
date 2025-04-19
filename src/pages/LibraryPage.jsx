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

import { Flex, Box, Text, Button, useColorModeValue,Switch } from "@chakra-ui/react";
import i18n from "../i18n";
import { TimeIcon, PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { LIBRARY_OPENING_HOURS, LIBRARY_PHONE_LIST } from "../assets/data/Library";
export default function LibraryPage() {
  const [isExamPeriod, setisExamPeriod] = useState(false);
  const currentPeriod = isExamPeriod ? "InExams" : "InSemester";

  return (
    <Flex
      w="100vw"
      overflowX="none"
      flexDirection="column"
      alignItems="center"
    >
      {/* Wrapper container */}
      <Flex
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        columnGap="3"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height={{ lg: "75vh" }}
        paddingX={{ sm: "2", base: "4", md: "8" }}
      >
        {/* Ωράριο */}
        <Box
          border="2px"
          borderRadius="1rem"
          bg={useColorModeValue("#0050e0", "#f3f3f3")}
          borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
          marginBottom={{ base: "2", lg: "0" }}
          marginTop={{ lg: "fit-content" }}
          px="4"
          py="4"
          width="100%"
          display={"flex"}
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          height={{ lg: "fit-content" }}
        >
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            h="fit-content"
            fontFamily="Syne"
            w="100%"
            fontSize={{ base: "md", lg: "xl" }}
            color={useColorModeValue("#f3f3f3", "black")}
          >
            <Flex flexDirection={"row"} alignItems="center">
              <TimeIcon w={6} h={6} />
              <Text
                fontSize={{base: "lg",lg: "2xl"}}
                ml="2"
                as="span"
                fontWeight={"bold"}
              >
                {i18n.t("orario")}{" "}
                ({isExamPeriod ?  i18n.t("exams_period") : i18n.t("semester_period") })
                 </Text>                 
            </Flex>
            <Flex mt="1rem" flexDirection={"row"} alignItems="center" gap={{base: "1px", lg: 2}} >
              <Box mx="2" fontSize={{ base: "sm",  lg: "xl", }}>
                <Text as="span" fontWeight={"bold"}>
                  {i18n.t("defPar")}
                </Text>{" "}
                <br />
                {LIBRARY_OPENING_HOURS[currentPeriod].on_weekdays.start}-
                {LIBRARY_OPENING_HOURS[currentPeriod].on_weekdays.end}
              </Box>
             
              <Box mx="2" fontSize={{ base: "sm",  lg: "xl", }}>
                <Text as="span" fontWeight={"bold"}>
                  {i18n.t("savvato")}
                </Text>{" "}
                <br />
               
                {LIBRARY_OPENING_HOURS[currentPeriod].on_saturday.start
                  ? `${LIBRARY_OPENING_HOURS[currentPeriod].on_saturday.start}-${LIBRARY_OPENING_HOURS[currentPeriod].on_saturday.end}`
                  : i18n.t("kleista")}
              </Box>
              <Box mx="2" fontSize={{ base: "sm",  lg: "xl", }}>
                <Text as="span" fontWeight={"bold"}>
                  {i18n.t("kyriaki")}
                </Text>{" "}
                <br />
                {LIBRARY_OPENING_HOURS[currentPeriod].on_sunday.start
                  ? `${LIBRARY_OPENING_HOURS[currentPeriod].on_sunday.start}-${LIBRARY_OPENING_HOURS[currentPeriod].on_sunday.end}`
                  : i18n.t("kleista")}
              </Box>
            </Flex>
            <br/>
            <Button
  onClick={() => setisExamPeriod((prev) => !prev)}
  leftIcon={<TimeIcon />}
  variant="outline"
  mt="1.4"
  size="sm"
  bg={useColorModeValue("#f3f3f3", "black")}
  _hover={{ bg: isExamPeriod ? useColorModeValue("#f3f3f3", "black") : useColorModeValue("#f3f3f3", "black") }}
>
  {i18n.t(!isExamPeriod ? "exams_period": "semester_period") }
</Button>
          </Flex>
          
        </Box>
        {/* Επικοινωνία  */}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
          bg={useColorModeValue("#0050e0", "#f3f3f3")}
          marginBottom={{ base: "2", lg: "0" }}
          marginTop="2"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py="4"
          px="3"
          width="100%"
          height={{ lg: "30%" }}
          paddingX={{ sm: "2", base: "4",md: "8"}}
        >
          <Flex
            mx="2"
            flexDirection={"column"}
            alignItems="flex-start"
            rowGap={3}
            justifyContent={"flex-start"}
            columnGap={3}
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
            w="100%"
            fontSize={{ base: "md", lg: "2xl" }}
          >
            <Flex flexDirection={"row"} alignItems="center">
              <PhoneIcon w={6} h={5} />
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                ml="2"
                as="span"
                fontWeight={"bold"}
              >
                {i18n.t("epikoinonia")}
              </Text>
            </Flex>

            <Flex
              flexDirection={"row"}
              alignItems="center"
              justifyContent="space-between"
              w="100%"
              gap="3"
              fontSize={{ base: "sm",  lg: "xl", }}
            >
              <Text>
                {LIBRARY_PHONE_LIST[0]} <br />
                {LIBRARY_PHONE_LIST[1]}
              </Text>
              <Text>
                {" "}
                {LIBRARY_PHONE_LIST[2]} <br /> {LIBRARY_PHONE_LIST[3]}{" "}
              </Text>
              <Text fontWeight="bold"> {i18n.t("imiorofos")} </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Button
        color={useColorModeValue("#0050e0", "#f3f3f3")}
        variant="ghost"
        fontWeight="bold"
        fontFamily="Syne"
        fontSize={{ base: "lg", lg: "2xl" }}
        rightIcon={
          <Box ml="2">
            <svg
              width="15px"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.873535 9L8.91951 1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                stroke={useColorModeValue("#0050e0", "#f3f3f3")}
              />
              <path
                d="M0.873535 1H8.91951V9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                stroke={useColorModeValue("#0050e0", "#f3f3f3")}
              />
            </svg>
          </Box>
        }
        onClick={(e) => {
          i18n.language === "en" 
            ? window.open("https://www.lib.uom.gr/index.php/en/") 
            : window.open("https://www.lib.uom.gr/index.php/el/");
        }}
        justifyContent="center"
      >
        {i18n.t("istoselidaVivliothikis")}
      </Button>
    </Flex>
  );
}
