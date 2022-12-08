var searchBtn = document.querySelector('.searchBtn')
const url = `https://api.openweathermap.org/data/2.5/weather?lat={39.742043}&lon={-104.991531}&appid=202f47e2a9f5284ca038475e5bd1cccd}`

searchBtn.addEventListener('click', citySearch)

function citySearch() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data)
    )}