import * as User from "../models/UserModel.js";
import { isValidEmail } from "../utils/isValidEmail.js";
import { isvalidUsername } from "../utils/isvalidUsername.js";
import { isValidPassword } from "../utils/isValidPassword.js";
import { displayMessage } from "../utils/displayMessage.js";

/**
 * @function authView
 * @description This function renders the authentication view.
 * @returns {void}
 */

function authView() {
	User.init();

	let email;
	let username;
	let password;
	let genrer;
	let birthdate;
	let _location_;

	// Toggle password visibility
	document.getElementById("TogglePassword").onclick = () => {
		const img = document.getElementById("TogglePassword");

		if (document.getElementById("password").type === "password") {
			document.getElementById("password").type = "text";
			img.src = "../../assets/svg/icons/OpenEyeIcon.svg";
		} else {
			document.getElementById("password").type = "password";
			img.src = "../../assets/svg/icons/HideenEyeIcon.svg";
		}
	};

	document.getElementById("goBack").onclick = () => {
		history.back(); // Go back to the previous page
	};

	location.pathname.includes("/login")
		? (document.getElementById("login-form").onsubmit = (e) => {
				e.preventDefault();

				email = document.getElementById("email").value;
				password = document.getElementById("password").value;

				try {
					if (!email || !password) {
						throw new Error("Preencha todos os campos.");
					}

					if (!isValidEmail(email)) {
						throw new Error(isValidEmail(email));
					}

					if (!isValidPassword(password)) {
						throw new Error(isValidPassword(password));
					}

					User.login(email, password);
					displayMessage("#message", "Login com Successo!", "success");
					setTimeout(() => {
						location.reload();
					}, 5500);

					setTimeout(() => {
						location.href = "/html/index.html";
					}, 1500);
				} catch (e) {
					displayMessage("#message", e.message, "error");
				}
			})
		: (document.getElementById("register-form").onsubmit = (e) => {
				e.preventDefault();

				email = document.getElementById("email").value;
				username = document.getElementById("username").value;
				password = document.getElementById("password").value;
				genrer = document.getElementById("gender").value;
				birthdate = document.getElementById("birthday").value;
				_location_ = document.getElementById("location").value;

				try {
					if (
						!email ||
						!username ||
						!password ||
						!genrer ||
						!birthdate ||
						_location_ === "Selecione a localidade"
					) {
						throw new Error("Preencha todos os campos.");
					}

					if (!isValidEmail(email)) {
						throw new Error(isValidEmail(email));
					}

					if (!isvalidUsername(username)) {
						throw new Error(isvalidUsername(username));
					}

					if (!isValidPassword(password)) {
						throw new Error(isValidPassword(password));
					}
					console.log(
						User.register(username, password, email, genrer, birthdate, _location_),
					);
					displayMessage("#message", "Registado com Sucesso", "success");
					setTimeout(() => {
						location.reload();
					}, 5500);

					setTimeout(
						() => {
							location.href = "/html/Authentication/login.html";
						},

						1500,
					);
				} catch (e) {
					displayMessage("#message", e.message, "error");
				}
			});
}

authView();
