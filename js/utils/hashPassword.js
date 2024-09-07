/**
 * @function encrypt
 * @description Encrypts the password by adding an offset to the ASCII value of each character.
 * @param {string} password - The password to be encrypted.
 * @returns {string} - The encrypted password.
 */
export function encrypt(password) {
	let encryptedPassword = "";

	// Encrypt the password by adding 3 to the ASCII value of each character
	for (let i = 0; i < password.length; i++) {
		encryptedPassword += String.fromCharCode(password.charCodeAt(i) + 3);
	}

	return encryptedPassword;
}

/**
 * @function decrypt
 * @description Decrypts the password by subtracting an offset from the ASCII value of each character.
 * @param {string} encryptedPassword - The encrypted password.
 * @returns {string} - The decrypted password.
 */
function decrypt(encryptedPassword) {
	let password = "";

	// Decrypt the password by subtracting 3 from the ASCII value of each character
	for (let i = 0; i < encryptedPassword.length; i++) {
		password += String.fromCharCode(encryptedPassword.charCodeAt(i) - 3);
	}

	return password;
}

/**
 * @function compare
 * @description Compares the password entered by the user with the stored encrypted password.
 * @param {string} password - The password entered by the user.
 * @param {string} encryptedPassword - The encrypted password stored in the database.
 * @returns {boolean} - The result of the comparison.
 */
export function compare(password, encryptedPassword) {
	const decryptedPassword = decrypt(encryptedPassword);

	// Compares the entered password with the decrypted password
	return password === decryptedPassword;
}
