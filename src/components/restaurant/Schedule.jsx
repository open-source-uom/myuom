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
  Box,
  Text,
  Flex,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { schedule, holidays } from "../../assets/data/RestaurantSchedule";
import TimeTable from "./TimeTable";
import i18n from "../../i18n";
import { useState, useEffect } from "react";

function Schedule() {
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [nextTimeInfo, setNextTimeInfo] = useState({
    nextTime: "00:00",
    activeMeal: "none",
    activeCategory: "none",
  });

  useEffect(() => {
    const updateNextTime = () => {
      const now = new Date();
      const nextTimeInfo = getNextTimeAndMeal(now);
      setNextTimeInfo(nextTimeInfo);
    };

    const timeNow = new Date();
    const delayUntilNextMinute = 60 - timeNow.getSeconds();

    updateNextTime();

    setTimeout(() => {
      updateNextTime();

      const intervalId = setInterval(updateNextTime, 60000);

      return () => clearInterval(intervalId);
    }, delayUntilNextMinute * 1000);
  }, []);

  function isHoliday(today) {
    const todayString = today.toISOString().split("T")[0];
    return holidays.includes(todayString);
  }

  function getDayCategory(offset = 0) {
    let day = new Date();
    day.setDate(day.getDate() + offset);
    const dayOfWeek = day.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const dayCategory =
      isWeekend || isHoliday(day) ? "weekendsAndHolidays" : "weekdays";
    return dayCategory;
  }

  function getNextTimeAndMeal(now) {
    const todayCategory = getDayCategory();
    const nowTime = now.toTimeString().substr(0, 5);

    let nextOpeningTime = "24:00";
    let activeMeal = "none";

    for (const meal in schedule[todayCategory]) {
      const { start, end } = schedule[todayCategory][meal];

      if (nowTime >= start && nowTime < end) {
        setIsRestaurantOpen(true);
        return {
          nextTime: end,
          activeMeal: meal,
          activeCategory: todayCategory,
        };
      }

      if (nowTime < start && start < nextOpeningTime) {
        setIsRestaurantOpen(false);
        return {
          nextTime: start,
          activeMeal: meal,
          activeCategory: todayCategory,
        };
      }
    }

    setIsRestaurantOpen(false);
    const tomorrowCategory = getDayCategory(1);

    activeMeal = "breakfast";
    const { start } = schedule[tomorrowCategory][activeMeal];

    return {
      nextTime: start,
      activeMeal,
      activeCategory: tomorrowCategory,
    };
  }

  return (
    <>
      <Box
        borderRadius="20"
        overflow="hidden"
        border="2px"
        borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          fontFamily="Syne"
          fontSize="20px"
          py={1}
          px={2}
          cursor="pointer"
          onClick={onOpen}
        >
          <Text
            as="span"
            px={2}
            color={isRestaurantOpen ? "#00CA08" : "#CA0000"}
          >
            {i18n.t(isRestaurantOpen ? "open" : "closed")}
          </Text>
          <Text as="span">⋅</Text>
          <Text
            as="span"
            style={{ fontVariantNumeric: "lining-nums tabular-nums" }}
            px={2}
          >
            {i18n.t(isRestaurantOpen ? "closesAt" : "opensAt")}{" "}
            {nextTimeInfo.nextTime}
          </Text>
          <InfoOutlineIcon />
        </Flex>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          w={{ sm: "90%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
          fontFamily="Syne"
          borderRadius="24px"
          bg={useColorModeValue("#f3f3f3", "black")}
        >
          <Flex px="15px" justifyContent="space-between" alignItems="center">
            <ModalHeader py="15px" px="10px" fontWeight="600" fontSize="22px">
              {i18n.t("orario")}
            </ModalHeader>
            <ModalCloseButton position="static" />
          </Flex>

          <ModalBody
            display="flex"
            flexDir="column"
            px="15px"
            paddingTop="0"
            paddingBottom="15px"
            gap="24px"
          >
            <TimeTable
              title="weekdays"
              entries={schedule.weekdays}
              activeCategory={nextTimeInfo.activeCategory}
              activeMeal={nextTimeInfo.activeMeal}
            />
            <TimeTable
              title="weekendsAndHolidays"
              entries={schedule.weekendsAndHolidays}
              activeCategory={nextTimeInfo.activeCategory}
              activeMeal={nextTimeInfo.activeMeal}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Schedule;
