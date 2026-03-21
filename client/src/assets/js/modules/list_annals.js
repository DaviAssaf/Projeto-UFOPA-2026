import { getArchives } from "../services/archive_service.js";

function createCard(annal) {
	return `
		<div class="annal-card">
			<div class="annal-content">
				<h4 
					class="annal-opener" 
					data-id="${annal.id}"
					data-path="${annal.archive_path}"
				>
					<strong>${annal.title}</strong>
				</h4>

				<p class="annal-description">
					${annal.description ?? ""}
				</p>
			</div>

			<button 
				class="download-button"
				data-path="${annal.archive_path}"
				data-name="${annal.archive_name}"
			>
				<i class="fa fa-download"></i>
			</button>
		</div>
	`;
}

async function init() {
	const container = document.getElementById("annal-list");
	if (!container) {
		console.warn("❌ #annal-list não encontrado");
		return;
	}

	try {
		const result = await getArchives();

		if (!result.archives || result.archives.length === 0) {
			container.innerHTML = "<p>Nenhum anexo encontrado</p>";
			return;
		}

		container.innerHTML = result.archives.map(createCard).join("");

		console.log("✅ anais renderizados");
	} catch (err) {
		console.error("💥 erro ao carregar anais:", err);
	}
}

if (document.readyState !== "loading") {
	init();
} else {
	document.addEventListener("DOMContentLoaded", init);
}
