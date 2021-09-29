const API_KEY = `e38d50904949876297411531aa138d75
`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    setInnerText('city', temp.name);
    setInnerText('temp', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
    //set weather icon
    const icon = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`

    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', icon);
}