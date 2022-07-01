import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import CapitalCard from './CapitalCard';
import Footer from './Footer';

const DetailsNa = () => {
  const fetchNa = useSelector((state) => state.northAmerica);
  const capitalProps = [];
  const selectProps = [];

  fetchNa.forEach((item) => capitalProps.push(
    <Link key={nanoid()} to="/details_api_data">
      <CapitalCard
        key={nanoid()}
        imgSrc={item.flags}
        country={item.country}
        capital={item.capital}
        lat={item.latlng[0]}
        lon={item.latlng[1]}
      />
    </Link>,
  ));

  fetchNa.forEach((item) => selectProps.push(
    <option value={item.country}>{item.country}</option>
  ));

  return (
    <>
      <select className='filterBox' name="countries" id="pet-select">
        <option value="">--Choose an option--</option>
        {selectProps}
      </select>
      <div id="capitals" className="capitalCont">
        {capitalProps}
      </div>
      <Footer />
    </>
  );
};

export default DetailsNa;
