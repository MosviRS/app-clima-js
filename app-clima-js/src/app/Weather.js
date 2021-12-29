export class Weather{
    
    constructor(city,code){
        this.apiKey='b68a2c92f1e928c4c1ee7f08a00aed31'
        this.city=city;
        this.code=code;
    }

    async getWeather(){
        const URI=`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.code}&units=metric&appid=${this.apiKey}`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
    setParameters(city,code,icon){
        this.city=city;
        this.code=code;
    }

}