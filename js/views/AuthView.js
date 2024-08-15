import * as User from "../models/UserModel.js";
import {
  isValidEmail,
  isvalidUsername,
  isValidPassword,
  displayMessage,
} from "../utils/index.js";

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

  location.pathname.includes("/login")
    ? (document.getElementById("login-form").onsubmit = (e) => {
        e.preventDefault();

        email = document.getElementById("email").value;
        password = document.getElementById("password").value;

        try {
          if (!email || !password) {
            throw new Error("Please fill in all the fields.");
          }

          if (!isValidEmail(email)) {
            throw new Error(isValidEmail(email));
          }

          if (!isValidPassword(password)) {
            throw new Error(isValidPassword(password));
          }

          User.login(email, password);
          displayMessage(
            "#message",
            "You have successfully logged in.",
            "success"
          );
          setTimeout(() => {
            location.reload();
          }, 5500);

          setTimeout(() => {
            location.href = "/index.html";
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
        genrer = document.getElementById("genrer").value;
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
            throw new Error("Please fill in all the fields.");
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
            User.register(
              username,
              password,
              email,
              genrer,
              birthdate,
              _location_
            )
          );
          displayMessage(
            "#message",
            "You have successfully registered.",
            "success"
          );
          setTimeout(() => {
            location.reload();
          }, 5500);

          setTimeout(
            () => {
              location.href = "/index.html";
            },

            1500
          );
        } catch (e) {
          displayMessage("#message", e.message, "error");
        }
      });
}

authView();
