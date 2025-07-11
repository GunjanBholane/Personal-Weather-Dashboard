// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Weather() {
//   const [city, setCity] = useState('');
//   const [lat, setLat] = useState('');
//   const [lon, setLon] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   // 🧠 Load saved values on first render
//   useEffect(() => {
//     const savedCity = localStorage.getItem('weather_city');
//     const savedLat = localStorage.getItem('weather_lat');
//     const savedLon = localStorage.getItem('weather_lon');

//     if (savedCity) setCity(savedCity);
//     if (savedLat) setLat(savedLat);
//     if (savedLon) setLon(savedLon);

//     if (savedCity || (savedLat && savedLon)) {
//       fetchWeather(savedCity, savedLat, savedLon);
//     }
//   }, []);

//   const fetchWeather = async (inputCity = city, inputLat = lat, inputLon = lon) => {
//     setError('');
//     setWeather(null);

//     try {
//       const apiKey = 'paste your key'; // ← Replace with your key
//       let url = '';

//       const latNum = parseFloat(inputLat);
//       const lonNum = parseFloat(inputLon);
//       const hasValidCoords = !isNaN(latNum) && !isNaN(lonNum);
//       const hasCity = inputCity?.trim() !== '';

//       if (hasCity) {
//         url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${api}&units=metric`;
//       } else if (hasValidCoords) {
//         url = `https://api.openweathermap.org/data/2.5/weather?lat=${latNum}&lon=${lonNum}&appid=${api}&units=metric`;
//       } else {
//         setError('Please enter a city or valid coordinates.');
//         return;
//       }

//       const response = await axios.get(url);
//       setWeather(response.data);

//       // 💾 Save user input for future use
//       localStorage.setItem('weather_city', inputCity || '');
//       localStorage.setItem('weather_lat', inputLat || '');
//       localStorage.setItem('weather_lon', inputLon || '');
//     } catch (err) {
//       setError('Could not retrieve weather. Please check inputs.');
//       console.error(err);
//     }
//   };

//   const useCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       setError('Geolocation not supported.');
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latVal = position.coords.latitude.toFixed(4);
//         const lonVal = position.coords.longitude.toFixed(4);
//         setLat(latVal);
//         setLon(lonVal);
//         setCity('');
//         fetchWeather('', latVal, lonVal);
//       },
//       () => setError('Location access denied or unavailable.')
//     );
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
//       <h2>Weather Forecast ⛅</h2>

//       <button onClick={useCurrentLocation}>Use My Location 📍</button>
//       <p>or enter manually:</p>

//       <input
//         type="text"
//         placeholder="City"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Latitude"
//         value={lat}
//         onChange={(e) => setLat(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Longitude"
//         value={lon}
//         onChange={(e) => setLon(e.target.value)}
//       />

//       <br /><br />
//       <button onClick={() => fetchWeather()}>Get Weather</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {weather && (
//         <div style={{ marginTop: '20px', backgroundColor: 'black', padding: '10px' }}>
//           <h3>🌆 {weather.name}</h3>
//           <p>🌡️ Temp: {weather.main.temp} °C</p>
//           <p>💧 Humidity: {weather.main.humidity}%</p>
//           <p>🌬️ Wind: {weather.wind.speed} m/s</p>
//           <p>🌫️ Condition: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Weather() {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  // 🔒 Redirect if not authenticated
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please login to access weather.');
      navigate('/login');
    } else {
      const savedCity = localStorage.getItem('weather_city');
      const savedLat = localStorage.getItem('weather_lat');
      const savedLon = localStorage.getItem('weather_lon');
      if (savedCity || (savedLat && savedLon)) {
        fetchWeather(savedCity, savedLat, savedLon);
      }
    }
  }, [navigate]);

  const fetchWeather = async (inputCity = city, inputLat = lat, inputLon = lon) => {
    setError('');
    setWeather(null);

    try {
      const apiKey = '1895f917350c93f9b2eea498b4ba6e0d';
      let url = '';

      const latNum = parseFloat(inputLat);
      const lonNum = parseFloat(inputLon);
      const hasValidCoords = !isNaN(latNum) && !isNaN(lonNum);
      const hasCity = inputCity?.trim() !== '';

      if (hasCity) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
      } else if (hasValidCoords) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latNum}&lon=${lonNum}&appid=${apiKey}&units=metric`;
      } else {
        setError('Please enter a city or valid coordinates.');
        return;
      }

      const response = await axios.get(url);
      setWeather(response.data);

      // 💾 Save for reuse
      localStorage.setItem('weather_city', inputCity || '');
      localStorage.setItem('weather_lat', inputLat || '');
      localStorage.setItem('weather_lon', inputLon || '');
    } catch (err) {
      setError('Could not retrieve weather. Check your inputs.');
      console.error(err);
    }
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latVal = position.coords.latitude.toFixed(4);
        const lonVal = position.coords.longitude.toFixed(4);
        setLat(latVal);
        setLon(lonVal);
        setCity('');
        fetchWeather('', latVal, lonVal);
      },
      () => setError('Location access denied.')
    );
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2> Personal Weather Dashboard </h2>

      <h2>Check Weather Forecast ⛅</h2>
      <button onClick={useCurrentLocation}>Use My Location 📍</button>
      <p>or enter manually:</p>

      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
      <input type="text" placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} />
      <input type="text" placeholder="Longitude" value={lon} onChange={(e) => setLon(e.target.value)} />
      <br /><br />
      <button onClick={() => fetchWeather()}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div style={{ marginTop: '20px', backgroundColor: 'black', padding: '10px' }}>
          <h3>🌆 {weather.name}</h3>
          <p>🌡️ Temp: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind: {weather.wind.speed} m/s</p>
          <p>🌫️ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
