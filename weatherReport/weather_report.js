function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    
    const apiKey = "561670715c5c7ad0f065240d22d221bb";
    const apiURLCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const apiURLCords = `https://api.openweathermap.org/data/2.5/weather?lat=
    {lat}&lon=(lon}&appid=(API key}`;


    fetch(apiURLCity)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather: ', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    })

    fetch(apiURLCords)
    .then(response => response.json())
    .then(data => {
        const weatherInfoCords = document.getElementById('weatherInfoCords');
        weatherInfoCords.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Longitude: ${data.coord.lon}</p>
            <p>Latitude: ${data.coord.lat}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather: ', error);
        const weatherInfoCords = document.getElementById('weatherInfoCords');
        weatherInfoCords.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });

}


document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
