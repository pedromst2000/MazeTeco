let categories;

/**
 * @function init
 * @description This function initializes the local storage with data.
 * @returns {void}
 */

export function init() {
	categories = localStorage.getItem("categories")
		? JSON.parse(localStorage.categories)
		: [];
}

/**
 * @function getCategories
 * @description This function returns the categories array.
 * @returns {array}
 */

export function getCategories() {
	return categories;
}

/**
 * @function getCategoryName
 * @description This function returns the category name based on the category id.
 * @param {number} categoryId - The category id.
 * @returns {string} - The category name.
 */

export function getCategoryName(categoryId) {
	const category = categories.find((category) => category.id === categoryId).category;
	return category;
}
