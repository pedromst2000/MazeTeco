/**
 * @class Tag
 * @description This class represents a Tag.
 * @param {string} tag - The name of the tag
 * @returns {Tag}
 */

export default class Tag {
  tag = "";

  /**
   * @description Creates an instance of Tag
   * @param {string} tag - The name of the tag.
   * @memberof Tag
   * @constructs Tag
   * @returns {Tag}
   *
   */

  constructor(tag) {
    this.tag = tag;
  }
}
