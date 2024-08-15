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
    <div class="auth-message-${type}">${message}</div>
`;

  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

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
      `Username deve ser pelo menos 5 caracteres e conter apenas letras e números.`
    );
  }

  return validFormat.test(username);
}

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
      `Password deve ser pelo menos 8 caracteres e conter pelo menos um número e uma letra.`
    );
  }

  return validFormat.test(password);
}

export function countMemberDays(member_since) {
  const today = new Date();
  const memberSince = new Date(member_since);
  const difference = today - memberSince;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Measured in days

  if (days >= 30) {
    return `${Math.floor(days / 30)} ${
      Math.floor(days / 30) > 1 ? "meses" : "mês"
    }`;
  }

  if (days >= 365) {
    return `${Math.floor(days / 365)} ${
      Math.floor(days / 365) > 1 ? "anos" : "ano"
    }`;
  }

  return `${days} ${days > 1 ? "dias" : "dia"}`;
}
