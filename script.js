const apikey = "743e9414e68a5de88a79b59d34172390" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const responce = await fetch(apiUrl + city +  `&appid=${apikey}`);

    if(responce.status== 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await responce.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.scr = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.scr = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.scr = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.scr = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.scr = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
