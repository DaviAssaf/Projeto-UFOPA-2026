export function initUpload() {
	const container = document.getElementById("upload-content");
	if (!container) return;

	const form = container.querySelector("#upload-form");
	const loading = container.querySelector("#upload-loading");
	const button = container.querySelector("#btn-send");
	const dropArea = container.querySelector("#drop-area");
	const fileInput = container.querySelector("#file-input");

	if (!form || !loading || !button) {
		console.error("Elementos do upload não encontrados");
		return;
	}

	dropArea.addEventListener("click", (e) => {
		if (e.target.tagName !== "INPUT") {
			fileInput.click();
		}
	});

	dropArea.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropArea.classList.add("active");
	});

	dropArea.addEventListener("dragleave", () => {
		dropArea.classList.remove("active");
	});

	dropArea.addEventListener("drop", (e) => {
		e.preventDefault();
		fileInput.files = e.dataTransfer.files;
		dropArea.classList.remove("active");
	});

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		loading.classList.remove("hidden");
		button.disabled = true;
		button.innerText = "Enviando...";

		try {
			const formData = new FormData(form);

			const response = await fetch("/UFOPA2026/server/public/api/upload-annal", {
				method: "POST",
				body: formData,
			});

			const result = await response.json();

			if (result.success) {
				document.dispatchEvent(new Event("annal-updated"));

				const modal = document.getElementById("upload-modal");
				modal.close();
			} else {
				alert(result.error || "Erro no upload");
			}
		} catch (err) {
			console.error(err);
			alert("Erro no upload");
		} finally {
			loading.classList.add("hidden");
			button.disabled = false;
			button.innerText = "Enviar";
		}
	});
}
