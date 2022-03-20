const API_KEY ="d7de59c5efe4fbe800a1cad42192d482";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `현재 온도 : ${data.main.temp} 날씨 : ${data.weather[0].main}`;

    });
}
function onGeoError(){
    alert("can't find you.");
}

const a = navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

