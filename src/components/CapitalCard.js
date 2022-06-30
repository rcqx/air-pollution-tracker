import { useDispatch } from 'react-redux';
import { fetchApApi } from '../redux/air-pollution/fetchAPI';

const CapitalCard = ({
  imgSrc,
  country,
  capital,
  lat,
  lon,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      role="button"
      tabIndex={0}
      className="capitalCard"
      onClick={() => dispatch(fetchApApi(lat, lon))}
    >
      <img src={imgSrc} alt="" />
      <p>{`${capital}, ${country}`}</p>
    </div>
  );
};

export default CapitalCard;
