
export default function updateWeather(Weath_data){
    document.getElementById('info-img').src=`${Weath_data.current.condition.icon}`;
    document.getElementById('d_info_lab').innerHTML=`<strong>${Weath_data.current.condition.text}</strong>`;
    document.getElementById('templab').innerHTML=`<strong>Temprature</strong><br>${Weath_data.current.temp_c}°C`;
    document.getElementById('humiditylab').innerHTML=`<strong>Humidity</strong><br>${Weath_data.current.humidity} g.m-3`;
    document.getElementById('presslab').innerHTML=`<strong>Atm. Pressure</strong><br>${Weath_data.current.pressure_in} in`;
    document.getElementById('windlab').innerHTML=`<strong>Wind Speed</strong><br>${Weath_data.current.wind_kph} kph`;
    document.getElementById('loclab').innerHTML=`<strong>Location: </strong>${Weath_data.location.name}, ${Weath_data.location.region}, ${Weath_data.location.country}`;
}