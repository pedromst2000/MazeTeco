import * as Poster from "../models/PosterModel.js";
import * as Alumni from "../models/AlumniModel.js";
import * as Teaser from "../models/TeaserModel.js";
import * as Tag from "../models/TagModel.js";
import * as Category from "../models/CategoryModel.js";
import { renderCatalog } from "../utils/renderCatalog.js";
import { toggleSort } from "../utils/sortCatalog.js";

/**
 * @function GalleryView
 * @description This function renders the gallery view.
 * @returns {void}
 */

function GalleryView() {
	Poster.init();
	Alumni.init();
	Teaser.init();
	Tag.init();
	Category.init();

	const posters = Poster.getPosters();
	const alumnis = Alumni.getAlumnis();
	const teasers = Teaser.getTeasers();

	let catalogs = [];
	catalogs = catalogs.concat(posters, alumnis, teasers);
	catalogs = catalogs.map((catalog) => {
		const findTagName = Tag.getTagName(catalog.tag_id);
		const findCategoryName = Category.getCategoryName(catalog.category_id);

		return {
			...catalog,
			tag: findTagName,
			category: findCategoryName,
		};
	});

	catalogs.sort((a, b) => a.id - b.id);

	catalogs = catalogs.map((catalog) => {
		if (catalog.title) {
			catalog.title =
				catalog.title.length > 30
					? catalog.title.substring(0, 30) + "..."
					: catalog.title;
		}
		if (catalog.theme) {
			catalog.theme =
				catalog.theme.length > 30
					? catalog.theme.substring(0, 30) + "..."
					: catalog.theme;
		}
		if (catalog.occupation) {
			catalog.occupation =
				catalog.occupation.length > 30
					? catalog.occupation.substring(0, 30) + "..."
					: catalog.occupation;
		}
		return catalog;
	});

	renderCatalog(catalogs);

	/**
	 * @function debounce
	 * @description This function limits the rate at which a function can fire.
	 *
	 *  Debouncing is a programming technique that helps to improve the performance of web applications by limiting the frequency of function calls.
	 *
	 * Follow the links for more information:
	 *   - Web Dev Simplified - [debounce](https://www.youtube.com/watch?v=cjIswDCKgu0)
	 *   - Dev.to - [JavaScript Debounce, Easiest explanation !(with Code)](https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc)
	 *
	 * @param {function} func - The function to be debounced.
	 * @param {number} delay - The delay in milliseconds.
	 * @returns {function} - The debounced function.
	 *
	 */

	function debounce(func, delay) {
		let timeoutId;
		return function (...args) {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(() => {
				func.apply(this, args);
			}, delay);
		};
	}

	document.getElementById("search").onkeydown = debounce((e) => {
		const search = e.target.value.toLowerCase();

		const filteredCatalogs = catalogs.filter((catalog) => {
			return (
				catalog.name?.toLowerCase().includes(search) ||
				catalog.title?.toLowerCase().includes(search) ||
				catalog.tag?.toLowerCase().includes(search) ||
				catalog.category?.toLowerCase().includes(search) ||
				catalog.company?.toLowerCase().includes(search)
			);
		});

		renderCatalog(filteredCatalogs);
	}, 100);

	document.querySelector(".sort-btn button").onclick = () => {
		toggleSort(catalogs, "tag");
		renderCatalog(catalogs);
	};
}

GalleryView();
