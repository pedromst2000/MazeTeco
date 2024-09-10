import Teaser from "../classes/Teaser.js";
let teasers;

/**
 * @function init
 * @description This function initializes the local storage with data.
 * @returns {void}
 */

export function init() {
	teasers = localStorage.getItem("teasers") ? JSON.parse(localStorage.teasers) : [];
}

/**
 * @function getTeasers
 * @description This function returns the teasers array.
 * @returns {array}
 */

export function getTeasers() {
	return teasers;
}

/**
 * @function getTeaserById
 * @description This function returns an teaser by id.
 * @param {number} id - The id of the teaser
 * @returns {object}
 */

export function getTeaserById(id) {
	return teasers.find((teaser) => teaser.id === id);
}

/**
 * @function addTeaser
 * @description This function add a new alumni and add it to the alumnis array.
 * @param {string} video - The video of the teaser is optional since it can have youtube embedded video
 * @param {string} embeddedSrc - The embedded video of the teaser is optional since it can have a video uploaded~
 * @param {string} photo - The photo of the teaser
 * @param {string} title - The title of the event is optional since it can have a logo
 * @param {string} company - The company each is related to the teaser.
 * @param {number} year - The year of the teaser
 * @param {theme} theme - The theme of the teaser
 * @param {string} description - The description
 * @returns {void}
 */

export function addTeaser(
	video = "" || null, // Default value
	embeddedSrc = "" || null, // Default value
	photo,
	title,
	company,
	year,
	theme,
	description,
) {
	// checking if the theme already exists
	if (teasers.some((teaser) => teaser.theme === theme)) {
		throw new Error(`O Tema já existe.`);
	}

	const teaser = new Teaser(
		video,
		embeddedSrc,
		photo,
		title,
		company,
		year,
		theme,
		description,
	);

	teasers.push({
		id: teasers.length + 1,
		...teaser,
	});

	localStorage.setItem("teasers", JSON.stringify(teasers));
}

/**
 * @function deleteTeaser
 * @description This function delete an teaser by id.
 * @param {number} id - The id of the teaser
 */

export function deleteTeaser(id) {
	const index = teasers.findIndex((teaser) => teaser.id === id);

	if (index !== -1) {
		teasers.splice(index, 1);

		localStorage.setItem("teasers", JSON.stringify(teasers));
	}
}
