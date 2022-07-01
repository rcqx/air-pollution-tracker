import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import CapitalCard from './CapitalCard';
import { fetchNa } from '../redux/countries/fetchData';

const DetailsNa = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const naCities = useSelector((state) => state.northAmerica);
  useEffect(() => {
    if (!naCities.length) {
      dispatch(fetchNa());
    }
  }, [dispatch]);
  const filteredCountries = naCities.filter(
    (item) => item.country.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <>
      {/* <select id="mySelect" className="filterBox" name="countries" id="pet-select">
        <option value="">--Choose an option--</option>
        {selectProps}
      </select> */}
      {/* <div id="capitals" className="capitalCont">
      {capitalProps}
    </div>
    <Footer /> */}

      <div className="container-input">
        <input className="filterBox" type="text" placeholder="Search capital by country" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div id="capitals" className="capitalCont">
        {filteredCountries.map((item) => (
          <Link key={nanoid()} to="/details_api_data">
            <CapitalCard
              key={nanoid()}
              imgSrc={item.flags}
              country={item.country}
              capital={item.capital}
              lat={item.latlng[0]}
              lon={item.latlng[1]}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default DetailsNa;
