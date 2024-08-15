/**
 * @class Category
 * @description This class represents a Category of the activities.
 * @param {string} category - The name of the category
 * @returns {Category}
 */

export default class Category {
  category = "";

  /**
   * @description Creates an instance of Category
   * @param {string} category - The name of the category.
   * @memberof Category
   * @constructs Category
   * @returns {Category}
   *
   */

  constructor(category) {
    this.category = category;
  }
}
