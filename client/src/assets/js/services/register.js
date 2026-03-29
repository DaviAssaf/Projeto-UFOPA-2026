export function initRegister() {
	const form = document.getElementById("register-form");
	if (!form) return;

	if (form.dataset.initialized) return;
	form.dataset.initialized = "true";

	const loading = form.querySelector("#register-loading");
	const controls = form.querySelectorAll("input, button, textarea, select");

	const setLoading = (isLoading) => {
		if (loading) {
			loading.classList.toggle("hidden", !isLoading);
		}
		controls.forEach((control) => {
			control.disabled = isLoading;
		});
		form.setAttribute("aria-busy", isLoading ? "true" : "false");
	};

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const formData = new FormData(form);

		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const passwordConf = formData.get("password_conf");

		let errorMessage = form.querySelector("#error-message");

		if (!errorMessage) {
			errorMessage = document.createElement("p");
			errorMessage.id = "error-message";
			errorMessage.style.marginTop = "5px";
			errorMessage.style.textAlign = "center";
			form.insertBefore(errorMessage, form.querySelector("button[type='submit']"));
		}

		errorMessage.style.display = "none";
		errorMessage.textContent = "";

		if (data.password !== passwordConf) {
			errorMessage.textContent = "As senhas não coincidem!";
			errorMessage.style.color = "red";
			errorMessage.style.display = "block";
			return;
		}

		errorMessage.textContent = "As senhas coincidem!";
		errorMessage.style.color = "green";
		errorMessage.style.display = "block";

		try {
			setLoading(true);

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
		} finally {
			setLoading(false);
		}
	});
}
