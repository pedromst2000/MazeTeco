import User from "../classes/User.js";
import {
  countMemberDays
} from "../utils/index.js";


let users;

/**
 * @function init
 * @description This function initializes the local storage with data.
 * @returns {void}
 */

export function init() {
  users = localStorage.getItem("users") ? JSON.parse(localStorage.users) : [];
}

/**
 * @function register
 * @description This function register a new user and add it to the users array.
 * @param {string} username - The username of the user
 * @param {string} password - The password of the user
 * @param {string} email - The email of the user
 * @param {string} genrer - The genrer of the user
 * @param {string} birthdate - The birthdate of the user
 * @param {string} location - The location of the user
 * @param {string} member_since - The date the user joined the platform
 * @returns {void}
 */

export function register(
  username,
  password,
  email,
  genrer,
  birthdate,
  location,
  member_since
) {
  // checking if the username already exists
  if (users.some((u) => u.username === username)) {
    throw new Error(`The username already exists.`);
  }

  // checking if the email already exists
  if (users.some((u) => u.email === email)) {
    throw new Error(`The email already exists.`);
  } else {
    const user = new User(
      username,
      password,
      email,
      genrer,
      birthdate,
      location,
    );

    users.push(
      {
        id: users.length + 1,
        ...user,
      }
    );

    localStorage.setItem("users", JSON.stringify(users));
  }
}

/**
 * @function login
 * @description This function allows the user to login.
 * @param {string} email
 * @param {string} password
 * @returns {boolean}
 */

export function login(email, password) {
  // finding an email
  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error(`The email doesn't exist.`);
  }

  if (user.password !== password) {
    throw new Error(`The password is incorrect.`);
  }

  sessionStorage.setItem("loggedUser", JSON.stringify(user));

  return true;
}

/**
 * @function logout
 * @description This function allows the user to logout.
 * @returns {void}
 */

export function logout() {
  sessionStorage.removeItem("loggedUser");
}

/**
 * @function getLoggedUser
 * @description This function returns the logged user.
 * @returns {User}
 */

export function getLoggedUser() {
  return JSON.parse(sessionStorage.loggedUser);
}

/**
 * @function isLogged
 * @description This function checks if the user is logged.
 * @returns {boolean}
 * @returns {void}
 */

export function isLogged() {
  return !!sessionStorage.loggedUser; // !! converts the value to a boolean true or false
}
