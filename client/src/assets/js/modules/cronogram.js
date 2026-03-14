const cronogram = {
	1: {
		title: "Dia 1 - 28 de Abril",
		activity: [
			{
				hour: "9:30-10:00",
				action: "Produção e Utilização de Selagens",
				speaker: "Amanda Queiroz",
				location: "Auditório do Campus Tapajós",
			},
			{
				hour: "10:40-11:10",
				action: "Bioprodutos da Amazônia de Interesse Agropecuário",
				speaker: "Humberto Minervino",
				location: "Auditório do Campus Tapajós",
			},
			{
				hour: "11:10-11:40",
				action: "Análise da Qualidade dos Ovos Comercializados em Santarém, Brasil",
				speaker: "Kely Cordovil",
				location: "Auditório do Campus Tapajós",
			},
			{
				hour: "14:00-14:45",
				action: "Exposição de Projetos de Extensão e Pesquisa da Zootecnia",
				speaker: "Humberto Minervino",
				location: "Restaurante Universitário",
			},
			{
				hour: "15:00-15:30",
				action: "Coprodutos na alimentação de pequenos ruminantes",
				speaker: "Henry Alba",
				location: "Auditório do Campus Tapajós",
			},
			{
				hour: "15:30-16:00",
				action: "Apresentando a ABZ aos estudantes de Zootecnia",
				speaker: "Vanessa Altino",
				location: "Auditório do Campus Tapajós",
			},
		],
	},
	2: {
		title: "Dia 2 - 29 de Abril",
		activity: [
			{
				hour: "07:00-12:00",
				action: "Visita à Fazenda Experimental da Ufopa",
				speaker: "Nenhum",
				location: "Fazenda Experimental da Ufopa",
			},
			{
				hour: "14:30-16:00",
				action: "Apresentação Oral",
				speaker: "Nenhum",
				location: "Auditório do Campus Tapajós",
			},
			{
				hour: "16:20-16-50",
				action: "Apresentação de Banner - Parte 1.",
				speaker: "Nenhum.",
				location: "Restaurante Universitário.",
			},
			{
				hour: "16:50-17:20",
				action: "Apresentação de Banner - Parte 2.",
				speaker: "Humberto Minervino.",
				location: "Restaurante Universitário.",
			},
			{
				hour: "18:00-18:30",
				action: "Desafio: Reels Acadêmico.",
				speaker: "Nenhum",
				location: "Nenhum.",
			},
		],
	},
	3: {
		title: "Dia 3 - 30 de Abril",
		activity: [
			{
				hour: "09:00-09:30",
				action: "Comportamento e manejo racional de bovinos de corte: a atuação do Zootecnista",
				speaker: "Daniela Cotrim",
				location: "Auditório do Campus Tapajós.",
			},
			{
				hour: "10:00-10:30",
				action: "Nutrição de animais selvagens em zoológicos modernos",
				speaker: "Gabriel Werneck",
				location: "Auditório do Campus Tapajós.",
			},
			{
				hour: "10:30-11:00",
				action: "Startup AmazonBiotec",
				speaker: "Andrya Leão",
				location: "Auditório do Campus Tapajós.",
			},
			{
				hour: "14:30-15:30",
				action: "Cerimônia de Premiação",
				speaker: "Nenhum",
				location: "Auditório do Campus Tapajós",
			},
			{
				hour: "17:00-21:00",
				action: "Bioprodutos da Amazônia de Interesse Agropecuário.",
				speaker: "Nenhum",
				location: "Madeirão",
			},
		],
	},
};

async function loadTable(selectedDay) {
	const container = document.getElementById("cronogram-day");

	try {
		const response = await fetch("../src/components/cronogram.html");

		if (!response.ok) {
			console.error("Não foi possível encontrar cronogram.html");
			return;
		}

		const html = await response.text();
		container.innerHTML = html;

		// Referências dentro do HTML recém-carregado
		const titleDay = document.getElementById("selected-day");
		const tableBody = document.getElementById("activity-body");
		const dataDay = cronogram[selectedDay];

		if (dataDay) {
			titleDay.innerText = dataDay.title;
			tableBody.innerHTML = dataDay.activity
				.map(
					(item) => `
					<tr>
						<td data-label="Horário">${item.hour}</td>
						<td data-label="Atividade">${item.action}</td>
						<td data-label="Palestrante">${item.speaker}</td>
						<td data-label="Local">${item.location}</td>
					</tr>
						`,
				)
				.join("");
		}
	} catch (error) {
		console.error("Erro ao carregar o componente do cronograma", error);
	}
}

document.querySelectorAll("#cronogram-buttons button").forEach((button) => {
	button.addEventListener("click", () => {
		const day = button.getAttribute("data-day");
		loadTable(day);
	});
});

loadTable(1);
