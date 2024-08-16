/**
 * @function getLastSundayOfMonth
 * @description Gets the last Sunday of a given month.
 * @param {number} year - The year.
 * @param {number} month - The month (0 for January, 11 for December).
 * @returns {Date} - The Date object representing the last Sunday of the given month.
 */
const getLastSundayOfMonth = (year, month) => {
  const lastDay = new Date(year, month + 1, 0); // Last day of the month
  const lastSunday = new Date(lastDay);
  lastSunday.setDate(lastDay.getDate() - lastDay.getDay()); // Adjusting to last Sunday
  return lastSunday;
};

/**
 * @function isSummerTime
 * @description Checks if the given date is in summer time (between the last Sunday in March and the last Sunday in October).
 * @param {Date} date - The date to check.
 * @returns {boolean} - True if the date is in summer time, false otherwise.
 */
export const isSummerTime = (date) => {
  const year = date.getFullYear();
  const lastSundayInMarch = getLastSundayOfMonth(year, 2); // March
  const lastSundayInOctober = getLastSundayOfMonth(year, 9); // October

  lastSundayInMarch.setHours(1, 0, 0, 0); // Set to 01:00 AM
  lastSundayInOctober.setHours(1, 0, 0, 0); // Set to 01:00 AM

  return date >= lastSundayInMarch && date < lastSundayInOctober;
};

/**
 * @function isWinterTime
 * @description Checks if the given date is in winter time (outside the summer time period).
 * @param {Date} date - The date to check.
 * @returns {boolean} - True if the date is in winter time, false otherwise.
 */
export const isWinterTime = (date) => {
  const year = date.getFullYear();
  const lastSundayInMarch = getLastSundayOfMonth(year, 2); // March
  const lastSundayInOctober = getLastSundayOfMonth(year, 9); // October

  lastSundayInMarch.setHours(1, 0, 0, 0); // Set to 01:00 AM
  lastSundayInOctober.setHours(1, 0, 0, 0); // Set to 01:00 AM

  return date < lastSundayInMarch || date >= lastSundayInOctober;
};

/**
 * @function countMemberTime
 * @description This function calculates the time elapsed since a member registered, considering UTC format.
 * @param {string} member_since - The registration time in UTC format (YYYY-MM-DDTHH:MM:SSZ).
 * @returns {string} - The time elapsed since the member registered
 */
export function countMemberTime(member_since) {
  // Parsing the member_since date string as a UTC Date object
  const memberDate = new Date(Date.parse(member_since));

  const now = new Date(); // current date and time

  const difference = now.getTime() - memberDate.getTime();

  // Ensuring the difference is non-negative
  if (difference < 0) {
    return "Invalid date or future date provided.";
  }

  const seconds = Math.floor(difference / 1000); // Measuring in seconds
  const minutes = Math.floor(seconds / 60); // Measuring in minutes
  const hours = Math.floor(minutes / 60); // Measuring in hours
  const days = Math.floor(hours / 24); // Measuring in days
  const months = Math.floor(days / 30.44); // Approximation of a month measured
  const years = Math.floor(days / 365.25); // Approximation of a year measured

  if (years > 0) {
    return `${years} ${years > 1 ? "anos" : "ano"}`;
  } else if (months > 0) {
    return `${months} ${months > 1 ? "meses" : "mês"}`;
  } else if (days > 0) {
    return `${days} ${days > 1 ? "dias" : "dia"}`;
  } else if (hours > 0) {
    return `${hours} ${hours > 1 ? "horas" : "hora"}`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes > 1 ? "minutos" : "minuto"}`;
  } else {
    return `${seconds} ${seconds > 1 ? "segundos" : "segundo"}`;
  }
}
