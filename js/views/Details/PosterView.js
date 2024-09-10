import * as Poster from "../../models/PosterModel.js";
import * as User from "../../models/UserModel.js";
import * as Tag from "../../models/TagModel.js";
import { downloadImage } from "../../utils/downloadImage.js";
import { Modal, OpenModal, CloseModal } from "../../utils/Modal.js";

/**
 * @function PosterView
 * @description This function renders the poster details view.
 */
function PosterView() {
	Poster.init();
	Tag.init();

	const params = new URLSearchParams(window.location.search); // To Search the query string in the URL
	const posterId = params.get("id"); // To get the query string value from the URL
	let poster = Poster.gePosterById(parseInt(posterId));
	const isAdmin = User.getLoggedUser()?.role === "admin";

	poster = {
		...poster,
		tag: Tag.getTagName(poster.tag_id),
	};

	document.querySelector(".poster-details").innerHTML = `
      <div class="button-go-back">
        <img id="goBack" src="../../assets/svg/icons/ArrowHeroIcon.svg" alt="arrow" />
      </div>

      <div class="poster-details-container">
        <div class="poster-details-image">
          <div class="poster-image">
            <img src="${poster.photo}" 
                 id="image-to-download"
                 alt="poster" />
          </div>
          <div class="poster-options">
            <button id="download-button">
              <div class="download-icon">
                <img src="../../assets/svg/icons/DownloadIcon.svg" alt="download" />
              </div>
              <div class="download-text"><span>Download</span></div>
            </button>
            ${
							isAdmin
								? `<button id="delete-button">
                        <div class="delete-icon">
                          <img src="../../assets/svg/icons/DeleteIcon.svg" alt="delete" />
                        </div>
                      </button>`
								: ""
						}
          </div>
        </div>

        <div class="poster-details-info">
          <div class="first-row">
            <div class="poster-company">
              <span>${poster.company}</span>
            </div>
            <div class="poster-year">
              <span>${poster.year}</span>
            </div>
          </div>

          <div class="second-row">
            <div class="poster-theme">
              <span>${poster.theme}</span>
            </div>
            <div class="poster-tag">
              <span>${poster.tag}</span>
            </div>
          </div>

          <div class="third-row">
            <span class="download-info">
              Poderás descarregar o Poster para visualizar em detalhe.
            </span>
          </div>

          <div class="text-container">
            <p>${poster.description}</p>
          </div>
        </div>
      </div>

                        ${Modal()}
    `;

	downloadImage(poster.photo, poster.download_name);

	document.getElementById("goBack").addEventListener("click", () => {
		window.history.back();
	});

	document.getElementById("delete-button").addEventListener("click", () => {
		OpenModal();
	});

	document.querySelector(".close").addEventListener("click", () => {
		CloseModal();
	});

	document.getElementById("cancelDelete").addEventListener("click", () => {
		CloseModal();
	});

	document.getElementById("confirmDelete").addEventListener("click", () => {
		Poster.deletePoster(poster.id);
		window.history.back(); // redirect to the gallery
	});

	window.addEventListener("click", (event) => {
		if (event.target === document.getElementById("deleteModal")) {
			CloseModal();
		}
	});
}

PosterView();
