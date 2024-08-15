/**
 * @class Event
 * @description This class represents an Event of the activities.
 * @param {string} photo - The photo of the event
 * @param {string} title - The title of the event is optional since it can have a logo
 * @param {string} logo - The logo of the event is optional since its not mandatory to have a logo
 * @param {string} link - The link of the event
 * @param {string} description - The description of the event
 * @returns {Event}
 */

export default class Event {
  photo = "";
  title = "" || null; // Default value
  logo = "" || null; // Default value
  link = "";
  description = "";

  /**
   * @description Creates an instance of Event
   * @param {string} photo - The photo of the event
   * @param {string} title - The title of the event
   * @param {string} logo - The logo of the event
   * @param {string} link - The link of the event
   * @param {string} description - The description of the event
   * @memberof Event
   * @constructs Event
   * @returns {Event}
   */

  constructor(photo, 
    title = "" || null, // Default value
    logo = "" || null, // Default value
    link, description) {
    this.photo = photo;
    this.title = title;
    this.logo = logo;
    this.link = link;
    this.description = description;
  }
}
