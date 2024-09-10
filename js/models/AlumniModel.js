import Alumni from "../classes/Alumni.js";
let alumnis;

/**
 * @function init
 * @description This function initializes the local storage with data.
 * @returns {void}
 */

export function init() {
	alumnis = localStorage.getItem("alumnis") ? JSON.parse(localStorage.alumnis) : [];
}

/**
 * @function getAlumnis
 * @description This function returns the alumnis array.
 * @returns {array}
 */

export function getAlumnis() {
	return alumnis;
}

/**
 * @function getAlumniById
 * @description This function returns an alumni by id.
 * @param {number} id - The id of the alumni
 * @returns {object}
 */

export function getAlumniById(id) {
	return alumnis.find((alumni) => alumni.id === id);
}

/**
 * @function addAlumni
 * @description This function add a new alumni and add it to the alumnis array.
 * @param {number} yearGrad - The year of graduation of the alumni
 * @param {string} occupation - The occupation of the alumni
 * @param {string} testimony - The testimony of the alumni
 * @param {string} description - The description of the alumni
 * @param {string} photo - The photo of the alumni
 * @returns {void}
 */

export function addAlumni(yearGrad, occupation, testimony, description, photo) {

	if (alumnis.some((a) => a.testimony === testimony)) {
		throw new Error(`A citação já existe.`);
	}

	const alumni = new Alumni(title, yearGrad, occupation, testimony, description, photo);

	alumnis.push({
		id: alumnis.length + 1,
		...alumni,
	});

	localStorage.setItem("alumnis", JSON.stringify(alumnis));
}

/**
 * @function deleteAlumni
 * @description This function delete an alumni by id.
 * @param {number} id - The id of the alumni
 */

export function deleteAlumni(id) {
	alumnis = alumnis.filter((alumni) => alumni.id !== id);
	localStorage.setItem("alumnis", JSON.stringify(alumnis));
}
