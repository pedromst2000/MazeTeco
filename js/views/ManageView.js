import * as User from "../models/UserModel.js";
import * as Alumni from "../models/AlumniModel.js";
import * as Poster from "../models/PosterModel.js";
import * as Teaser from "../models/TeaserModel.js";
import * as Event from "../models/EventsModel.js";
import { countMemberTime } from "../utils/countMemberDays.js";
import { Modal, OpenModal, CloseModal } from "../utils/Modal.js";

/**
 * @function manageView
 * @description This function renders the manage view.
 * @returns {void}
 */
function manageView() {
	User.init();
	Alumni.init();
	Poster.init();
	Teaser.init();
	Event.init();

	let users = User.getUsers();
	users = users.filter((user) => user.role !== "admin");

	const membersElement = document.getElementById("members");
	membersElement.innerHTML = `${users
		.map((user) => {
			return `
                <tr id="user-${user.id}">
                    <td>${user.username}</td>
                    <td>${countMemberTime(user.member_since)}</td>
                    <td>${user.role}</td>
                    <td>${user.isBlocked ? "Bloqueado" : "Normal"}</td>
                    <td>
                        <button id="block-button-${user.id}" class="block-button">
                            <img src="../../assets/svg/icons/BlockedIcon.svg" alt="block" />
                        </button>
                        <button id="delete-button-${user.id}" class="delete-button" data-user-id="${user.id}">
                            <img src="../../assets/svg/icons/DeleteIcon.svg" alt="delete" />
                        </button>
                    </td>
                </tr>
                `;
		})
		.join("")}
        ${users.map((user) => Modal(user.id)).join("")}
    `;

	// Track the ID of the user to be deleted
	let userIdToDelete = null;

	// Add event listeners for delete buttons using event delegation
	membersElement.addEventListener("click", (event) => {
		const button = event.target.closest(".delete-button");
		if (button) {
			userIdToDelete = button.dataset.userId;
			OpenModal(userIdToDelete);
		}
	});

	document.addEventListener("click", (event) => {
		if (event.target.matches(".close")) {
			CloseModal();
		} else if (event.target.matches("#cancelDelete")) {
			CloseModal();
		} else if (event.target.matches("#confirmDelete") && userIdToDelete) {
			User.deleteUser(userIdToDelete); // Implement this function in UserModel.js
			document.getElementById(`user-${userIdToDelete}`).remove();
			CloseModal();
			userIdToDelete = null; // Reset the ID after deletion
		} else if (event.target.matches("#deleteModal-" + userIdToDelete)) {
			CloseModal();
		}
	});
}

manageView();
