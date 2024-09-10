/**
 * @class Alumni
 * @description This class represents a alumni.
 * @param {string} photo - The photo of the alumni
 * @param {string} name - The name of the alumni
 * @param {number} yearGrad - The year of graduation of the alumni
 * @param {string} occupation - The occupation of the alumni
 * @param {string} testimony - The testimony of the alumni
 * @param {string} description - The description of the alumni
 * @returns {Alumni}
 */

export default class Alumni {
	photo = "";
	name = "";
	yearGrad = "";
	occupation = "";
	testimony = "";
	description = "";

	/**
	 * @description Creates an instance of Alumni
	 * @param {string} photo - The photo of the alumni
	 * @param {string} name - The name of the alumni
	 * @param {number} yearGrad - The year of graduation of the alumni
	 * @param {string} occupation - The occupation of the alumni
	 * @param {string} testimony - The testimony of the alumni
	 * @param {string} description - The description of the alumni
	 * @memberof Alumni
	 * @constructs Alumni
	 * @returns {Alumni}
	 *
	 */

	constructor(photo, name, yearGrad, occupation, testimony, description) {
		this.photo = photo;
		this.name = name;
		this.yearGrad = yearGrad;
		this.occupation = occupation;
		this.testimony = testimony;
		this.description = description;
	}
}
