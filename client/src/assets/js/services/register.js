export function initRegister() {
	const form = document.getElementById("register-form");
	if (!form) return;

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const formData = new FormData(form);

		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const response = await fetch("/UFOPA2026/server/public/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const result = await response.json();

		console.log(result);
	});
}
