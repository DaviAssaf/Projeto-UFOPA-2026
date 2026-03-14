const archives = {
	1: "../../server/public/uploads/Aether - Sistema de Poder.pdf",
};

const modal = document.getElementById("viewer-modal");
const container = document.getElementById("viewer-content");
const closeButton = document.getElementById("close-viewer");

document.querySelectorAll(".annal-opener").forEach((opener) => {
	opener.addEventListener("click", () => {
		const id = opener.getAttribute("data-id");
		const filePath = archives[id];

		if (filePath) {
			container.innerHTML = `
                <embed src="${filePath}" type="application/pdf" width="100%" height="100%">
            `;
			modal.showModal();
		} else {
			console.error("Arquivo não encontrado para o ID:", id);
		}
	});
});

closeButton.addEventListener("click", () => {
	modal.close();
});
