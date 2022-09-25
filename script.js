let city = "Kyiv";
let token = ""; //user

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ token }`)
	.then(function(resp) { return resp.json()})
	.then(function(data) {
		console.log(data);
		document.querySelector(".kyiv .city").textContent += data.name;
		document.querySelector(".kyiv .temperature").innerHTML += Math.round(data.main.temp - 273) + `&deg;`;
		document.querySelector(".kyiv .feelslike").innerHTML += Math.round(data.main.feels_like - 273) + `&deg;`;;
		document.querySelector(".kyiv .clouds").textContent += data.weather[0]['description'];
	})
	.catch(function() {

	})