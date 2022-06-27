import './css/App.css'
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
