const FETCH_NA = 'air-pollution-tracker/cities/FETCH_NA';
const FETCH_CA = 'air-pollution-tracker/cities/FETCH_CA';
const FETCH_SA = 'air-pollution-tracker/cities/FETCH_SA';
const FETCH_TC = 'air-pollution-tracker/cities/FETCH_TC';
const initialState = [];
// const API_KEY = 'b748e1c2a10434b969fb13060689a0a8';
// const baseUrl = (lat, lon, API_KEY) => `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
// const allCountriesUrl = 'https://restcountries.com/v3.1/region/ame';

export const fetchNa = () => async (dispatch) => {
  const connect = await fetch('https://restcountries.com/v3.1/region/ame');
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.map((item) => {
    const container = {
      country: item.name.common,
      population: item.population,
      capital: item.capital[0],
      region: item.subregion,
      flags: item.flags.png,
      latlng: item.latlng,
    };
    return container;
  });
  const northAmerica = dataArray.filter((item) => item.region === 'North America');
  dispatch({
    type: FETCH_NA,
    payload: northAmerica,
  });
};

export const fetchCa = () => async (dispatch) => {
  const connect = await fetch('https://restcountries.com/v3.1/region/ame');
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.map((item) => {
    const container = {
      country: item.name.common,
      population: item.population,
      capital: item.capital[0],
      region: item.subregion,
      flags: item.flags.png,
      latlng: item.latlng,
    };
    return container;
  });
  const centralAmerica = dataArray.filter((item) => item.region === 'Central America');
  dispatch({
    type: FETCH_CA,
    payload: centralAmerica,
  });
};

export const fetchSa = () => async (dispatch) => {
  const connect = await fetch('https://restcountries.com/v3.1/region/ame');
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.map((item) => {
    const container = {
      country: item.name.common,
      population: item.population,
      capital: item.capital[0],
      region: item.subregion,
      flags: item.flags.png,
      latlng: item.latlng,
    };
    return container;
  });
  const southAmerica = dataArray.filter((item) => item.region === 'South America');
  dispatch({
    type: FETCH_SA,
    payload: southAmerica,
  });
};

export const fetchTc = () => async (dispatch) => {
  const connect = await fetch('https://restcountries.com/v3.1/region/ame');
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.map((item) => {
    const container = {
      country: item.name.common,
      population: item.population,
      capital: item.capital[0],
      region: item.subregion,
      flags: item.flags.png,
      latlng: item.latlng,
    };
    return container;
  });
  const theCaribbean = dataArray.filter((item) => item.region === 'Caribbean');
  dispatch({
    type: FETCH_TC,
    payload: theCaribbean,
  });
};

export function reducerNa(state = initialState, action) {
  switch (action.type) {
    case FETCH_NA:
      return action.payload;
    default:
      return state;
  }
}

export function reducerCa(state = initialState, action) {
  switch (action.type) {
    case FETCH_CA:
      return action.payload;
    default:
      return state;
  }
}

export function reducerSa(state = initialState, action) {
  switch (action.type) {
    case FETCH_SA:
      return action.payload;
    default:
      return state;
  }
}

export function reducerTc(state = initialState, action) {
  switch (action.type) {
    case FETCH_TC:
      return action.payload;
    default:
      return state;
  }
}

// export const fetchCountries = () => async (dispatch) => {
//   const connect = await fetch(allCountriesUrl);
//   const res = await connect.json().then((dataObject) => dataObject);
//   dispatch({
//     type: FETCH_API,
//     payload: res,
//   });
// };

// export const fetchCountries = () => async (dispatch) => {
//   const connect = await fetch(baseUrl(24.8091, 107.3940, API_KEY));
//   const res = await connect.json().then((dataObject) => dataObject);
//   dispatch({
//     type: FETCH_API,
//     payload: res,
//   });
// };

