import * as Teaser from "../../models/TeaserModel.js";
import * as User from "../../models/UserModel.js";
import * as Tag from "../../models/TagModel.js";
import { Modal, OpenModal, CloseModal } from "../../utils/Modal.js";

/**
 * @function TeaserView
 * @description This function renders the teaser details view.
 */
function TeaserView() {
	Teaser.init();
	Tag.init();

	const params = new URLSearchParams(window.location.search); // To Search the query string in the URL
	const teaserId = params.get("id"); // To get the query string value from the URL
	let teaser = Teaser.getTeaserById(parseInt(teaserId));
	const isAdmin = User.getLoggedUser()?.role === "admin";

	teaser = {
		...teaser,
		tag: Tag.getTagName(teaser.tag_id),
	};

	document.querySelector(".teaser-details").innerHTML = `
    	<div class="teaser-details">	
			<div class="teaser-details-container">
				<div class="teaser-details-video">
				
						<div class="video-player">
							<video
								id="video" 
								controls
                                autoplay
								src="${teaser.videosrc}"
							></video>
						</div>
				</div>

				<div class="teaser-details-info">
					<div class="first-row">
						<div class="teaser-company">
							<span>${teaser.company}</span>
						</div>
						<div class="teaser-year">
							<span>${teaser.year}</span>
						</div>
					</div>

					<div class="second-row">
						<div class="teaser-title">
							<span>${teaser.title}</span>
						</div>
						<div class="teaser-tag">
							<span>${teaser.tag}</span>
						</div>
					</div>

					<div class="text-container">
						<p>
                ${teaser.description}
						</p>
					</div>

                  ${
										isAdmin
											? `
                            <div class="button-container ">
						<button id="delete-button">
							<div class="delete-icon">
								<img src="../../assets/svg/icons/DeleteIcon.svg" alt="delete" />
							</div>
						</button>
					</div>
                        `
											: ""
									}
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
		Teaser.deleteTeaser(teaser.id);
		window.history.back(); // redirect to the gallery
	});

	window.addEventListener("click", (event) => {
		if (event.target === document.getElementById("deleteModal")) {
			CloseModal();
		}
	});
}

TeaserView();
