import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import america from '../images/america.png';
import Footer from './Footer';

const Home = () => {
  const fetchNa = useSelector((state) => state.northAmerica);
  const fetchCa = useSelector((state) => state.centralAmerica);
  const fetchSa = useSelector((state) => state.southAmerica);
  const fetchTc = useSelector((state) => state.theCaribbean);
  const na = fetchNa;
  const ca = fetchCa;
  const sa = fetchSa;
  const tc = fetchTc;

  return (
    <div className="wrapper">
      <div className="homeContainer">
        <img id="america" src={america} alt="american-continent" />
        <div className="mainTitle">
          <h1>Cities</h1>
          <p>Total: 56</p>
        </div>
      </div>
      <p id="stats">Select capital city by region</p>
      <div className="regionCont">
        <Link to="/details_north_america">
          <div role="button" tabIndex={0} className="na">{`North America ${na.length} capital cities`}</div>
        </Link>
        <Link to="/details_central_america">
          <div role="button" tabIndex={0} className="ca">{`Central America ${ca.length} capital cities`}</div>
        </Link>
        <Link to="/details_south_america">
          <div role="button" tabIndex={0} className="sa">{`South America ${sa.length} capital cities`}</div>
        </Link>
        <Link to="/details_the_caribbean">
          <div role="button" tabIndex={0} className="tc">{`The Caribbean ${tc.length} capital cities`}</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
