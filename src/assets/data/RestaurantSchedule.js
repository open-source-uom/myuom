export const RESTAURANT_HOURS = {
  for_lunch: {
    on_weekdays: {
      start: {
        hours: 12,
        minutes: 30,
      },
      end: {
        hours: 15,
        minutes: 30,
      },
    },
    on_weekend: {
      start: {
        hours: 13,
        minutes: 0,
      },
      end: {
        hours: 15,
        minutes: 30,
      },
    },
  },
  for_dinner: {
    on_weekdays: {
      start: {
        hours: 18,
        minutes: 0,
      },
      end: {
        hours: 20,
        minutes: 0,
      },
    },
    on_weekend: {
      start: {
        hours: 18,
        minutes: 0,
      },
      end: {
        hours: 20,
        minutes: 0,
      },
    },
  },
  for_breakfast: {
    on_weekdays: {
      start: {
        hours: 8,
        minutes: 0,
      },
      end: {
        hours: 9,
        minutes: 30,
      },
    },
    on_weekend: {
      start: {
        hours: 8,
        minutes: 0,
      },
      end: {
        hours: 9,
        minutes: 30,
      },
    },
  },
};

export const schedule = {
  weekdays: {
    breakfast: { start: "08:00", end: "09:30" },
    lunch: { start: "12:30", end: "15:30" },
    dinner: { start: "18:00", end: "20:00" },
  },
  weekendsAndHolidays: {
    breakfast: { start: "08:00", end: "09:30" },
    lunch: { start: "13:00", end: "15:30" },
    dinner: { start: "18:00", end: "20:00" },
  },
};

export const holidays = [
  "2023-10-26",
  "2023-10-28",
  "2023-12-25",
  "2023-12-26",
  "2024-01-01",
  "2024-01-06",
  "2024-03-18",
  "2024-03-25",
  "2024-05-01",
  "2024-05-03",
  "2024-05-04",
  "2024-05-05",
  "2024-05-06",
  "2024-06-23",
  "2024-06-24",
  "2024-08-15",
  "2024-10-26",
  "2024-10-28",
  "2024-12-25",
  "2024-12-26",
];
