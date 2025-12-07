function showweatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById('city').value;
  const apiKey = 'YOUR_KEY';

  // Gebruik city, NIET lat/lon
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Het ophalen van het weer is mislukt. Probeer het opnieuw.</p>`;
    });
}

function showweatherDetails2(event) {
  event.preventDefault();

  const lat = document.getElementById('lat').value;
  const lon = document.getElementById('lon').value;
  const apiKey = 'YOUR_KEY';

  // Gebruik lat/lon, NIET city
  const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(apiUrl2)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Het ophalen van het weer is mislukt. Probeer het opnieuw.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
document.getElementById('weatherForm2').addEventListener('submit', showweatherDetails2);
