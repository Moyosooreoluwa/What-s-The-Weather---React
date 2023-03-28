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

const CurrentWeather = () => {
  return (
    <Container className="weather-container">
      <div className="weather-card">
        <div className="top-row">
          <p className="city">
            {' '}
            <FontAwesomeIcon icon={faLocationDot} /> Gotham
          </p>{' '}
          <p className="date-today">Today, 12:32 PM</p>
        </div>
        <div className="icon">
          <img src={SunnyDay} alt="Sunny Day" />
        </div>
        <p className="description">Mostly Clear</p>
        <Row>
          <Col>
            <div className="bottom-left">
              <p id="pressure" className="details">
                <FontAwesomeIcon icon={faGaugeSimple} /> 720hpa
              </p>
              <p id="humidity" className="details">
                <FontAwesomeIcon icon={faDroplet} /> 32%
              </p>
              <p id="wind" className="details">
                <FontAwesomeIcon icon={faWind} /> 12km/h
              </p>
            </div>
          </Col>

          <Col>
            <h1 className="temp">20°</h1>
            <p className="feels-like">Feels Like: 20°</p>
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
