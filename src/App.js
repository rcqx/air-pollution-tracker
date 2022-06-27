import './css/App.css';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
