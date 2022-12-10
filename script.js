var searchBtn = document.querySelector('.searchBtn')
var denverBtn = document.querySelector('.denverBtn')
var cityTag = document.querySelector('.cityTag')
var searchBtn = document.querySelector('.searchBtn')
const url = `https://api.openweathermap.org/data/2.5/weather?lat=39.742043&lon=-104.991531&appid=0f767ba75fcf16c87cbd0741a061e947`;

// searchBtn.addEventListener('click', citySearch)
denverBtn.addEventListener('click', cityDenver)


function cityDenver() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data)
    )
}
cityTag.innerHTML = `CITY: ${data.name}`;