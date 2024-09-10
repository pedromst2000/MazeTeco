import Poster from "../classes/Poster.js";
let posters;

/**
 * @function init
 * @description This function initializes the local storage with data.
 * @returns {void}
 */

export function init() {
	posters = localStorage.getItem("posters") ? JSON.parse(localStorage.posters) : [];
}

/**
 * @function getPosters
 * @description This function returns the posters array.
 * @returns {array}
 */

export function getPosters() {
	return posters;
}

/**
 * @function getPosterById
 * @description This function returns an poster by id.
 * @param {number} id - The id of the poster
 * @returns {object}
 */

export function gePosterById(id) {
	return posters.find((poster) => poster.id === parseInt(id));
}

/**
 * @function addPoster
 * @description This function add a new alumni and add it to the alumnis array.
 * @param {string} photo - The photo of the event
 * @param {string} download_name - The name of the file to download
 * @param {string} company - The company each is related to the poster.
 * @param {number} year - The year of the poster
 * @param {theme} theme - The theme of the poster
 * @param {string} description - The description of the Poster.
 * @returns {void}
 */

export function addPoster(photo, download_name, company, year, theme, description) {
	// checking if the theme already exists
	if (posters.some((poster) => poster.theme === theme)) {
		throw new Error(`O Tema já existe.`);
	}

	const poster = new Poster(photo, download_name, company, year, theme, description);

	posters.push({
		id: posters.length + 1,
		...poster,
	});

	localStorage.setItem("posters", JSON.stringify(posters));
}

/**
 * @function deletePoster
 * @description This function delete an poster by id.
 * @param {number} id - The id of the poster
 */

export function deletePoster(id) {
	const index = posters.findIndex((poster) => poster.id === id);

	if (index !== -1) {
		// if the poster exists in the array
		posters.splice(index, 1);

		localStorage.setItem("posters", JSON.stringify(posters));
	}
}
