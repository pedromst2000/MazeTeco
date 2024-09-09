/**
 * @function displayMessage
 * @description This function displays a message on the screen.
 * @param {string} element
 * @param {string} message
 * @param {string} type
 * @returns {void}
 */

export function displayMessage(element, message, type) {
	const divMessage = document.querySelector(element);
	divMessage.innerHTML = `
					<div class="auth-message ${type}">
						<div class="message">
							<span>${message}</span>
						</div>
					</div>
`;

	setTimeout(() => {
		divMessage.innerHTML = "";
	}, 100000);
}
