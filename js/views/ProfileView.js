import * as User from "../models/UserModel.js";

/**
 * @function ProfileView
 * @description This function renders the profile details view.
 *
 */

function ProfileView() {
	User.init();

	const user = User.getLoggedUser();

    console.log(user);
    

	document.getElementById("location").innerHTML = user.location;
	document.getElementById("birthday").innerHTML = user.birthdate
		.replace("-", "/")
		.replace("-", "/");
    
    document.querySelector('.avatar').src = user.selected_avatar;
    }

ProfileView();