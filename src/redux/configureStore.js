import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  reducerNa,
  reducerCa,
  reducerSa,
  reducerTc,
  fetchNa,
  fetchCa,
  fetchSa,
  fetchTc,
} from './countries/fetchData';
import { reducerApApi } from './air-pollution/fetchAPI';

const store = configureStore({
  reducer: {
    northAmerica: reducerNa,
    centralAmerica: reducerCa,
    southAmerica: reducerSa,
    theCaribbean: reducerTc,
    apApi: reducerApApi,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => { store.getState(); });
store.dispatch(fetchNa());
store.dispatch(fetchCa());
store.dispatch(fetchSa());
store.dispatch(fetchTc());

export default store;
