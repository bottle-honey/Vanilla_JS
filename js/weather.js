const API_KEY ="d7de59c5efe4fbe800a1cad42192d482";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&Wappid=${API_KEY}`;
    
    console.log(url);
}
function onGeoError(){
    alert("can't find you.");
}

const a = navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

