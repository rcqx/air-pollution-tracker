import america from '../images/america.png';
// import Country from './Country';

const Home = () => (
  <div>
    <div className="homeContainer">
      <img id="america" src={america} alt="american-continent" />
      <h3>America</h3>
    </div>
    <p id="stats">STATS BY COUNTRY</p>
    {/* <Country country={Mexico} /> */}
  </div>
);

export default Home;
