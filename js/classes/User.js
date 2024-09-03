/**
 * @class User
 * @description This class represents a user.
 * @param {string} username - The username of the user
 * @param {string} password - The password of the user
 * @param {string} email - The email of the user
 * @param {string} genrer - The genrer of the user
 * @param {string} birthdate - The birthdate of the user
 * @param {string} location - The location of the user
 * @param {string} selected_avatar - The avatar of the user
 * @param {string} selected_banner - The banner of the user
 * @param {array} avatars - The avatars of the user
 * @param {number} points - The points of the user
 * @param {number} lives - The daily lives of the user
 * @param {number} boost - The daily boost of the user
 * @param {number} level - The level of the user
 * @param {string} role - The role of the user
 * @param {boolean} isBlocked - The status of the user
 * @param {string} member_since - The date the user joined the platform
 * @returns {User}
 */

export default class User {
	username = "";
	password = "";
	email = "";
	genrer = "";
	birthdate = "";
	location = "";
	selected_avatar = "";
	selected_banner = "";
	avatars = [];
	points = 0;
	lives = 0;
	boost = 0;
	level = 0;
	role = "";
	isBlocked = false;
	member_since = "";

	/**
	 * @description Creates an instance of User.
	 * @param {string} username - The username of the user
	 * @param {string} password - The password of the user
	 * @param {string} email - The email of the user
	 * @param {string} genrer - The genrer of the user
	 * @param {string} birthdate - The birthdate of the user
	 * @param {string} location - The location of the user
	 * @param {string} selected_avatar - The avatar of the user
	 * @param {string} selected_banner - The banner of the user
	 * @param {array} avatars - The avatars of the user
	 * @param {number} points - The points of the user
	 * @param {number} lives - The daily lives of the user
	 * @param {number} boost - The daily boost of the user
	 * @param {number} level - The level of the user
	 * @param {string} role - The role of the user
	 * @param {boolean} isBlocked - The status of the user
	 * @param {string} member_since - The date the user joined the platform
	 * @memberof User
	 * @constructs User
	 * @returns {User}
	 *
	 */

	constructor(
		username,
		password,
		email,
		genrer,
		birthdate,
		location,
		// default values when adding a new user instance
		selected_avatar = genrer == "masculino"
			? "../assets/images/avatars/default_male.png"
			: "../assets/images/avatars/default_female.jpg",
		selected_banner = "../assets/images/Banner.png",
		avatars = [
			{
				id: 1,
				nameAlt: "default_avatar",
				isSelected: true,
				src: selected_avatar,
			},
		],
		points = 0,
		lives = 5,
		boost = 2,
		level = 1,
		role = "regular",
		isBlocked = false,
		member_since = new Date().toISOString().slice(0, 10) +
			"T" +
			new Date().toISOString().slice(11, 19) +
			"Z",
	) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.genrer = genrer;
		this.birthdate = birthdate;
		this.location = location;
		this.selected_avatar = selected_avatar;
		this.selected_banner = selected_banner;
		this.avatars = avatars;
		this.points = points;
		this.lives = lives;
		this.boost = boost;
		this.level = level;
		this.role = role;
		this.isBlocked = isBlocked;
		this.member_since = member_since;
	}
}
