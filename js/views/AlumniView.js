import * as Alumni from "../models/AlumniModel.js";

/**
 * @function AlumniView
 * @description This function renders the alumni details view.
 */
function AlumniView() {
	Alumni.init();

	const params = new URLSearchParams(window.location.search); // To Search the query string in the URL
	const alumniId = params.get("id"); // To get the query string value from the URL
	const alumni = Alumni.getAlumniById(parseInt(alumniId));

	console.log(alumni);
}

AlumniView();
