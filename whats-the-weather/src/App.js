import './App.css';
import Search from './components/search/search';

import Container from 'react-bootstrap/Container';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <Container>
      <div className="mt-5 mb-5 searchbar">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </Container>
  );
}

export default App;
