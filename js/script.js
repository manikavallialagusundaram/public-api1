async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '6aca2961f834d09b34a7c85f3a0af061';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    document.getElementById('weather').innerText = `Temperature: ${data.main.temp}°C,Weather: ${data.weather[0].description}`;
}