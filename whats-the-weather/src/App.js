import './App.css';
import Search from './components/search/Search';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Intro from './components/Intro';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
  TIME_ZONE_API_KEY,
  TIME_ZONE_API_URL,
} from './api';
import { useEffect, useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    const fetchCurrentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const fetchWeatherForecast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const fetchTimeZone = fetch(
      `${TIME_ZONE_API_URL}/get-time-zone?key=${TIME_ZONE_API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`
    );

    Promise.all([fetchCurrentWeather, fetchWeatherForecast, fetchTimeZone])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const weatherForecastResponse = await response[1].json();
        const timeZoneResponse = await response[2].json();

        setCurrentWeather({
          city: searchData.label,
          time: timeZoneResponse.formatted,
          ...currentWeatherResponse,
        });
        setWeatherForecast({
          city: searchData.label,
          ...weatherForecastResponse,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(currentWeather);
  // console.log(currentWeather.city);

  return (
    <div>
      {' '}
      <Container>
        <div className="mt-3 mb-5 intro">
          <Intro />
        </div>
        <div className="mt-5 mb-5 searchbar">
          <div className="c-or-f">
            <ToggleButtonGroup
              type="radio"
              name="degreeOptions"
              defaultValue={1}
              className="mb-2 mt-2"
            >
              <ToggleButton
                id="celsius"
                value={1}
                variant="outline-secondary"
                className="toggle"
              >
                C
              </ToggleButton>
              <ToggleButton
                id="Farenheit"
                value={2}
                variant="outline-secondary"
                className="toggle"
              >
                F
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        <div className="mt-2 mb-2 current">
          {/* <CurrentWeather data={currentWeather} /> */}
          {currentWeather !== null && <CurrentWeather data={currentWeather} />}
        </div>
      </Container>
      <footer>
        <a href="https://iconscout.com/icons/sun" target="_blank">
          Sun Icon
        </a>{' '}
        on <a href="https://iconscout.com">IconScout</a>
      </footer>
    </div>
  );
}

export default App;
