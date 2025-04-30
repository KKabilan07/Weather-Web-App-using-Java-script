const apikey = "Weather_API"
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".searchbox input");
const  wicon =document.querySelector(".wicon");
const searchBtn = document.querySelector(".searchbox button");

async function checkweather(city){
    console.log("Action Started");
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    console.log("Fetching...");
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    if(data.weather[0].main == "Clouds"){
        wicon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        wicon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        wicon.src="rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        wicon.src="drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        wicon.src="mist.png";
    }
    else{
        wicon.src = "snow.png";
    }
}
searchBtn.addEventListener("click", ()=>{
    if(searchbox.value == "" || searchbox.value == null){
        alert("Please enter a city");
    }
    else{
    checkweather(searchbox.value);
    searchbox.value = "";
    }
})
