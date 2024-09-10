/**
 * @function renderCatalog - Renders the catalog
 * @description This function renders the catalog
 * @param {Array} render - The array of items to render
 */

export function renderCatalog(render) {
	document.querySelector(".catalog-container").innerHTML = `
			${
				render.length === 0
					? `<div class="no-results">Sem resultados</div>`
					: render
							.map((catalog) => {
								return `<div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="card-image">
                    <img src="${catalog.photo}" alt="${catalog.title}" />
                </div>
                <div class="card-content">
                    <div class="first-row">
                        <div class="card-name">
                            ${catalog.occupation ? catalog.name : catalog.company}
                        </div>
                        <div class="card-year">
                            ${catalog.yearGrad ? catalog.yearGrad : catalog.year}
                        </div>
                    </div>
                    <div class="second-row">
                        <div class="card-title">
                            ${catalog.title ? catalog.title : catalog.theme ? catalog.theme : catalog.occupation}
                        </div>
                    </div>
                    <div class="third-row">
                        <div class="card-category">
                            <div class="category-icon">
                                <img src="../assets/svg/icons/${
																	catalog.category === "Poster"
																		? "PosterIcon.svg"
																		: catalog.category === "Testemunhos Alumni"
																			? "AlumniIcon.svg"
																			: "TeaserIcon.svg"
																}" alt="category-icon" />
                            </div>
                            <div class="category">
                                ${catalog.category == "Testemunhos Alumni" ? "Alumni" : catalog.category}
                            </div>
                        </div>
                        <div class="card-tag">
                            ${catalog.tag}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-card-back">
                <div class="flip-card-back-content">
                    <div class="back-name">
                        ${catalog.occupation ? catalog.name : catalog.company}
                    </div>
                    <div class="back-year">
                        ${catalog.yearGrad ? catalog.yearGrad : catalog.year}
                    </div>
                    <div class="back-title">
                        ${catalog.title ? catalog.title : catalog.theme ? catalog.theme : catalog.occupation}
                    </div>
                    <div class="button-container">
                        <a href="/html/Details/${
													catalog.category === "Poster"
														? "Poster"
														: catalog.category === "Testemunhos Alumni"
															? "Alumni"
															: "Teaser"
												}.html?id=${catalog.id}" class="button">
												<button id="sort-list" class="button-back">Ver mais</button>
												</a>
                    </div>
                </div>
            </div>      
        </div>
    </div>`;
							})
							.join("")
			}
		`;
}
