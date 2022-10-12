
export const  getData = async(lat,long,unit)=>{

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${unit}&appid=fd422b1cdb755d8155abcd648cc4824a`;
    const resp = await fetch(url);
    const {weather,main,wind} = await resp.json();
    const icon = "https://openweathermap.org/img/w/" 

    const datos = [
        {
            temp:main.temp,
            main:weather[0].main,
            description:weather[0].description,
            feelLikes:main.feels_like,
            pressure:main.pressure,
            humidity:main.humidity,
            speed:wind.speed,
            urlIcon:icon + weather[0].icon + '.png'
        }
    ]
    
    
    return datos;
    

}