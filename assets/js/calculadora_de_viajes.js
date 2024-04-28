
let map; let directionsService; let directionsRenderer, input_1_ac, input_2_ac, input_3_ac, input_4_ac, input_5_ac, dolar_oficial, recorrido;

function initMap() {

	google.maps.event.addDomListener(window, "load", () => {

		let options = {
			formatted_address: "Fitz Roy 201, C1414 Cdad. Autónoma de Buenos Aires, Argentina",
			geometry: {
				"location": {
					"lat": -34.5965912,
					"lng": -58.4517827
				},
				"viewport": {
					"south": -34.59789593029149,
					"west": -58.45318218029151,
					"north": -34.59519796970849,
					"east": -58.4504842197085
				}
			},
			name: "Fitz Roy 201",

		}

		input_1_ac = new google.maps.places.Autocomplete(document.getElementById("primer-direccion"));
		input_2_ac = new google.maps.places.Autocomplete(document.getElementById("segunda-direccion"));
		input_3_ac = new google.maps.places.Autocomplete(document.getElementById("tercera-direccion"));
		input_4_ac = new google.maps.places.Autocomplete(document.getElementById("cuarta-direccion"));
		input_5_ac = new google.maps.places.Autocomplete(document.getElementById("quinta-direccion"));
	});


	map = new google.maps.Map(document.getElementById("map"), { center: { lat: 39.7392, lng: -104.9903 }, zoom: 3, });

	directionsService = new google.maps.DirectionsService();
	directionsRenderer = new google.maps.DirectionsRenderer();


	directionsRenderer.setMap(map);

	fetch("https://dolarapi.com/v1/dolares/oficial")
		.then(response => response.json())
		.then(data => dolar_oficial = data.venta);
}

function agregar_input() { }

function printPlace() {
	let i1 = input_1_ac.getPlace().geometry.location;
	let i2 = input_2_ac.getPlace().geometry.location;
	console.log(i1.lng());
	console.log(i1.lat());
	console.log(i2.lng());
	console.log(i2.lat());
	console.log(i1.lng() - i2.lng());
	console.log(input_1_ac.getPlace())
}

function formula_costos(utilitario, km_zona_1, km_zona_2, explosivos) {
	const ZONA_1_UTILITARIOS_CHICO = 0.94;
	const ZONA_1_UTILITARIOS_MEDIANO = 1.34;
	const ZONA_1_CONDUCTOR_ADICIONAL = 0.43;

	const ZONA_2_UTILITARIOS_CHICO = 1.03;
	const ZONA_2_UTILITARIOS_MEDIANO = 1.43;
	const ZONA_2_CONDUCTOR_ADICIONAL = 0.52;

	let costo = 0;

	if (utilitario === "C") {
		costo += km_zona_1 * ZONA_1_UTILITARIOS_CHICO + km_zona_2 * ZONA_2_UTILITARIOS_CHICO
	} else if (utilitario === "M") {
		costo += km_zona_1 * ZONA_1_UTILITARIOS_MEDIANO + km_zona_2 * ZONA_2_UTILITARIOS_MEDIANO
	}

	if (explosivos) {
		costo += km_zona_1 * ZONA_1_CONDUCTOR_ADICIONAL + km_zona_2 * ZONA_2_CONDUCTOR_ADICIONAL;
	}

	return costo;

}

function calcular_distancia() {

	var iv1 = document.getElementById("primer-direccion").value;
	var iv2 = document.getElementById("segunda-direccion").value;
	var iv3 = document.getElementById("tercera-direccion").value;
	var iv4 = document.getElementById("cuarta-direccion").value;
	var iv5 = document.getElementById("quinta-direccion").value;

	const waypoints = [];
	recorrido = [];

	// Add non-empty waypoints to the waypoints array
	if (iv1) {
		console.log("Adding waypoint for input 1");
		let i1 = input_1_ac.getPlace().geometry.location;
		waypoints.push({
			location: new google.maps.LatLng(i1.lat(), i1.lng()),
			stopover: true
		});
	} else {
		console.log("Input 1 is empty");
	}

	if (iv2) {
		console.log("Adding waypoint for input 2");
		let i2 = input_2_ac.getPlace().geometry.location;
		waypoints.push({
			location: new google.maps.LatLng(i2.lat(), i2.lng()),
			stopover: true
		});
	} else {
		console.log("Input 2 is empty");
	}

	if (iv3) {
		console.log("Adding waypoint for input 3");
		let i3 = input_3_ac.getPlace().geometry.location;
		waypoints.push({
			location: new google.maps.LatLng(i3.lat(), i3.lng()),
			stopover: true
		});
		recorrido.push(input_3_ac.getPlace().address_components[0].long_name);

	} else {
		console.log("Input 3 is empty");
	}

	if (iv4) {
		console.log("Adding waypoint for input 4");
		let i4 = input_4_ac.getPlace().geometry.location;
		waypoints.push({
			location: new google.maps.LatLng(i4.lat(), i4.lng()),
			stopover: true
		});
		recorrido.push(input_4_ac.getPlace().address_components[0].long_name);
	} else {
		console.log("Input 4 is empty");
	}

	if (iv5) {
		console.log("Adding waypoint for input 5");
		let i5 = input_5_ac.getPlace().geometry.location;
		waypoints.push({
			location: new google.maps.LatLng(i5.lat(), i5.lng()),
			stopover: true
		});
		recorrido.push(input_5_ac.getPlace().address_components[0].long_name);
	} else {
		console.log("Input 5 is empty");
	}

	const request = {
		origin: waypoints[0].location,
		destination: waypoints[1].location,
		waypoints: waypoints.slice(2),
		optimizeWaypoints: false,
		travelMode: google.maps.TravelMode.DRIVING,
	};

	directionsService.route(request, function (response, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			directionsRenderer.setDirections(response);
			var northernDistance = 0;
			var southernDistance = 0;
			var totalDistance = 0;
			var referenceLatitude = -39; // Your reference latitude

			var legs = response.routes[0].legs;
			for (var i = 0; i < legs.length; i++) {
				var leg = legs[i];
				var steps = leg.steps;

				for (var j = 0; j < steps.length; j++) {
					var step = steps[j];
					totalDistance += step.distance.value;

					var midLatitude = (step.start_location.lat() + step.end_location.lat()) / 2;
					if (midLatitude > referenceLatitude) {
						northernDistance += step.distance.value;
					} else {
						southernDistance += step.distance.value;
					}
				}
			}

			// Get the current date and time in UTC format
			const utcDate = new Date();

			// Convert UTC to -3 GMT (Greenwich Mean Time)
			const gmtMinus3Date = new Date(utcDate.getTime() - (3 * 60 * 60 * 1000)); // Convert hours to milliseconds

			// Format the date and time in dd/mm/yyyy HH:MM:SS format
			const formattedDate = utcDate.toLocaleDateString('es-AR', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				// second: '2-digit',
			});

			document.getElementById('hora').innerHTML = formattedDate;

			// Convert meters to kilometers and update output
			northernDistance = northernDistance / 1000;
			southernDistance = southernDistance / 1000;
			totalDistance = totalDistance / 1000;

			document.getElementById('output-distancia').innerHTML = Math.ceil(totalDistance) + " km";

			document.getElementById('output-zona-1').innerHTML = Math.ceil(northernDistance) + " km";

			document.getElementById('output-zona-2').innerHTML = Math.ceil(southernDistance) + " km";

			const utilitarioRadio = document.querySelector('input[name="utilitario"]:checked'); // Select checked radio for "fav_language"
			const explosivoRadio = document.querySelector('input[name="explosivo"]:checked'); // Select checked radio for "explosivo"



			let recorrido_string = recorrido.join(" -> ");

			document.getElementById('recorrido').innerHTML = recorrido_string;

			let utilitario = utilitarioRadio.value;
			let explosivo = explosivoRadio.value === "Si";

			// console.log("Explosivo: " + explosivo);

			let costo_dolares = formula_costos(utilitario, northernDistance, southernDistance, explosivo);
			let costo_pesos = (dolar_oficial * costo_dolares);

			let choferes = 1;

			if (explosivo) {
				choferes = 2
			}

			document.getElementById('choferes').innerHTML = choferes;

			document.getElementById('costo-dolares').innerHTML = Math.ceil(costo_dolares) + " USD + IVA";

			document.getElementById('tipo-de-cambio').innerHTML = dolar_oficial + " pesos";

			document.getElementById('costo-pesos').innerHTML = Math.ceil(costo_pesos) + " USD + IVA";

		} else {
			console.error("Directions request failed. Status:", status);
		}
	});
}