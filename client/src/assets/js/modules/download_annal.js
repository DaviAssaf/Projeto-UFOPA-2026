const annalList = document.getElementById("annal-list");

annalList.addEventListener("click", (e) => {
	const button = e.target.closest(".download-button");
	if (!button) return;

	const filePath = button.getAttribute("data-path");
	const fileName = button.getAttribute("data-name");

	if (!filePath) {
		console.error("Arquivo não encontrado");
		return;
	}

	const fullPath = `/UFOPA2026/server/public/${filePath}`;

	const link = document.createElement("a");
	link.href = fullPath;

	link.download = fileName || "arquivo.pdf";

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});
