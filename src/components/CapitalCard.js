import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
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
      onKeyDown={() => dispatch(fetchApApi(lat, lon))}
    >
      <img src={imgSrc} alt="" />
      <p>{`${capital}, ${country}`}</p>
    </div>
  );
};

CapitalCard.propTypes = {
  imgSrc: PropTypes.string,
  country: PropTypes.string,
  capital: PropTypes.string,
  lat: PropTypes.number,
  lon: PropTypes.number,
};

export default CapitalCard;
