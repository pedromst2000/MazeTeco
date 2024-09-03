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
		return "Invalid date provided.";
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
