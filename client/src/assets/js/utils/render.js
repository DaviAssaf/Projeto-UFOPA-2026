export async function loadHTML(id, file) {
	const container = document.getElementById(id);
	if (!container) return;

	try {
		const response = await fetch(file);
		if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
		container.innerHTML = await response.text();
	} catch (error) {
		console.error(`Erro ao carregar "${file}":`, error);
	}
}

window.addEventListener("DOMContentLoaded", async () => {
	await loadHTML("header", "/client/src/components/header.html");
	await loadHTML("footer", "/client/src/components/footer.html");
});
