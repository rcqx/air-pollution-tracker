import america from '../images/america.png';
import Region from './Region';
import Footer from './Footer';

const Home = () => (
  <div className="wrapper">
    <div className="homeContainer">
      <img id="america" src={america} alt="american-continent" />
      <h3>America</h3>
    </div>
    <p id="stats">Search capital city by region</p>
    <div className="regionCont">
      <Region id="na" area="North America" />
      <Region id="ca" area="Central America" />
      <Region id="sa" area="South America" />
      <Region id="tc" area="The Caribbean" />
    </div>
    <Footer />
  </div>
);

export default Home;
