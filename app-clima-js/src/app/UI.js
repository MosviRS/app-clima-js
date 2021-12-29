export class UI{
    constructor(){
        this.weather_location=document.getElementById('weather-location');
        this.weather_description=document.getElementById('weather-description');
        this.weather_string=document.getElementById('weather-string');
        this.weather_humidity=document.getElementById('weather-humidity');
        this.weather_wind=document.getElementById('weather-wind');
        this.weather_icon=document.getElementById('weather-icon');
        this.uriIcon='http://openweathermap.org/img/w/';
    }
    render(dataWeather){
        this.weather_location.textContent=dataWeather.name + ' / '+ dataWeather.sys.country;
        this.weather_description.textContent=dataWeather.weather[0].description;
        this.weather_string.textContent=dataWeather.main.temp+' °C';
        this.weather_humidity.textContent='Himidity: ' + dataWeather.main.humidity + '%';
        this.weather_wind.textContent='Weather '+ dataWeather.wind.speed+ ' m/s';
        this.weather_icon.src=this.uriIcon + dataWeather.weather[0].icon +'.png'
    }
}