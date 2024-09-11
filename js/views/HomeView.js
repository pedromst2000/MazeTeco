import * as User from "../models/UserModel.js";
import * as Alumni from "../models/AlumniModel.js";
import { hero } from "../data/Hero.js";
import { Faq } from "../data/Faq.js";

/**
 * @function homeView
 * @description This function renders the home view.
 *
 * @returns {void}
 */

function homeView() {
	User.init();
	Alumni.init();

	let currentSlide = 0;
	const alumnis = Alumni.getAlumnis();
	const isLogged = User.isLogged();

	const heroSection = document.querySelector(".hero");

	function renderSlides() {
		const slideData = hero
			.map((item, index) => {
				return `
				<div class="slide" style="background-image: url('${item.backgroundImage}');">
					<div class="content">
					<div class="text-hero">
						<div class="heading-hero">
							<h1>${item.heading}</h1>
						</div>
						<div class="sub-heading-hero">
							<p>${item.subHeading}</p>
						</div>
					</div>
						
						<div class="cta-button-hero">
							<a href="${item.link}" target="_blank" class="cta-button">Sabe Mais</a>
						</div>
					</div>
				</div>
			`;
			})
			.join("");

		const indicators = hero
			.map((_, index) => `<div class="indicator-item" data-slide="${index}"></div>`)
			.join("");

		heroSection.innerHTML = `
			<div class="slides-container">
				${slideData}
			</div>
			<div class="hero-indicator">
				${indicators}
			</div>
			<button class="prev-slide">
				<img src="../assets/svg/icons/ArrowHeroIcon.svg" alt="Previous slide">
			</button>
			<button class="next-slide">
				<img src="../assets/svg/icons/ArrowHeroIcon.svg" alt="Previous slide">
			</button>
		`;

		// Show the first slide and set the first bullet as active
		document.querySelectorAll(".slide")[currentSlide].classList.add("active");
		updateIndicators();

		// Add event listeners to buttons and indicators
		document.querySelector(".next-slide").addEventListener("click", nextSlide);
		document.querySelector(".prev-slide").addEventListener("click", prevSlide);
		document.querySelectorAll(".indicator-item").forEach((bullet) => {
			bullet.addEventListener("click", () => {
				const slideIndex = bullet.getAttribute("data-slide");
				goToSlide(slideIndex);
			});
		});
	}

	function nextSlide() {
		const slides = document.querySelectorAll(".slide");
		slides[currentSlide].classList.remove("active");
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].classList.add("active");

		// slide in animation
		slides[currentSlide].classList.add("slide-in");

		updateIndicators();
	}

	function prevSlide() {
		const slides = document.querySelectorAll(".slide");
		slides[currentSlide].classList.remove("active");
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		slides[currentSlide].classList.add("active");
		updateIndicators();
	}

	function goToSlide(index) {
		const slides = document.querySelectorAll(".slide");
		slides[currentSlide].classList.remove("active");
		currentSlide = parseInt(index);
		slides[currentSlide].classList.add("active");
		updateIndicators();
	}

	function updateIndicators() {
		const bullets = document.querySelectorAll(".indicator-item");
		bullets.forEach((bullet, index) => {
			bullet.style.backgroundColor =
				index === currentSlide ? "var(--accent-color)" : "rgba(191, 220, 100, 0.5)";
		});
	}

	// Rendering the next slide every 5 seconds
	setInterval(() => {
		nextSlide();
	}, 5000);

	renderSlides();

	const testimonalSection = document.querySelector(".testimonials-container");
	const displayTip = document.getElementById("tip-testimonial");

	displayTip.innerHTML = `
		${!isLogged ? "Inicia sessão para visualização completa dos testemunhos" : ""}
	`;

	testimonalSection.innerHTML = `
		${alumnis
			.map((alumni) => {
				return `
					<div class="testimonial">
						<div class="first-section">
							<div class="left-side">
								<div class="image-container">
								<img src="${alumni.photo}" alt="${alumni.name}">
								</div>
								<div class="name-occupation">
									<div class="name">${alumni.name}</div>
									<div class="occupation">${alumni.occupation}</div>
								</div>
							</div>
							<div class="right-side">
								<div class="year-grad">
									<span class="grad-year">${alumni.yearGrad}</span>
								</div>
							</div>
							</div>
							<div class="text-section">

								<q class="quote">
								<span class="first-letter">${alumni.testimony.charAt(0).toUpperCase()}</span>
									<span class="rest-of-text">${
										// Limiting the text to 70 characters
										alumni.testimony.length > 70
											? alumni.testimony.substring(0, 70) + "..."
											: alumni.testimony
									}</span>

									</q>
							</div>
										${
											isLogged
												? `<div class="see-more">
										<a href="/html/Details/Alumni.html?id=${alumni.id}">
											<button id="alumni-detail" class="cta-button-alumni">Ver Mais</button>
										</a>
									</div>`
												: ""
										}
								</div>
				`;
			})
			.join("")}
	`;

	const faqSection = document.querySelector(".accordions-container");

	faqSection.innerHTML = `
    ${Faq.map((item, index) => {
			return `
      <div class="accordion-item">
        <div class="accordion-header" data-index="${index}">
          <h3>${item.question}</h3>
          <button class="accordion-button" aria-expanded="false">
            <img src="../assets/svg/icons/arrowFaqIcon.svg" alt="Open accordion">
          </button>
        </div>
        <div class="accordion-content" style="max-height: 0;">
          <p>${item.answer}</p>
        </div>
      </div>
      `;
		}).join("")}
  `;

	const accordionHeaders = document.querySelectorAll(".accordion-header");
	accordionHeaders.forEach((header) => {
		header.addEventListener("click", () => {
			const content = header.nextElementSibling;
			const isOpen =
				header.querySelector(".accordion-button").getAttribute("aria-expanded") ===
				"true";

			// Close all other accordions
			document.querySelectorAll(".accordion-content").forEach((otherContent) => {
				if (otherContent !== content) {
					otherContent.style.maxHeight = "0";
					otherContent.previousElementSibling
						.querySelector(".accordion-button")
						.setAttribute("aria-expanded", "false");
				}
			});

			// Toggle the accordion
			if (isOpen) {
				content.style.maxHeight = "0";
			} else {
				content.style.maxHeight = content.scrollHeight + "px"; // Expande com a altura do conteúdo
			}
			header.querySelector(".accordion-button").setAttribute("aria-expanded", !isOpen);
		});
	});
}

homeView();
