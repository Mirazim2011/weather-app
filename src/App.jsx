import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Left from "./Components/Left/Left";
import Right from "./Components/Right/Right";
import axios from "axios";

function App() {
  const [currentWeather, getCurrentWeather] = useState(null);
  const [currentForecast, getForecast] = useState(null);
  const [air, getAir] = useState(null);
  const [city, setCity] = useState("Tashkent");

  const API_KEY = "cf1e1ceb9daf16c112144d4d6b1c8535";

  const fetchWeatherData = (cityName) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then(res => getCurrentWeather(res.data))
      .catch(err => console.error(err));

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then(res => getForecast(res.data))
      .catch(err => console.error(err));
  };

  const fetchAirData = (lat, lon) => {
    axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(res => getAir(res.data))
      .catch(err => console.error(err));
  };

  const fetchWeatherByLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            .then(res => {
              getCurrentWeather(res.data);
              setCity(res.data.name);
            })
            .catch(err => console.error(err));

          axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            .then(res => getForecast(res.data))
            .catch(err => console.error(err));

          fetchAirData(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  useEffect(() => {
    if (currentWeather) {
      const { coord } = currentWeather;
      if (coord) {
        fetchAirData(coord.lat, coord.lon);
      }
    }
  }, [currentWeather]);

  return (
    <div className="weather-app">
      <Header onCityChange={setCity} onLocationFetch={fetchWeatherByLocation} />
      <div className="box container">
        <Left currentWeather={currentWeather} currentForecast={currentForecast} />
        <Right currentForecast={currentForecast} currentWeather={currentWeather} air={air} />
      </div>
    </div>
  );
}

export default App;
