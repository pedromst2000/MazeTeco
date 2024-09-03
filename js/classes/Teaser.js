/**
 * @class Teaser
 * @description This class represents a Teaser
 * @param {string} videosrc - The video src of the teaser
 * @param {string} embeddedSrc - The embedded video of the teaser is optional since it can have a video uploaded
 * @param {string} title - The title of the video
 * @param {string} company - The company each is related to the teaser.
 * @param {number} year - The year of the teaser
 * @param {string} description - The description of the event
 * @returns {Teaser}
 */

export default class Teaser {
	video = "" || null; // Default value
	embeddedSrc = "" || null; // Default value
	title = "";
	company = "";
	year = 0;
	description = "";

	/**
	 * @description Creates an instance of Event
	 * @param {string} video - The video of the teaser is optional since it can have youtube embedded video
	 * @param {string} embeddedSrc - The embedded video of the teaser is optional since it can have a video uploaded
	 * @param {string} title - The title of the event is optional since it can have a logo
	 * @param {string} company - The company each is related to the teaser.
	 * @param {number} year - The year of the teaser
	 * @param {theme} theme - The theme of the teaser
	 * @param {string} description - The description of the event
	 * @memberof Teaser
	 * @constructs Teaser
	 * @returns {Teaser}
	 */

	constructor(
		video = "" || null, // Default value
		embeddedSrc = "" || null, // Default value
		title,
		company,
		year,
		theme,
		description,
	) {
		this.video = video;
		this.embeddedSrc = embeddedSrc;
		this.title = title;
		this.company = company;
		this.year = year;
		this.theme = theme;
		this.description = description;
	}
}
