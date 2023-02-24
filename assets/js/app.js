const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b2cc33427msh0b8b0593ceba5c6p1a5d78jsn0a03004a58d4',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
let search = document.getElementById("search");
let btn = document.getElementById("btn");

let cloudy = document.getElementById("cloudy");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let rain = document.getElementById("rain");
let degrees = document.getElementById("degrees");
let country = document.getElementById("country");
let icon = document.getElementById("icon");
let condition = document.getElementById("condition");
let date = document.getElementById("date");

function details(){
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${search.value}&dt=2023-1-22`, options)
	.then(response => response.json())
	.then((response) =>{
        cloudy.innerHTML = response.current.cloud + "%";
        humidity.innerHTML = response.current.humidity + "%";
        wind.innerHTML = response.current.wind_kph + "km/h";
        rain.innerHTML = response.current.precip_mm + "mm";
        degrees.innerHTML = Math.trunc(response.current.feelslike_c ) + "°";
        country.innerHTML = response.location.country;
        date.innerHTML = response.current.last_updated;
        icon.src = response.current.condition.icon;
        condition.innerHTML = response.current.condition.text;
        console.log(response.current);
    } )
	.catch(err => console.error(err));
    search.value = " ";
}





btn.addEventListener("click",details)