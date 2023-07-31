// first, require the dotenv pakage's config file.


// require('dotenv').config();




//put the secret key in a variable, then test access 

// 7f173df152a78e503d99104a7417cc2f 
// https://api.openweathermap.org/data/2.5/weather?q=austin&appid=7f173df152a78e503d99104a7417cc2f&units=imperial 


// const apiKey = process.env.API_SECRET_KEY;
//console.log(api_key)

const apiKey  = ""

const getPosts = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${apiKey}`)
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      } return res.json()
    })
    .then(posts => arrayOfPosts = posts)
    .catch(err => console.log(`Error,  ${err}`))
  }


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        const weather = data.weather[0].main;

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " mph";


        if(weather == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(weather == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(weather == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(weather == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(weather == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(weather == "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
