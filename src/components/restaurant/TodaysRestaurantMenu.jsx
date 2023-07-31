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

import { useEffect, useReducer } from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import data from "../../assets/data/DailyMenu";
import i18n from "../../i18n";
import FoodMenuList from "./FoodMenuList";
const CURRENTLY_LUNCH = "gevma";
const CURRENTLY_DINNER = "deipno";
const CURRENTLY_NEXT_LUNCH = "gevma epomenhs";

export default function TodaysMenu() {
  const [state, dispatch] = useReducer(reducer, {});
  function reducer(state, action) {
    switch (action.type) {
      case CURRENTLY_LUNCH: {
        const temp = getTodaysRestaurantMenu(0, true);
        return { isLunch: true, isTomorrow: false, foodMenu: temp };
      }
      case CURRENTLY_DINNER: {
        const temp = getTodaysRestaurantMenu(0, false);
        return { isLunch: false, isTomorrow: false, foodMenu: temp };
      }
      case CURRENTLY_NEXT_LUNCH: {
        const temp = getTodaysRestaurantMenu(1, true);
        return { isLunch: true, isTomorrow: true, foodMenu: temp };
      }
      default: {
        return state;
      }
    }
  }

  function getNextMeal(curr_date) {
    const now = curr_date;
    const dayNum = now.getDay();
    const isWeekDay = !(dayNum === 6 || dayNum === 0);

    const [endingLunchHour, endingLunchMinutes] = [
      isWeekDay ? 15 : 15,
      isWeekDay ? 30 : 30,
    ];

    const [endingDinnerHour, endingDinnerMinutes] = [20, 0];

    const lunchTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      endingLunchHour,
      endingLunchMinutes
    );

    const dinnerTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      endingDinnerHour,
      endingDinnerMinutes
    );

    if (curr_date.getTime() <= lunchTime.getTime()) {
      return CURRENTLY_LUNCH;
    }

    if (curr_date.getTime() <= dinnerTime.getTime()) {
      return CURRENTLY_DINNER;
    }
    return CURRENTLY_NEXT_LUNCH;
  }

  function checkTimeSetNextMeal() {
    const menuToDisplay = getNextMeal(new Date());
    dispatch({ type: menuToDisplay });
  }

  useEffect(() => {
    checkTimeSetNextMeal();
  }, []);

  function getTodaysRestaurantMenu(offsetDays, forLunch) {
    const days = [
      i18n.t("sunday"),
      i18n.t("monday"),
      i18n.t("tuesday"),
      i18n.t("wednesday"),
      i18n.t("thursday"),
      i18n.t("friday"),
      i18n.t("saturday"),
    ];
    const dayNum = new Date().getDay();

    //prettier-ignore
    const dayName = days[(dayNum + offsetDays) % 7];
    const todaysTotalMenu = data
      .filter((dayMenu) => {
        console.log(dayMenu, dayName)
        return dayMenu.day.toLowerCase() === dayName.toLowerCase();
      })
      .pop();
    if (forLunch) {
      return {
        mainDish: todaysTotalMenu.gevmaKirios,
        specialDish: todaysTotalMenu.gevmaEidiko,
        salad: todaysTotalMenu.gevmaSalata,
        dessert: todaysTotalMenu.gevmaEpidorpio,
      };
    }

    return {
      mainDish: todaysTotalMenu.deipnoKirios,
      specialDish: todaysTotalMenu.deipnoEidiko,
      salad: todaysTotalMenu.deipnoSalata,
      dessert: todaysTotalMenu.deipnoEpidorpio,
    };
  }

  return (
    <Flex
      flexDirection={"column"}
      color={useColorModeValue("white", "black")}
      height="fit-content"
      fontFamily="Syne"
    >
      <Text
        fontWeight={"bold"}
        marginBottom="1rem"
        fontSize={{ sm: 22, md: 24, lg: 26 }}
      >
        {state.isTomorrow ? i18n.t("avriano") : i18n.t("simerino")} {i18n.t("menou")}
      </Text>
      <Text fontWeight="bold" fontSize={{ sm: 18, md: 20, lg: 22 }} as="span">
        {state.isLunch ? i18n.t("gevma") : i18n.t("deipno")}:
      </Text>
      {<FoodMenuList {...state.foodMenu} />}{" "}
    </Flex>
  );
}
