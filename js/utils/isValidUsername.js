/**
 * @description Function to validate the username format (at least 5 characters long and contains only letters and numbers)
 * @function isvalidUsername
 * @param {string} username - The username to validate
 * @returns {boolean} - The result of the validation
 */

export function isvalidUsername(username) {
	const validFormat = /^[a-zA-Z0-9]{5,}$/;

	if (!validFormat.test(username)) {
		throw new Error(
			`Username deve ser pelo menos 5 caracteres e conter apenas letras e números.`,
		);
	}

	return validFormat.test(username);
}
