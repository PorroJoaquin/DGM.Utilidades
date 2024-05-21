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
const zone_1_dhl = {
	0.5: 148.05,
	1.0: 164.00,
	1.5: 180.15,
	2.0: 196.30,
	2.5: 212.45,
	3.0: 228.40,
	3.5: 244.35,
	4.0: 260.30,
	4.5: 276.25,
	5.0: 292.20,
	5.5: 304.85,
	6.0: 317.50,
	6.5: 330.15,
	7.0: 342.80,
	7.5: 355.45,
	8.0: 368.10,
	8.5: 380.75,
	9.0: 393.40,
	9.5: 406.05,
	10.0: 418.70,
	11.0: 439.20,
	12.0: 459.70,
	13.0: 480.20,
	14.0: 500.70,
	15.0: 521.20,
	16.0: 541.70,
	17.0: 562.20,
	18.0: 582.70,
	19.0: 603.20,
	20.0: 623.70,
	21.0: 644.40,
	22.0: 665.10,
	23.0: 685.80,
	24.0: 706.50,
	25.0: 727.20,
	26.0: 747.90,
	27.0: 768.60,
	28.0: 789.30,
	29.0: 810.00,
	30.0: 830.70,
	40.0: 1048.70,
	50.0: 1266.70,
	60.0: 1484.70,
	70.0: 1702.70
}

const zona_2_dhl = {
	0.5: 151.50,
	1.0: 171.95,
	1.5: 193.25,
	2.0: 214.55,
	2.5: 235.85,
	3.0: 254.55,
	3.5: 273.25,
	4.0: 291.95,
	4.5: 310.65,
	5.0: 329.35,
	5.5: 343.55,
	6.0: 357.75,
	6.5: 371.95,
	7.0: 386.15,
	7.5: 400.35,
	8.0: 414.55,
	8.5: 428.75,
	9.0: 442.95,
	9.5: 457.15,
	10.0: 471.35,
	11.0: 491.95,
	12.0: 512.55,
	13.0: 533.15,
	14.0: 553.75,
	15.0: 574.35,
	16.0: 594.95,
	17.0: 615.55,
	18.0: 636.15,
	19.0: 656.75,
	20.0: 677.35,
	21.0: 702.85,
	22.0: 728.35,
	23.0: 753.85,
	24.0: 779.35,
	25.0: 804.85,
	26.0: 830.35,
	27.0: 855.85,
	28.0: 881.35,
	29.0: 906.85,
	30.0: 932.35,
	40.0: 1206.85,
	50.0: 1481.35,
	60.0: 1755.85,
	70.0: 2030.35
}

const zona_3_dhl = {
	0.5: 161.95,
	1.0: 183.35,
	1.5: 205.45,
	2.0: 227.55,
	2.5: 249.65,
	3.0: 269.05,
	3.5: 288.45,
	4.0: 307.85,
	4.5: 327.25,
	5.0: 346.65,
	5.5: 361.70,
	6.0: 376.75,
	6.5: 391.80,
	7.0: 406.85,
	7.5: 421.90,
	8.0: 436.95,
	8.5: 452.00,
	9.0: 467.05,
	9.5: 482.10,
	10.0: 497.15,
	11.0: 520.25,
	12.0: 543.35,
	13.0: 566.45,
	14.0: 589.55,
	15.0: 612.65,
	16.0: 635.75,
	17.0: 658.85,
	18.0: 681.95,
	19.0: 705.05,
	20.0: 728.15,
	21.0: 755.35,
	22.0: 782.55,
	23.0: 809.75,
	24.0: 836.95,
	25.0: 864.15,
	26.0: 891.35,
	27.0: 918.55,
	28.0: 945.75,
	29.0: 972.95,
	30.0: 1000.15,
	40.0: 1291.65,
	50.0: 1583.15,
	60.0: 1874.65,
	70.0: 2166.15
}

const zona_4_dhl = {
	0.5: 234.15,
	1.0: 264.40,
	1.5: 294.65,
	2.0: 324.90,
	2.5: 355.15,
	3.0: 383.95,
	3.5: 412.75,
	4.0: 441.55,
	4.5: 470.35,
	5.0: 499.15,
	5.5: 523.75,
	6.0: 548.35,
	6.5: 572.95,
	7.0: 597.55,
	7.5: 622.15,
	8.0: 646.75,
	8.5: 671.35,
	9.0: 695.95,
	9.5: 720.55,
	10.0: 745.15,
	11.0: 776.45,
	12.0: 807.75,
	13.0: 839.05,
	14.0: 870.35,
	15.0: 901.65,
	16.0: 932.95,
	17.0: 964.25,
	18.0: 995.55,
	19.0: 1026.85,
	20.0: 1058.15,
	21.0: 1097.65,
	22.0: 1137.15,
	23.0: 1176.65,
	24.0: 1216.15,
	25.0: 1255.65,
	26.0: 1295.15,
	27.0: 1334.65,
	28.0: 1374.15,
	29.0: 1413.65,
	30.0: 1453.15,
	40.0: 1864.65,
	50.0: 2276.15,
	60.0: 2687.65,
	70.0: 3099.15
}

const zona_5_dhl = {
	0.5: 249.55,
	1.0: 283.25,
	1.5: 316.95,
	2.0: 350.65,
	2.5: 384.35,
	3.0: 412.40,
	3.5: 440.45,
	4.0: 468.50,
	4.5: 496.55,
	5.0: 524.60,
	5.5: 551.40,
	6.0: 578.20,
	6.5: 605.00,
	7.0: 631.80,
	7.5: 658.60,
	8.0: 685.40,
	8.5: 712.20,
	9.0: 739.00,
	9.5: 765.80,
	10.0: 792.60,
	11.0: 829.50,
	12.0: 866.40,
	13.0: 903.30,
	14.0: 940.20,
	15.0: 977.10,
	16.0: 1014.00,
	17.0: 1050.90,
	18.0: 1087.80,
	19.0: 1124.70,
	20.0: 1161.60,
	21.0: 1203.90,
	22.0: 1246.20,
	23.0: 1288.50,
	24.0: 1330.80,
	25.0: 1373.10,
	26.0: 1415.40,
	27.0: 1457.70,
	28.0: 1500.00,
	29.0: 1542.30,
	30.0: 1584.60,
	40.0: 2029.60,
	50.0: 2474.60,
	60.0: 2919.60,
	70.0: 3364.60
}

const zona_6_dhl = {
	0.5: 271.60,
	1.0: 307.65,
	1.5: 344.00,
	2.0: 380.35,
	2.5: 416.70,
	3.0: 447.95,
	3.5: 479.20,
	4.0: 510.45,
	4.5: 541.70,
	5.0: 572.95,
	5.5: 602.40,
	6.0: 631.85,
	6.5: 661.30,
	7.0: 690.75,
	7.5: 720.20,
	8.0: 749.65,
	8.5: 779.10,
	9.0: 808.55,
	9.5: 838.00,
	10.0: 867.45,
	11.0: 908.05,
	12.0: 948.65,
	13.0: 989.25,
	14.0: 1029.85,
	15.0: 1070.45,
	16.0: 1111.05,
	17.0: 1151.65,
	18.0: 1192.25,
	19.0: 1232.85,
	20.0: 1273.45,
	21.0: 1319.55,
	22.0: 1365.65,
	23.0: 1411.75,
	24.0: 1457.85,
	25.0: 1503.95,
	26.0: 1550.05,
	27.0: 1596.15,
	28.0: 1642.25,
	29.0: 1688.35,
	30.0: 1734.45,
	40.0: 2212.45,
	50.0: 2690.45,
	60.0: 3168.45,
	70.0: 3646.45
}

const zona_a_fedex = {
	0.5: 157.00,
	1.0: 171.00,
	1.5: 185.00,
	2.0: 199.00,
	2.5: 213.00,
	3.0: 230.80,
	3.5: 248.60,
	4.0: 266.40,
	4.5: 284.20,
	5.0: 302.00,
	5.5: 314.70,
	6.0: 327.40,
	6.5: 340.10,
	7.0: 352.80,
	7.5: 365.50,
	8.0: 378.20,
	8.5: 390.90,
	9.0: 403.60,
	9.5: 416.30,
	10.0: 429.00,
	10.5: 438.20,
	11.0: 447.40,
	11.5: 456.60,
	12.0: 465.80,
	12.5: 475.00,
	13.0: 484.20,
	13.5: 493.40,
	14.0: 502.60,
	14.5: 511.80,
	15.0: 521.00,
	15.5: 530.20,
	16.0: 539.40,
	16.5: 548.60,
	17.0: 557.80,
	17.5: 567.00,
	18.0: 576.20,
	18.5: 585.40,
	19.0: 594.60,
	19.5: 603.80,
	20.0: 613.00,
	20.5: 622.20
}

const zona_b_fedex = {
	0.5: 177.90,
	1.0: 198.00,
	1.5: 218.10,
	2.0: 238.20,
	2.5: 258.30,
	3.0: 285.30,
	3.5: 312.30,
	4.0: 339.30,
	4.5: 366.30,
	5.0: 393.30,
	5.5: 402.90,
	6.0: 412.50,
	6.5: 422.10,
	7.0: 431.70,
	7.5: 441.30,
	8.0: 450.90,
	8.5: 460.50,
	9.0: 470.10,
	9.5: 479.70,
	10.0: 489.30,
	10.5: 504.20,
	11.0: 519.10,
	11.5: 534.00,
	12.0: 548.90,
	12.5: 563.80,
	13.0: 578.70,
	13.5: 593.60,
	14.0: 608.50,
	14.5: 623.40,
	15.0: 638.30,
	15.5: 653.20,
	16.0: 668.10,
	16.5: 683.00,
	17.0: 697.90,
	17.5: 712.80,
	18.0: 727.70,
	18.5: 742.60,
	19.0: 747.60,
	19.5: 747.60,
	20.0: 747.60,
	20.5: 747.60
}

const zona_c_fedex = {
	0.5: 180.90,
	1.0: 203.30,
	1.5: 225.70,
	2.0: 248.10,
	2.5: 270.50,
	3.0: 293.10,
	3.5: 315.70,
	4.0: 338.30,
	4.5: 360.90,
	5.0: 383.50,
	5.5: 398.70,
	6.0: 413.90,
	6.5: 429.10,
	7.0: 444.30,
	7.5: 459.50,
	8.0: 474.70,
	8.5: 489.90,
	9.0: 505.10,
	9.5: 520.30,
	10.0: 535.50,
	10.5: 547.70,
	11.0: 559.90,
	11.5: 572.10,
	12.0: 584.30,
	12.5: 596.50,
	13.0: 608.70,
	13.5: 620.90,
	14.0: 633.10,
	14.5: 645.30,
	15.0: 657.50,
	15.5: 669.70,
	16.0: 681.90,
	16.5: 694.10,
	17.0: 706.30,
	17.5: 718.50,
	18.0: 730.70,
	18.5: 742.90,
	19.0: 755.10,
	19.5: 767.30,
	20.0: 779.50,
	20.5: 791.70
}

const zona_d_fedex = {
	0.5: 241.50,
	1.0: 268.70,
	1.5: 295.90,
	2.0: 323.10,
	2.5: 350.30,
	3.0: 383.00,
	3.5: 415.70,
	4.0: 448.40,
	4.5: 481.10,
	5.0: 513.80,
	5.5: 532.60,
	6.0: 551.40,
	6.5: 570.20,
	7.0: 589.00,
	7.5: 607.80,
	8.0: 626.60,
	8.5: 645.40,
	9.0: 664.20,
	9.5: 683.00,
	10.0: 701.80,
	10.5: 716.80,
	11.0: 731.80,
	11.5: 746.80,
	12.0: 761.80,
	12.5: 776.80,
	13.0: 791.80,
	13.5: 806.80,
	14.0: 821.80,
	14.5: 836.80,
	15.0: 851.80,
	15.5: 866.80,
	16.0: 881.80,
	16.5: 896.80,
	17.0: 911.80,
	17.5: 926.80,
	18.0: 941.80,
	18.5: 956.80,
	19.0: 971.80,
	19.5: 986.80,
	20.0: 1001.80,
	20.5: 1016.80
}

const zona_e_fedex = {
	0.5: 266.60,
	1.0: 299.60,
	1.5: 332.60,
	2.0: 365.60,
	2.5: 398.60,
	3.0: 442.40,
	3.5: 486.20,
	4.0: 530.00,
	4.5: 573.80,
	5.0: 617.60,
	5.5: 642.20,
	6.0: 666.80,
	6.5: 691.40,
	7.0: 716.00,
	7.5: 740.60,
	8.0: 765.20,
	8.5: 789.80,
	9.0: 814.40,
	9.5: 839.00,
	10.0: 863.60,
	10.5: 882.80,
	11.0: 902.00,
	11.5: 921.20,
	12.0: 940.40,
	12.5: 959.60,
	13.0: 978.80,
	13.5: 998.00,
	14.0: 1017.20,
	14.5: 1036.40,
	15.0: 1055.60,
	15.5: 1074.80,
	16.0: 1094.00,
	16.5: 1113.20,
	17.0: 1132.40,
	17.5: 1151.60,
	18.0: 1170.80,
	18.5: 1190.00,
	19.0: 1209.20,
	19.5: 1228.40,
	20.0: 1247.60,
	20.5: 1266.80
}

const zona_f_fedex = {
	0.5: 274.60,
	1.0: 313.00,
	1.5: 351.40,
	2.0: 389.80,
	2.5: 428.20,
	3.0: 457.50,
	3.5: 486.80,
	4.0: 516.10,
	4.5: 545.40,
	5.0: 574.70,
	5.5: 602.90,
	6.0: 631.10,
	6.5: 659.30,
	7.0: 687.50,
	7.5: 715.70,
	8.0: 743.90,
	8.5: 772.10,
	9.0: 800.30,
	9.5: 828.50,
	10.0: 856.70,
	10.5: 878.50,
	11.0: 900.30,
	11.5: 922.10,
	12.0: 943.90,
	12.5: 965.70,
	13.0: 987.50,
	13.5: 1009.30,
	14.0: 1031.10,
	14.5: 1052.90,
	15.0: 1074.70,
	15.5: 1096.50,
	16.0: 1118.30,
	16.5: 1140.10,
	17.0: 1161.90,
	17.5: 1183.70,
	18.0: 1205.50,
	18.5: 1227.30,
	19.0: 1249.10,
	19.5: 1270.90,
	20.0: 1291.50,
	20.5: 1291.50
}

const zona_g_fedex = {
	0.5: 236.10,
	1.0: 264.20,
	1.5: 292.30,
	2.0: 320.40,
	2.5: 348.50,
	3.0: 381.30,
	3.5: 414.10,
	4.0: 446.90,
	4.5: 479.70,
	5.0: 512.50,
	5.5: 531.20,
	6.0: 549.90,
	6.5: 568.60,
	7.0: 587.30,
	7.5: 606.00,
	8.0: 624.70,
	8.5: 643.40,
	9.0: 662.10,
	9.5: 680.80,
	10.0: 699.50,
	10.5: 714.50,
	11.0: 729.50,
	11.5: 744.50,
	12.0: 759.50,
	12.5: 774.50,
	13.0: 789.50,
	13.5: 804.50,
	14.0: 819.50,
	14.5: 834.50,
	15.0: 849.50,
	15.5: 864.50,
	16.0: 879.50,
	16.5: 894.50,
	17.0: 909.50,
	17.5: 924.50,
	18.0: 939.50,
	18.5: 954.50,
	19.0: 969.50,
	19.5: 984.50,
	20.0: 999.50,
	20.5: 1014.50
}




// Get the select element
const selectElement = document.getElementById("pais");
const addButton = document.getElementById("agregar-tabla");
const tableBody = document.querySelector(".table-wrapper tbody");

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

const usIndex = getCountryIndex("US");
console.log(usIndex);
if (usIndex !== -1) {
	selectElement.selectedIndex = usIndex;
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

// Function to get the sum of the last column
function getSumOfLastColumn(table) {
	const rows = table.querySelectorAll("tr"); // Get all table rows
	let sum = 0;

	// Loop through rows starting from the second one (skip header)
	for (let i = 0; i < rows.length; i++) {
		const cells = rows[i].querySelectorAll("td"); // Get all cells in the current row

		// Assuming the last cell (cells.length - 1) contains the value
		const value = parseFloat(cells[cells.length - 1].textContent); // Parse the value to a number
		sum += value;
	}

	return sum;
}

addButton.addEventListener("click", function () {
	const alto = parseFloat(document.getElementById("alto").value);
	const largo = parseFloat(document.getElementById("largo").value);
	const ancho = parseFloat(document.getElementById("ancho").value);
	const pesoBruto = parseFloat(document.getElementById("pesobruto").value);
	const total = document.getElementById("pesoFacturableTotal");

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
	pesoVolumetricoCell.textContent = volumetricWeight.toFixed(2);
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
		total.textContent = `Total: ${getSumOfLastColumn(tableBody)}`;
	}

	// Clear input fields (optional)
	// document.getElementById("pais").value = "";
	// document.getElementById("clase").value = "";
	document.getElementById("largo").value = "";
	document.getElementById("ancho").value = "";
	document.getElementById("alto").value = "";
	document.getElementById("pesobruto").value = "";
});

