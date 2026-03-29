document.addEventListener("click", (e) => {
	const btn = e.target.closest(".toggle-password");
	if (!btn) return;

	const wrapper = btn.closest(".password-wrapper");
	const input = wrapper.querySelector("input");
	const icon = btn.querySelector("i");

	if (!input) return;

	if (input.type === "password") {
		input.type = "text";
		icon?.classList.replace("fa-eye", "fa-eye-slash");
	} else {
		input.type = "password";
		icon?.classList.replace("fa-eye-slash", "fa-eye");
	}
});
