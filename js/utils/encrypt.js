/**
 * @function encrypt
 * @description This function encrypts the password.
 * @param {string} password - The password to be encrypted.
 * @returns {string} - The encrypted password.
 */

export function encrypt(password) {
	let encryptedPassword = "";
	let HASH_PASSWORD_KEY = process.env.HASH_PASSWORD_KEY;

	// encrypting the password with token
}

/**
 * @function decrypt
 * @description This function decrypts the password.
 * @param {string} encryptedPassword - The password to be decrypted.
 * @returns {string} - The decrypted password.
 */

export function decrypt(encryptedPassword) {
	let password = "";

	for (let i = 0; i < encryptedPassword.length; i++) {
		password += String.fromCharCode(encryptedPassword.charCodeAt(i) - 3);
	}

	return password;
}

/**
 * @function compare
 * @description This function compares the password with the encrypted password.
 * @param {string} password - The password to be compared.
 * @param {string} encryptedPassword - The encrypted password to be compared.
 * @returns {boolean} - The result of the comparison.
 */

export function compare(password, encryptedPassword) {
	return password === decrypt(encryptedPassword);
}
