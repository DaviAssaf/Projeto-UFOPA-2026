import { initUpload } from "../services/upload.js";

async function openUpload() {
	const uploadModal = document.getElementById("upload-modal");
	if (!uploadModal) return console.error("Modal 'upload-modal' não encontrado");

	try {
		const response = await fetch("../src/components/upload.html");
		if (!response.ok) throw new Error("Não foi possível carregar o formulário");

		const html = await response.text();

		const container = uploadModal.querySelector("#upload-content") || uploadModal;
		container.innerHTML = html;

		uploadModal.showModal();

		document.getElementById("btn-close")?.addEventListener("click", () => uploadModal.close());

		initUpload();
	} catch (error) {
		console.error("Erro no fetch:", error);
	}
}

document.addEventListener("click", (event) => {
	if (event.target.id === "upload-opener" || event.target.closest("#upload-opener")) {
		openUpload();
	}
});
