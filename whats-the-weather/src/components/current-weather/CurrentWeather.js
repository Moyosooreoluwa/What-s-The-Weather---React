import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faWind,
  faDroplet,
  faGaugeSimple,
} from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CurrentWeather.css';
import SunnyDay01d from '../../images/01d.svg';
import ClearNight01n from '../../images/01n.svg';
import CloudyDay02d from '../../images/02d.svg';
import CloudyNight02n from '../../images/02n.png';
import ScatteredClouds03d from '../../images/03d.png';
import ScatteredClouds03n from '../../images/03n.png';
import BrokenClouds04d from '../../images/04d.png';
import BrokenClouds04n from '../../images/04n.png';
import Drizzle09d from '../../images/09d.png';
import Drizzle09n from '../../images/09n.png';
import Rain10d from '../../images/10d.png';
import Rain10n from '../../images/10n.png';
import Thunderstorm11d from '../../images/11d.png';
import Thunderstorm11n from '../../images/11n.png';
import Snow13d from '../../images/13d.png';
import Snow13n from '../../images/13n.png';
import Mist50d from '../../images/50d.png';
import Mist50n from '../../images/50n.png';

const CurrentWeather = ({ data }) => {
  return (
    <Container className="weather-container">
      <div className="weather-card">
        <div className="top-row">
          <p className="city">
            {' '}
            <FontAwesomeIcon icon={faLocationDot} /> {data.city}
          </p>{' '}
          <p className="date-today">Today, {data.time.substring(11, 16)}</p>
        </div>
        <div className="icon">
          {data.weather.icon === '01d' && (
            <img src={SunnyDay01d} alt="Sunny Day" />
          )}
          {data.weather[0].icon === '01n' && (
            <img src={ClearNight01n} alt="Clear Night" />
          )}
          {data.weather[0].icon === '02d' && (
            <img src={CloudyDay02d} alt="Cloudy Day" />
          )}
          {data.weather[0].icon === '02n' && (
            <img src={CloudyNight02n} alt="Cloudy Night" />
          )}
          {data.weather[0].icon === '03d' && (
            <img src={ScatteredClouds03d} alt="Scattered Clouds Day" />
          )}
          {data.weather[0].icon === '03n' && (
            <img src={ScatteredClouds03n} alt="Scattered Clouds Night" />
          )}
          {data.weather[0].icon === '04d' && (
            <img src={BrokenClouds04d} alt="Broken Clouds Day" />
          )}
          {data.weather[0].icon === '04n' && (
            <img src={BrokenClouds04n} alt="Broken Clouds Night" />
          )}
          {data.weather[0].icon === '09d' && (
            <img src={Drizzle09d} alt="Drizzle Day" />
          )}
          {data.weather[0].icon === '09n' && (
            <img src={Drizzle09n} alt="Drizzle Night" />
          )}
          {data.weather[0].icon === '10d' && (
            <img src={Rain10d} alt="Rainy Day" />
          )}
          {data.weather[0].icon === '10n' && (
            <img src={Rain10n} alt="Rainy Night" />
          )}
          {data.weather[0].icon === '11d' && (
            <img src={Thunderstorm11d} alt="Thunderstorm Day" />
          )}
          {data.weather[0].icon === '11n' && (
            <img src={Thunderstorm11n} alt="Thunderstorm Night" />
          )}
          {data.weather[0].icon === '13d' && (
            <img src={Snow13d} alt="Snowy Day" />
          )}
          {data.weather[0].icon === '13n' && (
            <img src={Snow13n} alt="Snowy Night" />
          )}
          {data.weather[0].icon === '50d' && (
            <img src={Mist50d} alt="Misty Day" />
          )}
          {data.weather[0].icon === '50n' && (
            <img src={Mist50n} alt="Misty Night" />
          )}
        </div>
        <p className="description">{data.weather[0].description}</p>
        <Row>
          <Col>
            <div className="bottom-left">
              <p id="pressure" className="details">
                <FontAwesomeIcon icon={faGaugeSimple} /> {data.main.pressure}{' '}
                hPa
              </p>
              <p id="humidity" className="details">
                <FontAwesomeIcon icon={faDroplet} /> {data.main.humidity} %
              </p>
              <p id="wind" className="details">
                <FontAwesomeIcon icon={faWind} /> {data.wind.speed} m/s
              </p>
            </div>
          </Col>

          <Col>
            <h1 className="temp">{Math.round(data.main.temp)}°</h1>
            <p className="feels-like">
              Feels Like: {Math.round(data.main.feels_like)}°
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CurrentWeather;
