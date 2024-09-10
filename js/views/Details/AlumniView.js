import * as Alumni from "../../models/AlumniModel.js";
import * as User from "../../models/UserModel.js";
import * as Tag from "../../models/TagModel.js";
import { Modal, OpenModal, CloseModal } from "../../utils/Modal.js";

/**
 * @function AlumniView
 * @description This function renders the alumni details view.
 */
function AlumniView() {
	Alumni.init();
	Tag.init();

	const params = new URLSearchParams(window.location.search); // To Search the query string in the URL
	const alumniId = params.get("id"); // To get the query string value from the URL
	let alumni = Alumni.getAlumniById(parseInt(alumniId));
	const isAdmin = User.getLoggedUser()?.role === "admin";

	alumni = {
		...alumni,
		tag: Tag.getTagName(alumni.tag_id),
	};

	document.querySelector(".alumni-details").innerHTML = `
      <div class="button-go-back">
		<div class="btn">
		  <img id="goBack" src="../../assets/svg/icons/ArrowHeroIcon.svg" alt="arrow" />
		</div>
		<div class="citation">
			<q>
			<span class="citation-text">
								${
									alumni.testimony.length > 100
										? alumni.testimony.substring(0, 100) + "..."
										: alumni.testimony
								}

			</span>
			</q>
		</div>
      </div>

      <div class="alumni-details-container">
        <div class="alumni-details-image">
          <div class="alumni-image">
            <img src="${alumni.photo}" 
                 alt="alumni" />
          </div>
          <div class="alumni-options">
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

        <div class="alumni-details-info">
          <div class="first-row">
            <div class="alumni-name">
              <span>${alumni.name}</span>
            </div>
            <div class="alumni-year">
              <span>${alumni.yearGrad}</span>
            </div>
          </div>

          <div class="second-row">
            <div class="alumni-occupation">
              <span>${alumni.occupation}</span>
            </div>
            <div class="alumni-tag">
              <span>${alumni.tag}</span>
            </div>
          </div>


          <div class="text-container">
            <p>${alumni.description}</p>
          </div>
        </div>
      </div>

                        ${Modal()}
    `;

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
		Alumni.deleteAlumni(alumni.id);
		window.history.back(); // redirect to the gallery
	});

	window.addEventListener("click", (event) => {
		if (event.target === document.getElementById("deleteModal")) {
			CloseModal();
		}
	});
}

AlumniView();
