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

import { Flex, Box, Text, Button, useColorModeValue, Switch, VStack, HStack, Icon, Badge } from "@chakra-ui/react";
import i18n from "../i18n";
import { TimeIcon, PhoneIcon, CalendarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { LIBRARY_OPENING_HOURS, LIBRARY_PHONE_LIST } from "../assets/data/Library";

export default function LibraryPage() {
  const [isExamPeriod, setisExamPeriod] = useState(false);
  const currentPeriod = isExamPeriod ? "InExams" : "InSemester";

  // Theme colors
  const cardBg = useColorModeValue("#0050e0", "#f3f3f3");
  const cardBorder = useColorModeValue("#0050e0", "#f3f3f3");
  const textColor = useColorModeValue("#f3f3f3", "black");
  const highlightBg = useColorModeValue("whiteAlpha.200", "blackAlpha.100");
  const iconColor = useColorModeValue("#f3f3f3", "black");

  // Get current day index
  const currentDayIndex = new Date().getDay();

  const isToday = (dayType) => {
    if (dayType === 'weekdays' && currentDayIndex >= 1 && currentDayIndex <= 5) return true;
    if (dayType === 'saturday' && currentDayIndex === 6) return true;
    if (dayType === 'sunday' && currentDayIndex === 0) return true;
    return false;
  };

  const ScheduleRow = ({ label, time, dayType }) => {
    const active = isToday(dayType);
    const isOpen = time && time.start;

    return (
      <HStack
        w="100%"
        justify="space-between"
        p={2}
        bg={active ? highlightBg : "transparent"}
        borderRadius="md"
        borderLeft={active ? "4px solid" : "none"}
        borderColor={useColorModeValue("white", "black")}
      >
        <HStack spacing={3}>
          <Icon as={allowedDaysIcons[dayType]} color={iconColor} boxSize={5} />
          <Text fontWeight={active ? "bold" : "medium"} fontSize={{ base: "md", lg: "lg" }}>{label}</Text>
        </HStack>
        {isOpen ? (
          <Badge
            bg={useColorModeValue("white", "black")}
            color={useColorModeValue("#0050e0", "#f3f3f3")}
            variant="solid"
            px={2}
            borderRadius="full"
            fontSize="sm"
          >
            {time.start} - {time.end}
          </Badge>
        ) : (
          <Badge
            colorScheme="red"
            variant="solid"
            px={2}
            borderRadius="full"
            fontSize="sm"
          >
            {i18n.t("kleista")}
          </Badge>
        )}
      </HStack>
    );
  };

  const allowedDaysIcons = {
    weekdays: CalendarIcon,
    saturday: TimeIcon,
    sunday: TimeIcon
  };

  return (
    <Flex
      w="100vw"
      overflowX="none"
      flexDirection="column"
      alignItems="center"
      fontFamily="Syne"
      color={textColor}
    >
      {/* Wrapper container */}
      <Flex
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        columnGap="6"
        alignItems="stretch"
        justifyContent="center"
        width="100%"
        maxWidth="1200px"
        paddingX={{ sm: "2", base: "4", md: "8" }}
        py={8}
      >
        {/* Ωράριο Card */}
        <Box
          flex={1}
          border="2px"
          borderRadius="1rem"
          bg={cardBg}
          borderColor={cardBorder}
          p={6}
          display="flex"
          flexDirection="column"
        >
          <Flex justify="space-between" align="center" mb={6} flexWrap="wrap" gap={2}>
            <HeadingWithIcon icon={TimeIcon} title={i18n.t("orario")} color={textColor} />
            <Flex align="center" gap={2}>
              <Text fontSize="sm" fontWeight="bold">
                {isExamPeriod ? i18n.t("exams_period") : i18n.t("semester_period")}
              </Text>
              <Switch
                isChecked={isExamPeriod}
                onChange={(e) => setisExamPeriod(e.target.checked)}
                colorScheme="whiteAlpha"
                size="lg"
                sx={{
                  'span.chakra-switch__track': {
                    bg: useColorModeValue('whiteAlpha.400', 'blackAlpha.300'),
                  },
                  'span.chakra-switch__track[data-checked]': {
                    bg: useColorModeValue('white', 'black'),
                  },
                  'span.chakra-switch__thumb': {
                    bg: useColorModeValue('#0050e0', '#f3f3f3'),
                  }
                }}
              />
            </Flex>
          </Flex>

          <VStack spacing={3} align="stretch">
            <ScheduleRow
              label={i18n.t("defPar")}
              time={LIBRARY_OPENING_HOURS[currentPeriod].on_weekdays}
              dayType="weekdays"
            />
            <ScheduleRow
              label={i18n.t("savvato")}
              time={LIBRARY_OPENING_HOURS[currentPeriod].on_saturday}
              dayType="saturday"
            />
            <ScheduleRow
              label={i18n.t("kyriaki")}
              time={LIBRARY_OPENING_HOURS[currentPeriod].on_sunday}
              dayType="sunday"
            />
          </VStack>
        </Box>

        {/* Επικοινωνία Card */}
        <Box
          flex={1}
          border="2px"
          borderRadius="1rem"
          bg={cardBg}
          borderColor={cardBorder}
          p={6}
          mt={{ base: 4, lg: 0 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <HeadingWithIcon icon={PhoneIcon} title={i18n.t("epikoinonia")} mb={6} color={textColor} />

          <VStack align="start" spacing={6} pl={2} w="100%">
            <HStack align="start" w="100%">
              <Text fontWeight="bold" minW="100px" fontSize="lg">{i18n.t("imiorofos")}:</Text>
              <VStack align="start" spacing={1}>
                {LIBRARY_PHONE_LIST.map((phone, index) => (
                  <Text key={index} fontSize="lg" fontWeight="medium">{phone}</Text>
                ))}
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Flex>

      <Button
        mt={6}
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
        onClick={() => {
          i18n.language === "en"
            ? window.open("https://www.lib.uom.gr/index.php/en/")
            : window.open("https://www.lib.uom.gr/index.php/el/");
        }}
      >
        {i18n.t("istoselidaVivliothikis")}
      </Button>
    </Flex>
  );
}

const HeadingWithIcon = ({ icon, title, mb, color }) => (
  <HStack mb={mb} spacing={3}>
    <Icon as={icon} boxSize={6} color={color} />
    <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" color={color}>
      {title}
    </Text>
  </HStack>
);
