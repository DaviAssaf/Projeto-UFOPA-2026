const modal = document.getElementById("viewer-modal");
const container = document.getElementById("viewer-content");
const closeButton = document.getElementById("close-viewer");

const annalList = document.getElementById("annal-list");

annalList.addEventListener("click", (e) => {
	const opener = e.target.closest(".annal-opener");
	if (!opener) return;

	const id = opener.getAttribute("data-id");

	const filePath = opener.getAttribute("data-path");

	if (filePath) {
		const fullPath = `/UFOPA2026/server/public/${filePath}`;

		container.innerHTML = `
			<embed src="${fullPath}" type="application/pdf" width="100%" height="100%">
		`;

		modal.showModal();
	} else {
		console.error("Arquivo não encontrado para o ID:", id);
	}
});

closeButton.addEventListener("click", () => {
	modal.close();
});
