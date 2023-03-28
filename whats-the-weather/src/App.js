import './App.css';
import Search from './components/search/Search';

import Container from 'react-bootstrap/Container';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Intro from './components/Intro';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
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
          <CurrentWeather />
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
