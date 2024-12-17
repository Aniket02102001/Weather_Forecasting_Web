document.getElementById('getWeather').addEventListener('click', function() {
    let city = document.getElementById('city').value;

    // Check if the user has entered a city name
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // API Key and URL
    const apiKey = '5804019f8d907fa4f14d1c19177873a7'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch the weather data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }
            displayWeather(data);
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}