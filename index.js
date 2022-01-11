var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.cloudy');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changWeatherUI(capitalSearch) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=6a6f50f147ef7a35d028db5a6ae242c1`;
    const response = await fetch(url);
    const data = await response.json();

    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + 'm';
    wind.innerText = data.wind.speed + 'm/s';
    sun.innerText = data.main.humidity + '%';
    let temp = Math.floor(data.main.temp - 273.14);
    value.innerText = temp;
    shortDesc.innerText = data.weather[0].main;
    time.innerText = new Date().toLocaleString('vi');

    body.setAttribute('classs', 'spring');

    if (temp <= 23) {
      body.setAttribute('class', 'autum');
    }
    if (temp <= 15) {
      body.setAttribute('class', 'winter');
    }
  } catch (error) {
    console.log(error);
  }
}
// changWeatherUI();

search.addEventListener('keypress', function (e) {
  if (e.code === 'Enter') {
    let capitalSearch = search.value.trim();
    changWeatherUI(capitalSearch);
  }
});

changWeatherUI('Hue');
