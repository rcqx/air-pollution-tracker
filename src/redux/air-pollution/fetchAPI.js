const FETCH_AP_API = 'air-pollution-tracker/air-pollution/FETCH_AP_API';
const initialState = [];

export const fetchApApi = (lat, lon) => async (dispatch) => {
  const connect = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=b748e1c2a10434b969fb13060689a0a8`);
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.list.map((item) => {
    const container = {
      co: item.components.co,
      no: item.components.no,
      no2: item.components.no2,
      o3: item.components.o3,
      so2: item.components.so2,
      pm2: item.components.pm2,
      pm10: item.components.pm10,
      nh3: item.components.nh3,
    };
    return container;
  });
  dispatch({
    type: FETCH_AP_API,
    payload: dataArray,
  });
};

export function reducerApApi(state = initialState, action) {
  switch (action.type) {
    case FETCH_AP_API:
      return action.payload;
    default:
      return state;
  }
}
