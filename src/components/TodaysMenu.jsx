import React, { useState } from "react";
import {
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import data from "../assets/DailyMenu.json";
import { useEffect } from "react";
const CURRENTLY_LUNCH = "gevma";
const CURRENTLY_DINNER = "deipno";
const CURRENTLY_NEXT_LUNCH = "gevma epomenhs";

export default function TodaysMenu() {
  const [isLunch, setIsLunch] = useState(true);
  const [foodMenu, setFoodMenu] = useState(null);
  const [isTomorrow, setIsTomorrow] = useState(false);
  const lettersColor = useColorModeValue("white", "black");

  function getNextMeal(curr_date) {
    const now = curr_date;
    const dayNum = now.getDay();
    const isWeekDay = !(dayNum === 6 || dayNum === 0);

    const [endingLunchHour, endingLunchMinutes] = [
      isWeekDay ? 16 : 15,
      isWeekDay ? 0 : 30,
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
    let todayOrNextDay = 0;
    if (menuToDisplay === CURRENTLY_LUNCH) {
      setIsLunch(true);
    } else if (menuToDisplay === CURRENTLY_DINNER) {
      setIsLunch(false);
    } else if (menuToDisplay === CURRENTLY_NEXT_LUNCH) {
      //next day's lunch
      setIsLunch(true);
      todayOrNextDay = 1;
    }
    setIsTomorrow(!!todayOrNextDay);
    setFoodMenu(getTodaysRestaurantMenu(todayOrNextDay));
  }
  useEffect(() => {
    checkTimeSetNextMeal();
    const interval = setInterval(checkTimeSetNextMeal, 30 * 1000);
    console.log(interval);
    return () => clearInterval(interval);
  }, []);

  function getTodaysRestaurantMenu(offsetDays) {
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
    const dayName = days[dayNum + offsetDays % 7];
    const todaysTotalMenu = data
      .filter((dayMenu) => {
        return dayMenu.day === dayName;
      })
      .pop();

    if (isLunch) {
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
      color={lettersColor}
      marginTop={"1rem"}
      marginLeft={"1rem"}
    >
      <Text fontWeight={"bold"} marginBottom="1rem">
        {isTomorrow ? "Αυριανό" : "Σημερινό"} Μενού:
      </Text>

      <Text as="span">{isLunch ? "Γεύμα" : "Δείπνο"}:</Text>

      {foodMenu ? <FoodMenuList {...foodMenu} /> : <div>Loading...</div>}
    </Flex>
  );
}

function FoodMenuList({ mainDish, specialDish, salad, dessert }) {
  console.log(mainDish, specialDish, salad, dessert);
  return (
    <UnorderedList>
      <ListItem>
        <Text as="span" noOfLines={[]}>
          <chakra.u marginRight={"1rem"}>Κυρίως:</chakra.u>
          {mainDish}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.u marginRight={"1rem"}>Χορτοφαγικό:</chakra.u>
          {specialDish}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.u marginRight={"1rem"}>Σαλάτα:</chakra.u>
          {salad}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.u marginRight={"1rem"}>Γλυκό:</chakra.u>
          {dessert}
        </Text>
      </ListItem>
    </UnorderedList>
  );
}
