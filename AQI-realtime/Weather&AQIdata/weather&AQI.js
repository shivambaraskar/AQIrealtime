import updateWeather from "./weatherData.js";
import updateAQIinfo from "./AQIdata.js";
import updateTable from "./gasCompTable.js";
import updateGraph from "./generateGraph.js";

let APIkey1='a88436ffa1bd4bbe909134937230406';
let APIurl1='http://api.weatherapi.com/v1/current.json?';
let APIkey2='ffTWyLE6Mr542/Z+wjz+JA==j0V3syq24u5yFgLt';
let APIurl2='https://api.api-ninjas.com/v1/airquality?';

async function gatherData(cityName){
    const response1 = await fetch(APIurl1+`key=${APIkey1}&q=${cityName}&aqi=yes`);
    let Weath_data = await response1.json();
    const response2 = await fetch(APIurl2+`city=${cityName}`, {method: 'GET', headers: {'X-Api-Key': `${APIkey2}`}});
    let Air_data = await response2.json();
    console.log(Weath_data);
    console.log(Air_data);
    updateWeather(Weath_data);
    updateTable(Air_data, Weath_data);
    updateAQIinfo(Air_data);
    updateGraph(Weath_data, Air_data);
}

function getCity() {
    let city = document.getElementById('location');
    console.log('City: '+ city.value);
    gatherData(city.value);
}

window.getCity=getCity;
window.onload=gatherData("Bhopal");
document.getElementById('location').addEventListener("change", getCity);