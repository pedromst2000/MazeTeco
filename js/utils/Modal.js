export function Modal(userId) {
	return `
        <div id="deleteModal-${userId}" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>    
                <p>Tens a certeza que pretendes remover?</p>
                <div class="modal-buttons">
                    <button id="confirmDelete" class="modal-button">Sim</button>
                    <button id="cancelDelete" class="modal-button">Não</button>
                </div>
            </div>
        </div>
    `;
}

export function OpenModal(userId) {
	document.getElementById(`deleteModal-${userId}`).style.display = "block";
}

export function CloseModal() {
	const modals = document.querySelectorAll(".modal");
	modals.forEach((modal) => (modal.style.display = "none"));
}
