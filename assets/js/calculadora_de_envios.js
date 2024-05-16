let countries = {
	"AL": "Albania",
	"AD": "Andorra",
	"AI": "Anguilla",
	"AG": "Antigua and Barbuda",
	"AM": "Armenia",
	"AW": "Aruba",
	"AU": "Australia",
	"AT": "Austria",
	"AZ": "Azerbaijan",
	"BS": "Bahamas",
	"BB": "Barbados",
	"BE": "Belgium",
	"BZ": "Belize",
	"BM": "Bermuda",
	"BY": "Belarus",
	"BO": "Bolivia",
	"BQ": "Bonaire, Sint Eustatius and Saba",
	"BA": "Bosnia and Herzegovina",
	"BR": "Brazil",
	"BN": "Brunei",
	"BG": "Bulgaria",
	"KH": "Cambodia",
	"CA": "Canada",
	"CL": "Chile",
	"CN": "China",
	"DE": "Germany",
	"VA": "Vatican City",
	"CO": "Colombia",
	"KR": "South Korea",
	"CR": "Costa Rica",
	"HR": "Croatia",
	"CW": "Curaçao",
	"DK": "Denmark",
	"DM": "Dominica",
	"EC": "Ecuador",
	"SV": "El Salvador",
	"SI": "Slovenia",
	"ES": "Spain",
	"US": "United States",
	"EE": "Estonia",
	"PH": "Philippines",
	"FI": "Finland",
	"FR": "France",
	"GE": "Georgia",
	"GD": "Grenada",
	"GR": "Greece",
	"GP": "Guadeloupe",
	"GT": "Guatemala",
	"GY": "Guyana",
	"GF": "French Guiana",
	"HT": "Haiti",
	"NL": "Netherlands",
	"HN": "Honduras",
	"HK": "Hong Kong",
	"HU": "Hungary",
	"ID": "Indonesia",
	"IE": "Ireland",
	"KY": "Cayman Islands",
	"TC": "Turks and Caicos Islands",
	"VG": "British Virgin Islands",
	"VI": "U.S. Virgin Islands",
	"IT": "Italy",
	"JM": "Jamaica",
	"JP": "Japan",
	"KZ": "Kazakhstan",
	"KG": "Kyrgyzstan",
	"LA": "Laos",
	"LV": "Latvia",
	"LI": "Liechtenstein",
	"LT": "Lithuania",
	"LU": "Luxembourg",
	"MO": "Macao",
	"MK": "North Macedonia",
	"MY": "Malaysia",
	"MT": "Malta",
	"MQ": "Martinique",
	"MX": "Mexico",
	"MD": "Moldova",
	"MC": "Monaco",
	"ME": "Montenegro",
	"MS": "Montserrat",
	"MM": "Myanmar",
	"NI": "Nicaragua",
	"NO": "Norway",
	"NZ": "New Zealand",
	"PA": "Panama",
	"PY": "Paraguay",
	"PE": "Peru",
	"PL": "Poland",
	"PT": "Portugal",
	"PR": "Puerto Rico",
	"GB": "United Kingdom",
	"CZ": "Czech Republic",
	"DO": "Dominican Republic",
	"SK": "Slovakia",
	"RO": "Romania",
	"RU": "Russia",
	"KN": "Saint Kitts and Nevis",
	"BQ": "Bonaire, Sint Eustatius and Saba",
	"MF": "Saint Martin",
	"VC": "Saint Vincent and the Grenadines",
	"LC": "Saint Lucia",
	"RS": "Serbia",
	"SG": "Singapore",
	"SX": "Sint Maarten",
	"SE": "Sweden",
	"CH": "Switzerland",
	"SR": "Suriname",
	"TH": "Thailand",
	"TW": "Taiwan",
	"TT": "Trinidad and Tobago",
	"TM": "Turkmenistan",
	"UA": "Ukraine",
	"UY": "Uruguay",
	"UZ": "Uzbekistan",
	"VE": "Venezuela",
	"VN": "Vietnam",
	"YU": "Yugoslavia",
}

// Get the select element
const selectElement = document.getElementById("pais");

// Loop through the countries object and add options
for (const code in countries) {
	const countryName = countries[code];
	const optionElement = document.createElement("option");
	optionElement.value = code;
	optionElement.textContent = countryName;
	selectElement.appendChild(optionElement);
}

// Function to find the index of a country code in the countries object
function getCountryIndex(countryCode) {
	let index = -1;
	for (const code in countries) {
		if (code === countryCode) {
			index = Object.keys(countries).indexOf(code);
			break;
		}
	}
	return index;
}

const canadaIndex = getCountryIndex("US");
console.log(canadaIndex);
if (canadaIndex !== -1) {
	selectElement.selectedIndex = canadaIndex;
}

let tipos = {
	"1.3C": "Explosivos 1.3C",
	"1.3G": "Explosivos 1.3G",
	"1.4B": "Explosivos 1.4B",
	"1.4C": "Explosivos 1.4C",
	"1.4D": "Explosivos 1.4D",
	"1.4E": "Explosivos 1.4E",
	"1.4G": "Explosivos 1.4G",
	"1.4S": "Explosivos 1.4S",
	"2.2": "Gases no inflamables con etiqueta, solo avion de carga",
	"3": "Liquidos Inflamables",
	"4.1": "Solidos Inflamables",
	"4.2": "Combustible Espomntaneo",
	"4.3": "Peligrosos Cuando Estan Mojados",
	"5.1": "Sustancias Oxidantes",
	"5.2": "Peróxidos Orgánicos",
	"6": "Corrosivos",
	"2.2b": "Gases no inflamables sin etiqueta, solo avion de carga",

}

// const tipo = document.getElementById("clase");

// // Loop and add options with class "class1"
// for (let i = 1; i <= 9; i++) {
// 	const optionElement = document.createElement("option");
// 	optionElement.value = `Clase ${i}`; // Set value as "class1", "class2", etc.
// 	optionElement.textContent = `Clase ${i}`; // Set text content as "class1", "class2", etc.
// 	// optionElement.classList.add("class1"); // Add class "class1" to all options
// 	tipo.appendChild(optionElement);
// }

const addButton = document.getElementById("agregar-tabla");
const tableBody = document.querySelector(".table-wrapper tbody");


addButton.addEventListener("click", function () {
	const alto = parseFloat(document.getElementById("alto").value);
	const largo = parseFloat(document.getElementById("largo").value);
	const ancho = parseFloat(document.getElementById("ancho").value);
	const pesoBruto = parseFloat(document.getElementById("pesobruto").value);

	// Exit the function if any input is empty or NaN
	if (isNaN(alto) || isNaN(largo) || isNaN(ancho) || isNaN(pesoBruto)) {
		return;
	}

	// Calculate volumetric weight (optional, adjust formula if needed)
	const volumetricWeight = (largo * ancho * alto) / 5000;

	const chargeableWeight = volumetricWeight > pesoBruto ? volumetricWeight : pesoBruto;

	// Create a new table row element
	const newRow = document.createElement("tr");

	const largoCell = document.createElement("td");
	largoCell.textContent = largo;
	newRow.appendChild(largoCell);

	const anchoCell = document.createElement("td");
	anchoCell.textContent = ancho;
	newRow.appendChild(anchoCell);

	const altoCell = document.createElement("td");
	altoCell.textContent = alto;
	newRow.appendChild(altoCell);

	const pesoBrutoCell = document.createElement("td");
	pesoBrutoCell.textContent = pesoBruto.toFixed(2);
	newRow.appendChild(pesoBrutoCell);

	const pesoVolumetricoCell = document.createElement("td");
	pesoVolumetricoCell.textContent = volumetricWeight.toFixed(2); // Format to 2 decimal places
	newRow.appendChild(pesoVolumetricoCell);

	const pesoFacturableCell = document.createElement("td");
	pesoFacturableCell.textContent = chargeableWeight.toFixed(2);
	newRow.appendChild(pesoFacturableCell);

	// Before appending, check if any existing row is empty
	const existingRows = tableBody.querySelectorAll("tr");
	let hasEmptyRow = false;
	for (const row of existingRows) {
		if (row.textContent.trim() === "") {
			hasEmptyRow = true;
			row.remove(); // Remove existing empty row
			break; // Exit the loop after finding one empty row
		}
	}

	// Only append the new row if there are no empty rows or the new row is not empty
	if (!hasEmptyRow || newRow.textContent.trim() !== "") {
		tableBody.appendChild(newRow);
	}

	// Clear input fields (optional)
	//   document.getElementById("pais").value = "";
	// document.getElementById("clase").value = "";
	document.getElementById("largo").value = "";
	document.getElementById("ancho").value = "";
	document.getElementById("alto").value = "";
	document.getElementById("pesobruto").value = "";
});
