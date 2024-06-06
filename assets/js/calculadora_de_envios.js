
// let countries_new = `
// Albania
// Alemania
// Andorra
// Anguila
// Antigua
// Armenia
// Aruba
// Australia
// Austria
// Azerbaiyan
// Bahamas
// Barbados
// Belgica
// Belice
// Bermudas
// Bielorrusia
// Bolivia
// Bonaire
// Bosnia
// Brasil
// Brunei
// Bulgaria
// Camboya
// Canadá
// Chile
// China
// Ciudad del Vaticano
// Colombia
// Corea Del Sur
// Costa Rica
// Croacia
// Curazao
// Dinamarca
// Dominica
// Ecuador
// El Salvador
// Eslovenia
// España
// USA
// Estonia
// Filipinas
// Finlandia
// Francia
// Georgia
// Granada
// Grecia
// Guadalupe
// Guatemala
// Guayana
// Guayana Francesa
// Haiti
// Holanda
// Honduras
// Hong Kong
// Hungría
// Indonesia
// Irlanda
// Islas Caiman
// Islas Turcas y Caicos
// Islas Vírgenes Britanicas
// Islas Vírgenes USA
// Italia
// Jamaica
// Japón
// Kazajstan
// Kirguistan
// Laos
// Latvia
// Liechtenstein
// Lituania
// Luxemburgo
// Macao
// Macedonia
// Malasia
// Malta
// Martinica
// Mexico
// Moldavia
// Monaco
// Montenegro
// Montserrat
// Myanmar
// Nicaragua
// Noruega
// Nueva Zelanda
// Panama
// Paraguay
// Peru
// Polonia
// Portugal
// Puerto Rico
// Reino Unido
// Republica Checa
// Republica Eslovaca
// Rumania
// Rusia
// San Cristobal y Nevis
// San Eustaquio y Saba
// San Martín
// San Vicente
// Santa Lucía
// Serbia
// Singapur
// Sint Marteen
// Suecia
// Suiza
// Suriname
// Tailandia
// Taiwán
// Trinidad y Tobago
// Turkmenistán
// Ucrania
// Uruguay
// Uzbekistan
// Venezuela
// Vietnam
// Yugoslavia
// Afganistan
// Albania
// Alemania
// Andorra
// Angola
// Anguila
// Antigua
// Arabia Saudita
// Argelia
// Armenia
// Aruba
// Australia
// Austria
// Azerbaiyan
// Bahamas
// Bahrain
// Bangladesh
// Barbados
// Belgica
// Belice
// Benin
// Bermuda
// Bielorrusia
// Bolivia
// Bonaire
// Bosnia
// Botsuana
// Brasil
// Brunéi
// Bulgaria
// Burkina Faso
// Burundi
// Bután
// Cabo Verde
// Camboya
// Camerun
// Canada
// Chad
// Chile
// Chipre
// Colombia
// Congo
// Corea del Norte
// Corea del Sur
// Costa de Marfil
// Costa Rica
// Croacia
// Cuba
// Curazao
// Dinamarca
// Dominica
// Ecuador
// Egipto
// El Salvador
// Emiratos Arabes Unidos
// Eritrea
// Eslovaquia
// Eslovenia
// España
// USA
// Estonia
// Eswatini
// Etiopia
// Filipinas
// Finlandia
// Fiyi
// Francia
// Gabon
// Gambia
// Georgia
// Ghana
// Gibraltar
// Granada
// Grecia
// Groenlandia
// Guadalupe
// Guam
// Guatemala
// Guayana Francesa
// Guernsey
// Guinea Ecuatorial
// Guinea-Bissau
// Guyana
// Haiti
// Holanda
// Honduras
// Hong Kong SAR China
// Hungria
// India
// Indonesia
// Inglaterra
// Reino Unido
// Iran
// Iraq
// Irlanda
// Isla de Reunion
// Isla Malvinas
// Islandia
// Islas Caiman
// Islas Canarias
// Islas Comoras
// Islas Cook
// Islas Feroe
// Islas Marshall
// Islas Salomon
// Islas Turks y Caicos
// Islas Virgenes USA
// Islas Virgenes Britanicas
// Israel
// Italia
// Jamaica
// Japon
// Jersey
// Jordania
// Kazajistan
// Republica Checa
// Republica de África Central
// Republica de Guinea
// Republica Dominicana
// Ruanda
// Rumania
// Rusia
// Saipan
// Samoa
// Samoa Americana
// San Kitts
// San Bartolome
// San Eustaquio
// San Marino
// San Martín
// San Vicente
// Santa Helena
// Santa Lucía
// Santo Tome y Principe
// Senegal
// Serbia, Republica de
// Seychelles
// Sierra Leona
// Singapur
// Siria
// Somalia
// Somalilandia
// Sri Lanka
// Sudafrica
// Sudan
// Sudan del Sur
// Suecia
// Suiza
// Suriname
// Tahiti
// Tailandia
// Taiwan
// Tanzania
// Tayikistán
// Timor Oriental
// Togo
// Tonga
// Trinidad y Tobago
// Tunez
// Turkmenistan
// Turquía
// Tuvalu
// Ucrania
// Uganda
// Uruguay
// Uzbekistan
// Vanuatu
// Venezuela
// Vietnam
// Yemen
// Yibuti
// Zambia
// Zimbabue
// `;

// // Step 2: Remove duplicates and generate the unique array
// let uniqueCountries = [...new Set(countries_new.split('\n').map(country => country.trim()).filter(country => country))];

// console.log(uniqueCountries.sort());

function convertToDictionary(obj) {
	const result = {};
	for (const key in obj) {
		const value = obj[key];
		if (!result[value]) {
			result[value] = [];
		}
		result[value].push(key);
	}
	return result;
}

const zonasPorPais_DHL = {
	"Afganistan": 6,
	"Albania": 4,
	"Alemania": 4,
	"Andorra": 4,
	"Angola": 6,
	"Anguila": 2,
	"Antigua": 2,
	"Arabia Saudita": 6,
	"Argelia": 6,
	"Armenia": 6,
	"Aruba": 2,
	"Australia": 6,
	"Austria": 4,
	"Azerbaiyan": 6,
	"Bahamas": 2,
	"Bahrain": 6,
	"Bangladesh": 5,
	"Barbados": 2,
	"Belgica": 4,
	"Belice": 2,
	"Benin": 6,
	"Bermuda": 2,
	"Bielorrusia": 4,
	"Bolivia": 1,
	"Bonaire": 2,
	"Bosnia": 4,
	"Botsuana": 6,
	"Brasil": 1,
	"Brunei": 5,
	"Bulgaria": 4,
	"Burkina Faso": 6,
	"Burundi": 6,
	"Butan": 6,
	"Cabo Verde": 6,
	"Camboya": 5,
	"Camerun": 6,
	"Canada": 3,
	"Chad": 6,
	"Chile": 1,
	"China": 5,
	"Chipre": 4,
	"Vaticano": 4,
	"Colombia": 2,
	"Congo": 6,
	"Corea del Norte": 6,
	"Corea del Sur": 5,
	"Costa de Marfil": 6,
	"Costa Rica": 2,
	"Croacia": 4,
	"Cuba": 2,
	"Curazao": 2,
	"Dinamarca": 4,
	"Dominica": 2,
	"Ecuador": 2,
	"Egipto": 6,
	"El Salvador": 2,
	"Emiratos Arabes Unidos": 6,
	"Eritrea": 6,
	"Eslovaquia": 4,
	"Eslovenia": 4,
	"España": 4,
	"USA": 3,
	"Estonia": 4,
	"Eswatini": 6,
	"Etiopia": 6,
	"Filipinas": 5,
	"Finlandia": 4,
	"Fiyi": 6,
	"Francia": 4,
	"Gabon": 6,
	"Gambia": 6,
	"Georgia": 6,
	"Ghana": 6,
	"Gibraltar": 4,
	"Granada": 2,
	"Grecia": 4,
	"Groenlandia": 4,
	"Guadalupe": 2,
	"Guam": 6,
	"Guatemala": 2,
	"Guayana Francesa": 2,
	"Guernsey": 4,
	"Guinea Ecuatorial": 6,
	"Guinea-Bissau": 6,
	"Guyana": 2,
	"Haiti": 2,
	"Holanda": 4,
	"Honduras": 2,
	"Hong Kong": 5,
	"Hungria": 4,
	"India": 5,
	"Indonesia": 5,
	"Inglaterra": 4,
	"Reino Unido": 4,
	"Iran": 6,
	"Iraq": 6,
	"Irlanda": 4,
	"Isla de Reunion": 6,
	"Isla Malvinas": 2,
	"Islandia": 4,
	"Islas Caiman": 2,
	"Islas Canarias": 6,
	"Islas Comoras": 6,
	"Islas Cook": 6,
	"Islas Feroe": 4,
	"Islas Marshall": 6,
	"Islas Salomon": 6,
	"Islas Turcas y Caicos": 2,
	"Islas Virgenes USA": 2,
	"Islas Virgenes Britanicas": 2,
	"Israel": 6,
	"Italia": 4,
	"Jamaica": 2,
	"Japon": 5,
	"Jersey": 4,
	"Jordania": 6,
	"Kazajistan": 6,
	"Republica Checa": 4,
	"Republica de Africa Central": 6,
	"Republica de Guinea": 6,
	"Republica Dominicana": 2,
	"Ruanda": 6,
	"Rumania": 4,
	"Rusia": 6,
	"Saipan": 6,
	"Samoa": 6,
	"Samoa Americana": 6,
	"San Kitts": 2,
	"San Bartolome": 2,
	"San Eustaquio": 2,
	"San Marino": 4,
	"San Martin": 2,
	"San Vicente": 2,
	"Santa Helena": 6,
	"Santa Lucia": 2,
	"Santo Tome y Principe": 6,
	"Senegal": 6,
	"Serbia": 4,
	"Seychelles": 6,
	"Sierra Leona": 6,
	"Singapur": 5,
	"Siria": 6,
	"Somalia": 6,
	"Somalilandia": 6,
	"Sri Lanka": 5,
	"Sudafrica": 6,
	"Sudan": 6,
	"Sudan del Sur": 6,
	"Suecia": 4,
	"Suiza": 4,
	"Suriname": 2,
	"Tahiti": 6,
	"Tailandia": 5,
	"Taiwan": 5,
	"Tanzania": 6,
	"Tayikistán": 6,
	"Timor Oriental": 6,
	"Togo": 6,
	"Tonga": 6,
	"Trinidad y Tobago": 6,
	"Tunez": 6,
	"Turkmenistan": 6,
	"Turquia": 4,
	"Tuvalu": 6,
	"Ucrania": 4,
	"Uganda": 6,
	"Uruguay": 1,
	"Uzbekistan": 6,
	"Vanuatu": 6,
	"Venezuela": 2,
	"Vietnam": 5,
	"Yemen": 6,
	"Yibuti": 6,
	"Zambia": 6,
	"Zimbabue": 6
}

const zonasPorPais_FEDEX = {
	"Albania": "E",
	"Alemania": "D",
	"Andorra": "D",
	"Anguila": "C",
	"Antigua": "C",
	"Armenia": "E",
	"Aruba": "C",
	"Australia": "E",
	"Austria": "D",
	"Azerbaiyan": "E",
	"Bahamas": "C",
	"Barbados": "C",
	"Belgica": "D",
	"Belice": "C",
	"Bermudas": "C",
	"Bielorrusia": "E",
	"Bolivia": "B",
	"Bonaire": "C",
	"Bosnia": "E",
	"Brasil": "A",
	"Brunei": "G",
	"Bulgaria": "D",
	"Camboya": "G",
	"Canada": "C",
	"Chile": "A",
	"China": "G",
	"Vaticano": "D",
	"Colombia": "B",
	"Corea del Sur": "G",
	"Costa Rica": "C",
	"Croacia": "E",
	"Curazao": "C",
	"Dinamarca": "D",
	"Dominica": "C",
	"Ecuador": "B",
	"El Salvador": "C",
	"Eslovenia": "D",
	"España": "D",
	"USA": "C",
	"Estonia": "D",
	"Filipinas": "G",
	"Finlandia": "D",
	"Francia": "D",
	"Georgia": "E",
	"Granada": "C",
	"Grecia": "D",
	"Guadalupe": "C",
	"Guatemala": "C",
	"Guayana": "B",
	"Guayana Francesa": "B",
	"Haiti": "C",
	"Holanda": "D",
	"Honduras": "C",
	"Hong Kong": "G",
	"Hungria": "D",
	"Indonesia": "G",
	"Irlanda": "D",
	"Islas Caiman": "C",
	"Islas Turcas y Caicos": "C",
	"Islas Virgenes Britanicas": "C",
	"Islas Virgenes USA": "C",
	"Italia": "D",
	"Jamaica": "C",
	"Japon": "G",
	"Kazajistan": "E",
	"Kirguistan": "E",
	"Laos": "G",
	"Latvia": "D",
	"Liechtenstein": "D",
	"Lituania": "D",
	"Luxemburgo": "D",
	"Macao": "G",
	"Macedonia": "E",
	"Malasia": "G",
	"Malta": "E",
	"Martinica": "C",
	"Mexico": "C",
	"Moldavia": "E",
	"Monaco": "D",
	"Montenegro": "E",
	"Montserrat": "C",
	"Myanmar": "G",
	"Nicaragua": "C",
	"Noruega": "D",
	"Nueva Zelanda": "E",
	"Panama": "C",
	"Paraguay": "A",
	"Peru": "B",
	"Polonia": "D",
	"Portugal": "D",
	"Puerto Rico": "C",
	"Reino Unido": "D",
	"Republica Checa": "E",
	"Republica Dominicana": "C",
	"Republica Eslovaca": "E",
	"Rumania": "D",
	"Rusia": "D",
	"San Cristobal y Nevis": "C",
	"San Eustaquio y Saba": "C",
	"San Martin": "C",
	"San Vicente": "C",
	"Santa Lucia": "C",
	"Serbia": "E",
	"Singapur": "G",
	"Sint Marteen": "C",
	"Suecia": "D",
	"Suiza": "D",
	"Suriname": "B",
	"Tailandia": "G",
	"Taiwan": "G",
	"Trinidad y Tobago": "C",
	"Turkmenistan": "E",
	"Ucrania": "D",
	"Uruguay": "A",
	"Uzbekistan": "E",
	"Venezuela": "B",
	"Vietnam": "G",
	"Yugoslavia": "E"
};

const paises_dhl = Object.keys(zonasPorPais_DHL);
const paises_fedex = Object.keys(zonasPorPais_FEDEX);

const countries = Array.from(new Set([...paises_dhl, ...paises_fedex])).sort();
console.log(countries)

const dhl_dict_zones = convertToDictionary(zonasPorPais_DHL);
console.log(dhl_dict_zones);

const fedex_dict_zones = convertToDictionary(zonasPorPais_FEDEX);
console.log(fedex_dict_zones);

// Data as provided
const data_dhl = [
	[0.5, 148.05, 151.50, 161.95, 234.15, 249.55, 271.60],
	[1, 164.00, 171.95, 183.35, 264.40, 283.25, 307.65],
	[1.5, 180.15, 193.25, 205.45, 294.65, 316.95, 344.00],
	[2, 196.30, 214.55, 227.55, 324.90, 350.65, 380.35],
	[2.5, 212.45, 235.85, 249.65, 355.15, 384.35, 416.70],
	[3, 228.40, 254.55, 269.05, 383.95, 412.40, 447.95],
	[3.5, 244.35, 273.25, 288.45, 412.75, 440.45, 479.20],
	[4, 260.30, 291.95, 307.85, 441.55, 468.50, 510.45],
	[4.5, 276.25, 310.65, 327.25, 470.35, 496.55, 541.70],
	[5, 292.20, 329.35, 346.65, 499.15, 524.60, 572.95],
	[5.5, 304.85, 343.55, 361.70, 523.75, 551.40, 602.40],
	[6, 317.50, 357.75, 376.75, 548.35, 578.20, 631.85],
	[6.5, 330.15, 371.95, 391.80, 572.95, 605.00, 661.30],
	[7, 342.80, 386.15, 406.85, 597.55, 631.80, 690.75],
	[7.5, 355.45, 400.35, 421.90, 622.15, 658.60, 720.20],
	[8, 368.10, 414.55, 436.95, 646.75, 685.40, 749.65],
	[8.5, 380.75, 428.75, 452.00, 671.35, 712.20, 779.10],
	[9, 393.40, 442.95, 467.05, 695.95, 739.00, 808.55],
	[9.5, 406.05, 457.15, 482.10, 720.55, 765.80, 838.00],
	[10, 418.70, 471.35, 497.15, 745.15, 792.60, 867.45],
	[11, 439.20, 491.95, 520.25, 776.45, 829.50, 908.05],
	[12, 459.70, 512.55, 543.35, 807.75, 866.40, 948.65],
	[13, 480.20, 533.15, 566.45, 839.05, 903.30, 989.25],
	[14, 500.70, 553.75, 589.55, 870.35, 940.20, 1_029.85],
	[15, 521.20, 574.35, 612.65, 901.65, 977.10, 1_070.45],
	[16, 541.70, 594.95, 635.75, 932.95, 1_014.00, 1_111.05],
	[17, 562.20, 615.55, 658.85, 964.25, 1_050.90, 1_151.65],
	[18, 582.70, 636.15, 681.95, 995.55, 1_087.80, 1_192.25],
	[19, 603.20, 656.75, 705.05, 1_026.85, 1_124.70, 1_232.85],
	[20, 623.70, 677.35, 728.15, 1_058.15, 1_161.60, 1_273.45],
	[21, 644.40, 702.85, 755.35, 1_097.65, 1_203.90, 1_319.55],
	[22, 665.10, 728.35, 782.55, 1_137.15, 1_246.20, 1_365.65],
	[23, 685.80, 753.85, 809.75, 1_176.65, 1_288.50, 1_411.75],
	[24, 706.50, 779.35, 836.95, 1_216.15, 1_330.80, 1_457.85],
	[25, 727.20, 804.85, 864.15, 1_255.65, 1_373.10, 1_503.95],
	[26, 747.90, 830.35, 891.35, 1_295.15, 1_415.40, 1_550.05],
	[27, 768.60, 855.85, 918.55, 1_334.65, 1_457.70, 1_596.15],
	[28, 789.30, 881.35, 945.75, 1_374.15, 1_500.00, 1_642.25],
	[29, 810.00, 906.85, 972.95, 1_413.65, 1_542.30, 1_688.35],
	[30, 830.70, 932.35, 1_000.15, 1_453.15, 1_584.60, 1_734.45],
	[40, 1_048.70, 1_206.85, 1_291.65, 1_864.65, 2_029.60, 2_212.45],
	[50, 1_266.70, 1_481.35, 1_583.15, 2_276.15, 2_474.60, 2_690.45],
	[60, 1_484.70, 1_755.85, 1_874.65, 2_687.65, 2_919.60, 3_168.45],
	[70, 1_702.70, 2_030.35, 2_166.15, 3_099.15, 3_364.60, 3_646.45]
];

// Initialize dictionaries
let dict1_dhl = {};
let dict2_dhl = {};
let dict3_dhl = {};
let dict4_dhl = {};
let dict5_dhl = {};
let dict6_dhl = {};

// Populate dictionaries
data_dhl.forEach(row => {
	let key = row[0];
	dict1_dhl[key] = row[1];
	dict2_dhl[key] = row[2];
	dict3_dhl[key] = row[3];
	dict4_dhl[key] = row[4];
	dict5_dhl[key] = row[5];
	dict6_dhl[key] = row[6];
});

// Output the dictionaries
console.log("dict1:", dict1_dhl);
console.log("dict2:", dict2_dhl);
console.log("dict3:", dict3_dhl);
console.log("dict4:", dict4_dhl);
console.log("dict5:", dict5_dhl);
console.log("dict6:", dict6_dhl);

// Data as provided
const data_fedex = [
	[0.5, 157.00, 177.90, 180.90, 241.50, 266.60, 274.60, 236.10],
	[1.0, 171.00, 198.00, 203.30, 268.70, 299.60, 313.00, 264.20],
	[1.5, 185.00, 218.10, 225.70, 295.90, 332.60, 351.40, 292.30],
	[2.0, 199.00, 238.20, 248.10, 323.10, 365.60, 389.80, 320.40],
	[2.5, 213.00, 258.30, 270.50, 350.30, 398.60, 428.20, 348.50],
	[3.0, 230.80, 285.30, 293.10, 383.00, 442.40, 457.50, 381.30],
	[3.5, 248.60, 312.30, 315.70, 415.70, 486.20, 486.80, 414.10],
	[4.0, 266.40, 339.30, 338.30, 448.40, 530.00, 516.10, 446.90],
	[4.5, 284.20, 366.30, 360.90, 481.10, 573.80, 545.40, 479.70],
	[5.0, 302.00, 393.30, 383.50, 513.80, 617.60, 574.70, 512.50],
	[5.5, 314.70, 402.90, 398.70, 532.60, 642.20, 602.90, 531.20],
	[6.0, 327.40, 412.50, 413.90, 551.40, 666.80, 631.10, 549.90],
	[6.5, 340.10, 422.10, 429.10, 570.20, 691.40, 659.30, 568.60],
	[7.0, 352.80, 431.70, 444.30, 589.00, 716.00, 687.50, 587.30],
	[7.5, 365.50, 441.30, 459.50, 607.80, 740.60, 715.70, 606.00],
	[8.0, 378.20, 450.90, 474.70, 626.60, 765.20, 743.90, 624.70],
	[8.5, 390.90, 460.50, 489.90, 645.40, 789.80, 772.10, 643.40],
	[9.0, 403.60, 470.10, 505.10, 664.20, 814.40, 800.30, 662.10],
	[9.5, 416.30, 479.70, 520.30, 683.00, 839.00, 828.50, 680.80],
	[10.0, 429.00, 489.30, 535.50, 701.80, 863.60, 856.70, 699.50],
	[10.5, 438.20, 504.20, 547.70, 716.80, 882.80, 878.50, 714.50],
	[11.0, 447.40, 519.10, 559.90, 731.80, 902.00, 900.30, 729.50],
	[11.5, 456.60, 534.00, 572.10, 746.80, 921.20, 922.10, 744.50],
	[12.0, 465.80, 548.90, 584.30, 761.80, 940.40, 943.90, 759.50],
	[12.5, 475.00, 563.80, 596.50, 776.80, 959.60, 965.70, 774.50],
	[13.0, 484.20, 578.70, 608.70, 791.80, 978.80, 987.50, 789.50],
	[13.5, 493.40, 593.60, 620.90, 806.80, 998.00, 1_009.30, 804.50],
	[14.0, 502.60, 608.50, 633.10, 821.80, 1_017.20, 1_031.10, 819.50],
	[14.5, 511.80, 623.40, 645.30, 836.80, 1_036.40, 1_052.90, 834.50],
	[15.0, 521.00, 638.30, 657.50, 851.80, 1_055.60, 1_074.70, 849.50],
	[15.5, 530.20, 653.20, 669.70, 866.80, 1_074.80, 1_096.50, 864.50],
	[16.0, 539.40, 668.10, 681.90, 881.80, 1_094.00, 1_118.30, 879.50],
	[16.5, 548.60, 683.00, 694.10, 896.80, 1_113.20, 1_140.10, 894.50],
	[17.0, 557.80, 697.90, 706.30, 911.80, 1_132.40, 1_161.90, 909.50],
	[17.5, 567.00, 712.80, 718.50, 926.80, 1_151.60, 1_183.70, 924.50],
	[18.0, 576.20, 727.70, 730.70, 941.80, 1_170.80, 1_205.50, 939.50],
	[18.5, 585.40, 742.60, 742.90, 956.80, 1_190.00, 1_227.30, 954.50],
	[19.0, 594.60, 747.60, 755.10, 971.80, 1_209.20, 1_249.10, 969.50],
	[19.5, 603.80, 747.60, 767.30, 986.80, 1_228.40, 1_270.90, 984.50],
	[20.0, 613.00, 747.60, 779.50, 1_001.80, 1_247.60, 1_291.50, 999.50],
	[20.5, 622.20, 747.60, 791.70, 1_016.80, 1_266.80, 1_291.50, 1_014.50]
];

// Initialize dictionaries
let dicta_fedex = {};
let dictb_fedex = {};
let dictc_fedex = {};
let dictd_fedex = {};
let dicte_fedex = {};
let dictf_fedex = {};
let dictg_fedex = {};

// Populate dictionaries
data_fedex.forEach(row => {
	let key = row[0];
	dicta_fedex[key] = row[1];
	dictb_fedex[key] = row[2];
	dictc_fedex[key] = row[3];
	dictd_fedex[key] = row[4];
	dicte_fedex[key] = row[5];
	dictf_fedex[key] = row[6];
	dictg_fedex[key] = row[7];
});

// Output the dictionaries
console.log("dicta:", dicta_fedex);
console.log("dictb:", dictb_fedex);
console.log("dictc:", dictc_fedex);
console.log("dictd:", dictd_fedex);
console.log("dicte:", dicte_fedex);
console.log("dictf:", dictf_fedex);
console.log("dictg:", dictg_fedex);


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

// Get the select element
const selectElement = document.getElementById("pais");
const addButton = document.getElementById("agregar-tabla");
const calculateButton = document.getElementById("calcular-tabla");
const tableBody = document.getElementById("tabla1");
const resultTableBody = document.getElementById("tabla2");
const total = document.getElementById("pesoFacturableTotal");
let totalNumber = 0;

// Loop through the countries object and add options
for (const country in countries) {
	const countryName = countries[country];
	const optionElement = document.createElement("option");
	optionElement.value = countryName;
	optionElement.textContent = countryName;
	selectElement.appendChild(optionElement);
}

function getCountryIndex(countryName) {
	let index = -1;
	for (let i = 0; i < countries.length; i++) {
		const country = countries[i];
		if (country === countryName) {
			index = i;
			break;
		}
	}
	return index;
}

function setSelectCountry(name) {
	const usIndex = getCountryIndex(name);
	console.log("Index:", usIndex);
	if (usIndex !== -1) {
		selectElement.selectedIndex = usIndex;
	}

}

setSelectCountry("USA")

// const tipo = document.getElementById("clase");

// // Loop and add options with class "class1"
// for (let i = 1; i <= 9; i++) {
// 	const optionElement = document.createElement("option");
// 	optionElement.value = `Clase ${ i } `; // Set value as "class1", "class2", etc.
// 	optionElement.textContent = `Clase ${ i } `; // Set text content as "class1", "class2", etc.
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
		totalNumber = getSumOfLastColumn(tableBody);
		total.textContent = `Total: ${totalNumber} `;
	}

	// Clear input fields (optional)
	// document.getElementById("pais").value = "";
	// document.getElementById("clase").value = "";
	document.getElementById("largo").value = "";
	document.getElementById("ancho").value = "";
	document.getElementById("alto").value = "";
	document.getElementById("pesobruto").value = "";
});

function roundToHalf(number) {
	return Math.ceil(number * 2) / 2;
}
function roundToOne(number) {
	return Math.ceil(number);
}

function getKeyByCountry(country, zoneDict) {
	for (const key in zoneDict) {
		console.log(key);
		if (zoneDict[key].includes(country)) {
			return key;
		}
	}
	return null; // return null if country not found
}

function calculate_cost_fedex(pais, peso_facturable) {
	let zone = getKeyByCountry(pais, fedex_dict_zones);
	console.log(zone);

	let pais_invalido = false;

	let zone_dict;
	let const_21_44;
	let const_45_70;
	let const_71_inf;


	// Has HardWired consts
	switch (zone) {
		case 'A':
			zone_dict = dicta_fedex;
			const_21_44 = 29.70;
			const_45_70 = 23.90;
			const_71_inf = 20.70;
			console.log("Zone 1");

			break;
		case 'B':
			zone_dict = dictb_fedex;
			const_21_44 = 35.60;
			const_45_70 = 30.90;
			const_71_inf = 27.20;
			console.log("Zone 2");
			break;
		case 'C':
			zone_dict = dictc_fedex;
			const_21_44 = 38.60;
			const_45_70 = 33.30;
			const_71_inf = 31.70;
			console.log("Zone 3");
			break;
		case 'D':
			zone_dict = dictd_fedex;
			const_21_44 = 52.10;
			const_45_70 = 42.80;
			const_71_inf = 42.10;
			console.log("Zone 4");
			break;
		case 'E':
			zone_dict = dicte_fedex;
			const_21_44 = 63.10;
			const_45_70 = 50.50;
			const_71_inf = 45.80;
			console.log("Zone 5");
			break;
		case 'F':
			zone_dict = dictf_fedex;
			const_21_44 = 61.50;
			const_45_70 = 51.30;
			const_71_inf = 48.30;
			console.log("Zone 6");
			break;
		case 'G':
			zone_dict = dictg_fedex;
			const_21_44 = 52.00;
			const_45_70 = 42.70;
			const_71_inf = 42.00;
			console.log("Zone 6");
			break;
		default:
			pais_invalido = true;
			console.log("Invalid zone letter!");
			break;
	}

	if (pais_invalido) {
		return "Pais No Alcanzado";
	}

	let costo_final = 0;
	if (peso_facturable < 20.5) {
		costo_final = zone_dict[roundToHalf(peso_facturable)];
	} else if (peso_facturable < 44) {
		costo_final = zone_dict[20.5];
		costo_final += (roundToOne(peso_facturable - 20.5)) * const_21_44;
	} else if (peso_facturable < 70) {
		costo_final = zone_dict[20.5];
		costo_final += (44.5 - 20.5) * const_21_44;
		costo_final += (roundToOne(peso_facturable - 45.5)) & const_45_70;
	} else {
		costo_final = zone_dict[20.5];
		costo_final += (44.5 - 20.5) * const_21_44;
		costo_final += (70 - 45.5) * const_45_70;
		costo_final += (roundToOne(peso_facturable - 70)) * const_71_inf;
	}

	return costo_final;
}

function calculate_cost_dhl(pais, peso_facturable) {
	let zone = getKeyByCountry(pais, dhl_dict_zones);
	console.log(zone);

	let pais_invalido = false;

	let zone_dict;
	let const_30_70;
	let const_70_300;
	let const_300_3000;


	// Has HardWired consts
	switch (zone) {
		case "1":
			zone_dict = dict1_dhl;
			const_30_70 = 21.80;
			const_70_300 = 22.20;
			const_300_3000 = 24.80;
			console.log("Zone 1");

			break;
		case "2":
			zone_dict = dict2_dhl;
			const_30_70 = 27.45;
			const_70_300 = 28.20;
			const_300_3000 = 31.65;
			console.log("Zone 2");
			break;
		case "3":
			zone_dict = dict3_dhl;
			const_30_70 = 29.15;
			const_70_300 = 30.25;
			const_300_3000 = 33.70;
			console.log("Zone 3");
			break;
		case "4":
			zone_dict = dict4_dhl;
			const_30_70 = 41.15;
			const_70_300 = 42.15;
			const_300_3000 = 46.75;
			console.log("Zone 4");
			break;
		case "5":
			zone_dict = dict5_dhl;
			const_30_70 = 44.50
			const_70_300 = 45.55;
			const_300_3000 = 50.60;
			console.log("Zone 5");
			break;
		case "6":
			zone_dict = dict6_dhl;
			const_30_70 = 47.80;
			const_70_300 = 48.65;
			const_300_3000 = 53.60;
			console.log("Zone 6");
			break;
		default:
			pais_invalido = true;
			console.log("Invalid zone number!");
			break;
	}

	if (pais_invalido) {
		return "Pais No Alcanzado";
	}

	let costo_final = 0;
	if (peso_facturable < 10) {
		costo_final = zone_dict[roundToHalf(peso_facturable)];
	} else if (peso_facturable < 30) {
		costo_final = zone_dict[roundToOne(peso_facturable)];
	} else if (peso_facturable < 70) {
		costo_final = zone_dict[30];
		costo_final += (roundToOne(peso_facturable - 30)) * const_30_70;
	} else if (peso_facturable < 300) {
		costo_final = zone_dict[30];
		costo_final += (70 - 30) * const_30_70;
		costo_final += (roundToOne(peso_facturable - 70)) * const_70_300;

	} else if (peso_facturable < 3000) {
		costo_final = zone_dict[30];
		costo_final += (70 - 30) * const_30_70;
		costo_final += (300 - 70) * const_70_300;
		costo_final += (roundToOne(peso_facturable - 300)) * const_300_3000;
	}

	return costo_final;
}
calculateButton.addEventListener("click", function () {
	let costo_output_fedex = document.getElementById("costo_fedex");
	let costo_output_dhl = document.getElementById("costo_dhl");

	let pais = selectElement.value;

	let costo_fedex = calculate_cost_fedex(pais, totalNumber);
	let costo_dhl = calculate_cost_dhl(pais, totalNumber);

	// console.log(selectElement.value);
	costo_output_dhl.innerHTML = costo_dhl;
	costo_output_fedex.innerHTML = costo_fedex;
})
