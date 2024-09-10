import * as User from "../models/UserModel.js";

/**
 * @function NavBarView
 * @description This function renders the NavBar view Component.
 * @param {boolean} isAdmin - Is the user an admin?
 * @param {boolean} isRegular - Is the user a regular user?
 * @param {boolean} isLogged - Is the user logged in?
 * @returns {void}
 */
NavBarView();

function NavBarView() {
	User.init();

	const isLogged = User.isLogged();
	const isAdmin = User.getLoggedUser()?.role === "admin";

	// Default NavBar
	let navbar = ` 
    <div class="logo-container">
        <img src="/assets/svg/Logo.svg" alt="logo" class="logo" />
    </div>
    <div class="auth-links">
        <ul class="auth-links-list">
            <li class="navbar-link"><a class="login-btn" href="/html/Authentication/login.html"><span>Iniciar Sessão</span></a></li>
            <li class="navbar-link"><a class="register-btn" href="/html/Authentication/register.html"><span>Criar Conta</span></a></li>
        </ul>
        </div>
     <button id="hamburguer-toggle" class="navbar-toggle" aria-label="Toggle navigation">
			<img src="/assets/svg/icons/Hamburguer.svg" alt="menu" class="menu" />
		</button>

    <div class="auth-links-mobile">   
    <div class="auth-section">
         <ul class="auth-links-list">
            <li class="navbar-link"><a class="login-btn" href="/html/Authentication/login.html"><span>Iniciar Sessão</span></a></li>
            <li class="navbar-link"><a class="register-btn" href="/html/Authentication/register.html"><span>Criar Conta</span></a></li>
        </ul>
    </div>
      <div class="social-media">
            <a href="#"><img src="/assets/svg/icons/Facebook_V2.svg" alt="facebook" class="social-media-icon" /></a>
            <a href="#"><img src="/assets/svg/icons/Instagram_V2.svg" alt="instagram" class="social-media-icon" /></a>
            <a href="#"><img src="/assets/svg/icons/X_V2.svg" alt="twitter" class="social-media-icon" /></a>
            <a href="#"><img src="/assets/svg/icons/Youtube_V2.svg" alt="twitter" class="social-media-icon" /></a>
        </div>
        </div>
   
    

    `;

	// Regular View of the NavBar
	if (isLogged) {
		navbar = `
            <div class="logo-container">
        <img src="/assets/svg/Logo.svg" alt="logo" class="logo" />
    </div>

    <div class="nav-links">
        <ul id="nav-links" class="nav-links-list">
            <li class="navbar-link"><a class="nav-link-a active" href="${
							location.pathname.includes("/html/Details/")
								? "../../html/index.html "
								: location.pathname.includes("/html/Manage/")
									? "../index.html"
									: "/html/index.html"
						}"



			}"><span>Home</span></a></li>
            <li class="navbar-link"><a class="nav-link-a" href="${
							location.pathname.includes("/html/Details/")
								? "../../html/About.html"
								: location.pathname.includes("/html/Manage/")
									? "../About.html"
									: "/html/About.html"
						}"><span>About</span></a></li>
            <li class="navbar-link"><a class="nav-link-a" href="${
							location.pathname.includes("/html/Details/")
								? "../../html/Events.html"
								: location.pathname.includes("/html/Manage/")
									? "../Events.html"
									: "/html/Events.html"
						}"><span>Eventos</span></a></li>
            <li class="navbar-link"><a class="nav-link-a" href="${
							location.pathname.includes("/html/Details/")
								? "../../html/Gallery.html"
								: location.pathname.includes("/html/Manage/")
									? "../Gallery.html"
									: "/html/Gallery.html"
						}"><span>Galeria</span></a></li>
            </ul>
        </div>

        <div class="user-section">
            <div class="username">
                <span>${User.getLoggedUser().username}</span>
            </div>
            <div class="user-avatar">
                <div class="circle-avatar">
                    <img src="${User.getLoggedUser().selected_avatar}" alt="avatar" class="avatar" />
                </div>
            </div>
                    <div class="user-dropdown">
                <ul class="dropdown-list">
                    <li class="dropdown-link"><a class="dropdown-link-a" href="/html/Profile.html"><span>Ver Perfil</span></a></li>
                    ${isAdmin ? `<li class="dropdown-link"><a class="dropdown-link-a" href="/html/Manage/index.html"><span>Gestão</span></a></li>` : ""}
                    <li class="dropdown-link"><a id="logout-dropdown" href="#"><span>Sair</span></a></li>
                </ul>
                </div>

                <div id="dropdown-toggle" class="arrow-dropdown"></div>
        </div>


     <button id="hamburguer-toggle-logged" class="navbar-toggle-logged" aria-label="Toggle navigation">
			<img src="/assets/svg/icons/Hamburguer.svg" alt="menu" class="menu" />
		</button>

        <div class="links-mobile">   
    <div class="section">
         <ul class="links-list-mobile">
             <li class="navbar-link"><a class="nav-link-mobile-a active" href="${location.pathname === "/html/Manage/index.html" ? "../index.html" : "../html/index.html"}"><span>Home</span></a></li>
            <li class="navbar-link"><a class="nav-link-mobile-a" href="${location.pathname === "/html/Manage/index.html" ? "../About.html" : "../html/About.html"}"><span>About</span></a></li>
            <li class="navbar-link"><a class="nav-link-mobile-a" href="${location.pathname === "/html/Manage/index.html" ? "../Events.html" : "../html/Events.html"}"><span>Eventos</span></a></li>
            <li class="navbar-link"><a class="nav-link-mobile-a" href="${location.pathname === "/html/Manage/index.html" ? "../Gallery.html" : "../html/Gallery.html"}"><span>Galeria</span></a></li>
            <li class="navbar-link"><a class="nav-link-mobile-a" href="${location.pathname === "/html/Manage/index.html" ? "../Profile.html" : "../html/Profile.html"}"><span>Ver Perfil</span></a></li>
           
           
            ${isAdmin ? `<li class="navbar-link"><a  class="nav-link-mobile-a" href="${location.pathname === "/Manage/index.html" ? "html/Manage/index.html" : "/html/Manage/index.html"}"><span>Gestão</span></a></li>` : ""}
           
           
           
           
           
            <li class="navbar-link"><a id="logout-mobile" class="nav-link-mobile-a" href="#"><span>Sair</span></a></li>            
            </ul>
    </div>
      <div class="social-media">
            <a href="#"><img src="/assets/svg/icons/Facebook_V2.svg" alt="facebook" class="social-media-icon" /></a>
            <a href="#"><img src="/assets/svg/icons/Instagram_V2.svg" alt="instagram" class="social-media-icon" /></a>
            <a href="#"><img src="/assets/svg/icons/X_V2.svg" alt="twitter" class="social-media-icon" /></a>
            <a href="#"><img src="/assets/svg/icons/Youtube_V2.svg" alt="twitter" class="social-media-icon" /></a>
        </div>

        </div>
        `;
	}

	document.querySelector("#nav-bar").innerHTML = navbar;

	// toggle menu
	const hamburger = document.getElementById("hamburguer-toggle");
	const hamburgerLogged = document.getElementById("hamburguer-toggle-logged");

	if (hamburger) {
		hamburger.onclick = () => {
			const navBar = document.querySelector(".auth-links-mobile");

			navBar.classList?.toggle("open");

			// animate the hamburger when open
			if (navBar.classList.contains("open")) {
				hamburger.classList?.add("open");
			} else {
				hamburger.classList?.remove("open");
			}
		};
	}

	if (hamburgerLogged) {
		hamburgerLogged.onclick = () => {
			const navBar = document.querySelector(".links-mobile");

			navBar.classList?.toggle("open");

			// toggle open menu
			if (navBar.classList.contains("open")) {
				hamburgerLogged.classList?.add("open");
			} else {
				hamburgerLogged.classList?.remove("open");
			}
		};
	}

	// toggle dropdown
	const dropdownToggle = document.getElementById("dropdown-toggle");

	if (dropdownToggle) {
		dropdownToggle.onclick = () => {
			const dropdownMenu = document.querySelector(".user-dropdown");

			dropdownMenu.classList?.toggle("open");

			dropdownToggle.classList?.toggle("rotate");
		};
	}
	// Sign Out
	document.querySelector("#logout-dropdown")
		? (document.getElementById("logout-dropdown").onclick = () => {
				User.logout();
				location.href = "/html/index.html";
			})
		: null;

	document.querySelector("#logout-mobile")
		? (document.getElementById("logout-mobile").onclick = () => {
				User.logout();
				location.href = "/html/index.html";
			})
		: null;
}

document.addEventListener("DOMContentLoaded", () => {
	const navLinks = document.getElementById("nav-links");
	const navItems = document.querySelectorAll(".nav-link-a");
	const mobileLinks = document.querySelector(".links-mobile");
	const mobileItems = document.querySelectorAll(".nav-link-mobile-a");
	const userDropdownItems = document.querySelectorAll(".dropdown-link-a");

	const currentPath = window.location.pathname; // Gets the current path

	// Desktop view links
	navItems.forEach((navItem) => {
		const href = navItem.getAttribute("href");
		if (href && href.includes(currentPath)) {
			navLinks.querySelector(".active")?.classList.remove("active"); // Removes active class from previous link
			navItem.classList.add("active"); // Adds active class to current link
		}

		if (currentPath.includes("/html/Details")) {
			navLinks.querySelector(".active")?.classList.remove("active"); // Removes active class from previous link
			navItems[3].classList.add("active"); // Adds active class to current
		}
	});

	// Mobile view links
	mobileItems.forEach((mobileItem) => {
		const href = mobileItem.getAttribute("href");
		if (href && href.includes(currentPath)) {
			mobileLinks.querySelector(".active")?.classList.remove("active");
			mobileItem.classList.add("active");
			mobileLinks.classList.remove("open");
		}
	});

	// User dropdown links
	userDropdownItems.forEach((item) => {
		const href = item.getAttribute("href");
		if (href && currentPath.includes(href)) {
			// Matches current path
			navLinks.querySelector(".active")?.classList.remove("active");

			item.classList.add("active");
		}
	});
});
