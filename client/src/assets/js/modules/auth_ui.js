import { getCurrentUser, logout } from "../services/auth_service.js";

function init() {
	const container = document.getElementById("auth-area");

	if (!container) {
		return;
	}

	getCurrentUser().then((result) => {
		if (result.user) {
			container.innerHTML = `
				<span id ="span-msg">Olá, ${result.user.name}</span>
				<button id="logout-btn">Sair</button>
			`;

			document.getElementById("logout-btn")?.addEventListener("click", async () => {
				await logout();
				window.location.reload();
			});
		} else {
			container.innerHTML = `
				<button id="login-opener">
					<i class="fa fa-user"></i>
				</button>
			`;
		}
	});
}

document.addEventListener("headerLoaded", () => {
	init();
});
