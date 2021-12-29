const {Weather} = require('./Weather');
const {UI} = require('./UI');
const {Store} = require('./Store');


require('./index.css');
const store= new Store();
const {city,countryCode}=store.getLocationData();
const weather = new Weather(city,countryCode);
const ui = new UI();
async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
    
  }
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city=document.getElementById('city').value;
    const countrycode=document.getElementById('countryCode').value;
    weather.setParameters(city,countrycode);
    store.setLocationData(city,countrycode);
    fetchWeather();
});
document.addEventListener('DOMContentLoaded', fetchWeather);