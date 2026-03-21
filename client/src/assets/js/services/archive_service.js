export async function getArchives() {
	const response = await fetch("/UFOPA2026/server/public/api/archives");
	return response.json();
}
