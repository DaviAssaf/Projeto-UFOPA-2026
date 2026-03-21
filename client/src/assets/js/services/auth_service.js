export async function getCurrentUser() {
	const response = await fetch("/UFOPA2026/server/public/api/me");
	return response.json();
}

export async function logout() {
	await fetch("/UFOPA2026/server/public/api/logout", {
		method: "POST",
	});
}
