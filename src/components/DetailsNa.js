import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import CapitalCard from './CapitalCard';
import Footer from './Footer';

const DetailsNa = () => {
  const fetchNa = useSelector((state) => state.northAmerica);
  const capitalProps = [];

  fetchNa.forEach((item) => capitalProps.push(
    <CapitalCard
      key={nanoid()}
      imgSrc={item.flags}
      country={item.country}
      capital={item.capital}
      lat={item.latlng[0]}
      lon={item.latlng[1]}
    />,
  ));
  return (
    <>
      <div className="capitalCont">
        {capitalProps}
      </div>
      <Footer />
    </>
  );
};

export default DetailsNa;
