/**
 * @class Poster
 * @description This class represents a Poster
 * @param {string} photo - The photo of the event
 * @param {string} company - The company each is related to the poster.
 * @param {number} year - The year of the poster
 * @param {theme} theme - The theme of the poster
 * @param {string} description - The description of the event
 * @returns {Poster}
 */

export default class Poster {
  photo = "";
  title = "";
  company = "";
  year = 0;
  theme = "";
  description = "";

  /**
   * @description Creates an instance of Event
   * @param {string} photo - The photo of the event
   * @param {string} title - The title of the poster
   * @param {string} company - The company each is related to the poster.
   * @param {number} year - The year of the poster
   * @param {theme} theme - The theme of the poster
   * @param {string} description - The description of the event
   * @memberof Poster
   * @constructs Poster
   * @returns {Poster}
   */

  constructor(photo, title, company, year, theme, description) {
    this.photo = photo;
    this.title = title;
    this.company = company;
    this.year = year;
    this.theme = theme;
    this.description = description;
  }
}
