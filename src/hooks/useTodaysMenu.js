import { useState, useEffect } from "react";
import data from "../assets/data/DailyMenu";
import { RESTAURANT_HOURS } from "../assets/data/RestaurantSchedule";
import i18n from "../i18n";
// this is more of an enum, it can be easily extended by modifying the functions below
const CURRENTLY_LUNCH = "gevma";
const CURRENTLY_DINNER = "deipno";
const CURRENTLY_NEXT_LUNCH = "gevma epomenhs";
const CURRENTLY_NEXT_DINNER = "deipno epomenhs";


const useDate = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        //bit lower than minute to avoid missing the exact time
        const timerID = setInterval(() => tick(), 45 * 1000);
        return () => {
            clearInterval(timerID);
        };
    });
    function tick() {
        setDate(new Date());
    }
    return date;
}

const getFoodMenuOfNextMeal = (moment) => {
    if (moment === CURRENTLY_LUNCH) {
        const temp = getTodaysRestaurantMenu(0, true);
        return { isLunch: true, isTomorrow: false, foodMenu: temp };
    }

    if (moment === CURRENTLY_DINNER) {
        const temp = getTodaysRestaurantMenu(0, false);
        return { isLunch: false, isTomorrow: false, foodMenu: temp };
    }

    if (moment === CURRENTLY_NEXT_LUNCH) {
        const temp = getTodaysRestaurantMenu(1, true);
        return { isLunch: true, isTomorrow: true, foodMenu: temp };
    }

    if (moment === CURRENTLY_NEXT_DINNER) {
        const temp = getTodaysRestaurantMenu(1, false);
        return { isLunch: false, isTomorrow: true, foodMenu: temp };
    }
    throw Error("Invalid moment");
}

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

function getNextMeal(curr_date) {
    const now = curr_date;
    const dayNum = now.getDay();
    const isWeekDay = !(dayNum === 6 || dayNum === 0);

    const [endingLunchHour, endingLunchMinutes] = [
        isWeekDay ? RESTAURANT_HOURS.for_lunch.on_weekdays.end.hours : RESTAURANT_HOURS.for_lunch.on_weekend.end.hours,
        isWeekDay ? RESTAURANT_HOURS.for_lunch.on_weekdays.end.minutes : RESTAURANT_HOURS.for_lunch.on_weekend.end.minutes,
    ];

    const [endingDinnerHour, endingDinnerMinutes] = [
        isWeekDay ? RESTAURANT_HOURS.for_dinner.on_weekdays.end.hours : RESTAURANT_HOURS.for_dinner.on_weekend.end.hours,
        isWeekDay ? RESTAURANT_HOURS.for_dinner.on_weekdays.end.minutes : RESTAURANT_HOURS.for_dinner.on_weekend.end.minutes,
    ];

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

export const useTodaysMenu = (customMoment) => {
  const curr_date = useDate();
  let momentOfDay = getNextMeal(curr_date);
  
  if (customMoment) {
    momentOfDay = customMoment;
  }

  const { foodMenu, isLunch, isTomorrow } = getFoodMenuOfNextMeal(momentOfDay);
  return { foodMenu, isLunch, isTomorrow };
}