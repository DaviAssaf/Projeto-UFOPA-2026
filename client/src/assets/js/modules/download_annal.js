const archives = {
	1: "../../server/public/uploads/Aether - Sistema de Poder.pdf",
};
const initDownload = () => {
	const downloadButtons = document.querySelectorAll(".download-button");

	downloadButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const id = button.getAttribute("data-id");
			const filePath = archives[id];

			if (filePath) {
				const link = document.createElement("a");
				link.href = filePath;

				const fileName = filePath.split("/").pop();
				link.download = fileName;

				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			} else {
				console.error("Arquivo para download não encontrado para o ID:", id);
			}
		});
	});
};

document.addEventListener("DOMContentLoaded", initDownload);
