export function initLogin() {
	const form = document.getElementById("login-form");
	if (!form) return;

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const formData = new FormData(form);

		const data = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		try {
			const response = await fetch("/UFOPA2026/server/public/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			console.log(result);

			if (result.success) {
				window.location.reload();
			} else {
				alert(result.error || "Erro no login");
			}
		} catch (error) {
			console.error("Erro:", error);
		}
	});
}
