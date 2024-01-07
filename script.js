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
            // Handle the current weather data and update the #current-weather element
        })
        .catch(error => console.error("Error fetching current weather:", error));
}





function getForecast(city) {
    fetch(`${apiUrl}forecast?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Handle the forecast data and update the #forecast element
        })
        .catch(error => console.error("Error fetching forecast:", error));
}









function addToSearchHistory(city) {
    // Update the #search-history element with the new search
}

// Add more functions to handle UI updates based on the fetched data








// var APIKey = "842e0ce672425128fb463dc4a383b9ab"