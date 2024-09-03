/**
 * @description Function to validate the password format (at least 8 characters long, contains at least one number and one letter)
 * @function isValidPassword
 * @param {string} password - The password to validate
 * @returns {boolean} - The result of the validation
 */

export function isValidPassword(password) {
	const validFormat = /^(?=.*\d)(?=.*[a-z]).{8,}$/;

	if (!validFormat.test(password)) {
		throw new Error(
			`Password deve ser pelo menos 8 caracteres e conter pelo menos um número e uma letra.`,
		);
	}

	return validFormat.test(password);
}
