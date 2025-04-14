import { holidaysClosed } from "../../assets/data/RestaurantSchedule";

const ClosedDueToHoliday = () => {
  const today = new Date();
  const todayString = today.toISOString().split('T')[0]; // Get the date in "YYYY-MM-DD" format

  // Function to check if the current date is within any of the holiday periods
  const holidayReason = Object.entries(holidaysClosed).find(([holidayName, holidayDates]) =>
    holidayDates.includes(todayString)
  );

  // If today is a holiday, find the next open day
  if (holidayReason) {
    const holidayDates = holidayReason[1];
    
    // Get the list of holiday dates and find the next date that's not a holiday
    let nextOpenDate = new Date(today);
    nextOpenDate.setDate(today.getDate() + 1); // Start from the next day
    
    // Loop through the next few days to find the first open day (not in holidays)
    while (holidayDates.includes(nextOpenDate.toISOString().split('T')[0])) {
      nextOpenDate.setDate(nextOpenDate.getDate() + 1); // Keep checking the next day
    }

    // Format the next open date as "dd-mm-yy"
    const nextOpenDateFormatted = `${("0" + nextOpenDate.getDate()).slice(-2)}-${("0" + (nextOpenDate.getMonth() + 1)).slice(-2)}-${nextOpenDate.getFullYear().toString().slice(-2)}`;

    return {
      isClosedforBreak: true,
      reason: holidayReason[0], // Return the holiday name (e.g., easterBreak)
      nextOpenDate: nextOpenDateFormatted, // Format the next open date as "dd-mm-yy"
    };
  }

  return { isClosed: false, reason: null,nextOpenDate:null }; // Not a holiday, return closed status and no reason
};

export default ClosedDueToHoliday;
