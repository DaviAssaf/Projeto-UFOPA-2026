export function initUpload() {
	const form = document.getElementById("upload-form");
	const dropArea = document.getElementById("drop-area");
	const fileInput = document.getElementById("file-input");

	if (!form) return;

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

		const formData = new FormData(form);

		const response = await fetch("/UFOPA2026/server/public/api/upload-annal", {
			method: "POST",
			body: formData,
		});

		const result = await response.json();

		console.log(result);

		if (result.success) {
			window.location.reload();
		} else {
			alert(result.error || "Erro no upload");
		}
	});
}
