var searchBtn = document.querySelector('.searchBtn')
const url = `api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={0f767ba75fcf16c87cbd0741a061e947
}`
searchBtn.addEventListener('click', citySearch)

function citySearch() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data)
    )}