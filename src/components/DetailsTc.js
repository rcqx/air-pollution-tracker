import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import CapitalCard from './CapitalCard';
import { fetchTc } from '../redux/countries/fetchData';

const DetailsTc = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const tcCities = useSelector((state) => state.theCaribbean);
  useEffect(() => {
    if (!tcCities.length) {
      dispatch(fetchTc());
    }
  }, [dispatch]);
  const filteredCountries = tcCities.filter(
    (item) => item.country.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <>
      <div className="container-input">
        <input className="filterBox" type="text" placeholder="Search by country" onChange={(e) => setSearch(e.target.value)} />
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

export default DetailsTc;
