import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const DetailsApi = () => {
  const res = useSelector((state) => state.apApi);

  const resProps = [];
  res.forEach((item) => resProps.push(
    <div key={nanoid()} className="apCont">
      <div className="co">
        <p>Carbon monoxide (co)</p>
        <h1>{item.co}</h1>
      </div>
      <div className="co">
        <p>Nitrogen monoxide (no)</p>
        <h1>{item.no}</h1>
      </div>
      <div className="co">
        <p>Nitrogen dioxide (no2)</p>
        <h1>{item.no2}</h1>
      </div>
      <div className="co">
        <p>Concentration of ozone (o3)</p>
        <h1>{item.o3}</h1>
      </div>
      <div className="co">
        <p>Sulphur dioxide (sO2)</p>
        <h1>{item.so2}</h1>
      </div>
      <div className="co">
        <p>Particulate matter (pm10)</p>
        <h1>{item.pm10}</h1>
      </div>
      <div className="co">
        <p>Amonia (nh3)</p>
        <h1>{item.nh3}</h1>
      </div>
    </div>,
  ));
  return (
    <div className="apCont">
      {resProps}
    </div>
  );
};

export default DetailsApi;
