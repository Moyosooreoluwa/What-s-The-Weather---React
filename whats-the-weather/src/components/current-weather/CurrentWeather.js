import './CurrentWeather.css';
import SunnyDay from '../../images/sun.svg';

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

const CurrentWeather = ({ data }) => {
  const date = new Date().toLocaleTimeString;
  //   const date = new Date().toJSON().slice(11, 16);
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
          <img src={SunnyDay} alt="Sunny Day" />
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
        {/*
        <div className="bottom-row">
          <Row className="row-bottom-row">
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </div> */}
      </div>
    </Container>
  );
};

export default CurrentWeather;
