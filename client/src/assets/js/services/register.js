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

		try {
			const registerResponse = await fetch("/UFOPA2026/server/public/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const registerResult = await registerResponse.json();

			if (registerResult.error) {
				console.error(registerResult.error);
				return;
			}

			const loginResponse = await fetch("/UFOPA2026/server/public/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: data.email,
					password: data.password,
				}),
			});

			const loginResult = await loginResponse.json();

			if (loginResult.error) {
				console.error(loginResult.error);
				return;
			}

			window.location.reload();
		} catch (error) {
			console.error("Erro:", error);
		}
	});
}
