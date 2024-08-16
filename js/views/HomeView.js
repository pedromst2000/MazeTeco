import * as User from "../models/UserModel.js";

/**
 * @function homeView
 * @description This function renders the home view.
 * @returns {void}
 */

function homeView() {
  User.init();

  document.querySelector("#home").innerHTML = `
      <h1>Welcome to MazeTeco</h1>
        ${
          User.isLogged()
            ? `
                <div>
                <h2>Profile</h2>
                <img src="${User.getLoggedUser().selected_avatar}" alt="
                ${
                  User.getLoggedUser().avatars.find(
                    (a) => a.src === User.getLoggedUser().selected_avatar
                  ).nameAlt
                }
                " />
                <p>Username: ${User.getLoggedUser().username}</p>
                <p>Email: ${User.getLoggedUser().email}</p>
                <p>Genrer: ${User.getLoggedUser().genrer}</p>
                <p>Birthdate: ${User.getLoggedUser().birthdate}</p>
                <p>Location: ${User.getLoggedUser().location}</p>
                <p>Points: ${User.getLoggedUser().points}</p>
                <p>Lives: ${User.getLoggedUser().lives}</p>
                <p>Boost: ${User.getLoggedUser().boost}</p>
                <p>Role: ${User.getLoggedUser().role}</p>
                </div>
              
                <button id="logout">Logout</button>
                `
            : `
    
      <button value="Sign Up">
        <a href="/html/Authentication/register.html">Sign Up</a>
      </button>
      <button value="Sign In">
        <a href="/html/Authentication/login.html">Sign In</a>
      </button>
              `
        }
      `;

        document.querySelector("#logout")  ?
  document.querySelector("#logout").onclick = () => {
    User.logout();
    location.reload();
  } : null;

        
}

homeView();
