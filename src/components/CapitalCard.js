const CapitalCard = ({ imgSrc, country, capital }) => {
  return (
    <div className="capitalCard">
      <img src={imgSrc} alt="" />
      <p>{country}</p>
      <p>{capital}</p>
    </div>
  )
}

export default CapitalCard;
