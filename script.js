var searchBtn = document.querySelector('.searchBtn')
var denverBtn = document.querySelector('.denverBtn')
var cityTag = document.querySelector('.cityTag')
var windTag = document.querySelector('.windTag')
var tempTag = document.querySelector('.tempTag')
var humidityTag = document.querySelector('.humidityTag')
var searchBtn = document.querySelector('.searchBtn')
var searchInput = document.querySelector('.searchInput')
var latitude;
var longitude;

searchBtn.addEventListener('click', citySearch)


function citySearch() {
    var city = searchInput.value;
    const coordinateApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f767ba75fcf16c87cbd0741a061e947`
    fetch(coordinateApi)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data);
        latitude = data.coord.lat;
        longitude = data.coord.lon;
        
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0f767ba75fcf16c87cbd0741a061e947`;
        fetch(url)
        .then((response) => response.json())
        .then(function (data) {
        cityTag.innerHTML = `CITY: ${data.name}`;
        tempTag.innerHTML = `TEMP: ${data.main.temp} DEGREES`;
        windTag.innerHTML = `WIND: ${data.wind.speed} MPH`;
        humidityTag.innerHTML = `HUMIDITY: ${data.main.humidity}%`;

    })
    }
    )}

    



