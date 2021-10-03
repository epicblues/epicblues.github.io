let weatherObject = null;
class EpicLocation {
  constructor() {
    this.latitude = 0;
    this.longitude = 0;
  }
}
function getWeather() {
  return new Promise((resolve, reject) => {
    const kmsGeo = navigator.geolocation;
    let locations = new EpicLocation(); // 초기화
    if (kmsGeo !== null) {
      kmsGeo.getCurrentPosition(
        (position) => {
          locations.latitude = position.coords.latitude;
          locations.longitude = position.coords.longitude;
          resolve(locations);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}
getWeather()
  .then((locations) => {
    const lat = locations.latitude;
    const long = locations.longitude;
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=52befdc897be5ce9cb87e3d1fd0074b2`
    );
  })
  .then((data) => data.json())
  .then((json) => {
    weatherObject = json;
    document.querySelector("#weather").innerHTML = `지역 : ${json.name}<br>
    날씨 : ${json.weather[0].description}<br>
    바람 세기 : ${json.wind.speed}
    `;
    document.querySelector("#weather").style.fontSize = "1.2em";
    document.querySelector("#weather").style.fontFamily =
      '"굴림","궁서",sans-serif';
  })
  .catch(console.error);
