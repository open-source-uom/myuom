import React, { useEffect, useReducer } from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import data from "../assets/DailyMenu.json";

import FoodMenuList from "../components/FoodMenuList";

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
    }
  }

  function getNextMeal(curr_date) {
    console.log(curr_date);
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
      "ΚΥΡΙΑΚΗ",
      "ΔΕΥΤΕΡΑ",
      "ΤΡΙΤΗ",
      "ΤΕΤΑΡΤΗ",
      "ΠΕΜΠΤΗ",
      "ΠΑΡΑΣΚΕΥΗ",
      "ΣΑΒΒΑΤΟ",
    ];
    const dayNum = new Date().getDay();

    //prettier-ignore
    const dayName = days[(dayNum + offsetDays) % 7];
    console.log(dayName);
    const todaysTotalMenu = data
      .filter((dayMenu) => {
        return dayMenu.day === dayName;
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
        {state.isTomorrow ? "Αυριανό" : "Σημερινό"} Μενού:
      </Text>
      <Text fontWeight="bold" fontSize={{ sm: 18, md: 20, lg: 22 }} as="span">
        {state.isLunch ? "Γεύμα" : "Δείπνο"}:
      </Text>
      {<FoodMenuList {...state.foodMenu} />}{" "}
    </Flex>
  );
}
