// temperature cunt

const api_Key = 'edeacc39a53052a0a79b3ebc89a742c8';

const searchTemperature = () => {
    const inputCity = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${api_Key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const setInnerTxt = (id, text) => {
    document.getElementById(id).innerText = text;
};

const displayTemperature = temperature => {
    setInnerTxt('city', temperature.name);
    setInnerTxt('Temperature', temperature.main.temp);
    setInnerTxt('condition', temperature.weather[0].main);
    // set weather icon

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    console.log(url);
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}