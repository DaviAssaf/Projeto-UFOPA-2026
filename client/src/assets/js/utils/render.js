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
	await loadHTML("header", "../src/components/header.html");
	await loadHTML("footer", "../src/components/footer.html");

	console.log("✅ header carregado");

	document.dispatchEvent(new Event("headerLoaded"));
});
