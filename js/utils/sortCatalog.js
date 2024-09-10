const SORTING_STATE = {
	field: "title",
	ascending: true,
};

/**
 * @function sortCatalog - Sorts a catalog by a given field
 * @description This function sorts a catalog by a given field.
 * @param {Array} catalog - The catalog to sort
 * @param {string} field - The field to sort by
 * @param {boolean} ascending - Whether to sort in ascending order
 * @returns {void}
 */

export function sortCatalog(catalog, field, ascending = true) {
	catalog.sort((a, b) => {
		const aField = a[field] ? a[field].toLowerCase() : "";
		const bField = b[field] ? b[field].toLowerCase() : "";

		if (aField === bField) return 0;

		const comparison = aField.localeCompare(bField);
		// asc means ascending, if it is true, return comparison, if not, return -comparison
		// desc means descending, if it is true, return -comparison, if not, return comparison
		return ascending ? comparison : -comparison;
	});
}

/**
 * @function toggleSort - Toggles the sorting state
 * @description This function toggles the sorting state.
 * @param {Array} catalog - The catalog to sort
 * @param {string} field - The field to sort by
 * @returns {void}
 */

export function toggleSort(catalog, field) {
	if (SORTING_STATE.field === field) {
		SORTING_STATE.ascending = !SORTING_STATE.ascending;
	} else {
		SORTING_STATE.field = field;
		SORTING_STATE.ascending = true;
	}

	sortCatalog(catalog, SORTING_STATE.field, SORTING_STATE.ascending);
}
