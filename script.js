const APIKey = "842e0ce672425128fb463dc4a383b9ab";
const apiUrl = "https://api.openweathermap.org/data/2.5/";

function searchWeather() {
    const cityInput = document.getElementById("city-input").value;

    if (cityInput) {
        getCurrentWeather(cityInput);
        getForecast(cityInput);
        addToSearchHistory(cityInput);
    }
}


function getCurrentWeather(city) {
    fetch(`${apiUrl}weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const currentWeatherElement = document.getElementById("current-weather");

            const cityName = data.name;
            const date = new Date(data.dt * 1000).toLocaleDateString();
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            const currentWeatherHTML = `
                <h2>${cityName} (${date})</h2>
                <img src="${iconUrl}" alt="Weather Icon">
                <p>Temperature: ${temperature} °C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;

            currentWeatherElement.innerHTML = currentWeatherHTML;
        })
        .catch(error => console.error("Error fetching current weather:", error));
}


function getForecast(city) {
    fetch(`${apiUrl}forecast?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const forecastElement = document.getElementById("forecast");

            // Extract and loop through the forecast data
            const forecastData = data.list.slice(0, 5); // Take the first 5 items for a 5-day forecast
            const forecastHTML = forecastData.map(item => {
                const date = new Date(item.dt * 1000).toLocaleDateString();
                const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
                const temperature = item.main.temp;
                const humidity = item.main.humidity;
                const windSpeed = item.wind.speed;

                return `
                    <div class="forecast-item">
                        <h3>${date}</h3>
                        <img src="${iconUrl}" alt="Weather Icon">
                        <p>Temperature: ${temperature} °C</p>
                        <p>Humidity: ${humidity}%</p>
                        <p>Wind Speed: ${windSpeed} m/s</p>
                    </div>
                `;
            }).join("");

            forecastElement.innerHTML = forecastHTML;
        })
        .catch(error => console.error("Error fetching forecast:", error));
}






function addToSearchHistory(city) {
    const searchHistoryElement = document.getElementById("search-history");

    const searchHistoryHTML = `
        <div class="search-history-item" onclick="searchCityFromHistory('${city}')">
            ${city}
        </div>
    `;

    searchHistoryElement.innerHTML += searchHistoryHTML;
}


// new from original
function searchCityFromHistory(city) {
    document.getElementById("city-input").value = city;
    searchWeather();
}














// var APIKey = "842e0ce672425128fb463dc4a383b9ab"