export function Modal() {
	return `
         <div id="deleteModal" class="modal">
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

export function OpenModal() {
	document.getElementById("deleteModal").style.display = "block";
}

export function CloseModal() {
	document.getElementById("deleteModal").style.display = "none";
}
