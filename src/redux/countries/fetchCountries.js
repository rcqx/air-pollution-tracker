const FETCH_API = 'air-pollution-tracker/countries/FETCH_API';
const initialState = [];
const API_KEY = 'b748e1c2a10434b969fb13060689a0a8';
const baseUrl = (lat, lon, API_KEY) => `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

export const fetchCountries = () => async (dispatch) => {
  const connect = await fetch(baseUrl(24.8091, 107.3940, API_KEY));
  const res = await connect.json().then((dataObject) => dataObject);
  dispatch({
    type: FETCH_API,
    payload: res,
  });
};

export default function reducerCountries(state = initialState, action) {
  switch (action.type) {
    case FETCH_API:
      return action.payload;
    default:
      return state;
  }
}
