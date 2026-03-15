import { initRegister } from "../services/register.js";

const loginModal = document.getElementById("login-modal");

async function openRegister() {
	loginModal.close();

	const registerModal = document.getElementById("register-modal");
	if (!registerModal) {
		return console.error("Modal 'register-modal' não encontrado no index.html");
	}

	try {
		const response = await fetch("../src/components/register.html");
		if (!response.ok) throw new Error("Não foi possível carregar o formulário");

		const html = await response.text();

		const container = registerModal.querySelector("#register-content") || registerModal;
		container.innerHTML = html;

		initRegister();

		registerModal.showModal();

		container.querySelector("#btn-close")?.addEventListener("click", () => {
			registerModal.close();
		});
	} catch (error) {
		console.error("Erro no fetch:", error);
	}
}

document.addEventListener("click", (event) => {
	if (event.target.id === "register-opener" || event.target.closest("#register-opener")) {
		openRegister();
	}
});
