const API_KEY = "561f4f45988d07da29e7aa318f727924";

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    })
  );
}

function onGeoErr() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
