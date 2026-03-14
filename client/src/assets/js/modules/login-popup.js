async function openLogin() {
	const loginModal = document.getElementById("login-modal");
	if (!loginModal) return console.error("Modal 'login-modal' não encontrado no index.html");

	try {
		const response = await fetch("../src/components/login.html");
		if (!response.ok) throw new Error("Não foi possível carregar o formulário");

		const html = await response.text();
		const container = loginModal.querySelector("#modal-content") || loginModal;
		container.innerHTML = html;

		loginModal.showModal();

		document.getElementById("btn-close")?.addEventListener("click", () => loginModal.close());
		document.getElementById("login-form")?.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log("Login enviado!");
		});
	} catch (error) {
		console.error("Erro no fetch:", error);
	}
}

document.addEventListener("click", (event) => {
	if (event.target.id === "login-opener" || event.target.closest("#login-opener")) {
		openLogin();
	}
});
