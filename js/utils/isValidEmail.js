/**
 * @description Function to validate the email format
 * @function isValidEmail
 * @param {string} email - The email to validate
 * @returns {boolean} - The result of the validation
 */

export function isValidEmail(email) {
	const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!validFormat.test(email)) {
		throw new Error(`O email deve ser válido e conter pelo menos um @ e um .`);
	}

	return validFormat.test(email);
}
