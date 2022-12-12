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
    const coordinateApi = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=0f767ba75fcf16c87cbd0741a061e947`
    fetch(coordinateApi)
        .then((response) => response.json())
        .then(function (data) {
            console.log(data);
            latitude = data.coord.lat;
            longitude = data.coord.lon;
        
            cityTag.innerHTML = `CITY: ${data.name} (TODAY)`;
            tempTag.innerHTML = `TEMP: ${data.main.temp} DEGREES`;
            windTag.innerHTML = `WIND: ${data.wind.speed} MPH`;
            humidityTag.innerHTML = `HUMIDITY: ${data.main.humidity}%`;

            const url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${latitude}&lon=${longitude}&appid=0f767ba75fcf16c87cbd0741a061e947`;
            fetch(url)
                .then((response) => response.json())
                .then(function (data) {
                    console.log(data)

                    let cards = $('.forecastCards')
                    cards.removeClass('d-none')

                    let dayOneTitle = $('.dayOneTitle')
                    let dayOneTemp = $('.dayOneTemp')
                    let dayOneWind = $('.dayOneWind')
                    let dayOneHumidity = $('.dayOneHumidity')
                    dayOneTitle[0].innerHTML = `${data.list[3].dt_txt}`
                    dayOneTemp[0].innerHTML = `TEMP: ${data.list[3].main.temp} DEGREES`
                    dayOneWind[0].innerHTML = `WIND: ${data.list[3].wind.speed} MPH`
                    dayOneHumidity[0].innerHTML = `HUMIDITY: ${data.list[3].main.humidity}%`

                    let dayTwoTitle = $('.dayTwoTitle')
                    let dayTwoTemp = $('.dayTwoTemp')
                    let dayTwoWind = $('.dayTwoWind')
                    let dayTwoHumidity = $('.dayTwoHumidity')
                    dayTwoTitle[0].innerHTML = `${data.list[11].dt_txt}`
                    dayTwoTemp[0].innerHTML = `TEMP: ${data.list[11].main.temp} DEGREES`
                    dayTwoWind[0].innerHTML = `WIND: ${data.list[11].wind.speed} MPH`
                    dayTwoHumidity[0].innerHTML = `HUMIDITY: ${data.list[11].main.humidity}%`

                    let dayThreeTitle = $('.dayThreeTitle')
                    let dayThreeTemp = $('.dayThreeTemp')
                    let dayThreeWind = $('.dayThreeWind')
                    let dayThreeHumidity = $('.dayThreeHumidity')
                    dayThreeTitle[0].innerHTML = `${data.list[19].dt_txt}`
                    dayThreeTemp[0].innerHTML = `TEMP: ${data.list[19].main.temp} DEGREES`
                    dayThreeWind[0].innerHTML = `WIND: ${data.list[19].wind.speed} MPH`
                    dayThreeHumidity[0].innerHTML = `HUMIDITY: ${data.list[19].main.humidity}%`
                    
                    let dayFourTitle = $('.dayFourTitle')
                    let dayFourTemp = $('.dayFourTemp')
                    let dayFourWind = $('.dayFourWind')
                    let dayFourHumidity = $('.dayFourHumidity')
                    dayFourTitle[0].innerHTML = `${data.list[27].dt_txt}`
                    dayFourTemp[0].innerHTML = `TEMP: ${data.list[27].main.temp} DEGREES`
                    dayFourWind[0].innerHTML = `WIND: ${data.list[27].wind.speed} MPH`
                    dayFourHumidity[0].innerHTML = `HUMIDITY: ${data.list[27].main.humidity}%`
                }
                )
            }
            )
        }

var atlantaBtn = document.getElementById('atlantaBtn').addEventListener('click', premadeSearch);
var denverBtn = document.getElementById('denverBtn').addEventListener('click', premadeSearch);
var seattleBtn = document.getElementById('seattleBtn').addEventListener('click', premadeSearch);
var sanfranciscoBtn = document.getElementById('sanfranciscoBtn').addEventListener('click', premadeSearch);
var orlandoBtn = document.getElementById('orlandoBtn').addEventListener('click', premadeSearch);
var newyorkBtn = document.getElementById('newyorkBtn').addEventListener('click', premadeSearch);
var chicagoBtn = document.getElementById('chicagoBtn').addEventListener('click', premadeSearch);
var austinBtn = document.getElementById('austinBtn').addEventListener('click', premadeSearch);


function premadeSearch() {
    var city = this.innerHTML;
    const coordinateApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0f767ba75fcf16c87cbd0741a061e947`
    fetch(coordinateApi)
        .then((response) => response.json())
        .then(function (data) {
            console.log(data);
            latitude = data.coord.lat;
            longitude = data.coord.lon;

            cityTag.innerHTML = `CITY: ${data.name} (TODAY)`;
                    tempTag.innerHTML = `TEMP: ${data.main.temp} DEGREES`;
                    windTag.innerHTML = `WIND: ${data.wind.speed} MPH`;
                    humidityTag.innerHTML = `HUMIDITY: ${data.main.humidity}%`;
            const url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${latitude}&lon=${longitude}&appid=0f767ba75fcf16c87cbd0741a061e947`;
            fetch(url)
                .then((response) => response.json())
                .then(function (data) {

                    let cards = $('.forecastCards')
                    cards.removeClass('d-none')

                    let dayOneTitle = $('.dayOneTitle')
                    let dayOneTemp = $('.dayOneTemp')
                    let dayOneWind = $('.dayOneWind')
                    let dayOneHumidity = $('.dayOneHumidity')
                    dayOneTitle[0].innerHTML = `${data.list[3].dt_txt}`
                    dayOneTemp[0].innerHTML = `TEMP: ${data.list[3].main.temp} DEGREES`
                    dayOneWind[0].innerHTML = `WIND: ${data.list[3].wind.speed} MPH`
                    dayOneHumidity[0].innerHTML = `HUMIDITY: ${data.list[3].main.humidity}%`

                    let dayTwoTitle = $('.dayTwoTitle')
                    let dayTwoTemp = $('.dayTwoTemp')
                    let dayTwoWind = $('.dayTwoWind')
                    let dayTwoHumidity = $('.dayTwoHumidity')
                    dayTwoTitle[0].innerHTML = `${data.list[11].dt_txt}`
                    dayTwoTemp[0].innerHTML = `TEMP: ${data.list[11].main.temp} DEGREES`
                    dayTwoWind[0].innerHTML = `WIND: ${data.list[11].wind.speed} MPH`
                    dayTwoHumidity[0].innerHTML = `HUMIDITY: ${data.list[11].main.humidity}%`

                    let dayThreeTitle = $('.dayThreeTitle')
                    let dayThreeTemp = $('.dayThreeTemp')
                    let dayThreeWind = $('.dayThreeWind')
                    let dayThreeHumidity = $('.dayThreeHumidity')
                    dayThreeTitle[0].innerHTML = `${data.list[19].dt_txt}`
                    dayThreeTemp[0].innerHTML = `TEMP: ${data.list[19].main.temp} DEGREES`
                    dayThreeWind[0].innerHTML = `WIND: ${data.list[19].wind.speed} MPH`
                    dayThreeHumidity[0].innerHTML = `HUMIDITY: ${data.list[19].main.humidity}%`
                    
                    let dayFourTitle = $('.dayFourTitle')
                    let dayFourTemp = $('.dayFourTemp')
                    let dayFourWind = $('.dayFourWind')
                    let dayFourHumidity = $('.dayFourHumidity')
                    dayFourTitle[0].innerHTML = `${data.list[27].dt_txt}`
                    dayFourTemp[0].innerHTML = `TEMP: ${data.list[27].main.temp} DEGREES`
                    dayFourWind[0].innerHTML = `WIND: ${data.list[27].wind.speed} MPH`
                    dayFourHumidity[0].innerHTML = `HUMIDITY: ${data.list[27].main.humidity}%`

                })
        })

}

