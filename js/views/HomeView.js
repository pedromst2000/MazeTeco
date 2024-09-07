import * as User from "../models/UserModel.js";

/**
 * @function homeView
 * @description This function renders the home view.
 * @returns {void}
 */

function homeView() {
	User.init();
}

homeView();
