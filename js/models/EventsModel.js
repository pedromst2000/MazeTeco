import Event from "../classes/Event.js";
let events;

/**
 * @function init
 * @description This function initializes the local storage with data.
 * @returns {void}
 */

export function init() {
	events = localStorage.getItem("events") ? JSON.parse(localStorage.events) : [];
}

/**
 * @function getEvents
 * @description This function returns the events array.
 * @returns {array}
 */

export function getEvents() {
	return events;
}

/**
 * @function addEvent
 * @description This function adds a new event and add it to the events array.
 * @param {string} photo - The photo of the event
 * @param {string} title - The title of the event is optional since it can have a logo
 * @param {string} logo - The logo of the event is optional since its not mandatory to have a logo
 * @param {string} link - The link of the event
 * @param {string} description - The description of the event
 * @returns {void}
 */

export function addAlumni(photo, title, logo, link, description) {
	if (events.some((a) => a.title === title)) {
		throw new Error(`O título já existe.`);
	}

	const event = new Event(photo, title, logo, link, description);

	events.push({
		id: events.length + 1,
		...event,
	});

	localStorage.setItem("events", JSON.stringify(events));
}
