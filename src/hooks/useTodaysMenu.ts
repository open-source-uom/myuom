import { useState, useEffect } from "react";
import data from "../assets/data/DailyMenu";
import { RESTAURANT_HOURS } from "../assets/data/RestaurantSchedule";
import i18n from "../i18n";

const CURRENTLY_LUNCH = "gevma";
const CURRENTLY_DINNER = "deipno";
const CURRENTLY_NEXT_LUNCH = "gevma epomenhs";
const CURRENTLY_NEXT_DINNER = "deipno epomenhs";

const useDate = (): Date => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 45 * 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return date;
};

export interface FoodMenu {
  mainDish: string[];
  specialDish: string[];
  salad: string[];
  dessert: string[];
}

const getFoodMenuOfNextMeal = (moment: string): { isLunch: boolean; isTomorrow: boolean; foodMenu: FoodMenu } => {
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

  throw new Error("Invalid moment");
};

const getTodaysRestaurantMenu = (offsetDays: number, forLunch: boolean): FoodMenu => {
  const days: string[] = [
    i18n.t("sunday"),
    i18n.t("monday"),
    i18n.t("tuesday"),
    i18n.t("wednesday"),
    i18n.t("thursday"),
    i18n.t("friday"),
    i18n.t("saturday"),
  ];

  const dayNum = new Date().getDay();
  const dayName = days[(dayNum + offsetDays) % 7];

  const todaysTotalMenu = data.find((dayMenu) => dayMenu.day.toLowerCase() === dayName.toLowerCase());

  if (!todaysTotalMenu) {
    throw new Error("No menu found for today");
  }

  return {
    mainDish: forLunch ? todaysTotalMenu.gevmaKirios : todaysTotalMenu.deipnoKirios,
    specialDish: forLunch ? todaysTotalMenu.gevmaEidiko : todaysTotalMenu.deipnoEidiko,
    salad: forLunch ? todaysTotalMenu.gevmaSalata : todaysTotalMenu.deipnoSalata,
    dessert: forLunch ? todaysTotalMenu.gevmaEpidorpio : todaysTotalMenu.deipnoEpidorpio,
  };
};

const getNextMeal = (currDate: Date): string => {
  const now = currDate;
  const dayNum = now.getDay();
  const isWeekDay = !(dayNum === 6 || dayNum === 0);

  const endingLunchHour = isWeekDay ? RESTAURANT_HOURS.for_lunch.on_weekdays.end.hours : RESTAURANT_HOURS.for_lunch.on_weekend.end.hours;
  const endingLunchMinutes = isWeekDay ? RESTAURANT_HOURS.for_lunch.on_weekdays.end.minutes : RESTAURANT_HOURS.for_lunch.on_weekend.end.minutes;
  const endingDinnerHour = isWeekDay ? RESTAURANT_HOURS.for_dinner.on_weekdays.end.hours : RESTAURANT_HOURS.for_dinner.on_weekend.end.hours;
  const endingDinnerMinutes = isWeekDay ? RESTAURANT_HOURS.for_dinner.on_weekdays.end.minutes : RESTAURANT_HOURS.for_dinner.on_weekend.end.minutes;

  const lunchTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endingLunchHour, endingLunchMinutes);
  const dinnerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endingDinnerHour, endingDinnerMinutes);

  if (currDate.getTime() <= lunchTime.getTime()) {
    return CURRENTLY_LUNCH;
  }

  if (currDate.getTime() <= dinnerTime.getTime()) {
    return CURRENTLY_DINNER;
  }

  return CURRENTLY_NEXT_LUNCH;
};

export interface TodaysMenuResult {
  foodMenu: FoodMenu;
  isLunch: boolean;
  isTomorrow: boolean;
}

export const useTodaysMenu = (customMoment?: string): TodaysMenuResult => {
  const currDate = useDate();
  let momentOfDay = getNextMeal(currDate);

  if (customMoment) {
    momentOfDay = customMoment;
  }

  const { foodMenu, isLunch, isTomorrow } = getFoodMenuOfNextMeal(momentOfDay);
  return { foodMenu, isLunch, isTomorrow };
};
