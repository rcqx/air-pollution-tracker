import { useSelector } from 'react-redux';
import CapitalCard from './CapitalCard';

const DetailsNa = () => {
  const fetchNa = useSelector((state) => state.northAmerica);
  const capitalProps = [];

  fetchNa.forEach((item) => capitalProps.push(
    <CapitalCard
      imgSrc={item.flags}
      country={item.country}
      capital={item.capital}
    />,
  ));
  return (
    <div>
      {capitalProps}
    </div>
  );
};

export default DetailsNa;
