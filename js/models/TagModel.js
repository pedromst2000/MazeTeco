let tags;

/**
 * @function init
 * @description This function initializes the local storage with data.
 * @returns {void}
 */

export function init() {
	tags = localStorage.getItem("tags") ? JSON.parse(localStorage.tags) : [];
}

/**
 * @function getTags
 * @description This function returns the tags array.
 * @returns {array}
 */

export function getTags() {
	return tags;
}

/**
 * @function getTagName
 * @description This function returns the tag name based on the tag id.
 * @param {number} tagId - The tag id.
 * @returns {string} - The tag name.
 */

export function getTagName(tagId) {
	const tag = tags.find((tag) => tag.id === tagId).tag;
	return tag;
}
