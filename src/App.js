import './css/App.css';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import DetailsNa from './components/DetailsNa';
import DetailsCa from './components/DetailsCa';
import DetailsSa from './components/DetailSa';
import DetailsApi from './components/DetailsApi';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details_north_america" element={<DetailsNa />} />
        <Route path="/details_central_america" element={<DetailsCa />} />
        <Route path="/details_south_america" element={<DetailsSa />} />
        <Route path="/details_api_data" element={<DetailsApi />} />
      </Routes>
    </div>
  );
}

export default App;
